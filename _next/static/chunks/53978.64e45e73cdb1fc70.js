"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53978,28572,73895],{22468:function(e,t,n){var l=n(85893),i=n(67294);let a=e=>{let{collapseRef:t}=e,n=(0,i.useRef)(null),a=e.type||"vertical";(0,i.useImperativeHandle)(t,()=>({updateCollapseHeight:t=>{let{height:l,increase:i}=t;e.isOpen&&(n.current.style.height=n.current.scrollHeight,n.current.style.height="auto")}}));let r=e=>{let t=e.scrollHeight,n=e.scrollWidth;requestAnimationFrame(function(){switch(a){case"horizontal":e.style.width=n+"px",requestAnimationFrame(function(){e.style.width="0px"});break;case"vertical":e.style.height=t+"px",requestAnimationFrame(function(){e.style.height="0px"})}})},s=e=>{let t=e.scrollHeight,n=e.scrollWidth,l=0;switch(a){case"horizontal":e.style.width=n+"px",l=setTimeout(()=>{e.style.width="auto"},400);break;case"vertical":e.style.height=t+"px",l=setTimeout(()=>{e.style.height="auto"},400)}clearTimeout(l)};return(0,i.useEffect)(()=>{e.isOpen?s(n.current):r(n.current),(null==e?void 0:e.onHeightChange)&&e.onHeightChange({height:n.current.scrollHeight,increase:e.isOpen})},[e.isOpen]),(0,l.jsx)("div",{ref:n,style:"vertical"===a?{height:"0px",willChange:"height"}:{width:"0px",willChange:"width"},className:"".concat(e.className||""," overflow-hidden duration-200 "),children:e.children})};a.defaultProps={isOpen:!1},t.Z=a},53978:function(e,t,n){n.r(t),n.d(t,{MenuBarMobile:function(){return c}});var l=n(85893),i=n(69325),a=n(26964),r=n(73895),s=n(28572);let c=e=>{let{customMenu:t,customNav:n}=e,{locale:c}=(0,a.O)(),o=[{name:c.COMMON.CATEGORY,href:"/category",show:(0,i.JA)("NAV_MENU_CATEGORY",null,r.default)},{name:c.COMMON.TAGS,href:"/tag",show:(0,i.JA)("NAV_MENU_TAG",null,r.default)},{name:c.NAV.ARCHIVE,href:"/archive",show:(0,i.JA)("NAV_MENU_ARCHIVE",null,r.default)}];return(n&&(o=o.concat(n)),(0,i.JA)("CUSTOM_MENU")&&(o=t),o&&0!==o.length)?(0,l.jsx)("nav",{id:"nav",className:" text-md",children:null==o?void 0:o.map((t,n)=>(0,l.jsx)(s.MenuItemCollapse,{onHeightChange:e.onHeightChange,link:t},n))}):null}},28572:function(e,t,n){n.r(t),n.d(t,{MenuItemCollapse:function(){return o}});var l=n(85893),i=n(22468),a=n(41664),r=n.n(a),s=n(11163),c=n(67294);let o=e=>{var t,n;let{link:a}=e,[o,h]=(0,c.useState)(!1),u=(null==a?void 0:null===(t=a.subMenus)||void 0===t?void 0:t.length)>0,[d,g]=(0,c.useState)(!1),x=(0,s.useRouter)();if(!a||!a.show)return null;let f=x.pathname===a.href||x.asPath===a.href;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"text-black"+(f?"text-white hover:text-white":"hover:text-gray-600")+" px-7 w-full text-left duration-200 dark:border-black",onClick:()=>{h(!o)},children:[!u&&(0,l.jsx)(r(),{href:null==a?void 0:a.href,target:null==a?void 0:a.target,className:"py-2 w-full my-auto items-center justify-between flex  ",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"".concat(a.icon," text-center w-4 mr-4")}),a.name]})}),u&&(0,l.jsxs)("div",{onClick:u?()=>{g(!d)}:null,className:"py-2 flex justify-between cursor-pointer  dark:text-gray-400 dark:hover:text-white font-bold  no-underline tracking-widest",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"".concat(a.icon," text-center w-4 mr-2")}),a.name]}),(0,l.jsx)("div",{className:"inline-flex items-center ",children:(0,l.jsx)("i",{className:"px-2 fas fa-chevron-right transition-all duration-200 ".concat(d?"rotate-90":"")})})]})]}),u&&(0,l.jsx)(i.Z,{isOpen:d,onHeightChange:e.onHeightChange,children:null==a?void 0:null===(n=a.subMenus)||void 0===n?void 0:n.map((e,t)=>(0,l.jsx)("div",{className:" py-2 px-14 cursor-pointer hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white font-bold  dark:bg-black text-left justify-start text-gray-600 bg-gray-50 bg-opacity-20 dark:hover:bg-gray-600 tracking-widest transition-all duration-200",children:(0,l.jsx)("a",{href:"/#".concat(e.title),target:"_self",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"".concat((null==e?void 0:e.icon)?null==e?void 0:e.icon:"fas fa-hashtag"," text-center w-3 mr-2 text-xs")}),e.title]})})},t))})]})}},73895:function(e,t,n){n.r(t);var l=n(83454);let i={NAV_INDEX_PAGE:"about",NAV_AUTO_SORT:l.env.NEXT_PUBLIC_NAV_AUTO_SORT||!0,NAV_SHOW_TITLE_TEXT:!1,NAV_USE_CUSTOM_MENU:!0,NAV_MENU_CATEGORY:!0,NAV_MENU_TAG:!0,NAV_MENU_ARCHIVE:!0,NAV_MENU_SEARCH:!0,NAV_WIDGET_REVOLVER_MAPS:l.env.NEXT_PUBLIC_WIDGET_REVOLVER_MAPS||"false",NAV_WIDGET_TO_TOP:!0};t.default=i}}]);