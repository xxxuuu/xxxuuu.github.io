"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68275],{68275:function(e,r,a){a.r(r);var t=a(85893),s=a(26964),c=a(41664),l=a.n(c),n=a(11163);r.default=e=>{let{page:r,showNext:a}=e,{locale:c}=(0,s.O)(),o=(0,n.useRouter)(),b=+r,i=o.asPath.split("?")[0].replace(/\/page\/[1-9]\d*/,"").replace(/\/$/,"").replace(".html","");return(0,t.jsxs)("div",{className:"my-10 flex justify-between font-medium text-black dark:text-gray-100 space-x-2",children:[(0,t.jsxs)(l(),{href:{pathname:2===b?"".concat(i,"/"):"".concat(i,"/page/").concat(b-1),query:o.query.s?{s:o.query.s}:{}},passHref:!0,rel:"prev",className:"".concat(1===b?"invisible":"visible"," text-center w-full duration-200 px-4 py-2 hover:border-black dark:border-hexo-black-gray border-b-2 hover:font-bold"),children:["←",c.PAGINATION.PREV]}),(0,t.jsxs)(l(),{href:{pathname:"".concat(i,"/page/").concat(b+1),query:o.query.s?{s:o.query.s}:{}},passHref:!0,rel:"next",className:"".concat(a?"visible":"invisible"," text-center w-full duration-200 px-4 py-2 hover:border-black dark:border-hexo-black-gray border-b-2 hover:font-bold"),children:[c.PAGINATION.NEXT,"→"]})]})}}}]);