(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[133],{VtIK:function(e,n,l){"use strict";l.r(n);var t=l("q1tI"),o=l.n(t),r=l("dEAq"),a=(l("0H/f"),l("N0lm"),l("DgDr"),l("cGlH"),l("ekZX"),l("Bjia")),c=l("tVxl"),s=(l("1pSt"),o.a.memo((e=>{e.demos;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"\u5fae\u4efb\u52a1"},o.a.createElement(r["AnchorLink"],{to:"#\u5fae\u4efb\u52a1","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u5fae\u4efb\u52a1"),o.a.createElement("hr",null),o.a.createElement("ol",null,o.a.createElement("li",null,"\u5f02\u6b65\u4efb\u52a1")),o.a.createElement("ul",null,o.a.createElement("li",null,"Promise \u7684\u884c\u4e3a\u4e0e\u4e00\u4e2a\u5f02\u6b65\u4efb\u52a1\u662f\u4e00\u81f4\u7684\uff0c\u5b83\u7684\u5206\u53d1\u5668 ",o.a.createElement("code",null,"then"),"\u3001",o.a.createElement("code",null,"catch"),"\u3001",o.a.createElement("code",null,"finally")," \u90fd\u662f\u5f02\u6b65\u7684\uff0c\u56e0\u6b64\uff0c\u5b83\u4eec\u4f1a\u5728\u540c\u6b65\u4ee3\u7801\u5b8c\u6210\u540e\u624d\u4f1a\u88ab\u8c03\u7528"),o.a.createElement("li",null,"\u5f53\u4e00\u4e2a ",o.a.createElement("code",null,"promise")," \u51c6\u5907\u5c31\u7eea\u65f6\uff0c\u5373\u5df2\u7ecf ",o.a.createElement("code",null,"resolved")," \u6216\u8005 ",o.a.createElement("code",null,"rejected")," \u65f6\uff0c\u5b83\u7684\u5904\u7406\u7a0b\u5e8f\u4f1a\u88ab\u653e\u5165\u4efb\u52a1\u961f\u5217\u4e2d\uff0c\u4f46\u5b83\u4eec\u4e0d\u4f1a\u7acb\u523b\u88ab\u8c03\u7528\uff0c\u53ea\u6709\u5728 ",o.a.createElement("code",null,"JavaScript")," \u6267\u884c\u5b8c\u540c\u6b65\u7684\u4ee3\u7801\u540e\uff0c\u5b83\u624d\u4f1a\u4ece\u961f\u5217\u4e2d\u53bb\u83b7\u53d6\u5e76\u6267\u884c\u5b83")),o.a.createElement(a["a"],{code:"console.log('script start ', new Date().toLocaleTimeString() + ':' + new Date().getMilliseconds());\n\nnew Promise((resolve, rejct) => {\n  console.log(\n    'promise called ',\n    new Date().toLocaleTimeString() + ':' + new Date().getMilliseconds(),\n  );\n  setTimeout(() => {\n    resolve(\n      'status fulfilling..., ' +\n        new Date().toLocaleTimeString() +\n        ':' +\n        new Date().getMilliseconds(),\n    );\n  }, 1000);\n}).then((res) => {\n  console.log('change time ', res);\n  console.log(\n    'then called time ' + new Date().toLocaleTimeString() + ':' + new Date().getMilliseconds(),\n  );\n});\n\nconsole.log('script end ', new Date().toLocaleTimeString() + ':' + new Date().getMilliseconds());\n\n// script start  \u4e0b\u53481:40:36:832\n// promise called  \u4e0b\u53481:40:36:832\n// script end  \u4e0b\u53481:40:36:832\n// change time  status fulfilling..., \u4e0b\u53481:40:37:834\n// then called time \u4e0b\u53481:40:37:834",lang:"js"}),o.a.createElement("ol",{start:2},o.a.createElement("li",null,"\u5fae\u4efb\u52a1\u7684\u6ce8\u518c\u4e0e\u6267\u884c")),o.a.createElement("ul",null,o.a.createElement("li",null,"\u5728 ",o.a.createElement("code",null,"js")," \u4e2d\uff0c\u4e8b\u4ef6\u673a\u5236\u662f\u5148\u6ce8\u518c\u5148\u6267\u884c\uff0c\u5373\u961f\u5217\u7684\u6a21\u5f0f\u3002\u5f53 ",o.a.createElement("code",null,"Promise")," \u72b6\u6001\u53d8\u5316\u65f6\uff0c\u4f1a\u5f00\u59cb\u5c06\u8be5 ",o.a.createElement("code",null,"promise")," \u94fe\u63a5\u7684 ",o.a.createElement("code",null,"then")," \u65b9\u6cd5\u6ce8\u518c\u5230\u5fae\u4efb\u52a1\u961f\u5217\uff0c\u7b49\u5230\u540c\u6b65\u4efb\u52a1\u6267\u884c\u5b8c\u6210\uff0c",o.a.createElement("code",null,"JavaScript")," \u624d\u4f1a\u53bb\u8bfb\u53d6\u5fae\u4efb\u52a1\u961f\u5217\u7684\u4efb\u52a1\u5e76\u5c06\u8fd9\u4e9b\u5fae\u4efb\u52a1\u6309\u7167\u6ce8\u518c\u7684\u987a\u5e8f\u4e00\u4e2a\u4e2a\u8fdb\u884c\u6267\u884c")),o.a.createElement(a["a"],{code:"new Promise((resolve, reject) => {\n  resolve();\n})\n  .then(() => {\n    console.log('\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c');\n  })\n  .then(() => {\n    console.log('\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c');\n  })\n  .then(() => {\n    console.log('\u7b2c\u4e09\u4e2athen\u5f00\u59cb\u6267\u884c');\n  });\n\nPromise.resolve()\n  .then(() => {\n    console.log('\u7b2c\u4e00\u4e2athen2\u5f00\u59cb\u6267\u884c');\n  })\n  .then(() => {\n    console.log('\u7b2c\u4e8c\u4e2athen2\u5f00\u59cb\u6267\u884c');\n  })\n  .then(() => {\n    console.log('\u7b2c\u4e09\u4e2athen2\u5f00\u59cb\u6267\u884c');\n  })\n  .then(() => {\n    console.log('\u7b2c\u56db\u4e2athen2\u5f00\u59cb\u6267\u884c');\n  });\n\n// \u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u7b2c\u4e00\u4e2athen2\u5f00\u59cb\u6267\u884c\n// \u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u7b2c\u4e8c\u4e2athen2\u5f00\u59cb\u6267\u884c\n// \u7b2c\u4e09\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u7b2c\u4e09\u4e2athen2\u5f00\u59cb\u6267\u884c\n// \u7b2c\u56db\u4e2athen2\u5f00\u59cb\u6267\u884c",lang:"js"}),o.a.createElement("ul",null,o.a.createElement("li",null,"\u53ef\u4ee5\u53d1\u73b0 ",o.a.createElement("code",null,"then")," \u7684\u6ce8\u518c\u6709\u4e24\u79cd\u60c5\u51b5\uff1a\u5728\u72b6\u6001\u8f6c\u53d8\u4ee5\u540e\uff0c\u540c\u6b65\u6267\u884c\u7684 ",o.a.createElement("code",null,"then")," \u4f1a\u88ab\u6ce8\u518c\u5230\u5fae\u4efb\u52a1\u961f\u5217\uff1b",o.a.createElement("code",null,"then")," \u88ab\u6267\u884c\u5b8c\u4ee5\u540e\uff0c\u63a5\u7740\u4f1a\u6ce8\u518c\u8be5 ",o.a.createElement("code",null,"then")," \u7684\u4e0b\u4e00\u4e2a ",o.a.createElement("code",null,"then")," \u65b9\u6cd5\u3002\u56e0\u6b64\uff0c\u4f1a\u51fa\u73b0\u5185\u5916 ",o.a.createElement("code",null,"then")," \u4ea4\u66ff\u6267\u884c\uff0c\u4ea4\u66ff\u6ce8\u518c\u7684\u60c5\u51b5\u3002")),o.a.createElement(a["a"],{code:"new Promise((resolve, reject) => {\n  console.log('\u5916\u90e8promise');\n  resolve();\n})\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c');\n    new Promise((resolve, reject) => {\n      console.log('\u5185\u90e8promise');\n      resolve();\n    })\n      .then(() => {\n        console.log('\u5185\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c');\n      })\n      .then(() => {\n        console.log('\u5185\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c');\n      });\n  })\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c');\n  })\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e09\u4e2athen\u5f00\u59cb\u6267\u884c');\n  });\n\n// \u5916\u90e8promise\n// \u5916\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5185\u90e8promise\n// \u5185\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5916\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5185\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5916\u90e8\u7b2c\u4e09\u4e2athen\u5f00\u59cb\u6267\u884c",lang:"js"}),o.a.createElement("ul",null,o.a.createElement("li",null,"\u5728\u8fd9\u91cc\uff0c",o.a.createElement("code",null,"then")," \u6ce8\u518c\u6dfb\u52a0\u5230\u5fae\u4efb\u52a1\u961f\u5217\uff0c\u5e76\u4e0d\u4ee3\u8868 ",o.a.createElement("code",null,"then")," \u65b9\u6cd5\u7684\u6267\u884c\uff0c\u5e76\u4e14 ",o.a.createElement("code",null,"then")," \u4f1a\u7b49\u5230\u4e0a\u4e00\u4e2a\u72b6\u6001\u53d8\u5316\u4ee5\u540e\u624d\u4f1a\u88ab\u6ce8\u518c\u5230\u5fae\u4efb\u52a1\u961f\u5217\uff0c\u56e0\u4e3a\u53ef\u4ee5\u7406\u89e3\u4e3a ",o.a.createElement("code",null,"then")," \u6ca1\u6ce8\u518c\u5230\u5fae\u4efb\u52a1\u5c31\u6ca1\u6709\u6267\u884c"),o.a.createElement("li",null,"\u94fe\u5f0f\u8c03\u7528\u7684\u6ce8\u518c\u662f\u524d\u540e\u4f9d\u8d56\u7684\uff0c\u540e\u7eed\u7684 ",o.a.createElement("code",null,"then")," \u9700\u8981\u7b49\u5230\u524d\u4e00\u4e2a ",o.a.createElement("code",null,"then")," \u7684\u540c\u6b65\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\u624d\u4f1a\u88ab\u6ce8\u518c\u5230\u5fae\u4efb\u52a1\u3002\u5e76\u4e14\uff0c\u975e\u94fe\u5f0f\u8c03\u7528\u591a\u4e2a ",o.a.createElement("code",null,"then")," \u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u4f9d\u7167\u987a\u5e8f\u540c\u6b65\u6ce8\u518c\u5230\u5fae\u4efb\u52a1\u961f\u5217")),o.a.createElement(a["a"],{code:"let p = new Promise((resolve, reject) => {\n  console.log('\u5916\u90e8promise');\n  resolve();\n});\n\np.then(() => {\n  console.log('\u5916\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c');\n  new Promise((resolve, reject) => {\n    console.log('\u5185\u90e8promise');\n    resolve();\n  })\n    .then(() => {\n      console.log('\u5185\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c');\n    })\n    .then(() => {\n      console.log('\u5185\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c');\n    });\n})\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c');\n  })\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e09\u4e2athen\u5f00\u59cb\u6267\u884c');\n  });\n\np.then(() => {\n  console.log('\u5916\u90e8\u7b2c\u56db\u4e2athen\u5f00\u59cb\u6267\u884c');\n});\n\n// \u5916\u90e8promise\n// \u5916\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5185\u90e8promise\n// \u5916\u90e8\u7b2c\u56db\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5185\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5916\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5185\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5916\u90e8\u7b2c\u4e09\u4e2athen\u5f00\u59cb\u6267\u884c",lang:"js"}),o.a.createElement("ul",null,o.a.createElement("li",null,"\u56e0\u6b64\uff0c\u53ef\u4ee5\u77e5\u9053\uff0c",o.a.createElement("code",null,"then")," \u7684\u6ce8\u518c\u4e0e\u6267\u884c\u662f\u5206\u5f00\u7684\uff0c\u88ab\u6dfb\u52a0\u5230\u5fae\u4efb\u52a1\u961f\u5217\u5e76\u4e0d\u4f1a\u9a6c\u4e0a\u6267\u884c\uff0c\u800c\u662f\u8981\u6839\u636e\u6ce8\u518c\u5230\u961f\u5217\u4e2d\u7684\u987a\u5e8f\u4f9d\u6b21\u8fdb\u884c\u6267\u884c\uff0c\u4f46\u8fd9\u6709\u4e00\u4e2a\u524d\u63d0\uff1a\u9700\u8981\u540c\u6b65\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\uff0c\u4efb\u52a1\u961f\u5217\u7684\u4efb\u52a1\u624d\u4f1a\u88ab\u8bfb\u53d6")),o.a.createElement("ol",{start:3},o.a.createElement("li",null,"\u5f02\u6b65\u7684\u5185\u90e8\u8fd4\u56de\u503c")),o.a.createElement("ul",null,o.a.createElement("li",null,"\u5f53\u5728\u5185\u90e8 ",o.a.createElement("code",null,"return")," \u4e00\u4e2a\u503c\u6216 ",o.a.createElement("code",null,"resolve")," \u65f6\uff0c\u5982\u679c\u5728\u8fd9\u4e2a\u503c\u662f\u4e00\u4e2a ",o.a.createElement("code",null,"promise")," \u5bf9\u8c61\u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u5c06\u8fd9\u4e2a ",o.a.createElement("code",null,"Promise")," \u7684\u72b6\u6001\u8f6c\u6362\u4ee5\u540e\u7684\u503c\u6216\u9519\u8bef\u4f5c\u4e3a\u65b0\u7684 ",o.a.createElement("code",null,"Promise")," \u7684\u503c\u6216\u9519\u8bef\uff0c\u518d\u5c06\u8fd9\u4e2a\u65b0\u7684 ",o.a.createElement("code",null,"promise")," \u8fd4\u56de\u51fa\u53bb")),o.a.createElement(a["a"],{code:"new Promise((resolve, reject) => {\n  console.log('\u5916\u90e8promise');\n  resolve();\n})\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c');\n    return new Promise((resolve, reject) => {\n      console.log('\u5185\u90e8promise');\n      resolve();\n    })\n      .then(() => {\n        console.log('\u5185\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c');\n      })\n      .then(() => {\n        console.log('\u5185\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c');\n      });\n  })\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c');\n  })\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e09\u4e2athen\u5f00\u59cb\u6267\u884c');\n  })\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u56db\u4e2athen\u5f00\u59cb\u6267\u884c');\n  })\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e94\u4e2athen\u5f00\u59cb\u6267\u884c');\n  });\n\n// \u5916\u90e8promise\n// \u5916\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5185\u90e8promise\n// \u5185\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5185\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5916\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5916\u90e8\u7b2c\u4e09\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5916\u90e8\u7b2c\u56db\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5916\u90e8\u7b2c\u4e94\u4e2athen\u5f00\u59cb\u6267\u884c",lang:"js"}),o.a.createElement("ul",null,o.a.createElement("li",null,"\u5f53\u6211\u4eec\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 ",o.a.createElement("code",null,"promise")," \u5b9e\u4f8b\u65f6\uff0c\u5916\u5c42\u7684 ",o.a.createElement("code",null,"then")," \u9700\u8981\u7b49\u5f85\u91cc\u9762\u7684\u6267\u884c\u5b8c\u6210\uff0c",o.a.createElement("code",null,"return")," \u624d\u7b97\u5b8c\u6210\uff0c\u8fd9\u4ee3\u8868\u5916\u90e8\u7684\u7b2c\u4e8c\u4e2a ",o.a.createElement("code",null,"then")," \u7684\u6ce8\u518c\uff08\u6b64\u65f6\u4e0d\u662f\u6267\u884c\uff09\u9700\u8981\u7b49\u5f85 ",o.a.createElement("code",null,"return")," \u4e4b\u540e\u7684\u7ed3\u679c")),o.a.createElement(a["a"],{code:"new Promise((resolve, reject) => {\n  console.log('\u5916\u90e8promise');\n  resolve();\n})\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c');\n    new Promise((resolve, reject) => {\n      console.log('\u5185\u90e8promise');\n      resolve();\n    })\n      .then(() => {\n        console.log('\u5185\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c');\n      })\n      .then(() => {\n        console.log('\u5185\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c');\n      });\n  })\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c');\n  })\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e09\u4e2athen\u5f00\u59cb\u6267\u884c');\n  })\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u56db\u4e2athen\u5f00\u59cb\u6267\u884c');\n  })\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e94\u4e2athen\u5f00\u59cb\u6267\u884c');\n  });\n\n// \u5916\u90e8promise\n// \u5916\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5185\u90e8promise\n// \u5185\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5916\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5185\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5916\u90e8\u7b2c\u4e09\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5916\u90e8\u7b2c\u56db\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5916\u90e8\u7b2c\u4e94\u4e2athen\u5f00\u59cb\u6267\u884c",lang:"js"}),o.a.createElement("ul",null,o.a.createElement("li",null,"\u8fd9\u91cc\u6ca1\u6709\u624b\u52a8 ",o.a.createElement("code",null,"return")," \u4ee5\u540e\uff0c\u6211\u4eec\u77e5\u9053 ",o.a.createElement("code",null,"resolve")," \u7684\u6267\u884c\u4f1a\u521b\u5efa\u4e00\u4e2a ",o.a.createElement("code",null,"Promise")," \u5e76\u5c06\u503c\u6216\u9519\u8bef\u5305\u88c5\u8fdb\u53bb\uff0c\u56e0\u6b64\uff0c\u8fd9\u91cc\u5c31\u662f\u5305\u88c5\u7684 ",o.a.createElement("code",null,"undefined"),"\u3002\u6240\u4ee5\uff0c\u5f53\u5185\u90e8\u7684 ",o.a.createElement("code",null,"promise")," \u7684\u540c\u6b65\u4ee3\u7801\u6267\u884c\u5b8c\u6210\u4ee5\u540e(\u6ce8\u518c\u7b2c\u4e00\u4e2a then \u4ee5\u540e)\uff0c\u63a7\u5236\u6743\u4f1a\u4ea4\u6362\u5230\u5916\u90e8")),o.a.createElement(a["a"],{code:"new Promise((resolve, reject) => {\n  console.log('\u5916\u90e8promise');\n  resolve();\n})\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c');\n    return Promise.resolve()\n      .then(() => {\n        console.log('\u5185\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c');\n      })\n      .then(() => {\n        console.log('\u5185\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c');\n      });\n  })\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c');\n  })\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e09\u4e2athen\u5f00\u59cb\u6267\u884c');\n  });\n\nPromise.resolve()\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e00\u4e2athen2\u5f00\u59cb\u6267\u884c');\n  })\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e8c\u4e2athen2\u5f00\u59cb\u6267\u884c');\n  })\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e09\u4e2athen2\u5f00\u59cb\u6267\u884c');\n  })\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u56db\u4e2athen2\u5f00\u59cb\u6267\u884c');\n  })\n  .then(() => {\n    console.log('\u5916\u90e8\u7b2c\u4e94\u4e2athen2\u5f00\u59cb\u6267\u884c');\n  });\n\n// \u5916\u90e8promise\n// \u5916\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5916\u90e8\u7b2c\u4e00\u4e2athen2\u5f00\u59cb\u6267\u884c\n// \u5185\u90e8\u7b2c\u4e00\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5916\u90e8\u7b2c\u4e8c\u4e2athen2\u5f00\u59cb\u6267\u884c\n// \u5185\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5916\u90e8\u7b2c\u4e09\u4e2athen2\u5f00\u59cb\u6267\u884c\n// \u5916\u90e8\u7b2c\u56db\u4e2athen2\u5f00\u59cb\u6267\u884c\n// \u5916\u90e8\u7b2c\u4e8c\u4e2athen\u5f00\u59cb\u6267\u884c\n// \u5916\u90e8\u7b2c\u4e94\u4e2athen2\u5f00\u59cb\u6267\u884c\n// \u5916\u90e8\u7b2c\u4e09\u4e2athen\u5f00\u59cb\u6267\u884c",lang:"js"}),o.a.createElement("ul",null,o.a.createElement("li",null,"\u5728\u8fd9\u91cc\uff0c",o.a.createElement("code",null,"return Promise.resolve()")," \u521b\u5efa\u4e86\u4e00\u4e2a ",o.a.createElement("code",null,"Promise")," \u5b9e\u4f8b\uff0c\u5e76\u5c06\u72b6\u6001\u8bbe\u7f6e\u4e3a ",o.a.createElement("code",null,"fulfilled"),"\uff0c\u4e4b\u540e\u8fd9\u91cc\u5c31\u662f\u8fd4\u56de\u7684\u662f\u7ecf\u8fc7 ",o.a.createElement("code",null,"then")," \u5904\u7406\u540e\u7684\u7ed3\u679c\uff0c\u56e0\u6b64\uff0c\u4f1a\u5c06 ",o.a.createElement("code",null,"then")," \u6ce8\u518c\u5230\u5fae\u4efb\u52a1\u961f\u5217"),o.a.createElement("li",null,"\u800c\u5728\u6d4f\u89c8\u5668\u91cc\u9762\uff0c\u5f53 ",o.a.createElement("code",null,"return")," \u6216 ",o.a.createElement("code",null,"resolve")," \u4e00\u4e2a ",o.a.createElement("code",null,"Promise")," \u5bf9\u8c61\u65f6\uff0c\u5728\u8fd9\u4e2a ",o.a.createElement("code",null,"Promise")," \u7684\u72b6\u6001\u6539\u53d8\u6216\u5904\u7406\u5b8c\u6bd5\u540e\uff0c\u5f97\u5230\u8fd9\u4e2a ",o.a.createElement("code",null,"Promise")," \u7684\u503c\u4e4b\u540e\uff0c\u4f1a\u628a\u8fd9\u4e2a\u503c\u7528\u65b0\u7684 ",o.a.createElement("code",null,"Promise")," \u5305\u88c5\u8d77\u6765\uff0c\u5e76\u6ce8\u518c\u5230\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\uff0c\u4e5f\u5c31\u662f\u591a\u5b89\u6392\u4e00\u4e2a ",o.a.createElement("code",null,"job"),"\uff0c\u800c ",o.a.createElement("code",null,"return")," \u5c06\u503c(\u8fd9\u4e2a\u503c\u9700\u8981\u662f\u4e00\u4e2a promise)\u5411\u5916\u4f20\u9012\u65f6(\u9700\u8981\u540e\u9762\u6ca1\u6709 then \u4e86)\uff0c\u4f1a\u9690\u5f0f\u8c03\u7528\u4e00\u4e2a ",o.a.createElement("code",null,"then")," \u65b9\u6cd5\u5e76\u5c06\u503c\u6216\u9519\u8bef\u4f20\u9012\u7ed9\u65b0\u7684 ",o.a.createElement("code",null,"promise"),"\uff0c\u8fd9\u91cc\u4f1a\u4ea7\u751f\u7b2c\u4e8c\u4e2a\u5fae\u4efb\u52a1")),o.a.createElement(a["a"],{code:"new Promise((resolve) => {\n  resolve(Promise.resolve(3));\n}).then((res) => {\n  console.log(res);\n});\n\n// \u7b49\u540c\u4e8e\u4e0a\u8ff0\u4ee3\u7801\n// new Promise(resolve => {\n//     resolve(3);\n// })\n// .then(res=>res)\n// .then(res=>res)\n// .then((res) => {\n//     console.log(res)\n// })\n\nPromise.resolve()\n  .then(() => {\n    console.log(1);\n  })\n  .then(() => {\n    console.log(2);\n  })\n  .then(() => {\n    console.log(4);\n  })\n  .then(() => {\n    console.log(5);\n  })\n  .then(() => {\n    console.log(6);\n  });\n\n// 1\n// 2\n// 3\n// 4\n// 5\n// 6",lang:"js"}),o.a.createElement(a["a"],{code:"Promise.resolve()\n  .then(() => {\n    return new Promise((resolve) => {\n      resolve(3);\n    });\n    // return Promise.resolve(3)\n  })\n  .then((res) => {\n    console.log(res);\n  });\n\n// \u7b49\u540c\u4e8e\u4e0a\u8ff0\u4ee3\u7801\n// Promise.resolve().then(() => {\n//     return 3\n// })\n// .then(res=>res)\n// .then(res=>res)\n// .then((res) => {\n//     console.log(res)\n// })\n\nPromise.resolve()\n  .then(() => {\n    console.log(1);\n  })\n  .then(() => {\n    console.log(2);\n  })\n  .then(() => {\n    console.log(4);\n  })\n  .then(() => {\n    console.log(5);\n  })\n  .then(() => {\n    console.log(6);\n  });\n\n// 1\n// 2\n// 4\n// 3\n// 5\n// 6",lang:"js"}),o.a.createElement("ul",null,o.a.createElement("li",null,"\u56e0\u6b64\uff0c\u5728 ",o.a.createElement("code",null,"return")," \u4e00\u4e2a ",o.a.createElement("code",null,"Promise")," \u65f6\uff0c\u4f1a\u6bd4\u6b63\u5e38 ",o.a.createElement("code",null,"return")," \u4e00\u4e2a\u975e ",o.a.createElement("code",null,"Promise")," \u7684\u503c\uff0c\u591a\u6ce8\u518c\u4e24\u4e2a\u4e2a\u5fae\u4efb\u52a1")),o.a.createElement(a["a"],{code:"Promise.resolve()\n  .then(() => {\n    return new Promise((resolve) => {\n      resolve(); // Promise.resolve()\n    })\n      .then((res) => {\n        console.log(0);\n      })\n      .then((res) => {\n        console.log(0.1);\n      })\n      .then((res) => {\n        console.log(0.3);\n      });\n  })\n  .then((res) => {\n    console.log(0.2);\n  });\n\nPromise.resolve()\n  .then(() => {\n    console.log(1);\n  })\n  .then(() => {\n    console.log(2);\n  })\n  .then(() => {\n    console.log(3);\n  })\n  .then(() => {\n    console.log(4);\n  })\n  .then(() => {\n    console.log(5);\n  })\n  .then(() => {\n    console.log(6);\n  });\n\n// 1\n// 0\n// 2\n// 0.1\n// 3\n// 0.3\n// 4\n// 5\n// 0.2\n// 6",lang:"js"}),o.a.createElement("ul",null,o.a.createElement("li",null,"\u4f46\u662f\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u8fd4\u56de\u7684 ",o.a.createElement("code",null,"promise")," \u662f\u7ecf\u8fc7 ",o.a.createElement("code",null,"then")," \u5904\u7406\u540e\u7684\uff0c\u90a3\u4e48\u5c31\u53ea\u4f1a\u5728 ",o.a.createElement("code",null,"return")," \u65f6\u521b\u5efa\u4e00\u4e2a\u5fae\u4efb\u52a1\uff0c\u800c\u5305\u88c5\u503c\u7684\u8fc7\u7a0b\uff0c",o.a.createElement("code",null,"then")," \u5185\u90e8\u5df2\u7ecf\u5e2e\u6211\u4eec\u8fdb\u884c\u4e86\u5904\u7406\uff0c\u56e0\u6b64\u4e0d\u4f1a\u518d\u4ea7\u751f\u5fae\u4efb\u52a1(\u4f46 then \u672c\u8eab\u4f1a\u6ce8\u518c\u4e00\u4e2a\u5fae\u4efb\u52a1)")),o.a.createElement(a["a"],{code:"Promise.resolve()\n  .then(() => {\n    return Promise.resolve(1);\n  })\n  .then((res) => console.log(res));\n\n// Promise.resolve().then(() => {\n//     return 1\n// })\n// .then(res=>res)\n// .then(res=>res)\n// .then(res=>console.log(res))",lang:"js"}),o.a.createElement(a["a"],{code:"Promise.resolve()\n  .then(() => {\n    return Promise.resolve(1).then((res) => res);\n  })\n  .then((res) => console.log(res));\n\n// Promise.resolve().then(() => {\n//     return 1\n// })\n// .then(res=>res)\n// .then(res=>res)\n// .then(res=>console.log(res))",lang:"js"}),o.a.createElement("ul",null,o.a.createElement("li",null,"\u9700\u8981\u6ce8\u610f\u4ee5\u4e0a\u4e24\u79cd\u60c5\u51b5\u7684\u533a\u522b\uff0c\u4e00\u4e2a\u662f\u4f1a\u591a\u4ea7\u751f\u4e00\u4e2a\u5fae\u4efb\u52a1\uff0c\u800c\u53e6\u4e00\u4e2a\u4f1a\u591a\u4ea7\u751f\u4e24\u4e2a\u5fae\u4efb\u52a1\u3002\u7504\u522b\u4ee5\u4e0b\u4ee3\u7801\u7684\u533a\u522b\u4ee5\u53ca\u5fae\u4efb\u52a1\u6ce8\u518c\u4e0e\u6267\u884c\u7684\u65f6\u673a")),o.a.createElement(a["a"],{code:"// promise1\nPromise.resolve()\n  .then(() => {\n    console.log(0);\n    return Promise.resolve(2);\n  })\n  .then((res) => {\n    console.log(5);\n  });\n\nPromise.resolve()\n  .then(() => {\n    console.log(1);\n  })\n  .then(() => {\n    console.log(3);\n  })\n  .then(() => {\n    console.log(4);\n  })\n  .then(() => {\n    console.log(6);\n  })\n  .then(() => {\n    console.log(7);\n  });",lang:"js"}),o.a.createElement(a["a"],{code:"// promise2\nPromise.resolve()\n  .then(() => {\n    console.log(0);\n    return Promise.resolve(2).then((res) => {\n      console.log(res);\n      return res;\n    });\n  })\n  .then((res) => {\n    console.log(5);\n  });\n\nPromise.resolve()\n  .then(() => {\n    console.log(1);\n  })\n  .then(() => {\n    console.log(3);\n  })\n  .then(() => {\n    console.log(4);\n  })\n  .then(() => {\n    console.log(6);\n  })\n  .then(() => {\n    console.log(7);\n  });",lang:"js"}),o.a.createElement(a["a"],{code:"// promise3\nPromise.resolve()\n  .then(() => {\n    console.log(0);\n    return Promise.resolve(2).then((res) => console.log(res));\n  })\n  .then((res) => {\n    console.log(5);\n  });\n\nPromise.resolve()\n  .then(() => {\n    console.log(1);\n  })\n  .then(() => {\n    console.log(3);\n  })\n  .then(() => {\n    console.log(4);\n  })\n  .then(() => {\n    console.log(6);\n  })\n  .then(() => {\n    console.log(7);\n  });",lang:"js"}),o.a.createElement(a["a"],{code:"// promise4\nPromise.resolve()\n  .then(() => {\n    console.log(0);\n    return Promise.resolve(2).then((res) => res);\n  })\n  .then((res) => {\n    console.log(5);\n  });\n\nPromise.resolve()\n  .then(() => {\n    console.log(1);\n  })\n  .then(() => {\n    console.log(3);\n  })\n  .then(() => {\n    console.log(4);\n  })\n  .then(() => {\n    console.log(6);\n  })\n  .then(() => {\n    console.log(7);\n  });",lang:"js"}),o.a.createElement(c["a"],null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"\u4ee3\u7801\u5757"),o.a.createElement("th",null,"\u6b21\u5e8f 1"),o.a.createElement("th",null,"\u6b21\u5e8f 2"),o.a.createElement("th",null,"\u6b21\u5e8f 3"),o.a.createElement("th",null,"\u6b21\u5e8f 4"),o.a.createElement("th",null,"\u6b21\u5e8f 5"),o.a.createElement("th",null,"\u6b21\u5e8f 6"),o.a.createElement("th",null,"\u6b21\u5e8f 7"),o.a.createElement("th",null,"\u6b21\u5e8f 8"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"promise1"),o.a.createElement("td",null,"0"),o.a.createElement("td",null,"1"),o.a.createElement("td",null,"3"),o.a.createElement("td",null,"4"),o.a.createElement("td",null,"5"),o.a.createElement("td",null,"6"),o.a.createElement("td",null,"7"),o.a.createElement("td",null,"-")),o.a.createElement("tr",null,o.a.createElement("td",null,"promise2"),o.a.createElement("td",null,"0"),o.a.createElement("td",null,"1"),o.a.createElement("td",null,"2"),o.a.createElement("td",null,"3"),o.a.createElement("td",null,"4"),o.a.createElement("td",null,"5"),o.a.createElement("td",null,"6"),o.a.createElement("td",null,"7")),o.a.createElement("tr",null,o.a.createElement("td",null,"promise3"),o.a.createElement("td",null,"0"),o.a.createElement("td",null,"1"),o.a.createElement("td",null,"2"),o.a.createElement("td",null,"3"),o.a.createElement("td",null,"4"),o.a.createElement("td",null,"5"),o.a.createElement("td",null,"6"),o.a.createElement("td",null,"7")),o.a.createElement("tr",null,o.a.createElement("td",null,"promise4"),o.a.createElement("td",null,"0"),o.a.createElement("td",null,"1"),o.a.createElement("td",null,"3"),o.a.createElement("td",null,"4"),o.a.createElement("td",null,"5"),o.a.createElement("td",null,"6"),o.a.createElement("td",null,"7"),o.a.createElement("td",null,"-"))))))})));n["default"]=e=>{var n=o.a.useContext(r["context"]),l=n.demos;return o.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),o.a.createElement(s,{demos:l})}}}]);