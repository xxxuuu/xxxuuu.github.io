"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83255],{22468:function(e,t,r){var i=r(85893),l=r(67294);let n=e=>{let{collapseRef:t}=e,r=(0,l.useRef)(null),n=e.type||"vertical";(0,l.useImperativeHandle)(t,()=>({updateCollapseHeight:t=>{let{height:i,increase:l}=t;e.isOpen&&(r.current.style.height=r.current.scrollHeight,r.current.style.height="auto")}}));let a=e=>{let t=e.scrollHeight,r=e.scrollWidth;requestAnimationFrame(function(){switch(n){case"horizontal":e.style.width=r+"px",requestAnimationFrame(function(){e.style.width="0px"});break;case"vertical":e.style.height=t+"px",requestAnimationFrame(function(){e.style.height="0px"})}})},s=e=>{let t=e.scrollHeight,r=e.scrollWidth,i=0;switch(n){case"horizontal":e.style.width=r+"px",i=setTimeout(()=>{e.style.width="auto"},400);break;case"vertical":e.style.height=t+"px",i=setTimeout(()=>{e.style.height="auto"},400)}clearTimeout(i)};return(0,l.useEffect)(()=>{e.isOpen?s(r.current):a(r.current),(null==e?void 0:e.onHeightChange)&&e.onHeightChange({height:r.current.scrollHeight,increase:e.isOpen})},[e.isOpen]),(0,i.jsx)("div",{ref:r,style:"vertical"===n?{height:"0px",willChange:"height"}:{width:"0px",willChange:"width"},className:"".concat(e.className||""," overflow-hidden duration-200 "),children:e.children})};n.defaultProps={isOpen:!1},t.Z=n},83255:function(e,t,r){r.r(t),r.d(t,{MenuItemCollapse:function(){return h}});var i=r(85893),l=r(22468),n=r(41664),a=r.n(n),s=r(11163),c=r(67294);let h=e=>{var t,r;let{link:n}=e,[h,o]=(0,c.useState)(!1),d=(null==n?void 0:null===(t=n.subMenus)||void 0===t?void 0:t.length)>0,[u,g]=(0,c.useState)(!1),x=(0,s.useRouter)();if(!n||!n.show)return null;let f=x.pathname===n.href||x.asPath===n.href;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:(f?"bg-green-600 text-white hover:text-white":"hover:text-green-600")+" px-7 w-full text-left duration-200 dark:bg-hexo-black-gray dark:border-black",onClick:()=>{o(!h)},children:[!d&&(0,i.jsx)(a(),{href:null==n?void 0:n.href,target:null==n?void 0:n.target,className:"py-2 w-full my-auto items-center justify-between flex  ",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"".concat(n.icon," text-center w-4 mr-4")}),n.name]})}),d&&(0,i.jsxs)("div",{onClick:d?()=>{g(!u)}:null,className:"py-2 font-extralight flex justify-between cursor-pointer  dark:text-gray-200 no-underline tracking-widest",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"".concat(n.icon," text-center w-4 mr-4")}),n.name]}),(0,i.jsx)("div",{className:"inline-flex items-center ",children:(0,i.jsx)("i",{className:"px-2 fas fa-chevron-right transition-all duration-200 ".concat(u?"rotate-90":"")})})]})]}),d&&(0,i.jsx)(l.Z,{isOpen:u,onHeightChange:e.onHeightChange,children:null==n?void 0:null===(r=n.subMenus)||void 0===r?void 0:r.map((e,t)=>(0,i.jsx)("div",{className:" not:last-child:border-b-0 border-b dark:border-gray-800 py-2 px-14 cursor-pointer hover:bg-gray-100 dark:text-gray-200 font-extralight dark:bg-black text-left justify-start text-gray-600 bg-gray-50 dark:hover:bg-gray-900 tracking-widest transition-all duration-200",children:(0,i.jsx)(a(),{href:e.href,target:null==n?void 0:n.target,children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"".concat(e.icon," text-center w-3 mr-3 text-xs")}),e.title]})})},t))})]})}}}]);