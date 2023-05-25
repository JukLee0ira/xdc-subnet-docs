"use strict";(self.webpackChunkxdc_subnet_docs=self.webpackChunkxdc_subnet_docs||[]).push([[238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8533:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_label:"3. Deploy the Relayer",sidebar_position:4},i="Run the Relayer",o={unversionedId:"deployment/relayer",id:"deployment/relayer",title:"Run the Relayer",description:"There are some prerequisite when running relayer",source:"@site/docs/deployment/3_relayer.md",sourceDirName:"deployment",slug:"/deployment/relayer",permalink:"/xdc-subnet-docs/deployment/relayer",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"3. Deploy the Relayer",sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"2. Deploy Parent Chain Smart Contract",permalink:"/xdc-subnet-docs/deployment/deploy_parent_chain_smart_contract"},next:{title:"4. Verify the Entire Deployment",permalink:"/xdc-subnet-docs/deployment/verify"}},s={},p=[{value:"Set Environment variables",id:"set-environment-variables",level:2},{value:"Start the relayer!",id:"start-the-relayer",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"run-the-relayer"},"Run the Relayer"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"There are some prerequisite when running relayer")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Docker: make sure you have the latest docker installed, for more details, refer to: ",(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"https://www.docker.com/")," for the installation guideline")),(0,a.kt)("h2",{id:"set-environment-variables"},"Set Environment variables"),(0,a.kt)("p",null,"Create a .env file containing all the env variables you want to set."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SUBNET_URL")," : This is the URL to your subnet with RPC port specified. e.g ",(0,a.kt)("a",{parentName:"li",href:"http://66.94.121.151:8545"},"http://66.94.121.151:8545")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"PARENTCHAIN_URL")," : This is the XDC parent chain URL with RPC port specified."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SC_ADDRESS")," : This is the smart contract address for this subnet that has been uploaded in the XDC parent chain."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"PARENTCHAIN_WALLET_PK")," : This is the wallet key that will be used for submit subnet data into XDC parent chain. You will need to have credits in it first."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SLACK_WEBHOOK")," : (Optional) If relayer detected forking of your subnet, this is the URL where we will push alerting message to. You are required to set up slack bot and install it in the relevant channel first. For details, see slack doc: ",(0,a.kt)("a",{parentName:"li",href:"https://api.slack.com/messaging/webhooks"},"https://api.slack.com/messaging/webhooks")," \\n\nOnce you are done with the slack setup, find the slack webhook url and put it here. It shall look like ",(0,a.kt)("inlineCode",{parentName:"li"},"https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"PORT")," -> (Optional) Port where the server will be started on. default to 3000 if not set")),(0,a.kt)("h2",{id:"start-the-relayer"},"Start the relayer!"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Pull the image from docker hub by running ",(0,a.kt)("inlineCode",{parentName:"li"},"docker pull xinfinorg/xdc-relayer:latest")),(0,a.kt)("li",{parentName:"ol"},"Run the cli command to start the service: ",(0,a.kt)("inlineCode",{parentName:"li"},"docker run -d --env-file .env xinfinorg/xdc-relayer"))),(0,a.kt)("p",null,"You are all set!"))}d.isMDXComponent=!0}}]);