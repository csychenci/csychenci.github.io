(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[99],{"5WJe":function(e,n,t){e.exports=t.p+"static/Cgp9HWA4kDOANTojAGASkY8p8QQ593.a3186563.gif"},nhCb:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),c=t("dEAq"),s=(t("0H/f"),t("N0lm"),t("DgDr"),t("cGlH"),t("ekZX"),t("Bjia")),r=(t("tVxl"),t("1pSt"),l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u6709\u6548\u7684\u62ec\u53f7"},l.a.createElement(c["AnchorLink"],{to:"#\u6709\u6548\u7684\u62ec\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6709\u6548\u7684\u62ec\u53f7"),l.a.createElement("hr",null),l.a.createElement("ol",null,l.a.createElement("li",null,"\u9898\u76ee")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7ed9\u5b9a\u4e00\u4e2a\u53ea\u5305\u62ec '('\uff0c')'\uff0c'","{","'\uff0c'","}","'\uff0c'['\uff0c']' \u7684\u5b57\u7b26\u4e32 s \uff0c\u5224\u65ad\u5b57\u7b26\u4e32\u662f\u5426\u6709\u6548\u3002"),l.a.createElement("li",null,"\u6709\u6548\u5b57\u7b26\u4e32\u9700\u6ee1\u8db3\uff1a\u5de6\u62ec\u53f7\u5fc5\u987b\u7528\u76f8\u540c\u7c7b\u578b\u7684\u53f3\u62ec\u53f7\u95ed\u5408\u3002\u5de6\u62ec\u53f7\u5fc5\u987b\u4ee5\u6b63\u786e\u7684\u987a\u5e8f\u95ed\u5408")),l.a.createElement(s["a"],{code:'\u8f93\u5165\uff1as = "()"\n\u8f93\u51fa\uff1atrue',lang:"md"}),l.a.createElement(s["a"],{code:'\u8f93\u5165\uff1as = "()[]{}"\n\u8f93\u51fa\uff1atrue',lang:"md"}),l.a.createElement(s["a"],{code:'\u8f93\u5165\uff1as = "(]"\n\u8f93\u51fa\uff1afalse',lang:"md"}),l.a.createElement(s["a"],{code:'\u8f93\u5165\uff1as = "[[)){}"\n\u8f93\u51fa\uff1afalse',lang:"md"}),l.a.createElement(s["a"],{code:'\u8f93\u5165\uff1as = "[[{}()]]"\n\u8f93\u51fa\uff1atrue',lang:"md"}),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"\u5206\u6790")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5206\u6790\u9898\u76ee\u53ef\u77e5\uff0c\u6bcf\u4e2a\u5de6\u62ec\u53f7\u548c\u53f3\u62ec\u53f7\u5fc5\u987b\u914d\u5bf9\uff0c\u624d\u662f\u5408\u6cd5\u7684\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6d88\u9664\u6cd5\u6765\u6d88\u6389\u5408\u6cd5\u7684\u62ec\u53f7\uff0c\u5982\u679c\u6700\u540e\u6240\u6709\u5b57\u7b26\u4e32\u5747\u88ab\u6d88\u9664\uff0c\u90a3\u5c31\u662f\u5408\u6cd5\u5b57\u7b26\u4e32\uff0c\u5176\u4e2d\u5947\u6570\u4f4d\u957f\u5ea6\u7684\u5b57\u7b26\u4e0d\u662f\u6709\u6548\u7684"),l.a.createElement("li",null,"\u5728\u9047\u5230\u5de6\u62ec\u53f7\u65f6\uff0c\u8fdb\u884c\u538b\u6808\u64cd\u4f5c\uff1b\u5f53\u9047\u5230\u53f3\u62ec\u53f7\u65f6\uff0c\u8fdb\u884c\u51fa\u6808\u64cd\u4f5c")),l.a.createElement("p",null,l.a.createElement("img",{src:t("5WJe"),alt:""})),l.a.createElement("ol",{start:3},l.a.createElement("li",null,"\u4ee3\u7801\u7ed3\u6784")),l.a.createElement(s["a"],{code:'/**\n * @param {string} s\n * @return {boolean}\n */\nvar isValid = function (s) {\n  const len = s.length;\n  if (len % 2 === 1) {\n    // \u6c42\u5947\u5076\u6570 \u5947\u6570\u8fd4\u56defalse\n    return false;\n  }\n\n  let i = 0;\n  const pairs = {\n    "(":")",\n    "{":"}",\n    "[":"]"\n  }\n  const stack = [];\n\n  while(i <= len - 1){\n    let ch = s[i++]\n    if(ch === "(" || ch === "[" || ch === "{"){\n      stack.push(pairs[ch])\n    } else {\n      if(stack.length && ch === stack[stack.length - 1]){\n        // \u5982\u679c\u6808\u4e0d\u4e3a\u7a7a\u4e14\u9047\u5230\u4e86\u5339\u914d\u7684\u62ec\u53f7\n        stack.pop()\n      } else {\n        return false\n      }\n    }\n  }\n\n  return !stack.length\n}',lang:"js"}),l.a.createElement(s["a"],{code:"function isMatch(s) {\n  let len = s.length;\n  if (len % 2 !== 0) {\n    return false;\n  }\n  if (len == 0) {\n    return true;\n  }\n  const stack = [];\n  let tag = true;\n  s.split('').map((ch) => {\n    if (ch == '(') {\n      stack.push(')');\n    } else if (ch == '[') {\n      stack.push(']');\n    } else if (ch == '{') {\n      stack.push('}');\n    } else {\n      if (stack.length && stack[stack.length - 1] == ch) {\n        stack.pop();\n      } else {\n        tag = false\n      }\n    }\n  });\n  return !stack.length && tag\n}",lang:"js"})))})));n["default"]=e=>{var n=l.a.useContext(c["context"]),t=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(r,{demos:t})}}}]);