"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60973],{31761:function(e,a,s){function l(e,a){if(!e||!a)return e||"";let s=new Date(e).toLocaleDateString(a,{year:"numeric",month:"short",day:"numeric"});return"zh"===a.slice(0,2).toLowerCase()?s.replace("年","-").replace("月","-").replace("日",""):s}function r(e,a){let s=new Date(e),l={"M+":s.getMonth()+1,"d+":s.getDate(),"h+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};for(let e in/(y+)/.test(a)&&(a=a.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length))),l)RegExp("("+e+")").test(a)&&(a=a.replace(RegExp.$1,1===RegExp.$1.length?l[e]:("00"+l[e]).substr((""+l[e]).length)));return a.trim()}s.d(a,{Z:function(){return l},x:function(){return r}})},60973:function(e,a,s){s.r(a),s.d(a,{default:function(){return u}});var l=s(85893),r=s(41664),t=s.n(r),n=s(26964),i=s(74678),c=s(69325),d=s(31761),o=s(67968);function u(e){var a;let{post:s}=e,{locale:r}=(0,n.O)();return(0,l.jsxs)("section",{className:"mt-2 text-gray-600 dark:text-gray-400 leading-8",children:[(0,l.jsxs)("h2",{className:"blog-item-title mb-5 font-bold text-black text-xl md:text-2xl no-underline",children:[(0,c.JA)("POST_TITLE_ICON")&&(0,l.jsx)(o.Z,{icon:null==s?void 0:s.pageIcon}),null==s?void 0:s.title]}),(0,l.jsxs)("div",{className:"flex flex-wrap text-gray-700 dark:text-gray-300",children:[(null==s?void 0:s.type)!=="Page"&&(0,l.jsxs)("div",{className:"space-x-3 mr-4",children:[(0,l.jsxs)("span",{children:[" ",(0,l.jsx)("i",{className:"fa-regular fa-user"})," ",(0,l.jsx)("a",{href:(0,c.JA)("SIMPLE_AUTHOR_LINK",null,i.default),children:(0,c.JA)("AUTHOR")})]}),(0,l.jsxs)("span",{children:[" ",(0,l.jsx)("i",{className:"fa-regular fa-clock"})," ",null==s?void 0:s.publishDay]}),(null==s?void 0:s.category)&&(0,l.jsxs)("span",{children:["  ",(0,l.jsx)("i",{className:"fa-regular fa-folder"})," ",(0,l.jsx)("a",{href:"/category/".concat(null==s?void 0:s.category),className:"hover:text-red-400 transition-all duration-200",children:null==s?void 0:s.category})]}),(null==s?void 0:s.tags)&&(null==s?void 0:null===(a=s.tags)||void 0===a?void 0:a.length)>0&&(null==s?void 0:s.tags.map(e=>(0,l.jsxs)("span",{children:[" / ",(0,l.jsx)(t(),{href:"/tag/".concat(e),children:(0,l.jsx)("span",{className:" hover:text-red-400 transition-all duration-200",children:e})})]},e)))]}),(null==s?void 0:s.type)!=="Page"&&(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)("span",{children:[r.COMMON.POST_TIME,":",(0,l.jsx)(t(),{href:"/archive#".concat((0,d.x)(null==s?void 0:s.publishDate,"yyyy-MM")),passHref:!0,className:"pl-1 mr-2 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 border-b dark:border-gray-500 border-dashed",children:null==s?void 0:s.publishDay})]}),(0,l.jsx)("span",{className:"mr-2",children:"|"}),(0,l.jsxs)("span",{className:"mx-2  dark:text-gray-500",children:[r.COMMON.LAST_EDITED_TIME,": ",null==s?void 0:s.lastEditedDay]}),(0,l.jsx)("span",{className:"mr-2",children:"|"}),(0,l.jsxs)("span",{className:"hidden busuanzi_container_page_pv font-light mr-2",children:[(0,l.jsx)("i",{className:"mr-1 fas fa-eye"}),"\xa0",(0,l.jsx)("span",{className:"mr-2 busuanzi_value_page_pv"})]})]})]})]})}}}]);