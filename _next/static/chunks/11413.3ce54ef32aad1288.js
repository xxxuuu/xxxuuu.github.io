"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11413],{11413:function(e,t,n){n.r(t);var l=n(85893),o=n(67294),a=n(93096),i=n.n(a),s=n(58622),r=n(26964);t.default=e=>{var t,n;let{post:a}=e,{locale:d}=(0,r.O)(),c=(0,o.useRef)(null),[u,v]=(0,o.useState)(null);return((0,o.useEffect)(()=>{let e=i()(()=>{var e,t;let n=document.getElementsByClassName("notion-h"),l=null,o=u;for(let e=0;e<n.length;++e){let t=n[e];if(!t||!(t instanceof Element))continue;o||(o=t.getAttribute("data-id"));let a=t.getBoundingClientRect(),i=Math.max(150,(l?a.top-l.bottom:0)/4);if(a.top-i<0){o=t.getAttribute("data-id"),l=a;continue}break}v(o);let i=null==a?void 0:null===(e=a.toc)||void 0===e?void 0:e.findIndex(e=>(0,s.Gw)(e.id)===o);null==c||null===(t=c.current)||void 0===t||t.scrollTo({top:28*i,behavior:"smooth"})},200);return window.addEventListener("scroll",e),e(),()=>{window.removeEventListener("scroll",e)}},[a]),a&&(null==a?void 0:a.toc)&&!((null==a?void 0:null===(t=a.toc)||void 0===t?void 0:t.length)<1))?(0,l.jsxs)("div",{className:"px-3 ",children:[(0,l.jsxs)("div",{className:"dark:text-white mb-2",children:[(0,l.jsx)("i",{className:"mr-1 fas fa-stream"}),d.COMMON.TABLE_OF_CONTENTS]}),(0,l.jsx)("div",{className:"overflow-y-auto overscroll-none max-h-36 lg:max-h-96 scroll-hidden",ref:c,children:(0,l.jsx)("nav",{className:"h-full  text-black",children:null==a?void 0:null===(n=a.toc)||void 0===n?void 0:n.map(e=>{let t=(0,s.Gw)(e.id);return(0,l.jsx)("a",{href:"#".concat(t),className:"notion-table-of-contents-item duration-300 transform dark:text-gray-200\n            notion-table-of-contents-item-indent-level-".concat(e.indentLevel," "),children:(0,l.jsx)("span",{style:{display:"inline-block",marginLeft:16*e.indentLevel},className:"truncate ".concat(u===t?" font-bold text-red-600 underline":""),children:e.text})},t)})})})]}):(0,l.jsx)(l.Fragment,{})}}}]);