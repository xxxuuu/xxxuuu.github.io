"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10885,76160,80916,42936],{4930:function(e,a,t){var r=t(85893),s=t(69325);a.Z=e=>{let{post:a,className:t}=e;return JSON.parse((0,s.JA)("COMMENT_TWIKOO_COUNT_ENABLE"))?(0,r.jsxs)("a",{href:"".concat(a.slug,"?target=comment"),className:"mx-1 hidden comment-count-wrapper-".concat(a.id," ").concat(t||""),children:[(0,r.jsx)("i",{className:"far fa-comment mr-1"}),(0,r.jsx)("span",{className:"comment-count-text-".concat(a.id)})]}):null}},10885:function(e,a,t){t.r(a);var r=t(85893),s=t(27134),n=t(67968),l=t(31933),o=t(4930),c=t(69325),d=t(26964),i=t(41664),x=t.n(i),h=t(42936),u=t(76160),_=t(80916);a.default=e=>{var a,t;let{post:i,showSummary:f}=e,m=(0,c.JA)("MEDIUM_POST_LIST_PREVIEW",null,h.default)&&i.blockMap,{locale:E}=(0,d.O)();return(0,r.jsx)("div",{"data-aos":"fade-up","data-aos-duration":"300","data-aos-once":"false","data-aos-anchor-placement":"top-bottom",className:"mb-6 max-w-7xl border-b dark:border-gray-800 ",children:(0,r.jsxs)("header",{className:"lg:py-8 py-4 flex flex-col w-full",children:[(0,r.jsx)(x(),{href:null==i?void 0:i.href,passHref:!0,className:"cursor-pointer font-bold  hover:underline text-3xl leading-tight text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400",children:(0,r.jsxs)("h2",{children:[(0,c.JA)("MEDIUM_POST_LIST_COVER",null,h.default)&&(0,r.jsx)("div",{className:"w-full max-h-96 object-cover overflow-hidden mb-2",children:(0,r.jsx)(s.Z,{src:i.pageCoverThumbnail,style:i.pageCoverThumbnail?{}:{height:"0px"},className:"w-full max-h-96 object-cover hover:scale-125 duration-150"})}),(0,c.JA)("POST_TITLE_ICON")&&(0,r.jsx)(n.Z,{icon:i.pageIcon}),i.title]})}),(0,r.jsxs)("div",{className:"flex mt-2 items-center justify-start flex-wrap space-x-3 text-gray-400",children:[(0,r.jsx)("div",{className:"text-sm py-1",children:null===(a=i.date)||void 0===a?void 0:a.start_date}),(0,c.JA)("MEDIUM_POST_LIST_CATEGORY",null,h.default)&&(0,r.jsx)(u.default,{category:i.category}),(0,c.JA)("MEDIUM_POST_LIST_TAG",null,h.default)&&(null==i?void 0:null===(t=i.tagItems)||void 0===t?void 0:t.map(e=>(0,r.jsx)(_.default,{tag:e},e.name))),(0,r.jsx)(o.Z,{post:i,className:"hover:underline"})]}),(0,r.jsx)("div",{className:"flex"}),(!m||f)&&(0,r.jsx)("main",{className:"my-4 text-gray-700 dark:text-gray-300 text-sm font-light leading-7",children:i.summary}),m&&(0,r.jsxs)("div",{className:"overflow-ellipsis truncate",children:[(0,r.jsx)(l.default,{post:i}),(0,r.jsx)("div",{className:"pointer-events-none border-t pt-8 border-dashed",children:(0,r.jsx)("div",{className:"w-full justify-start flex",children:(0,r.jsxs)(x(),{href:null==i?void 0:i.href,passHref:!0,className:"hover:bg-opacity-100 hover:scale-105 duration-200 pointer-events-auto transform font-bold text-green-500 cursor-pointer",children:[E.COMMON.ARTICLE_DETAIL,(0,r.jsx)("i",{className:"ml-1 fas fa-angle-right"})]})})})]})]})},i.id)}},76160:function(e,a,t){t.r(a),t.d(a,{default:function(){return l}});var r=t(85893),s=t(41664),n=t.n(s);function l(e){let{selected:a,category:t,categoryCount:s}=e;return(0,r.jsx)(n(),{href:"/category/".concat(t),passHref:!0,className:(a?"hover:text-white dark:hover:text-white bg-green-600 text-white ":"dark:text-green-400 text-gray-500 hover:text-white dark:hover:text-white hover:bg-green-600")+" flex text-sm items-center duration-300 cursor-pointer py-1 font-light px-2 whitespace-nowrap",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("i",{className:"mr-2 fas ".concat(a?"fa-folder-open":"fa-folder")}),t," ",s&&"(".concat(s,")")]})})}},80916:function(e,a,t){t.r(a);var r=t(85893),s=t(41664),n=t.n(s);a.default=e=>{let{tag:a,selected:t=!1}=e;return(0,r.jsx)(n(),{href:t?"/":"/tag/".concat(encodeURIComponent(a.name)),passHref:!0,className:"cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200\n        mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-white\n         ".concat(t?"text-white dark:text-gray-300 bg-black dark:bg-black dark:hover:bg-gray-900":"text-gray-600 hover:shadow-xl dark:border-gray-400 notion-".concat(a.color,"_background dark:bg-gray-800")),children:(0,r.jsxs)("div",{className:"font-light dark:text-gray-400",children:[t&&(0,r.jsx)("i",{className:"mr-1 fas fa-tag"})," ",a.name+(a.count?"(".concat(a.count,")"):"")," "]})},a)}},42936:function(e,a,t){t.r(a);var r=t(83454);let s={MEDIUM_RIGHT_PANEL_DARK:r.env.NEXT_PUBLIC_MEDIUM_RIGHT_DARK||!1,MEDIUM_POST_LIST_COVER:!0,MEDIUM_POST_LIST_PREVIEW:!0,MEDIUM_POST_LIST_CATEGORY:!0,MEDIUM_POST_LIST_TAG:!0,MEDIUM_POST_DETAIL_CATEGORY:!0,MEDIUM_POST_DETAIL_TAG:!0,MEDIUM_MENU_CATEGORY:!0,MEDIUM_MENU_TAG:!0,MEDIUM_MENU_ARCHIVE:!0,MEDIUM_MENU_SEARCH:!0,MEDIUM_WIDGET_REVOLVER_MAPS:r.env.NEXT_PUBLIC_WIDGET_REVOLVER_MAPS||"false",MEDIUM_WIDGET_TO_TOP:!0};a.default=s}}]);