"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19162,36558],{19162:function(e,s,l){l.r(s),l.d(s,{BlogListPage:function(){return o}});var n=l(85893),r=l(69325),a=l(26964),t=l(41664),c=l.n(t),i=l(11163),d=l(36558);let o=e=>{let{page:s=1,posts:l,postCount:t}=e,{locale:o}=(0,a.O)(),u=(0,i.useRouter)(),{NOTION_CONFIG:x}=(0,a.O)(),p=(0,r.JA)("POSTS_PER_PAGE",null,x),h=+s,m=h<Math.ceil(t/p)&&(null==l?void 0:l.length)>0,f=u.asPath.split("?")[0].replace(/\/page\/[1-9]\d*/,"").replace(/\/$/,"").replace(".html","");return(0,n.jsxs)("div",{className:"w-full md:pr-12 my-6",children:[(0,n.jsx)("div",{id:"posts-wrapper",children:null==l?void 0:l.map(e=>(0,n.jsx)(d.default,{post:e},e.id))}),(0,n.jsxs)("div",{className:"flex justify-between text-xs",children:[(0,n.jsx)(c(),{href:{pathname:h-1==1?"".concat(f,"/"):"".concat(f,"/page/").concat(h-1),query:u.query.s?{s:u.query.s}:{}},className:"".concat(h>1?"  ":" invisible block pointer-events-none ","no-underline py-2 px-3 rounded"),children:(0,n.jsxs)("button",{rel:"prev",className:"block cursor-pointer",children:["← ",o.PAGINATION.PREV]})}),(0,n.jsx)(c(),{href:{pathname:"".concat(f,"/page/").concat(h+1),query:u.query.s?{s:u.query.s}:{}},className:"".concat(m?"  ":"invisible pointer-events-none ","  no-underline py-2 px-3 rounded"),children:(0,n.jsxs)("button",{rel:"next",className:"block cursor-pointer",children:[o.PAGINATION.NEXT," →"]})})]})]})}},36558:function(e,s,l){l.r(s);var n=l(85893),r=l(67968),a=l(31933),t=l(69325),c=l(26964),i=l(41664),d=l.n(i);s.default=e=>{let{post:s}=e,{NOTION_CONFIG:l}=(0,c.O)(),i=(0,t.JA)("POST_LIST_PREVIEW",!1,l)&&(null==s?void 0:s.blockMap);return(0,n.jsx)(d(),{href:null==s?void 0:s.href,children:(0,n.jsxs)("article",{className:"mb-6 md:mb-8",children:[(0,n.jsxs)("header",{className:"flex flex-col justify-between md:flex-row md:items-baseline",children:[(0,n.jsxs)("h2",{className:"text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100",children:[(0,t.JA)("POST_TITLE_ICON")&&(0,n.jsx)(r.Z,{icon:s.pageIcon}),s.title]}),(0,n.jsx)("time",{className:"flex-shrink-0 text-gray-600 dark:text-gray-400",children:null==s?void 0:s.publishDay})]}),(0,n.jsxs)("main",{children:[!i&&(0,n.jsx)("p",{className:"hidden md:block leading-8 text-gray-700 dark:text-gray-300",children:s.summary}),i&&(null==s?void 0:s.blockMap)&&(0,n.jsxs)("div",{className:"overflow-ellipsis truncate",children:[(0,n.jsx)(a.default,{post:s}),(0,n.jsx)("hr",{className:"border-dashed py-4"})]})]})]},s.id)})}}}]);