"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[73298,1377],{73298:function(e,r,a){a.r(r),a.d(r,{default:function(){return c}});var t=a(85893),n=a(81616),l=a(1377);function c(e){let{tag:r,setFilterKey:a}=(0,n.useGameGlobal)(),c=e=>{a(e)};return r?(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("input",{type:"text",placeholder:r?"Search in #".concat(r):"Search Articles",className:"outline-none block w-full border px-4 py-2 border-black bg-white text-black dark:bg-night dark:border-white dark:text-white",onChange:e=>c(e.target.value)}),(0,t.jsx)("svg",{className:"absolute right-3 top-3 h-5 w-5 text-black dark:text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]}),(0,t.jsx)(l.default,{...e})]}):(0,t.jsx)(t.Fragment,{})}},1377:function(e,r,a){a.r(r);var t=a(85893),n=a(41664),l=a.n(n);r.default=e=>{let{tagOptions:r,tag:a}=e;return r?(0,t.jsx)("div",{className:"tag-container",children:(0,t.jsx)("ul",{className:"flex max-w-full mt-4 overflow-x-auto",children:Object.keys(r).map(e=>{let n=r[e],c=n.name===a;return(0,t.jsx)("li",{className:"mr-3 font-medium border whitespace-nowrap dark:text-gray-300 ".concat(c?"text-white bg-black border-black dark:bg-gray-600 dark:border-gray-600":"bg-gray-100 border-gray-100 text-gray-400 dark:bg-night dark:border-gray-800"),children:(0,t.jsx)(l(),{href:c?"/search":"/tag/".concat(encodeURIComponent(n.name)),className:"px-4 py-2 block",children:"".concat(n.name," (").concat(n.count,")")},n.id)},n.id)})})}):null}}}]);