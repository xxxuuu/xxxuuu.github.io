"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76925],{76925:function(e,s,a){a.r(s),a.d(s,{default:function(){return h}});var t=a(85893),l=a(67294);class n extends l.Component{handleChange(e){let{onChange:s}=this.props;s(e.target.value)}render(){var e;return(0,t.jsxs)("div",{className:"py-1 space-x-3",children:[(0,t.jsx)("label",{className:"text-gray-500",children:this.props.label}),(0,t.jsx)("select",{value:this.props.value,onChange:this.handleChange,className:"border p-1 rounded cursor-pointer",children:null===(e=this.props.options)||void 0===e?void 0:e.map(e=>(0,t.jsx)("option",{value:e.value,children:e.text},e.value))})]})}constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}}n.defaultProps={label:"",value:"1",options:[{value:"1",text:"选项1"},{value:"2",text:"选项2"}]};var i=a(26964),r=a(31123),c=a(11163),d=a(69325),o=a(78174),h=()=>{let[e,s]=(0,l.useState)(!1),{theme:a,switchTheme:h,locale:u}=(0,i.O)(),x=(0,c.useRouter)(),p=(0,o.getQueryParam)(x.asPath,"theme")||a,[m,f]=(0,l.useState)({}),v=null===r.THEMES||void 0===r.THEMES?void 0:r.THEMES.map(e=>({value:e,text:e}));function j(){s(!e)}return(0,l.useEffect)(()=>{f(Object.assign({},(0,d.m2)()))},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:(0,t.jsx)("div",{style:{writingMode:"vertical-lr"},className:"bg-black text-xs text-white shadow-2xl p-1.5 rounded-l-xl cursor-pointer ".concat(e?"right-96":"right-0"," fixed bottom-72 duration-200 z-50"),onClick:j,children:e?(0,t.jsxs)("i",{className:"fas fa-times",children:["\xa0",u.COMMON.DEBUG_CLOSE]}):(0,t.jsxs)("i",{className:"fas fa-tools",children:["\xa0",u.COMMON.DEBUG_OPEN]})})}),(0,t.jsxs)("div",{className:" ".concat(e?"shadow-card w-96 right-0 ":"-right-96 invisible w-0"," overflow-y-scroll h-full p-5 bg-white fixed bottom-0 z-50 duration-200"),children:[(0,t.jsxs)("div",{className:"flex justify-between space-x-1 my-5",children:[(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)(n,{label:u.COMMON.THEME_SWITCH,value:p,options:v,onChange:function(e){let s={...x.query,theme:e};x.push({pathname:x.pathname,query:s})}}),(0,t.jsx)("div",{className:"p-2 cursor-pointer",onClick:function(){h()},children:(0,t.jsx)("i",{className:"fas fa-sync"})})]}),(0,t.jsx)("div",{className:"p-2",children:(0,t.jsx)("i",{className:"fas fa-times",onClick:j})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"font-bold w-18 border-b my-2",children:"站点配置[blog.config.js]"}),(0,t.jsx)("div",{className:"text-xs",children:m&&Object.keys(m).map(e=>(0,t.jsxs)("div",{className:"justify-between flex py-1",children:[(0,t.jsx)("span",{className:"bg-blue-500 p-0.5 rounded text-white mr-2",children:e}),(0,t.jsx)("span",{className:"whitespace-nowrap",children:function(e){switch(e){case"true":return(0,t.jsx)("span",{className:"text-green-500",children:"true"});case"false":return(0,t.jsx)("span",{className:"text-red-500",children:"false"});case"":return"-"}return e}(m[e]+"")})]},e))})]})]})]})}}}]);