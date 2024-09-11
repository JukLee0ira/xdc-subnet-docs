"use strict";(self.webpackChunkxdc_subnet_docs=self.webpackChunkxdc_subnet_docs||[]).push([[444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"5. FAQ",sidebar_position:5},s="Frequently Asked Questions",l={unversionedId:"deployment/faq",id:"deployment/faq",title:"Frequently Asked Questions",description:"- For testing, should I use devnet or testnet?",source:"@site/docs/deployment/5_faq.md",sourceDirName:"deployment",slug:"/deployment/faq",permalink:"/xdc-subnet-docs/develop/deployment/faq",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"5. FAQ",sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"4. Blockchain Explorer",permalink:"/xdc-subnet-docs/develop/deployment/blockchain_explorer"},next:{title:"Subnet Deployment Generator Changelog",permalink:"/xdc-subnet-docs/develop/deployment/subnet_deployment_generator_changelog"}},i={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For testing, should I use devnet or testnet?"),(0,o.kt)("p",{parentName:"li"},"Testnet, devnet will be less stable due to frequent updates.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"How do I transfer Subnet tokens to other users?"),(0,o.kt)("p",{parentName:"li"},"In XDC-Subnet all initial tokens are assigned to the Grandmaster wallet (check keys.json). You can use any web3 wallet, point it to a Subnet node's RPC and send tokens over to other addresses.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Which files contain sensitive data and private keys?"),(0,o.kt)("p",{parentName:"li"},"common.env, contract_deploy.env, and keys.json. Please make sure these files are kept securely.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This function didn't work/I have encoutered an unexpected bug"),(0,o.kt)("p",{parentName:"li"},"Please report the issue via ",(0,o.kt)("a",{parentName:"p",href:"/xdc-subnet-docs/develop/deployment/troubleshooting#telegram-troubleshooting-support-group"},"Telegram Support Group")," and we will check as soon as possible."),(0,o.kt)("p",{parentName:"li"},"Other channels for suggestions/requests include ",(0,o.kt)("a",{parentName:"p",href:"https://forum.xinfin.org/"},"XDC Forum")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/XinFinOrg/XDC-Subnet/issues"},"GitHub Issues"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"How do I change the Relayer Wallet/Parentchain Wallet?"),(0,o.kt)("p",{parentName:"li"},"You can ",(0,o.kt)("a",{parentName:"p",href:"/xdc-subnet-docs/develop/deployment/configs_explanation#updating-services-configs"},"update services configs")," in common.env to change the Relayer key"))))}d.isMDXComponent=!0}}]);