"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70052],{70052:function(e,t,s){s.r(t);var r=s(85893),n=s(67294),i=s(69325),u=s(26964);t.default=e=>{let{issueTerm:t,layout:s}=e,{isDarkMode:c}=(0,u.O)(),[a,l]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{let e=document.getElementById("comments");if(!e)return;let t=document.createElement("script");return t.onload=()=>l(!1),t.setAttribute("src","https://utteranc.es/client.js"),t.setAttribute("crossorigin","anonymous"),t.setAttribute("async",!0),t.setAttribute("repo",(0,i.JA)("COMMENT_UTTERRANCES_REPO")),t.setAttribute("issue-term","title"),t.setAttribute("theme",c?"github-dark":"github-light"),null==e||e.appendChild(t),()=>{}},[]),(0,n.useEffect)(()=>{let e=document.querySelector("iframe.utterances-frame");e&&e.contentWindow.postMessage({type:"set-theme",theme:c?"github-dark":"github-light"},"https://utteranc.es")},[c]),(0,r.jsx)("div",{id:"comments",className:"utterances",children:a&&(0,r.jsx)("div",{className:"flex justify-center items-center m-8",children:(0,r.jsx)("div",{className:"animate-spin rounded-full h-8 w-8 border-2 border-indigo-400 border-t-transparent"})})})}}}]);