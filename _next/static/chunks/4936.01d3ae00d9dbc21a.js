"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4936,48064,31184,59883,15798],{48064:function(e,r,t){t.r(r);var a=t(85893);r.default=e=>{let{children:r,headerSlot:t,className:l}=e;return(0,a.jsxs)("div",{className:l,children:[(0,a.jsx)(a.Fragment,{children:t}),(0,a.jsx)("section",{className:"card shadow-md hover:shadow-md dark:text-gray-300 border dark:border-black rounded-xl lg:p-6 p-4 bg-white dark:bg-hexo-black-gray lg:duration-100",children:r})]})}},4936:function(e,r,t){t.r(r),t.d(r,{InfoCard:function(){return c}});var a=t(85893),l=t(11163),s=t(48064),n=t(59883),i=t(31184),o=t(27134),d=t(69325);function c(e){let{className:r,siteInfo:t}=e,c=(0,l.useRouter)();return(0,a.jsxs)(s.default,{className:r,children:[(0,a.jsx)("div",{className:"justify-center items-center flex py-6 dark:text-gray-100  transform duration-200 cursor-pointer",onClick:()=>{c.push("/")},children:(0,a.jsx)(o.Z,{src:null==t?void 0:t.icon,className:"rounded-full",width:120,alt:(0,d.JA)("AUTHOR")})}),(0,a.jsx)("div",{className:"font-medium text-center text-xl pb-4",children:(0,d.JA)("AUTHOR")}),(0,a.jsx)("div",{className:"text-sm text-center",children:(0,d.JA)("BIO")}),(0,a.jsx)(i.default,{...e}),(0,a.jsx)(n.default,{})]})}},31184:function(e,r,t){t.r(r);var a=t(85893),l=t(26964),s=t(41664),n=t.n(s),i=t(15798);r.default=e=>{let{postCount:r,categoryOptions:t,tagOptions:s}=e,{locale:o}=(0,l.O)(),d=(0,a.jsx)("div",{className:"text-center",children:r}),c=(0,a.jsx)("div",{className:"text-center",children:null==t?void 0:t.length}),f=(0,a.jsx)("div",{className:"text-center",children:null==s?void 0:s.length}),h=[{name:o.COMMON.ARTICLE,href:"/archive",slot:d,show:i.default.MENU_ARCHIVE},{name:o.COMMON.CATEGORY,href:"/category",slot:c,show:i.default.MENU_CATEGORY},{name:o.COMMON.TAGS,href:"/tag",slot:f,show:i.default.MENU_TAG}];for(let e=0;e<h.length;e++)h[e].id!==e&&(h[e].id=e);return(0,a.jsx)("nav",{id:"nav",className:"leading-8 flex justify-center  dark:text-gray-200 w-full",children:h.map(e=>e.show?(0,a.jsx)(n(),{title:e.name,href:e.href,target:null==e?void 0:e.target,className:"py-1.5 my-1 px-2 duration-300 text-base justify-center items-center cursor-pointer",children:(0,a.jsxs)("div",{className:"w-full items-center justify-center hover:scale-105 duration-200 transform dark:hover:text-red-400 hover:text-red-600",children:[(0,a.jsx)("div",{className:"text-center",children:e.name}),(0,a.jsx)("div",{className:"text-center font-semibold",children:e.slot})]})},"".concat(e.slug)):null)})}},59883:function(e,r,t){t.r(r);var a=t(85893),l=t(69325);r.default=()=>(0,a.jsx)("div",{className:"w-full justify-center flex-wrap flex",children:(0,a.jsxs)("div",{className:"space-x-3 text-xl text-gray-600 dark:text-gray-300 ",children:[(0,l.JA)("CONTACT_GITHUB")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"github",href:(0,l.JA)("CONTACT_GITHUB"),children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-github dark:hover:text-red-400 hover:text-red-600"})}),(0,l.JA)("CONTACT_TWITTER")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"twitter",href:(0,l.JA)("CONTACT_TWITTER"),children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-twitter dark:hover:text-red-400 hover:text-red-600"})}),(0,l.JA)("CONTACT_TELEGRAM")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:(0,l.JA)("CONTACT_TELEGRAM"),title:"telegram",children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-telegram dark:hover:text-red-400 hover:text-red-600"})}),(0,l.JA)("CONTACT_LINKEDIN")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:(0,l.JA)("CONTACT_LINKEDIN"),title:"linkIn",children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-linkedin dark:hover:text-red-400 hover:text-red-600"})}),(0,l.JA)("CONTACT_WEIBO")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"weibo",href:(0,l.JA)("CONTACT_WEIBO"),children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-weibo dark:hover:text-red-400 hover:text-red-600"})}),(0,l.JA)("CONTACT_INSTAGRAM")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"instagram",href:(0,l.JA)("CONTACT_INSTAGRAM"),children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-instagram dark:hover:text-red-400 hover:text-red-600"})}),(0,l.JA)("CONTACT_EMAIL")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"email",href:"mailto:".concat((0,l.JA)("CONTACT_EMAIL")),children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fas fa-envelope dark:hover:text-red-400 hover:text-red-600"})}),JSON.parse((0,l.JA)("ENABLE_RSS"))&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"RSS",href:"/rss/feed.xml",children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fas fa-rss dark:hover:text-red-400 hover:text-red-600"})}),(0,l.JA)("CONTACT_BILIBILI")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"bilibili",href:(0,l.JA)("CONTACT_BILIBILI"),children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-bilibili dark:hover:text-red-400 hover:text-red-600"})}),(0,l.JA)("CONTACT_YOUTUBE")&&(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",title:"youtube",href:(0,l.JA)("CONTACT_YOUTUBE"),children:(0,a.jsx)("i",{className:"transform hover:scale-125 duration-150 fab fa-youtube dark:hover:text-red-400 hover:text-red-600"})})]})})},15798:function(e,r,t){t.r(r),r.default={COMMERCE_HOME_BANNER_ENABLE:!0,COMMERCE_TEXT_CENTER_TITLE:"Product Center",COMMERCE_TEXT_CENTER_DESCRIPTION:"The vision of NotionNext is to help you effortlessly and seamlessly build your own website, amplifying the value of your brand.",COMMERCE_TEXT_CENTER_CATEGORY_TITLE:"Product Categories",COMMERCE_TEXT_FOOTER_TITLE:"Contact US",COMMERCE_TEXT_FOOTER_MENU_1:"Product Center",COMMERCE_TEXT_FOOTER_MENU_2:"About US",COMMERCE_FOOTER_RIGHT_IMG_URL:null,COMMERCE_FOOTER_RIGHT_TEXT:null,COMMERCE_HOME_POSTS_COUNT:9,COMMERCE_CONTACT_WHATSAPP_SHOW:!0,COMMERCE_CONTACT_TELEGRAM_SHOW:!0}}}]);