"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11401,91577],{91577:function(e,a,r){r.r(a),r.d(a,{default:function(){return i}});var s=r(85893),d=r(69325),l=r(26964),n=r(78174),t=r(67294);function i(){let{theme:e,switchTheme:a}=(0,l.O)(),r=JSON.parse((0,d.JA)("WIDGET_PET")),i=(0,d.JA)("WIDGET_PET_LINK"),c=(0,d.JA)("WIDGET_PET_SWITCH_THEME");return((0,t.useEffect)(()=>{r&&!(0,n.isMobile)()&&Promise.all([(0,n.loadExternalResource)("https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/live2d.min.js","js")]).then(e=>{var a;if(void 0!==(null===(a=window)||void 0===a?void 0:a.loadlive2d))try{loadlive2d("live2d",i)}catch(e){console.error("读取PET模型",e)}})},[e]),r)?(0,s.jsx)("canvas",{id:"live2d",width:"280",height:"250",onClick:function(){c&&a()},className:"cursor-grab",onMouseDown:e=>e.target.classList.add("cursor-grabbing"),onMouseUp:e=>e.target.classList.remove("cursor-grabbing")}):(0,s.jsx)(s.Fragment,{})}},11401:function(e,a,r){r.r(a),r.d(a,{SideBar:function(){return x}});var s=r(85893),d=r(91577),l=r(26964),n=r(41664),t=r.n(n),i=r(5152),c=r.n(i),o=r(69325);let h=c()(()=>Promise.all([r.e(16688),r.e(917),r.e(82477),r.e(84257)]).then(r.bind(r,84257)),{loadableGenerated:{webpack:()=>[84257]}}),x=e=>{let{locale:a}=(0,l.O)(),{latestPosts:r,categories:n}=e;return(0,s.jsxs)("div",{className:"w-full md:w-64 sticky top-8",children:[(0,s.jsxs)("aside",{className:"rounded shadow overflow-hidden mb-6",children:[(0,s.jsx)("h3",{className:"text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b",children:a.COMMON.CATEGORY}),(0,s.jsx)("div",{className:"p-4",children:(0,s.jsx)("ul",{className:"list-reset leading-normal",children:null==n?void 0:n.map(e=>(0,s.jsx)(t(),{href:"/category/".concat(e.name),passHref:!0,legacyBehavior:!0,children:(0,s.jsxs)("li",{children:["  ",(0,s.jsxs)("a",{href:"#",className:"text-gray-darkest text-sm",children:[e.name,"(",e.count,")"]})]})},e.name))})})]}),(0,s.jsxs)("aside",{className:"rounded shadow overflow-hidden mb-6",children:[(0,s.jsx)("h3",{className:"text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b",children:a.COMMON.LATEST_POSTS}),(0,s.jsx)("div",{className:"p-4",children:(0,s.jsx)("ul",{className:"list-reset leading-normal",children:null==r?void 0:r.map(e=>(0,s.jsx)(t(),{href:"/".concat(e.slug),passHref:!0,legacyBehavior:!0,children:(0,s.jsxs)("li",{children:["  ",(0,s.jsx)("a",{href:"#",className:"text-gray-darkest text-sm",children:e.title})]})},e.id))})})]}),(0,o.JA)("COMMENT_WALINE_SERVER_URL")&&(0,o.JA)("COMMENT_WALINE_RECENT")&&(0,s.jsxs)("aside",{className:"rounded shadow overflow-hidden mb-6",children:[(0,s.jsx)("h3",{className:"text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b",children:a.COMMON.RECENT_COMMENTS}),(0,s.jsx)("div",{className:"p-4",children:(0,s.jsx)(h,{})})]}),(0,s.jsx)("aside",{className:"rounded  overflow-hidden mb-6",children:(0,s.jsx)(d.default,{})})]})}}}]);