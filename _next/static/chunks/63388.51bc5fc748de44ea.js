"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63388],{63388:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var i=r(85893),n=r(67294),o=()=>{let[e,t]=(0,n.useState)({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight});return(0,n.useEffect)(()=>{let e=()=>{t({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight})};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),e},a=r(69325),s=r(26964),l=r(31123),c=r(41664),d=r.n(c),u=r(11163);function h(e){let[t,r]=(0,n.useState)({x:"0px",y:"0px"}),[c,h]=(0,n.useState)(!1),{isDarkMode:f,updateDarkMode:x,locale:m}=(0,s.O)(),w=(0,n.useRef)(null),p=o(),[N,E]=(0,n.useState)(0),[v,_]=(0,n.useState)(0),{allNavPages:C}=e,g=(0,u.useRouter)();(0,n.useLayoutEffect)(()=>{E(w.current.offsetWidth),_(w.current.offsetHeight)},[]),(0,n.useEffect)(()=>{h(!1)},[g]),(0,n.useEffect)(()=>{let e=e=>{e.preventDefault();let t=e.clientX<p.width-N?e.clientX:p.width-N,i=e.clientY<p.height-v?e.clientY:p.height-v;r({y:"".concat(i,"px"),x:"".concat(t,"px")}),h(!0)},t=e=>{h(!1)};return window.addEventListener("contextmenu",e),window.addEventListener("click",t),()=>{window.removeEventListener("contextmenu",e),window.removeEventListener("click",t)}},[p]);let M=(0,a.JA)("CUSTOM_RIGHT_CLICK_CONTEXT_MENU_RANDOM_POST"),T=(0,a.JA)("CUSTOM_RIGHT_CLICK_CONTEXT_MENU_CATEGORY"),j=(0,a.JA)("CUSTOM_RIGHT_CLICK_CONTEXT_MENU_TAG"),b=(0,a.JA)("CAN_COPY"),U=(0,a.JA)("CUSTOM_RIGHT_CLICK_CONTEXT_MENU_SHARE_LINK"),y=(0,a.JA)("CUSTOM_RIGHT_CLICK_CONTEXT_MENU_DARK_MODE"),O=(0,a.JA)("CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_SWITCH");return(0,i.jsx)("div",{ref:w,style:{top:t.y,left:t.x},className:"".concat(c?"":"invisible opacity-0"," select-none transition-opacity duration-200 fixed z-50"),children:(0,i.jsxs)("div",{className:"rounded-xl w-52 dark:hover:border-yellow-600 bg-white dark:bg-[#040404] dark:text-gray-200 dark:border-gray-600 p-3 border drop-shadow-lg flex-col duration-300 transition-colors",children:[(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsx)("i",{onClick:function(){window.history.back()},className:"hover:bg-blue-600 hover:text-white px-2 py-2 text-center w-8 rounded cursor-pointer fa-solid fa-arrow-left"}),(0,i.jsx)("i",{onClick:function(){window.history.forward()},className:"hover:bg-blue-600 hover:text-white px-2 py-2 text-center w-8 rounded cursor-pointer fa-solid fa-arrow-right"}),(0,i.jsx)("i",{onClick:function(){window.location.reload()},className:"hover:bg-blue-600 hover:text-white px-2 py-2 text-center w-8 rounded cursor-pointer fa-solid fa-rotate-right"}),(0,i.jsx)("i",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"hover:bg-blue-600 hover:text-white px-2 py-2 text-center w-8 rounded cursor-pointer fa-solid fa-arrow-up"})]}),(0,i.jsx)("hr",{className:"my-2 border-dashed"}),(0,i.jsxs)("div",{className:"w-full px-2",children:[M&&(0,i.jsxs)("div",{onClick:function(){let e=Math.floor(Math.random()*C.length),t=C[e];g.push("".concat((0,a.JA)("SUB_PATH",""),"/").concat(null==t?void 0:t.slug))},title:m.MENU.WALK_AROUND,className:"w-full px-2 h-10 flex justify-start items-center flex-nowrap cursor-pointer hover:bg-blue-600 hover:text-white rounded-lg duration-200 transition-all",children:[(0,i.jsx)("i",{className:"fa-solid fa-podcast mr-2"}),(0,i.jsx)("div",{className:"whitespace-nowrap",children:m.MENU.WALK_AROUND})]}),T&&(0,i.jsxs)(d(),{href:"/category",title:m.MENU.CATEGORY,className:"w-full px-2 h-10 flex justify-start items-center flex-nowrap cursor-pointer hover:bg-blue-600 hover:text-white rounded-lg duration-200 transition-all",children:[(0,i.jsx)("i",{className:"fa-solid fa-square-minus mr-2"}),(0,i.jsx)("div",{className:"whitespace-nowrap",children:m.MENU.CATEGORY})]}),j&&(0,i.jsxs)(d(),{href:"/tag",title:m.MENU.TAGS,className:"w-full px-2 h-10 flex justify-start items-center flex-nowrap cursor-pointer hover:bg-blue-600 hover:text-white rounded-lg duration-200 transition-all",children:[(0,i.jsx)("i",{className:"fa-solid fa-tag mr-2"}),(0,i.jsx)("div",{className:"whitespace-nowrap",children:m.MENU.TAGS})]})]}),(0,i.jsx)("hr",{className:"my-2 border-dashed"}),(0,i.jsxs)("div",{className:"w-full px-2",children:[b&&(0,i.jsxs)("div",{onClick:function(){let e=document.getSelection().toString();if(e){let t=document.createElement("input");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},title:m.MENU.COPY,className:"w-full px-2 h-10 flex justify-start items-center flex-nowrap cursor-pointer hover:bg-blue-600 hover:text-white rounded-lg duration-200 transition-all",children:[(0,i.jsx)("i",{className:"fa-solid fa-copy mr-2"}),(0,i.jsx)("div",{className:"whitespace-nowrap",children:m.MENU.COPY})]}),U&&(0,i.jsxs)("div",{onClick:function(){let e=window.location.href;navigator.clipboard.writeText(e).then(()=>{alert("".concat(m.COMMON.PAGE_URL_COPIED," : ").concat(e))}).catch(e=>{console.error("复制页面地址失败:",e)})},title:m.MENU.SHARE_URL,className:"w-full px-2 h-10 flex justify-start items-center flex-nowrap cursor-pointer hover:bg-blue-600 hover:text-white rounded-lg duration-200 transition-all",children:[(0,i.jsx)("i",{className:"fa-solid fa-arrow-up-right-from-square mr-2"}),(0,i.jsx)("div",{className:"whitespace-nowrap",children:m.MENU.SHARE_URL})]}),y&&(0,i.jsxs)("div",{onClick:function(){var e,t;let r=!f;(0,l.saveDarkModeToLocalStorage)(r),x(r);let i=document.getElementsByTagName("html")[0];null===(e=i.classList)||void 0===e||e.remove(r?"light":"dark"),null===(t=i.classList)||void 0===t||t.add(r?"dark":"light")},title:f?m.MENU.LIGHT_MODE:m.MENU.DARK_MODE,className:"w-full px-2 h-10 flex justify-start items-center flex-nowrap cursor-pointer hover:bg-blue-600 hover:text-white rounded-lg duration-200 transition-all",children:[f?(0,i.jsx)("i",{className:"fa-regular fa-sun mr-2"}):(0,i.jsx)("i",{className:"fa-regular fa-moon mr-2"}),(0,i.jsxs)("div",{className:"whitespace-nowrap",children:[" ",f?m.MENU.LIGHT_MODE:m.MENU.DARK_MODE]})]}),O&&(0,i.jsxs)("div",{onClick:function(){let e=l.THEMES[Math.floor(Math.random()*l.THEMES.length)],t=g.query;t.theme=e,g.push({pathname:g.pathname,query:t})},title:m.MENU.THEME_SWITCH,className:"w-full px-2 h-10 flex justify-start items-center flex-nowrap cursor-pointer hover:bg-blue-600 hover:text-white rounded-lg duration-200 transition-all",children:[(0,i.jsx)("i",{className:"fa-solid fa-palette mr-2"}),(0,i.jsx)("div",{className:"whitespace-nowrap",children:m.MENU.THEME_SWITCH})]})]})]})})}}}]);