"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54838,72334,5268,39079,9468,34283,77316,53976,75367,84789,94486,42854,24671,56118,86051,91577,68020],{79875:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(85893);function l(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("span",{class:"absolute right-1 top-1 flex h-2 w-2",children:[(0,a.jsx)("span",{class:"animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"}),(0,a.jsx)("span",{class:"relative inline-flex rounded-full h-2 w-2 bg-red-500"})]})})}},91577:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var a=r(85893),l=r(69325),s=r(26964),n=r(78174),i=r(67294);function o(){let{theme:e,switchTheme:t}=(0,s.O)(),r=JSON.parse((0,l.JA)("WIDGET_PET")),o=(0,l.JA)("WIDGET_PET_LINK"),d=(0,l.JA)("WIDGET_PET_SWITCH_THEME");return((0,i.useEffect)(()=>{r&&!(0,n.isMobile)()&&Promise.all([(0,n.loadExternalResource)("https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/live2d.min.js","js")]).then(e=>{var t;if(void 0!==(null===(t=window)||void 0===t?void 0:t.loadlive2d))try{loadlive2d("live2d",o)}catch(e){console.error("读取PET模型",e)}})},[e]),r)?(0,a.jsx)("canvas",{id:"live2d",width:"280",height:"250",onClick:function(){d&&t()},className:"cursor-grab",onMouseDown:e=>e.target.classList.add("cursor-grabbing"),onMouseUp:e=>e.target.classList.remove("cursor-grabbing")}):(0,a.jsx)(a.Fragment,{})}},68020:function(e,t,r){r.r(t);var a=r(85893),l=r(69325),s=r(5152);let n=r.n(s)()(()=>Promise.all([r.e(56249),r.e(40892)]).then(r.bind(r,40892)),{loadableGenerated:{webpack:()=>[40892]},ssr:!1});t.default=e=>{let{post:t}=e;return JSON.parse((0,l.JA)("POST_SHARE_BAR_ENABLE"))&&t&&(null==t?void 0:t.type)==="Post"?(0,a.jsx)("div",{className:"m-1 overflow-x-auto",children:(0,a.jsx)("div",{className:"flex w-full md:justify-end",children:(0,a.jsx)(n,{post:t})})}):(0,a.jsx)(a.Fragment,{})}},72334:function(e,t,r){r.r(t);var a=r(85893),l=r(5152);let s=r.n(l)()(()=>Promise.resolve().then(r.bind(r,31933)),{loadableGenerated:{webpack:()=>[31933]}});t.default=e=>{let{notice:t,className:r}=e;return(null==t?void 0:t.blockMap)?(0,a.jsx)("div",{className:r,children:(0,a.jsx)("section",{id:"announcement-wrapper",className:"dark:text-gray-300 rounded-xl px-2 py-4",children:t&&(0,a.jsx)("div",{id:"announcement-content",children:(0,a.jsx)(s,{post:t})})})}):(0,a.jsx)(a.Fragment,{})}},5268:function(e,t,r){r.r(t),r.d(t,{default:function(){return n}});var a=r(85893),l=r(41664),s=r.n(l);function n(e){let{prev:t,next:r}=e;return t&&r?(0,a.jsxs)("section",{className:"text-gray-800 dark:text-gray-400 h-12 flex items-center justify-between space-x-5 my-4",children:[(0,a.jsxs)(s(),{href:t.href,passHref:!0,className:"text-sm cursor-pointer justify-start items-center flex hover:underline duration-300",children:[(0,a.jsx)("i",{className:"mr-1 fas fa-angle-double-left"}),t.title]}),(0,a.jsxs)(s(),{href:r.href,passHref:!0,className:"text-sm cursor-pointer justify-end items-center flex hover:underline duration-300",children:[r.title,(0,a.jsx)("i",{className:"ml-1 my-1 fas fa-angle-double-right"})]})]}):(0,a.jsx)(a.Fragment,{})}},39079:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var a=r(85893);function l(e){var t;let{post:r}=e;return r?(0,a.jsxs)("div",{className:"pt-10 pb-6 text-gray-400 text-sm border-b",children:[(0,a.jsx)("i",{className:"fa-regular fa-clock mr-1"}),"Last update:  ",null===(t=r.date)||void 0===t?void 0:t.start_date]}):null}},9468:function(e,t,r){r.r(t),r.d(t,{ArticleLock:function(){return i}});var a=r(85893),l=r(26964),s=r(11163),n=r(67294);let i=e=>{let{validPassword:t}=e,{locale:r}=(0,l.O)(),i=(0,s.useRouter)(),o=(0,n.useRef)(null),d=()=>{let e=document.getElementById("password");if(!t(null==e?void 0:e.value)){let e=document.getElementById("tips");e&&(e.innerHTML="",e.innerHTML="<div class='text-red-500 animate__shakeX animate__animated'>".concat(r.COMMON.PASSWORD_ERROR,"</div>"))}};return(0,n.useEffect)(()=>{o.current.focus()},[i]),(0,a.jsx)("div",{id:"container",className:"w-full flex justify-center items-center h-96 ",children:(0,a.jsxs)("div",{className:"text-center space-y-3",children:[(0,a.jsx)("div",{className:"font-bold",children:r.COMMON.ARTICLE_LOCK_TIPS}),(0,a.jsxs)("div",{className:"flex mx-4",children:[(0,a.jsx)("input",{id:"password",type:"password",onKeyDown:e=>{"Enter"===e.key&&d()},ref:o,className:"outline-none w-full text-sm pl-5 rounded-l transition focus:shadow-lg dark:text-gray-300 font-light leading-10 text-black bg-gray-100 dark:bg-gray-500"}),(0,a.jsx)("div",{onClick:d,className:"px-3 whitespace-nowrap cursor-pointer items-center justify-center py-2 bg-green-500 hover:bg-green-400 text-white rounded-r duration-300",children:(0,a.jsxs)("i",{className:"duration-200 cursor-pointer fas fa-key",children:["\xa0",r.COMMON.SUBMIT]})})]}),(0,a.jsx)("div",{id:"tips"})]})})}},34283:function(e,t,r){r.r(t),r.d(t,{default:function(){return n}});var a=r(85893),l=r(41664),s=r.n(l);function n(e){var t;let{archiveTitle:r,archivePosts:l}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{id:r,className:"pt-16 pb-4 text-3xl dark:text-gray-300",children:r}),(0,a.jsx)("ul",{children:null===(t=l[r])||void 0===t?void 0:t.map(e=>{var t;return(0,a.jsx)("li",{className:"border-l-2 p-1 text-xs md:text-base items-center  hover:scale-x-105 hover:border-gray-500 dark:hover:border-gray-300 dark:border-gray-400 transform duration-500",children:(0,a.jsxs)("div",{id:null==e?void 0:e.publishDay,children:[(0,a.jsx)("span",{className:"text-gray-400",children:null===(t=e.date)||void 0===t?void 0:t.start_date})," ","\xa0",(0,a.jsx)(s(),{passHref:!0,href:null==e?void 0:e.href,className:"dark:text-gray-400  dark:hover:text-gray-300 overflow-x-hidden hover:underline cursor-pointer text-gray-600",children:e.title})]})},e.id)})})]},r)}},6814:function(e,t,r){r.r(t);var a=r(85893),l=r(79875),s=r(67968),n=r(69325),i=r(41664),o=r.n(i),d=r(11163),c=r(11858);t.default=e=>{let{post:t,className:r}=e,i=decodeURIComponent((0,d.useRouter)().asPath.split("?")[0])===(null==t?void 0:t.href);return(0,a.jsx)(o(),{href:null==t?void 0:t.href,passHref:!0,children:(0,a.jsxs)("div",{className:"".concat(r," relative py-1.5 cursor-pointer px-1.5 hover:bg-gray-50 rounded-md dark:hover:bg-yellow-100 dark:hover:text-yellow-600\n                    ").concat(i&&"bg-green-50 text-green-500 dark:bg-yellow-100 dark:text-yellow-600"),children:[(0,a.jsxs)("div",{className:"w-full select-none",children:[(0,n.JA)("POST_TITLE_ICON")&&(0,a.jsx)(s.Z,{icon:null==t?void 0:t.pageIcon})," ",t.title]}),(null==t?void 0:t.isLatest)&&(0,n.JA)("GITBOOK_LATEST_POST_RED_BADGE",!1,c.default)&&(0,a.jsx)(l.Z,{})]},t.id)})}},40814:function(e,t,r){r.r(t),r.d(t,{default:function(){return n}});var a=r(85893),l=r(76843),s=r(91644);function n(e){var t;let{post:r,className:n}=e,i=(null==r?void 0:null===(t=r.toc)||void 0===t?void 0:t.length)>1;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"bottom-button-group md:hidden w-screen h-14 px-4 fixed flex items-center justify-between right-left bottom-0 z-30 bg-white border-t dark:border-gray-800",children:[(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(s.default,{})}),i&&(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(l.default,{})})]})})}},77316:function(e,t,r){r.r(t);var a=r(85893),l=r(26964),s=r(78174),n=r(93096),i=r.n(n),o=r(58622),d=r(67294);t.default=e=>{let{post:t}=e,r=null==t?void 0:t.toc,[n,c]=(0,d.useState)(null),{locale:u}=(0,l.O)();(0,d.useEffect)(()=>(window.addEventListener("scroll",f),f(),()=>{window.removeEventListener("scroll",f)}),[t]);let f=(0,d.useCallback)(i()(()=>{var e,r;let a=document.getElementsByClassName("notion-h"),l=null,n=null;for(let e=0;e<a.length;++e){let t=a[e];if(!t||!(t instanceof Element))continue;n||(n=t.getAttribute("data-id"));let r=t.getBoundingClientRect(),s=Math.max(150,(l?r.top-l.bottom:0)/4);if(r.top-s<0){n=t.getAttribute("data-id"),l=r;continue}break}c(n);let i=(null==t?void 0:null===(e=t.toc)||void 0===e?void 0:e.map(e=>(0,o.Gw)(e.id)))||[],d=i.indexOf(n)||0;if(s.isBrowser&&(null==i?void 0:i.length)>0)for(let e of null===(r=document)||void 0===r?void 0:r.getElementsByClassName("toc-wrapper"))null==e||e.scrollTo({top:28*d,behavior:"smooth"})},200));return!r||(null==r?void 0:r.length)<1?(0,a.jsx)(a.Fragment,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"w-full hidden md:block",children:[(0,a.jsx)("i",{className:"mr-1 fas fa-stream"}),u.COMMON.TABLE_OF_CONTENTS]}),(0,a.jsx)("div",{id:"toc-wrapper",className:"toc-wrapper overflow-y-auto my-2 max-h-80 overscroll-none scroll-hidden",children:(0,a.jsx)("nav",{className:"h-full  text-black",children:null==r?void 0:r.map(e=>{let t=(0,o.Gw)(e.id);return(0,a.jsx)("a",{href:"#".concat(t),className:"notion-table-of-contents-item duration-300 transform font-light dark:text-gray-300\n              notion-table-of-contents-item-indent-level-".concat(e.indentLevel," "),children:(0,a.jsx)("span",{style:{display:"inline-block",marginLeft:16*e.indentLevel},className:"truncate ".concat(n===t?"font-bold text-gray-500 underline":""),children:e.text})},t)})})})]})}},47126:function(e,t,r){r.r(t);var a=r(85893),l=r(26964),s=r(54838),n=r(11163),i=r(67294),o=r(77316);t.default=e=>{let{post:t,cRef:r}=e,{tocVisible:d,changeTocVisible:c}=(0,s.useGitBookGlobal)(),{locale:u}=(0,l.O)(),f=(0,n.useRouter)();return(0,i.useEffect)(()=>{c(!1)},[f]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{id:"gitbook-toc-float",className:"fixed top-0 right-0 z-40 md:hidden",children:(0,a.jsx)("div",{className:(d?"animate__slideInRight ":" -mr-72 animate__slideOutRight")+" overflow-y-hidden shadow-card w-60 duration-200 fixed right-1 bottom-16 rounded py-2 bg-white dark:bg-hexo-black-gray",children:t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"px-4 pb-2 flex justify-between items-center border-b font-bold",children:[(0,a.jsx)("span",{children:u.COMMON.TABLE_OF_CONTENTS}),(0,a.jsx)("i",{className:"fas fa-times p-1 cursor-pointer",onClick:()=>{c(!1)}})]}),(0,a.jsx)("div",{className:"dark:text-gray-400 text-gray-600 px-3",children:(0,a.jsx)(o.default,{post:t})})]})})}),(0,a.jsx)("div",{id:"right-drawer-background",className:(d?"block":"hidden")+" fixed top-0 left-0 z-30 w-full h-full",onClick:()=>{c(!d)}})]})}},53976:function(e,t,r){r.r(t),r.d(t,{default:function(){return n}});var a=r(85893),l=r(41664),s=r.n(l);function n(e){let{selected:t,category:r,categoryCount:l}=e;return(0,a.jsx)(s(),{href:"/category/".concat(r),passHref:!0,className:(t?"hover:text-white dark:hover:text-white bg-green-600 text-white ":"dark:text-green-400 text-gray-500 hover:text-white dark:hover:text-white hover:bg-green-600")+" flex text-sm items-center duration-300 cursor-pointer py-1 font-light px-2 whitespace-nowrap",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("i",{className:"mr-2 fas ".concat(t?"fa-folder-open":"fa-folder")}),r," ",l&&"(".concat(l,")")]})})}},75367:function(e,t,r){r.r(t);var a=r(85893),l=r(69325),s=r(24671);t.default=e=>{let{siteInfo:t}=e,r=new Date().getFullYear(),n=(0,l.JA)("SINCE"),i=parseInt(n)<r?n+"-"+r:r;return(0,a.jsxs)("footer",{className:"z-20 bg:white dark:bg-hexo-black-gray justify-center text-center w-full text-sm relative",children:[(0,a.jsx)("hr",{className:"pb-2"}),(0,a.jsx)(s.default,{}),(0,a.jsxs)("div",{className:"flex justify-center pt-1",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("i",{className:"mx-1 animate-pulse fas fa-heart"})," ",(0,a.jsx)("a",{href:(0,l.JA)("LINK"),className:"underline font-bold text-gray-500 dark:text-gray-300 ",children:(0,l.JA)("AUTHOR")}),".",(0,a.jsx)("br",{})]}),"\xa9 ","".concat(i)]}),(0,a.jsxs)("div",{className:"text-xs font-serif",children:["Powered By"," ",(0,a.jsxs)("a",{href:"https://github.com/tangly1024/NotionNext",className:"underline text-gray-500 dark:text-gray-300",children:["NotionNext ",(0,l.JA)("VERSION")]})]}),(0,l.JA)("BEI_AN")&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("i",{className:"fas fa-shield-alt"})," ",(0,a.jsx)("a",{href:"https://beian.miit.gov.cn/",className:"mr-2",children:(0,l.JA)("BEI_AN")}),(0,a.jsx)("br",{})]}),(0,a.jsxs)("span",{className:"hidden busuanzi_container_site_pv",children:[(0,a.jsx)("i",{className:"fas fa-eye"}),(0,a.jsx)("span",{className:"px-1 busuanzi_value_site_pv",children:" "})," "]}),(0,a.jsxs)("span",{className:"pl-2 hidden busuanzi_container_site_uv",children:[(0,a.jsx)("i",{className:"fas fa-users"})," ",(0,a.jsx)("span",{className:"px-1 busuanzi_value_site_uv",children:" "})," "]}),(0,a.jsx)("h1",{className:"pt-1 hidden",children:(0,l.JA)("TITLE")})]})}},84789:function(e,t,r){r.r(t);var a=r(85893),l=r(27134),s=r(11163),n=r.n(s),i=r(24671),o=r(69325);t.default=e=>{let{siteInfo:t}=e;return(0,a.jsx)("div",{id:"info-card",className:"py-4",children:(0,a.jsxs)("div",{className:"items-center justify-center",children:[(0,a.jsx)("div",{className:"hover:scale-105 transform duration-200 cursor-pointer flex justify-center",onClick:()=>{n().push("/about")},children:(0,a.jsx)(l.Z,{src:null==t?void 0:t.icon,className:"rounded-full",width:120,alt:(0,o.JA)("AUTHOR")})}),(0,a.jsx)("div",{className:"text-xl py-2 hover:scale-105 transform duration-200 flex justify-center dark:text-gray-300",children:(0,o.JA)("AUTHOR")}),(0,a.jsx)("div",{className:"font-light text-gray-600 mb-2 hover:scale-105 transform duration-200 flex justify-center dark:text-gray-400",children:(0,o.JA)("BIO")}),(0,a.jsx)(i.default,{})]})})}},94486:function(e,t,r){r.r(t);var a=r(85893);t.default=e=>{let{showPercent:t=!1,percent:r,className:l}=e;return(0,a.jsx)("div",{id:"jump-to-top","data-aos":"fade-up","data-aos-duration":"300","data-aos-once":"false","data-aos-anchor-placement":"top-center",className:"fixed xl:right-80 right-2 bottom-24 z-20",children:(0,a.jsx)("i",{className:"shadow fas fa-chevron-up cursor-pointer p-2 rounded-full border bg-white dark:bg-hexo-black-gray",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}})})}},76843:function(e,t,r){r.r(t),r.d(t,{default:function(){return n}});var a=r(85893),l=r(26964),s=r(54838);function n(){let{tocVisible:e,changeTocVisible:t}=(0,s.useGitBookGlobal)(),{locale:r}=(0,l.O)();return(0,a.jsx)("div",{onClick:()=>{t(!e)},className:"text-black flex justify-center items-center dark:text-gray-200 dark:bg-hexo-black-gray py-2 px-2",children:(0,a.jsxs)("a",{id:"toc-button",className:"space-x-4 cursor-pointer hover:scale-150 transform duration-200",children:[(0,a.jsx)("i",{className:"fa-list-ol fas"}),(0,a.jsx)("span",{children:r.COMMON.TABLE_OF_CONTENTS})]})})}},91644:function(e,t,r){r.r(t),r.d(t,{default:function(){return n}});var a=r(85893),l=r(26964),s=r(54838);function n(){let{pageNavVisible:e,changePageNavVisible:t}=(0,s.useGitBookGlobal)(),{locale:r}=(0,l.O)();return(0,a.jsx)("div",{onClick:()=>{t(!e)},className:"text-black flex justify-center items-center dark:text-gray-200 dark:bg-hexo-black-gray py-2 px-2",children:(0,a.jsxs)("a",{id:"nav-button",className:"space-x-4 cursor-pointer hover:scale-150 transform duration-200",children:[(0,a.jsx)("i",{className:"fa-book fas"}),(0,a.jsx)("span",{children:r.COMMON.ARTICLE_LIST})]})})}},84430:function(e,t,r){r.r(t);var a=r(85893),l=r(79875),s=r(22468),n=r(69325),i=r(11858),o=r(6814);t.default=e=>{var t,r,d;let{group:c,expanded:u,toggleItem:f}=e,x=null==c?void 0:null===(t=c.items)||void 0===t?void 0:t.some(e=>e.isLatest);return(null==c?void 0:c.category)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{onClick:()=>{f()},className:"select-none relative flex justify-between text-sm cursor-pointer p-2 hover:bg-gray-50 rounded-md dark:hover:bg-yellow-100 dark:hover:text-yellow-600",children:[(0,a.jsx)("span",{children:null==c?void 0:c.category}),(0,a.jsx)("div",{className:"inline-flex items-center select-none pointer-events-none ",children:(0,a.jsx)("i",{className:"px-2 fas fa-chevron-left transition-all opacity-50 duration-200 ".concat(u?"-rotate-90":"")})}),x&&(0,n.JA)("GITBOOK_LATEST_POST_RED_BADGE",!1,i.default)&&!u&&(0,a.jsx)(l.Z,{})]},null==c?void 0:c.category),(0,a.jsx)(s.Z,{isOpen:u,onHeightChange:e.onHeightChange,children:null==c?void 0:null===(r=c.items)||void 0===r?void 0:r.map((e,t)=>(0,a.jsx)("div",{className:"ml-3 border-l",children:(0,a.jsx)(o.default,{className:"text-sm ml-3",post:e})},t))})]}):(0,a.jsx)(a.Fragment,{children:null==c?void 0:null===(d=c.items)||void 0===d?void 0:d.map((e,t)=>(0,a.jsx)("div",{children:(0,a.jsx)(o.default,{className:"text-sm py-2",post:e})},t))})}},7878:function(e,t,r){r.r(t);var a=r(85893),l=r(69325),s=r(26964),n=r(11163),i=r(67294),o=r(11858),d=r(84430);t.default=e=>{let{filteredNavPages:t}=e,{locale:r,currentSearch:c}=(0,s.O)(),u=(0,n.useRouter)(),f=function(e){if(!e)return[];let t=[];for(let r=0;r<e.length;r++){let a=e[r],s=(null==a?void 0:a.category)?null==a?void 0:a.category:"",n=null;(n=(0,l.JA)("GITBOOK_AUTO_SORT",!0,o.default)?t.find(e=>e.category===s):t[t.length-1])&&n.category===s?n.items.push(a):t.push({category:s,items:[a]})}return t}(t),[x,h]=(0,i.useState)([]),m=(0,l.JA)("GITBOOK_EXCLUSIVE_COLLAPSE",null,o.default);(0,i.useEffect)(()=>{setTimeout(()=>{h([function(e,t){let r=0,a=e.findIndex(e=>e.items.some(e=>t==="/"+e.slug));return -1!==a&&(r=a),r}(f,decodeURIComponent(u.asPath.split("?")[0]))])},500)},[u,t]);let v=e=>{let t=[...x];x.includes(e)?t=t.filter(t=>t!==e):t.push(e),m&&(t=t.filter(t=>t===e)),h(t)};return f&&0!==f.length?(0,a.jsx)("div",{id:"posts-wrapper",className:"w-full flex-grow space-y-0.5 tracking-wider",children:null==f?void 0:f.map((t,r)=>(0,a.jsx)(d.default,{group:t,onHeightChange:e.onHeightChange,expanded:x.includes(r),toggleItem:()=>v(r)},r))}):(0,a.jsx)("div",{className:"flex w-full items-center justify-center min-h-screen mx-auto md:-mt-20",children:(0,a.jsxs)("p",{className:"text-gray-500 dark:text-gray-300",children:[r.COMMON.NO_RESULTS_FOUND," ",c&&(0,a.jsx)("div",{children:c})]})})}},16209:function(e,t,r){r.r(t);var a=r(85893),l=r(26964),s=r(54838),n=r(11163),i=r(67294),o=r(7878);t.default=e=>{let{pageNavVisible:t,changePageNavVisible:r}=(0,s.useGitBookGlobal)(),{filteredNavPages:d}=e,{locale:c}=(0,l.O)(),u=(0,n.useRouter)();return(0,i.useEffect)(()=>{r(!1)},[u]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{id:"gitbook-left-float",className:"fixed top-0 left-0 z-40 md:hidden",children:(0,a.jsxs)("div",{className:"".concat(t?"animate__slideInLeft ":"-ml-80 animate__slideOutLeft"," \n                      overflow-y-hidden shadow-card w-72 duration-200 fixed left-1 bottom-16 rounded py-2 bg-white dark:bg-hexo-black-gray"),children:[(0,a.jsxs)("div",{className:"px-4 pb-2 flex justify-between items-center border-b font-bold",children:[(0,a.jsx)("span",{children:c.COMMON.ARTICLE_LIST}),(0,a.jsx)("i",{className:"fas fa-times p-1 cursor-pointer",onClick:()=>{r(!1)}})]}),(0,a.jsx)("div",{className:"dark:text-gray-400 text-gray-600 h-96 overflow-y-scroll p-3",children:(0,a.jsx)(o.default,{filteredNavPages:d})})]})}),(0,a.jsx)("div",{id:"left-drawer-background",className:"".concat(t?"block":"hidden"," fixed top-0 left-0 z-30 w-full h-full"),onClick:()=>{r(!t)}})]})}},42854:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var a=r(85893),l=r(67294);function s(){let[e,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{var r;e||(screen.width>=768&&Promise.all([(r="https://rf.revolvermaps.com/0/0/8.js?i=5jnp1havmh9&amp;m=0&amp;c=ff0000&amp;cr1=ffffff&amp;f=arial&amp;l=33",new Promise((e,t)=>{let a=document.getElementById("revolvermaps"),l=document.createElement("script");l.src=r,l&&(l.onload=()=>e(r),l.onerror=()=>t(r),a.appendChild(l))}))]).then(()=>{console.log("地图加载完成")}),t(!0))},[]),(0,a.jsx)("div",{id:"revolvermaps",className:"p-4"})}},57856:function(e,t,r){r.r(t);var a=r(85893),l=r(69325),s=r(78174),n=r(54838),i=r(67294);let o=!1;t.default=e=>{let{currentSearch:t,cRef:r,className:d}=e,c=(0,i.useRef)(),{searchModal:u,setFilteredNavPages:f,allNavPages:x}=(0,n.useGitBookGlobal)();(0,i.useImperativeHandle)(r,()=>({focus:()=>{var e;null==c||null===(e=c.current)||void 0===e||e.focus()}}));let h=()=>{if((0,l.JA)("ALGOLIA_APP_ID")){var e;null==u||null===(e=u.current)||void 0===e||e.openSearch()}let t=c.current.value;t?t=t.trim():f(x);let r=(0,s.deepClone)(x);for(let e=r.length-1;e>=0;e--)(r[e].title+"").toLowerCase().indexOf(t.toLowerCase())>-1||r.splice(e,1);f(r)},m=()=>{c.current.value="",h()},[v,g]=(0,i.useState)(!1),p=e=>{o||(c.current.value=e,e?g(!0):g(!1))};function j(){o=!0}return(0,a.jsxs)("div",{className:"flex w-full",children:[(0,a.jsx)("input",{ref:c,type:"text",className:"".concat(d," outline-none w-full text-sm pl-2 transition focus:shadow-lg font-light leading-10 text-black bg-gray-100 dark:bg-gray-800 dark:text-white"),onFocus:()=>{if((0,l.JA)("ALGOLIA_APP_ID")){var e;null==u||null===(e=u.current)||void 0===e||e.openSearch()}},onKeyUp:e=>{if((0,l.JA)("ALGOLIA_APP_ID")){var t;null==u||null===(t=u.current)||void 0===t||t.openSearch();return}13===e.keyCode?h(c.current.value):27===e.keyCode&&m()},onCompositionStart:j,onCompositionUpdate:j,onCompositionEnd:function(){o=!1},onChange:e=>p(e.target.value),defaultValue:t}),(0,a.jsx)("div",{className:"flex -ml-8 cursor-pointer float-right items-center justify-center py-2",onClick:h,children:(0,a.jsx)("i",{className:"hover:text-black transform duration-200 text-gray-500  dark:hover:text-gray-300 cursor-pointer fas fa-search"})}),v&&(0,a.jsx)("div",{className:"-ml-12 cursor-pointer flex float-right items-center justify-center py-2",children:(0,a.jsx)("i",{className:"fas fa-times hover:text-black transform duration-200 text-gray-400 cursor-pointer   dark:hover:text-gray-300",onClick:m})})]})}},24671:function(e,t,r){r.r(t);var a=r(85893),l=r(28481),s=r(69325),n=r(67294);t.default=()=>{let e=(0,s.JA)("CONTACT_GITHUB"),t=(0,s.JA)("CONTACT_TWITTER"),r=(0,s.JA)("CONTACT_TELEGRAM"),i=(0,s.JA)("CONTACT_LINKEDIN"),o=(0,s.JA)("CONTACT_WEIBO"),d=(0,s.JA)("CONTACT_INSTAGRAM"),c=(0,s.JA)("CONTACT_EMAIL"),u=(0,s.JA)("ENABLE_RSS"),f=(0,s.JA)("CONTACT_BILIBILI"),x=(0,s.JA)("CONTACT_YOUTUBE"),h=(0,s.JA)("CONTACT_XIAOHONGSHU"),m=(0,s.JA)("CONTACT_ZHISHIXINGQIU"),v=(0,s.JA)("CONTACT_WEHCHAT_PUBLIC"),[g,p]=(0,n.useState)(!1);return(0,a.jsx)("div",{className:"w-full justify-center flex-wrap flex",children:(0,a.jsxs)("div",{className:"space-x-3 text-xl flex items-center text-gray-600 dark:text-gray-300 ",children:[e&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"github",href:e,children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-github dark:hover:text-green-400 hover:text-green-600"})}),t&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"twitter",href:t,children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-twitter dark:hover:text-green-400 hover:text-green-600"})}),r&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:r,title:"telegram",children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-telegram dark:hover:text-green-400 hover:text-green-600"})}),i&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:i,title:"linkIn",children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-linkedin dark:hover:text-green-400 hover:text-green-600"})}),o&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"weibo",href:o,children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-weibo dark:hover:text-green-400 hover:text-green-600"})}),d&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"instagram",href:d,children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-instagram dark:hover:text-green-400 hover:text-green-600"})}),c&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"email",href:"mailto:".concat(c),children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fas fa-envelope dark:hover:text-green-400 hover:text-green-600"})}),u&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"RSS",href:"/rss/feed.xml",children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fas fa-rss dark:hover:text-green-400 hover:text-green-600"})}),f&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"bilibili",href:f,children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 dark:hover:text-green-400 hover:text-green-600 fab fa-bilibili"})}),x&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"youtube",href:x,children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-youtube dark:hover:text-green-400 hover:text-green-600"})}),h&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"小红书",href:h,children:(0,a.jsx)("img",{className:"transform hover:scale-125 duration-150 w-6",src:"/svg/xiaohongshu.svg",alt:"小红书"})}),m&&(0,a.jsxs)("a",{target:"_blank",rel:"noreferrer",title:"知识星球",href:m,children:[(0,a.jsx)("img",{className:"transform hover:scale-125 duration-150 w-6",src:"/svg/zhishixingqiu.svg",alt:"知识星球"})," "]}),v&&(0,a.jsxs)("button",{onMouseEnter:()=>{p(!0)},onMouseLeave:()=>{p(!1)},"aria-label":"微信公众号",children:[(0,a.jsx)("div",{id:"wechat-button",children:(0,a.jsx)("i",{className:"transform scale-105 hover:scale-125 duration-150 fab fa-weixin  dark:hover:text-green-400 hover:text-green-600"})}),(0,a.jsx)("div",{className:"absolute",children:(0,a.jsx)("div",{id:"pop",className:(g?"opacity-100 ":" invisible opacity-0")+" z-40 absolute bottom-10 -left-10 bg-white shadow-xl transition-all duration-200 text-center",children:(0,a.jsx)("div",{className:"p-2 mt-1 w-28 h-28",children:g&&(0,a.jsx)(l.default,{value:v})})})})]})]})})}},56118:function(e,t,r){r.r(t);var a=r(85893),l=r(41664),s=r.n(l);t.default=e=>{let{tag:t,selected:r=!1}=e;return(0,a.jsx)(s(),{href:r?"/":"/tag/".concat(encodeURIComponent(t.name)),passHref:!0,className:"cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200\n        mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-white\n         ".concat(r?"text-white dark:text-gray-300 bg-black dark:bg-black dark:hover:bg-gray-900":"text-gray-600 hover:shadow-xl dark:border-gray-400 notion-".concat(t.color,"_background dark:bg-gray-800")),children:(0,a.jsxs)("div",{className:"font-light dark:text-gray-400",children:[r&&(0,a.jsx)("i",{className:"mr-1 fas fa-tag"})," ",t.name+(t.count?"(".concat(t.count,")"):"")," "]})},t)}},54838:function(e,t,r){r.r(t),r.d(t,{Layout404:function(){return Y},LayoutArchive:function(){return V},LayoutBase:function(){return U},LayoutCategoryIndex:function(){return q},LayoutIndex:function(){return K},LayoutPostList:function(){return W},LayoutSearch:function(){return X},LayoutSlug:function(){return Z},LayoutTagIndex:function(){return Q},THEME_CONFIG:function(){return P.default},useGitBookGlobal:function(){return z}});var a=r(85893),l=r(86429),s=r(46767),n=r(91577),i=r(67968),o=r(31933),d=r(68020),c=r(69325),u=r(26964),f=r(78174),x=r(64042),h=r(5152),m=r.n(h),v=r(41664),g=r.n(v),p=r(11163),j=r(67294),b=r(72334),N=r(5268),y=r(39079),k=r(9468),w=r(34283),_=r(40814),A=r(77316),T=r(47126),O=r(53976),E=r(75367),C=r(66481),I=r(84789),L=r(94486),S=r(7878),G=r(16209),J=r(42854),R=r(57856),B=r(56118),P=r(11858),M=r(86051);let F=m()(()=>Promise.all([r.e(39969),r.e(85504)]).then(r.bind(r,85504)),{loadableGenerated:{webpack:()=>[85504]},ssr:!1}),D=m()(()=>r.e(3643).then(r.bind(r,3643)),{loadableGenerated:{webpack:()=>[3643]},ssr:!1}),H=(0,j.createContext)(),z=()=>(0,j.useContext)(H),U=e=>{let{children:t,post:r,allNavPages:l,latestPosts:i,slotLeft:o,slotRight:d,slotTop:f}=e,{fullWidth:h}=(0,u.O)(),m=(0,p.useRouter)(),[v,g]=(0,j.useState)(!1),[N,k]=(0,j.useState)(!1),[w,T]=(0,j.useState)(l),O=(0,j.useRef)(null);return(0,j.useEffect)(()=>{T(function(e,t,r){let a=JSON.parse(localStorage.getItem("post_read_time")||"{}");return r&&(a[(0,x.getShortId)(r.id)]=new Date().getTime()),localStorage.setItem("post_read_time",JSON.stringify(a)),null==e?void 0:e.map(e=>{let r={short_id:e.short_id,title:e.title||"",pageCoverThumbnail:e.pageCoverThumbnail||"",category:e.category||null,tags:e.tags||null,summary:e.summary||null,slug:e.slug,href:e.href,pageIcon:e.pageIcon||"",lastEditedDate:e.lastEditedDate};return t.some(t=>(null==t?void 0:t.id.indexOf(null==e?void 0:e.short_id))===0)&&(!a[e.short_id]||a[e.short_id]<new Date(e.lastEditedDate).getTime())?{...r,isLatest:!0}:r})}(l,i,r))},[m]),(0,a.jsxs)(H.Provider,{value:{searchModal:O,tocVisible:v,changeTocVisible:g,filteredNavPages:w,setFilteredNavPages:T,allNavPages:l,pageNavVisible:N,changePageNavVisible:k},children:[(0,a.jsx)(M.Style,{}),(0,a.jsxs)("div",{id:"theme-gitbook",className:"".concat((0,c.JA)("FONT_STYLE")," pb-16 md:pb-0 scroll-smooth bg-white dark:bg-hexo-black-gray w-full h-full min-h-screen justify-center dark:text-gray-300"),children:[(0,a.jsx)(F,{cRef:O,...e}),(0,a.jsx)(C.default,{...e}),(0,a.jsxs)("main",{id:"wrapper",className:((0,c.JA)("LAYOUT_SIDEBAR_REVERSE")?"flex-row-reverse":"")+"relative flex justify-between w-full h-full mx-auto",children:[h?null:(0,a.jsx)("div",{className:"hidden md:block border-r dark:border-transparent relative z-10 dark:bg-hexo-black-gray",children:(0,a.jsxs)("div",{className:"w-72 pt-14 pb-4 px-6 sticky top-0 h-screen flex justify-between flex-col",children:[(0,a.jsxs)("div",{className:"overflow-y-scroll scroll-hidden",children:[o,(0,a.jsx)(R.default,{className:"my-3 rounded-md"}),(0,a.jsx)(S.default,{filteredNavPages:w})]}),(0,a.jsx)(E.default,{...e})]})}),(0,a.jsxs)("div",{id:"center-wrapper",className:"flex flex-col justify-between w-full relative z-10 pt-14 min-h-screen dark:bg-black",children:[(0,a.jsxs)("div",{id:"container-inner",className:"w-full px-7 ".concat(h?"px-10":"max-w-3xl"," justify-center mx-auto"),children:[f,(0,a.jsx)(D,{className:"w-full",orientation:"horizontal"}),t,(0,a.jsx)(s.AdSlot,{type:"in-article"}),(0,a.jsx)(D,{className:"w-full",orientation:"horizontal"}),(0,a.jsx)(L.default,{})]}),(0,a.jsx)("div",{className:"md:hidden",children:(0,a.jsx)(E.default,{...e})})]}),h?null:(0,a.jsx)("div",{style:{width:"20rem"},className:"hidden xl:block dark:border-transparent flex-shrink-0 relative z-10 ",children:(0,a.jsxs)("div",{className:"py-14 px-6 sticky top-0",children:[(0,a.jsx)(y.default,{post:(null==e?void 0:e.post)?null==e?void 0:e.post:e.notice}),(0,a.jsxs)("div",{className:"py-4",children:[(0,a.jsx)(A.default,{...e}),d,"/"===m.route&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(I.default,{...e}),"true"===(0,c.JA)("GITBOOK_WIDGET_REVOLVER_MAPS",null,P.default)&&(0,a.jsx)(J.default,{}),(0,a.jsx)(n.default,{})]}),(0,a.jsx)(b.default,{...e})]}),(0,a.jsx)(s.AdSlot,{type:"in-article"}),(0,a.jsx)(n.default,{})]})})]}),(0,a.jsx)(G.default,{...e,filteredNavPages:w}),(0,a.jsx)(_.default,{...e})]})]})},K=e=>{let t=(0,p.useRouter)();return(0,j.useEffect)(()=>{t.push((0,c.JA)("GITBOOK_INDEX_PAGE",null,P.default)).then(()=>{setTimeout(()=>{if(f.isBrowser&&!document.getElementById("notion-article")){console.log("请检查您的Notion数据库中是否包含此slug页面： ",(0,c.JA)("GITBOOK_INDEX_PAGE",null,P.default));let e=document.querySelector("#theme-gitbook #container-inner"),t='<h1 class="text-3xl pt-12  dark:text-gray-300">配置有误</h1><blockquote class="notion-quote notion-block-ce76391f3f2842d386468ff1eb705b92"><div>请在您的notion中添加一个slug为'.concat((0,c.JA)("GITBOOK_INDEX_PAGE",null,P.default),"的文章</div></blockquote>");null==e||e.insertAdjacentHTML("afterbegin",t)}},7e3)})},[]),(0,a.jsx)(a.Fragment,{})},W=e=>(0,a.jsx)(a.Fragment,{}),Z=e=>{var t;let{post:r,prev:n,next:u,lock:x,validPassword:h}=e,m=(0,p.useRouter)();return(0,j.useEffect)(()=>{r||setTimeout(()=>{f.isBrowser&&!document.getElementById("notion-article")&&m.push("/404").then(()=>{console.warn("找不到页面",m.asPath)})},1e3*(0,c.JA)("POST_WAITING_TIME_FOR_404"))},[r]),(0,a.jsxs)(a.Fragment,{children:[x&&(0,a.jsx)(k.ArticleLock,{validPassword:h}),!x&&(0,a.jsxs)("div",{id:"container",children:[(0,a.jsxs)("h1",{className:"text-3xl pt-12  dark:text-gray-300",children:[(0,c.JA)("POST_TITLE_ICON")&&(0,a.jsx)(i.Z,{icon:null==r?void 0:r.pageIcon}),null==r?void 0:r.title]}),r&&(0,a.jsxs)("section",{id:"article-wrapper",className:"px-1",children:[(0,a.jsx)(o.default,{post:r}),(0,a.jsx)(d.default,{post:r}),(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,c.JA)("POST_DETAIL_CATEGORY",null,P.default)&&(null==r?void 0:r.category)&&(0,a.jsx)(O.default,{category:r.category}),(0,a.jsx)("div",{children:(0,c.JA)("POST_DETAIL_TAG",null,P.default)&&(null==r?void 0:null===(t=r.tagItems)||void 0===t?void 0:t.map(e=>(0,a.jsx)(B.default,{tag:e},e.name)))})]}),(null==r?void 0:r.type)==="Post"&&(0,a.jsx)(N.default,{prev:n,next:u}),(0,a.jsx)(s.AdSlot,{}),(0,a.jsx)(D,{className:"w-full",orientation:"horizontal"}),(0,a.jsx)(l.default,{frontMatter:r})]}),(0,a.jsx)(T.default,{...e})]})]})},X=e=>(0,a.jsx)(a.Fragment,{}),V=e=>{var t;let{archivePosts:r}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"mb-10 pb-20 md:py-12 py-3  min-h-full",children:null===(t=Object.keys(r))||void 0===t?void 0:t.map(e=>(0,a.jsx)(w.default,{archiveTitle:e,archivePosts:r},e))})})},Y=e=>(0,a.jsx)("div",{className:"w-full h-96 py-80 flex justify-center items-center",children:"404 Not found."}),q=e=>{let{categoryOptions:t}=e,{locale:r}=(0,u.O)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-700 py-10",children:[(0,a.jsxs)("div",{className:"dark:text-gray-200 mb-5",children:[(0,a.jsx)("i",{className:"mr-4 fas fa-th"}),r.COMMON.CATEGORY,":"]}),(0,a.jsx)("div",{id:"category-list",className:"duration-200 flex flex-wrap",children:null==t?void 0:t.map(e=>(0,a.jsx)(g(),{href:"/category/".concat(e.name),passHref:!0,legacyBehavior:!0,children:(0,a.jsxs)("div",{className:"hover:text-black dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600 px-5 cursor-pointer py-2 hover:bg-gray-100",children:[(0,a.jsx)("i",{className:"mr-4 fas fa-folder"}),e.name,"(",e.count,")"]})},e.name))})]})})},Q=e=>{let{tagOptions:t}=e,{locale:r}=(0,u.O)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-700 py-10",children:[(0,a.jsxs)("div",{className:"dark:text-gray-200 mb-5",children:[(0,a.jsx)("i",{className:"mr-4 fas fa-tag"}),r.COMMON.TAGS,":"]}),(0,a.jsx)("div",{id:"tags-list",className:"duration-200 flex flex-wrap",children:null==t?void 0:t.map(e=>(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(B.default,{tag:e},e.name)},e.name))})]})})}},86051:function(e,t,r){r.r(t),r.d(t,{Style:function(){return n}});var a=r(85893),l=r(1822),s=r.n(l);let n=()=>(0,a.jsx)(s(),{id:"fc70d4ce3bc23e2a",children:".dark body{background-color:black}.bottom-button-group{-webkit-box-shadow:0px -3px 10px 0px rgba(0,0,0,.1);-moz-box-shadow:0px -3px 10px 0px rgba(0,0,0,.1);box-shadow:0px -3px 10px 0px rgba(0,0,0,.1)}"})}}]);