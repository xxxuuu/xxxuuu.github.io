"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81964,34759],{31761:function(e,t,r){function a(e,t){if(!e||!t)return e||"";let r=new Date(e).toLocaleDateString(t,{year:"numeric",month:"short",day:"numeric"});return"zh"===t.slice(0,2).toLowerCase()?r.replace("年","-").replace("月","-").replace("日",""):r}function n(e,t){let r=new Date(e),a={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};for(let e in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length))),a)RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?a[e]:("00"+a[e]).substr((""+a[e]).length)));return t.trim()}r.d(t,{Z:function(){return a},x:function(){return n}})},81964:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var a=r(85893),n=r(27134),s=r(67968),l=r(69325),i=r(26964),c=r(31761),o=r(41664),d=r.n(o),x=r(34759);function u(e){let{post:t,siteInfo:r}=e,{locale:o,fullWidth:u}=(0,i.O)();if(!t)return(0,a.jsx)(a.Fragment,{});if(u)return(0,a.jsx)("div",{className:"my-8"});let h=(null==t?void 0:t.pageCover)?t.pageCover:null==r?void 0:r.pageCover;return(0,a.jsxs)("div",{id:"header",className:"w-full h-96 relative md:flex-shrink-0 z-10",children:[(0,a.jsx)(n.Z,{priority:!0,src:h,className:"w-full h-full object-cover object-center absolute top-0"}),(0,a.jsx)("header",{id:"article-header-cover",className:"bg-black bg-opacity-70 absolute top-0 w-full h-96 py-10 flex justify-center items-center ",children:(0,a.jsxs)("div",{className:"mt-10",children:[(0,a.jsx)("div",{className:"mb-3 flex justify-center",children:t.category&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d(),{href:"/category/".concat(t.category),passHref:!0,legacyBehavior:!0,children:(0,a.jsx)("div",{className:"cursor-pointer px-2 py-1 mb-2 border rounded-sm dark:border-white text-sm font-medium hover:underline duration-200 shadow-text-md text-white",children:t.category})})})}),(0,a.jsxs)("div",{className:"leading-snug font-bold xs:text-4xl sm:text-4xl md:text-5xl md:leading-snug text-4xl shadow-text-md flex justify-center text-center text-white",children:[(0,l.JA)("POST_TITLE_ICON")&&(0,a.jsx)(s.Z,{icon:t.pageIcon,className:"text-4xl mx-1"}),t.title]}),(0,a.jsxs)("section",{className:"flex-wrap shadow-text-md flex text-sm justify-center mt-4 text-white dark:text-gray-400 font-light leading-8",children:[(0,a.jsxs)("div",{className:"flex justify-center dark:text-gray-200 text-opacity-70",children:[(null==t?void 0:t.type)!=="Page"&&(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(d(),{href:"/archive#".concat((0,c.x)(null==t?void 0:t.publishDate,"yyyy-MM")),passHref:!0,className:"pl-1 mr-2 cursor-pointer hover:underline",children:[o.COMMON.POST_TIME,": ",null==t?void 0:t.publishDay]})}),(0,a.jsxs)("div",{className:"pl-1 mr-2",children:[o.COMMON.LAST_EDITED_TIME,": ",t.lastEditedDay]})]}),JSON.parse((0,l.JA)("ANALYTICS_BUSUANZI_ENABLE"))&&(0,a.jsxs)("div",{className:"busuanzi_container_page_pv font-light mr-2",children:[(0,a.jsx)("span",{className:"mr-2 busuanzi_value_page_pv"}),o.COMMON.VIEWS]})]}),(0,a.jsx)("div",{className:"mt-4 mb-1",children:t.tagItems&&(0,a.jsx)("div",{className:"flex justify-center flex-nowrap overflow-x-auto",children:t.tagItems.map(e=>(0,a.jsx)(x.default,{tag:e},e.name))})})]})})]})}},34759:function(e,t,r){r.r(t);var a=r(85893),n=r(41664),s=r.n(n);t.default=e=>{let{tag:t,selected:r=!1}=e;return(0,a.jsx)(s(),{href:r?"/":"/tag/".concat(encodeURIComponent(t.name)),passHref:!0,className:"cursor-pointer inline-block rounded hover:bg-indigo-400 dark:hover:text-white  hover:text-white duration-200\n        mr-2 py-0.5 px-1 text-xs whitespace-nowrap \n         ".concat(r?"text-white dark:text-gray-300 bg-black dark:bg-black dark:hover:bg-indigo-900":"text-gray-600 hover:shadow-xl dark:border-gray-400 notion-".concat(t.color,"_background ")),children:(0,a.jsxs)("div",{className:"font-light",children:[r&&(0,a.jsx)("i",{className:"mr-1 fa-tag"})," ",t.name+(t.count?"(".concat(t.count,")"):"")," "]})},t)}}}]);