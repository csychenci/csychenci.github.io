(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[141],{KR56:function(e,n,l){"use strict";l.r(n);var r=l("q1tI"),t=l.n(r),a=l("dEAq"),o=(l("0H/f"),l("N0lm"),l("DgDr"),l("cGlH"),l("ekZX")),c=l("Bjia"),m=(l("tVxl"),l("1pSt"),t.a.memo((e=>{var n=e.demos,l=n["promise-demo"].component;return t.a.createElement(t.a.Fragment,null,t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h2",{id:"promise"},t.a.createElement(a["AnchorLink"],{to:"#promise","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"Promise"),t.a.createElement("hr",null),t.a.createElement("ol",null,t.a.createElement("li",null,"\u9762\u8bd5\u9898")),t.a.createElement("ul",null,t.a.createElement("li",null,"\u4ee5\u4e0b\u4ee3\u7801\u5728\u4efb\u4f55\u60c5\u51b5\u4e0b\u7684\u884c\u4e3a\u76f8\u540c\u5417")),t.a.createElement(c["a"],{code:"let p1 = new Promise((resolve, reject) => {\n  // ...\n});\n\np1.then((res) => {\n  // ..\n}).catch((reson) => {\n  // ..\n});\n\np1.then(\n  (res) => {},\n  (reason) => {},\n);",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u7ed3\u679c\u662f\u4e00\u6837\u7684\u3002\u4e0d\u8bba\u662f\u5728 Promise \u6784\u9020\u51fd\u6570\u4e2d resolve \u6216 reject\u3001\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\uff0c\u90fd\u80fd\u88ab\u6b63\u786e\u5904\u7406"))),t.a.createElement(o["default"],n["promise-demo"].previewerProps,t.a.createElement(l,null)),t.a.createElement("div",{className:"markdown"},t.a.createElement("ul",null,t.a.createElement("li",null,"\u4f46\u662f\uff0c\u5982\u679c\u5728 then \u7684 onFulfillCallback \u4e2d\u51fa\u73b0\u4e86\u4e00\u4e2a\u9519\u8bef\uff0c\u5b83\u5c31\u4f1a\u5448\u73b0\u4e0d\u4e00\u6837\u7684\u6548\u679c\u3002\u7b2c\u4e8c\u79cd\u662f\u65e0\u6cd5\u6355\u83b7\u540c\u4e00\u7ea7\u7684\u56de\u8c03\u51fd\u6570\u4e2d\u51fa\u73b0\u7684\u9519\u8bef\u7684")),t.a.createElement(c["a"],{code:"let p1 = new Promise((resolve, reject) => {\n  if(type === 'resolve') resolve('fulfilled')\n  else if(type === 'reject') reject('rejected')\n  else {\n    throw new Error('error from throw')\n  }\n});\n\np1.then(val => {\n  throw new Error(Number('0 / 0'))\n}).catch(err => {\n  /** \n   * \u8fd9\u91cc\u80fd\u591f\u6355\u83b7\u524d\u9762\u7684 then \u56de\u8c03\u4e2d\u51fa\u73b0\u7684\u9519\u8bef\n  */\n  console.log(err)\n})\n\np1.then((val) => {\n  throw new Error(Number('0 / 0'))\n},(err) => {\n  /** \n   * \u8fd9\u91cc\u65e0\u6cd5\u6355\u83b7\u524d\u9762\u7684 then \u56de\u8c03\u4e2d\u51fa\u73b0\u7684\u9519\u8bef\n  */\n  console.log(err)\n})",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u4ee5\u4e0b\u4e24\u4e2a ",t.a.createElement("code",null,"promise")," \u5bf9\u8c61\u76f8\u7b49\u5417?")),t.a.createElement(c["a"],{code:"let p1;\nasync function testAsync() {\n  p1 = Promise.resolve(2);\n  return p1;\n}\nlet p2 = testAsync();\np1 === p2;",lang:"js"}))))})));n["default"]=e=>{var n=t.a.useContext(a["context"]),l=n.demos;return t.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&a["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),t.a.createElement(m,{demos:l})}}}]);