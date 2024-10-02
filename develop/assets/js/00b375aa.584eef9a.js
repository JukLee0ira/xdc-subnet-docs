"use strict";(self.webpackChunkxdc_subnet_docs=self.webpackChunkxdc_subnet_docs||[]).push([[475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,v=s["".concat(u,".").concat(m)]||s[m]||c[m]||l;return n?r.createElement(v,o(o({ref:t},d),{},{components:n})):r.createElement(v,o({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_label:"Subnet Deployment Generator Changelog",sidebar_position:5},o="Subnet Deployment Generator Changelog",i={unversionedId:"deployment/subnet_deployment_generator_changelog",id:"deployment/subnet_deployment_generator_changelog",title:"Subnet Deployment Generator Changelog",description:"v1.0.0 - 2024/10/03",source:"@site/docs/deployment/6_subnet_deployment_generator_changelog.md",sourceDirName:"deployment",slug:"/deployment/subnet_deployment_generator_changelog",permalink:"/xdc-subnet-docs/develop/deployment/subnet_deployment_generator_changelog",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Subnet Deployment Generator Changelog",sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"4. FAQ",permalink:"/xdc-subnet-docs/develop/deployment/faq"},next:{title:"Using the Subnet",permalink:"/xdc-subnet-docs/develop/category/using-the-subnet"}},u={},p=[{value:"v1.0.0 - 2024/10/03",id:"v100---20241003",level:3},{value:"v0.3.2 - 2024/08/15",id:"v032---20240815",level:3},{value:"v0.3.1 - 2024/07/24",id:"v031---20240724",level:3},{value:"v0.2.1 - 2024/01/09",id:"v021---20240109",level:3},{value:"v0.1.6",id:"v016",level:3},{value:"v0.1.5",id:"v015",level:3},{value:"v0.1.4",id:"v014",level:3}],d={toc:p},s="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"subnet-deployment-generator-changelog"},"Subnet Deployment Generator Changelog"),(0,a.kt)("h3",{id:"v100---20241003"},"v1.0.0 - 2024/10/03"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added Configuration Generator UI"),(0,a.kt)("li",{parentName:"ul"},"Added XDC-Zero configuration generation"),(0,a.kt)("li",{parentName:"ul"},"Added Faucet and Faucet Server"),(0,a.kt)("li",{parentName:"ul"},"Added helper scripts"),(0,a.kt)("li",{parentName:"ul"},"Changed default ports of components to prevent clashing",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Stats Server - port 5213"),(0,a.kt)("li",{parentName:"ul"},"Frontend - port 5214"),(0,a.kt)("li",{parentName:"ul"},"Relayer - port 5215"),(0,a.kt)("li",{parentName:"ul"},"Faucet Server - port 5211"),(0,a.kt)("li",{parentName:"ul"},"Generator UI - port 5210"))),(0,a.kt)("li",{parentName:"ul"},"Documentation update",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"added Subnet setup video walkthrough"),(0,a.kt)("li",{parentName:"ul"},"added FAQ section"),(0,a.kt)("li",{parentName:"ul"},"added Contact section"))),(0,a.kt)("li",{parentName:"ul"},"Minor bug fixes")),(0,a.kt)("h3",{id:"v032---20240815"},"v0.3.2 - 2024/08/15"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Changed frontend default due to clashing from 5000 to 5555")),(0,a.kt)("h3",{id:"v031---20240724"},"v0.3.1 - 2024/07/24"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use testnet by default"),(0,a.kt)("li",{parentName:"ul"},"Remove admin api by default"),(0,a.kt)("li",{parentName:"ul"},"Added PUBLIC_IP optional config in deployment-generator"),(0,a.kt)("li",{parentName:"ul"},"Bump component versions")),(0,a.kt)("h3",{id:"v021---20240109"},"v0.2.1 - 2024/01/09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New generation style, pulls script from github to run multiple docker images instead of generating from single image."),(0,a.kt)("li",{parentName:"ul"},"New Checkpoint Smart Contract (CSC) deployment image"),(0,a.kt)("li",{parentName:"ul"},"Supports upgradable CSC"),(0,a.kt)("li",{parentName:"ul"},"Bump components versions"),(0,a.kt)("li",{parentName:"ul"},"Fix bugs"),(0,a.kt)("li",{parentName:"ul"},"Code refactor, optimization")),(0,a.kt)("h3",{id:"v016"},"v0.1.6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bump relayer version to support gas fee changes")),(0,a.kt)("h3",{id:"v015"},"v0.1.5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added OS=mac option in 'docker.env'. This option is intended for single machine testing environment only.")),(0,a.kt)("h3",{id:"v014"},"v0.1.4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added custom keys functionality\n'docker.env' now accepts GRANDMASTER_PK and SUBNETS_PK. Where SUBNETS_PK can have multiple keys separated by a comma ','. Number of subnet keys must equal NUM_SUBNET. Keys are randomized if not provided."),(0,a.kt)("li",{parentName:"ul"},"Added RELAYER_MODE in 'docker.env', CSC deployment will select from 'full' or 'lite' smart contract, default 'full'."),(0,a.kt)("li",{parentName:"ul"},"Automate CHECKPOINT_CONTRACT copy-paste step (manual action no longer required)."),(0,a.kt)("li",{parentName:"ul"},"PARENTCHAIN_WALLET is no longer required in 'docker.env', the address will be derived from PARENTCHAIN_WALLET_PK. "),(0,a.kt)("li",{parentName:"ul"},"Disabled parentchain observer in docker-compose.yml, unused for now (due to long startup time)."),(0,a.kt)("li",{parentName:"ul"},"Bump default subnet components stable versions")))}c.isMDXComponent=!0}}]);