"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[51669],{4930:function(e,a,r){var s=r(85893),l=r(69325);a.Z=e=>{let{post:a,className:r}=e;return JSON.parse((0,l.JA)("COMMENT_TWIKOO_COUNT_ENABLE"))?(0,s.jsxs)("a",{href:"".concat(a.slug,"?target=comment"),className:"mx-1 hidden comment-count-wrapper-".concat(a.id," ").concat(r||""),children:[(0,s.jsx)("i",{className:"far fa-comment mr-1"}),(0,s.jsx)("span",{className:"comment-count-text-".concat(a.id)})]}):null}},31761:function(e,a,r){function s(e,a){if(!e||!a)return e||"";let r=new Date(e).toLocaleDateString(a,{year:"numeric",month:"short",day:"numeric"});return"zh"===a.slice(0,2).toLowerCase()?r.replace("年","-").replace("月","-").replace("日",""):r}function l(e,a){let r=new Date(e),s={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};for(let e in/(y+)/.test(a)&&(a=a.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length))),s)RegExp("("+e+")").test(a)&&(a=a.replace(RegExp.$1,1===RegExp.$1.length?s[e]:("00"+s[e]).substr((""+s[e]).length)));return a.trim()}r.d(a,{Z:function(){return s},x:function(){return l}})},82249:function(e,a,r){r.r(a),r.d(a,{BlogItem:function(){return m}});var s=r(85893),l=r(27134),t=r(67968),n=r(31933),c=r(4930),i=r(69325),o=r(26964),d=r(31761),u=r(41664),h=r.n(u),x=r(74678);let m=e=>{var a,r;let{post:u}=e,{NOTION_CONFIG:m}=(0,o.O)(),f=(0,i.JA)("SIMPLE_POST_COVER_ENABLE",!1,x.default),p=(0,i.JA)("POST_LIST_PREVIEW",!1,m)&&u.blockMap;return(0,s.jsxs)("div",{className:"h-42 my-6 pb-12 border-b dark:border-gray-800",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("div",{className:"article-cover h-full",children:f&&(0,s.jsx)("div",{className:"overflow-hidden mr-2 w-56 h-full",children:(0,s.jsx)(h(),{href:u.href,passHref:!0,legacyBehavior:!0,children:(0,s.jsx)(l.Z,{src:null==u?void 0:u.pageCoverThumbnail,className:"w-56 h-full object-cover object-center group-hover:scale-110 duration-500"})})})}),(0,s.jsxs)("article",{className:"article-info",children:[(0,s.jsx)("h2",{className:"mb-2",children:(0,s.jsxs)(h(),{href:u.href,className:"blog-item-title font-bold text-black text-2xl menu-link",children:[(0,i.JA)("POST_TITLE_ICON")&&(0,s.jsx)(t.Z,{icon:u.pageIcon}),u.title]})}),(0,s.jsxs)("header",{className:"mb-5 text-md text-gray-700 dark:text-gray-300 flex-wrap flex leading-6",children:[(0,s.jsxs)("div",{className:"space-x-2",children:[(0,s.jsxs)("span",{children:[" ",(0,s.jsxs)("a",{href:(0,i.JA)("SIMPLE_AUTHOR_LINK",null,x.default),className:"p-1 hover:text-red-400 transition-all duration-200",children:[(0,s.jsx)("i",{className:"fa-regular fa-user"})," ",(0,i.JA)("AUTHOR")]})]}),(0,s.jsx)("span",{children:(0,s.jsxs)(h(),{className:"p-1 hover:text-red-400 transition-all duration-200",href:"/archive#".concat((0,d.x)(null==u?void 0:u.publishDate,"yyyy-MM")),children:[(0,s.jsx)("i",{className:"fa-regular fa-clock"})," ",(null===(a=u.date)||void 0===a?void 0:a.start_date)||u.createdTime]})}),(0,s.jsx)("span",{children:(0,s.jsx)(c.Z,{post:u})})]}),(0,s.jsxs)("div",{children:[u.category&&(0,s.jsxs)(h(),{href:"/category/".concat(u.category),className:"p-1",children:[" ",(0,s.jsxs)("span",{className:"hover:text-red-400 transition-all duration-200",children:[(0,s.jsx)("i",{className:"fa-regular fa-folder mr-0.5"}),u.category]})]}),(null==u?void 0:u.tags)&&(null==u?void 0:null===(r=u.tags)||void 0===r?void 0:r.length)>0&&(null==u?void 0:u.tags.map(e=>(0,s.jsx)(h(),{href:"/tag/".concat(e),className:" hover:text-red-400 transition-all duration-200",children:(0,s.jsxs)("span",{children:[" /",e]})},e)))]})]}),(0,s.jsxs)("main",{className:"text-gray-700 dark:text-gray-300 leading-normal mb-6",children:[!p&&(0,s.jsxs)(s.Fragment,{children:[u.summary,u.summary&&(0,s.jsx)("span",{children:"..."})]}),p&&(null==u?void 0:u.blockMap)&&(0,s.jsxs)("div",{className:"overflow-ellipsis truncate",children:[(0,s.jsx)(n.default,{post:u}),(0,s.jsx)("hr",{className:"border-dashed py-4"})]})]})]})]}),(0,s.jsx)("div",{className:"block",children:(0,s.jsxs)(h(),{href:u.href,className:"inline-block rounded-sm text-blue-600 dark:text-blue-300  text-xs dark:border-gray-800 border hover:text-red-400 transition-all duration-200 hover:border-red-300 h-9 leading-8 px-5",children:["Continue Reading"," ",(0,s.jsx)("i",{className:"fa-solid fa-angle-right align-middle"})]})})]},u.id)}},26409:function(e,a,r){r.r(a),r.d(a,{default:function(){return h}});var s=r(85893),l=r(46767),t=r(69325),n=r(26964),c=r(41664),i=r.n(c),o=r(11163),d=r(74678),u=r(82249);function h(e){let{page:a=1,posts:r,postCount:c}=e,h=(0,o.useRouter)(),{NOTION_CONFIG:x}=(0,n.O)(),m=(0,t.JA)("POSTS_PER_PAGE",null,x),f=+a,p=(0,t.JA)("SIMPLE_POST_AD_ENABLE",!1,d.default),g=h.asPath.split("?")[0].replace(/\/page\/[1-9]\d*/,"").replace(/\/$/,"").replace(".html","");return(0,s.jsxs)("div",{className:"w-full md:pr-8 mb-12",children:[(0,s.jsx)("div",{id:"posts-wrapper",children:null==r?void 0:r.map((e,a)=>(0,s.jsxs)("div",{children:[p&&(a+1)%3==0&&(0,s.jsx)(l.AdSlot,{type:"in-article"}),p&&a+1===4&&(0,s.jsx)(l.AdSlot,{type:"flow"}),(0,s.jsx)(u.BlogItem,{post:e})]},e.id))}),(0,s.jsxs)("div",{className:"flex justify-between text-xs mt-1",children:[(0,s.jsxs)(i(),{href:{pathname:f-1==1?"".concat(g,"/"):"".concat(g,"/page/").concat(f-1),query:h.query.s?{s:h.query.s}:{}},className:"".concat(f>1?"text-blue-600 border-b border-blue-400 visible ":" invisible bg-gray pointer-events-none "," no-underline pb-1 px-3"),children:["NEWER POSTS ",(0,s.jsx)("i",{className:"fa-solid fa-arrow-left"})]}),(0,s.jsxs)(i(),{href:{pathname:"".concat(g,"/page/").concat(f+1),query:h.query.s?{s:h.query.s}:{}},className:"".concat(a<Math.ceil(c/m)?"text-blue-600 border-b border-blue-400 visible":" invisible bg-gray pointer-events-none "," no-underline pb-1 px-3"),children:["OLDER POSTS ",(0,s.jsx)("i",{className:"fa-solid fa-arrow-right"})]})]})]})}}}]);