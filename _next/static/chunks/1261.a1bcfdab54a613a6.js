"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1261],{1261:function(e,t,o){o.r(t);var n=o(69325),l=o(26964),c=o(78174),u=o(11163),s=o(67294);t.default=e=>{let t=[],{theme:o}=(0,l.O)(),r=(0,u.useRouter)();(0,s.useEffect)(()=>{var t;(null==e?void 0:e.posts)&&(null==e?void 0:null===(t=e.posts)||void 0===t?void 0:t.length)>0&&d(e.posts)},[r.events]),(0,s.useEffect)(()=>{f()},[o]);let a=(0,n.JA)("COMMENT_TWIKOO_CDN_URL"),i=(0,n.JA)("COMMENT_TWIKOO_ENV_ID"),d=async e=>{e.forEach(e=>{e.slug=e.slug.startsWith("/")?e.slug:"/".concat(e.slug)});try{await (0,c.loadExternalResource)(a,"js"),window.twikoo.getCommentsCount({envId:i,urls:null==e?void 0:e.map(e=>e.slug),includeReply:!0}).then(function(e){t=e,f()}).catch(function(e){console.error(e)})}catch(e){console.error("twikoo 加载失败",e)}},f=()=>{0!==t.length&&e.posts.forEach(e=>{let o=t.find(t=>t.url===e.slug);o&&(document.querySelectorAll(".comment-count-text-".concat(e.id)).forEach(e=>{e.innerHTML=o.count}),document.querySelectorAll(".comment-count-wrapper-".concat(e.id)).forEach(e=>{e.classList.remove("hidden")}))})};return null}}}]);