"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43870],{43870:function(e,t,s){s.r(t),s.d(t,{ArticleLock:function(){return a}});var n=s(85893),i=s(26964),r=s(67294);let a=e=>{let{validPassword:t}=e,{locale:s}=(0,i.O)(),a=()=>{let e=document.getElementById("password");if(!t(null==e?void 0:e.value)){let e=document.getElementById("tips");e&&(e.innerHTML="",e.innerHTML="<div class='text-red-500 animate__shakeX animate__animated'>".concat(s.COMMON.PASSWORD_ERROR,"</div>"))}},l=(0,r.useRef)(null);return(0,r.useEffect)(()=>{l.current.focus()},[]),(0,n.jsx)("div",{id:"article-wrapper",className:"w-full flex justify-center items-center h-96 ",children:(0,n.jsxs)("div",{className:"text-center space-y-3 dark:text-gray-300 text-black",children:[(0,n.jsx)("div",{className:"font-bold",children:s.COMMON.ARTICLE_LOCK_TIPS}),(0,n.jsxs)("div",{className:"flex mx-4",children:[(0,n.jsx)("input",{id:"password",type:"password",onKeyDown:e=>{"Enter"===e.key&&a()},ref:l,className:"outline-none w-full text-sm pl-5 rounded-l transition focus:shadow-lg font-light leading-10 bg-gray-100 dark:bg-gray-500"}),(0,n.jsx)("div",{onClick:a,className:"px-3 whitespace-nowrap cursor-pointer items-center justify-center py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded-r duration-300",children:(0,n.jsxs)("i",{className:"duration-200 cursor-pointer fas fa-key",children:["\xa0",s.COMMON.SUBMIT]})})]}),(0,n.jsx)("div",{id:"tips"})]})})}}}]);