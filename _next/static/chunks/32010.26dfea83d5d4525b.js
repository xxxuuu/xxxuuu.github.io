"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32010,63756,44313,61877,42365,57930,26364,33901,84230,22668,85999,25512,29019,6429,19590,85504,53891,68020],{85504:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var a=r(85893),l=r(84588),n=r(69325),s=r(26964),i=r(24955),o=r.n(i),c=r(23493),d=r.n(c),u=r(41664),x=r.n(u),h=r(11163),m=r(67294),f=r(46977);let p=[{key:"↑ ↓",action:"选择"},{key:"Enter",action:"跳转"},{key:"Esc",action:"关闭"}];function g(e){let{cRef:t}=e,[r,s]=(0,m.useState)([]),[i,c]=(0,m.useState)(!1),[u,x]=(0,m.useState)(0),[g,y]=(0,m.useState)(null),[b,w]=(0,m.useState)(0),[N,k]=(0,m.useState)(0),[O,E]=(0,m.useState)(0),[A,C]=(0,m.useState)(0),[S,M]=(0,m.useState)(!1),I=(0,m.useRef)(null),_=(0,h.useRouter)();(0,f.y1)("ctrl+k",e=>{e.preventDefault(),c(!0)}),(0,f.y1)("down",e=>{e.preventDefault(),A<r.length-1&&C(A+1)},{enableOnFormTags:!0}),(0,f.y1)("up",e=>{e.preventDefault(),A>0&&C(A-1)},{enableOnFormTags:!0}),(0,f.y1)("esc",e=>{e.preventDefault(),c(!1)},{enableOnFormTags:!0});let T=()=>{r.length>0&&(window.location.href="".concat((0,n.JA)("SUB_PATH",""),"/").concat(r[A].slug))};(0,f.y1)("enter",e=>{r.length>0&&T(L)},{enableOnFormTags:!0});let R=()=>{C(0),y(""),s([]),E(0),w(0),k(0),I.current&&(I.current.value="")};(0,m.useEffect)(()=>{c(!1)},[_]),(0,m.useEffect)(()=>{i?setTimeout(()=>{var e;null===(e=I.current)||void 0===e||e.focus()},100):R()},[i]),(0,m.useImperativeHandle)(t,()=>({openSearch:()=>{c(!0)}}));let L=o()((0,n.JA)("ALGOLIA_APP_ID"),(0,n.JA)("ALGOLIA_SEARCH_ONLY_APP_KEY")).initIndex((0,n.JA)("ALGOLIA_INDEX")),P=async(e,t)=>{if(y(e),x(t),s([]),E(0),w(0),k(0),C(0),e&&""!==e){M(!0);try{let{hits:r,nbHits:a,nbPages:n,processingTimeMS:i}=await L.search(e,{page:t,hitsPerPage:10});E(i),w(n),k(a),s(r),M(!1);let o=document.getElementById("search-wrapper").getElementsByClassName("replace");setTimeout(()=>{(0,l.Z)({doms:o,search:e,target:{element:"span",className:"font-bold border-b border-dashed"}})},200)}catch(e){console.error("Algolia search error:",e)}}},F=(0,m.useRef)(d()(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;P(e,t)},1e3)),H=(0,m.useRef)(null),D=e=>{let t=e.target.value;H.current&&clearTimeout(H.current),H.current=setTimeout(()=>{F.current(t)},800)},J=()=>{c(!1)};return(0,n.JA)("ALGOLIA_APP_ID")?(0,a.jsxs)("div",{id:"search-wrapper",className:"".concat(i?"opacity-100":"invisible opacity-0 pointer-events-none"," z-30 fixed h-screen w-screen left-0 top-0 sm:mt-12 flex items-start justify-center mt-0"),children:[(0,a.jsxs)("div",{className:"".concat(i?"opacity-100":"invisible opacity-0 translate-y-10"," flex flex-col justify-between w-full min-h-[10rem] h-full md:h-fit max-w-xl dark:bg-hexo-black-gray dark:border-gray-800 bg-white dark:bg- p-5 rounded-lg z-50 shadow border hover:border-blue-600 duration-300 transition-all "),children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("div",{className:"text-2xl text-blue-600 dark:text-yellow-600 font-bold",children:"搜索"}),(0,a.jsx)("div",{children:(0,a.jsx)("i",{className:"text-gray-600 fa-solid fa-xmark p-1 cursor-pointer hover:text-blue-600",onClick:J})})]}),(0,a.jsx)("input",{type:"text",placeholder:"在这里输入搜索关键词...",onChange:e=>D(e),className:"text-black dark:text-gray-200 bg-gray-50 dark:bg-gray-600 outline-blue-500 w-full px-4 my-2 py-1 mb-4 border rounded-md",ref:I}),(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsx)(v,{})}),0===r.length&&g&&!S&&(0,a.jsx)("div",{children:(0,a.jsxs)("p",{className:" text-slate-600 text-center my-4 text-base",children:[" ","无法找到相关结果",(0,a.jsxs)("span",{className:"font-semibold",children:['"',g,'"']})]})}),(0,a.jsx)("ul",{className:"flex-1 overflow-auto",children:r.map((e,t)=>(0,a.jsx)("li",{onMouseEnter:()=>C(t),onClick:()=>T(t),className:"cursor-pointer replace my-2 p-2 duration-100 \n              rounded-lg\n              ".concat(A===t?"bg-blue-600 dark:bg-yellow-600":""),children:(0,a.jsx)("a",{className:"".concat(A===t?" text-white":" text-black dark:text-gray-300 "),children:e.title})},e.objectID))}),(0,a.jsx)(j,{totalPage:b,page:u,switchPage:e=>{F.current(g,e)}}),(0,a.jsxs)("div",{className:"flex items-center justify-between mt-2 sm:text-sm text-xs dark:text-gray-300",children:[0===N&&(0,a.jsx)("div",{className:"flex items-center",children:p.map((e,t)=>(0,a.jsxs)(m.Fragment,{children:[(0,a.jsx)("div",{className:"border-gray-300 dark:text-gray-300 text-gray-600 px-2 rounded border inline-block",children:e.key}),(0,a.jsx)("span",{className:"ml-2 mr-4  text-gray-600 dark:text-gray-300",children:e.action})]},t))}),(0,a.jsx)("div",{children:N>0&&(0,a.jsxs)("p",{children:["共搜索到 ",N," 条结果，用时 ",O," 毫秒"]})}),(0,a.jsx)("div",{className:"text-gray-600 dark:text-gray-300  text-right",children:(0,a.jsxs)("span",{children:[(0,a.jsx)("i",{className:"fa-brands fa-algolia"})," Algolia 提供搜索服务"]})})]})]}),(0,a.jsx)("div",{onClick:J,className:"z-30 fixed top-0 left-0 w-full h-full flex items-center justify-center glassmorphism"})]}):(0,a.jsx)(a.Fragment,{})}function v(){let{tagOptions:e}=(0,s.O)(),t=null==e?void 0:e.slice(0,10);return(0,a.jsx)("div",{id:"tags-group",className:"dark:border-gray-700 space-y-2",children:null==t?void 0:t.map((e,t)=>(0,a.jsx)(x(),{passHref:!0,href:"/tag/".concat(encodeURIComponent(e.name)),className:"cursor-pointer inline-block whitespace-nowrap",children:(0,a.jsxs)("div",{className:"flex items-center text-black dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-yellow-600 hover:scale-110 hover:text-white rounded-lg px-2 py-0.5 duration-150 transition-all",children:[(0,a.jsxs)("div",{className:"text-lg",children:[e.name," "]}),e.count?(0,a.jsx)("sup",{className:"relative ml-1",children:e.count}):(0,a.jsx)(a.Fragment,{})]})},t))})}function j(e){let{totalPage:t,page:r,switchPage:l}=e;return t<=0?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)("div",{className:"flex space-x-1 w-full justify-center py-1",children:Array.from({length:t},(e,t)=>{let n=r===t?"font-bold text-white bg-blue-600 dark:bg-yellow-600 rounded":"hover:text-blue-600 hover:font-bold dark:text-gray-300";return(0,a.jsx)("div",{onClick:()=>l(t),className:"text-center cursor-pointer w-6 h-6 ".concat(n),children:t+1},t)})})}},22468:function(e,t,r){var a=r(85893),l=r(67294);let n=e=>{let{collapseRef:t}=e,r=(0,l.useRef)(null),n=e.type||"vertical";(0,l.useImperativeHandle)(t,()=>({updateCollapseHeight:t=>{let{height:a,increase:l}=t;e.isOpen&&(r.current.style.height=r.current.scrollHeight,r.current.style.height="auto")}}));let s=e=>{let t=e.scrollHeight,r=e.scrollWidth;requestAnimationFrame(function(){switch(n){case"horizontal":e.style.width=r+"px",requestAnimationFrame(function(){e.style.width="0px"});break;case"vertical":e.style.height=t+"px",requestAnimationFrame(function(){e.style.height="0px"})}})},i=e=>{let t=e.scrollHeight,r=e.scrollWidth,a=0;switch(n){case"horizontal":e.style.width=r+"px",a=setTimeout(()=>{e.style.width="auto"},400);break;case"vertical":e.style.height=t+"px",a=setTimeout(()=>{e.style.height="auto"},400)}clearTimeout(a)};return(0,l.useEffect)(()=>{e.isOpen?i(r.current):s(r.current),(null==e?void 0:e.onHeightChange)&&e.onHeightChange({height:r.current.scrollHeight,increase:e.isOpen})},[e.isOpen]),(0,a.jsx)("div",{ref:r,style:"vertical"===n?{height:"0px",willChange:"height"}:{width:"0px",willChange:"width"},className:"".concat(e.className||""," overflow-hidden duration-200 "),children:e.children})};n.defaultProps={isOpen:!1},t.Z=n},76898:function(e,t,r){var a=r(85893),l=r(26964),n=r(73214),s=r(67294);t.Z=e=>{let{cRef:t,className:r}=e,{isDarkMode:i,toggleDarkMode:o}=(0,l.O)();return(0,s.useImperativeHandle)(t,()=>({handleChangeDarkMode:()=>{o()}})),(0,a.jsx)("div",{onClick:o,className:"".concat(r||""," flex justify-center dark:text-gray-200 text-gray-800"),children:(0,a.jsxs)("div",{id:"darkModeButton",className:" hover:scale-110 cursor-pointer transform duration-200 w-5 h-5",children:[" ",i?(0,a.jsx)(n.kO,{}):(0,a.jsx)(n.JF,{})]})})}},84588:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(78174);async function l(e){let{doms:t,search:r,target:l}=e;if(t&&r&&l)try{await (0,a.loadExternalResource)("https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.11.1/mark.min.js","js");let e=window.Mark;if(t instanceof HTMLCollection)for(let a of t){let t=RegExp(r,"gim");new e(a).markRegExp(t,l)}else{let a=RegExp(r,"gim");new e(t).markRegExp(a,l)}}catch(e){console.error("markjs 加载失败",e)}}},68020:function(e,t,r){r.r(t);var a=r(85893),l=r(69325),n=r(5152);let s=r.n(n)()(()=>Promise.all([r.e(56249),r.e(40892)]).then(r.bind(r,40892)),{loadableGenerated:{webpack:()=>[40892]},ssr:!1});t.default=e=>{let{post:t}=e;return JSON.parse((0,l.JA)("POST_SHARE_BAR_ENABLE"))&&t&&(null==t?void 0:t.type)==="Post"?(0,a.jsx)("div",{className:"m-1 overflow-x-auto",children:(0,a.jsx)("div",{className:"flex w-full md:justify-end",children:(0,a.jsx)(s,{post:t})})}):(0,a.jsx)(a.Fragment,{})}},53040:function(e,t,r){r.d(t,{f:function(){return l}});let{loadExternalResource:a}=r(78174),l=async()=>{await a("/css/wow/animate.css","css"),await a("https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js","js");let e=window.WOW;e&&new e().init()}},31761:function(e,t,r){function a(e,t){if(!e||!t)return e||"";let r=new Date(e).toLocaleDateString(t,{year:"numeric",month:"short",day:"numeric"});return"zh"===t.slice(0,2).toLowerCase()?r.replace("年","-").replace("月","-").replace("日",""):r}function l(e,t){let r=new Date(e),a={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};for(let e in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length))),a)RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?a[e]:("00"+a[e]).substr((""+a[e]).length)));return t.trim()}r.d(t,{Z:function(){return a},x:function(){return l}})},63756:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var a=r(85893),l=r(26964),n=r(31761),s=r(41664),i=r.n(s);function o(e){let t=Object.create(e.allNavPages),{locale:r}=(0,l.O)();t.sort((e,t)=>(null==t?void 0:t.publishDate)-(null==e?void 0:e.publishDate));let s=[];return t.forEach(e=>{let t=(0,n.x)(e.publishDate,"yyyy-MM");s[t]||s.push(t)}),s=s.slice(0,5),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"text-2xl dark:text-white mb-2",children:r.NAV.ARCHIVE}),null==s?void 0:s.map((e,t)=>(0,a.jsx)("div",{children:(0,a.jsx)(i(),{href:"/archive#".concat(e),className:"hover:underline dark:text-green-500",children:e})},t))]})}},44313:function(e,t,r){r.r(t),r.d(t,{ArticleInfo:function(){return o}});var a=r(85893),l=r(26964),n=r(31761),s=r(41664),i=r.n(s);let o=e=>{var t,r;let{post:s}=e,{locale:o}=(0,l.O)();return(0,a.jsxs)("section",{className:"w-full mx-auto mb-4",children:[(0,a.jsx)("h2",{className:"text-5xl font-semibold py-10 dark:text-white text-center",children:null==s?void 0:s.title}),(0,a.jsxs)("div",{className:"flex gap-3 font-semibold text-sm items-center justify-center",children:[(0,a.jsx)(i(),{href:"/archive#".concat((0,n.x)(null==s?void 0:s.publishDate,"yyyy-MM")),passHref:!0,className:"pl-1 mr-2 cursor-pointer",children:null==s?void 0:s.publishDay}),(null==s?void 0:s.type)!=="Page"&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i(),{href:"/category/".concat(null==s?void 0:s.category),passHref:!0,className:"cursor-pointer text-md mr-2 text-green-500",children:null==s?void 0:s.category})}),(0,a.jsxs)("div",{className:"flex py-1 space-x-3",children:[(null==s?void 0:null===(t=s.tags)||void 0===t?void 0:t.length)>0&&(0,a.jsxs)(a.Fragment,{children:[o.COMMON.TAGS," ",(0,a.jsx)("span",{children:":"})]}),null==s?void 0:null===(r=s.tags)||void 0===r?void 0:r.map(e=>(0,a.jsx)(i(),{href:"/tag/".concat(e),className:"text-yellow-500 mr-2",children:e},e))]})]})]})}},61877:function(e,t,r){r.r(t),r.d(t,{ArticleLock:function(){return s}});var a=r(85893),l=r(26964),n=r(67294);let s=e=>{let{validPassword:t}=e,{locale:r}=(0,l.O)(),s=()=>{let e=document.getElementById("password");if(!t(null==e?void 0:e.value)){let e=document.getElementById("tips");e&&(e.innerHTML="",e.innerHTML="<div class='text-red-500 animate__shakeX animate__animated'>".concat(r.COMMON.PASSWORD_ERROR,"</div>"))}},i=(0,n.useRef)(null);return(0,n.useEffect)(()=>{i.current.focus()},[]),(0,a.jsx)("div",{id:"container",className:"w-full flex justify-center items-center h-96 ",children:(0,a.jsxs)("div",{className:"text-center space-y-3",children:[(0,a.jsx)("div",{className:"font-bold",children:r.COMMON.ARTICLE_LOCK_TIPS}),(0,a.jsxs)("div",{className:"flex mx-4",children:[(0,a.jsx)("input",{id:"password",type:"password",onKeyDown:e=>{"Enter"===e.key&&s()},ref:i,className:"outline-none w-full text-sm pl-5 rounded-l transition focus:shadow-lg font-light leading-10 text-black dark:bg-gray-500 bg-gray-50"}),(0,a.jsx)("div",{onClick:s,className:"px-3 whitespace-nowrap cursor-pointer items-center justify-center py-2 rounded-r duration-300 bg-gray-300",children:(0,a.jsxs)("i",{className:"duration-200 cursor-pointer fas fa-key dark:text-black",children:["\xa0",r.COMMON.SUBMIT]})})]}),(0,a.jsx)("div",{id:"tips"})]})})}},42365:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var a=r(85893),l=r(41664),n=r.n(l);function s(e){let{archiveTitle:t,archivePosts:r}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{id:t,className:"pt-16 pb-4 text-3xl dark:text-gray-300",children:t}),(0,a.jsx)("ul",{children:r[t].map(e=>(0,a.jsx)("li",{className:"border-l-2 p-1 text-xs md:text-base items-center  hover:scale-x-105 hover:border-gray-500 dark:hover:border-gray-300 dark:border-gray-400 transform duration-500",children:(0,a.jsxs)("div",{id:null==e?void 0:e.publishDay,children:[(0,a.jsx)("span",{className:"text-gray-400",children:null==e?void 0:e.publishDay})," \xa0",(0,a.jsx)(n(),{href:null==e?void 0:e.href,className:"dark:text-gray-400  dark:hover:text-gray-300 overflow-x-hidden hover:underline cursor-pointer text-gray-600",children:e.title})]})},e.id))})]},t)}},19278:function(e,t,r){r.r(t),r.d(t,{BlogListScroll:function(){return u}});var a=r(85893),l=r(69325),n=r(26964),s=r(93096),i=r.n(s),o=r(67294),c=r(51345),d=r(83);let u=e=>{let{posts:t}=e,{locale:r}=(0,n.O)(),[s,u]=(0,o.useState)(1),x=!1,h=t?Object.assign(t).slice(0,parseInt((0,l.JA)("POSTS_PER_PAGE",12,null==e?void 0:e.NOTION_CONFIG))*s):[];if(t){let r=t.length;x=s*parseInt((0,l.JA)("POSTS_PER_PAGE",12,null==e?void 0:e.NOTION_CONFIG))<r}let m=()=>{x&&u(s+1)},f=(0,o.useRef)(null),p=(0,o.useCallback)(i()(()=>{window.scrollY+window.outerHeight>(f&&f.current?f.current.clientHeight:0)+100&&m()},500)),g=(0,l.JA)("MOVIE_POST_LIST_COVER",null,c.default);return(0,o.useEffect)(()=>(window.addEventListener("scroll",p),()=>{window.removeEventListener("scroll",p)})),(0,a.jsxs)("div",{id:"posts-wrapper",className:"w-full ".concat(g?"md:pr-2":"md:pr-12","} mb-12"),ref:f,children:[null==h?void 0:h.map(e=>(0,a.jsx)(d.default,{post:e},e.id)),(0,a.jsxs)("div",{onClick:m,className:"w-full my-4 py-4 text-center cursor-pointer ",children:[" ",x?r.COMMON.MORE:"".concat(r.COMMON.NO_MORE," \uD83D\uDE30")," "]})]})}},61445:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var a=r(85893),l=r(27134),n=r(69325),s=r(26964),i=r(41664),o=r.n(i),c=r(51345);function d(e){let{recommendPosts:t,siteInfo:r}=e,{locale:i}=(0,s.O)();return(0,n.JA)("MOVIE_ARTICLE_RECOMMEND",null,c.default)&&t&&0!==t.length?(0,a.jsxs)("div",{className:"py-8",children:[(0,a.jsx)("div",{className:" mb-2 px-1 flex flex-nowrap justify-between",children:(0,a.jsxs)("div",{className:"dark:text-gray-300",children:[(0,a.jsx)("i",{className:"mr-2 fas fa-thumbs-up"}),i.COMMON.RELATE_POSTS]})}),(0,a.jsx)("div",{className:"flex flex-nowrap gap-4",children:t.map(e=>{let t=(null==e?void 0:e.pageCoverThumbnail)?e.pageCoverThumbnail:null==r?void 0:r.pageCover;return(0,a.jsx)(o(),{title:e.title,href:null==e?void 0:e.href,passHref:!0,className:"flex rounded-lg h-60 w-48 cursor-pointer overflow-hidden",children:(0,a.jsxs)("div",{className:"h-full w-full relative group shadow-movie",children:[(0,a.jsx)("div",{className:"absolute bottom-4 w-full z-20 duration-300 ",children:(0,a.jsx)("div",{className:"z-10 text-lg px-4 font-bold text-white shadow-text select-none",children:e.title})}),(0,a.jsx)("div",{className:"h-3/4 w-full absolute left-0 bottom-0 z-10",children:(0,a.jsx)("div",{className:"h-full w-full absolute opacity-80 group-hover:opacity-100 transition-all duration-1000 bg-gradient-to-b from-transparent to-black"})}),(0,a.jsx)(l.Z,{src:t,className:"absolute top-0 w-full h-full object-cover object-center group-hover:scale-110 group-hover:brightness-50 transform duration-200"})]})},e.id)})})]}):(0,a.jsx)(a.Fragment,{})}},57930:function(e,t,r){r.r(t);var a=r(85893),l=r(69325),n=r(26964),s=r(41664),i=r.n(s);t.default=e=>{let{currentCategory:t,categoryOptions:r}=e,{locale:s}=(0,n.O)();if(!r||0===r.length)return(0,a.jsx)(a.Fragment,{});let o=(0,l.JA)("PREVIEW_CATEGORY_COUNT"),c=r.slice(0,o);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-2xl dark:text-white",children:s.COMMON.CATEGORY}),(0,a.jsx)("div",{id:"category-list",className:"dark:border-gray-600 flex flex-col",children:c.map(e=>{let r=t===e.name;return(0,a.jsxs)(i(),{href:"/category/".concat(e.name),passHref:!0,className:(r?"hover:text-white dark:hover:text-white bg-gray-600 text-white ":"dark:text-green-400 text-gray-500 hover:text-white hover:bg-gray-500 dark:hover:text-white")+" w-full items-center duration-300 px-2  cursor-pointer py-1 font-light",children:[(0,a.jsx)("i",{className:"".concat(r?"text-white fa-folder-open ":"text-gray-500 fa-folder "," mr-2 fas")}),e.name,"(",e.count,")"]},e.name)})})]})})}},26364:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var a=r(85893),l=r(41664),n=r.n(l);function s(e){let{category:t}=e;return(0,a.jsx)(n(),{href:"/category/".concat(t.name),passHref:!0,legacyBehavior:!0,children:(0,a.jsxs)("div",{className:"text-2xl hover:text-black dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600 px-5 cursor-pointer py-2 hover:bg-gray-100",children:[(0,a.jsx)("i",{className:"mr-4 fas fa-folder"}),t.name,"(",t.count,")"]})},t.name)}},35845:function(e,t,r){r.r(t),r.d(t,{Footer:function(){return s}});var a=r(85893),l=r(76898),n=r(69325);let s=e=>{let t=new Date().getFullYear(),r=(0,n.JA)("SINCE"),s=parseInt(r)<t?r+"-"+t:t;return(0,a.jsxs)("footer",{className:"z-10 relative w-full bg-white px-6 border-t dark:border-hexo-black-gray dark:bg-hexo-black-gray ",children:[(0,a.jsx)(l.Z,{className:"text-center pt-4"}),(0,a.jsxs)("div",{className:"container mx-auto max-w-4xl py-6 md:flex flex-wrap md:flex-no-wrap md:justify-between items-center text-sm",children:[(0,a.jsxs)("div",{className:"text-center",children:[" \xa9","".concat(s)," ",(0,n.JA)("AUTHOR"),". All rights reserved."]}),(0,a.jsxs)("div",{className:"md:p-0 text-center md:text-right text-xs",children:[(0,n.JA)("BEI_AN")&&(0,a.jsxs)("a",{href:"https://beian.miit.gov.cn/",className:"text-black dark:text-gray-200 no-underline hover:underline ml-4",children:[(0,n.JA)("BEI_AN")," "]}),(0,a.jsxs)("span",{className:"dark:text-gray-200 no-underline ml-4",children:["Powered by",(0,a.jsxs)("a",{href:"https://github.com/tangly1024/NotionNext",className:" hover:underline",children:[" NotionNext ",(0,n.JA)("VERSION"),"  "]})]})]})]})]})}},99189:function(e,t,r){r.r(t),r.d(t,{Header:function(){return f}});var a=r(85893),l=r(22468),n=r(69325),s=r(26964),i=r(41664),o=r.n(i),c=r(11163),d=r(67294),u=r(66733),x=r(51345),h=r(22668),m=r(85999);let f=e=>{let{collapseRef:t,searchModal:r}=(0,u.useMovieGlobal)(),i=(0,c.useRouter)(),{customNav:f,customMenu:p}=e,{locale:g}=(0,s.O)(),[v,j]=(0,d.useState)(!1),[y,b]=(0,d.useState)(!1),w=[{id:1,icon:"fa-solid fa-house",name:g.NAV.INDEX,href:"/",show:(0,n.JA)("MOVIE_MENU_INDEX",null,x.default)},{id:2,icon:"fas fa-search",name:g.NAV.SEARCH,href:"/search",show:(0,n.JA)("MOVIE_MENU_SEARCH",null,x.default)},{id:3,icon:"fas fa-archive",name:g.NAV.ARCHIVE,href:"/archive",show:(0,n.JA)("MOVIE_MENU_ARCHIVE",null,x.default)}];f&&(w=w.concat(f));for(let e=0;e<w.length;e++)w[e].id!==e&&(w[e].id=e);(0,n.JA)("CUSTOM_MENU")&&(w=p);let N=()=>{(0,n.JA)("ALGOLIA_APP_ID")?r.current.openSearch():b(!y)};return(0,d.useEffect)(()=>{y&&setTimeout(()=>{document.getElementById("search").focus()},100)},[y]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("header",{className:"w-full px-8 relative z-20 flex lg:flex-row md:flex-col justify-between items-center",children:[(0,a.jsx)(o(),{href:"/",className:"whitespace-nowrap py-6 text-2xl md:text-3xl font-bold text-gray-dark no-underline flex items-center",children:(0,n.JA)("TITLE")}),(0,a.jsx)("div",{className:"md:w-auto text-center flex",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("nav",{id:"nav-mobile",className:"leading-8 justify-center w-full hidden md:flex",children:null==w?void 0:w.map((e,t)=>e&&e.show&&(0,a.jsx)(m.MenuItemDrop,{link:e},t))}),(0,a.jsx)("div",{onClick:N,className:"flex items-center cursor-pointer",children:(0,a.jsx)("i",{className:"fas fa-search dark:text-white"})}),(0,a.jsxs)("div",{className:"".concat(y?"top-16 visible opacity-100":"top-10 invisible opacity-0"," duration-200 transition-all max-w-md absolute  w-80 right-4 p-2 flex flex-col gap-2"),children:[(0,a.jsx)("input",{autoFocus:!0,id:"search",onClick:N,onKeyUp:e=>{if(13===e.keyCode){let e=document.getElementById("search").value;e&&i.push({pathname:"/search/"+e})}},className:"float-left w-full outline-none h-full p-2 rounded text-black bg-gray-100","aria-label":"Submit search",type:"search",name:"s",autoComplete:"off",placeholder:"Type then hit enter to search..."}),(0,a.jsxs)("button",{onClick:()=>{let e=document.getElementById("search").value;e&&i.push({pathname:"/search/"+e})},className:"w-full bg-[#383838] rounded py-2",children:[g.COMMON.SEARCH," 搜索"]})]}),(0,a.jsx)("div",{className:"md:hidden",children:(0,a.jsx)("div",{onClick:()=>{j(!v)},className:"w-8 cursor-pointer",children:v?(0,a.jsx)("i",{className:"fas fa-times"}):(0,a.jsx)("i",{className:"fas fa-bars"})})})]})})]}),(0,a.jsx)(l.Z,{collapseRef:t,type:"vertical",isOpen:v,children:(0,a.jsx)("menu",{id:"nav-menu-mobile",className:"block md:hidden my-auto justify-start",children:null==w?void 0:w.map((e,r)=>e&&e.show&&(0,a.jsx)(h.MenuItemCollapse,{onHeightChange:e=>{var r;return null===(r=t.current)||void 0===r?void 0:r.updateCollapseHeight(e)},link:e},r))})})]})}},33901:function(e,t,r){r.r(t);var a=r(85893),l=r(26964);t.default=()=>{let{locale:e}=(0,l.O)();return(0,a.jsx)("div",{title:e.POST.TOP,className:"cursor-pointer p-2 text-center",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:(0,a.jsx)("i",{className:"fas fa-angle-up text-2xl"})})}},84230:function(e,t,r){r.r(t);var a=r(85893),l=r(69325),n=r(26964),s=r(41664),i=r.n(s),o=r(11163);t.default=e=>{let{latestPosts:t}=e,r=(0,o.useRouter)().asPath,{locale:s}=(0,n.O)();return t?(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"pb-1 px-2 flex flex-nowrap justify-between",children:(0,a.jsxs)("div",{className:"text-2xl text-gray-600  dark:text-gray-200",children:[(0,a.jsx)("i",{className:"mr-2 fas fa-history"}),s.COMMON.LATEST_POSTS]})}),t.map(e=>{let t=r==="".concat((0,l.JA)("SUB_PATH",""),"/").concat(e.slug);return(0,a.jsx)(i(),{title:e.title,href:null==e?void 0:e.href,passHref:!0,className:"my-1 flex",children:(0,a.jsx)("div",{className:(t?"text-white  bg-gray-600 ":"text-gray-500 dark:text-green-400 ")+" py-1 flex hover:bg-gray-500 px-2 duration-200 w-full hover:text-white dark:hover:text-white cursor-pointer",children:(0,a.jsx)("li",{className:"line-clamp-2",children:e.title})})},e.id)})]}):(0,a.jsx)(a.Fragment,{})}},22668:function(e,t,r){r.r(t),r.d(t,{MenuItemCollapse:function(){return o}});var a=r(85893),l=r(22468),n=r(41664),s=r.n(n),i=r(67294);let o=e=>{var t;let{link:r}=e,[n,o]=(0,i.useState)(!1),c=(null==r?void 0:null===(t=r.subMenus)||void 0===t?void 0:t.length)>0,[d,u]=(0,i.useState)(!1);return r&&r.show?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"select-none w-full px-6 py-2  text-left ",onClick:()=>{o(!n)},children:[!c&&(0,a.jsx)(s(),{href:null==r?void 0:r.href,target:null==r?void 0:r.target,className:"flex justify-between pl-2 pr-4 dark:text-gray-200 no-underline tracking-widest",children:(0,a.jsxs)("span",{className:" transition-all items-center duration-200",children:[(null==r?void 0:r.icon)&&(0,a.jsx)("i",{className:r.icon+" mr-4"}),null==r?void 0:r.name]})}),c&&(0,a.jsxs)("div",{onClick:c?()=>{u(!d)}:null,className:"flex items-center justify-between pl-2 pr-4 cursor-pointer  dark:text-gray-200 no-underline tracking-widest",children:[(0,a.jsxs)("span",{className:"transition-all items-center duration-200",children:[(null==r?void 0:r.icon)&&(0,a.jsx)("i",{className:r.icon+" mr-4"}),null==r?void 0:r.name]}),(0,a.jsx)("i",{className:"select-none px-2 fas fa-chevron-left transition-all duration-200 ".concat(d?"-rotate-90":""," text-gray-400")})]})]}),c&&(0,a.jsx)(l.Z,{isOpen:d,onHeightChange:e.onHeightChange,className:"rounded-xl",children:r.subMenus.map((e,t)=>(0,a.jsx)("div",{className:"dark:text-gray-200 text-left px-3 justify-start  tracking-widest transition-all duration-200  py-3 pr-6",children:(0,a.jsx)(s(),{href:e.href,target:null==r?void 0:r.target,children:(0,a.jsxs)("span",{className:"text-sm ml-4 whitespace-nowrap",children:[(null==r?void 0:r.icon)&&(0,a.jsx)("i",{className:e.icon+" mr-2"})," ",e.title]})})},t))})]}):null}},85999:function(e,t,r){r.r(t),r.d(t,{MenuItemDrop:function(){return i}});var a=r(85893),l=r(41664),n=r.n(l),s=r(67294);let i=e=>{var t;let{link:r}=e,[l,i]=(0,s.useState)(!1),o=(null==r?void 0:null===(t=r.subMenus)||void 0===t?void 0:t.length)>0;return r&&r.show?(0,a.jsxs)("div",{onMouseOver:()=>i(!0),onMouseOut:()=>i(!1),children:[!o&&(0,a.jsxs)(n(),{href:null==r?void 0:r.href,target:null==r?void 0:r.target,className:"select-none menu-link pl-2 pr-4 no-underline tracking-widest pb-1",children:[(null==r?void 0:r.icon)&&(0,a.jsx)("i",{className:null==r?void 0:r.icon})," ",null==r?void 0:r.name,o&&(0,a.jsx)("i",{className:"px-2 fa fa-angle-down"})]}),o&&(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"cursor-pointer  menu-link pl-2 pr-4  no-underline tracking-widest pb-1",children:[(null==r?void 0:r.icon)&&(0,a.jsx)("i",{className:null==r?void 0:r.icon})," ",null==r?void 0:r.name,(0,a.jsx)("i",{className:"px-2 fa fa-angle-down duration-300  ".concat(l?"rotate-180":"rotate-0")})]})}),o&&(0,a.jsx)("ul",{style:{backdropFilter:"blur(3px)"},className:"".concat(l?"visible opacity-100 top-14":"invisible opacity-0 top-20"," drop-shadow-md overflow-hidden rounded-md text-black dark:text-white bg-white dark:bg-black transition-all duration-300 z-30 absolute block  "),children:r.subMenus.map((e,t)=>(0,a.jsx)("li",{className:"cursor-pointer text-start dark:bg-hexo-black-gray dark:hover:bg-gray-300 hover:bg-gray-300 hover:text-black tracking-widest transition-all duration-200 dark:border-gray-800  py-1 pr-6 pl-3",children:(0,a.jsx)(n(),{href:e.href,target:null==r?void 0:r.target,children:(0,a.jsxs)("span",{className:"text-sm",children:[(null==r?void 0:r.icon)&&(0,a.jsx)("i",{className:null==e?void 0:e.icon,children:" \xa0 "}),e.title]})})},t))})]}):null}},25512:function(e,t,r){r.r(t),r.d(t,{default:function(){return n}});var a=r(85893),l=r(26964);function n(e){let{tag:t,category:r}=e,{locale:n}=(0,l.O)();return t?(0,a.jsxs)("div",{className:"cursor-pointer px-3 py-2 mb-2 ",children:[(0,a.jsx)("div",{className:"inline-block rounded duration-200 mr-2  px-1 text-xl whitespace-nowrap ",children:(0,a.jsxs)("div",{className:" dark:text-white dark:hover:text-white text-5xl py-5",children:[n.COMMON.TAGS," : ",t," "]})}),(0,a.jsx)("hr",{className:"dark:border-gray-600"})]}):r?(0,a.jsxs)("div",{className:"cursor-pointer px-3 py-2 mb-2 ",children:[(0,a.jsxs)("div",{className:" dark:text-white dark:hover:text-white text-5xl py-5",children:[n.COMMON.CATEGORY," : ",r]}),(0,a.jsx)("hr",{className:"dark:border-gray-600"})]}):(0,a.jsx)(a.Fragment,{})}},29019:function(e,t,r){r.r(t);var a=r(85893),l=r(26964),n=r(41664),s=r.n(n),i=r(11163);t.default=e=>{let{tagOptions:t,className:r}=e,n=(0,i.useRouter)(),{locale:o}=(0,l.O)(),{tag:c}=n.query;return t?(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"text-2xl dark:text-white mb-2",children:o.COMMON.TAGS}),(0,a.jsx)("div",{id:"tags-group",className:"dark:border-gray-700 space-y-2",children:t.map((e,t)=>{let l=c===e.name;return(0,a.jsx)(s(),{passHref:!0,href:"/tag/".concat(encodeURIComponent(e.name)),className:"cursor-pointer inline-block  whitespace-nowrap",children:(0,a.jsxs)("div",{className:"".concat(r||""," \n                            ").concat(l?"text-white bg-blue-600 dark:bg-yellow-600":"","  \n                            flex items-center hover:bg-blue-600 dark:hover:bg-yellow-600 hover:scale-110 hover:text-white rounded-lg px-2 py-0.5 duration-150 transition-all"),children:[(0,a.jsxs)("div",{className:"text-lg",children:[e.name," "]}),e.count?(0,a.jsx)("sup",{className:"relative ml-1",children:e.count}):(0,a.jsx)(a.Fragment,{})]})},t)})})]}):(0,a.jsx)(a.Fragment,{})}},6429:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var a=r(85893),l=r(41664),n=r.n(l);function s(e){let{tag:t}=e;return(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)(n(),{href:"/tag/".concat(encodeURIComponent(t.name)),passHref:!0,className:"cursor-pointer inline-block rounded duration-200 mr-2 py-1 px-2 text-xs whitespace-nowrap",children:(0,a.jsxs)("div",{className:"font-light hover:scale-105 transition-all duration-200 text-xl dark:text-green-500 hover:bg-gray-100 dark:hover:bg-hexo-black-gray p-2",children:[t.name+(t.count?"(".concat(t.count,")"):"")," "]})},t)},t.name)}},66733:function(e,t,r){r.r(t),r.d(t,{Layout404:function(){return B},LayoutArchive:function(){return U},LayoutBase:function(){return F},LayoutCategoryIndex:function(){return V},LayoutIndex:function(){return H},LayoutPostList:function(){return D},LayoutSearch:function(){return G},LayoutSlug:function(){return J},LayoutTagIndex:function(){return z},THEME_CONFIG:function(){return T.default},useMovieGlobal:function(){return P}});var a=r(85893),l=r(85504),n=r(86429),s=r(46767),i=r(84588),o=r(31933),c=r(68020),d=r(69325),u=r(26964),x=r(53040),h=r(78174),m=r(45007),f=r(11163),p=r(67294),g=r(63756),v=r(44313),j=r(61877),y=r(42365),b=r(3873),w=r(19278),N=r(61445),k=r(57930),O=r(26364),E=r(35845),A=r(99189),C=r(33901),S=r(84230),M=r(25512),I=r(29019),_=r(6429),T=r(51345),R=r(19590);let L=(0,p.createContext)(),P=()=>(0,p.useContext)(L),F=e=>{let{children:t,slotTop:r}=e,{onLoading:n,fullWidth:i}=(0,u.O)(),o=(0,p.useRef)(null),c=(0,p.useRef)(null),[h,f]=(0,p.useState)(!1);return(0,p.useEffect)(()=>{(0,x.f)()},[]),(0,a.jsx)(L.Provider,{value:{searchModal:c,expandMenu:h,updateExpandMenu:f,collapseRef:o},children:(0,a.jsxs)("div",{id:"theme-movie",className:"".concat((0,d.JA)("FONT_STYLE")," dark:text-gray-300 duration-300 transition-all bg-white dark:bg-[#2A2A2A] scroll-smooth min-h-screen flex flex-col justify-between"),children:[(0,a.jsx)(R.Style,{}),(0,a.jsx)(A.Header,{...e}),(0,a.jsxs)("div",{id:"container-inner",className:"w-full relative flex-grow z-10",children:[(0,a.jsx)("div",{className:"w-full text-center",children:(0,a.jsx)(s.AdSlot,{})}),(0,a.jsx)("div",{id:"container-wrapper",className:(JSON.parse((0,d.JA)("LAYOUT_SIDEBAR_REVERSE"))?"flex-row-reverse":"")+"relative mx-auto justify-center md:flex items-start py-8 px-2",children:(0,a.jsx)("div",{className:"w-full ".concat(""," px-4"),children:(0,a.jsxs)(m.u,{show:!n,appear:!0,enter:"transition ease-in-out duration-700 transform order-first",enterFrom:"opacity-0 translate-y-16",enterTo:"opacity-100",leave:"transition ease-in-out duration-300 transform",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 -translate-y-16",unmount:!1,children:[r,t]})})})]}),(0,a.jsx)(E.Footer,{...e}),(0,a.jsx)(l.default,{cRef:c,...e}),(0,a.jsx)("div",{className:"fixed right-4 bottom-4 z-10",children:(0,a.jsx)(C.default,{})})]})})},H=e=>(0,a.jsx)(D,{...e}),D=e=>(0,a.jsxs)("div",{className:"max-w-[90rem] mx-auto",children:[(0,a.jsx)(M.default,{...e}),"page"===(0,d.JA)("POST_LIST_STYLE")?(0,a.jsx)(b.BlogListPage,{...e}):(0,a.jsx)(w.BlogListScroll,{...e})]}),J=e=>{let{post:t,lock:r,validPassword:l}=e,s=(0,f.useRouter)();return(0,p.useEffect)(()=>(setTimeout(()=>{!function(){let e=document.getElementById("notion-article");if(!e)return;let t=document.querySelectorAll(".notion-asset-wrapper");if(!t||0===t.length)return;let r=document.querySelectorAll(".video-wrapper");if(r&&r.length>0)return;let a=document.createElement("div");a.className="video-wrapper py-1 px-3 bg-gray-100 dark:bg-white dark:text-black mx-auto";let l=document.createElement("div");l.classList.add("notion-carousel-wrapper");let n=[];t.forEach((e,t)=>{var r;let a=e.querySelector("figcaption");if(!e.classList.contains("notion-asset-wrapper-video")&&!e.classList.contains("notion-asset-wrapper-embed")||!a)return;let s=a?null==a?void 0:null===(r=a.textContent)||void 0===r?void 0:r.trim():"P-".concat(t);n.push(s);let i=document.createElement("div");i.classList.add("notion-carousel"),i.appendChild(e);let o=e.querySelector("iframe");o&&(null==o||o.setAttribute("data-src",null==o?void 0:o.getAttribute("src"))),0===t?i.classList.add("active"):null==o||o.setAttribute("src",""),l.appendChild(i)});let s=document.createElement("div");s.className="notion-carousel-route py-2 max-h-36 overflow-y-auto",n.forEach(e=>{let t=document.createElement("div");t.textContent=e,t.addEventListener("click",function(){document.querySelectorAll(".notion-carousel").forEach(t=>{let r=t.querySelector("iframe");if(t.querySelector("figcaption").textContent.trim()===e)t.classList.add("active"),r&&r.setAttribute("src",r.getAttribute("data-src"));else{var a;t.classList.remove("active"),null===(a=t.querySelectorAll("video"))||void 0===a||a.forEach(e=>{e.pause()}),r&&r.setAttribute("src","")}})}),s.appendChild(t)}),l.children.length>0&&(a.appendChild(l),(s.children.length>1||(0,d.JA)("MOVIE_VIDEO_COMBINE_SHOW_PAGE_FORCE",!1,T.default))&&a.appendChild(s),e.insertBefore(a,e.firstChild))}()},1500),t||setTimeout(()=>{h.isBrowser&&!document.getElementById("notion-article")&&s.push("/404").then(()=>{console.warn("找不到页面",s.asPath)})},1e3*(0,d.JA)("POST_WAITING_TIME_FOR_404")),()=>{document.querySelectorAll(".video-wrapper").forEach(e=>{e.parentNode.removeChild(e)})}),[t]),(0,a.jsx)(a.Fragment,{children:r?(0,a.jsx)(j.ArticleLock,{validPassword:l}):(0,a.jsxs)("div",{id:"article-wrapper",className:"px-2 max-w-5xl 2xl:max-w-[70%] mx-auto",children:[(0,a.jsx)(v.ArticleInfo,{post:t}),(0,a.jsx)(o.default,{post:t}),(0,a.jsx)(N.default,{...e}),(0,a.jsx)(c.default,{post:t}),(0,a.jsx)(n.default,{frontMatter:t})]})})},B=e=>{let{locale:t}=(0,u.O)(),{searchModal:r}=P(),l=(0,f.useRouter)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"h-52",children:[(0,a.jsx)("h2",{className:"text-4xl",children:t.COMMON.NO_RESULTS_FOUND}),(0,a.jsx)("hr",{className:"my-4"}),(0,a.jsxs)("div",{className:"max-w-md relative",children:[(0,a.jsx)("input",{autoFocus:!0,id:"search",onClick:()=>{(0,d.JA)("ALGOLIA_APP_ID")&&r.current.openSearch()},onKeyUp:e=>{if(13===e.keyCode){let e=document.getElementById("search").value;e&&l.push({pathname:"/search/"+e})}},className:"float-left w-full outline-none h-full p-2 rounded dark:bg-[#383838] bg-gray-100","aria-label":"Submit search",type:"search",name:"s",autoComplete:"off",placeholder:"Type then hit enter to search..."}),(0,a.jsx)("i",{className:"fas fa-search absolute right-0 my-auto p-2"})]})]}),(0,a.jsxs)("div",{className:"h-full flex-grow grid grid-cols-4 gap-4",children:[(0,a.jsx)(S.default,{...e}),(0,a.jsx)(k.default,{...e}),(0,a.jsx)(g.default,{...e}),(0,a.jsx)(I.default,{...e})]})]})},G=e=>{let{keyword:t}=e,r=(0,f.useRouter)();return(0,p.useEffect)(()=>{if(h.isBrowser){let e=document.getElementById("posts-wrapper");t&&e&&(0,i.Z)({doms:e,search:t,target:{element:"span",className:"text-red-500 border-b border-dashed"}})}},[r]),(0,a.jsx)(D,{...e})},U=e=>{let{archivePosts:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"mb-10 pb-20 md:py-12 p-3  min-h-screen w-full",children:Object.keys(t).map(e=>(0,a.jsx)(y.default,{archiveTitle:e,archivePosts:t},e))})})},V=e=>{let{categoryOptions:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{id:"category-list",className:"duration-200 flex flex-wrap",children:null==t?void 0:t.map(e=>(0,a.jsx)(O.default,{category:e},e.name))})})},z=e=>{let{tagOptions:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{id:"tags-list",className:"duration-200 flex flex-wrap",children:t.map(e=>(0,a.jsx)(_.default,{tag:e},e.name))})})}},19590:function(e,t,r){r.r(t),r.d(t,{Style:function(){return s}});var a=r(85893),l=r(1822),n=r.n(l);let s=()=>(0,a.jsx)(n(),{id:"a27d0a49e8e2afbc",children:".dark body{background-color:black}.shadow-movie{-webkit-box-shadow:0 26px 58px 0 rgba(0,0,0,.22),0 5px 14px 0 rgba(0,0,0,.18);-moz-box-shadow:0 26px 58px 0 rgba(0,0,0,.22),0 5px 14px 0 rgba(0,0,0,.18);box-shadow:0 26px 58px 0 rgba(0,0,0,.22),0 5px 14px 0 rgba(0,0,0,.18)}.notion-carousel{width:100%;overflow:hidden}.notion-carousel-wrapper .notion-carousel{display:none}.notion-carousel-wrapper .notion-carousel.active{display:block}.notion-carousel-route div{cursor:pointer;margin-bottom:.2rem}.notion-carousel-route div:hover{text-decoration:underline}.notion-carousel div{height:auto!important;aspect-ratio:2/1!important}"})}}]);