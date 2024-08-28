"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7506,48844,71120,27794,97670,36640,43302],{25257:function(e,r,a){a.r(r);var t=a(85893),s=a(69325),l=a(41664),n=a.n(l);r.default=e=>{let{currentCategory:r,categories:a}=e;if(!a||0===a.length)return(0,t.jsx)(t.Fragment,{});let l=(0,s.JA)("PREVIEW_CATEGORY_COUNT"),i=a.slice(0,l);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{id:"category-list",className:"dark:border-gray-600 flex flex-wrap",children:i.map(e=>{let a=r===e.name;return(0,t.jsxs)(n(),{href:"/category/".concat(e.name),passHref:!0,className:(a?"hover:text-white dark:hover:text-white bg-gray-600 text-white ":"dark:text-gray-400 text-gray-500 hover:text-white hover:bg-gray-500 dark:hover:text-white")+"  text-sm w-full items-center duration-300 px-2  cursor-pointer py-1 font-light",children:[(0,t.jsx)("i",{className:"".concat(a?"text-white fa-folder-open ":"text-gray-500 fa-folder "," mr-2 fas")}),e.name,"(",e.count,")"]},e.name)})})})}},71120:function(e,r,a){a.r(r);var t=a(85893),s=a(27134),l=a(11163),n=a.n(l),i=a(97670),d=a(69325);r.default=e=>{let{siteInfo:r}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center ",children:[(0,t.jsx)("div",{className:"hover:rotate-45 hover:scale-125 transform duration-200 cursor-pointer",onClick:()=>{n().push("/")},children:(0,t.jsx)(s.Z,{src:null==r?void 0:r.icon,className:"rounded-full",width:120,alt:(0,d.JA)("AUTHOR")})}),(0,t.jsx)("div",{className:"text-2xl font-serif dark:text-white py-2 hover:scale-105 transform duration-200",children:(0,d.JA)("AUTHOR")}),(0,t.jsx)("div",{className:"font-light dark:text-white py-2 hover:scale-105 transform duration-200 text-center",children:(0,d.JA)("BIO")}),(0,t.jsx)(i.default,{})]})})}},27794:function(e,r,a){a.r(r);var t=a(85893),s=a(25257),l=a(71120),n=a(36640),i=a(26964),d=a(41664),c=a.n(d);r.default=e=>{let{tags:r,currentTag:a,post:d,slot:o,categories:f,currentCategory:h}=e,{locale:x}=(0,i.O)();return(0,t.jsx)("aside",{id:"sidebar",className:"bg-white dark:bg-gray-900 w-80 z-10 dark:border-gray-500 border-gray-200 scroll-hidden h-full",children:(0,t.jsxs)("div",{className:(d?"":"sticky top-0")+" bg-white dark:bg-gray-900 pb-4",children:[(0,t.jsx)("section",{className:"py-5",children:(0,t.jsx)(l.default,{...e})}),f&&(0,t.jsxs)("section",{className:"mt-8",children:[(0,t.jsxs)("div",{className:"text-sm px-5 flex flex-nowrap justify-between font-light",children:[(0,t.jsxs)("div",{className:"text-gray-600 dark:text-gray-200",children:[(0,t.jsx)("i",{className:"mr-2 fas fa-th-list"}),x.COMMON.CATEGORY]}),(0,t.jsxs)(c(),{href:"/category",passHref:!0,className:"mb-3 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white hover:underline cursor-pointer",children:[x.COMMON.MORE," ",(0,t.jsx)("i",{className:"fas fa-angle-double-right"})]})]}),(0,t.jsx)(s.default,{currentCategory:h,categories:f})]}),r&&(0,t.jsxs)("section",{className:"mt-4",children:[(0,t.jsxs)("div",{className:"text-sm py-2 px-5 flex flex-nowrap justify-between font-light dark:text-gray-200",children:[(0,t.jsxs)("div",{className:"text-gray-600 dark:text-gray-200",children:[(0,t.jsx)("i",{className:"mr-2 fas fa-tag"}),x.COMMON.TAGS]}),(0,t.jsxs)(c(),{href:"/tag",passHref:!0,className:"text-gray-500 hover:text-black  dark:hover:text-white hover:underline cursor-pointer",children:[x.COMMON.MORE," ",(0,t.jsx)("i",{className:"fas fa-angle-double-right"})]})]}),(0,t.jsx)("div",{className:"px-5 py-2",children:(0,t.jsx)(n.default,{tags:r,currentTag:a})})]}),o]})})}},7506:function(e,r,a){a.r(r);var t=a(85893),s=a(27794),l=a(11163),n=a(67294);r.default=e=>{let{post:r,cRef:a,tags:i,slot:d,categories:c,currentCategory:o}=e;(0,n.useImperativeHandle)(a,()=>({handleSwitchSideDrawerVisible:()=>h(!0)})),(0,n.useEffect)(()=>{var e;let r=document.getElementById("sidebar-wrapper");null==r||null===(e=r.classList)||void 0===e||e.remove("hidden")},[]);let f=(0,l.useRouter)();(0,n.useEffect)(()=>{let e=()=>{h(!1)};return f.events.on("routeChangeComplete",e),()=>{f.events.off("routeChangeComplete",e)}},[f.events]);let h=e=>{let r=window.document.getElementById("sidebar-drawer"),a=window.document.getElementById("sidebar-drawer-background");e?(r.classList.replace("-ml-80","ml-0"),a.classList.replace("hidden","block")):(r.classList.replace("ml-0","-ml-80"),a.classList.replace("block","hidden"))};return(0,t.jsxs)("div",{id:"sidebar-wrapper",className:"hidden",children:[(0,t.jsx)("div",{id:"sidebar-drawer",className:"-ml-80 bg-white dark:bg-gray-900 flex flex-col duration-300 fixed h-full left-0 overflow-y-scroll scroll-hidden top-0 z-40",children:(0,t.jsx)(s.default,{tags:i,post:r,slot:d,categories:c,currentCategory:o})}),(0,t.jsx)("div",{id:"sidebar-drawer-background",onClick:()=>{h(!1)},className:"hidden animate__animated animate__fadeIn fixed top-0 duration-300 left-0 z-30 w-full h-full glassmorphism"})]})}},97670:function(e,r,a){a.r(r);var t=a(85893),s=a(69325);r.default=()=>(0,t.jsx)("div",{className:"w-52 justify-center flex-wrap flex",children:(0,t.jsxs)("div",{className:"space-x-3 text-xl text-gray-600 dark:text-gray-400 text-center",children:[(0,s.JA)("CONTACT_GITHUB")&&(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",title:"github",href:(0,s.JA)("CONTACT_GITHUB"),children:(0,t.jsx)("i",{className:"fab fa-github transform hover:scale-125 duration-150"})}),(0,s.JA)("CONTACT_TWITTER")&&(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",title:"twitter",href:(0,s.JA)("CONTACT_TWITTER"),children:(0,t.jsx)("i",{className:"fab fa-twitter transform hover:scale-125 duration-150"})}),(0,s.JA)("CONTACT_TELEGRAM")&&(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",href:(0,s.JA)("CONTACT_TELEGRAM"),title:"telegram",children:(0,t.jsx)("i",{className:"fab fa-telegram transform hover:scale-125 duration-150"})}),(0,s.JA)("CONTACT_LINKEDIN")&&(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",href:(0,s.JA)("CONTACT_LINKEDIN"),title:"linkedIn",children:(0,t.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-linkedin dark:hover:text-indigo-400 hover:text-indigo-600"})}),(0,s.JA)("CONTACT_WEIBO")&&(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",title:"weibo",href:(0,s.JA)("CONTACT_WEIBO"),children:(0,t.jsx)("i",{className:"fab fa-weibo transform hover:scale-125 duration-150"})}),(0,s.JA)("CONTACT_INSTAGRAM")&&(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",title:"instagram",href:(0,s.JA)("CONTACT_INSTAGRAM"),children:(0,t.jsx)("i",{className:"fab fa-instagram transform hover:scale-125 duration-150"})}),(0,s.JA)("CONTACT_EMAIL")&&(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",title:"email",href:"mailto:".concat((0,s.JA)("CONTACT_EMAIL")),children:(0,t.jsx)("i",{className:"fas fa-envelope transform hover:scale-125 duration-150"})}),JSON.parse((0,s.JA)("ENABLE_RSS"))&&(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",title:"RSS",href:"/rss/feed.xml",children:(0,t.jsx)("i",{className:"fas fa-rss transform hover:scale-125 duration-150"})}),(0,s.JA)("CONTACT_BILIBILI")&&(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",title:"bilibili",href:(0,s.JA)("CONTACT_BILIBILI"),children:(0,t.jsx)("i",{className:"fab fa-bilibili transform hover:scale-125 duration-150"})}),(0,s.JA)("CONTACT_YOUTUBE")&&(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",title:"youtube",href:(0,s.JA)("CONTACT_YOUTUBE"),children:(0,t.jsx)("i",{className:"fab fa-youtube transform hover:scale-125 duration-150"})})]})})},36640:function(e,r,a){a.r(r);var t=a(85893),s=a(69325),l=a(43302);r.default=e=>{let{tags:r,currentTag:a}=e;if(!r||0===r.length)return(0,t.jsx)(t.Fragment,{});let n=(0,s.JA)("PREVIEW_TAG_COUNT"),i=r.slice(0,n);return(0,t.jsx)("div",{id:"tags-group",className:"dark:border-gray-600 w-66 space-y-2",children:i.map(e=>{let r=e.name===a;return(0,t.jsx)(l.default,{tag:e,selected:r},e.name)})})}},43302:function(e,r,a){a.r(r);var t=a(85893),s=a(41664),l=a.n(s);r.default=e=>{let{tag:r,selected:a=!1}=e;return(0,t.jsx)(l(),{href:a?"/":"/tag/".concat(encodeURIComponent(r.name)),passHref:!0,className:"cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200\n        mr-2 py-0.5 px-1 text-xs whitespace-nowrap dark:hover:text-white\n         ".concat(a?"text-white dark:text-gray-300 bg-black dark:bg-black dark:hover:bg-gray-900":"text-gray-600 hover:shadow-xl dark:border-gray-400 notion-".concat(r.color,"_background dark:bg-gray-800")),children:(0,t.jsxs)("div",{className:"font-light dark:text-gray-400",children:[a&&(0,t.jsx)("i",{className:"fas fa-tag mr-1"})," ",r.name+(r.count?"(".concat(r.count,")"):"")," "]})},r)}}}]);