(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[76],{y9Yr:function(e,t,n){"use strict";n.r(t);var l=n("q1tI"),a=n.n(l),r=n("dEAq"),o=(n("0H/f"),n("N0lm"),n("DgDr"),n("cGlH"),n("ekZX"),n("Bjia")),m=n("tVxl"),c=(n("1pSt"),a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"iterator\u8fed\u4ee3\u5668"},a.a.createElement(r["AnchorLink"],{to:"#iterator\u8fed\u4ee3\u5668","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Iterator/\u8fed\u4ee3\u5668"),a.a.createElement("hr",null),a.a.createElement("ol",null,a.a.createElement("li",null,"Iterator \u662f\u4ec0\u4e48")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5728 js \u4e2d\u5b83\u662f\u4e00\u79cd\u63a5\u53e3\uff0c\u4e3a\u5404\u79cd\u4e0d\u540c\u7684\u6570\u636e\u7ed3\u6784\u63d0\u4f9b\u7edf\u4e00\u7684\u8bbf\u95ee\u673a\u5236\uff0c\u5373 for of\uff0c\u5f53\u4f7f\u7528 for of \u904d\u5386\u6570\u636e\u7ed3\u6784\u65f6\uff0c\u8be5\u5faa\u73af\u4f1a\u81ea\u52a8\u5bfb\u627e Iterator \u63a5\u53e3"),a.a.createElement("li",null,"\u4efb\u4f55\u6570\u636e\u7ed3\u6784\u53ea\u8981\u90e8\u7f72 Iterator \u63a5\u53e3\uff0c\u5c31\u53ef\u4ee5\u5b8c\u6210\u904d\u5386\u64cd\u4f5c\uff08\u4f9d\u6b21\u5904\u7406\u8be5\u6570\u636e\u7ed3\u6784\u7684\u6240\u6709\u6210\u5458\uff09\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u8981\u6210\u4e3a\u53ef\u8fed\u4ee3\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u5fc5\u987b\u5b9e\u73b0 @@iterator \u65b9\u6cd5\uff0c\u8fd9\u610f\u5473\u5b83\u5fc5\u987b\u6709\u4e00\u4e2a\u952e\u4e3a @@iterator \u7684\u5bf9\u8c61\uff0c\u901a\u5e38\u4f7f\u7528 Symbol.iterator \u8bbe\u7f6e\u6216\u8bbf\u95ee\u8be5\u5c5e\u6027")),a.a.createElement(m["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"[Symbol.iterator]"),a.a.createElement("td",null,"\u4e00\u4e2a\u65e0\u53c2\u6570\u7684\u51fd\u6570\uff0c\u5176\u8fd4\u56de\u503c\u4e3a\u4e00\u4e2a\u7b26\u5408\u8fed\u4ee3\u5668\u534f\u8bae\u7684\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u8981\u8fd4\u56de\u4e00\u4e2a\u8fed\u4ee3\u5668\u5bf9\u8c61")))),a.a.createElement("ul",null,a.a.createElement("li",null,"\u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u6307\u9488\u5bf9\u8c61\u3002\u8fd9\u610f\u5473\u7740\u53ef\u8fed\u4ee3\u5bf9\u8c61\u5fc5\u987b\u5b9e\u73b0 Symbol.iterator \u63a5\u53e3\u3002\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\u53ea\u8981\u5177\u6709 Symbol.Iterator \u5c5e\u6027\uff0c\u5c31\u53ef\u8ba4\u4e3a\u662f\u53ef\u8fed\u4ee3\u7684")),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"Iterator \u7684\u4f5c\u7528")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u7ed9\u5404\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u63d0\u4f9b\u4e00\u4e2a\u7edf\u4e00\u7684\u3001\u7b80\u4fbf\u7684\u8bbf\u95ee\u63a5\u53e3\uff0c\u5b83\u4f7f\u5f97\u6570\u636e\u7ed3\u6784\u7684\u6210\u5458\u80fd\u591f\u6309\u67d0\u79cd\u6b21\u5e8f\u6392\u5217\uff0c\u5e76\u4e14\u90e8\u7f72 Itetator \u63a5\u53e3\u7684\u6570\u636e\u7ed3\u6784\u53ef\u4ee5\u4f7f\u7528 es6 \u65b0\u7684\u904d\u5386\u547d\u4ee4 for of")),a.a.createElement(o["a"],{code:"// \u521b\u5efa\u4e00\u4e2a\u6ee1\u8db3\u8fed\u4ee3\u5668\u534f\u8bae\u7684\u5bf9\u8c61\nfunction createIterator(...rest){\n  let i = 0;\n  return {\n    value:rest,\n    next: function () {\n      if(i>=this.value.length) return {done:true,value:undefined}\n      return {done:false,value:this.value[i++]}\n    },\n    [Symbol.iterator]: function () {\n      return this;\n    }\n  };\n}\nvar myIterator = createIterator(1,2,3,4,5);\n\nfor(let item of myIterator) {\n  console.log(item)\n}\n\n/**\n  * 1\n  * 2\n  * 3\n  * 4\n  * 5\n */",lang:"js"}),a.a.createElement("ol",{start:3},a.a.createElement("li",null,"Iterator \u7684\u904d\u5386\u8fc7\u7a0b")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u521b\u5efa\u4e00\u4e2a\u6307\u9488\u5bf9\u8c61\uff0c\u6307\u5411\u5f53\u524d\u6570\u636e\u7ed3\u6784\u7684\u8d77\u59cb\u4f4d\u7f6e"),a.a.createElement("li",null,"\u7b2c\u4e00\u6b21\u8c03\u7528\u6307\u9488\u5bf9\u8c61\u7684 next(\u7528\u4e8e\u79fb\u52a8\u6307\u9488) \u65b9\u6cd5\uff0c\u53ef\u4ee5\u79fb\u52a8\u6307\u9488\u5e76\u5c06\u6307\u9488\u6307\u5411\u6570\u636e\u7ed3\u6784\u7684\u7b2c\u4e00\u4e2a\u6210\u5458"),a.a.createElement("li",null,"\u7b2c\u4e8c\u6b21\u8c03\u7528\u6307\u9488\u5bf9\u8c61\u7684 next \u65b9\u6cd5\uff0c\u79fb\u52a8\u6307\u9488\u5c31\u6307\u5411\u6570\u636e\u7ed3\u6784\u7684\u7b2c\u4e8c\u4e2a\u6210\u5458"),a.a.createElement("li",null,"\u4e0d\u65ad\u8c03\u7528\u6307\u9488\u5bf9\u8c61\u7684 next \u65b9\u6cd5\uff0c\u76f4\u5230\u6307\u5411\u6570\u636e\u7ed3\u6784\u7684\u7ed3\u675f\u4f4d\u7f6e"),a.a.createElement("li",null,"\u6bcf\u4e00\u6b21\u8c03\u7528 next\uff0c\u90fd\u4f1a\u8fd4\u56de\u5f53\u524d\u7684\u6210\u5458\u7684\u4fe1\u606f\uff0c\u5177\u4f53\u5c31\u662f\u8fd4\u56de\u4e00\u4e2a\u5305\u542b value \u548c done \u4e24\u4e2a\u5c5e\u6027\u7684\u5bf9\u8c61\uff0cvalue \u662f\u5f53\u524d\u6210\u5458\u7684\u503c\uff0cdone \u662f\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u904d\u5386\u662f\u5426\u7ed3\u675f")),a.a.createElement(o["a"],{code:"function moveIterator(arr) {\n  var curIndex = 0;\n  return {\n    next: function () {\n      return curIndex < arr.length\n        ? { value: arr[curIndex++], done: false }\n        : { value: undefined, done: true };\n      // return curIndex<arr.length?{value:array[curIndex++]}:{done:true}\n    },\n  };\n}",lang:"js"}),a.a.createElement("ol",{start:4},a.a.createElement("li",null,"Iterator \u4e0e\u6570\u636e\u7ed3\u6784\u7684\u5173\u7cfb")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u53ef\u8fed\u4ee3\u5bf9\u8c61\u7684\u6838\u5fc3\u529f\u80fd\uff1a\u5173\u6ce8\u70b9\u5206\u79bb\u3002\u5bf9\u8c61\u672c\u8eab\u5e76\u6ca1\u6709 next \u65b9\u6cd5\uff0c\u800c\u662f\u901a\u8fc7\u8c03\u7528 obj[Symbol.iterator] \u521b\u5efa\u4e86\u53e6\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5373\u8fed\u4ee3\u5668\u5bf9\u8c61\uff0c\u5e76\u4e14\u8be5\u5bf9\u8c61\u7684 next \u4f1a\u8fed\u4ee3\u751f\u6210\u503c"),a.a.createElement("li",null,"Iterator \u53ea\u662f\u628a\u63a5\u53e3\u89c4\u683c\u52a0\u5230\u6570\u636e\u7ed3\u6784\u4e4b\u4e0a\uff0c\u56e0\u6b64\uff0c\u904d\u5386\u5668\u4e0e\u5b83\u6240\u904d\u5386\u7684\u90a3\u4e2a\u6570\u636e\u7ed3\u6784\u5b9e\u9645\u4e0a\u662f\u5206\u5f00\u7684")),a.a.createElement(o["a"],{code:"let range = {\n  from: 1,\n  to: 5,\n\n  [Symbol.iterator]() {\n    this.target = this.from;\n    var that = this;\n    return {\n      next() {\n        if (that.target <= that.to) {\n          return { done: false, value: that.target++ };\n        } else {\n          return { done: true };\n        }\n      }\n    }\n  }\n};\n\nfor (let num of range) {\n  console.log(num); // 1, 2, 3, 4, 5\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u4e0a\u8ff0\u4ee3\u7801\u53ef\u4ee5\u7528 ",a.a.createElement("em",null,"yield")," \u6765\u5199\uff0c\u7ed3\u6784\u5982\u4e0b")),a.a.createElement(o["a"],{code:"let range = {\n  from: 1,\n  to: 5,\n\n  *[Symbol.iterator]() {\n    for (let value = this.from; value <= this.to; value++) {\n      yield value;\n    }\n  },\n};",lang:"js"}),a.a.createElement("ol",{start:5},a.a.createElement("li",null,"\u5177\u5907 ",a.a.createElement("code",null,"Iterator")," \u63a5\u53e3\u7684\u6570\u636e\u7ed3\u6784")),a.a.createElement(m["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{align:"center"},"\u6570\u636e\u7ed3\u6784"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",{align:"center"},"Array")),a.a.createElement("tr",null,a.a.createElement("td",{align:"center"},"Map")),a.a.createElement("tr",null,a.a.createElement("td",{align:"center"},"Set")),a.a.createElement("tr",null,a.a.createElement("td",{align:"center"},"String")),a.a.createElement("tr",null,a.a.createElement("td",{align:"center"},"arguments \u5bf9\u8c61")),a.a.createElement("tr",null,a.a.createElement("td",{align:"center"},"NodeList \u5bf9\u8c61")))),a.a.createElement("ul",null,a.a.createElement("li",null,"\u53ea\u8981\u90e8\u7f72\u4e86 Symbol.iterator \u5c5e\u6027\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5c31\u662f\u90e8\u7f72\u4e86\u904d\u5386\u5668\u63a5\u53e3\uff0c\u8c03\u7528\u8fd9\u4e2a\u63a5\u53e3\uff0c\u5c31\u4f1a\u8fd4\u56de\u4e00\u4e2a\u904d\u5386\u5668\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u7684\u6839\u672c\u7279\u5f81\u5c31\u662f\u5177\u6709 next \u65b9\u6cd5\uff0c\u6bcf\u6b21\u8c03\u7528\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u4ee3\u8868\u5f53\u524d\u6210\u5458\u7684\u4fe1\u606f\u5bf9\u8c61\uff0c\u6b64\u5bf9\u8c61\u5177\u6709 value \u548c done \u4e24\u4e2a\u5c5e\u6027")),a.a.createElement(o["a"],{code:"let i = 0;\nlet arr = [1, 2, 3, 4];\nlet arrIterator = arr[Symbol.iterator]();\n\nwhile (i <= arr.length) {\n  console.log(arrIterator.next());\n  i++;\n}\n// {value: 1, done: false}\n// {value: 2, done: false}\n// {value: 3, done: false}\n// {value: 4, done: false}\n// {value: undefined, done: true}",lang:"js"}),a.a.createElement(o["a"],{code:"let str = 'hello';\nlet iterator = str[Symbol.iterator]();\n\nwhile (true) {\n  let res = iterator.next();\n  if (res.done) {\n    break;\n  }\n  console.log(res.value);\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u666e\u901a\u5bf9\u8c61\u90e8\u7f72 Symbol.itarator \u65b9\u6cd5\u662f\u6ca1\u6709\u6548\u679c\u7684\uff0c\u9700\u8981\u6ee1\u8db3\u6570\u7ec4\u7684\u7d22\u5f15\u89c4\u5219\u624d\u53ef\u4ee5\uff0c\u4e5f\u5c31\u662f\u4f5c\u4e3a\u4e00\u4e2a\u7c7b\u6570\u7ec4\u5bf9\u8c61\u5b58\u5728\u3002\u800c\u4e14\u5982\u679c Symbol.iterator \u5bf9\u5e94\u7684\u4e0d\u662f\u904d\u5386\u5668\u751f\u6210\u51fd\u6570\uff0c\u5373\u4e0d\u662f\u8fd4\u56de\u4e00\u4e2a\u904d\u5386\u5668\u5bf9\u8c61\uff0c\u5c06\u4f1a\u62a5\u9519")),a.a.createElement(o["a"],{code:"// \u4f7f\u7528\u6570\u7ec4\u7684\u8fed\u4ee3\u5668\u5bf9\u8c61\u751f\u6210\u51fd\u6570\uff0c\u4f46\u5bf9\u8c61\u4e0d\u7b26\u5408\u6570\u7ec4\u7684\u6392\u5e8f\u89c4\u5219\nlet iterable = {\n  a: 'a',\n  b: 'b',\n  c: 'c',\n  length: 3,\n  [Symbol.iterator]: Array.prototype[Symbol.iterator],\n};\nfor (let item of iterable) {\n  console.log(item); // undefined, undefined, undefined\n}",lang:"js"}),a.a.createElement(o["a"],{code:"// \u4fee\u6539\u4e00\u4e0b\uff0c\u4f7f\u5f97\u8be5\u5bf9\u8c61\u53d8\u4e3a\u4e00\u4e2a\u7c7b\u6570\u7ec4\uff0c\u6210\u529f\u8f93\u51fa\u5185\u5bb9\nlet iterable = {\n  0: 'a',\n  1: 'b',\n  2: 'c',\n  length: 3,\n  [Symbol.iterator]: Array.prototype[Symbol.iterator],\n};\nfor (let item of iterable) {\n  console.log(item); // a, b, c\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5b57\u7b26\u4e32\u8fed\u4ee3\u5668\u80fd\u591f\u8bc6\u522b\u4ee3\u7406\u5bf9 surrogate pair\uff0c\u4e5f\u5c31\u662f UTF-16 \u6269\u5c55\u5b57\u7b26")),a.a.createElement(o["a"],{code:"let str = '\ud835\udcb3\ud83d\ude02\ud867\uddf6';\nfor (let item of str) {\n  console.log(item);\n}\n// \ud835\udcb3\n// \ud83d\ude02\n// \ud867\uddf6",lang:"js"}),a.a.createElement("ol",{start:6},a.a.createElement("li",null,"\u8c03\u7528 iterator \u63a5\u53e3\u7684\u573a\u5408")),a.a.createElement(m["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u573a\u5408"),a.a.createElement("th",null,"\u5b9e\u4f8b"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"\u89e3\u6784\u8d4b\u503c"),a.a.createElement("td",null,"let [x,...arr]=new Set([1,2,3,4])")),a.a.createElement("tr",null,a.a.createElement("td",null,"\u6269\u5c55\u8fd0\u7b97\u7b26"),a.a.createElement("td",null,"[...'jetmine']")),a.a.createElement("tr",null,a.a.createElement("td",null,"for...of"),a.a.createElement("td",null,"for(let item of arr)","{","}")),a.a.createElement("tr",null,a.a.createElement("td",null,"Array.from"),a.a.createElement("td",null,"Array.from(ArrayLike)")),a.a.createElement("tr",null,a.a.createElement("td",null,"Map\u3001Set"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"Promise.all"),a.a.createElement("td",null,"Promise.all([new Promise,new Promise])")),a.a.createElement("tr",null,a.a.createElement("td",null,"Promise.race"),a.a.createElement("td",null,"Promise.race([new Promise,new Promise])")))),a.a.createElement(o["a"],{code:"/**\n  * 1. Array.from ---\x3e Array Iterator\xa0{}\n */\n\nArray.from({length:5})[Symbol.iterator]();\n// Array Iterator\xa0{}",lang:"js"}),a.a.createElement("ol",{start:7},a.a.createElement("li",null,"ES6 \u8fed\u4ee3\u5668")),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("em",null,"iterator")," \u662f\u88ab\u90e8\u7f72\u5728\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61\u4e0a\u7684")),a.a.createElement(o["a"],{code:"Array.hasOwnProperty(Symbol.iterator); // false\nArray.prototype.hasOwnProperty(Symbol.iterator); // true\n\nMap.hasOwnProperty(Symbol.iterator); // false\nMap.prototype.hasOwnProperty(Symbol.iterator); // true",lang:"js"}),a.a.createElement(o["a"],{code:"class SimpleArray {\n  constructor(data) {\n    this.data = data;\n  }\n\n  [Symbol.iterator]() {\n    let index = 0;\n    return {\n      next: () => {\n        if (index < this.data.length) {\n          return { value: this.data[index++], done: false };\n        } else {\n          return { done: true };\n        }\n      },\n    };\n  }\n}",lang:"js"})))})));t["default"]=e=>{var t=a.a.useContext(r["context"]),n=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(c,{demos:n})}}}]);