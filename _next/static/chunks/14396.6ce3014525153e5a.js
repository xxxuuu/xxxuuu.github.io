"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14396],{14396:function(e,r,n){n.r(r),n.d(r,{default:function(){return t}});var o=n(85893),d=n(67294);function t(){let[e,r]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{"serviceWorker"in navigator&&!(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone||document.referrer.includes("android-app://"))&&(r(!0),window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(e=>{console.log("Service Worker 注册成功:",e)}).catch(e=>{console.log("Service Worker 注册失败:",e)})}),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),window.deferredPrompt=e,r(!0)}))},[]),(0,o.jsx)(o.Fragment,{children:e&&(0,o.jsxs)("div",{className:" justify-center items-center md:flex hidden group text-white w-full rounded-lg m-2 md:m-0 p-2 hover:bg-gray-700 bg-[#1F2030] md:rounded-none md:bg-none",onClick:function(){window.deferredPrompt&&(window.deferredPrompt.prompt(),window.deferredPrompt.userChoice.then(e=>{"accepted"===e.outcome?(r(!1),console.log("用户已同意安装")):console.log("用户已拒绝安装"),window.deferredPrompt=null}))},children:[(0,o.jsx)("i",{alt:"download",title:"download",className:"cursor-pointer fas fa-download group-hover:scale-125 transition-all duration-150 "}),(0,o.jsx)("span",{className:"h-full flex mx-2 md:hidden items-center select-none",children:"Download"})]})})}}}]);