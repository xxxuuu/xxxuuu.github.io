"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[804],{804:function(e,r,a){a.r(r);var s=a(85893),t=a(41664),c=a.n(t),l=a(11163),n=a(26964);r.default=e=>{let{page:r,showNext:a}=e,{locale:t}=(0,n.O)(),o=(0,l.useRouter)(),i=+r,u=o.asPath.split("?")[0].replace(/\/page\/[1-9]\d*/,"").replace(/\/$/,"");return(0,s.jsxs)("div",{className:"my-10 flex justify-between font-medium text-black dark:text-gray-100 space-x-2",children:[(0,s.jsxs)(c(),{href:{pathname:2===i?"".concat(u,"/"):"".concat(u,"/page/").concat(i-1),query:o.query.s?{s:o.query.s}:{}},passHref:!0,rel:"prev",className:"".concat(1===i?"invisible":"visible"," text-center w-full duration-200 px-4 py-2 hover:border-black border-b-2 hover:font-bold"),children:["←",t.PAGINATION.PREV]}),(0,s.jsxs)(c(),{href:{pathname:"".concat(u,"/page/").concat(i+1),query:o.query.s?{s:o.query.s}:{}},passHref:!0,rel:"next",className:"".concat(a?"visible":"invisible"," text-center w-full duration-200 px-4 py-2 hover:border-black border-b-2 hover:font-bold"),children:[t.PAGINATION.NEXT,"→"]})]})}}}]);