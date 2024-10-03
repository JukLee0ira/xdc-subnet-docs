"use strict";(self.webpackChunkxdc_subnet_docs=self.webpackChunkxdc_subnet_docs||[]).push([[586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"1. Launch a Subnet",sidebar_position:1},i="Launch a Subnet",l={unversionedId:"deployment/launch_subnet",id:"deployment/launch_subnet",title:"Launch a Subnet",description:"Overview",source:"@site/docs/deployment/1_launch_subnet.md",sourceDirName:"deployment",slug:"/deployment/launch_subnet",permalink:"/xdc-subnet-docs/deployment/launch_subnet",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"1. Launch a Subnet",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Deployment Guide",permalink:"/xdc-subnet-docs/category/deployment-guide"},next:{title:"2. Debug Guide (How to know if my subnet is running?)",permalink:"/xdc-subnet-docs/deployment/debug_guide"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Steps",id:"steps",level:2},{value:"Removing Subnet",id:"removing-subnet",level:3}],d={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"launch-a-subnet"},"Launch a Subnet"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"  For the convenience of deploying Subnet, we have provided the Subnet Deployment Generator. The Subnet Deployment Generator is configuration generator for all components of subnet deployment. It generates all the necessary files and configs from a simple initial docker.env file. The required parameters are "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. How many machines will you use to deploy subnet?\n2. How many subnet nodes will you deploy in total?\n3. IP address of the main machine\n4. Parentchain wallet with funds\n")),(0,a.kt)("p",null,"  In this setup the main machine (machine1) will host all the subnet services(relayer, stats, frontend) while the subnet miner nodes will be spread out among all machines."),(0,a.kt)("p",null,"  The IP address of the main machine is needed for subnet connectivity, this is the IP that is known to all other machines, could be private or public (preferrably private)"),(0,a.kt)("p",null,"  Once generated, the commands to startup the subnet is also provided as a generated ",(0,a.kt)("inlineCode",{parentName:"p"},"commands.txt")," file."),(0,a.kt)("p",null,"  The deployment is docker based, the main deployment file is ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.env")," is the injection point to all configs. Then, ENVs for the services and subnet nodes are in ",(0,a.kt)("inlineCode",{parentName:"p"},"*.env")," files. Other files include ",(0,a.kt)("inlineCode",{parentName:"p"},"genesis.json")," file to initialize subnet chain, ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment.json")," to deploy the checkpoint smartcontract, and ",(0,a.kt)("inlineCode",{parentName:"p"},"keys.json")," the keypairs for subnet nodes + grandmaster node. Again, these files will be generated by the Subnet Deployment Generator (SDG)."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"OS: Linux. Only Linux is supported for full deployment. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"OS: Mac is only supported for single machine testing environment. Specify MacOS with 'OS=mac' in 'docker.env' file. Please also refer ",(0,a.kt)("a",{parentName:"p",href:"/xdc-subnet-docs/deployment/debug_guide#common-issues"},"common issues"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"docker, docker compose V2. For manual installation of docker compose V2 please refer to: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/linux/"},"https://docs.docker.com/compose/install/linux/")))),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"docker.env")," file with parameters similar to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/XinFinOrg/XinFin-Node/blob/master/subnet/deployment-generator/script/docker.env.example"},(0,a.kt)("inlineCode",{parentName:"a"},"docker.env.example")),". Detailed parameters explanation ",(0,a.kt)("a",{parentName:"p",href:"/xdc-subnet-docs/deployment/configs_explanation"},"here"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Pull the ",(0,a.kt)("inlineCode",{parentName:"p"},"generator.sh")," script from the generator Github repo"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"curl -O https://raw.githubusercontent.com/XinFinOrg/XinFin-Node/master/subnet/deployment-generator/script/generate.sh\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Generate configurations, this will create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"generated")," directory"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"chmod +x generate.sh\n./generate.sh\ncd generated\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"follow the generated instructions in ",(0,a.kt)("inlineCode",{parentName:"p"},"commands.txt")," to start Subnet Nodes and ",(0,a.kt)("a",{parentName:"p",href:"/xdc-subnet-docs/deployment/debug_guide#subnet-nodes"},"make sure they are mining"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"follow the generated instructions in ",(0,a.kt)("inlineCode",{parentName:"p"},"commands.txt")," to deploy the upgradable Checkpoint Smart Contract(CSC). If CSC deployment was successful, you should see CSC addresses in ",(0,a.kt)("inlineCode",{parentName:"p"},"common.env"),", the added ENVs include ",(0,a.kt)("inlineCode",{parentName:"p"},"PROXY_GATEWAY"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"FULL_CSC"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"LITE_CSC"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CHECKPOINT_CONTRACT"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"follow the generated instructions in ",(0,a.kt)("inlineCode",{parentName:"p"},"commands.txt")," to start the Subnet Services (relayer, stats-server, frontend)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check out the Subnet UI at ",(0,a.kt)("inlineCode",{parentName:"p"},"<MAIN_IP>:5555")))),(0,a.kt)("h3",{id:"removing-subnet"},"Removing Subnet"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change the commands in ",(0,a.kt)("inlineCode",{parentName:"p"},"commands.txt")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose ... down")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"docker compose --env-file docker-compose.env --profile <profile_name> down \n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Repeat 1. for every docker ",(0,a.kt)("inlineCode",{parentName:"p"},"--profile")," that was started. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Inside ",(0,a.kt)("inlineCode",{parentName:"p"},"generated")," directory, remove ",(0,a.kt)("inlineCode",{parentName:"p"},"bootnodes"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"stats-service"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"xdcchain*")," directories"))))}m.isMDXComponent=!0}}]);