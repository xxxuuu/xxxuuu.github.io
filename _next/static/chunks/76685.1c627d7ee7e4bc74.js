"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76685,14314,31326],{22468:function(e,t,n){var i=n(85893),l=n(67294);let a=e=>{let{collapseRef:t}=e,n=(0,l.useRef)(null),a=e.type||"vertical";(0,l.useImperativeHandle)(t,()=>({updateCollapseHeight:t=>{let{height:i,increase:l}=t;e.isOpen&&(n.current.style.height=n.current.scrollHeight,n.current.style.height="auto")}}));let r=e=>{let t=e.scrollHeight,n=e.scrollWidth;requestAnimationFrame(function(){switch(a){case"horizontal":e.style.width=n+"px",requestAnimationFrame(function(){e.style.width="0px"});break;case"vertical":e.style.height=t+"px",requestAnimationFrame(function(){e.style.height="0px"})}})},s=e=>{let t=e.scrollHeight,n=e.scrollWidth,i=0;switch(a){case"horizontal":e.style.width=n+"px",i=setTimeout(()=>{e.style.width="auto"},400);break;case"vertical":e.style.height=t+"px",i=setTimeout(()=>{e.style.height="auto"},400)}clearTimeout(i)};return(0,l.useEffect)(()=>{e.isOpen?s(n.current):r(n.current),(null==e?void 0:e.onHeightChange)&&e.onHeightChange({height:n.current.scrollHeight,increase:e.isOpen})},[e.isOpen]),(0,i.jsx)("div",{ref:n,style:"vertical"===a?{height:"0px",willChange:"height"}:{width:"0px",willChange:"width"},className:"".concat(e.className||""," overflow-hidden duration-200 "),children:e.children})};a.defaultProps={isOpen:!1},t.Z=a},14314:function(e,t,n){n.r(t),n.d(t,{MenuItemCollapse:function(){return o}});var i=n(85893),l=n(22468),a=n(41664),r=n.n(a),s=n(67294);let o=e=>{var t;let{link:n}=e,[a,o]=(0,s.useState)(!1),c=(null==n?void 0:null===(t=n.subMenus)||void 0===t?void 0:t.length)>0,[h,E]=(0,s.useState)(!1);return n&&n.show?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"w-full px-8 py-3 dark:hover:bg-indigo-500  hover:bg-indigo-500 hover:text-white text-left dark:bg-hexo-black-gray",onClick:()=>{o(!a)},children:[!c&&(0,i.jsx)(r(),{href:null==n?void 0:n.href,target:null==n?void 0:n.target,className:" font-extralight flex justify-between pl-2 pr-4 dark:text-gray-200 no-underline tracking-widest pb-1",children:(0,i.jsxs)("span",{className:" transition-all items-center duration-200",children:[(null==n?void 0:n.icon)&&(0,i.jsx)("i",{className:n.icon+" mr-4"}),null==n?void 0:n.name]})}),c&&(0,i.jsxs)("div",{onClick:c?()=>{E(!h)}:null,className:"font-extralight flex items-center justify-between pl-2 pr-4 cursor-pointer  dark:text-gray-200 no-underline tracking-widest pb-1",children:[(0,i.jsxs)("span",{className:"transition-all items-center duration-200",children:[(null==n?void 0:n.icon)&&(0,i.jsx)("i",{className:n.icon+" mr-4"}),null==n?void 0:n.name]}),(0,i.jsx)("i",{className:"px-2 fas fa-chevron-left transition-all duration-200 ".concat(h?"-rotate-90":""," text-gray-400")})]})]}),c&&(0,i.jsx)(l.Z,{isOpen:h,onHeightChange:e.onHeightChange,children:n.subMenus.map((e,t)=>(0,i.jsx)("div",{className:"dark:hover:bg-indigo-500 hover:bg-indigo-500 hover:text-white dark:bg-black dark:text-gray-200 text-left px-10 justify-start bg-gray-50 tracking-widest transition-all duration-200  py-3 pr-6",children:(0,i.jsx)(r(),{href:e.href,target:null==n?void 0:n.target,children:(0,i.jsxs)("span",{className:"text-sm ml-4 whitespace-nowrap",children:[(null==n?void 0:n.icon)&&(0,i.jsx)("i",{className:e.icon+" mr-2"})," ",e.title]})})},t))})]}):null}},76685:function(e,t,n){n.r(t),n.d(t,{MenuListSide:function(){return o}});var i=n(85893),l=n(69325),a=n(26964),r=n(31326),s=n(14314);let o=e=>{let{customNav:t,customMenu:n}=e,{locale:o}=(0,a.O)(),c=[{icon:"fas fa-archive",name:o.NAV.ARCHIVE,href:"/archive",show:(0,l.JA)("HEXO_MENU_ARCHIVE",null,r.default)},{icon:"fas fa-search",name:o.NAV.SEARCH,href:"/search",show:(0,l.JA)("HEXO_MENU_SEARCH",null,r.default)},{icon:"fas fa-folder",name:o.COMMON.CATEGORY,href:"/category",show:(0,l.JA)("HEXO_MENU_CATEGORY",null,r.default)},{icon:"fas fa-tag",name:o.COMMON.TAGS,href:"/tag",show:(0,l.JA)("HEXO_MENU_TAG",null,r.default)}];t&&(c=t.concat(c));for(let e=0;e<c.length;e++)c[e].id!==e&&(c[e].id=e);return((0,l.JA)("CUSTOM_MENU")&&(c=n),c&&0!==c.length)?(0,i.jsx)("nav",{children:null==c?void 0:c.map((e,t)=>(0,i.jsx)(s.MenuItemCollapse,{link:e},t))}):null}},31326:function(e,t,n){n.r(t),t.default={HEXO_HOME_BANNER_ENABLE:!0,HEXO_HOME_BANNER_GREETINGS:["Hi，我是一个程序员","Hi，我是一个打工人","Hi，我是一个干饭人","欢迎来到我的博客\uD83C\uDF89"],HEXO_HOME_NAV_BUTTONS:!0,HEXO_HOME_NAV_BACKGROUND_IMG_FIXED:!1,HEXO_SHOW_START_READING:!0,HEXO_MENU_INDEX:!0,HEXO_MENU_CATEGORY:!0,HEXO_MENU_TAG:!0,HEXO_MENU_ARCHIVE:!0,HEXO_MENU_SEARCH:!0,HEXO_MENU_RANDOM:!0,HEXO_POST_LIST_COVER:!0,HEXO_POST_LIST_COVER_HOVER_ENLARGE:!1,HEXO_POST_LIST_COVER_DEFAULT:!0,HEXO_POST_LIST_SUMMARY:!0,HEXO_POST_LIST_PREVIEW:!1,HEXO_POST_LIST_IMG_CROSSOVER:!0,HEXO_ARTICLE_ADJACENT:!0,HEXO_ARTICLE_COPYRIGHT:!0,HEXO_ARTICLE_RECOMMEND:!0,HEXO_WIDGET_LATEST_POSTS:!0,HEXO_WIDGET_ANALYTICS:!1,HEXO_WIDGET_TO_TOP:!0,HEXO_WIDGET_TO_COMMENT:!0,HEXO_WIDGET_DARK_MODE:!0,HEXO_WIDGET_TOC:!0}}}]);