"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80790],{22468:function(e,t,l){var i=l(85893),r=l(67294);let n=e=>{let{collapseRef:t}=e,l=(0,r.useRef)(null),n=e.type||"vertical";(0,r.useImperativeHandle)(t,()=>({updateCollapseHeight:t=>{let{height:i,increase:r}=t;e.isOpen&&(l.current.style.height=l.current.scrollHeight,l.current.style.height="auto")}}));let s=e=>{let t=e.scrollHeight,l=e.scrollWidth;requestAnimationFrame(function(){switch(n){case"horizontal":e.style.width=l+"px",requestAnimationFrame(function(){e.style.width="0px"});break;case"vertical":e.style.height=t+"px",requestAnimationFrame(function(){e.style.height="0px"})}})},a=e=>{let t=e.scrollHeight,l=e.scrollWidth,i=0;switch(n){case"horizontal":e.style.width=l+"px",i=setTimeout(()=>{e.style.width="auto"},400);break;case"vertical":e.style.height=t+"px",i=setTimeout(()=>{e.style.height="auto"},400)}clearTimeout(i)};return(0,r.useEffect)(()=>{e.isOpen?a(l.current):s(l.current),(null==e?void 0:e.onHeightChange)&&e.onHeightChange({height:l.current.scrollHeight,increase:e.isOpen})},[e.isOpen]),(0,i.jsx)("div",{ref:l,style:"vertical"===n?{height:"0px",willChange:"height"}:{width:"0px",willChange:"width"},className:"".concat(e.className||""," overflow-hidden duration-200 "),children:e.children})};n.defaultProps={isOpen:!1},t.Z=n},80790:function(e,t,l){l.r(t),l.d(t,{MenuItemCollapse:function(){return c}});var i=l(85893),r=l(22468),n=l(41664),s=l.n(n),a=l(67294);let c=e=>{var t;let{link:l}=e,[n,c]=(0,a.useState)(!1),h=(null==l?void 0:null===(t=l.subMenus)||void 0===t?void 0:t.length)>0,[o,u]=(0,a.useState)(!1);return l&&l.show?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"w-full px-4 py-2 text-left dark:bg-hexo-black-gray dark:border-black",onClick:()=>{c(!n)},children:[!h&&(0,i.jsx)(s(),{href:null==l?void 0:l.href,target:null==l?void 0:l.target,className:"font-extralight  flex justify-between pl-2 pr-4 dark:text-gray-200 no-underline tracking-widest pb-1",children:(0,i.jsxs)("span",{className:" hover:text-red-400 transition-all items-center duration-200",children:[(null==l?void 0:l.icon)&&(0,i.jsx)("span",{className:"mr-2",children:(0,i.jsx)("i",{className:l.icon})}),null==l?void 0:l.name]})}),h&&(0,i.jsxs)("div",{onClick:h?()=>{u(!o)}:null,className:"font-extralight flex justify-between pl-2 pr-4 cursor-pointer  dark:text-gray-200 no-underline tracking-widest pb-1",children:[(0,i.jsxs)("span",{className:" hover:text-red-400 transition-all items-center duration-200",children:[(null==l?void 0:l.icon)&&(0,i.jsx)("span",{className:"mr-2",children:(0,i.jsx)("i",{className:l.icon})}),null==l?void 0:l.name]}),(0,i.jsx)("i",{className:"px-2 fa fa-plus text-gray-400"})]})]}),h&&(0,i.jsx)(r.Z,{isOpen:o,onHeightChange:e.onHeightChange,children:l.subMenus.map((e,t)=>(0,i.jsx)("div",{className:"font-extralight dark:bg-black text-left px-10 justify-start  bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-900 tracking-widest transition-all duration-200 border-b dark:border-gray-800 py-3 pr-6",children:(0,i.jsx)(s(),{href:e.href,target:null==l?void 0:l.target,children:(0,i.jsx)("span",{className:"text-xs",children:e.title})})},t))})]}):null}}}]);