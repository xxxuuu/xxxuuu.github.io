"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56592,91034],{56592:function(e,a,t){t.r(a);var r=t(85893),n=t(11163),l=t(67294),s=t(91034);a.default=e=>{let{cRef:a,slot:t}=e,i=(0,l.useRef)(),u=(0,l.useRef)();(0,l.useImperativeHandle)(a,()=>({show:()=>{var e,a,t;null==i||null===(a=i.current)||void 0===a||null===(e=a.classList)||void 0===e||e.remove("hidden"),null==u||null===(t=u.current)||void 0===t||t.focus()}}));let o=()=>{var e,a;null==i||null===(a=i.current)||void 0===a||null===(e=a.classList)||void 0===e||e.add("hidden")};return n.Router.events.on("routeChangeComplete",function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];o()}),(0,r.jsxs)("div",{id:"search-drawer-wrapper",ref:i,className:"hidden",children:[(0,r.jsx)("div",{className:"flex-col fixed px-5 w-full left-0 top-14 z-40 justify-center",children:(0,r.jsxs)("div",{className:"md:max-w-3xl w-full mx-auto animate__animated animate__faster animate__fadeIn",children:[(0,r.jsx)(s.default,{cRef:u}),t]})}),(0,r.jsx)("div",{id:"search-drawer-background",onClick:o,className:"animate__animated animate__faster animate__fadeIn fixed bg-day dark:bg-night top-0 left-0 z-40 w-full h-full"})]})}},91034:function(e,a,t){t.r(a);var r=t(85893),n=t(11163),l=t(67294),s=t(26964);let i=!1;a.default=e=>{let{currentSearch:a,cRef:t,className:u}=e,[o,d]=(0,l.useState)(!1),c=(0,n.useRouter)(),f=(0,l.useRef)(),{locale:m}=(0,s.O)();(0,l.useImperativeHandle)(t,()=>({focus:()=>{var e;null==f||null===(e=f.current)||void 0===e||e.focus()}}));let h=()=>{let e=f.current.value;e&&""!==e?(d(!0),c.push({pathname:"/search/"+e}).then(e=>{d(!1)})):c.push({pathname:"/"}).then(e=>{})},p=()=>{f.current.value=""},[v,x]=(0,l.useState)(!1),g=e=>{i||(f.current.value=e,e?x(!0):x(!1))};function k(){i=!0}return(0,r.jsxs)("div",{className:"flex w-full rounded-lg "+u,children:[(0,r.jsx)("input",{ref:f,type:"text",className:"outline-none w-full text-sm pl-5 rounded-lg transition focus:shadow-lg dark:text-gray-300 font-light leading-10 text-black bg-gray-100 dark:bg-gray-500",onKeyUp:e=>{13===e.keyCode?h(f.current.value):27===e.keyCode&&p()},onCompositionStart:k,onCompositionUpdate:k,onCompositionEnd:function(){i=!1},placeholder:m.SEARCH.ARTICLES,onChange:e=>g(e.target.value),defaultValue:a||""}),(0,r.jsx)("div",{className:"-ml-8 cursor-pointer  float-right items-center justify-center py-2",onClick:h,children:(0,r.jsx)("i",{className:"hover:text-black transform duration-200 text-gray-500 dark:text-gray-200 cursor-pointer fas ".concat(o?"fa-spinner animate-spin":"fa-search")})}),v&&(0,r.jsx)("div",{className:"-ml-12 cursor-pointer float-right items-center justify-center py-2",children:(0,r.jsx)("i",{className:"hover:text-black transform duration-200 text-gray-400 dark:text-gray-300 cursor-pointer fas fa-times",onClick:p})})]})}}}]);