"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86211,71641,20888,83537,57696,1201,66478,3643,68020],{68020:function(e,a,t){t.r(a);var r=t(85893),s=t(69325),l=t(5152);let n=t.n(l)()(()=>Promise.all([t.e(56249),t.e(40892)]).then(t.bind(t,40892)),{loadableGenerated:{webpack:()=>[40892]},ssr:!1});a.default=e=>{let{post:a}=e;return JSON.parse((0,s.JA)("POST_SHARE_BAR_ENABLE"))&&a&&(null==a?void 0:a.type)==="Post"?(0,r.jsx)("div",{className:"m-1 overflow-x-auto",children:(0,r.jsx)("div",{className:"flex w-full md:justify-end",children:(0,r.jsx)(n,{post:a})})}):(0,r.jsx)(r.Fragment,{})}},3643:function(e,a,t){t.r(a),t.d(a,{default:function(){return l}});var r=t(85893),s=t(69325);function l(e){let{orientation:a="vertical",sticky:t=!1,className:l}=e,n=(0,s.JA)("AD_WWADS_ID");return n?(0,r.jsx)("div",{"data-id":n,className:"wwads-cn \n            ".concat("vertical"===a?"wwads-vertical":"wwads-horizontal","\n            ").concat(t?"wwads-sticky":""," z-10 ").concat(l||"")}):null}},31761:function(e,a,t){function r(e,a){if(!e||!a)return e||"";let t=new Date(e).toLocaleDateString(a,{year:"numeric",month:"short",day:"numeric"});return"zh"===a.slice(0,2).toLowerCase()?t.replace("年","-").replace("月","-").replace("日",""):t}function s(e,a){let t=new Date(e),r={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(let e in/(y+)/.test(a)&&(a=a.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),r)RegExp("("+e+")").test(a)&&(a=a.replace(RegExp.$1,1===RegExp.$1.length?r[e]:("00"+r[e]).substr((""+r[e]).length)));return a.trim()}t.d(a,{Z:function(){return r},x:function(){return s}})},71641:function(e,a,t){t.r(a),t.d(a,{default:function(){return i}});var r=t(85893),s=t(26964),l=t(41664),n=t.n(l),c=t(66478),o=t(69325);function i(e){let{author:a,url:t}=e,{locale:l}=(0,s.O)();return(0,o.JA)("NEXT_ARTICLE_COPYRIGHT",null,c.default)?(0,r.jsx)("section",{className:"dark:text-gray-300 mt-6",children:(0,r.jsxs)("ul",{className:"overflow-x-auto whitespace-nowrap text-sm dark:bg-gray-700 bg-gray-100 p-5 leading-8 border-l-2 border-blue-500",children:[(0,r.jsxs)("li",{children:[(0,r.jsxs)("strong",{className:"mr-2",children:[l.COMMON.AUTHOR,":"]}),(0,r.jsx)(n(),{href:"/about",className:"hover:underline",children:a})]}),(0,r.jsxs)("li",{children:[(0,r.jsxs)("strong",{className:"mr-2",children:[l.COMMON.URL,":"]}),(0,r.jsx)("a",{className:"hover:underline",href:t,children:t})]}),(0,r.jsxs)("li",{children:[(0,r.jsxs)("strong",{className:"mr-2",children:[l.COMMON.COPYRIGHT,":"]}),l.COMMON.COPYRIGHT_NOTICE]})]})}):(0,r.jsx)(r.Fragment,{})}},86211:function(e,a,t){t.r(a),t.d(a,{default:function(){return j}});var r=t(85893),s=t(86429),l=t(27134),n=t(67968),c=t(31933),o=t(68020),i=t(3643),d=t(69325),u=t(26964),x=t(31761),m=t(41664),f=t.n(m),h=t(11163),g=t(66478),N=t(71641),p=t(20888),T=t(83537),_=t(57696),E=t(1201);function j(e){let{post:a,recommendPosts:t,prev:m,next:j}=e,y=(0,d.JA)("LINK")+(0,h.useRouter)().asPath,{locale:v}=(0,u.O)(),O=(0,d.JA)("NEXT_ARTICLE_INFO",null,g.default);return(0,r.jsx)("div",{id:"article-wrapper",className:"shadow md:hover:shadow-2xl overflow-x-auto flex-grow mx-auto w-screen md:w-full ",children:(0,r.jsxs)("div",{itemScope:!0,itemType:"https://schema.org/Movie",className:"overflow-y-hidden py-10 px-4 lg:pt-24 md:px-24  dark:border-gray-700 bg-white dark:bg-hexo-black-gray",children:[O&&(0,r.jsxs)("header",{"data-aos":"fade-down","data-aos-duration":"400","data-aos-once":"true","data-aos-anchor-placement":"top-bottom",children:[(0,d.JA)("NEXT_POST_HEADER_IMAGE_VISIBLE",null,g.default)&&(null==a?void 0:a.type)&&(null==a||a.type,!0)&&(null==a?void 0:a.pageCover)&&(0,r.jsx)("div",{className:"w-full relative md:flex-shrink-0 overflow-hidden",children:(0,r.jsx)(l.Z,{alt:a.title,src:null==a?void 0:a.pageCover,className:"object-center w-full"})}),(0,r.jsxs)("div",{className:" text-center font-bold text-3xl text-black dark:text-white font-serif pt-6",children:[(0,d.JA)("POST_TITLE_ICON")&&(0,r.jsx)(n.Z,{icon:a.pageIcon}),a.title]}),(0,r.jsxs)("section",{className:"mt-2 text-gray-500 dark:text-gray-400 font-light leading-7 text-sm",children:[(0,r.jsx)("div",{className:"flex flex-wrap justify-center",children:(null==a?void 0:a.type)!=="Page"&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f(),{href:"/archive#".concat((0,x.x)(null==a?void 0:a.publishDate,"yyyy-MM")),passHref:!0,legacyBehavior:!0,children:(0,r.jsxs)("div",{className:"pl-1 mr-2 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 border-b dark:border-gray-500 border-dashed",children:[(0,r.jsx)("i",{className:"far fa-calendar mr-1"})," ",null==a?void 0:a.publishDay]})}),(0,r.jsxs)("span",{className:"mr-2",children:[" ","| ",(0,r.jsx)("i",{className:"far fa-calendar-check mr-2"}),a.lastEditedDay," "]}),(0,r.jsxs)("div",{className:"hidden busuanzi_container_page_pv font-light mr-2",children:[(0,r.jsx)("i",{className:"mr-1 fas fa-eye"}),(0,r.jsx)("span",{className:"mr-2 busuanzi_value_page_pv"})]})]})}),(0,r.jsx)(E.default,{})]})]}),(0,r.jsxs)("article",{className:"mx-auto",children:[(0,r.jsx)(i.default,{className:"w-full",orientation:"horizontal"}),a&&(0,r.jsx)(c.default,{post:a}),(0,r.jsx)(i.default,{className:"w-full",orientation:"horizontal"})]}),O&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.default,{post:a}),(null==a?void 0:a.type)==="Post"&&(0,r.jsx)(N.default,{author:(0,d.JA)("AUTHOR"),url:y}),(null==a?void 0:a.type)==="Post"&&(0,r.jsx)(T.default,{currentPost:a,recommendPosts:t}),(0,r.jsxs)("section",{className:"flex justify-between",children:[a.category&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"cursor-pointer my-auto text-md mr-2 hover:text-black dark:hover:text-white border-b dark:text-gray-500 border-dashed",children:(0,r.jsx)(f(),{href:"/category/".concat(a.category),legacyBehavior:!0,children:(0,r.jsxs)("a",{children:[(0,r.jsx)("i",{className:"mr-1 far fa-folder-open"})," ",a.category]})})})}),(null==a?void 0:a.type)==="Post"&&(0,r.jsx)(r.Fragment,{children:a.tagItems&&(0,r.jsxs)("div",{className:"flex items-center flex-nowrap leading-8 p-1 py-4 overflow-x-auto",children:[(0,r.jsxs)("div",{className:"hidden md:block dark:text-gray-300 whitespace-nowrap",children:[v.COMMON.TAGS,":\xa0"]}),a.tagItems.map(e=>(0,r.jsx)(_.default,{tag:e},e.name))]})})]}),(null==a?void 0:a.type)==="Post"&&(0,r.jsx)(p.default,{prev:m,next:j})]}),(0,r.jsx)("div",{className:"duration-200 w-full dark:border-gray-700 bg-white dark:bg-hexo-black-gray",children:(0,r.jsx)(s.default,{frontMatter:a})})]})})}},20888:function(e,a,t){t.r(a),t.d(a,{default:function(){return n}});var r=t(85893),s=t(41664),l=t.n(s);function n(e){let{prev:a,next:t}=e;return a&&t?(0,r.jsxs)("section",{className:"text-gray-800 border-t dark:text-gray-300 flex flex-wrap lg:flex-nowrap lg:space-x-10 justify-between py-2",children:[a&&(0,r.jsxs)(l(),{href:"/".concat(a.slug),passHref:!0,className:"text-sm py-3 text-gray-500 hover:underline cursor-pointer",children:[(0,r.jsx)("i",{className:"mr-1 fas fa-angle-double-left"}),a.title]}),t&&(0,r.jsxs)(l(),{href:"/".concat(t.slug),passHref:!0,className:"text-sm flex py-3 text-gray-500 hover:underline cursor-pointer",children:[t.title,(0,r.jsx)("i",{className:"ml-1 my-1 fas fa-angle-double-right"})]})]}):(0,r.jsx)(r.Fragment,{})}},83537:function(e,a,t){t.r(a);var r=t(85893),s=t(41664),l=t.n(s),n=t(26964),c=t(66478),o=t(69325);a.default=e=>{let{recommendPosts:a}=e,{locale:t}=(0,n.O)();return(0,o.JA)("NEXT_ARTICLE_RELATE_POSTS",null,c.default)&&a&&!(a.length<1)?(0,r.jsxs)("div",{className:"pt-2 border pl-4 py-2 my-4 dark:text-gray-300 ",children:[(0,r.jsxs)("div",{className:"mb-2 font-bold text-lg",children:[t.COMMON.RELATE_POSTS," :"]}),(0,r.jsx)("ul",{className:"font-light text-sm",children:a.map(e=>(0,r.jsx)("li",{className:"py-1",children:(0,r.jsx)(l(),{href:"/".concat(e.slug),className:"cursor-pointer hover:underline",children:e.title})},e.id))})]}):(0,r.jsx)(r.Fragment,{})}},57696:function(e,a,t){t.r(a);var r=t(85893),s=t(41664),l=t.n(s),n=t(26964);a.default=e=>{let{tag:a,selected:t}=e,{locale:s}=(0,n.O)();return a||s.COMMON.NOTAG,(0,r.jsx)(l(),{href:t?"/":"/tag/".concat(encodeURIComponent(a.name)),passHref:!0,legacyBehavior:!0,children:(0,r.jsx)("li",{className:"notion-".concat(a.color,"_background dark:bg-gray-700 list-none cursor-pointer rounded-md  \n        duration-200 mr-1 my-1 px-2 py-1 text-sm whitespace-nowrap \n         hover:bg-gray-200 dark:hover:bg-gray-800 "),children:(0,r.jsxs)("div",{className:"text-gray-600 dark:text-gray-300 dark:hover:text-white",children:[t&&(0,r.jsx)("i",{className:"fas fa-tag mr-1"})," ","".concat(a.name," ")," ",a.count?"(".concat(a.count,")"):""]})})})}},1201:function(e,a,t){t.r(a),t.d(a,{default:function(){return n}});var r=t(85893),s=t(26964),l=t(67294);function n(){(0,l.useEffect)(()=>{!function(){var e,a;let t=function(e){if(!e)return 0;let a=0;try{a=(e=(e=(e=(e=e.replace(/(\r\n+|\s+|　+)/g,"龘")).replace(/[\x00-\xff]/g,"m")).replace(/m+/g,"*")).replace(/龘+/g,"")).length}catch(e){}return a}((a=null===(e=document.getElementById("notion-article"))||void 0===e?void 0:e.innerHTML)?a=a.replace(/<[^>]+>|&[^>]+;/g,"").trim():"");document.getElementById("wordCount").innerHTML=t,document.getElementById("readTime").innerHTML=Math.floor(t/400)+1,document.getElementById("wordCountWrapper").classList.remove("hidden")}()});let{locale:e}=(0,s.O)();return(0,r.jsxs)("div",{id:"wordCountWrapper",className:"flex justify-center my-auto font-light",children:[(0,r.jsx)("i",{className:"mr-1 fas fa-file-word my-auto"}),(0,r.jsxs)("span",{className:"hidden md:block",children:[e.COMMON.WORD_COUNT,"≈"]}),(0,r.jsx)("strong",{id:"wordCount",children:"0"})," \xa0|\xa0 ",(0,r.jsx)("i",{className:"mr-1 fas fa-clock my-auto"}),e.COMMON.READ_TIME," ",(0,r.jsx)("span",{className:"hidden md:block",children:"≈"})," ",(0,r.jsx)("strong",{id:"readTime",children:"0"})," ",e.COMMON.MINUTE]})}},66478:function(e,a,t){t.r(a),a.default={NEXT_HOME_BANNER:!0,NEXT_HOME_BANNER_STRINGS:["Hi，我是一个程序员","Hi，我是一个打工人","Hi，我是一个干饭人","欢迎来到我的博客\uD83C\uDF89"],NEXT_NAV_TYPE:"normal",NEXT_POST_LIST_COVER:!1,NEXT_POST_LIST_PREVIEW:!0,NEXT_POST_LIST_SUMMARY:!1,NEXT_POST_HEADER_IMAGE_VISIBLE:!1,NEXT_RIGHT_BAR:!0,NEXT_RIGHT_LATEST_POSTS:!0,NEXT_RIGHT_CATEGORY_LIST:!0,NEXT_RIGHT_TAG_LIST:!0,NEXT_RIGHT_AD:!1,NEXT_MENU_HOME:!0,NEXT_MENU_CATEGORY:!0,NEXT_MENU_TAG:!0,NEXT_MENU_ARCHIVE:!0,NEXT_MENU_SEARCH:!0,NEXT_WIDGET_TO_TOP:!0,NEXT_WIDGET_TO_BOTTOM:!1,NEXT_WIDGET_DARK_MODE:!1,NEXT_WIDGET_TOC:!0,NEXT_ARTICLE_RELATE_POSTS:!0,NEXT_ARTICLE_COPYRIGHT:!0,NEXT_ARTICLE_INFO:!0}}}]);