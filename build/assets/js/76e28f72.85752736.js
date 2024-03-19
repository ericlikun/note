"use strict";(self.webpackChunknote_likun_cc=self.webpackChunknote_likun_cc||[]).push([[6544],{9483:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>t});var i=l(4848),s=l(8453);const d={sidebar_position:51},r="\u672c\u5730\u5bf9\u8bdd\u52a9\u624b",c={id:"ai/local-llms",title:"\u672c\u5730\u5bf9\u8bdd\u52a9\u624b",description:"\u9664\u4e86\u4f7f\u7528\u5728\u7ebf\u7684\u5546\u4e1a\u6a21\u578b\u670d\u52a1\uff0c\u8fd8\u53ef\u4ee5\u5728\u672c\u5730\u642d\u5efa\u57fa\u4e8e LLM \u7684\u5bf9\u8bdd\u52a9\u624b\u3002",source:"@site/docs/ai/local-llms.md",sourceDirName:"ai",slug:"/ai/local-llms",permalink:"/docs/ai/local-llms",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ai/local-llms.md",tags:[],version:"current",sidebarPosition:51,frontMatter:{sidebar_position:51},sidebar:"tutorialSidebar",previous:{title:"\u4eba\u5de5\u667a\u80fd",permalink:"/docs/ai/"},next:{title:"AI \u8d44\u6e90\u5217\u8868",permalink:"/docs/ai/resource"}},o={},t=[{value:"1. LM Studio",id:"1-lm-studio",level:2},{value:"\u95ee\u9898\uff1a\u65e0\u6cd5\u4e0b\u8f7d\u6a21\u578b\u7684\u89e3\u51b3",id:"\u95ee\u9898\u65e0\u6cd5\u4e0b\u8f7d\u6a21\u578b\u7684\u89e3\u51b3",level:3},{value:"\u6a21\u578b\u6027\u80fd\u8981\u6c42",id:"\u6a21\u578b\u6027\u80fd\u8981\u6c42",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:3},{value:"2. Ollama",id:"2-ollama",level:2},{value:"\u6a21\u578b\u53c2\u6570\u8c03\u6574",id:"\u6a21\u578b\u53c2\u6570\u8c03\u6574",level:3}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u672c\u5730\u5bf9\u8bdd\u52a9\u624b",children:"\u672c\u5730\u5bf9\u8bdd\u52a9\u624b"}),"\n",(0,i.jsx)(e.p,{children:"\u9664\u4e86\u4f7f\u7528\u5728\u7ebf\u7684\u5546\u4e1a\u6a21\u578b\u670d\u52a1\uff0c\u8fd8\u53ef\u4ee5\u5728\u672c\u5730\u642d\u5efa\u57fa\u4e8e LLM \u7684\u5bf9\u8bdd\u52a9\u624b\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528\u573a\u666f\uff1a\u9690\u79c1\u3001\u5546\u4e1a\u79d8\u5bc6\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u53ef\u9009\u9879\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://lmstudio.ai/",children:"LM Studio"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://ollama.ai/",children:"Ollama"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\uff082024.02 \u66f4\u65b0\uff09"}),"\n",(0,i.jsx)(e.h2,{id:"1-lm-studio",children:"1. LM Studio"}),"\n",(0,i.jsx)(e.p,{children:"\u76ee\u524d\u652f\u6301\u5e73\u53f0\uff1aApple Silicon, Windows, Linux (beta)"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u8f6f\u4ef6\u5b89\u88c5\uff1a\u5b98\u7f51\u4e0b\u8f7d\u5b89\u88c5\u7a0b\u5e8f\u5b89\u88c5\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u6a21\u578b\u5b89\u88c5\uff1a\u5185\u7f6e\u4e0b\u8f7d\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u95ee\u9898\u65e0\u6cd5\u4e0b\u8f7d\u6a21\u578b\u7684\u89e3\u51b3",children:"\u95ee\u9898\uff1a\u65e0\u6cd5\u4e0b\u8f7d\u6a21\u578b\u7684\u89e3\u51b3"}),"\n",(0,i.jsx)(e.p,{children:"\u590d\u5236\u6a21\u578b\u5730\u5740\uff0c\u79bb\u7ebf\u4e0b\u8f7d\u6a21\u578b\uff0c\u7136\u540e\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u5148\u6307\u5b9a\u4e00\u4e2a\u6a21\u578b\u76ee\u5f55\uff0c\u5047\u8bbe\u4e3a\uff1a"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"D:\\ai-models\\lm-studio\\models\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsx)(e.li,{children:"\u518d\u5728\u5176\u4e2d\u521b\u5efa\u76ee\u5f55\uff0c\u5e76\u628a\u4e0b\u8f7d\u597d\u7684\u6a21\u578b\u6587\u4ef6\u653e\u5230\u8fd9\u4e2a\u76ee\u5f55\u4e2d"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"D:\\ai-models\\lm-studio\\models\\Publisher\\Repository\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsx)(e.li,{children:"\u91cd\u542f LM Studio\uff0c\u5373\u53ef\u8f7d\u5165\u5bf9\u8bdd\u4e86\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u6a21\u578b\u6027\u80fd\u8981\u6c42",children:"\u6a21\u578b\u6027\u80fd\u8981\u6c42"}),"\n",(0,i.jsx)(e.p,{children:"\u6a21\u578b\u6709\u63a8\u8350\u6027\u80fd\u8981\u6c42\uff1aApple Silicon Mac \u53ef\u4ee5\u67e5\u770b RAM\uff0c\u5e26 GPU \u7684 Windows PC \u53ef\u67e5\u770b VRAM\uff0c\u770b\u662f\u5426\u6ee1\u8db3\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4e00\u822c\u6a21\u578b Apple M1 \u53ef\u4ee5\u8fd0\u884c\u5f97\u5f88\u5feb\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u76f4\u63a5\u5bf9\u8bdd\uff1a\u662f\u6700\u5e38\u7528\u6a21\u5f0f\u3002"}),"\n",(0,i.jsx)(e.li,{children:"Web \u65b9\u5f0f\uff1a\u53ef\u901a\u8fc7\u6d4f\u89c8\u5668\u4f7f\u7528\u3002"}),"\n",(0,i.jsx)(e.li,{children:"Web API \u65b9\u5f0f\uff1a\u53ef\u52fe\u9009 CORS \u9009\u9879\uff0cLM Studio \u53ef\u7ed9\u5176\u5b83\u7a0b\u5e8f\u63d0\u4f9b API \u96c6\u6210\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"2-ollama",children:"2. Ollama"}),"\n",(0,i.jsx)(e.p,{children:"\u76ee\u524d\u652f\u6301\u5e73\u53f0\uff1aMac, Windows"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8f6f\u4ef6\u5b89\u88c5\uff1a\u5b98\u7f51\u4e0b\u8f7d\u5b89\u88c5\u7a0b\u5e8f\u5b89\u88c5\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6a21\u578b\u5b89\u88c5\uff1a\u901a\u8fc7\u7ec8\u7aef\u547d\u4ee4\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u8fd0\u884c\u6a21\u578b\uff1a",(0,i.jsx)(e.code,{children:"ollama run <model_name>"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u4e0b\u8f7d\u6a21\u578b\uff1a",(0,i.jsx)(e.code,{children:"ollama pull <model_name>"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u6a21\u578b\u53c2\u6570\u8c03\u6574",children:"\u6a21\u578b\u53c2\u6570\u8c03\u6574"}),"\n",(0,i.jsx)(e.p,{children:"\u901a\u8fc7\u547d\u4ee4\u884c\u8bbe\u7f6e\u53c2\u6570\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},8453:(n,e,l)=>{l.d(e,{R:()=>r,x:()=>c});var i=l(6540);const s={},d=i.createContext(s);function r(n){const e=i.useContext(d);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(d.Provider,{value:e},n.children)}}}]);