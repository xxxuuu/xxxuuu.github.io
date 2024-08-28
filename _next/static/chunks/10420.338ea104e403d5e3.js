"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10420,83107,76210],{22468:function(e,t,a){var l=a(85893),r=a(67294);let n=e=>{let{collapseRef:t}=e,a=(0,r.useRef)(null),n=e.type||"vertical";(0,r.useImperativeHandle)(t,()=>({updateCollapseHeight:t=>{let{height:l,increase:r}=t;e.isOpen&&(a.current.style.height=a.current.scrollHeight,a.current.style.height="auto")}}));let s=e=>{let t=e.scrollHeight,a=e.scrollWidth;requestAnimationFrame(function(){switch(n){case"horizontal":e.style.width=a+"px",requestAnimationFrame(function(){e.style.width="0px"});break;case"vertical":e.style.height=t+"px",requestAnimationFrame(function(){e.style.height="0px"})}})},i=e=>{let t=e.scrollHeight,a=e.scrollWidth,l=0;switch(n){case"horizontal":e.style.width=a+"px",l=setTimeout(()=>{e.style.width="auto"},400);break;case"vertical":e.style.height=t+"px",l=setTimeout(()=>{e.style.height="auto"},400)}clearTimeout(l)};return(0,r.useEffect)(()=>{e.isOpen?i(a.current):s(a.current),(null==e?void 0:e.onHeightChange)&&e.onHeightChange({height:a.current.scrollHeight,increase:e.isOpen})},[e.isOpen]),(0,l.jsx)("div",{ref:a,style:"vertical"===n?{height:"0px",willChange:"height"}:{width:"0px",willChange:"width"},className:"".concat(e.className||""," overflow-hidden duration-200 "),children:e.children})};n.defaultProps={isOpen:!1},t.Z=n},83107:function(e,t,a){a.r(t),a.d(t,{MenuItemCollapse:function(){return o}});var l=a(85893),r=a(22468),n=a(41664),s=a.n(n),i=a(67294);let o=e=>{var t;let{link:a}=e,[n,o]=(0,i.useState)(!1),c=(null==a?void 0:null===(t=a.subMenus)||void 0===t?void 0:t.length)>0,[d,u]=(0,i.useState)(!1);return a&&a.show?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"w-full px-8 py-3 text-left border-b dark:bg-hexo-black-gray dark:border-black",onClick:()=>{o(!n)},children:[!c&&(0,l.jsx)(s(),{href:null==a?void 0:a.href,target:null==a?void 0:a.target,className:"items-center flex justify-between pl-2 pr-4 dark:text-gray-200 no-underline tracking-widest pb-1",children:(0,l.jsxs)("span",{className:"text-blue-600 dark:text-blue-300 hover:text-red-400 transition-all items-center duration-200",children:[(null==a?void 0:a.icon)&&(0,l.jsx)("span",{className:"mr-2",children:(0,l.jsx)("i",{className:a.icon})}),null==a?void 0:a.name]})}),c&&(0,l.jsxs)("div",{onClick:c?()=>{u(!d)}:null,className:"items-center flex justify-between pl-2 pr-4 cursor-pointer  dark:text-gray-200 no-underline tracking-widest pb-1",children:[(0,l.jsxs)("span",{className:"text-blue-600 dark:text-blue-300 hover:text-red-400 transition-all items-center duration-200",children:[(null==a?void 0:a.icon)&&(0,l.jsx)("span",{className:"mr-2",children:(0,l.jsx)("i",{className:a.icon})}),null==a?void 0:a.name]}),(0,l.jsx)("i",{className:"px-2 fa fa-plus transition-all duration-200 ".concat(d&&"rotate-45"," text-gray-400")})]})]}),c&&(0,l.jsx)(r.Z,{isOpen:d,onHeightChange:e.onHeightChange,children:a.subMenus.map((e,t)=>(0,l.jsx)("div",{className:"dark:bg-black text-left px-10 justify-start text-blue-600 dark:text-blue-300 bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-900 tracking-widest transition-all duration-200 border-b dark:border-gray-800 py-3 pr-6",children:(0,l.jsx)(s(),{href:e.href,target:null==a?void 0:a.target,children:(0,l.jsxs)("span",{className:"ml-4 text-sm",children:[(null==e?void 0:e.icon)&&(0,l.jsx)("span",{className:"mr-2 w-4",children:(0,l.jsx)("i",{className:e.icon})}),e.title]})})},t))})]}):null}},76210:function(e,t,a){a.r(t),a.d(t,{MenuItemDrop:function(){return i}});var l=a(85893),r=a(41664),n=a.n(r),s=a(67294);let i=e=>{var t;let{link:a}=e,[r,i]=(0,s.useState)(!1),o=(null==a?void 0:null===(t=a.subMenus)||void 0===t?void 0:t.length)>0;return a&&a.show?(0,l.jsxs)("div",{onMouseOver:()=>i(!0),onMouseOut:()=>i(!1),children:[!o&&(0,l.jsxs)(n(),{href:null==a?void 0:a.href,target:null==a?void 0:a.target,className:" menu-link pl-2 pr-4 text-gray-700 dark:text-gray-200 no-underline tracking-widest pb-1",children:[(null==a?void 0:a.icon)&&(0,l.jsx)("span",{className:"mr-2",children:(0,l.jsx)("i",{className:a.icon})}),null==a?void 0:a.name,o&&(0,l.jsx)("i",{className:"px-2 fa fa-angle-down"})]}),o&&(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"cursor-pointer  menu-link pl-2 pr-4 text-gray-700 dark:text-gray-200 no-underline tracking-widest pb-1",children:[(null==a?void 0:a.icon)&&(0,l.jsx)("span",{className:"mr-2",children:(0,l.jsx)("i",{className:a.icon})})," ",null==a?void 0:a.name,(0,l.jsx)("i",{className:"px-2 fas fa-chevron-down duration-500 transition-all ".concat(r?" rotate-180":"")})]})}),o&&(0,l.jsx)("ul",{className:"".concat(r?"visible opacity-100 top-12":"invisible opacity-0 top-10"," border-gray-100  bg-white  dark:bg-black dark:border-gray-800 transition-all duration-300 z-20 absolute block drop-shadow-lg "),children:a.subMenus.map((e,t)=>(0,l.jsx)("li",{className:"not:last-child:border-b-0 border-b text-blue-600 dark:text-blue-300 hover:bg-gray-50 dark:hover:bg-gray-900 tracking-widest transition-all duration-200 dark:border-gray-800  py-3 pr-6 pl-2",children:(0,l.jsx)(n(),{href:e.href,target:null==a?void 0:a.target,children:(0,l.jsxs)("span",{className:"text-sm text-nowrap",children:[(null==e?void 0:e.icon)&&(0,l.jsx)("i",{className:null==e?void 0:e.icon,children:" \xa0 "}),e.title]})})},t))})]}):null}},89364:function(e,t,a){a.r(t),a.d(t,{MenuList:function(){return h}});var l=a(85893),r=a(22468),n=a(69325),s=a(26964),i=a(11163),o=a(67294),c=a(74678),d=a(83107),u=a(76210);let h=e=>{let{customNav:t,customMenu:a}=e,{locale:h}=(0,s.O)(),[m,x]=(0,o.useState)(!1),p=e=>{x(!1)},f=(0,i.useRouter)(),g=(0,o.useRef)(null);(0,o.useEffect)(()=>{f.events.on("routeChangeStart",p)});let v=[{icon:"fas fa-search",name:h.NAV.SEARCH,href:"/search",show:(0,n.JA)("SIMPLE_MENU_SEARCH",null,c.default)},{icon:"fas fa-archive",name:h.NAV.ARCHIVE,href:"/archive",show:(0,n.JA)("SIMPLE_MENU_ARCHIVE",null,c.default)},{icon:"fas fa-folder",name:h.COMMON.CATEGORY,href:"/category",show:(0,n.JA)("SIMPLE_MENU_CATEGORY",null,c.default)},{icon:"fas fa-tag",name:h.COMMON.TAGS,href:"/tag",show:(0,n.JA)("SIMPLE_MENU_TAG",null,c.default)}];return(t&&(v=v.concat(t)),(0,n.JA)("CUSTOM_MENU")&&(v=a),v&&0!==v.length)?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{id:"nav-menu-pc",className:"hidden md:flex my-auto",children:null==v?void 0:v.map((e,t)=>(0,l.jsx)(u.MenuItemDrop,{link:e},t))}),(0,l.jsxs)("div",{id:"nav-menu-mobile",className:"flex md:hidden my-auto justify-start",children:[(0,l.jsxs)("div",{onClick:()=>{x(!m)},className:"cursor-pointer hover:text-red-400 transition-all duration-200",children:[(0,l.jsx)("i",{className:"".concat(m&&"rotate-90"," transition-all duration-200 fa fa-bars mr-3")}),(0,l.jsx)("span",{children:m?"CLOSE":"MENU"})]}),(0,l.jsx)(r.Z,{collapseRef:g,className:"absolute w-full top-12 left-0",isOpen:m,children:(0,l.jsx)("div",{id:"menu-wrap",className:"bg-white dark:border-hexo-black-gray border",children:null==v?void 0:v.map((e,t)=>(0,l.jsx)(d.MenuItemCollapse,{link:e,onHeightChange:e=>{var t;return null===(t=g.current)||void 0===t?void 0:t.updateCollapseHeight(e)}},t))})})]})]}):null}},10420:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var l=a(85893),r=a(69325),n=a(11163),s=a(67294),i=a(30844),o=a(89364);function c(e){let[t,a]=(0,s.useState)(!1),c=(0,n.useRouter)(),{searchModal:d}=(0,i.useSimpleGlobal)();return(0,l.jsx)("nav",{className:"w-full bg-white md:pt-0  relative z-20 shadow border-t border-gray-100 dark:border-hexo-black-gray dark:bg-black",children:(0,l.jsxs)("div",{id:"nav-bar-inner",className:"h-12 mx-auto max-w-9/10 justify-between items-center text-sm md:text-md md:justify-start",children:[(0,l.jsxs)("div",{className:"h-full w-full float-left text-center md:text-left flex flex-wrap items-stretch md:justify-start md:items-start space-x-4",children:[t&&(0,l.jsx)("input",{autoFocus:!0,id:"simple-search",onKeyUp:e=>{if(13===e.keyCode){let e=document.getElementById("simple-search").value;e&&c.push({pathname:"/search/"+e})}},className:"float-left w-full outline-none h-full px-4","aria-label":"Submit search",type:"search",name:"s",autoComplete:"off",placeholder:"Type then hit enter to search..."}),!t&&(0,l.jsx)(o.MenuList,{...e})]}),(0,l.jsx)("div",{className:"absolute right-12 h-full text-center px-2 flex items-center text-blue-400  cursor-pointer",children:(0,l.jsx)("i",{className:t?"fa-regular fa-circle-xmark":"fa-solid fa-magnifying-glass align-middle",onClick:()=>{(0,r.JA)("ALGOLIA_APP_ID")?d.current.openSearch():a(!t)}})})]})})}}}]);