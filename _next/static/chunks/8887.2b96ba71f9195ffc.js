"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8887],{8887:function(e,t,n){n.r(t);var l=n(85893),a=n(93096),o=n.n(a),i=n(58622),s=n(67294);t.default=e=>{let{toc:t}=e;(0,s.useEffect)(()=>(window.addEventListener("scroll",d),d(),()=>{window.removeEventListener("scroll",d)}),[]);let n=(0,s.useRef)(null),a=[],[r,c]=(0,s.useState)(null),d=(0,s.useCallback)(o()(()=>{var e;let t=document.getElementsByClassName("notion-h"),l=null,o=r;for(let e=0;e<t.length;++e){let n=t[e];if(!n||!(n instanceof Element))continue;o||(o=n.getAttribute("data-id"));let a=n.getBoundingClientRect(),i=Math.max(150,(l?a.top-l.bottom:0)/4);if(a.top-i<0){o=n.getAttribute("data-id"),l=a;continue}break}c(o);let i=a.indexOf(o)||0;null==n||null===(e=n.current)||void 0===e||e.scrollTo({top:28*i,behavior:"smooth"})},200));return!t||t.length<1?(0,l.jsx)(l.Fragment,{}):(0,l.jsx)("div",{className:"px-3",children:(0,l.jsx)("div",{className:"overflow-y-auto max-h-96 overscroll-none scroll-hidden",ref:n,children:(0,l.jsx)("nav",{className:"h-full  text-black dark:text-gray-300",children:t.map(e=>{let t=(0,i.Gw)(e.id);return a.push(t),(0,l.jsx)("a",{href:"#".concat(t),className:"notion-table-of-contents-item duration-300 transform font-light\n              notion-table-of-contents-item-indent-level-".concat(e.indentLevel," "),children:(0,l.jsx)("span",{style:{display:"inline-block",marginLeft:16*e.indentLevel},className:"truncate ".concat(r===t?" font-bold text-red-400 underline":""),children:e.text})},t)})})})})}}}]);