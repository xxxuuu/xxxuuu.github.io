"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92008,51140,80809],{92008:function(e,l,t){t.r(l),t.d(l,{BlogListScroll:function(){return c}});var s=t(85893),r=t(69325),i=t(26964),o=t(78174),n=t(93096),a=t.n(n),u=t(67294),d=t(51140);let c=e=>{let{posts:l}=e,{locale:t,NOTION_CONFIG:n}=(0,i.O)(),[c,h]=(0,u.useState)(1),f=(0,r.JA)("POSTS_PER_PAGE",null,n),m=!1,v=l&&Array.isArray(l)?(0,o.deepClone)(l).slice(0,f*c):[];l&&(m=c*f<l.length);let g=()=>{m&&h(c+1)},p=(0,u.useRef)(null),E=(0,u.useCallback)(a()(()=>{window.scrollY+window.outerHeight>(p&&p.current?p.current.clientHeight:0)+100&&g()},500));return(0,u.useEffect)(()=>(window.addEventListener("scroll",E),()=>{window.removeEventListener("scroll",E)})),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{id:"posts-wrapper",className:"my-4",ref:p,children:(0,s.jsx)(d.GameListIndexCombine,{posts:v})}),(0,s.jsxs)("div",{onClick:g,className:"w-full my-4 py-4 text-center cursor-pointer ",children:[" ",m?t.COMMON.MORE:"".concat(t.COMMON.NO_MORE," \uD83D\uDE30")," "]})]})}},51140:function(e,l,t){t.r(l),t.d(l,{GameListIndexCombine:function(){return h}});var s=t(85893),r=t(46767),i=t(27134),o=t(69325),n=t(78174),a=t(41664),u=t.n(a),d=t(67294),c=t(80809);let h=e=>{let{posts:l}=e,t=(0,n.deepClone)(l),r=[],i=(0,o.JA)("GAME_INDEX_EXPAND_RECOMMEND",!0,c.default),a=0;if(i){let e=[];for(;(null==t?void 0:t.length)>0;){if(++a%9==0){r.push((0,s.jsx)(f,{},a));continue}for(;(null==t?void 0:t.length)>0&&e.length<4;){var u;let l=t.shift();if(a++,null===(u=l.tags)||void 0===u?void 0:u.some(e=>e===(0,o.JA)("GAME_RECOMMEND_TAG","Recommend",c.default))){r.push((0,s.jsx)(v,{item:l,isLargeCard:!0},a));continue}e.push(l)}if(4===e.length)r.push((0,s.jsx)(m,{items:e},a)),e=[];else for(;e.length>0;){let l=e.shift();a++,r.push((0,s.jsx)(v,{item:l,isLargeCard:!0},a++))}}}else for(;(null==t?void 0:t.length)>0;)if(++a%6==0)r.push((0,s.jsx)(f,{},a));else if(a%2==0&&(null==t?void 0:t.length)>=4){let e=[];for(let l=1;l<=4;l++)e.push(t.shift());r.push((0,s.jsx)(m,{items:e},a))}else{let e=t.shift();r.push((0,s.jsx)(v,{item:e,isLargeCard:!0},a))}return(0,s.jsx)("div",{className:"game-list-wrapper flex justify-center w-full",children:(0,s.jsx)("div",{className:"game-grid mx-auto w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-2 md:p-0",children:null==r?void 0:r.map((e,l)=>e)})})},f=()=>(0,s.jsxs)("div",{className:"card-group relative rounded-lg game-ad h-80 w-full overflow-hidden",children:[(0,s.jsx)(r.AdSlot,{type:"flow"}),(0,s.jsxs)("div",{className:"absolute left-0 right-0 w-full h-full flex flex-col justify-center items-center bg-white",children:[(0,s.jsx)("p",{className:"text-2xl",children:(0,o.JA)("TITLE")}),(0,s.jsx)("p",{children:(0,o.JA)("DESCRIPTION")})]})]}),m=e=>{let{items:l}=e;return(0,s.jsx)("div",{className:"card-group h-80 w-full grid grid-cols-2 grid-rows-2 gap-3",children:l.map((e,l)=>(0,s.jsx)(v,{item:e},l))})},v=e=>{var l;let{item:t,isLargeCard:r}=e,{title:o}=t,n=t.pageCoverThumbnail,[a,c]=(0,d.useState)("img"),h=null==t?void 0:null===(l=t.ext)||void 0===l?void 0:l.video;return(0,s.jsxs)(u(),{title:o,href:"".concat(null==t?void 0:t.href),className:"card-single ".concat(r?"h-80 ":"h-full text-xs"," w-full transition-all duration-200 shadow-md md:hover:scale-105 md:hover:shadow-lg relative rounded-lg overflow-hidden flex justify-center items-center\n      group hover:border-purple-400"),onMouseOver:()=>{c("video")},onMouseOut:()=>{c("img")},children:[(0,s.jsx)("div",{className:"text-center absolute bottom-0 invisible group-hover:bottom-2 group-hover:visible transition-all duration-200 text-white z-30",children:o}),(0,s.jsx)("div",{className:"h-2/3 w-full absolute left-0 bottom-0 z-20 opacity-0 group-hover:opacity-75 transition-all duration-200",children:(0,s.jsx)("div",{className:"h-full w-full absolute bg-gradient-to-b from-transparent to-black"})}),"video"===a&&(0,s.jsx)("video",{className:"z-10 object-cover w-full ".concat(r?"h-80":"h-full"," absolute overflow-hidden"),loop:"true",autoPlay:!0,preload:"none",children:(0,s.jsx)("source",{src:h,type:"video/mp4"})}),(0,s.jsx)(i.Z,{className:"w-full h-full absolute object-cover group-hover:scale-105 duration-100 transition-all",src:n,priority:!0,alt:o,fill:"full"})]})}},80809:function(e,l,t){t.r(l),l.default={GAME_NAV_NOTION_ICON:!0,GAME_RECOMMEND_TAG:"Recommend",GAME_INDEX_EXPAND_RECOMMEND:!0,GAME_MENU_RANDOM_POST:!0,GAME_MENU_SEARCH_BUTTON:!0,GAME_MENU_CATEGORY:!1,GAME_MENU_TAG:!0,GAME_MENU_ARCHIVE:!1,GAME_MENU_SEARCH:!0,GAME_MENU_RSS:!1}}}]);