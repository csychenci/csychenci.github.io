(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[98],{Jqlp:function(e,n,r){"use strict";r.r(n);var t=r("q1tI"),a=r.n(t),l=r("dEAq"),o=(r("0H/f"),r("N0lm"),r("DgDr"),r("cGlH"),r("ekZX"),r("Bjia")),c=(r("tVxl"),r("1pSt"),a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386"},a.a.createElement(l["AnchorLink"],{to:"#\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386"),a.a.createElement("hr",null),a.a.createElement("ol",null,a.a.createElement("li",null,"\u9898\u76ee")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u7ed9\u4f60\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9 root \uff0c\u8fd4\u56de\u5b83\u8282\u70b9\u503c\u7684 \u524d\u5e8f \u904d\u5386\u3002")),a.a.createElement(o["a"],{code:"\u8f93\u5165\uff1aroot = [1,null,2,3]\n\u8f93\u51fa\uff1a[1,2,3]",lang:"md"}),a.a.createElement(o["a"],{code:"\u8f93\u5165\uff1aroot = []\n\u8f93\u51fa\uff1a[]",lang:"md"}),a.a.createElement(o["a"],{code:"\u8f93\u5165\uff1aroot = [1]\n\u8f93\u51fa\uff1a[1]",lang:"md"}),a.a.createElement(o["a"],{code:"\u8f93\u5165\uff1aroot = [1,2]\n\u8f93\u51fa\uff1a[1,2]",lang:"md"}),a.a.createElement(o["a"],{code:"\u8f93\u5165\uff1aroot = [1,null,2]\n\u8f93\u51fa\uff1a[1,2]",lang:"md"}),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"\u5206\u6790")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u524d\u5e8f\u904d\u5386\u662f\u5148\u8bbf\u95ee\u6839\u7ed3\u70b9\uff0c\u5728\u524d\u5e8f\u904d\u5386\u5de6\u5b50\u6811\uff0c\u5728\u524d\u5e8f\u904d\u5386\u53f3\u5b50\u6811(\u9700\u8981\u6ce8\u610f\u8f93\u51fa\u987a\u5e8f\uff0c\u8bbf\u95ee\u5e76\u4e0d\u4ee3\u8868\u8f93\u51fa)\u3002\u8fd9\u5c31\u610f\u5473\u7740\uff0c\u6bcf\u5f53\u7ecf\u8fc7\u4e00\u4e2a\u5b50\u6811\u7684\u6839\u7ed3\u70b9\u65f6\uff0c\u5c31\u9a6c\u4e0a\u8bbf\u95ee\u5e76\u8f93\u51fa\u5b83\u7684\u6839\u7ed3\u70b9")),a.a.createElement(o["a"],{code:"// \u9012\u5f52\u7248\u672c\nvar preorderTraversal = function(root,res) {\n    if(!root) return [];\n    if(!res) res = [];\n\n    res.push(root.val);\n    preorderTraversal(root.left,res);\n    preorderTraversal(root.right,res);\n    return res\n};",lang:"js"}),a.a.createElement(o["a"],{code:"var preorderTraversal = function(root) {\n    let stack = [],res = [];\n    while(root !== null || stack.length) {\n        while(root !== null) {\n            res.push(root.val);\n            stack.push(root);\n            root = root.left;\n        }\n        root = stack.pop();\n        root = root.right;\n    }\n    return res\n}",lang:"js"})))})));n["default"]=e=>{var n=a.a.useContext(l["context"]),r=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(c,{demos:r})}}}]);