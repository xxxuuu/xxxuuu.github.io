---
title: "从 Linux 内核看读写锁设计"
description: "前段时间看了《Linux内核设计与实现》，第 10 章「内核同步方法」中提到了几种内核中的读写锁。它们分别代表了几种比较典型的读写锁设计，非常值得学习，这里记录一下，讨论是基于 2.6 内核和 x86 体系结构的基础上进行的"
date: "2024-01-04"
tags:
  - "Linux"
  - "操作系统"
canonical: "https://xxxuuu.me/post/kernel-rwlock"
---

前段时间看了《Linux内核设计与实现》，第 10 章「内核同步方法」中提到了几种内核中的读写锁。它们分别代表了几种比较典型的读写锁设计，非常值得学习，这里记录一下，讨论是基于 2.6 内核和 x86 体系结构的基础上进行的

## 读/写自旋锁

内核代码中，要定义读/写自旋锁，通过下面的宏进行初始化：

```c
DEFINE_RWLOCK(mr_rwlock);
```

使用上读锁和写锁是分开加锁的

```c
read_lock(&mr_rwlock);
// 只读临界区
read_unlock(&mr_rwlock);

write_lock(&mr_rwlock);
// 读写临界区
write_unlock(&mr_rwlock);
```

**不能**像这样将一个读锁升级成写锁，这会导致死锁；并且写锁也是不可重入的：

```c
read_lock(&mr_rwlock);
write_lock(&mr_rwlock);
```



读/写自旋锁的汇编级别实现比较类似信号量，都是在寄存器上对值做增减，但为了区分读锁和写锁，读锁是固定减 1，写锁则是固定减去一个很大的 magic number，通过结果值比较就能判断锁持有情况

代码分别位于 [include/asm-x86\_64/rwlock.h](https://elixir.bootlin.com/linux/v2.6.0/source/include/asm-x86_64/rwlock.h) 和 [/include/asm-x86\_64/spinlock.h](https://elixir.bootlin.com/linux/v2.6.0/source/include/asm-x86_64/spinlock.h) 中，这两块涉及的核心代码融合一下大致如下：

```c
#define RW_LOCK_BIAS 0x01000000

// 初始化时设置这个值为 magic number
#define rwlock_init(x)	do { *(x) = RW_LOCK_UNLOCKED; } while(0)

// 获取读锁
// 将eax寄存器指向的地址，也就是变量rw的值减1（subl $1）
// 根据结果是否小于0（js 2f）做跳转，小于0就去调用传入的helper做获取失败的处理
// 没有写锁的情况下是不会小于0的，不可能有这么多读者能让它减到0，所以不小于0就是获取成功
#define __build_read_lock_ptr(rw, helper)   \
	asm volatile(LOCK "subl $1,(%0)\n\t" \ 
		     "js 2f\n" \ 
		     "1:\n" \
		    LOCK_SECTION_START("") \
		     "2:\tcall " helper "\n\t" \
		     "jmp 1b\n" \
		    LOCK_SECTION_END \
		     ::"a" (rw) : "memory")

// 传入的helper位于arch/i386/kernel/semaphore.c
// 这里就是一个自旋的逻辑，持续操作rw直到它是大于等于0的，相当于:
// 
// lock_failed:
// rw++;
// while(rw < 1) {}
// rw--;
// if(rw < 0) goto lock_failed;
// 
// 这里结尾还要判断一次，是因为前面的操作整体上不是原子或互斥的，所以decl后要再check一下
asm(
".text\n"
".align	4\n"
".globl	__read_lock_failed\n"
"__read_lock_failed:\n\t"
	LOCK "incl	(%eax)\n"
"1:	rep; nop\n\t"
	"cmpl	$1,(%eax)\n\t"
	"js	1b\n\t"
	LOCK "decl	(%eax)\n\t"
	"js	__read_lock_failed\n\t"
	"ret"
);

// 获取写锁
// eax寄存器指向的地址值，也就是rw减去magic number
// 判断结果是否刚好为0（jnz 2f），不是则说明有读锁在占用，跳转到helper调用
#define __build_write_lock_ptr(rw, helper) \
	asm volatile(LOCK "subl $" RW_LOCK_BIAS_STR ",(%0)\n\t" \
		     "jnz 2f\n" \
		     "1:\n" \
		     LOCK_SECTION_START("") \
		     "2:\tcall " helper "\n\t" \
		     "jmp 1b\n" \
		     LOCK_SECTION_END \
		     ::"a" (rw) : "memory")

// 写锁传入的helper同样位于arch/i386/kernel/semaphore.c
// 逻辑和读锁的基本一样
asm(
".text\n"
".align	4\n"
".globl	__write_lock_failed\n"
"__write_lock_failed:\n\t"
	LOCK "addl	$" RW_LOCK_BIAS_STR ",(%eax)\n"
"1:	rep; nop\n\t"
	"cmpl	$" RW_LOCK_BIAS_STR ",(%eax)\n\t"
	"jne	1b\n\t"
	LOCK "subl	$" RW_LOCK_BIAS_STR ",(%eax)\n\t"
	"jnz	__write_lock_failed\n\t"
	"ret"
);

// 解锁时就是加上1或magic number
#define _raw_read_unlock(rw) asm volatile("lock ; incl %0" :"=m" ((rw)->lock) : : "memory")
#define _raw_write_unlock(rw)	asm volatile("lock ; addl $" RW_LOCK_BIAS_STR ",%0":"=m" ((rw)->lock) : : "memory")
```

可以看出，读/写自旋锁是**读优先**的，会导致写饥饿。当有一个或多个读者持有读锁时，写操作无法获取锁，如果此时读锁被长时间占有，写锁将一直自旋等待，此时自旋会导致一个核心上的高昂开销



这里有一个处理上的细节，在真正开始自旋获取到写锁之前，就已经互斥了（减去 magic number），这时候新的读锁是无法获取的，这避免了写锁和读锁的争抢，能稍微缓解下写饥饿问题，例如这样的情况：

```plain
                            TIME
─────────────────────────────────────────────────────────►
 ┌──────────────┐
 │    reader    │
 └──────────────┘
     ┌──────────┬────────────────────┐
     │   spin   │       writer       │
     └──────────┴────────────────────┘
           ┌─────────────────────────┬───────────────┐
           │           spin          │     reader    │
           └─────────────────────────┴───────────────┘
                        ┌────────────┬───────────┐
                        │    spin    │   reader  │
                        └────────────┴───────────┘
```



## 读/写信号量

读/写信号量的使用上和读/写自旋锁是类似的，但功能上要强大一些，分别支持静态和动态的初始化方法

```c
// 静态定义
static DECLARE_RWSEM(name);
// 动态定义
init_rwsem(struct rw_semaphore *sem);
```

读/写信号量支持 trylock 操作和动态地将写锁降级为读锁

```c
static DECLARE_RWSEM(mr_rwsem);

down_read(&mr_rwsem);
// 只读临界区
up_read(&mr_rwsem);

down_write(&mr_rwsem);
// 读写临界区
up_write(&mr_rwsem);

down_write(&mr_rwsem);
// 读写临界区
downgrade_write(&mr_rwsem); // 写锁降级读锁
// 只读临界区
up_read(&mr_rwsem);
```



[include/asm-x86\_64/rwsem.h](https://elixir.bootlin.com/linux/v2.6.0/source/include/asm-x86_64/rwsem.h#L99) 中定义了汇编级别上的实现，和前面读/写自旋锁是类似的，但没有自旋，这里就不细说，内核源码这里也直接附带注释了：

```c
#define RWSEM_UNLOCKED_VALUE		  0x00000000
#define RWSEM_ACTIVE_BIAS		      0x00000001
#define RWSEM_ACTIVE_MASK		      0x0000ffff
#define RWSEM_WAITING_BIAS		    (-0x00010000)
#define RWSEM_ACTIVE_READ_BIAS		RWSEM_ACTIVE_BIAS
#define RWSEM_ACTIVE_WRITE_BIAS		(RWSEM_WAITING_BIAS + RWSEM_ACTIVE_BIAS)

/*
 * lock for reading
 */
static inline void __down_read(struct rw_semaphore *sem)
{
	__asm__ __volatile__(
		"# beginning down_read\n\t"
LOCK_PREFIX	"  incl      (%%rdi)\n\t" /* adds 0x00000001, returns the old value */
		"  js        2f\n\t" /* jump if we weren't granted the lock */
		"1:\n\t"
		LOCK_SECTION_START("") \
		"2:\n\t"
		"  call      rwsem_down_read_failed_thunk\n\t"
		"  jmp       1b\n"
		LOCK_SECTION_END \
		"# ending down_read\n\t"
		: "+m"(sem->count)
		: "D"(sem)
		: "memory", "cc");
}

/*
 * lock for writing
 */
static inline void __down_write(struct rw_semaphore *sem)
{
	int tmp;

	tmp = RWSEM_ACTIVE_WRITE_BIAS;
	__asm__ __volatile__(
		"# beginning down_write\n\t"
LOCK_PREFIX	"  xaddl      %0,(%%rdi)\n\t" /* subtract 0x0000ffff, returns the old value */
		"  testl     %0,%0\n\t" /* was the count 0 before? */
		"  jnz       2f\n\t" /* jump if we weren't granted the lock */
		"1:\n\t"
		LOCK_SECTION_START("")
		"2:\n\t"
		"  call      rwsem_down_write_failed_thunk\n\t"
		"  jmp       1b\n"
		LOCK_SECTION_END
		"# ending down_write"
		: "=&r" (tmp) 
		: "0"(tmp), "D"(sem)
		: "memory", "cc");
}

/*
 * unlock after reading
 */
static inline void __up_read(struct rw_semaphore *sem)
{
	__s32 tmp = -RWSEM_ACTIVE_READ_BIAS;
	__asm__ __volatile__(
		"# beginning __up_read\n\t"
LOCK_PREFIX	"  xaddl      %[tmp],(%%rdi)\n\t" /* subtracts 1, returns the old value */
		"  js        2f\n\t" /* jump if the lock is being waited upon */
		"1:\n\t"
		LOCK_SECTION_START("")
		"2:\n\t"
		"  decw      %w[tmp]\n\t" /* do nothing if still outstanding active readers */
		"  jnz       1b\n\t"
		"  call      rwsem_wake_thunk\n\t"
		"  jmp       1b\n"
		LOCK_SECTION_END
		"# ending __up_read\n"
		: "+m"(sem->count), [tmp] "+r" (tmp)
		: "D"(sem)
		: "memory", "cc");
}

/*
 * unlock after writing
 */
static inline void __up_write(struct rw_semaphore *sem)
{
	unsigned tmp; 
	__asm__ __volatile__(
		"# beginning __up_write\n\t"
		"  movl     %[bias],%[tmp]\n\t"
LOCK_PREFIX	"  xaddl     %[tmp],(%%rdi)\n\t" /* tries to transition 0xffff0001 -> 0x00000000 */
		"  jnz       2f\n\t" /* jump if the lock is being waited upon */
		"1:\n\t"
		LOCK_SECTION_START("")
		"2:\n\t"
		"  decw      %w[tmp]\n\t" /* did the active count reduce to 0? */
		"  jnz       1b\n\t" /* jump back if not */
		"  call      rwsem_wake_thunk\n\t"
		"  jmp       1b\n"
		LOCK_SECTION_END
		"# ending __up_write\n"
		: "+m"(sem->count), [tmp] "=r" (tmp)
		: "D"(sem), [bias] "i"(-RWSEM_ACTIVE_WRITE_BIAS)
		: "memory", "cc");
}
```



信号量是睡眠锁，读锁和写锁在获取锁失败时最后都会进入到 `rwsem_down_failed_common`（位于 [lib/rwsem.c](https://elixir.bootlin.com/linux/v2.6.0/source/lib/rwsem.c#L123)） 中，这里会将进程加入等待队列中，然后重新调度进程

```c
static inline struct rw_semaphore *rwsem_down_failed_common(struct rw_semaphore *sem,
								 struct rwsem_waiter *waiter,
								 signed long adjustment)
{
	struct task_struct *tsk = current;
	signed long count;

	set_task_state(tsk,TASK_UNINTERRUPTIBLE);

	/* set up my own style of waitqueue */
	spin_lock(&sem->wait_lock);
	waiter->task = tsk;

	list_add_tail(&waiter->list,&sem->wait_list);

	/* note that we're now waiting on the lock, but no longer actively read-locking */
	count = rwsem_atomic_update(adjustment,sem);

	/* if there are no longer active locks, wake the front queued process(es) up
	 * - it might even be this process, since the waker takes a more active part
	 */
	if (!(count & RWSEM_ACTIVE_MASK))
		sem = __rwsem_do_wake(sem,1);

	spin_unlock(&sem->wait_lock);

	/* wait to be given the lock */
	for (;;) {
		if (!waiter->flags)
			break;
		schedule();
		set_task_state(tsk, TASK_UNINTERRUPTIBLE);
	}

	tsk->state = TASK_RUNNING;

	return sem;
}
```



值得一提的是 `trylock` 和 `downgrade_write` 操作，这两个操作是读/写自旋锁中没有的

两个 `trylock` 是类似的，都是用 `cmpxchg` 指令来做 CAS（compare-and-swap） 操作。写锁的 `trylock` 比较简单，因为是互斥的，所以只需要对初始值做 CAS 即可。而读锁可能被持有多个，所以它的 `trylock` 需要先将 `sem->count` 赋值给 `tmp`，再自增 `tmp` ，利用 `tmp` 的值进行 CAS

```c
/*
 * trylock for reading -- returns 1 if successful, 0 if contention
 */
static inline int __down_read_trylock(struct rw_semaphore *sem)
{
	__s32 result, tmp;
	__asm__ __volatile__(
		"# beginning __down_read_trylock\n\t"
		"  movl      %0,%1\n\t"
		"1:\n\t"
		"  movl	     %1,%2\n\t"
		"  addl      %3,%2\n\t"
		"  jle	     2f\n\t"
LOCK_PREFIX	"  cmpxchgl  %2,%0\n\t"
		"  jnz	     1b\n\t"
		"2:\n\t"
		"# ending __down_read_trylock\n\t"
		: "+m"(sem->count), "=&a"(result), "=&r"(tmp)
		: "i"(RWSEM_ACTIVE_READ_BIAS)
		: "memory", "cc");
	return result>=0 ? 1 : 0;
}

/*
 * trylock for writing -- returns 1 if successful, 0 if contention
 */
static inline int __down_write_trylock(struct rw_semaphore *sem)
{
	signed long ret = cmpxchg(&sem->count,
				  RWSEM_UNLOCKED_VALUE, 
				  RWSEM_ACTIVE_WRITE_BIAS);
	if (ret == RWSEM_UNLOCKED_VALUE)
		return 1;
	return 0;
}
```

downgrade\_write 的实现则类似写锁解锁，然后判断是否有必要唤醒等待队列中的项，这里其实和写锁解锁（`up_write`）的主要差别就是给 `sem->count` 加上的偏移量少了 1（可以回去看前面几个 `RWSEM_` 开头的宏定义），而这个 1 就是读锁占的值

```c
/*
 * downgrade write lock to read lock
 */
static inline void __downgrade_write(struct rw_semaphore *sem)
{
	__asm__ __volatile__(
		"# beginning __downgrade_write\n\t"
LOCK_PREFIX	"  addl      %[bias],(%%rdi)\n\t" /* transitions 0xZZZZ0001 -> 0xYYYY0001 */
		"  js        2f\n\t" /* jump if the lock is being waited upon */
		"1:\n\t"
		LOCK_SECTION_START("")
		"2:\n\t"
		"  call	     rwsem_downgrade_thunk\n"
		"  jmp       1b\n"
		LOCK_SECTION_END
		"# ending __downgrade_write\n"
		: "=m"(sem->count)
		: "D"(sem), [bias] "i"(-RWSEM_WAITING_BIAS), "m"(sem->count)
		: "memory", "cc");
}

/*
 * downgrade a write lock into a read lock
 * - caller incremented waiting part of count, and discovered it to be still negative
 * - just wake up any readers at the front of the queue
 */
struct rw_semaphore *rwsem_downgrade_wake(struct rw_semaphore *sem)
{
	rwsemtrace(sem,"Entering rwsem_downgrade_wake");

	spin_lock(&sem->wait_lock);

	/* do nothing if list empty */
	if (!list_empty(&sem->wait_list))
		sem = __rwsem_do_wake(sem,0);

	spin_unlock(&sem->wait_lock);

	rwsemtrace(sem,"Leaving rwsem_downgrade_wake");
	return sem;
}
```

总结一下，读/写信号量和读/写自旋锁类似，两者语义上是相同的，也都是读优先的，只不过信号量是睡眠锁，当有长时间获取不到锁的情况时，不会导致过多的 CPU 开销



## 顺序锁

顺序锁和前面两者有个重要的区别，顺序锁是**写优先**的，让我们来分析下它是如何实现的

首先还是使用方式上：

```c
// 定义一个顺序锁
seqlock_t mr_seq_lock = DEFINE_SEQLOCK(mr_seq_lock);

write_seqlock(&mr_seq_lock);
// 读写临界区
write_sequnlock(&mr_seq_lock);

// 读锁的使用有较大区别
unsigned long seq;
do {
	seq = read_seqbegin(&mr_seq_lock);
  // 读取数据...
} while (read_seqretry(&mr_seq_lock, seq));
```

一个使用例子是内核的 jiffies，它存储了机器启动到当前的时钟节拍，每次时钟中断时都会更新这个值，所以是一个高频写入的场景，`get_jiffies_64()` 函数用来获取这个值，它的实现是这样的

```c
u64 get_jiffies_64(void)
{
	unsigned long seq;
	u64 ret;

	do {
		seq = read_seqbegin(&xtime_lock);
		ret = jiffies_64;
	} while (read_seqretry(&xtime_lock, seq));
	return ret;
}
```

顺序锁在读取时需要一个循环，这是为了判断在这个过程中是否有发生写入，如果没有，那么读取就是安全的，否则需要重试

实现上，代码位于 [/include/linux/seqlock.h](https://elixir.bootlin.com/linux/v2.6.0/source/include/linux/seqlock.h#L50)，有比较清晰的注释：

```c
#define SEQLOCK_UNLOCKED { 0, SPIN_LOCK_UNLOCKED }
#define seqlock_init(x)	do { *(x) = (seqlock_t) SEQLOCK_UNLOCKED; } while (0)

/* Lock out other writers and update the count.
 * Acts like a normal spin_lock/unlock.
 * Don't need preempt_disable() because that is in the spin_lock already.
 */
static inline void write_seqlock(seqlock_t *sl)
{
	spin_lock(&sl->lock);
	++sl->sequence;
	smp_wmb();			
}	

static inline void write_sequnlock(seqlock_t *sl) 
{
	smp_wmb();
	sl->sequence++;
	spin_unlock(&sl->lock);
}

static inline int write_tryseqlock(seqlock_t *sl)
{
	int ret = spin_trylock(&sl->lock);

	if (ret) {
		++sl->sequence;
		smp_wmb();			
	}
	return ret;
}

/* Start of read calculation -- fetch last complete writer token */
static inline unsigned read_seqbegin(const seqlock_t *sl)
{
	unsigned ret = sl->sequence;
	smp_rmb();
	return ret;
}

/* Test if reader processed invalid data.
 * If initial values is odd, 
 *	then writer had already started when section was entered
 * If sequence value changed
 *	then writer changed data while in section
 *    
 * Using xor saves one conditional branch.
 */
static inline int read_seqretry(const seqlock_t *sl, unsigned iv)
{
	smp_rmb();
	return (iv & 1) | (sl->sequence ^ iv);
}
```

可以看到，顺序锁是基于一个自旋锁实现的。但额外依赖一个序列计数器，当获取写锁时，这个序列值会增加。读取数据时要先调用 `read_seqbegin`，它会返回这个序列值，读取完成后通过 `read_seqretry` 检查传入的值 `iv`，满足以下两个条件则说明读是安全的：

-   如果 `iv` 是偶数（初始值为 0，写锁会加 1）则说明不是处在一个写操作进行的过程中
-   `iv` 和序列值相同（相同值异或结果为 0）说明没有写操作发生过

这两者都满足，读取的值就是有效的



所以，顺序锁是一种**乐观锁**，是不存在「读锁」的，而是通过类似版本号的机制来读，因此只要没有其他写者，随时都可以获取到写锁，以此实现写优先
