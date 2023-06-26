(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[134],{YMgn:function(e,n,l){"use strict";l.r(n);var t=l("q1tI"),r=l.n(t),s=l("dEAq"),a=(l("0H/f"),l("N0lm"),l("DgDr"),l("cGlH"),l("ekZX"),l("Bjia")),o=(l("tVxl"),l("1pSt"),r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u624b\u5199-promisea"},r.a.createElement(s["AnchorLink"],{to:"#\u624b\u5199-promisea","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u624b\u5199 Promise/A+"),r.a.createElement("hr",null),r.a.createElement("ol",null,r.a.createElement("li",null,"Promise \u7684\u91cd\u8981\u6027")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"Promise")," \u662f ",r.a.createElement("code",null,"async/await")," \u8bed\u6cd5\u7684\u57fa\u7840\uff0c\u662f js \u4e2d\u5904\u7406\u5f02\u6b65\u7684\u6807\u51c6\u5f62\u5f0f")),r.a.createElement("ol",{start:2},r.a.createElement("li",null,"Promise \u5206\u89e3")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u2460 ",r.a.createElement("code",null,"Promise")," \u662f\u4e00\u4e2a\u7c7b\uff0c\u5728\u6267\u884c\u8fd9\u4e2a\u7c7b\u65f6\u4f1a\u4f20\u5165\u4e00\u4e2a\u6267\u884c\u5668\u53c2\u6570\uff0c\u8fd9\u4e2a\u6267\u884c\u5668\u4f1a\u7acb\u5373\u6267\u884c"),r.a.createElement("li",null,"\u2461 ",r.a.createElement("code",null,"Promise")," \u5177\u6709\u4e09\u79cd\u72b6\u6001\uff1a",r.a.createElement("code",null,"Pending")," \u521d\u59cb\u72b6\u6001\u3001",r.a.createElement("code",null,"Fulfilled")," \u6210\u529f\u72b6\u6001\u3001",r.a.createElement("code",null,"Rejected")," \u5931\u8d25\u72b6\u6001"),r.a.createElement("li",null,"\u2462 ",r.a.createElement("code",null,"pending")," \u72b6\u6001\uff0c",r.a.createElement("code",null,"Promise")," \u53ef\u4ee5\u5207\u6362\u5230 ",r.a.createElement("code",null,"fulfilled/resolved")," \u6216 ",r.a.createElement("code",null,"rejected"),"\uff1b",r.a.createElement("code",null,"fulfilled/resolved")," \u72b6\u6001\uff0c\u4e0d\u80fd\u8fc1\u79fb\u5230\u5176\u4ed6\u72b6\u6001\uff0c\u5fc5\u987b\u6709\u4e00\u4e2a\u4e0d\u53ef\u53d8\u7684 ",r.a.createElement("code",null,"value"),"\uff1b",r.a.createElement("code",null,"rejected")," \u72b6\u6001\uff0c\u4e0d\u80fd\u8fc1\u79fb\u5230\u5176\u4ed6\u72b6\u6001\uff0c\u5fc5\u987b\u6709\u4e2a\u4e0d\u53ef\u53d8\u7684 ",r.a.createElement("code",null,"reason")),r.a.createElement("li",null,"\u2463 ",r.a.createElement("code",null,"then")," \u7528\u6765\u5904\u7406\u72b6\u6001\uff0c",r.a.createElement("code",null,"fulfilled")," \u65f6\u8c03\u7528\u6210\u529f\u56de\u8c03\u51fd\u6570\uff0c",r.a.createElement("code",null,"rejected")," \u65f6\u8c03\u7528\u5931\u8d25\u56de\u8c03\u51fd\u6570\u3002",r.a.createElement("code",null,"thenable")," \u662f\u4e00\u4e2a\u5305\u542b ",r.a.createElement("code",null,"then")," \u65b9\u6cd5\u7684\u5bf9\u8c61\u6216\u51fd\u6570")),r.a.createElement("ol",{start:3},r.a.createElement("li",null,"Promise \u7c7b\u57fa\u672c\u6784\u9020")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"promise")," \u88ab\u6784\u9020\u8c03\u7528\u65f6\uff0c\u4f20\u5165\u7684\u6267\u884c\u5668\u4f1a\u7acb\u9a6c\u6267\u884c")),r.a.createElement(a["a"],{code:"/** \n * MyPromise \u88ab\u6784\u9020\u8c03\u7528\u65f6\uff0cexecutor \u4f1a\u540c\u6b65\u6267\u884c\n*/\nclass MyPromise {\n  constructor(executor) {\n    executor();\n  }\n}",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5728\u6267\u884c\u5668\u4f20\u5165 ",r.a.createElement("code",null,"resolve")," \u548c ",r.a.createElement("code",null,"reject")," \u56de\u8c03\u65b9\u6cd5")),r.a.createElement(a["a"],{code:"class MyPromise {\n  constructor(executor) {\n    executor(this.resolve, this.reject);\n  }\n  resolve = () => {};\n  reject = () => {};\n}",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5f53\u6210\u529f\u6216\u5931\u8d25\u56de\u8c03\u88ab\u8c03\u7528\u540e\uff0c\u4fee\u6539 ",r.a.createElement("code",null,"promise")," \u7684\u72b6\u6001")),r.a.createElement(a["a"],{code:"class MyPromise {\n  static PENDING = 'pending';\n  static FULFILLED = 'fulfilled';\n  static REJECTED = 'rejected';\n\n  status = MyPromise.PENDING;\n  value = null;\n  reason = null;\n\n  constructor(executor) {\n    executor(this.resolve, this.reject);\n  }\n\n  resolve = (value) => {\n    if (this.status === MyPromise.PENDING) {\n      this.status = MyPromise.FULFILLED;\n      this.value = value;\n    }\n  };\n\n  reject = (reason) => {\n    if (this.status === MyPromise.PENDING) {\n      this.status = MyPromise.REJECTED;\n      this.reason = reason;\n    }\n  };\n}",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5f53 ",r.a.createElement("code",null,"promise")," \u72b6\u6001\u53d8\u5316\u4ee5\u540e\uff0c\u5e76\u4e14\u5177\u6709 ",r.a.createElement("code",null,"then")," \u7684\u5904\u7406\u65b9\u6cd5\u65f6\uff0c",r.a.createElement("code",null,"then")," \u4f1a\u5904\u7406\u8be5\u72b6\u6001")),r.a.createElement(a["a"],{code:"class MyPromise {\n\n  static PENDING = 'pending';\n  static FULFILLED = 'fulfilled';\n  static REJECTED = 'rejected';\n\n  status = MyPromise.PENDING;\n  value = null;\n  reason = null;\n\n  constructor(executor) {\n    executor(this.resolve, this.reject);\n  }\n\n  status = MyPromise.PENDING;\n  value = null;\n  reason = null;\n\n  resolve = (value) => {\n    if (this.status === MyPromise.PENDING) {\n      this.status = MyPromise.FULFILLED;\n      this.value = value;\n    }\n  };\n\n  reject = (reason) => {\n    if (this.status === MyPromise.PENDING) {\n      this.status = MyPromise.REJECTED;\n      this.reason = reason;\n    }\n  };\n\n  then(onFulfilled, onRejected) {\n    if (this.status === MyPromise.FULFILLED) {\n      onFulfilled(this.value);\n    } else if (this.status === MyPromise.REJECTED) {\n      onRejected(this.reason);\n    }\n  }\n}",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u76ee\u524d\u53ef\u4ee5\u6b63\u5e38\u5b9e\u73b0\u56de\u8c03\u5904\u7406\u4e86\uff0c\u4f46\u5b58\u5728\u4e00\u4e2a\u95ee\u9898\uff0c\u65e0\u6cd5\u5728\u5f02\u6b65\u903b\u8f91\u4e0b\u5904\u7406\u72b6\u6001\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c",r.a.createElement("code",null,"then")," \u4f1a\u7acb\u9a6c\u6267\u884c\uff0c\u800c ",r.a.createElement("code",null,"setTimeout")," \u7684\u56de\u8c03\u51fd\u6570\u4f1a\u5728\u4e0b\u4e00\u8f6e\u4e8b\u4ef6\u5faa\u73af\u624d\u4f1a\u6267\u884c\uff0c\u56e0\u6b64\u65e0\u6cd5\u540c\u6b65\u83b7\u53d6\u5230")),r.a.createElement(a["a"],{code:"let p1 = new MyPromise((resolve, reject) => {\n  resolve('\u540c\u6b65\u6210\u529f\u5904\u7406');\n});\n\nlet p2 = new MyPromise((resolve, reject) => {\n  setTimeout(() => {\n    resolve('\u540c\u6b65\u6210\u529f\u5904\u7406');\n  });\n});\n\np1.then((res) => {\n  console.log(res);\n});\n// \u540c\u6b65\u6210\u529f\u5904\u7406\n\np2.then((res) => {\n  console.log(res);\n});\n// \u65e0\u8f93\u51fa\uff0c\u72b6\u6001\u5f02\u6b65\u53d8\u66f4\uff0c\u72b6\u6001\u65e0\u6cd5\u83b7\u53d6",lang:"js"}),r.a.createElement("ol",{start:4},r.a.createElement("li",null,"Promise \u7c7b\u5f02\u6b65\u903b\u8f91\u5904\u7406")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7f13\u5b58\u72b6\u6001\u6210\u529f\u6216\u5931\u8d25\u56de\u8c03\u51fd\u6570\uff0c\u5728\u5408\u9002\u7684\u65f6\u5019\u53bb\u8c03\u7528\u5b83\u4eec")),r.a.createElement(a["a"],{code:"class MyPromise {\n  constructor(executor) {\n    executor(this.resolve, this.reject);\n  }\n\n  onFulfilledCallback = null;\n  onRejectedCallback = null;\n\n  // ...\n}",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5728\u5bf9 ",r.a.createElement("code",null,"then")," \u672a\u77e5\u72b6\u6001\u7684\u903b\u8f91\u8fdb\u884c\u6539\u9020\uff0c\u5728\u72b6\u6001\u672a\u53d8\u5316\u65f6\uff0c\u5c06\u6210\u529f\u56de\u8c03\u548c\u5931\u8d25\u56de\u8c03\u5b58\u50a8\u8d77\u6765\uff0c\u7b49\u5230\u6267\u884c\u6210\u529f\u6216\u5931\u8d25\u51fd\u6570\u7684\u65f6\u5019\u518d\u4f20\u9012")),r.a.createElement(a["a"],{code:"then(onFulfilled,onRejected){\n  switch(this.status){\n    case MyPromise.PENDING:\n      this.onFulfilledCallback = onFulfilled;\n      this.onRejectedCallback = onRejected\n      break;\n    case MyPromise.FULFILLED:\n      onFulfilled(this.value)\n      break;\n    case MyPromise.REJECTED:\n      onRejected(this.reason)\n      break;\n    default:\n      break\n  }\n}",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5bf9 ",r.a.createElement("code",null,"resolve/reject")," \u8fdb\u884c\u6539\u9020\uff0c \u5224\u65ad\u6210\u529f\u6216\u5931\u8d25\u56de\u8c03\u662f\u5426\u5b58\u5728\uff0c\u5982\u679c\u5b58\u5728\u5c31\u8c03\u7528")),r.a.createElement(a["a"],{code:"resolve = (value) => {\n  if (this.status === MyPromise.PENDING) {\n    this.status = MyPromise.FULFILLED;\n    this.value = value;\n    this.onFulfilledCallback?.()\n  }\n};\n\nreject = (reason) => {\n  if (this.status === MyPromise.PENDING) {\n    this.status = MyPromise.REJECTED;\n    this.reason = reason;\n    this.onRejectedCallback?.()\n  }\n};",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u6539\u9020\u5b8c\u6bd5\u7684 ",r.a.createElement("code",null,"promise"),"\uff0c\u5177\u6709\u4e86\u5904\u7406\u5f02\u6b65\u903b\u8f91\u7684\u80fd\u529b\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u8fdb\u884c\u6d4b\u8bd5\u4e00\u4e0b")),r.a.createElement(a["a"],{code:"class MyPromise {\n\n  static PENDING = 'pending';\n  static FULFILLED = 'fulfilled';\n  static REJECTED = 'rejected';\n\n  status = MyPromise.PENDING;\n  value = null;\n  reason = null;\n\n  constructor(executor) {\n    executor(this.resolve, this.reject);\n  }\n\n  onFulfilledCallback = null;\n  onRejectedCallback = null;\n\n  resolve = (value) => {\n    if (this.status === MyPromise.PENDING) {\n      this.status = MyPromise.FULFILLED;\n      this.value = value;\n      this.onFulfilledCallback?.(value)\n    }\n  };\n\n  reject = (reason) => {\n    if (this.status === MyPromise.PENDING) {\n      this.status = MyPromise.REJECTED;\n      this.reason = reason;\n      this.onRejectedCallback?.(reason)\n    }\n  };\n\n  then(onFulfilled,onRejected){\n    switch(this.status){\n      case MyPromise.PENDING:\n        this.onFulfilledCallback = onFulfilled;\n        this.onRejectedCallback = onRejected\n        break;\n      case MyPromise.FULFILLED:\n        onFulfilled(this.value)\n        break;\n      case MyPromise.REJECTED:\n        onRejected(this.reason)\n        break;\n      default:\n        break\n    }\n  }\n}",lang:"js"}),r.a.createElement(a["a"],{code:"let p3 = new MyPromise((resolve, reject) => {\n  setTimeout(() => {\n    resolve('\u540c\u6b65\u6210\u529f\u5904\u7406');\n  }, 5000);\n  console.log(new Date().toLocaleString());\n});\n\np3.then((res) => {\n  console.log(res, new Date().toLocaleString());\n});\n\n// 2021/4/15\u4e0a\u53481:51:40\n// \u540c\u6b65\u6210\u529f\u5904\u7406 2021/4/15\u4e0a\u53481:51:45\n// \u6210\u529f\u8f93\u51fa",lang:"js"}),r.a.createElement("ol",{start:5},r.a.createElement("li",null,"then \u7684\u591a\u6b21\u8c03\u7528")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5982\u679c\u6709\u591a\u4e2a ",r.a.createElement("code",null,"then")," \u7684\u8c03\u7528\uff0c\u5982\u679c\u662f\u540c\u6b65\u56de\u8c03\uff0c\u90a3\u4e48\u76f4\u63a5\u8fd4\u56de\u5f53\u524d\u7684\u503c\u5c31\u884c\uff1b\u5982\u679c\u662f\u5f02\u6b65\u56de\u8c03\uff0c\u90a3\u4e48\u4fdd\u5b58\u7684\u6210\u529f\u5931\u8d25\u7684\u56de\u8c03\uff0c\u9700\u8981\u7528\u4e0d\u540c\u7684\u503c\u4fdd\u5b58\uff0c\u56e0\u4e3a\u90fd\u4e92\u4e0d\u76f8\u540c")),r.a.createElement(a["a"],{code:"let p1 = new MyPromise((resolve, reject) => {\n  setTimeout(() => {\n    resolve('\u540c\u6b65\u6210\u529f\u5904\u7406');\n  }, 5000);\n});\n\np1.then((res) => {\n  console.log('then1', res);\n});\n\np1.then((res) => {\n  console.log('then2', res);\n});\n\np1.then((res) => {\n  console.log('then3', res);\n});\n\n// then3 \u540c\u6b65\u6210\u529f\u5904\u7406\n// \uff1f\u53ea\u6709\u7b2c\u4e09\u4e2a\u7684\u56de\u8c03\u88ab\u6267\u884c\u4e86",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u6211\u4eec\u4e3a ",r.a.createElement("code",null,"promise")," \u4e2d\u65b0\u589e\u4e24\u4e2a\u6570\u7ec4\uff0c\u7528\u4e8e\u5b58\u653e\u6ce8\u518c\u7684 ",r.a.createElement("code",null,"then")," \u56de\u8c03\u65b9\u6cd5\uff0c\u540c\u65f6\u4fee\u6539 ",r.a.createElement("code",null,"then")," \u7684\u5904\u7406\u903b\u8f91")),r.a.createElement(a["a"],{code:"class MyPromise {\n\n  static PENDING = 'pending';\n  static FULFILLED = 'fulfilled';\n  static REJECTED = 'rejected';\n\n  status = MyPromise.PENDING;\n  value = null;\n  reason = null;\n\n  constructor(executor) {\n    executor(this.resolve, this.reject);\n  }\n\n  onFulfilledCallback = [];\n  onRejectedCallback = [];\n\n  resolve = (value) => {\n    if (this.status === MyPromise.PENDING) {\n      this.status = MyPromise.FULFILLED;\n      this.value = value;\n      this.onFulfilledCallback?.(value)\n    }\n  };\n\n  reject = (reason) => {\n    if (this.status === MyPromise.PENDING) {\n      this.status = MyPromise.REJECTED;\n      this.reason = reason;\n      this.onRejectedCallback?.(reason)\n    }\n  };\n\n  then(onFulfilled,onRejected){\n    switch(this.status){\n      case MyPromise.PENDING:\n        this.onFulfilledCallback.push(onFulfilled);\n        this.onRejectedCallback.push(onRejected)\n        break;\n      case MyPromise.FULFILLED:\n        onFulfilled(this.value)\n        break;\n      case MyPromise.REJECTED:\n        onRejected(this.reason)\n        break;\n      default:\n        break\n    }\n  }\n}",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5bf9\u6210\u529f\u6216\u5931\u8d25\u7684\u72b6\u6001\u56de\u8c03\u8fdb\u884c\u5faa\u73af\u8c03\u7528")),r.a.createElement(a["a"],{code:"resolve = (value) => {\n  if(this.status === MyPromise.PENDING){\n    this.status = MyPromise.FULFILLED\n    this.value = value\n\n    while(this.onFulfilledCallback.length){\n      this.onFulfilledCallback.shift()(value)\n    }\n  }\n}\nreject = (reason) => {\n  if(this.status === MyPromisePENDING){\n    this.status = MyPromise.REJECTED\n    this.reason = reason\n\n    while(this.onRejectedCallback.length){\n      this.onRejectedCallback.shift()(reason)\n    }\n}",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u518d\u6765\u770b\u770b\u8f93\u51fa\u7684\u7ed3\u679c")),r.a.createElement(a["a"],{code:"class MyPromise {\n\n  static PENDING = 'pending';\n  static FULFILLED = 'fulfilled';\n  static REJECTED = 'rejected';\n\n  status = MyPromise.PENDING;\n  value = null;\n  reason = null;\n\n  constructor(executor) {\n    executor(this.resolve, this.reject);\n  }\n\n  onFulfilledCallback = [];\n  onRejectedCallback = [];\n\n  resolve = (value) => {\n    if(this.status === MyPromise.PENDING){\n      this.status = MyPromise.FULFILLED\n      this.value = value\n\n      while(this.onFulfilledCallback.length){\n        this.onFulfilledCallback.shift()(value)\n      }\n    }\n  }\n\n  reject = (reason) => {\n    if(this.status === MyPromisePENDING){\n      this.status = MyPromise.REJECTED\n      this.reason = reason\n\n      while(this.onRejectedCallback.length){\n        this.onRejectedCallback.shift()(reason)\n      }\n    }\n  }\n\n  then(onFulfilled,onRejected){\n    switch(this.status){\n      case MyPromise.PENDING:\n        this.onFulfilledCallback.push(onFulfilled);\n        this.onRejectedCallback.push(onRejected)\n        break;\n      case MyPromise.FULFILLED:\n        onFulfilled(this.value)\n        break;\n      case MyPromise.REJECTED:\n        onRejected(this.reason)\n        break;\n      default:\n        break\n    }\n  }\n}",lang:"js"}),r.a.createElement(a["a"],{code:"let p1 = new MyPromise((resolve, reject) => {\n  console.log(new Date());\n  setTimeout(() => {\n    resolve('\u540c\u6b65\u6210\u529f\u5904\u7406');\n  }, 5000);\n});\n\np1.then((res) => {\n  console.log('then1', res, console.log(new Date()));\n});\n\np1.then((res) => {\n  console.log('then2', res, console.log(new Date()));\n});\n\np1.then((res) => {\n  console.log('then3', res, console.log(new Date()));\n});\n\n// \u6210\u529f\u8f93\u51fa\n// Thu Apr 15 2021 02:07:58 GMT+0800 (\u4e2d\u56fd\u6807\u51c6\u65f6\u95f4)\n\n// Thu Apr 15 2021 02:08:03 GMT+0800 (\u4e2d\u56fd\u6807\u51c6\u65f6\u95f4)\n// then1 \u540c\u6b65\u6210\u529f\u5904\u7406\n\n// Thu Apr 15 2021 02:08:03 GMT+0800 (\u4e2d\u56fd\u6807\u51c6\u65f6\u95f4)\n// then2 \u540c\u6b65\u6210\u529f\u5904\u7406\n\n// Thu Apr 15 2021 02:08:03 GMT+0800 (\u4e2d\u56fd\u6807\u51c6\u65f6\u95f4)\n// then3 \u540c\u6b65\u6210\u529f\u5904\u7406",lang:"js"}),r.a.createElement("ol",{start:6},r.a.createElement("li",null,"Promise \u7684\u94fe\u5f0f\u8c03\u7528")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"then")," \u65b9\u6cd5\u94fe\u5f0f\u8c03\u7528\u7684\u6838\u5fc3\u662f\u8fd4\u56de\u4e00\u4e2a ",r.a.createElement("code",null,"Promise")," \u5bf9\u8c61\uff0c",r.a.createElement("code",null,"then")," \u65b9\u6cd5\u91cc\u9762 ",r.a.createElement("code",null,"return")," \u4e00\u4e2a\u8fd4\u56de\u503c\u4f5c\u4e3a\u4e0b\u4e00\u4e2a ",r.a.createElement("code",null,"then")," \u65b9\u6cd5\u7684\u53c2\u6570\uff0c\u5982\u679c\u662f ",r.a.createElement("code",null,"return")," \u4e00\u4e2a ",r.a.createElement("code",null,"Promise")," \u5bf9\u8c61\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u5224\u65ad\u5b83\u7684\u72b6\u6001")),r.a.createElement(a["a"],{code:'let p1 = new MyPromise((resolve, reject) => {\n  setTimeout(() => {\n    resolve(\'\u5904\u7406\u5b8c\u6210\');\n  }, 2000);\n});\n\nfunction transition(value) {\n  return new MyPromise((resolve, reject) => {\n    resolve(value);\n  });\n}\n\nlet resolve1 = null;\nlet resolve2 = null;\nlet resolve3 = null;\n\nlet then1 = p1.then((res) => {\n  let value = \'then1\' + res;\n  console.log(value);\n  resolve1 = transition(value);\n  return resolve1;\n});\n\nlet then2 = p1.then((res) => {\n  let value = \'then2\' + res;\n  console.log(value);\n  resolve2 = transition(value);\n  return resolve2;\n});\n\nlet then3 = p1.then((res) => {\n  let value = \'then3\' + res;\n  console.log(value);\n  resolve3 = transition(value);\n  return resolve3;\n});\n\nconsole.log(then1); // undefined\nconsole.log(then2); // undefined\nconsole.log(then3); // undefined\n\nconsole.log(resolve1);\n// MyPromise\xa0{status: "fulfilled", value: "then1\u5904\u7406\u5b8c\u6210", reason: null, onFulfilledCallback: Array(0), onRejectedCallback: Array(0),\xa0\u2026}\n\nconsole.log(resolve2);\n// MyPromise\xa0{status: "fulfilled", value: "then2\u5904\u7406\u5b8c\u6210", reason: null, onFulfilledCallback: Array(0), onRejectedCallback: Array(0),\xa0\u2026}\n\nconsole.log(resolve3);\n// MyPromise\xa0{status: "fulfilled", value: "then3\u5904\u7406\u5b8c\u6210", reason: null, onFulfilledCallback: Array(0), onRejectedCallback: Array(0),\xa0\u2026}',lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u53ef\u4ee5\u53d1\u73b0\uff0c\u6211\u4eec\u5728 ",r.a.createElement("code",null,"then")," \u4e2d\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 ",r.a.createElement("code",null,"promise")," \u5bf9\u8c61\u5e76\u4e0d\u80fd\u8fbe\u5230\u6548\u679c\uff0c\u56e0\u4e3a ",r.a.createElement("code",null,"then")," \u4e2d\u5e76\u6ca1\u6709\u5904\u7406\u8fd4\u56de\u503c\uff0c\u800c\u5904\u7406\u8fd4\u56de\u503c\u7684\u662f ",r.a.createElement("code",null,"resolve/reject")," \u5904\u7406\u56de\u8c03\u6216\u6210\u529f\u6570\u7ec4\u7684\u6bcf\u4e00\u9879\u6267\u884c\u540e\u7684")),r.a.createElement(a["a"],{code:"let p1 = new MyPromise((resolve, reject) => {\n  setTimeout(() => {\n    resolve('\u5904\u7406\u5b8c\u6210');\n  }, 2000);\n});\n\nfunction transition(value) {\n  return new MyPromise((resolve, reject) => {\n    resolve(value);\n  });\n}\n\np1.then((res) => {\n  console.log(res);\n  return transition(res);\n}).then((res) => {\n  console.log(res);\n  return transition(res);\n});\n\n// Cannot read property 'then' of undefined",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u56e0\u6b64\uff0c\u8fd9\u65f6\u5019\u94fe\u5f0f\u8c03\u7528\u65e0\u6cd5\u5b8c\u6210\uff0c\u9700\u8981\u7ee7\u7eed\u8fdb\u884c\u6539\u9020 ",r.a.createElement("code",null,"then"))),r.a.createElement(a["a"],{code:"class MyPromise {\n  constructor(executor) {\n    executor(this.resolve, this.reject);\n  }\n  then(onFulfilled, onRejected) {\n    const newPromise = new MyPromise((resolve, reject) => {\n      if (this.status === MyPromise.FULFILLED) {\n        const res = onFulfilled(this.value);\n        resolvePromise(res, resolve, reject);\n      } else if (this.status === MyPromise.REJECTED) {\n        onRejected(this.reason);\n      } else if (this.status === MyPromise.PENDING) {\n        this.onFulfilledCallback.push(onFulfilled);\n        this.onRejectedCallback.push(onRejected);\n      }\n    });\n    return newPromise;\n  }\n}\n\nfunction resolvePromise(res, resolve, reject) {\n  if (res instanceof MyPromise) {\n    res.then(\n      (value) => resolve(value),\n      (reason) => reject(reason),\n    );\n    // \u5982\u679c\u662f\u4e00\u4e2apromise\u5bf9\u8c61\n  } else {\n    resolve(res);\n    // \u5426\u5219\u662f\u666e\u901a\u503c\u7684\u60c5\u51b5\n  }\n}",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5982\u679c ",r.a.createElement("code",null,"then")," \u65b9\u6cd5\u8fd4\u56de\u7684\u662f\u81ea\u5df1\u7684 ",r.a.createElement("code",null,"Promise")," \u5bf9\u8c61\uff0c\u5219\u4f1a\u53d1\u751f\u5faa\u73af\u8c03\u7528\uff0c\u8fd9\u4e2a\u65f6\u5019\u7a0b\u5e8f\u4f1a\u62a5\u9519\u3002\u4e5f\u5c31\u662f\u5f53 ",r.a.createElement("code",null,"then")," \u8fd4\u56de\u8c03\u7528\u8005\u65f6\uff0c\u7a0b\u5e8f\u662f\u4f1a\u62a5\u9519\u7684")),r.a.createElement(a["a"],{code:"let p = new Promise((resolve, reject) => {\n  resolve('success');\n});\n\nvar p1 = p.then((res) => {\n  return p1;\n});\n// Uncaught (in promise) TypeError: Chaining cycle detected for promise #<Promise>",lang:"js"}),r.a.createElement(a["a"],{code:"class MyPromise {\n  constructor(executor) {\n    executor(this.resolve, this.reject);\n  }\n\n  // ...\n\n  then(onFulfilled, onRejected) {\n    const newPromise = new MyPromise((resolve, reject) => {\n      if (this.status === FULFILLED) {\n        const res = onFulfilled(this.value);\n        resolvePromise(newPromise, res, resolve, reject);\n      } else if (this.status === REJECTED) {\n        onRejected(this.reason);\n      } else if (this.status === PENDING) {\n        this.onFulfilledCallback.push(onFulfilled);\n        this.onRejectedCallback.push(onRejected);\n      }\n    });\n    return newPromise;\n  }\n}\n\nfunction resolvePromise(promise, res, resolve, reject) {\n  if (promise === res) {\n    return reject(new TypeError('TypeError: Chaining cycle detected for promise #<Promise>'));\n  }\n  if (res instanceof MyPromise) {\n    res.then(\n      (value) => resolve(value),\n      (reason) => reject(reason),\n    );\n    // \u76ee\u7684\u662f\u5c06then\u8fd4\u56de\u7684promise\u7684\u72b6\u6001\u53d8\u4e3a fulfilled \u6216\u8005 rejected\n\n    // \u5982\u679c\u662f\u4e00\u4e2apromise\u5bf9\u8c61\n  } else {\n    resolve(res);\n    // \u5426\u5219\u662f\u666e\u901a\u503c\u7684\u60c5\u51b5\n  }\n}",lang:"js"}),r.a.createElement("ol",{start:7},r.a.createElement("li",null,"\u521b\u5efa\u5fae\u4efb\u52a1")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5728 ",r.a.createElement("code",null,"then")," \u5185\u90e8\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\u53bb\u7b49\u5f85 ",r.a.createElement("code",null,"then")," \u8fd4\u56de\u7684 ",r.a.createElement("code",null,"promise")," \u5b8c\u6210\u521d\u59cb\u5316")),r.a.createElement(a["a"],{code:"class MyPromise {\n  constructor(executor) {\n    executor(this.resolve, this.reject);\n  }\n\n  // ...\n\n  then(onFulfilled, onRejected) {\n    const newPromise = new MyPromise((resolve, reject) => {\n      if (this.status === FULFILLED) {\n        queueMicrotask(() => {\n          // \u83b7\u53d6\u6210\u529f\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\u7ed3\u679c\n          // \u4f20\u5165 resolvePromise \u96c6\u4e2d\u5904\u7406\n          const res = onFulfilled(this.value);\n          resolvePromise(newPromise, res, resolve, reject);\n        });\n      } else if (this.status === REJECTED) {\n        onRejected(this.reason);\n      } else if (this.status === PENDING) {\n        this.onFulfilledCallback.push(onFulfilled);\n        this.onRejectedCallback.push(onRejected);\n      }\n    });\n    return newPromise;\n  }\n}",lang:"js"}),r.a.createElement("ol",{start:8},r.a.createElement("li",null,"\u5f02\u5e38\u6355\u83b7")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u9996\u5148\u9700\u8981\u5bf9\u6267\u884c\u5668\u4e2d\u7684\u4ee3\u7801\u9519\u8bef\u8fdb\u884c\u6355\u83b7\uff0c\u5982\u679c\u6709\u9519\u8bef\uff0c\u5c06\u72b6\u6001\u4fee\u6539\u4e3a\u5931\u8d25 ",r.a.createElement("code",null,"rejected"))),r.a.createElement(a["a"],{code:"class MyPromise {\n  constructor(executor) {\n    try {\n      executor(this.resolve, this.reject);\n    } catch (err) {\n      this.reject(err);\n    }\n  }\n}",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u63a5\u4e0b\u6765\uff0c",r.a.createElement("code",null,"then")," \u6267\u884c\u8fc7\u7a0b\u4e2d\u7684\u9519\u8bef\u4e5f\u8981\u6355\u83b7")),r.a.createElement(a["a"],{code:"then(onFulfilled,onRejected){\n    const newPromise = new MyPromise((resolve,reject)=>{\n        if(this.status === FULFILLED){\n            queueMicrotask(() => {\n                try{\n                    // \u83b7\u53d6\u6210\u529f\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\u7ed3\u679c\n                    // \u4f20\u5165 resolvePromise \u96c6\u4e2d\u5904\u7406\n                    const res = onFulfilled(this.value)\n                    resolvePromise(newPromise,res,resolve,reject)\n                }catch(err){\n                    reject(err)\n                }\n            })\n        } else if(this.status === REJECTED){\n            onRejected(this.reason)\n        } else if(this.status === PENDING){\n            this.onFulfilledCallback.push(onFulfilled)\n            this.onRejectedCallback.push(onRejected)\n        }\n    })\n    return newPromise\n}",lang:"js"}),r.a.createElement("ol",{start:9},r.a.createElement("li",null,"\u94fe\u5f0f\u8c03\u7528\u4e0d\u540c\u72b6\u6001\u7684\u6539\u9020")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u589e\u52a0\u5f02\u6b65\u72b6\u6001\u4e0b\u7684\u94fe\u5f0f\u8c03\u7528\uff0c\u589e\u52a0\u56de\u8c03\u51fd\u6570\u6267\u884c\u7ed3\u679c\u7684\u5224\u65ad\uff0c\u589e\u52a0\u8bc6\u522b ",r.a.createElement("code",null,"Promise")," \u662f\u5426\u8fd4\u56de\u81ea\u5df1\uff0c\u589e\u52a0\u9519\u8bef\u6355\u83b7")),r.a.createElement(a["a"],{code:"then(onFulfilled,onRejected){\n    const newPromise = new MyPromise((resolve,reject)=>{\n        if(this.status === FULFILLED){\n            queueMicrotask(() => {\n                try{\n                    // \u83b7\u53d6\u6210\u529f\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\u7ed3\u679c\n                    // \u4f20\u5165 resolvePromise \u96c6\u4e2d\u5904\u7406\n                    const res = onFulfilled(this.value)\n                    resolvePromise(newPromise,res,resolve,reject)\n                }catch(err){\n                    reject(err)\n                }\n            })\n        } else if(this.status === REJECTED){\n            queueMicrotask(() => {\n                try{\n                    // \u83b7\u53d6\u5931\u8d25\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\u7ed3\u679c\n                    // \u4f20\u5165 resolvePromise \u96c6\u4e2d\u5904\u7406\n                    const res = onRejected(this.reason)\n                    resolvePromise(newPromise,res,resolve,reject)\n                }catch(err){\n                    reject(err)\n                }\n            })\n        } else if(this.status === PENDING){\n            this.onFulfilledCallback.push(()=>{\n                queueMicrotask(()=>{\n                    try{\n                        const res = onFulfilled(this.value)\n                        resolvePromise(newPromise,res,resolve,reject)\n                    }catch(err){\n                        reject(err)\n                    }\n                })\n            })\n            this.onRejectedCallback.push(()=>{\n                queueMicrotask(()=>{\n                    try{\n                        const res = onRejected(this.reason)\n                        resolvePromise(newPromise,res,resolve,reject)\n                    }catch(err){\n                        reject(err)\n                    }\n                })\n            })\n        }\n    })\n    return newPromise\n}",lang:"js"}),r.a.createElement("ol",{start:10},r.a.createElement("li",null,"\u5bf9 then \u7684\u53c2\u6570\u8fdb\u884c\u6539\u9020")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5904\u7406 ",r.a.createElement("code",null,"then")," \u65b9\u6cd5\u7684\u65f6\u5019\u90fd\u662f\u9ed8\u8ba4\u4f20\u5165 ",r.a.createElement("code",null,"onFulfilled"),"\u3001",r.a.createElement("code",null,"onRejected")," \u4e24\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u4f46\u662f\u5b9e\u9645\u4e0a\u539f\u751f ",r.a.createElement("code",null,"Promise")," \u662f\u53ef\u4ee5\u9009\u62e9\u53c2\u6570\u7684\u5355\u4f20\u6216\u8005\u4e0d\u4f20\uff0c\u90fd\u4e0d\u4f1a\u5f71\u54cd\u6267\u884c")),r.a.createElement(a["a"],{code:"then(onFulfilled,onRejected){\n    // \u672a\u4f20\u9012\u7684\u60c5\u51b5\u4e0b\u9ed8\u8ba4\u4f20\u503c\n    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;\n    onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason};\n}",lang:"js"}),r.a.createElement("ol",{start:11},r.a.createElement("li",null,"\u76f4\u63a5\u5904\u7406\u72b6\u6001")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"Promise")," \u5177\u6709\u9759\u6001\u65b9\u6cd5 ",r.a.createElement("code",null,"resolve/reject"),"\uff0c\u5b83\u4f1a\u76f4\u63a5\u521b\u5efa\u4e00\u4e2a\u6210\u529f\u6216\u5931\u8d25\u72b6\u6001\u7684 `promise")),r.a.createElement(a["a"],{code:"class MyPromise {\n  constructor(executor) {\n    try {\n      executor(this.resolve, this.reject);\n    } catch (err) {\n      this.reject(err);\n    }\n  }\n\n  // ...\n\n  static resolve(arg) {\n    if (arg instanceof MyPromise) {\n      // \u4f20\u5165\u7684\u662fpromise\u5b9e\u4f8b\u5c31\u76f4\u63a5\u8fd4\u56de\n      return arg;\n    }\n    return new MyPromise((resolve) => {\n      resolve(arg);\n    });\n  }\n\n  static reject(reason) {\n    return new MyPromise((resolve, reject) => {\n      reject(reason);\n    });\n  }\n}",lang:"js"}),r.a.createElement("ol",{start:12},r.a.createElement("li",null,"\u7ec6\u8282\u5904\u7406")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5f53\u5904\u7406 ",r.a.createElement("code",null,"then")," \u91cc\u9762\u7684\u72b6\u6001\u53d8\u5316\u65f6\uff0c\u9700\u8981\u5224\u65ad\u7ecf\u8fc7 ",r.a.createElement("code",null,"onFulfill/onReject")," \u5904\u7406\u540e\u7684\u7ed3\u679c\u662f ",r.a.createElement("code",null,"object")," \u6216 ",r.a.createElement("code",null,"function"),"\uff0c\u6ee1\u8db3\u5219\u63a5\u7740\u5224\u65ad ",r.a.createElement("code",null,"res.then")," \u662f\u5426\u5b58\u5728")),r.a.createElement(a["a"],{code:"function resolvePromise(promise, res, resolve, reject) {\n  if (promise === res) {\n    return reject(new TypeError('TypeError: Chaining cycle detected for promise #<Promise>'));\n  }\n  if (typeof res === 'object' || typeof res === 'function') {\n    if (res === null) {\n      // res \u4e3a null \u76f4\u63a5\u8fd4\u56de\uff0c\u8d70\u540e\u9762\u7684\u903b\u8f91\u4f1a\u62a5\u9519\n      return resolve(res);\n    }\n    let then;\n    try {\n      then = res.then;\n    } catch (err) {\n      return reject(err);\n    }\n\n    if (typeof then === 'function') {\n      let called = false;\n      try {\n        then.call(\n          res,\n          (y) => {\n            if (called) return;\n            called = true;\n            resolvePromise(promise, y, resolve, reject);\n          },\n          (r) => {\n            if (called) return;\n            called = true;\n            reject(r);\n          },\n        );\n        // \u5982\u679c resolvePromise \u548c rejectPromise \u5747\u88ab\u8c03\u7528\uff0c\n        // \u6216\u8005\u88ab\u540c\u4e00\u53c2\u6570\u8c03\u7528\u4e86\u591a\u6b21\uff0c\u5219\u4f18\u5148\u91c7\u7528\u9996\u6b21\u8c03\u7528\u5e76\u5ffd\u7565\u5269\u4e0b\u7684\u8c03\u7528\n        // \u5b9e\u73b0\u8fd9\u6761\u9700\u8981\u524d\u9762\u52a0\u4e00\u4e2a\u53d8\u91cf called\n      } catch (err) {\n        if (called) return;\n        reject(err);\n      }\n    } else {\n      resolve(res);\n    }\n  } else {\n    resolve(res);\n  }\n}",lang:"js"}),r.a.createElement("ol",{start:13},r.a.createElement("li",null,"\u5b8c\u6574\u7248")),r.a.createElement(a["a"],{code:"const PENDING = 'pending';\nconst FULFILLED = 'fulfilled';\nconst REJECTED = 'rejected';\n\nfunction resolvePromise(promise, res, resolve, reject) {\n  if (promise === res) {\n    return reject(new TypeError('TypeError: Chaining cycle detected for promise #<Promise>'));\n  }\n  if (typeof res === 'object' || typeof res === 'function') {\n    if (res === null) {\n      // res \u4e3a null \u76f4\u63a5\u8fd4\u56de\uff0c\u8d70\u540e\u9762\u7684\u903b\u8f91\u4f1a\u62a5\u9519\n      return resolve(res);\n    }\n    let then;\n    try {\n      then = res.then;\n    } catch (err) {\n      return reject(err);\n    }\n\n    if (typeof then === 'function') {\n      let called = false;\n      try {\n        then.call(\n          res,\n          (y) => {\n            if (called) return;\n            called = true;\n            resolvePromise(promise, y, resolve, reject);\n          },\n          (r) => {\n            if (called) return;\n            called = true;\n            reject(r);\n          },\n        );\n        // \u5982\u679c resolvePromise \u548c rejectPromise \u5747\u88ab\u8c03\u7528\uff0c\n        // \u6216\u8005\u88ab\u540c\u4e00\u53c2\u6570\u8c03\u7528\u4e86\u591a\u6b21\uff0c\u5219\u4f18\u5148\u91c7\u7528\u9996\u6b21\u8c03\u7528\u5e76\u5ffd\u7565\u5269\u4e0b\u7684\u8c03\u7528\n        // \u5b9e\u73b0\u8fd9\u6761\u9700\u8981\u524d\u9762\u52a0\u4e00\u4e2a\u53d8\u91cf called\n      } catch (err) {\n        if (called) return;\n        reject(err);\n      }\n    } else {\n      resolve(res);\n    }\n  } else {\n    resolve(res);\n  }\n}\n\nclass MyPromise {\n  constructor(executor) {\n    try {\n      executor(this.resolve, this.reject);\n    } catch (err) {\n      this.reject(err);\n    }\n  }\n\n  status = PENDING;\n  value = null;\n  reason = null;\n\n  onFulfilledCallback = [];\n  onRejectedCallback = [];\n\n  resolve = (value) => {\n    if (this.status === PENDING) {\n      this.status = FULFILLED;\n      this.value = value;\n\n      while (this.onFulfilledCallback.length) {\n        this.onFulfilledCallback.shift()(value);\n      }\n    }\n  };\n\n  reject = (reason) => {\n    if (this.status === PENDING) {\n      this.status = REJECTED;\n      this.reason = reason;\n\n      while (this.onRejectedCallback.length) {\n        this.onRejectedCallback.shift()(reason);\n      }\n    }\n  };\n\n  static resolve(arg) {\n    if (arg instanceof MyPromise) {\n      // \u4f20\u5165\u7684\u662fpromise\u5b9e\u4f8b\u5c31\u76f4\u63a5\u8fd4\u56de\n      return arg;\n    }\n    return new MyPromise((resolve) => {\n      resolve(arg);\n    });\n  }\n\n  static reject(reason) {\n    return new MyPromise((resolve, reject) => {\n      reject(reason);\n    });\n  }\n\n  then(onFulfilled, onRejected) {\n    // \u672a\u4f20\u9012\u7684\u60c5\u51b5\u4e0b\u9ed8\u8ba4\u4f20\u503c\n    const realOnFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;\n    const realOnRejected =\n      typeof onRejected === 'function'\n        ? onRejected\n        : (reason) => {\n            throw reason;\n          };\n\n    const newPromise = new MyPromise((resolve, reject) => {\n      const fulfillMicrotask = () => {\n        queueMicrotask(() => {\n          try {\n            // \u83b7\u53d6\u6210\u529f\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\u7ed3\u679c\n            // \u4f20\u5165 resolvePromise \u96c6\u4e2d\u5904\u7406\n            const res = realOnFulfilled(this.value);\n            resolvePromise(newPromise, res, resolve, reject);\n          } catch (err) {\n            reject(err);\n          }\n        });\n      };\n      const rejectMicrotask = () => {\n        queueMicrotask(() => {\n          try {\n            // \u83b7\u53d6\u6210\u529f\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\u7ed3\u679c\n            // \u4f20\u5165 resolvePromise \u96c6\u4e2d\u5904\u7406\n            const res = realOnRejected(this.reason);\n            resolvePromise(newPromise, res, resolve, reject);\n          } catch (err) {\n            reject(err);\n          }\n        });\n      };\n      if (this.status === FULFILLED) {\n        fulfillMicrotask();\n      } else if (this.status === REJECTED) {\n        rejectMicrotask();\n      } else if (this.status === PENDING) {\n        this.onFulfilledCallback.push(fulfillMicrotask);\n        this.onRejectedCallback.push(rejectMicrotask);\n      }\n    });\n    return newPromise;\n  }\n}",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("em",null,"Promise.all"))),r.a.createElement(a["a"],{code:"MyPromise.all = function (arg) {\n  if (!Object(arg)[Symbol.iterator]) {\n    throw new Error(typeof arg + ' is not iterator (cannot read property Symbol(Symbol.iterator))');\n  }\n  return new Promise((resolve, reject) => {\n    let iteratorIndex = 0;\n    // \u8fed\u4ee3\u8ba1\u6570\u5668\uff0c\u7528\u4e8e\u8bb0\u5f55\u5f53\u524d\u8fed\u4ee3\u7684\u4f4d\u7f6e\n    let fullCount = 0;\n    // iterator\u5185\u5b8c\u6210\u7684promise\u6570\u91cf\n    let resolveRes = [];\n\n    for (let item of arg) {\n      let resultIndex = iteratorIndex;\n      iteratorIndex += 1;\n      Promise.resolve(item)\n        .then((res) => {\n          resolveRes[resultIndex] = res;\n          fullCount += 1;\n\n          if (fullCount === iteratorIndex) {\n            resolve(resolveRes);\n          }\n        })\n        .catch((err) => {\n          reject(err);\n        });\n    }\n\n    if (iteratorIndex === 0) {\n      // \u5904\u7406\u7a7a\u7684iterator\n      resolve(resolveRes);\n    }\n  });\n};",lang:"js"})))})));n["default"]=e=>{var n=r.a.useContext(s["context"]),l=n.demos;return r.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&s["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(o,{demos:l})}}}]);