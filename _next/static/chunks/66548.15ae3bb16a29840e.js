"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66548,27548],{31761:function(e,a,t){function n(e,a){if(!e||!a)return e||"";let t=new Date(e).toLocaleDateString(a,{year:"numeric",month:"short",day:"numeric"});return"zh"===a.slice(0,2).toLowerCase()?t.replace("年","-").replace("月","-").replace("日",""):t}function i(e,a){let t=new Date(e),n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(let e in/(y+)/.test(a)&&(a=a.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),n)RegExp("("+e+")").test(a)&&(a=a.replace(RegExp.$1,1===RegExp.$1.length?n[e]:("00"+n[e]).substr((""+n[e]).length)));return a.trim()}t.d(a,{Z:function(){return n},x:function(){return i}})},66548:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var n=t(85893),i=t(1822),s=t.n(i),r=t(73214),o=t(27134),l=t(67968),c=t(5407),m=t(69325),d=t(31761),f=t(41664),x=t.n(f),u=t(27548);function b(e){let{post:a,siteInfo:t,isDarkMode:i}=e;if(!a)return(0,n.jsx)(n.Fragment,{});let f=(null==a?void 0:a.pageCover)?a.pageCover:null==t?void 0:t.pageCover,b=(0,m.JA)("ANALYTICS_BUSUANZI_ENABLE");return(0,n.jsxs)("div",{id:"post-bg",className:s().dynamic([["7a3806b05c3a60f6",[i?"#CA8A04":"#0060e0"]]])+" md:mb-0 -mb-5 w-full h-[30rem] relative md:flex-shrink-0 overflow-hidden bg-cover bg-center bg-no-repeat z-10",children:[(0,n.jsx)(s(),{id:"7a3806b05c3a60f6",dynamic:[i?"#CA8A04":"#0060e0"],children:'.coverdiv.__jsx-style-dynamic-selector:after{position:absolute;content:"";width:100%;height:100%;top:0;left:0;-webkit-box-shadow:110px -130px 500px 100px '.concat(i?"#CA8A04":"#0060e0"," inset;-moz-box-shadow:110px -130px 500px 100px ").concat(i?"#CA8A04":"#0060e0"," inset;box-shadow:110px -130px 500px 100px ").concat(i?"#CA8A04":"#0060e0"," inset}")}),(0,n.jsxs)("div",{className:s().dynamic([["7a3806b05c3a60f6",[i?"#CA8A04":"#0060e0"]]])+" "+"".concat(i?"bg-[#CA8A04]":"bg-[#0060e0]"," absolute top-0 w-full h-full py-10 flex justify-center items-center"),children:[(0,n.jsx)("div",{id:"post-cover-wrapper",style:{filter:"blur(15px)"},className:s().dynamic([["7a3806b05c3a60f6",[i?"#CA8A04":"#0060e0"]]])+" coverdiv lg:opacity-50 lg:translate-x-96 lg:rotate-12",children:(0,n.jsx)(o.Z,{id:"post-cover",className:"w-full h-full object-cover max-h-[50rem] min-w-[50vw] min-h-[20rem]",src:f})}),(0,n.jsxs)("div",{id:"post-info",className:s().dynamic([["7a3806b05c3a60f6",[i?"#CA8A04":"#0060e0"]]])+" absolute top-48 z-10 flex flex-col space-y-4 lg:-mt-12 w-full max-w-[86rem] px-5",children:[(0,n.jsxs)("div",{className:s().dynamic([["7a3806b05c3a60f6",[i?"#CA8A04":"#0060e0"]]])+" flex justify-center md:justify-start items-center gap-4",children:[a.category&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(x(),{href:"/category/".concat(a.category),className:"mr-4",passHref:!0,legacyBehavior:!0,children:(0,n.jsx)("div",{className:s().dynamic([["7a3806b05c3a60f6",[i?"#CA8A04":"#0060e0"]]])+" cursor-pointer font-sm font-bold px-3 py-1 rounded-lg  hover:bg-white text-white bg-blue-500 dark:bg-yellow-500 hover:text-blue-500 duration-200 ",children:a.category})})}),a.tagItems&&(0,n.jsx)("div",{className:s().dynamic([["7a3806b05c3a60f6",[i?"#CA8A04":"#0060e0"]]])+" hidden md:flex justify-center flex-nowrap overflow-x-auto",children:a.tagItems.map((e,a)=>(0,n.jsx)(x(),{href:"/tag/".concat(encodeURIComponent(e.name)),passHref:!0,className:"cursor-pointer inline-block text-gray-50 hover:text-white duration-200 py-0.5 px-1 whitespace-nowrap ",children:(0,n.jsxs)("div",{className:s().dynamic([["7a3806b05c3a60f6",[i?"#CA8A04":"#0060e0"]]])+" font-light flex items-center",children:[(0,n.jsx)(r.VN,{className:"text-gray-200 stroke-2 mr-0.5 w-3 h-3"})," ",e.name+(e.count?"(".concat(e.count,")"):"")," "]})},a))})]}),(0,n.jsxs)("div",{className:s().dynamic([["7a3806b05c3a60f6",[i?"#CA8A04":"#0060e0"]]])+" max-w-5xl font-bold text-3xl lg:text-5xl md:leading-snug shadow-text-md flex  justify-center md:justify-start text-white",children:[(0,m.JA)("POST_TITLE_ICON")&&(0,n.jsx)(l.Z,{icon:a.pageIcon}),a.title]}),(0,n.jsxs)("section",{className:s().dynamic([["7a3806b05c3a60f6",[i?"#CA8A04":"#0060e0"]]])+" flex-wrap dark:text-gray-200 text-opacity-70 shadow-text-md flex text-sm  justify-center md:justify-start mt-4 text-white font-light leading-8",children:[(0,n.jsxs)("div",{className:s().dynamic([["7a3806b05c3a60f6",[i?"#CA8A04":"#0060e0"]]])+" flex justify-center ",children:[(0,n.jsx)("div",{className:s().dynamic([["7a3806b05c3a60f6",[i?"#CA8A04":"#0060e0"]]])+" mr-2",children:(0,n.jsx)(c.Z,{})}),(null==a?void 0:a.type)!=="Page"&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(x(),{href:"/archive#".concat((0,d.x)(null==a?void 0:a.publishDate,"yyyy-MM")),passHref:!0,className:"pl-1 mr-2 cursor-pointer hover:underline",children:[(0,n.jsx)("i",{className:s().dynamic([["7a3806b05c3a60f6",[i?"#CA8A04":"#0060e0"]]])+" fa-regular fa-calendar"})," ",null==a?void 0:a.publishDay]})}),(0,n.jsxs)("div",{className:s().dynamic([["7a3806b05c3a60f6",[i?"#CA8A04":"#0060e0"]]])+" pl-1 mr-2",children:[(0,n.jsx)("i",{className:s().dynamic([["7a3806b05c3a60f6",[i?"#CA8A04":"#0060e0"]]])+" fa-regular fa-calendar-check"})," ",a.lastEditedDay]})]}),b&&(0,n.jsxs)("div",{className:s().dynamic([["7a3806b05c3a60f6",[i?"#CA8A04":"#0060e0"]]])+" busuanzi_container_page_pv font-light mr-2",children:[(0,n.jsx)("i",{className:s().dynamic([["7a3806b05c3a60f6",[i?"#CA8A04":"#0060e0"]]])+" fa-solid fa-fire-flame-curved"})," ",(0,n.jsx)("span",{className:s().dynamic([["7a3806b05c3a60f6",[i?"#CA8A04":"#0060e0"]]])+" mr-2 busuanzi_value_page_pv"})]})]})]}),(0,n.jsx)(u.default,{})]})]})}},27548:function(e,a,t){t.r(a),t.d(a,{default:function(){return l}});var n=t(85893),i=t(1822),s=t.n(i),r=t(26964),o=t(67294);function l(){let{isDarkMode:e}=(0,r.O)(),a=e?"#18171d":"#f7f9fe",[t,i]=(0,o.useState)(!0);return((0,o.useEffect)(()=>{let e=()=>{window.innerWidth<800?i(!1):i(!0)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),t)?(0,n.jsxs)("section",{className:s().dynamic([["b510614eeb2e31b3",[a,a,a,a]]])+" main-hero-waves-area waves-area w-full absolute left-0 z-10 bottom-0",children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none",shapeRendering:"auto",className:s().dynamic([["b510614eeb2e31b3",[a,a,a,a]]])+" waves-svg w-full h-[60px]",children:[(0,n.jsx)("defs",{className:s().dynamic([["b510614eeb2e31b3",[a,a,a,a]]]),children:(0,n.jsx)("path",{id:"gentle-wave",d:"M -160 44 c 30 0 58 -18 88 -18 s 58 18 88 18 s 58 -18 88 -18 s 58 18 88 18 v 44 h -352 Z",className:s().dynamic([["b510614eeb2e31b3",[a,a,a,a]]])})}),(0,n.jsxs)("g",{className:s().dynamic([["b510614eeb2e31b3",[a,a,a,a]]])+" parallax",children:[(0,n.jsx)("use",{href:"#gentle-wave",x:"48",y:"0",className:s().dynamic([["b510614eeb2e31b3",[a,a,a,a]]])}),(0,n.jsx)("use",{href:"#gentle-wave",x:"48",y:"3",className:s().dynamic([["b510614eeb2e31b3",[a,a,a,a]]])}),(0,n.jsx)("use",{href:"#gentle-wave",x:"48",y:"5",className:s().dynamic([["b510614eeb2e31b3",[a,a,a,a]]])}),(0,n.jsx)("use",{href:"#gentle-wave",x:"48",y:"7",className:s().dynamic([["b510614eeb2e31b3",[a,a,a,a]]])})]})]}),(0,n.jsx)(s(),{id:"b510614eeb2e31b3",dynamic:[a,a,a,a],children:".parallax>use{-webkit-animation:move-forever 30s cubic-bezier(.55,.5,.45,.5)infinite;-moz-animation:move-forever 30s cubic-bezier(.55,.5,.45,.5)infinite;-o-animation:move-forever 30s cubic-bezier(.55,.5,.45,.5)infinite;animation:move-forever 30s cubic-bezier(.55,.5,.45,.5)infinite}.parallax>use:nth-child(1){-webkit-animation-delay:-2s;-moz-animation-delay:-2s;-o-animation-delay:-2s;animation-delay:-2s;-webkit-animation-duration:7s;-moz-animation-duration:7s;-o-animation-duration:7s;animation-duration:7s;fill:".concat(a,";opacity:.5}.parallax>use:nth-child(2){-webkit-animation-delay:-3s;-moz-animation-delay:-3s;-o-animation-delay:-3s;animation-delay:-3s;-webkit-animation-duration:10s;-moz-animation-duration:10s;-o-animation-duration:10s;animation-duration:10s;fill:").concat(a,";opacity:.6}.parallax>use:nth-child(3){-webkit-animation-delay:-4s;-moz-animation-delay:-4s;-o-animation-delay:-4s;animation-delay:-4s;-webkit-animation-duration:13s;-moz-animation-duration:13s;-o-animation-duration:13s;animation-duration:13s;fill:").concat(a,";opacity:.7}.parallax>use:nth-child(4){-webkit-animation-delay:-5s;-moz-animation-delay:-5s;-o-animation-delay:-5s;animation-delay:-5s;-webkit-animation-duration:20s;-moz-animation-duration:20s;-o-animation-duration:20s;animation-duration:20s;fill:").concat(a,"}@-webkit-keyframes move-forever{0%{-webkit-transform:translate3d(-90px,0,0);transform:translate3d(-90px,0,0)}100%{-webkit-transform:translate3d(85px,0,0);transform:translate3d(85px,0,0)}}@-moz-keyframes move-forever{0%{-moz-transform:translate3d(-90px,0,0);transform:translate3d(-90px,0,0)}100%{-moz-transform:translate3d(85px,0,0);transform:translate3d(85px,0,0)}}@-o-keyframes move-forever{0%{transform:translate3d(-90px,0,0)}100%{transform:translate3d(85px,0,0)}}@keyframes move-forever{0%{-webkit-transform:translate3d(-90px,0,0);-moz-transform:translate3d(-90px,0,0);transform:translate3d(-90px,0,0)}100%{-webkit-transform:translate3d(85px,0,0);-moz-transform:translate3d(85px,0,0);transform:translate3d(85px,0,0)}}")})]}):null}}}]);