(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[137],{sxx5:function(e,l,t){"use strict";t.r(l);var a=t("q1tI"),n=t.n(a),c=t("dEAq"),r=(t("0H/f"),t("N0lm"),t("DgDr"),t("cGlH"),t("ekZX"),t("Bjia"),t("tVxl"),t("1pSt"),n.a.memo((e=>{e.demos;return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("hr",null),n.a.createElement("h1",{id:"nodejs"},n.a.createElement(c["AnchorLink"],{to:"#nodejs","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"NodeJs"),n.a.createElement("hr",null),n.a.createElement("h2",{id:"\u4e8b\u4ef6\u5faa\u73af"},n.a.createElement(c["AnchorLink"],{to:"#\u4e8b\u4ef6\u5faa\u73af","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4e8b\u4ef6\u5faa\u73af"),n.a.createElement("hr",null),n.a.createElement("ol",null,n.a.createElement("li",null,"\u4e8b\u4ef6\u5faa\u73af\u7684\u539f\u7406")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u4e0e\u6d4f\u89c8\u5668\u7684\u539f\u7406\u4e0d\u540c\uff0c",n.a.createElement("em",null,"NodeJs 10+")," \u7248\u672c\u540e\u867d\u7136\u5728\u8fd0\u884c\u7ed3\u679c\u4e0a\u4e0e\u6d4f\u89c8\u5668\u4e00\u81f4\uff0c\u4f46\u4e24\u8005\u5728\u539f\u7406\u4e0a\u4e00\u4e2a\u662f\u57fa\u4e8e\u6d4f\u89c8\u5668\uff0c\u53e6\u4e00\u4e2a\u662f\u57fa\u4e8e ",n.a.createElement("em",null,"libev")," \u5e93\u3002\u6d4f\u89c8\u5668\u7684\u6838\u5fc3\u662f ",n.a.createElement("strong",null,"\u5b8f\u4efb\u52a1")," \u548c ",n.a.createElement("strong",null,"\u5fae\u4efb\u52a1"),"\uff0c\u800c\u5728 ",n.a.createElement("em",null,"NodeJs")," \u4e2d\u8fd8\u6709\u9636\u6bb5\u6027\u4efb\u52a1\u6267\u884c\u9636\u6bb5")),n.a.createElement("ol",{start:2},n.a.createElement("li",null,"\u5faa\u73af\u9636\u6bb5")),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("em",null,"timers"),"\uff1a\u672c\u9636\u6bb5\u6267\u884c\u5df2\u88ab ",n.a.createElement("code",null,"setTimeout")," \u548c ",n.a.createElement("code",null,"setInterval")," \u8c03\u5ea6\u7684\u56de\u8c03\u51fd\u6570\uff0c\u7531\u8fd9\u4e24\u4e2a\u51fd\u6570\u542f\u52a8\u7684\u51fd\u8c03\u51fd\u6570"),n.a.createElement("li",null,n.a.createElement("em",null,"pending callbacks"),"\uff1a\u672c\u9636\u6bb5\u6267\u884c\u67d0\u4e9b\u7cfb\u7edf\u64cd\u4f5c\u7684\u56de\u8c03\u51fd\u6570"),n.a.createElement("li",null,n.a.createElement("em",null,"idle\u3001prepare"),"\uff1a\u4ec5\u7cfb\u7edf\u5185\u90e8\u4f7f\u7528\uff0c\u5e76\u4e0d\u7531 ",n.a.createElement("em",null,"NodeJs")," \u7a0b\u5e8f\u6240\u8c03\u7528\u7684\u9636\u6bb5"),n.a.createElement("li",null,n.a.createElement("em",null,"poll"),"\uff1a\u6838\u5fc3\u5173\u6ce8\u5c42\u3002\u68c0\u7d22\u65b0\u7684 I/O \u65f6\u95f4\uff0c\u6267\u884c\u4e0e I/O \u76f8\u5173\u7684\u56de\u8c03\u51fd\u6570\uff0c\u5176\u4ed6\u60c5\u51b5 ",n.a.createElement("code",null,"Nodejs")," \u5c06\u5728\u9002\u5f53\u65f6\u5728\u6b64\u963b\u585e"),n.a.createElement("li",null,n.a.createElement("em",null,"check"),"\uff1a",n.a.createElement("code",null,"setImmediate")," \u56de\u8c03\u51fd\u6570\u5728\u8fd9\u91cc\u6267\u884c\u3002",n.a.createElement("code",null,"setImmediate")," \u5e76\u4e0d\u662f\u7acb\u9a6c\u6267\u884c\u800c\u662f\u5f53\u4e8b\u4ef6\u5faa\u73af ",n.a.createElement("code",null,"poll")," \u4e2d\u6ca1\u6709\u65b0\u7684\u4e8b\u4ef6\u5904\u7406\u65f6\u5c31\u6267\u884c\u6b64\u90e8\u5206"),n.a.createElement("li",null,n.a.createElement("em",null,"close callbacks"),"\uff1a\u6267\u884c\u4e00\u4e9b\u5173\u95ed(close)\u7684\u56de\u8c03\u51fd\u6570")),n.a.createElement("ol",{start:3},n.a.createElement("li",null,"\u8fd0\u884c\u8d77\u70b9")),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("code",null,"NodeJs")," \u8fdb\u7a0b\u542f\u52a8\u540e\uff0c\u5c31\u53d1\u8d77\u4e86\u4e00\u4e2a\u65b0\u7684\u4e8b\u4ef6\u5faa\u73af\uff0c\u4e5f\u5c31\u662f\u4e8b\u4ef6\u5faa\u73af\u7684\u8d77\u70b9\u3002\u5171\u6709\u56db\u4e2a\u53d1\u8d77\u70b9\uff1a",n.a.createElement("code",null,"NodeJs")," \u542f\u52a8\u540e\u3001",n.a.createElement("code",null,"setTimeout")," \u56de\u8c03\u51fd\u6570\u3001",n.a.createElement("code",null,"setInterval")," \u56de\u8c03\u51fd\u6570\u3001\u4e5f\u53ef\u80fd\u662f\u4e00\u6b21 I/O \u7684\u56de\u8c03\u51fd\u6570"),n.a.createElement("li",null,"\u5148\u6267\u884c\u56de\u8c03\u51fd\u6570\uff0c\u5728\u6267\u884c ",n.a.createElement("code",null,"setImmediate"))),n.a.createElement("ol",{start:4},n.a.createElement("li",null,"\u5fae\u4efb\u52a1")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u5305\u542b\u4e24\u79cd\uff1a",n.a.createElement("code",null,"process.nextTick"),"\u3001",n.a.createElement("code",null,"Promise"),"\u3002\u5728\u4e8b\u4ef6\u5faa\u73af\u4e2d\u4f18\u5148\u7ea7\u662f\u6700\u9ad8\u7684\u3002\u540c\u4e00\u4e8b\u4ef6\u5faa\u73af\u4e2d\u6709\u5176\u4ed6\u5fae\u4efb\u52a1\u5b58\u5728\u65f6\uff0c\u4f18\u5148\u6267\u884c\u5fae\u4efb\u52a1\u961f\u5217\uff0c\u4e14 ",n.a.createElement("code",null,"process.nextTick")," \u4f18\u5148\u7ea7\u9ad8\u4e8e ",n.a.createElement("code",null,"Promise"))),n.a.createElement("ol",{start:5},n.a.createElement("li",null,"\u5b8f\u4efb\u52a1")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u5305\u542b\u56db\u79cd\uff1a",n.a.createElement("code",null,"setTimeout"),"\u3001",n.a.createElement("code",null,"setInterval"),"\u3001",n.a.createElement("code",null,"setImmediate"),"\u3001",n.a.createElement("code",null,"I/O"),"\u3002\u6ca1\u6709\u5148\u540e\u987a\u5e8f\uff0c\u5b8f\u4efb\u52a1\u6267\u884c\u5728\u5fae\u4efb\u52a1\u540e\u3002\u540c\u4e2a\u4e8b\u4ef6\u5faa\u73af\u5468\u671f\u5185\uff0c\u5fae\u4efb\u52a1\u548c\u5b8f\u4efb\u52a1\u90fd\u5b58\u5728\u7684\u60c5\u51b5\u4e0b\uff0c\u4f18\u5148\u6e05\u7a7a\u5fae\u4efb\u52a1\u961f\u5217\uff0c\u518d\u6267\u884c\u5b8f\u4efb\u52a1\u961f\u5217"),n.a.createElement("li",null,n.a.createElement("code",null,"setTimeout")," \u65f6\u95f4\u53c2\u6570\u4e0d\u8bbe\u7f6e\u6216\u8bbe\u7f6e\u4e3a 0 \u65f6\uff0c\u4f1a\u6709\u4e00\u4e2a\u9ed8\u8ba4\u6700\u5c0f\u65f6\u957f 1ms")),n.a.createElement("ol",{start:6},n.a.createElement("li",null,"\u4e3b\u7ebf\u7a0b")),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("code",null,"NodeJs")," \u4e2d\u7684\u4e3b\u7ebf\u7a0b\u7684\u6267\u884c\u9636\u6bb5\u4e3b\u8981\u5904\u7406\u4e09\u4e2a\u903b\u8f91\uff1a\u6267\u884c ",n.a.createElement("strong",null,"\u540c\u6b65\u4ee3\u7801"),"\u3001\u5c06\u5f02\u6b65\u4ee3\u7801\u63d2\u5165\u5230 ",n.a.createElement("strong",null,"\u5fae\u4efb\u52a1\u961f\u5217")," \u6216 ",n.a.createElement("strong",null,"\u5b8f\u4efb\u52a1\u961f\u5217")," \u4e2d\u3001\u6267\u884c\u5fae\u4efb\u52a1\u548c\u5b8f\u4efb\u52a1\u7684\u4ea7\u751f\u7684 ",n.a.createElement("strong",null,"\u56de\u8c03\u51fd\u6570")),n.a.createElement("li",null,"\u4e3b\u7ebf\u7a0b\u53ef\u80fd\u4f1a\u56e0\u4e3a\u56de\u8c03\u51fd\u6570\u6267\u884c\u65f6\u95f4\u8fc7\u957f\u800c\u963b\u585e")),n.a.createElement("ol",{start:7},n.a.createElement("li",null,"\u5355\u7ebf\u7a0b\u4e0e\u591a\u7ebf\u7a0b")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u4e3b\u7ebf\u7a0b\u662f\u5355\u7ebf\u7a0b\u6267\u884c\u7684\uff0c\u4e3b\u8981\u8fd8\u662f\u4e3b\u7ebf\u7a0b\u6765\u5faa\u73af\u904d\u5386\u5f53\u524d\u4e8b\u4ef6\uff0c\u4f46 ",n.a.createElement("code",null,"NodeJs")," \u5b58\u5728\u591a\u7ebf\u7a0b\u6267\u884c\uff0c\u5305\u62ec ",n.a.createElement("code",null,"setTimeout")," \u548c ",n.a.createElement("code",null,"I/O")," \u4e8b\u4ef6\uff0c\u8fd8\u6709\u5176\u4ed6\u7ebf\u7a0b\uff0c\u5305\u62ec\u5783\u573e\u56de\u6536\u3001\u5185\u5b58\u4f18\u5316\u7b49")))))})));l["default"]=e=>{var l=n.a.useContext(c["context"]),t=l.demos;return n.a.useEffect((()=>{var l;null!==e&&void 0!==e&&null!==(l=e.location)&&void 0!==l&&l.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(r,{demos:t})}}}]);