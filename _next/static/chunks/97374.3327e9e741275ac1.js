"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97374,6928,31648,70282],{97374:function(e,r,t){t.r(r),t.d(r,{Header:function(){return d}});var a=t(85893),l=t(69325),n=t(41664),s=t.n(n),i=t(31648);let d=e=>(0,a.jsxs)("header",{className:"w-full px-6 bg-white  dark:bg-black relative z-20",children:[(0,a.jsxs)("div",{className:"mx-auto max-w-4xl md:flex justify-between items-center",children:[(0,a.jsx)(s(),{href:"/",className:"py-6 w-full text-center md:text-left md:w-auto text-gray-dark no-underline flex justify-center items-center",children:(0,l.JA)("TITLE")}),(0,a.jsx)("div",{className:"w-full md:w-auto text-center md:text-right"})]}),(0,a.jsx)(i.MenuList,{...e})]})},6928:function(e,r,t){t.r(r),t.d(r,{MenuItemDrop:function(){return i}});var a=t(85893),l=t(41664),n=t.n(l),s=t(67294);let i=e=>{var r;let{link:t}=e,[l,i]=(0,s.useState)(!1),d=(null==t?void 0:null===(r=t.subMenus)||void 0===r?void 0:r.length)>0;return(0,a.jsxs)("li",{className:"cursor-pointer",onMouseOver:()=>i(!0),onMouseOut:()=>i(!1),children:[!d&&(0,a.jsx)("div",{className:"rounded px-2 md:pl-0 md:mr-3 my-4 md:pr-3 text-gray-700 dark:text-gray-200 no-underline md:border-r border-gray-light",children:(0,a.jsxs)(n(),{href:null==t?void 0:t.href,target:null==t?void 0:t.target,children:[(null==t?void 0:t.icon)&&(0,a.jsx)("i",{className:null==t?void 0:t.icon})," ",null==t?void 0:t.name,d&&(0,a.jsx)("i",{className:"px-2 fa fa-angle-down"})]})}),d&&(0,a.jsxs)("div",{className:"rounded px-2 md:pl-0 md:mr-3 my-4 md:pr-3 text-gray-700 dark:text-gray-200 no-underline md:border-r border-gray-light",children:[(null==t?void 0:t.icon)&&(0,a.jsx)("i",{className:null==t?void 0:t.icon})," ",null==t?void 0:t.name,(0,a.jsx)("i",{className:"px-2 fas fa-chevron-down duration-500 transition-all ".concat(l?" rotate-180":"")})]}),d&&(0,a.jsx)("ul",{className:"".concat(l?"visible opacity-100  top-12":"invisible opacity-0 top-10"," border-gray-100  bg-white  dark:bg-black dark:border-gray-800 transition-all duration-300 z-20 absolute block drop-shadow-lg "),children:t.subMenus.map((e,r)=>(0,a.jsx)("li",{className:"not:last-child:border-b-0 border-b text-gray-700 dark:text-gray-200  hover:bg-gray-50 dark:hover:bg-gray-900 tracking-widest transition-all duration-200  dark:border-gray-800 py-3 pr-6 pl-3",children:(0,a.jsx)(n(),{href:e.href,target:null==t?void 0:t.target,children:(0,a.jsxs)("span",{className:"text-sm text-nowrap font-extralight",children:[(null==t?void 0:t.icon)&&(0,a.jsx)("i",{className:null==e?void 0:e.icon,children:" \xa0 "}),e.title]})})},r))})]})}},31648:function(e,r,t){t.r(r),t.d(r,{MenuList:function(){return d}});var a=t(85893),l=t(69325),n=t(26964),s=t(41311),i=t(6928);let d=e=>{let{customNav:r,customMenu:t}=e,{locale:d}=(0,n.O)(),o=[{id:1,icon:"fas fa-search",name:d.NAV.SEARCH,href:"/search",show:(0,l.JA)("EXAMPLE_MENU_SEARCH",null,s.default)},{id:2,icon:"fas fa-archive",name:d.NAV.ARCHIVE,href:"/archive",show:(0,l.JA)("EXAMPLE_MENU_ARCHIVE",null,s.default)},{id:3,icon:"fas fa-folder",name:d.COMMON.CATEGORY,href:"/category",show:(0,l.JA)("EXAMPLE_MENU_CATEGORY",null,s.default)},{id:4,icon:"fas fa-tag",name:d.COMMON.TAGS,href:"/tag",show:(0,l.JA)("EXAMPLE_MENU_TAG",null,s.default)}];return(r&&(o=o.concat(r)),(0,l.JA)("CUSTOM_MENU")&&(o=t),o&&0!==o.length)?(0,a.jsx)("nav",{className:"w-full bg-white md:pt-0 px-6 relative z-20 border-t border-b border-gray-light dark:border-hexo-black-gray dark:bg-black",children:(0,a.jsx)("div",{className:"mx-auto max-w-4xl md:flex justify-between items-center text-sm md:text-md md:justify-start",children:(0,a.jsx)("ul",{className:"w-full text-center md:text-left flex flex-wrap justify-center items-stretch md:justify-start md:items-start",children:o.map((e,r)=>(0,a.jsx)(i.MenuItemDrop,{link:e},r))})})}):null}},41311:function(e,r,t){t.r(r),r.default={EXAMPLE_MENU_CATEGORY:!0,EXAMPLE_MENU_TAG:!0,EXAMPLE_MENU_ARCHIVE:!0,EXAMPLE_MENU_SEARCH:!0,EXAMPLE_POST_LIST_COVER:!0,EXAMPLE_TITLE_IMAGE:!1,EXAMPLE_ARTICLE_LAYOUT_VERTICAL:!1,EXAMPLE_ARTICLE_HIDDEN_NOTIFICATION:!1}}}]);