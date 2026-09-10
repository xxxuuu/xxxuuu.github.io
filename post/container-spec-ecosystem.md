---
title: "容器标准和生态"
date: "2023-07-12"
tags:
  - "Cloud Native"
canonical: "https://xxxuuu.me/post/container-spec-ecosystem"
---

## OCI（Open Container Initiative）

[OCI（Open Container Initiative，开放容器提议）](https://opencontainers.org/about/overview/)，是围绕容器镜像格式和运行时设立的标准，在 2015 年 6 月推出。基于 Docker 捐赠的 [runC](https://github.com/opencontainers/runc) 实现之上发展而来

其中，镜像标准（[image-spec](https://github.com/opencontainers/image-spec)）规定了镜像如何组织文件层，镜像配置文件格式

运行时标准（[runtime-spec](https://github.com/opencontainers/runtime-spec)）规定了容器的生命周期和需要支持的操作、配置项等

2022 年 5 月新增加了分发标准（[distribution-spec](https://github.com/opencontainers/distribution-spec)），规定了镜像分发的 API 协议，包括认证方式、Push、Pull、内容发现、管理等

### 镜像组成

OCI 标准中，镜像由 index，config 和各个 layer 组成、

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F549cfd4e-8dc3-44e3-8a89-9874d88a18a3%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466RICK6M5T%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075610Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJGMEQCIBRk5kW82vA7%252Bpue632YOhQXxHeT%252BXD1jaJymWxDV6wiAiB%252FKCbBvnAlvLi9qqddefjoDGa0lLOmfJGWe2Qu6M2nMSqIBAiA%252F%252F%252F%252F%252F%252F%252F%252F%252F%252F8BEAAaDDYzNzQyMzE4MzgwNSIMECkSW0mYnK6ufsK9KtwDs80f9NQSvM3VUl%252FhReXqWKrQplxOriPS4eRaq1LPHjnF8JeQu2nF7WW5zPJna2UoH7EcmdqHghuS5F1urqkD5Q69b5GBHOSnlF6klV%252FQ5%252B788nV83faqy6OmWVH8e5Ws65JsNOyDRxn3%252BPvP78pfTysG5gcp2BE%252B88hk2K3k7eJkXcE1LMghYb4ASOSOWV2xeRn8CRUWan9T0BWv1NlaJk%252B%252Ffq%252BPkxUzN%252Fp3PIyMvK%252F4ywO8qyF6MrMPPSzS5VrKkyYLDRXIpu9PVsrZVm2aHh1tSOiT18ZcCXRW87u5NT%252BuxCUGT5f%252F3nToihgZmAbrMdtbmLg3iShmiSK6wZHDpG8Ydv1oxoMrkH%252FBPUbfHeBC9ZvpVmV2nsv%252BR91uADAYyE58T85khDKlD92fTu%252Fj4xdre%252BjL2LQSwU%252FIBT%252B7Nf20tnvZdSQN%252Byz7GamNkhoPBJ2tfmqfRtfTjqJSyokk1Z7AgkAbg1US0EMHAEQNHvbPETYWVce8ekKV18tHW22JVPgOKdYEXejJx5yRyTKFxSHocw%252BwKLKh%252F4EX29K3s%252F416P7xsL8%252BbqGT6%252Ftr9Lo4PdCP8AQNTGQowH3uUv4GCjUCGpTc%252FgrGCbHFiQsFGo2bvCPdHQ9LtGZE3qAw0KqJ1QY6pgEPxQW%252BUBF1CX%252FSIv3yW9AKU6NoSBiChBAzOkP%252B5p3I%252FAL0Y%252B4zgy0gCQSuBm3yveD7p5bOOI6%252FqkgQ1qF7nhcoHZWxrvUlQXj5j6KXMkMlRTz2JIdByKZSZqBM4sGdCt6YE67xNfQqpYek5FVieRU%252BG5zZyOjXyAz2lL8EHgESEEDGOXj15S2WddIPXyuafG%252BPZEKgBsf21wpHDx%252FF7jMrOomX0lE8%26X-Amz-Signature%3D6ba8c9689de4657c6970d269e3adc9d01a5452e91e80e3964a8bc3eb516ad2f1%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=5e5ada37-8014-4492-b098-2cf0f4aab0e0)

拉取一个 nginx 镜像并解压，可以看到其目录格式

```bash
$ docker pull nginx
$ docker image save nginx -o nginx.tar
$ mkdir nginx-image
$ tar -C nginx-image -xvf nginx.tar
$ tree nginx-image/
nginx-image/
├── 180ddd9cc15d32f0c1d5f85cf442ef1179f21ae197b60bf086b0e8c7ef153737
│   ├── VERSION
│   ├── json
│   └── layer.tar
├── 2002d33a54f72d1333751d4d1b4793a60a635eac6e94a98daf0acea501580c4f.json
├── 3cba2048aa0f37f06b8b1a3949e6b67da78d9f49fb6d5f34fefa328a304dfe8e
│   ├── VERSION
│   ├── json
│   └── layer.tar
├── 570d178d9aab5e7b03bdf17302b91cece28924d72f204567dd6c2fcb1667e883
│   ├── VERSION
│   ├── json
│   └── layer.tar
├── 5839a53cafa501af1381d6f0db2084e32bb64d0a1461a278f587cc0ea4fc62e2
│   ├── VERSION
│   ├── json
│   └── layer.tar
├── 664733ad6a589f5aa51e830e2a10c0768b854f28cc278316938c00ce1c4c60e2
│   ├── VERSION
│   ├── json
│   └── layer.tar
├── 907ca8c9f37f4bb34cef8feea392fff0d811b7d1fff826dc84c8330c0b158227
│   ├── VERSION
│   ├── json
│   └── layer.tar
├── ae5db48f55baf22a5d27ab7965647d55c3f6aba87733e5f0ae57188d956a8a7b
│   ├── VERSION
│   ├── json
│   └── layer.tar
├── manifest.json
└── repositories

8 directories, 24 files
```

Docker 镜像并不符合 OCI 镜像标准，但 OCI 的镜像标准基于 Docker 镜像标准，因此两者在结构上是类似的，有一定对应关系

使用 [skopeo](https://github.com/containers/skopeo) 可以将 Docker 镜像转化为 OCI 镜像

```bash
$ skopeo copy docker-archive:nginx.tar oci:nginx-oci-image
$ tree nginx-oci-image
nginx-oci-image
├── blobs
│   └── sha256
│       ├── 365ede46b010c470bbbd13f6bacc0df1700116f4c3a01f25a0fab726b7860e31
│       ├── 50c4949e5433b622681d55d92f68bc289ed0b91536d07b0ed88d057fd95ba2bd
│       ├── 55bc6f293903816a086b9803b0fac7d6e854976aa96cfaacd66b39b4754415d0
│       ├── 7a33d678a8761d2b10b60fe4da32e70e201d65550d2601f9b2e3e5fb4cc6e115
│       ├── 861c679dd19193ec028cddb97f5b1e18738ec0525617ff698df4a055606af93d
│       ├── af84cea3992c73a86ca5b3fcb8043f0964308be3db3dbc93222c589b15e90ba7
│       ├── ba28188e316f3a7d8b65f6496a57cb9ce5f59b636ed0b0fae8bf564723321448
│       ├── c26fc88390de90988b10de0590c08942dd7b1346c9ec912e9a0c763bc6de1e9e
│       └── f0baa6626451c47bb1cb7f72d5cb0e732283a231fa4cb001a36b55e5fc31640f
├── index.json
└── oci-layout

3 directories, 11 files
```

index.json 是 [image index](https://github.com/opencontainers/image-spec/blob/main/image-index.md)，用于索引 manifest 文件，跨平台和架构的镜像可能对每一个平台都有一个 manifest 文件

```bash
$ cat nginx-oci-image/index.json | json_pp
{
   "manifests" : [
      {
         "digest" : "sha256:c26fc88390de90988b10de0590c08942dd7b1346c9ec912e9a0c763bc6de1e9e",
         "mediaType" : "application/vnd.oci.image.manifest.v1+json",
         "size" : 1338
      }
   ],
   "schemaVersion" : 2
}
```

`manifests.digest` 中就是 manifest 文件摘要值，同时也是文件名，由此可以很快找到 manifest 文件。[image manifest](https://github.com/opencontainers/image-spec/blob/master/manifest.md) 索引了镜像的配置和 layer 层文件位置及其类型。可以看出，配置是一个 JSON 文件，而每一层是进行压缩后存储的。

```bash
$ cat nginx-oci-image/blobs/sha256/c26fc88390de90988b10de0590c08942dd7b1346c9ec912e9a0c763bc6de1e9e | json_pp
{
   "config" : {
      "digest" : "sha256:50c4949e5433b622681d55d92f68bc289ed0b91536d07b0ed88d057fd95ba2bd",
      "mediaType" : "application/vnd.oci.image.config.v1+json",
      "size" : 7075
   },
   "layers" : [
      {
         "digest" : "sha256:861c679dd19193ec028cddb97f5b1e18738ec0525617ff698df4a055606af93d",
         "mediaType" : "application/vnd.oci.image.layer.v1.tar+gzip",
         "size" : 29922714
      },
      {
         "digest" : "sha256:f0baa6626451c47bb1cb7f72d5cb0e732283a231fa4cb001a36b55e5fc31640f",
         "mediaType" : "application/vnd.oci.image.layer.v1.tar+gzip",
         "size" : 39120911
      },
      {
         "digest" : "sha256:ba28188e316f3a7d8b65f6496a57cb9ce5f59b636ed0b0fae8bf564723321448",
         "mediaType" : "application/vnd.oci.image.layer.v1.tar+gzip",
         "size" : 630
      },
      {
         "digest" : "sha256:7a33d678a8761d2b10b60fe4da32e70e201d65550d2601f9b2e3e5fb4cc6e115",
         "mediaType" : "application/vnd.oci.image.layer.v1.tar+gzip",
         "size" : 975
      },
      {
         "digest" : "sha256:af84cea3992c73a86ca5b3fcb8043f0964308be3db3dbc93222c589b15e90ba7",
         "mediaType" : "application/vnd.oci.image.layer.v1.tar+gzip",
         "size" : 376
      },
      {
         "digest" : "sha256:365ede46b010c470bbbd13f6bacc0df1700116f4c3a01f25a0fab726b7860e31",
         "mediaType" : "application/vnd.oci.image.layer.v1.tar+gzip",
         "size" : 1234
      },
      {
         "digest" : "sha256:55bc6f293903816a086b9803b0fac7d6e854976aa96cfaacd66b39b4754415d0",
         "mediaType" : "application/vnd.oci.image.layer.v1.tar+gzip",
         "size" : 1439
      }
   ],
   "mediaType" : "application/vnd.oci.image.manifest.v1+json",
   "schemaVersion" : 2
}
```

[image configuration](https://github.com/opencontainers/image-spec/blob/main/config.md) 描述了镜像所属的平台，配置（类似在 Dockerfile 中定义的环境变量、端口、ENTRYPOINT、CMD 等），以及各个层的历史记录，`created_by` 是创建层的命令，`empty_layer` 表示该层是否导致文件系统变化。最后是各个层未压缩内容的摘要（`diff_ids`）

```bash
$ cat nginx-oci-image/blobs/sha256/50c4949e5433b622681d55d92f68bc289ed0b91536d07b0ed88d057fd95ba2bd | json_pp
{
   "architecture" : "arm64",
   "config" : {
      "Cmd" : [
         "nginx",
         "-g",
         "daemon off;"
      ],
      "Entrypoint" : [
         "/docker-entrypoint.sh"
      ],
      "Env" : [
         "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
         "NGINX_VERSION=1.25.1",
         "NJS_VERSION=0.7.12",
         "PKG_RELEASE=1~bookworm"
      ],
      "ExposedPorts" : {
         "80/tcp" : {}
      },
      "Labels" : {
         "maintainer" : "NGINX Docker Maintainers <docker-maint@nginx.com>"
      },
      "StopSignal" : "SIGQUIT"
   },
   "created" : "2023-07-04T04:07:41.151938228Z",
   "history" : [
      {
         "created" : "2023-07-04T01:57:35.692631089Z",
         "created_by" : "/bin/sh -c #(nop) ADD file:71fd66666294148382f2e6a09ae5e277d4c4e9c74402ab64b693a79387b67a09 in / "
      },
      {
         "created" : "2023-07-04T01:57:36.102524763Z",
         "created_by" : "/bin/sh -c #(nop)  CMD [\"bash\"]",
         "empty_layer" : true
      },
      {
         "created" : "2023-07-04T04:07:14.692138315Z",
         "created_by" : "/bin/sh -c #(nop)  LABEL maintainer=NGINX Docker Maintainers <docker-maint@nginx.com>",
         "empty_layer" : true
      },
      {
         "created" : "2023-07-04T04:07:14.774865505Z",
         "created_by" : "/bin/sh -c #(nop)  ENV NGINX_VERSION=1.25.1",
         "empty_layer" : true
      },
      {
         "created" : "2023-07-04T04:07:14.852567081Z",
         "created_by" : "/bin/sh -c #(nop)  ENV NJS_VERSION=0.7.12",
         "empty_layer" : true
      },
      {
         "created" : "2023-07-04T04:07:14.931774163Z",
         "created_by" : "/bin/sh -c #(nop)  ENV PKG_RELEASE=1~bookworm",
         "empty_layer" : true
      },
      {
         "created" : "2023-07-04T04:07:40.172513807Z",
         "created_by" : "/bin/sh -c set -x     && groupadd --system --gid 101 nginx     && useradd --system --gid nginx --no-create-home --home /nonexistent --comment \"nginx user\" --shell /bin/false --uid 101 nginx     && apt-get update     && apt-get install --no-install-recommends --no-install-suggests -y gnupg1 ca-certificates     &&     NGINX_GPGKEY=573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62;     NGINX_GPGKEY_PATH=/usr/share/keyrings/nginx-archive-keyring.gpg;     export GNUPGHOME=\"$(mktemp -d)\";     found='';     for server in         hkp://keyserver.ubuntu.com:80         pgp.mit.edu     ; do         echo \"Fetching GPG key $NGINX_GPGKEY from $server\";         gpg1 --keyserver \"$server\" --keyserver-options timeout=10 --recv-keys \"$NGINX_GPGKEY\" && found=yes && break;     done;     test -z \"$found\" && echo >&2 \"error: failed to fetch GPG key $NGINX_GPGKEY\" && exit 1;     gpg1 --export \"$NGINX_GPGKEY\" > \"$NGINX_GPGKEY_PATH\" ;     rm -rf \"$GNUPGHOME\";     apt-get remove --purge --auto-remove -y gnupg1 && rm -rf /var/lib/apt/lists/*     && dpkgArch=\"$(dpkg --print-architecture)\"     && nginxPackages=\"         nginx=${NGINX_VERSION}-${PKG_RELEASE}         nginx-module-xslt=${NGINX_VERSION}-${PKG_RELEASE}         nginx-module-geoip=${NGINX_VERSION}-${PKG_RELEASE}         nginx-module-image-filter=${NGINX_VERSION}-${PKG_RELEASE}         nginx-module-njs=${NGINX_VERSION}+${NJS_VERSION}-${PKG_RELEASE}     \"     && case \"$dpkgArch\" in         amd64|arm64)             echo \"deb [signed-by=$NGINX_GPGKEY_PATH] https://nginx.org/packages/mainline/debian/ bookworm nginx\" >> /etc/apt/sources.list.d/nginx.list             && apt-get update             ;;         *)             echo \"deb-src [signed-by=$NGINX_GPGKEY_PATH] https://nginx.org/packages/mainline/debian/ bookworm nginx\" >> /etc/apt/sources.list.d/nginx.list                         && tempDir=\"$(mktemp -d)\"             && chmod 777 \"$tempDir\"                         && savedAptMark=\"$(apt-mark showmanual)\"                         && apt-get update             && apt-get build-dep -y $nginxPackages             && (                 cd \"$tempDir\"                 && DEB_BUILD_OPTIONS=\"nocheck parallel=$(nproc)\"                     apt-get source --compile $nginxPackages             )                         && apt-mark showmanual | xargs apt-mark auto > /dev/null             && { [ -z \"$savedAptMark\" ] || apt-mark manual $savedAptMark; }                         && ls -lAFh \"$tempDir\"             && ( cd \"$tempDir\" && dpkg-scanpackages . > Packages )             && grep '^Package: ' \"$tempDir/Packages\"             && echo \"deb [ trusted=yes ] file://$tempDir ./\" > /etc/apt/sources.list.d/temp.list             && apt-get -o Acquire::GzipIndexes=false update             ;;     esac         && apt-get install --no-install-recommends --no-install-suggests -y                         $nginxPackages                         gettext-base                         curl     && apt-get remove --purge --auto-remove -y && rm -rf /var/lib/apt/lists/* /etc/apt/sources.list.d/nginx.list         && if [ -n \"$tempDir\" ]; then         apt-get purge -y --auto-remove         && rm -rf \"$tempDir\" /etc/apt/sources.list.d/temp.list;     fi     && ln -sf /dev/stdout /var/log/nginx/access.log     && ln -sf /dev/stderr /var/log/nginx/error.log     && mkdir /docker-entrypoint.d"
      },
      {
         "created" : "2023-07-04T04:07:40.509711194Z",
         "created_by" : "/bin/sh -c #(nop) COPY file:7b307b62e82255f040c9812421a30090bf9abf3685f27b02d77fcca99f997911 in / "
      },
      {
         "created" : "2023-07-04T04:07:40.592126807Z",
         "created_by" : "/bin/sh -c #(nop) COPY file:5c18272734349488bd0c94ec8d382c872c1a0a435cca13bd4671353d6021d2cb in /docker-entrypoint.d "
      },
      {
         "created" : "2023-07-04T04:07:40.669169781Z",
         "created_by" : "/bin/sh -c #(nop) COPY file:d4375883ed5db364232ccf781e8ad28514cd005edb385d43dbfb984f2c63edb9 in /docker-entrypoint.d "
      },
      {
         "created" : "2023-07-04T04:07:40.748027972Z",
         "created_by" : "/bin/sh -c #(nop) COPY file:36429cfeeb299f9913b84ea136b004be12fbe4bb4f975a977a3608044e8bfa91 in /docker-entrypoint.d "
      },
      {
         "created" : "2023-07-04T04:07:40.825522699Z",
         "created_by" : "/bin/sh -c #(nop) COPY file:e57eef017a414ca793499729d80a7b9075790c9a804f930f1417e56d506970cf in /docker-entrypoint.d "
      },
      {
         "created" : "2023-07-04T04:07:40.903102418Z",
         "created_by" : "/bin/sh -c #(nop)  ENTRYPOINT [\"/docker-entrypoint.sh\"]",
         "empty_layer" : true
      },
      {
         "created" : "2023-07-04T04:07:40.983008834Z",
         "created_by" : "/bin/sh -c #(nop)  EXPOSE 80",
         "empty_layer" : true
      },
      {
         "created" : "2023-07-04T04:07:41.065899155Z",
         "created_by" : "/bin/sh -c #(nop)  STOPSIGNAL SIGQUIT",
         "empty_layer" : true
      },
      {
         "created" : "2023-07-04T04:07:41.151938228Z",
         "created_by" : "/bin/sh -c #(nop)  CMD [\"nginx\" \"-g\" \"daemon off;\"]",
         "empty_layer" : true
      }
   ],
   "os" : "linux",
   "rootfs" : {
      "diff_ids" : [
         "sha256:efd1965f1684506744544d66c57387a60bd89607480e2dbc89bf3e8a30081bc1",
         "sha256:c58d5a26ffa8db76c403fb4c29965689bb96d291f6b7973fcd2da7458e77b09f",
         "sha256:4e6bef96e37ee051573dda6c367adb7310ef7a87128ce00fcf0ce2cbd2d8779b",
         "sha256:ad6517b0c9140f029ee765885ec82f571513bc8db2f834aa1d204f67d61cad12",
         "sha256:7cd1e5cbf1244b4fcca08e842c7672aba5ead973c2a4532496278aa5846802a3",
         "sha256:45437bbd87f23643f7893993d62b4affddbdf91808ff8cd0530b301acbc5f120",
         "sha256:0a13d2aaa54c14621a732a3ffe6f25a487aa726529ad152c4174d2e741b7ef66"
      ],
      "type" : "layers"
   },
   "variant" : "v8"
}
```

如果对层进行解压，就可以得到里面文件系统的内容

```bash
$ mkdir rootfs
$ tar -zxvf nginx-oci-image/blobs/sha256/861c679dd19193ec028cddb97f5b1e18738ec0525617ff698df4a055606af93d -C rootfs/
$ tree rootfs -L 1
rootfs
├── bin -> usr/bin
├── boot
├── dev
├── etc
├── home
├── lib -> usr/lib
├── media
├── mnt
├── opt
├── proc
├── root
├── run
├── sbin -> usr/sbin
├── srv
├── sys
├── tmp
├── usr
└── var

19 directories, 0 files
```



### 运行时

runC 是纯粹的 runtime，OCI 的 runtime-spec 基于 runC 制定

要启动 runC（或其它符合 OCI runtime-spec 的运行时），需要一个 rootfs 和 `config.json`，rootfs 就是容器运行的文件系统，`config.json` 则定义了运行的配置

rootfs 可以从镜像 layer 中一层层解包合并得到。`config.json` 的一个可能示例如下：

```json
{
  "ociVersion": "0.1.0",
  "root": {
    "path": "rootfs",
    "readonly": true
  },
  "mounts": [
    {
      "destination": "/data",
      "type": "none",
      "source": "/volumes/testing",
      "options": ["rbind","rw"]
    }
  ],
  "process": {
    "env": [
      "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
      "TERM=xterm"
    ],
    "args": ["sh"]
  }
}
```

通过 `runc run` 即可启动容器，会自动读取路径下的 `config.json`。其中 `root.path` 指定了 rootfs 的路径

`config.json` 的配置和平常使用的 Docker 等基本都能大致对上，但 runC 是不包括网络实现的，通过 `runc exec` 进入容器内就可以发现只有一张 loop 网卡

这些部分是留给更高级的容器运行时去完成，例如可以在标准中生命周期的 `createContainer` 和 `start` 之间进行网卡创建，存储挂载等操作

runtime 这块还有一些有意思的实现，比如 [Kata](https://katacontainers.io/) 和 [gVisor](https://gvisor.dev/) 之类的内核容器，前者给容器跑了一个完整的 VMM（QEMU/KVM 等）来做内核隔离，后者给每个容器塞了一个 Go 写的模拟内核，重定向所有 syscall 过去，代替宿主机内核



### 一些历史

在早期，Docker 拥有容器领域的绝对领导权，但作为一个商业公司，这实际上引发了其它公司（Red Hat、Google 等）的不满和担忧

Google 也尝试过开源自身的容器方案，但未能成功。因此 Google 向 Docker 提议共同推动一个中立的容器运行时作为 Docker 项目的核心依赖，但没有得到 Docker 的同意



在 2015 年，Docker 公司的强势长期饱受社区诟病，为了表示诚意，Docker 和 Google、Red Hat、CoreOS 决定成立一个「中立」的基金会，共同制定一套容器的标准和规范，这套标准就是 OCI。Docker 也将自身的 libcontainer 捐出，改名为 runC，作为 OCI 标准制定的基础



Docker 作为当时容器的事实标准，本身并无多大动力去推进 OCI 的发展，OCI 也未能削弱 Docker 的地位。Google 和 Red Hat 利用自己在大规模集群和平台上的经验，又成立了 CNCF（Cloud Native Computing Foundation），以 Google 内部的 Borg 孵化出的 Kubernetes 项目为基础，从平台侧架空 Docker，从现在来看，这个战略非常成功，Docker Swarm 面对 Kubernetes 无疑是失败的，Swarm 项目被取消，Docker 企业版直接内置 Kubernetes，放弃开源社区竞争，进行商业化转型。现在，CNCF 涉及越来越多的领域，成为了云原生新的绝对权威



## 高级容器运行时

runC 只实现了 OCI 的 runtime-spec（这句话有点别扭，是先有的 runC，才有的 OCI），也就是说，它是无法处理镜像的，只负责运行进程和隔离。这是一种低级容器运行时，而且 OCI 也只专注核心的容器功能，网络、存储标准都没有进行定义（目前比较流行的网络和存储标准分别是 [CNI](https://github.com/containernetworking/cni) 和 [CSI](https://github.com/container-storage-interface/spec/blob/master/spec.md)）

更多时候，我们指的容器运行时是高级容器运行时，高级容器运行时最基本的功能就是能够将镜像处理成 rootfs 来传递给 runC 等低级运行时，这个过程中还要处理镜像的 layer 共享等很多问题。通常也会包括监控、日志、管理、API 等更多功能

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F7265c446-afe8-44ed-b5f3-a0ad2f7c4530%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466RICK6M5T%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075611Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJGMEQCIBRk5kW82vA7%252Bpue632YOhQXxHeT%252BXD1jaJymWxDV6wiAiB%252FKCbBvnAlvLi9qqddefjoDGa0lLOmfJGWe2Qu6M2nMSqIBAiA%252F%252F%252F%252F%252F%252F%252F%252F%252F%252F8BEAAaDDYzNzQyMzE4MzgwNSIMECkSW0mYnK6ufsK9KtwDs80f9NQSvM3VUl%252FhReXqWKrQplxOriPS4eRaq1LPHjnF8JeQu2nF7WW5zPJna2UoH7EcmdqHghuS5F1urqkD5Q69b5GBHOSnlF6klV%252FQ5%252B788nV83faqy6OmWVH8e5Ws65JsNOyDRxn3%252BPvP78pfTysG5gcp2BE%252B88hk2K3k7eJkXcE1LMghYb4ASOSOWV2xeRn8CRUWan9T0BWv1NlaJk%252B%252Ffq%252BPkxUzN%252Fp3PIyMvK%252F4ywO8qyF6MrMPPSzS5VrKkyYLDRXIpu9PVsrZVm2aHh1tSOiT18ZcCXRW87u5NT%252BuxCUGT5f%252F3nToihgZmAbrMdtbmLg3iShmiSK6wZHDpG8Ydv1oxoMrkH%252FBPUbfHeBC9ZvpVmV2nsv%252BR91uADAYyE58T85khDKlD92fTu%252Fj4xdre%252BjL2LQSwU%252FIBT%252B7Nf20tnvZdSQN%252Byz7GamNkhoPBJ2tfmqfRtfTjqJSyokk1Z7AgkAbg1US0EMHAEQNHvbPETYWVce8ekKV18tHW22JVPgOKdYEXejJx5yRyTKFxSHocw%252BwKLKh%252F4EX29K3s%252F416P7xsL8%252BbqGT6%252Ftr9Lo4PdCP8AQNTGQowH3uUv4GCjUCGpTc%252FgrGCbHFiQsFGo2bvCPdHQ9LtGZE3qAw0KqJ1QY6pgEPxQW%252BUBF1CX%252FSIv3yW9AKU6NoSBiChBAzOkP%252B5p3I%252FAL0Y%252B4zgy0gCQSuBm3yveD7p5bOOI6%252FqkgQ1qF7nhcoHZWxrvUlQXj5j6KXMkMlRTz2JIdByKZSZqBM4sGdCt6YE67xNfQqpYek5FVieRU%252BG5zZyOjXyAz2lL8EHgESEEDGOXj15S2WddIPXyuafG%252BPZEKgBsf21wpHDx%252FF7jMrOomX0lE8%26X-Amz-Signature%3D05c4a66efc5bb24d9fcf6955e3f3525ace0f8819b71a78b55a10f9b0863bc327%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=946561b6-9cef-4dd2-a166-cead429eaa3d)



### containerd

一个典型的高级容器运行时就是 containerd（最典型的应该是 Docker，但大家都太熟悉了就懒得说了），containerd 从 Docker 项目中独立出来

![⬆️ Docker 是一个大而全的容器运行时，以至于在这里甚至将它划分为了一个平台](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F62de8781-6120-43e8-ae1e-f39c9f134457%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466RICK6M5T%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075611Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJGMEQCIBRk5kW82vA7%252Bpue632YOhQXxHeT%252BXD1jaJymWxDV6wiAiB%252FKCbBvnAlvLi9qqddefjoDGa0lLOmfJGWe2Qu6M2nMSqIBAiA%252F%252F%252F%252F%252F%252F%252F%252F%252F%252F8BEAAaDDYzNzQyMzE4MzgwNSIMECkSW0mYnK6ufsK9KtwDs80f9NQSvM3VUl%252FhReXqWKrQplxOriPS4eRaq1LPHjnF8JeQu2nF7WW5zPJna2UoH7EcmdqHghuS5F1urqkD5Q69b5GBHOSnlF6klV%252FQ5%252B788nV83faqy6OmWVH8e5Ws65JsNOyDRxn3%252BPvP78pfTysG5gcp2BE%252B88hk2K3k7eJkXcE1LMghYb4ASOSOWV2xeRn8CRUWan9T0BWv1NlaJk%252B%252Ffq%252BPkxUzN%252Fp3PIyMvK%252F4ywO8qyF6MrMPPSzS5VrKkyYLDRXIpu9PVsrZVm2aHh1tSOiT18ZcCXRW87u5NT%252BuxCUGT5f%252F3nToihgZmAbrMdtbmLg3iShmiSK6wZHDpG8Ydv1oxoMrkH%252FBPUbfHeBC9ZvpVmV2nsv%252BR91uADAYyE58T85khDKlD92fTu%252Fj4xdre%252BjL2LQSwU%252FIBT%252B7Nf20tnvZdSQN%252Byz7GamNkhoPBJ2tfmqfRtfTjqJSyokk1Z7AgkAbg1US0EMHAEQNHvbPETYWVce8ekKV18tHW22JVPgOKdYEXejJx5yRyTKFxSHocw%252BwKLKh%252F4EX29K3s%252F416P7xsL8%252BbqGT6%252Ftr9Lo4PdCP8AQNTGQowH3uUv4GCjUCGpTc%252FgrGCbHFiQsFGo2bvCPdHQ9LtGZE3qAw0KqJ1QY6pgEPxQW%252BUBF1CX%252FSIv3yW9AKU6NoSBiChBAzOkP%252B5p3I%252FAL0Y%252B4zgy0gCQSuBm3yveD7p5bOOI6%252FqkgQ1qF7nhcoHZWxrvUlQXj5j6KXMkMlRTz2JIdByKZSZqBM4sGdCt6YE67xNfQqpYek5FVieRU%252BG5zZyOjXyAz2lL8EHgESEEDGOXj15S2WddIPXyuafG%252BPZEKgBsf21wpHDx%252FF7jMrOomX0lE8%26X-Amz-Signature%3Dab58ab806d58ef51c6c09d42258d9dfb838d347accb0a3383ee55a669a5cfd8e%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=71146b10-a4eb-497d-a6d1-b8e17ab3051c)
*⬆️ Docker 是一个大而全的容器运行时，以至于在这里甚至将它划分为了一个平台*

containerd 的实现高度模块化，各个模块之间使用 ttrpc（gRPC 的改良）通信，并且支持通过插件来扩展。containerd 中默认使用 runC 作为低级容器运行时，也支持根据平台和需求替换成 runhcs、Kata 等

containerd 没有打包网络和存储的实现，像网络就是使用 CNI 来让外部提供具体实现

containerd 的设计目标是成为更高级系统中的一个组件来被调用，而非直接提供给用户使用，Docker 目前就是通过 containerd 来管理容器



### CRI-O

CRI-O 的目的是构建一个最简单的 K8s 专用运行时，是一个最小化的实现，不需要面向最终用户的那些复杂功能

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fe15a0e6c-d254-4d02-9280-279cb94b166a%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466RICK6M5T%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075611Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJGMEQCIBRk5kW82vA7%252Bpue632YOhQXxHeT%252BXD1jaJymWxDV6wiAiB%252FKCbBvnAlvLi9qqddefjoDGa0lLOmfJGWe2Qu6M2nMSqIBAiA%252F%252F%252F%252F%252F%252F%252F%252F%252F%252F8BEAAaDDYzNzQyMzE4MzgwNSIMECkSW0mYnK6ufsK9KtwDs80f9NQSvM3VUl%252FhReXqWKrQplxOriPS4eRaq1LPHjnF8JeQu2nF7WW5zPJna2UoH7EcmdqHghuS5F1urqkD5Q69b5GBHOSnlF6klV%252FQ5%252B788nV83faqy6OmWVH8e5Ws65JsNOyDRxn3%252BPvP78pfTysG5gcp2BE%252B88hk2K3k7eJkXcE1LMghYb4ASOSOWV2xeRn8CRUWan9T0BWv1NlaJk%252B%252Ffq%252BPkxUzN%252Fp3PIyMvK%252F4ywO8qyF6MrMPPSzS5VrKkyYLDRXIpu9PVsrZVm2aHh1tSOiT18ZcCXRW87u5NT%252BuxCUGT5f%252F3nToihgZmAbrMdtbmLg3iShmiSK6wZHDpG8Ydv1oxoMrkH%252FBPUbfHeBC9ZvpVmV2nsv%252BR91uADAYyE58T85khDKlD92fTu%252Fj4xdre%252BjL2LQSwU%252FIBT%252B7Nf20tnvZdSQN%252Byz7GamNkhoPBJ2tfmqfRtfTjqJSyokk1Z7AgkAbg1US0EMHAEQNHvbPETYWVce8ekKV18tHW22JVPgOKdYEXejJx5yRyTKFxSHocw%252BwKLKh%252F4EX29K3s%252F416P7xsL8%252BbqGT6%252Ftr9Lo4PdCP8AQNTGQowH3uUv4GCjUCGpTc%252FgrGCbHFiQsFGo2bvCPdHQ9LtGZE3qAw0KqJ1QY6pgEPxQW%252BUBF1CX%252FSIv3yW9AKU6NoSBiChBAzOkP%252B5p3I%252FAL0Y%252B4zgy0gCQSuBm3yveD7p5bOOI6%252FqkgQ1qF7nhcoHZWxrvUlQXj5j6KXMkMlRTz2JIdByKZSZqBM4sGdCt6YE67xNfQqpYek5FVieRU%252BG5zZyOjXyAz2lL8EHgESEEDGOXj15S2WddIPXyuafG%252BPZEKgBsf21wpHDx%252FF7jMrOomX0lE8%26X-Amz-Signature%3Dff16879c1df67ad5dd755ef8f7636df898e166938700b70deeca4ab3ca038e49%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=3aa91ef3-87a7-45ee-b200-8493466e5d88)

当一个 kubelet 的创建请求来临时：

1.  CRI-O 会拉取镜像（如果不存在）
2.  将镜像解压，构建 rootfs 和 OCI runtime-spec 的 `config.json`
3.  调用低层的 OCI runtime（runC 等）
4.  每个容器由一个 conmon 进程进行监控，它会为 PID 为 1 的进程提供一个 `pty`，同时处理日志和记录退出代码
5.  通过 CNI 调用网络插件配置网络



### Podman

containerd 和 CRI-O 都不是直接面向用户的，面向用户的容器运行时最典型的就是 Docker，而 Podman 也是一个 Docker 的竞品，由 Red Hat 推出

Podman 兼容大部分的 Docker 命令，甚至可以直接 `alias docker=podman` 来无缝替换。

Podman 的特色在于对 rootless container 的良好支持，这能带来更好的安全性；另外我个人比较喜欢的一个功能是 Pod 模式，能直接从一个 K8s 的 Pod YAML 中来运行容器



## CRI（Container Runtime Interface）

[CRI（Container Runtime Interface）](https://github.com/kubernetes/community/blob/master/contributors/devel/sig-node/container-runtime-interface.md) 是 K8s 的一套容器接口协议，用于 kubelet 和容器运行时之间的通信，避免直接依赖具体实现

OCI runtime-spec 是面向低级容器运行时的标准，而 CRI 是面向高级容器运行时的协议，还包括了一些 Pod 映射到容器所需的相关接口，其基于 gRPC，接口定义如下

```protobuf
service RuntimeService {
    rpc Version(VersionRequest) returns (VersionResponse) {}
    rpc RunPodSandbox(RunPodSandboxRequest) returns (RunPodSandboxResponse) {}
    rpc StopPodSandbox(StopPodSandboxRequest) returns (StopPodSandboxResponse) {}
    rpc RemovePodSandbox(RemovePodSandboxRequest) returns (RemovePodSandboxResponse) {}
    rpc PodSandboxStatus(PodSandboxStatusRequest) returns (PodSandboxStatusResponse) {}
    rpc ListPodSandbox(ListPodSandboxRequest) returns (ListPodSandboxResponse) {}
    rpc CreateContainer(CreateContainerRequest) returns (CreateContainerResponse) {}
    rpc StartContainer(StartContainerRequest) returns (StartContainerResponse) {}
    rpc StopContainer(StopContainerRequest) returns (StopContainerResponse) {}
    rpc RemoveContainer(RemoveContainerRequest) returns (RemoveContainerResponse) {}
    rpc ListContainers(ListContainersRequest) returns (ListContainersResponse) {}
    rpc ContainerStatus(ContainerStatusRequest) returns (ContainerStatusResponse) {}
    rpc UpdateContainerResources(UpdateContainerResourcesRequest) returns (UpdateContainerResourcesResponse) {}
    rpc ReopenContainerLog(ReopenContainerLogRequest) returns (ReopenContainerLogResponse) {}
    rpc ExecSync(ExecSyncRequest) returns (ExecSyncResponse) {}
    rpc Exec(ExecRequest) returns (ExecResponse) {}
    rpc Attach(AttachRequest) returns (AttachResponse) {}
    rpc PortForward(PortForwardRequest) returns (PortForwardResponse) {}
    rpc ContainerStats(ContainerStatsRequest) returns (ContainerStatsResponse) {}
    rpc ListContainerStats(ListContainerStatsRequest) returns (ListContainerStatsResponse) {}
    rpc PodSandboxStats(PodSandboxStatsRequest) returns (PodSandboxStatsResponse) {}
    rpc ListPodSandboxStats(ListPodSandboxStatsRequest) returns (ListPodSandboxStatsResponse) {}
    rpc UpdateRuntimeConfig(UpdateRuntimeConfigRequest) returns (UpdateRuntimeConfigResponse) {}
    rpc Status(StatusRequest) returns (StatusResponse) {}
    rpc CheckpointContainer(CheckpointContainerRequest) returns (CheckpointContainerResponse) {}
    rpc GetContainerEvents(GetEventsRequest) returns (stream ContainerEventResponse) {}
    rpc ListMetricDescriptors(ListMetricDescriptorsRequest) returns (ListMetricDescriptorsResponse) {}
    rpc ListPodSandboxMetrics(ListPodSandboxMetricsRequest) returns (ListPodSandboxMetricsResponse) {}
}

service ImageService {
    rpc ListImages(ListImagesRequest) returns (ListImagesResponse) {}
    rpc ImageStatus(ImageStatusRequest) returns (ImageStatusResponse) {}
    rpc PullImage(PullImageRequest) returns (PullImageResponse) {}
    rpc RemoveImage(RemoveImageRequest) returns (RemoveImageResponse) {}
    rpc ImageFsInfo(ImageFsInfoRequest) returns (ImageFsInfoResponse) {}
}
```

早期（1.6 版本之前）K8s 是直接调用 Docker API 的，但随着容器生态的发展，各个容器运行时都希望能在 K8s 这掺一脚，这为 kubelet 的维护带来了很大的负担。因此就有了 CRI。在过渡期时为了保持兼容，K8s 内置了 dockershim 作为 CRI 请求到 Docker API 的适配器，后来 K8s 的所谓「弃用 Docker」指的 containerd 成熟后不再单独为 Docker 维护一套接口适配器（dockershim），而是直接采用 CRI 接口，各个 shim（接口适配器）需要由用户自己安装，脱离出 K8s 的代码，于是就有了该说法



## WASM

之前就有看到类似「WASM+WASI 替代 Docker」的说法，一直不是很能理解，WASM 在我的认知中应该是一个虚拟机，WASI 是 WASM 的系统接口，为了让 WASM 运行在非浏览器的 native 环境中（像 Node 一样）。因此 WASM+WASI 的对比对象应该是类似 JVM 一样的东西，为什么与容器扯上了关系？

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F05e22043-6194-4d98-a63b-239e9184bf8a%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466RICK6M5T%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075611Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJGMEQCIBRk5kW82vA7%252Bpue632YOhQXxHeT%252BXD1jaJymWxDV6wiAiB%252FKCbBvnAlvLi9qqddefjoDGa0lLOmfJGWe2Qu6M2nMSqIBAiA%252F%252F%252F%252F%252F%252F%252F%252F%252F%252F8BEAAaDDYzNzQyMzE4MzgwNSIMECkSW0mYnK6ufsK9KtwDs80f9NQSvM3VUl%252FhReXqWKrQplxOriPS4eRaq1LPHjnF8JeQu2nF7WW5zPJna2UoH7EcmdqHghuS5F1urqkD5Q69b5GBHOSnlF6klV%252FQ5%252B788nV83faqy6OmWVH8e5Ws65JsNOyDRxn3%252BPvP78pfTysG5gcp2BE%252B88hk2K3k7eJkXcE1LMghYb4ASOSOWV2xeRn8CRUWan9T0BWv1NlaJk%252B%252Ffq%252BPkxUzN%252Fp3PIyMvK%252F4ywO8qyF6MrMPPSzS5VrKkyYLDRXIpu9PVsrZVm2aHh1tSOiT18ZcCXRW87u5NT%252BuxCUGT5f%252F3nToihgZmAbrMdtbmLg3iShmiSK6wZHDpG8Ydv1oxoMrkH%252FBPUbfHeBC9ZvpVmV2nsv%252BR91uADAYyE58T85khDKlD92fTu%252Fj4xdre%252BjL2LQSwU%252FIBT%252B7Nf20tnvZdSQN%252Byz7GamNkhoPBJ2tfmqfRtfTjqJSyokk1Z7AgkAbg1US0EMHAEQNHvbPETYWVce8ekKV18tHW22JVPgOKdYEXejJx5yRyTKFxSHocw%252BwKLKh%252F4EX29K3s%252F416P7xsL8%252BbqGT6%252Ftr9Lo4PdCP8AQNTGQowH3uUv4GCjUCGpTc%252FgrGCbHFiQsFGo2bvCPdHQ9LtGZE3qAw0KqJ1QY6pgEPxQW%252BUBF1CX%252FSIv3yW9AKU6NoSBiChBAzOkP%252B5p3I%252FAL0Y%252B4zgy0gCQSuBm3yveD7p5bOOI6%252FqkgQ1qF7nhcoHZWxrvUlQXj5j6KXMkMlRTz2JIdByKZSZqBM4sGdCt6YE67xNfQqpYek5FVieRU%252BG5zZyOjXyAz2lL8EHgESEEDGOXj15S2WddIPXyuafG%252BPZEKgBsf21wpHDx%252FF7jMrOomX0lE8%26X-Amz-Signature%3D6e4b2c6aa73afb0c24c8e1e3669d1f59905e4bb6ecfade8a756e61aceb9b6fc6%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=ec86724d-d10c-416a-bef6-8102b1e056f9)

参考这篇文章和 Docker 的官方文档

1.  https://wasmlabs.dev/articles/docker-without-containers/
2.  https://www.docker.com/blog/docker-wasm-technical-preview/

简单来说，WasmEdge 提供了一个符合 OCI runtime-spec 的 WASI 运行时，因此可以使用 WasmEdge 替代 Docker 中的容器运行时。同时镜像不需要包含操作系统或任何基础镜像，单个 `.wasm` 二进制文件就可以直接执行

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fa207d3c2-0fa9-4e86-88a3-7043ee6f505c%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466RICK6M5T%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075611Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJGMEQCIBRk5kW82vA7%252Bpue632YOhQXxHeT%252BXD1jaJymWxDV6wiAiB%252FKCbBvnAlvLi9qqddefjoDGa0lLOmfJGWe2Qu6M2nMSqIBAiA%252F%252F%252F%252F%252F%252F%252F%252F%252F%252F8BEAAaDDYzNzQyMzE4MzgwNSIMECkSW0mYnK6ufsK9KtwDs80f9NQSvM3VUl%252FhReXqWKrQplxOriPS4eRaq1LPHjnF8JeQu2nF7WW5zPJna2UoH7EcmdqHghuS5F1urqkD5Q69b5GBHOSnlF6klV%252FQ5%252B788nV83faqy6OmWVH8e5Ws65JsNOyDRxn3%252BPvP78pfTysG5gcp2BE%252B88hk2K3k7eJkXcE1LMghYb4ASOSOWV2xeRn8CRUWan9T0BWv1NlaJk%252B%252Ffq%252BPkxUzN%252Fp3PIyMvK%252F4ywO8qyF6MrMPPSzS5VrKkyYLDRXIpu9PVsrZVm2aHh1tSOiT18ZcCXRW87u5NT%252BuxCUGT5f%252F3nToihgZmAbrMdtbmLg3iShmiSK6wZHDpG8Ydv1oxoMrkH%252FBPUbfHeBC9ZvpVmV2nsv%252BR91uADAYyE58T85khDKlD92fTu%252Fj4xdre%252BjL2LQSwU%252FIBT%252B7Nf20tnvZdSQN%252Byz7GamNkhoPBJ2tfmqfRtfTjqJSyokk1Z7AgkAbg1US0EMHAEQNHvbPETYWVce8ekKV18tHW22JVPgOKdYEXejJx5yRyTKFxSHocw%252BwKLKh%252F4EX29K3s%252F416P7xsL8%252BbqGT6%252Ftr9Lo4PdCP8AQNTGQowH3uUv4GCjUCGpTc%252FgrGCbHFiQsFGo2bvCPdHQ9LtGZE3qAw0KqJ1QY6pgEPxQW%252BUBF1CX%252FSIv3yW9AKU6NoSBiChBAzOkP%252B5p3I%252FAL0Y%252B4zgy0gCQSuBm3yveD7p5bOOI6%252FqkgQ1qF7nhcoHZWxrvUlQXj5j6KXMkMlRTz2JIdByKZSZqBM4sGdCt6YE67xNfQqpYek5FVieRU%252BG5zZyOjXyAz2lL8EHgESEEDGOXj15S2WddIPXyuafG%252BPZEKgBsf21wpHDx%252FF7jMrOomX0lE8%26X-Amz-Signature%3D3c2948d3c91170af393991839121e2bf4caa268eda938aec1a365952df500113%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=71d09c0a-3f1b-4053-89ba-d3aa0b8dc921)

为什么 WASM+WASI 的方式被推崇：

1.  开放，业界广泛采用的标准，开源社区生态加成
2.  快速，没有 VM 或容器的冷启动
3.  安全，沙盒运行
4.  可移植，支持大多数 CPU 和操作系统
5.  高效，最小内存和 CPU 占用

但目前来讲生态还不够完善，主要在于很多语言对编译为 `.wasm` 有诸多限制，大量常用的依赖库不进行修改的话都无法编译。同时作为容器 runtime 的话没有 Linux 内核，也导致很多 specific 的功能无法实现。明显优势基本只有镜像非常轻量了，大小在几百 K 到几 M，适合的场景还是像 WasmEdge 本身的名字一样，做些应用层的 Edge Computing 吧
