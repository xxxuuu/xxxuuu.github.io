"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28621,40931],{28621:function(e,t,n){n.r(t);var l=n(85893),a=n(67294),s=n(93096),i=n.n(s),r=n(58622),o=n(40931),c=n(26964);t.default=e=>{let{toc:t}=e,{locale:n}=(0,c.O)();(0,a.useEffect)(()=>(window.addEventListener("scroll",h),h(),()=>{window.removeEventListener("scroll",h)}),[]);let s=(0,a.useRef)(null),d=[],[u,m]=(0,a.useState)(null),h=(0,a.useCallback)(i()(()=>{var e;let t=document.getElementsByClassName("notion-h"),n=null,l=u;for(let e=0;e<t.length;++e){let a=t[e];if(!a||!(a instanceof Element))continue;l||(l=a.getAttribute("data-id"));let s=a.getBoundingClientRect(),i=Math.max(150,(n?s.top-n.bottom:0)/4);if(s.top-i<0){l=a.getAttribute("data-id"),n=s;continue}break}m(l);let a=d.indexOf(l)||0;null==s||null===(e=s.current)||void 0===e||e.scrollTo({top:28*a,behavior:"smooth"})},200));return!t||t.length<1?(0,l.jsx)(l.Fragment,{}):(0,l.jsxs)("div",{className:"px-3 ",children:[(0,l.jsxs)("div",{className:"dark:text-white",children:[(0,l.jsx)("i",{className:"mr-1 fas fa-stream"}),n.COMMON.TABLE_OF_CONTENTS]}),(0,l.jsx)("div",{className:"w-full py-3",children:(0,l.jsx)(o.default,{})}),(0,l.jsx)("div",{className:"overflow-y-auto overscroll-none max-h-36 lg:max-h-96 scroll-hidden",ref:s,children:(0,l.jsx)("nav",{className:"h-full  text-black",children:t.map(e=>{let t=(0,r.Gw)(e.id);return d.push(t),(0,l.jsx)("a",{href:"#".concat(t),className:"notion-table-of-contents-item duration-300 transform font-light dark:text-gray-200\n            notion-table-of-contents-item-indent-level-".concat(e.indentLevel," "),children:(0,l.jsx)("span",{style:{display:"inline-block",marginLeft:16*e.indentLevel},className:"truncate ".concat(u===t?"font-bold text-green-500 underline":""),children:e.text})},t)})})})]})}},40931:function(e,t,n){n.r(t);var l=n(85893),a=n(67294),s=n(78174);t.default=e=>{let{targetRef:t,showPercent:n=!0}=e,i=(null==t?void 0:t.current)||t,[r,o]=(0,a.useState)(0),c=()=>{requestAnimationFrame(()=>{let e=i||s.isBrowser&&document.getElementById("article-wrapper");if(e){let t=e.clientHeight,n=parseFloat((window.pageYOffset/(t-window.outerHeight)*100).toFixed(0));n>100&&(n=100),n<0&&(n=0),o(n)}})};return(0,a.useEffect)(()=>(document.addEventListener("scroll",c),()=>document.removeEventListener("scroll",c)),[]),(0,l.jsx)("div",{className:"h-4 w-full shadow-2xl bg-gray-400 ",children:(0,l.jsx)("div",{className:"h-4 bg-indigo-400 duration-200",style:{width:"".concat(r,"%")},children:n&&(0,l.jsxs)("div",{className:"text-right text-white text-xs",children:[r,"%"]})})})}}}]);