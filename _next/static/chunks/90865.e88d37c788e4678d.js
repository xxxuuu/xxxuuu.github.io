"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90865],{90865:function(e,l,a){a.r(l);var i=a(85893),t=a(11163),s=a(67294);l.default=e=>{let{children:l,isOpen:a,onOpen:c,onClose:d,className:n}=e,r=(0,t.useRouter)();(0,s.useEffect)(()=>{let e=()=>{o(!1)};return r.events.on("routeChangeComplete",e),()=>{r.events.off("routeChangeComplete",e)}},[r.events]);let o=e=>{e?c&&c():d&&d();let l=window.document.getElementById("sidebar-drawer"),a=window.document.getElementById("sidebar-drawer-background");e?(null==l||l.classList.replace("-ml-96","ml-0"),null==a||a.classList.replace("hidden","block")):(null==l||l.classList.replace("ml-0","-ml-96"),null==a||a.classList.replace("block","hidden"))};return(0,i.jsxs)("div",{id:"sidebar-wrapper",className:"top-0 ".concat(n),children:[(0,i.jsx)("div",{id:"sidebar-drawer",className:"".concat(a?"ml-0 visible opacity-100":"-ml-96 invisible opacity-0"," w-96 bg-[#83FFE7] dark:bg-black shadow-black shadow-lg flex flex-col duration-300 fixed h-full left-0 overflow-y-scroll scroll-hidden top-0 z-30"),children:l}),(0,i.jsx)("div",{id:"sidebar-drawer-background",onClick:()=>{o(!1)},className:"".concat(a?"visible opacity-100":"invisible opacity-0 "," animate__animated animate__fadeIn fixed top-0 duration-300 left-0 z-20 w-full h-full bg-black/70")})]})}}}]);