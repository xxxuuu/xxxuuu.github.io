"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29499],{4930:function(e,r,a){var s=a(85893),l=a(69325);r.Z=e=>{let{post:r,className:a}=e;return JSON.parse((0,l.JA)("COMMENT_TWIKOO_COUNT_ENABLE"))?(0,s.jsxs)("a",{href:"".concat(r.slug,"?target=comment"),className:"mx-1 hidden comment-count-wrapper-".concat(r.id," ").concat(a||""),children:[(0,s.jsx)("i",{className:"far fa-comment mr-1"}),(0,s.jsx)("span",{className:"comment-count-text-".concat(r.id)})]}):null}},31761:function(e,r,a){function s(e,r){if(!e||!r)return e||"";let a=new Date(e).toLocaleDateString(r,{year:"numeric",month:"short",day:"numeric"});return"zh"===r.slice(0,2).toLowerCase()?a.replace("年","-").replace("月","-").replace("日",""):a}function l(e,r){let a=new Date(e),s={"M+":a.getMonth()+1,"d+":a.getDate(),"h+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds()};for(let e in/(y+)/.test(r)&&(r=r.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length))),s)RegExp("("+e+")").test(r)&&(r=r.replace(RegExp.$1,1===RegExp.$1.length?s[e]:("00"+s[e]).substr((""+s[e]).length)));return r.trim()}a.d(r,{Z:function(){return s},x:function(){return l}})},82249:function(e,r,a){a.r(r),a.d(r,{BlogItem:function(){return m}});var s=a(85893),l=a(27134),t=a(67968),n=a(31933),c=a(4930),i=a(69325),o=a(26964),d=a(31761),u=a(41664),h=a.n(u),x=a(74678);let m=e=>{var r,a;let{post:u}=e,{NOTION_CONFIG:m}=(0,o.O)(),f=(0,i.JA)("SIMPLE_POST_COVER_ENABLE",!1,x.default),g=(0,i.JA)("POST_LIST_PREVIEW",!1,m)&&u.blockMap;return(0,s.jsxs)("div",{className:"h-42 my-6 pb-12 border-b dark:border-gray-800",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("div",{className:"article-cover h-full",children:f&&(0,s.jsx)("div",{className:"overflow-hidden mr-2 w-56 h-full",children:(0,s.jsx)(h(),{href:u.href,passHref:!0,legacyBehavior:!0,children:(0,s.jsx)(l.Z,{src:null==u?void 0:u.pageCoverThumbnail,className:"w-56 h-full object-cover object-center group-hover:scale-110 duration-500"})})})}),(0,s.jsxs)("article",{className:"article-info",children:[(0,s.jsx)("h2",{className:"mb-2",children:(0,s.jsxs)(h(),{href:u.href,className:"blog-item-title font-bold text-black text-2xl menu-link",children:[(0,i.JA)("POST_TITLE_ICON")&&(0,s.jsx)(t.Z,{icon:u.pageIcon}),u.title]})}),(0,s.jsxs)("header",{className:"mb-5 text-md text-gray-700 dark:text-gray-300 flex-wrap flex leading-6",children:[(0,s.jsxs)("div",{className:"space-x-2",children:[(0,s.jsxs)("span",{children:[" ",(0,s.jsxs)("a",{href:(0,i.JA)("SIMPLE_AUTHOR_LINK",null,x.default),className:"p-1 hover:text-red-400 transition-all duration-200",children:[(0,s.jsx)("i",{className:"fa-regular fa-user"})," ",(0,i.JA)("AUTHOR")]})]}),(0,s.jsx)("span",{children:(0,s.jsxs)(h(),{className:"p-1 hover:text-red-400 transition-all duration-200",href:"/archive#".concat((0,d.x)(null==u?void 0:u.publishDate,"yyyy-MM")),children:[(0,s.jsx)("i",{className:"fa-regular fa-clock"})," ",(null===(r=u.date)||void 0===r?void 0:r.start_date)||u.createdTime]})}),(0,s.jsx)("span",{children:(0,s.jsx)(c.Z,{post:u})})]}),(0,s.jsxs)("div",{children:[u.category&&(0,s.jsxs)(h(),{href:"/category/".concat(u.category),className:"p-1",children:[" ",(0,s.jsxs)("span",{className:"hover:text-red-400 transition-all duration-200",children:[(0,s.jsx)("i",{className:"fa-regular fa-folder mr-0.5"}),u.category]})]}),(null==u?void 0:u.tags)&&(null==u?void 0:null===(a=u.tags)||void 0===a?void 0:a.length)>0&&(null==u?void 0:u.tags.map(e=>(0,s.jsx)(h(),{href:"/tag/".concat(e),className:" hover:text-red-400 transition-all duration-200",children:(0,s.jsxs)("span",{children:[" /",e]})},e)))]})]}),(0,s.jsxs)("main",{className:"text-gray-700 dark:text-gray-300 leading-normal mb-6",children:[!g&&(0,s.jsxs)(s.Fragment,{children:[u.summary,u.summary&&(0,s.jsx)("span",{children:"..."})]}),g&&(null==u?void 0:u.blockMap)&&(0,s.jsxs)("div",{className:"overflow-ellipsis truncate",children:[(0,s.jsx)(n.default,{post:u}),(0,s.jsx)("hr",{className:"border-dashed py-4"})]})]})]})]}),(0,s.jsx)("div",{className:"block",children:(0,s.jsxs)(h(),{href:u.href,className:"inline-block rounded-sm text-blue-600 dark:text-blue-300  text-xs dark:border-gray-800 border hover:text-red-400 transition-all duration-200 hover:border-red-300 h-9 leading-8 px-5",children:["Continue Reading"," ",(0,s.jsx)("i",{className:"fa-solid fa-angle-right align-middle"})]})})]},u.id)}},2698:function(e,r,a){a.r(r),a.d(r,{default:function(){return d}});var s=a(85893),l=a(69325),t=a(26964),n=a(93096),c=a.n(n),i=a(67294),o=a(82249);function d(e){let{posts:r}=e,{locale:a,NOTION_CONFIG:n}=(0,t.O)(),[d,u]=(0,i.useState)(1),h=(0,l.JA)("POSTS_PER_PAGE",null,n),x=!1,m=r?Object.assign(r).slice(0,h*d):[];r&&(x=d*h<r.length);let f=()=>{x&&u(d+1)},g=(0,i.useRef)(null),p=(0,i.useCallback)(c()(()=>{window.scrollY+window.outerHeight>(g&&g.current?g.current.clientHeight:0)+100&&f()},500));return(0,i.useEffect)(()=>(window.addEventListener("scroll",p),()=>{window.removeEventListener("scroll",p)})),(0,s.jsxs)("div",{id:"posts-wrapper",className:"w-full md:pr-8 mb-12",ref:g,children:[m.map(e=>(0,s.jsx)(o.BlogItem,{post:e},e.id)),(0,s.jsxs)("div",{onClick:f,className:"w-full my-4 py-4 text-center cursor-pointer ",children:[" ",x?a.COMMON.MORE:"".concat(a.COMMON.NO_MORE," \uD83D\uDE30")," "]})]})}}}]);