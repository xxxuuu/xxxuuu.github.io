"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55733],{55733:function(e,t,s){s.r(t);var l=s(85893),r=s(67294),i=s(78174);t.default=e=>{let{targetRef:t,showPercent:s=!0}=e,a=(null==t?void 0:t.current)||t,[n,c]=(0,r.useState)(0),d=()=>{let e=a||i.isBrowser&&document.getElementById("posts-wrapper");if(e){let t=e.clientHeight,s=parseFloat((window.pageYOffset/(t-window.outerHeight)*100).toFixed(0));s>100&&(s=100),s<0&&(s=0),c(s)}};return(0,r.useEffect)(()=>(document.addEventListener("scroll",d),()=>document.removeEventListener("scroll",d)),[]),(0,l.jsx)("div",{className:"h-4 w-full shadow-2xl bg-hexo-light-gray dark:bg-black",children:(0,l.jsx)("div",{className:"h-4 bg-gray-600 duration-200",style:{width:"".concat(n,"%")},children:s&&(0,l.jsxs)("div",{className:"text-right text-white text-xs",children:[n,"%"]})})})}}}]);