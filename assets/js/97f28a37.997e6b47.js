"use strict";(self.webpackChunkxdc_subnet_docs=self.webpackChunkxdc_subnet_docs||[]).push([[4098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),p=r,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},i="Design",s={unversionedId:"components/subnet/design",id:"components/subnet/design",title:"Design",description:"XDC subnet is a blockchain network tailored for private and consortium use cases. It is powered by XDC2.0, which is the core engine of XDC network and enables state-of-the-art security against Byzantine attacks with forensics, fast transaction confirmation, and low energy consumption. It is also designed to enable secure checkpointing to XDC mainnet, so that it can harness the security, finality, and accountability of mainnet.",source:"@site/docs/components/subnet/design.md",sourceDirName:"components/subnet",slug:"/components/subnet/design",permalink:"/xdc-subnet-docs/components/subnet/design",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Subnet Chain",permalink:"/xdc-subnet-docs/category/subnet-chain"},next:{title:"API",permalink:"/xdc-subnet-docs/components/subnet/api"}},c={},l=[{value:"XDC2.0 Protocol",id:"xdc20-protocol",level:2},{value:"Your Own Blockchain Network",id:"your-own-blockchain-network",level:2},{value:"Integrating with XDC mainnet",id:"integrating-with-xdc-mainnet",level:2}],u={toc:l},h="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"design"},"Design"),(0,r.kt)("p",null,"XDC subnet is a blockchain network tailored for private and consortium use cases. It is powered by XDC2.0, which is the core engine of XDC network and enables state-of-the-art security against Byzantine attacks with forensics, fast transaction confirmation, and low energy consumption. It is also designed to enable secure checkpointing to XDC mainnet, so that it can harness the security, finality, and accountability of mainnet."),(0,r.kt)("h2",{id:"xdc20-protocol"},"XDC2.0 Protocol"),(0,r.kt)("p",null,"As the core engine of both XDC mainnet and subnet, XDC2.0 maintains the consistency of the blockchain with strong security and performance guarantees. The Delegated Proof-of-Stake subprotocol elects a committee of masternodes. The masternodes run the state-of-the-art HotStuff consensus subprotocol to settle block generation and verification and confirm transactions. Besides, XDC2.0 protocol enables its unique feature, namely forensic monitoring. When the adversary corrupts more than 1/3 masternodes and violates safety, forensic monitoring can detect those actions and report irrefutable evidence of the culprits."),(0,r.kt)("p",null,"The distinction between XDC2.0 for subnet and mainnet is that for subnet the masternodes are permissioned whereas for mainnet they are permissionless. "),(0,r.kt)("h2",{id:"your-own-blockchain-network"},"Your Own Blockchain Network"),(0,r.kt)("p",null,"XDC subnet is completely owned by you. You, the owner of the subnet, are capable of controlling several aspects of the subnet."),(0,r.kt)("p",null,"First, the owner regulates the master node list. More specifically, the join/retire of mater nodes is done by smart contract calls that only the owner has access to. Also, underperforming or misbehaving masternodes could be expelled by the owner. This is in contrast with XDC mainnet, where masternodes join or leave willingly as long as they follow the rule enforced by the protocol."),(0,r.kt)("p",null,"Second, the blockchain genesis can be configured by the owner. The owner is able to distribute initial tokens and create accounts, as well as deploy system-level smart contracts on the blockchain."),(0,r.kt)("p",null,"Last, the owner can customize blockchain parameters, such as epoch length, max masternode number, the quorum certificate threshold, the reward per epoch, etc."),(0,r.kt)("h2",{id:"integrating-with-xdc-mainnet"},"Integrating with XDC mainnet"),(0,r.kt)("p",null,"Integrating with XDC mainnet will enable subnet to harness the security, finality, and accountability of XDC mainnet. This requires the subnet owner to deploy a smart contract (XDC will provide) to XDC mainnet and report block headers and masternode changes to the smart contract."),(0,r.kt)("p",null,"As long as the mainnet is secure, the block header information of the subnet is securely stored on the mainnet. Users can also query the mainnet for finality to enhance the confidence that the subnet transaction is indeed finalized. The subnet can also report the culprits to the forensic server of XDC mainnet when its forensic monitor module detects safety violations. When the culprit report is validated, necessary measurements should be taken by the owner to reestablish the security of the subnet."),(0,r.kt)("p",null,"It is worth noting that the subnet can be deployed as a standalone, independent blockchain network without integrating with XDC mainnet. The choice is up to the owner whether to harness the advantages of XDC mainnet."))}d.isMDXComponent=!0}}]);