"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[51875],{51875:function(e,t,s){s.r(t),s.d(t,{ArticleLock:function(){return r}});var n=s(85893),a=s(26964),i=s(67294);let r=e=>{let{validPassword:t}=e,{locale:s}=(0,a.O)(),r=()=>{let e=document.getElementById("password");if(!t(null==e?void 0:e.value)){let e=document.getElementById("tips");e&&(e.innerHTML="",e.innerHTML="<div class='text-red-500 animate__shakeX animate__animated'>".concat(s.COMMON.PASSWORD_ERROR,"</div>"))}},l=(0,i.useRef)(null);return(0,i.useEffect)(()=>{l.current.focus()},[]),(0,n.jsx)("div",{id:"container",className:"w-full flex justify-center items-center h-96 ",children:(0,n.jsxs)("div",{className:"text-center space-y-3",children:[(0,n.jsx)("div",{className:"font-bold",children:s.COMMON.ARTICLE_LOCK_TIPS}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("input",{id:"password",type:"password",onKeyDown:e=>{"Enter"===e.key&&r()},ref:l,className:"outline-none w-full text-sm pl-5 rounded-l transition focus:shadow-lg font-light leading-10 text-black dark:bg-gray-500 bg-gray-50"}),(0,n.jsx)("div",{onClick:r,className:"px-3 whitespace-nowrap cursor-pointer items-center justify-center py-2 rounded-r duration-300 bg-gray-300",children:(0,n.jsxs)("i",{className:"duration-200 cursor-pointer fas fa-key dark:text-black",children:["\xa0",s.COMMON.SUBMIT]})})]}),(0,n.jsx)("div",{id:"tips"})]})})}}}]);