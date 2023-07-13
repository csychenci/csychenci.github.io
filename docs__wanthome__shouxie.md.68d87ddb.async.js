(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[232],{"3Cwa":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("dEAq"),c=(n("0H/f"),n("N0lm"),n("DgDr"),n("cGlH"),n("ekZX"),n("Bjia")),o=(n("tVxl"),n("1pSt"),r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("div",{style:{textAlign:"center",fontWeight:"900"}}," \u624b\u5199\u539f\u578b\u65b9\u6cd5 "),r.a.createElement("hr",null),r.a.createElement("h1",{id:"\u624b\u5199\u539f\u578b\u65b9\u6cd5"},r.a.createElement(l["AnchorLink"],{to:"#\u624b\u5199\u539f\u578b\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u624b\u5199\u539f\u578b\u65b9\u6cd5"),r.a.createElement("hr",null),r.a.createElement("h2",{id:"\u6570\u7ec4"},r.a.createElement(l["AnchorLink"],{to:"#\u6570\u7ec4","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u6570\u7ec4"),r.a.createElement("hr",null),r.a.createElement("ol",null,r.a.createElement("li",null,"Array.prototype.flat")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u8be5\u65b9\u6cd5\u7528\u4e8e\u5b9e\u73b0\u5d4c\u5957\u6570\u7ec4\u7684\u6241\u5e73\u5316")),r.a.createElement(c["a"],{code:"// \u793a\u4f8b\nvar arr = [1, 2, [3, [4, 5]]];\narr.flat(); // [1,2,3,4,5]",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u6700\u7b80\u5355\u7684\u5b9e\u73b0\uff0c\u4f7f\u7528\u9012\u5f52\u5373\u53ef/\u6df1\u62f7\u8d1d\u7684\u601d\u8def")),r.a.createElement(c["a"],{code:"Array.prototype.myFlat = function () {\n  let arr = [];\n  this.forEach((item, index) => {\n    if (Array.isArray(item)) {\n      arr = arr.concat(item.myFlat());\n    } else {\n      arr.push(item);\n    }\n  });\n  return arr;\n};",lang:"js"}),r.a.createElement(c["a"],{code:"Array.prototype.myFlat = function () {\n  return this.toString()\n    .split(',')\n    .map((item) => +item);\n};",lang:"js"}),r.a.createElement("ol",{start:2},r.a.createElement("li",null,"Array.prototype.of")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u53ef\u7528\u4e8e\u66ff\u4ee3 ",r.a.createElement("code",null,"Array/new Array")," \u7531\u4e8e\u53c2\u6570\u4e0d\u540c\u5bfc\u81f4\u7684\u5dee\u5f02\u6027\u884c\u4e3a")),r.a.createElement(c["a"],{code:"Array.prototype.myArrayof = function () {\n  return Array.prototype.slice.call(arguments);\n};",lang:"js"}),r.a.createElement("ol",{start:3},r.a.createElement("li",null,"Object.getOwnPropertyDescriptors")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u8fd4\u56de\u6307\u5b9a\u5bf9\u8c61\u6240\u6709\u81ea\u8eab\u5c5e\u6027\uff08\u975e\u7ee7\u627f\u5c5e\u6027\uff09\u7684\u63cf\u8ff0\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u7684\u5c5e\u6027\u540d\u4e3a\u539f\u59cb\u5bf9\u8c61\u7684\u5c5e\u6027\u540d\uff0c\u8be5\u5bf9\u8c61\u7684\u5c5e\u6027\u503c\u4e3a\u8be5\u5c5e\u6027\u7684\u63cf\u8ff0\u5bf9\u8c61")),r.a.createElement(c["a"],{code:"function myGetOwnPropertyDescriptors(obj) {\n  const res = {};\n  for (let key of Reflect.ownKeys(obj)) {\n    res[key] = Object.getOwnPropertyDescriptor(obj, key);\n  }\n  return res;\n}",lang:"js"}),r.a.createElement("ol",{start:4},r.a.createElement("li",null,"Array.prototype.map")),r.a.createElement(c["a"],{code:"Array.prototype.myMap = function (callback, thisArg) {\n  if (typeof callback !== 'function') {\n    throw new Eroor('callback must be a function');\n  }\n  let arr1 = [];\n  let that = this;\n  let count = 0;\n  let res;\n  let arg = Symbol('\u4e34\u65f6\u5c5e\u6027');\n  thisArg = thisArg ? thisArg : that;\n  for (let key of Reflect.ownKeys(that)) {\n    debugger;\n    if (+key === count) {\n      res = callback.call(thisArg, ...[that[key], key, that]);\n      if (res) {\n        arr1.push(res);\n      } else {\n        arr1.push(that[key]);\n      }\n      count++;\n    } else if (key === 'length') {\n      break;\n    } else {\n      while (count < +key) {\n        arr1.push(arg);\n        delete arr1[count];\n        count++;\n      }\n      res = callback.call(thisArg, ...[that[key], key, that]);\n      if (res) {\n        arr1.push(res);\n      } else {\n        arr1.push(that[key]);\n      }\n    }\n  }\n  return arr1;\n};",lang:"js"})))})));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(o,{demos:n})}}}]);