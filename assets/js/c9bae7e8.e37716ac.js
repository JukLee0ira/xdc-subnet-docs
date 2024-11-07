"use strict";(self.webpackChunkxdc_subnet_docs=self.webpackChunkxdc_subnet_docs||[]).push([[3080],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),p=o,m=f["".concat(l,".").concat(p)]||f[p]||h[p]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Confirmation Checker",sidebar_position:2},i="Confirmation Checker",c={unversionedId:"usage/ui/confirmation_checker",id:"usage/ui/confirmation_checker",title:"Confirmation Checker",description:"After navigating with the left menu bar to the Confirmation Checker of the Subnet, this will be shown.",source:"@site/docs/usage/ui/2_confirmation_checker.md",sourceDirName:"usage/ui",slug:"/usage/ui/confirmation_checker",permalink:"/xdc-subnet-docs/usage/ui/confirmation_checker",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Confirmation Checker",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Homepage",permalink:"/xdc-subnet-docs/usage/ui/homepage"},next:{title:"Subnet Management",permalink:"/xdc-subnet-docs/usage/ui/management"}},l={},s=[],u={toc:s},f="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"confirmation-checker"},"Confirmation Checker"),(0,o.kt)("p",null,"After navigating with the left menu bar to the Confirmation Checker of the Subnet, this will be shown."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirmation Checker 1",src:n(6121).Z,width:"2572",height:"928"})),(0,o.kt)("p",null,"The input box accepts Block height, Block hash, and even TX hash. "),(0,o.kt)("p",null,"After your input, the search engine will traverse the chain and display the info accodingly. Below is an example of Block height search."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirmation Checker 2",src:n(1635).Z,width:"2670",height:"1170"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Confirmation status of the block (or the block that TX belongs to)"),(0,o.kt)("li",{parentName:"ol"},"The block detailed information "),(0,o.kt)("li",{parentName:"ol"},"The Parentchain block where the Subnet block was recorded")),(0,o.kt)("p",null,"Next is another example of a Block hash search."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirmation Checker 3",src:n(2206).Z,width:"2670",height:"1170"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Confirmation status of the block (or the block that TX belongs to)"),(0,o.kt)("li",{parentName:"ol"},"The block detailed information "),(0,o.kt)("li",{parentName:"ol"},"As the Subnet block has not been checkpointed in the Parentchain, the UI is displaying height 0.")))}h.isMDXComponent=!0},6121:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/confirm_1-5c659ab12f88a6aeb80454aabbe1ef24.png"},1635:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/confirm_2-f12458b511ff47da09b3c52585470e28.png"},2206:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/confirm_3-6c5f6b52ef86cf15172b31e0bdd82442.png"}}]);