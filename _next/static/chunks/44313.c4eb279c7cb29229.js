"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44313],{31761:function(e,t,n){function l(e,t){if(!e||!t)return e||"";let n=new Date(e).toLocaleDateString(t,{year:"numeric",month:"short",day:"numeric"});return"zh"===t.slice(0,2).toLowerCase()?n.replace("年","-").replace("月","-").replace("日",""):n}function r(e,t){let n=new Date(e),l={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(let e in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),l)RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?l[e]:("00"+l[e]).substr((""+l[e]).length)));return t.trim()}n.d(t,{Z:function(){return l},x:function(){return r}})},44313:function(e,t,n){n.r(t),n.d(t,{ArticleInfo:function(){return i}});var l=n(85893),r=n(26964),s=n(31761),a=n(41664),c=n.n(a);let i=e=>{var t,n;let{post:a}=e,{locale:i}=(0,r.O)();return(0,l.jsxs)("section",{className:"w-full mx-auto mb-4",children:[(0,l.jsx)("h2",{className:"text-5xl font-semibold py-10 dark:text-white text-center",children:null==a?void 0:a.title}),(0,l.jsxs)("div",{className:"flex gap-3 font-semibold text-sm items-center justify-center",children:[(0,l.jsx)(c(),{href:"/archive#".concat((0,s.x)(null==a?void 0:a.publishDate,"yyyy-MM")),passHref:!0,className:"pl-1 mr-2 cursor-pointer",children:null==a?void 0:a.publishDay}),(null==a?void 0:a.type)!=="Page"&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c(),{href:"/category/".concat(null==a?void 0:a.category),passHref:!0,className:"cursor-pointer text-md mr-2 text-green-500",children:null==a?void 0:a.category})}),(0,l.jsxs)("div",{className:"flex py-1 space-x-3",children:[(null==a?void 0:null===(t=a.tags)||void 0===t?void 0:t.length)>0&&(0,l.jsxs)(l.Fragment,{children:[i.COMMON.TAGS," ",(0,l.jsx)("span",{children:":"})]}),null==a?void 0:null===(n=a.tags)||void 0===n?void 0:n.map(e=>(0,l.jsx)(c(),{href:"/tag/".concat(e),className:"text-yellow-500 mr-2",children:e},e))]})]})]})}}}]);