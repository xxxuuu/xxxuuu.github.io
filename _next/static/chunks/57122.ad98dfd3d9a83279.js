"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57122],{57122:function(e,s,a){a.r(s);var t=a(85893),r=a(26964),n=a(67294);s.default=e=>{let{validPassword:s}=e,{locale:a}=(0,r.O)(),i=()=>{let e=document.getElementById("password");if(!s(null==e?void 0:e.value)){let e=document.getElementById("tips");e&&(e.innerHTML="",e.innerHTML="<div class='text-red-500 animate__shakeX animate__animated'>".concat(a.COMMON.PASSWORD_ERROR,"</div>"))}},l=(0,n.useRef)(null);return(0,n.useEffect)(()=>{l.current.focus()},[]),(0,t.jsx)("div",{id:"container",className:"flex justify-center",children:(0,t.jsx)("div",{className:"shadow md:hover:shadow-2xl overflow-x-auto max-w-5xl  w-screen md:w-full  py-10 px-5 lg:pt-24 md:px-24 min-h-screen dark:border-gray-700 bg-white dark:bg-gray-800 duration-200 subpixel-antialiased",children:(0,t.jsx)("div",{className:"w-full flex justify-center items-center h-96 ",children:(0,t.jsxs)("div",{className:"text-center space-y-3 dark:text-gray-300 text-black",children:[(0,t.jsx)("div",{className:"font-bold",children:a.COMMON.ARTICLE_LOCK_TIPS}),(0,t.jsxs)("div",{className:"flex mx-4",children:[(0,t.jsx)("input",{id:"password",type:"password",onKeyDown:e=>{"Enter"===e.key&&i()},ref:l,className:"outline-none w-full text-sm pl-5 rounded-l transition focus:shadow-lg  font-light leading-10 bg-gray-100 dark:bg-gray-500"}),(0,t.jsx)("div",{onClick:i,className:"px-3 whitespace-nowrap cursor-pointer items-center justify-center py-2 bg-gray-700 hover:bg-gray-400 text-white rounded-r duration-300",children:(0,t.jsxs)("i",{className:"duration-200 cursor-pointer fas fa-key",children:["\xa0",a.COMMON.SUBMIT]})})]}),(0,t.jsx)("div",{id:"tips"})]})})})})}}}]);