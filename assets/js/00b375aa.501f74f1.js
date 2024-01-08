"use strict";(self.webpackChunkxdc_subnet_docs=self.webpackChunkxdc_subnet_docs||[]).push([[475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Subnet Deployment Generator Changelog",sidebar_position:6},l="Subnet Deployment Generator Changelog",i={unversionedId:"deployment/subnet_deployment_generator_changelog",id:"deployment/subnet_deployment_generator_changelog",title:"Subnet Deployment Generator Changelog",description:"v0.2.1 - 2024/01/09",source:"@site/docs/deployment/6_subnet_deployment_generator_changelog.md",sourceDirName:"deployment",slug:"/deployment/subnet_deployment_generator_changelog",permalink:"/xdc-subnet-docs/deployment/subnet_deployment_generator_changelog",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Subnet Deployment Generator Changelog",sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"5. Upgrading the Subnet",permalink:"/xdc-subnet-docs/deployment/upgrading_the_subnet"},next:{title:"Subnet Deployment Generator Changelog",permalink:"/xdc-subnet-docs/deployment/subnet_deployment_generator_changelog"}},u={},p=[{value:"v0.2.1 - 2024/01/09",id:"v021---20240109",level:3},{value:"v0.1.6",id:"v016",level:3},{value:"v0.1.5",id:"v015",level:3},{value:"v0.1.4",id:"v014",level:3}],s={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"subnet-deployment-generator-changelog"},"Subnet Deployment Generator Changelog"),(0,o.kt)("h3",{id:"v021---20240109"},"v0.2.1 - 2024/01/09"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"New generation style, pulls script from github to run multiple docker images instead of generating from single image."),(0,o.kt)("li",{parentName:"ul"},"New Checkpoint Smart Contract (CSC) deployment image"),(0,o.kt)("li",{parentName:"ul"},"Supports upgradable CSC"),(0,o.kt)("li",{parentName:"ul"},"Bump components versions"),(0,o.kt)("li",{parentName:"ul"},"Fix bugs"),(0,o.kt)("li",{parentName:"ul"},"Code refactor, optimization")),(0,o.kt)("h3",{id:"v016"},"v0.1.6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bump relayer version to support gas fee changes")),(0,o.kt)("h3",{id:"v015"},"v0.1.5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added OS=mac option in 'docker.env'. This option is intended for single machine testing environment only.")),(0,o.kt)("h3",{id:"v014"},"v0.1.4"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added custom keys functionality\n'docker.env' now accepts GRANDMASTER_PK and SUBNETS_PK. Where SUBNETS_PK can have multiple keys separated by a comma ','. Number of subnet keys must equal NUM_SUBNET. Keys are randomized if not provided."),(0,o.kt)("li",{parentName:"ul"},"Added RELAYER_MODE in 'docker.env', CSC deployment will select from 'full' or 'lite' smart contract, default 'full'."),(0,o.kt)("li",{parentName:"ul"},"Automate CHECKPOINT_CONTRACT copy-paste step (manual action no longer required)."),(0,o.kt)("li",{parentName:"ul"},"PARENTCHAIN_WALLET is no longer required in 'docker.env', the address will be derived from PARENTCHAIN_WALLET_PK. "),(0,o.kt)("li",{parentName:"ul"},"Disabled parentchain observer in docker-compose.yml, unused for now (due to long startup time)."),(0,o.kt)("li",{parentName:"ul"},"Bump default subnet components stable versions")))}d.isMDXComponent=!0}}]);