"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62110,12164,11689],{31761:function(e,n,a){function t(e,n){if(!e||!n)return e||"";let a=new Date(e).toLocaleDateString(n,{year:"numeric",month:"short",day:"numeric"});return"zh"===n.slice(0,2).toLowerCase()?a.replace("年","-").replace("月","-").replace("日",""):a}function s(e,n){let a=new Date(e),t={"M+":a.getMonth()+1,"d+":a.getDate(),"h+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds()};for(let e in/(y+)/.test(n)&&(n=n.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length))),t)RegExp("("+e+")").test(n)&&(n=n.replace(RegExp.$1,1===RegExp.$1.length?t[e]:("00"+t[e]).substr((""+t[e]).length)));return n.trim()}a.d(n,{Z:function(){return t},x:function(){return s}})},62110:function(e,n,a){a.r(n),a.d(n,{ArticleInfo:function(){return d}});var t=a(85893),s=a(41664),r=a.n(s),l=a(26964),c=a(12164),i=a(11689),o=a(31761);let d=e=>{let{post:n}=e,{locale:a}=(0,l.O)();return(0,t.jsxs)("section",{className:"mb-3 dark:text-gray-200",children:[(0,t.jsx)("div",{className:"my-3",children:n.tagItems&&(0,t.jsx)("div",{className:"flex flex-nowrap overflow-x-auto",children:n.tagItems.map(e=>(0,t.jsx)(c.default,{tag:e},e.name))})}),(0,t.jsx)("div",{className:"flex flex-wrap gap-3 mt-5 text-sm",children:(null==n?void 0:n.type)!=="Page"&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r(),{href:"/archive#".concat((0,o.x)(null==n?void 0:n.publishDate,"yyyy-MM")),passHref:!0,className:"cursor-pointer whitespace-nowrap",children:[(0,t.jsx)("i",{className:"far fa-calendar-minus fa-fw"})," ",a.COMMON.POST_TIME,": ",null==n?void 0:n.publishDay]}),(0,t.jsxs)("span",{className:"whitespace-nowrap",children:[(0,t.jsx)("i",{className:"far fa-calendar-check fa-fw"}),a.COMMON.LAST_EDITED_TIME,": ",n.lastEditedDay]}),(0,t.jsxs)("span",{className:"hidden busuanzi_container_page_pv font-light mr-2",children:[(0,t.jsx)("i",{className:"mr-1 fas fa-eye"}),(0,t.jsx)("span",{className:"busuanzi_value_page_pv"})]}),(0,t.jsx)(i.default,{})]})})]})}},12164:function(e,n,a){a.r(n);var t=a(85893),s=a(41664),r=a.n(s);n.default=e=>{let{tag:n,selected:a=!1}=e;return(0,t.jsx)(r(),{href:a?"/":"/tag/".concat(encodeURIComponent(n.name)),passHref:!0,className:"cursor-pointer inline-block rounded-xl  hover:text-white duration-200\n        mr-2 py-0.5 px-2 text-md whitespace-nowrap text-white  ".concat(a?"bg-black":"bg-indigo-700"),children:(0,t.jsxs)("div",{className:"font-light",children:[a&&(0,t.jsx)("i",{className:"mr-1 fas fa-tag"}),n.name+(n.count?"(".concat(n.count,")"):"")," "]})},n)}},11689:function(e,n,a){a.r(n),a.d(n,{default:function(){return l}});var t=a(85893),s=a(26964),r=a(67294);function l(){let{locale:e}=(0,s.O)();return(0,r.useEffect)(()=>{(function(){var e,n;let a=function(e){if(!e)return 0;let n=0;try{n=(e=(e=(e=(e=e.replace(/(\r\n+|\s+|　+)/g,"龘")).replace(/[\x00-\xff]/g,"m")).replace(/m+/g,"*")).replace(/龘+/g,"")).length}catch(e){}return n}((n=null===(e=document.getElementById("notion-article"))||void 0===e?void 0:e.innerHTML)?n=n.replace(/<[^>]+>|&[^>]+;/g,"").trim():"");document.getElementById("wordCount").innerHTML=a,document.getElementById("readTime").innerHTML=Math.floor(a/400)+1,document.getElementById("wordCountWrapper").classList.remove("hidden")})()}),(0,t.jsxs)("span",{id:"wordCountWrapper",className:"flex gap-3 font-light",children:[(0,t.jsxs)("span",{className:"flex whitespace-nowrap items-center",children:[(0,t.jsx)("i",{className:"pl-1 pr-2 fas fa-file-word"}),(0,t.jsx)("span",{children:e.COMMON.WORD_COUNT}),"\xa0",(0,t.jsx)("span",{id:"wordCount",children:"0"})]}),(0,t.jsxs)("span",{className:"flex whitespace-nowrap items-center",children:[(0,t.jsx)("i",{className:"mr-1 fas fa-clock"}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{id:"readTime",children:"0"}),"\xa0",e.COMMON.MINUTE]})]})}}}]);