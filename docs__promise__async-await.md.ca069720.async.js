(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[128],{F1VQ:function(e,n,t){"use strict";t.r(n);var l=t("q1tI"),a=t.n(l),r=t("dEAq"),c=(t("0H/f"),t("N0lm"),t("DgDr"),t("cGlH"),t("ekZX"),t("Bjia")),s=(t("tVxl"),t("1pSt"),a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"async"},a.a.createElement(r["AnchorLink"],{to:"#async","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Async"),a.a.createElement("hr",null),a.a.createElement("ol",null,a.a.createElement("li",null,"async \u51fd\u6570")),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"async")," \u51fd\u6570\u662f\u4f7f\u7528 ",a.a.createElement("code",null,"async")," \u5173\u952e\u5b57\u58f0\u660e\u7684\u51fd\u6570\uff0c\u5b83\u5c5e\u4e8e ",a.a.createElement("code",null,"AsyncFunction")," \u6784\u9020\u51fd\u6570\u7684\u5b9e\u4f8b\uff0c\u5141\u8bb8\u5728\u4f7f\u7528 ",a.a.createElement("code",null,"async")," \u58f0\u660e\u7684\u51fd\u6570\u5185\u4f7f\u7528 ",a.a.createElement("code",null,"await")," \u5173\u952e\u5b57\u3002",a.a.createElement("code",null,"ES6")," \u4e2d\u7684 ",a.a.createElement("code",null,"class")," \u4e5f\u652f\u6301\u5c06\u65b9\u6cd5\u8f6c\u5316\u4e3a\u5f02\u6b65\u5f62\u5f0f\u7684\u65b9\u6cd5"),a.a.createElement("li",null,"\u642d\u914d\u4f7f\u7528 ",a.a.createElement("code",null,"async")," \u548c ",a.a.createElement("code",null,"await")," \u53ef\u4ee5\u8ba9\u6211\u4eec\u7528\u66f4\u7b80\u6d01\u7684\u65b9\u5f0f\u4e66\u5199\u57fa\u4e8e ",a.a.createElement("code",null,"Promise")," \u7684\u5f02\u6b65\u884c\u4e3a")),a.a.createElement(c["a"],{code:"function testPromise() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve('1s\u540e\u89e6\u53d1');\n    }, 1000);\n  });\n}\n\nasync function asyncTest() {\n  console.log('code start');\n  const res = await testPromise();\n  console.log(res);\n}\n\nasyncTest();\n\n// code start\n// 1s\u540e\u89e6\u53d1",lang:"js"}),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"async \u51fd\u6570\u7684\u8fd4\u56de\u503c")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u4f7f\u7528 ",a.a.createElement("code",null,"async")," \u58f0\u660e\u7684\u51fd\u6570\u7684\u8fd4\u56de\u503c\u662f\u4e00\u4e2a ",a.a.createElement("code",null,"Promise"),"\uff0c\u5982\u679c\u4e00\u4e2a ",a.a.createElement("code",null,"async")," \u51fd\u6570\u7684\u8fd4\u56de\u503c\u770b\u8d77\u6765\u4e0d\u662f ",a.a.createElement("code",null,"promise"),"\uff0c\u90a3\u4e48\u5b83\u5c06\u4f1a\u88ab\u9690\u5f0f\u5730\u5305\u88c5\u5728\u4e00\u4e2a ",a.a.createElement("code",null,"promise")," \u4e2d\u3002\u8fd9\u4e2a ",a.a.createElement("code",null,"promise")," \u8981\u4e48\u4f1a\u901a\u8fc7\u4e00\u4e2a\u7531 ",a.a.createElement("code",null,"async")," \u51fd\u6570\u8fd4\u56de\u7684\u503c\u88ab\u89e3\u51b3\uff0c\u8981\u4e48\u4f1a\u901a\u8fc7\u4e00\u4e2a\u4ece ",a.a.createElement("code",null,"async")," \u51fd\u6570\u4e2d\u629b\u51fa\u7684\uff08\u6216\u5176\u4e2d\u6ca1\u6709\u88ab\u6355\u83b7\u5230\u7684\uff09\u5f02\u5e38\u88ab\u62d2\u7edd")),a.a.createElement(c["a"],{code:"async function testAsync1() {\n  return 1;\n  // \u7b49\u4ef7\u4e8e return Promise.resolve(1)\n}\n\nlet test1 = testAsync1();\n// Promise\xa0{<fulfilled>: 1}",lang:"js"}),a.a.createElement(c["a"],{code:"async function testAsync2() {\n  return Promise.resolve(2);\n}\n\nlet test2 = testAsync2();\n// Promise\xa0{<fulfilled>: 2}",lang:"js"}),a.a.createElement(c["a"],{code:"async function testAsync3() {\n  throw new Error('new error');\n}\n\nlet test3 = testAsync3();\n// Promise\xa0{<rejected>: Error: new error",lang:"js"}),a.a.createElement("ol",{start:3},a.a.createElement("li",null,"\u5f02\u6b65\u884c\u4e3a\u4e0e\u9519\u8bef\u6355\u83b7")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u53ef\u4ee5\u5728 ",a.a.createElement("code",null,"async")," \u51fd\u6570\u4e2d\u4f7f\u7528\u591a\u4e2a ",a.a.createElement("code",null,"await")," \u8868\u8fbe\u5f0f\u3002",a.a.createElement("code",null,"await")," \u4f1a\u6682\u505c\u6574\u4e2a ",a.a.createElement("code",null,"async")," \u51fd\u6570\u7684\u6267\u884c\u8fc7\u7a0b\u5e76\u8ba9\u51fa\u5176\u63a7\u5236\u6743\uff0c\u76f4\u5230 ",a.a.createElement("code",null,"await")," \u7b49\u5f85\u7684\u90a3\u4e2a\u57fa\u4e8e ",a.a.createElement("code",null,"promise")," \u7684\u5f02\u6b65\u64cd\u4f5c\u6210\u529f\u6216\u5931\u8d25\u4e4b\u540e\u624d\u4f1a\u6062\u590d\u6267\u884c\u3002\u8fd9\u4e2a ",a.a.createElement("code",null,"promise")," \u7684\u89e3\u51b3\u503c\u4f1a\u88ab\u5f53\u4f5c ",a.a.createElement("code",null,"await")," \u8868\u8fbe\u5f0f\u7684\u8fd4\u56de\u503c"),a.a.createElement("li",null,"\u6211\u4eec\u53ef\u4ee5\u628a ",a.a.createElement("code",null,"async")," \u51fd\u6570\u7684\u51fd\u6570\u4f53\u770b\u6210\u662f 0 \u4e2a\u6216\u591a\u4e2a ",a.a.createElement("code",null,"await")," \u8868\u8fbe\u5f0f\u5206\u5272\u5f00\u7684\u3002\u4ece\u7b2c\u4e00\u884c\u4ee3\u7801\u76f4\u5230\uff08\u5e76\u5305\u62ec\uff09\u7b2c\u4e00\u4e2a ",a.a.createElement("code",null,"await")," \u8868\u8fbe\u5f0f\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u90fd\u662f\u540c\u6b65\u8fd0\u884c\u7684\u3002\u8fd9\u6837\u7684\u8bdd\uff0c\u4e00\u4e2a\u4e0d\u542b await \u8868\u8fbe\u5f0f\u7684 async \u51fd\u6570\u662f\u4f1a\u540c\u6b65\u8fd0\u884c\u7684"),a.a.createElement("li",null,"\u7136\u800c\uff0c\u5982\u679c\u51fd\u6570\u4f53\u5185\u6709\u4e00\u4e2a ",a.a.createElement("code",null,"await")," \u8868\u8fbe\u5f0f\uff0casync \u51fd\u6570\u5c31\u4e00\u5b9a\u4f1a\u5f02\u6b65\u6267\u884c\u3002\u82e5\u51fd\u6570\u4f53\u4e2d\u6709\u591a\u4e2a ",a.a.createElement("code",null,"await"),"\uff0c\u90a3\u4e48\u5b83\u4f1a\u5206\u9636\u6bb5\u8fdb\u884c ",a.a.createElement("code",null,"\u8ba9\u51fa\u8fdb\u7a0b-\u6062\u590d\u8fdb\u7a0b")," \u7684\u8fc7\u7a0b\uff0c\u56e0\u6b64\uff0c\u9700\u8981\u6ce8\u610f\u5bf9\u9519\u8bef\u51fd\u6570\u7684\u5904\u7406")),a.a.createElement(c["a"],{code:"async function testAsync1() {\n  let res = await Promise.resolve(1);\n  console.log(res);\n}\n\n// \u4ee5\u4e0b\u4ee3\u7801\u7b49\u4ef7\u4e8e\u4e0a\u8ff0\u4ee3\u7801\nfunction testAsync2() {\n  let res = Promise.resolve(1).then(() => console.log('res', res));\n}\n//'res', Promise\xa0{<fulfilled>: undefined}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5728 ",a.a.createElement("code",null,"await")," \u8868\u8fbe\u5f0f\u4e4b\u540e\u7684\u4ee3\u7801\u53ef\u4ee5\u88ab\u8ba4\u4e3a\u5b58\u5728\u5728 ",a.a.createElement("code",null,"\u94fe\u5f0f\u8c03\u7528")," \u7684 ",a.a.createElement("code",null,"then")," \u56de\u8c03\u4e2d\u3002\u591a\u4e2a ",a.a.createElement("code",null,"await")," \u8868\u8fbe\u5f0f\u90fd\u5c06\u52a0\u5165\u94fe\u5f0f\u8c03\u7528\u7684 ",a.a.createElement("code",null,"then")," \u56de\u8c03\u4e2d\uff0c\u8fd4\u56de\u503c\u5c06\u4f5c\u4e3a\u6700\u540e\u4e00\u4e2a ",a.a.createElement("code",null,"then")," \u56de\u8c03\u7684\u8fd4\u56de\u503c")),a.a.createElement(c["a"],{code:"function testPromise() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve('1s\u540e\u6210\u529f');\n    }, 1000);\n  });\n}\n\nasync function asyncTest() {\n  console.log('code start');\n  const res = await testPromise();\n  console.log('res', res);\n}\n\nasyncTest();\n// code start\n// res 1s\u540e\u6210\u529f\n\n// Promise\xa0{<fulfilled>: undefined}",lang:"js"}),a.a.createElement(c["a"],{code:"function testPromise1() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      reject('1s\u540e\u5931\u8d25');\n    }, 1000);\n  });\n}\n\nasync function asyncTest() {\n  console.log('code start');\n  const res1 = await testPromise1();\n  return res1;\n}\n\nasyncTest();\n// code start\n// Uncaught (in promise) 1s\u540e\u5931\u8d25\n// Promise\xa0{<rejected>: \"1s\u540e\u5931\u8d25\"}",lang:"js"}),a.a.createElement(c["a"],{code:"function testPromise2() {\n  return new Promise((resolve, reject) => {\n    throw new Error('throw one error');\n  });\n}\n\nasync function asyncTest() {\n  console.log('code start');\n  const res2 = await testPromise2();\n  return res2;\n}\n\nasyncTest();\n// code start\n// Uncaught (in promise) Error: throw one error\n// Promise\xa0{<rejected>: Error: throw one error",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u6211\u4eec\u53ef\u4ee5\u7ed9 ",a.a.createElement("code",null,"async")," \u914d\u7f6e ",a.a.createElement("code",null,"catch")," \u6765\u6355\u83b7\u6240\u6709\u7684\u9519\u8bef\u3002",a.a.createElement("code",null,"await")," \u6355\u83b7\u7684\u7b2c\u4e00\u4e2a\u9519\u8bef\u5c06\u4f1a\u88ab\u5f53\u4f5c ",a.a.createElement("code",null,"async")," \u51fd\u6570\u7684\u62d2\u7edd\u7ed3\u679c\u5e76\u88ab\u8fd4\u56de")),a.a.createElement(c["a"],{code:"async function testAsync() {\n  let p2 = new Promise((resolve, reject) => {\n    throw new Error('p2');\n  });\n  let p1 = new Promise((resolve, reject) => {\n    setTimeout(() => {\n      reject('p1');\n    }, 1000);\n  });\n  await p1;\n  await p2;\n}\n\nlet p1 = testAsync();\n// Promise\xa0{<rejected>: \"p1\"}",lang:"js"}),a.a.createElement(c["a"],{code:"async function testAsync() {\n  let p2 = new Promise((resolve, reject) => {\n    throw new Error('p2');\n  });\n  let p1 = new Promise((resolve, reject) => {\n    setTimeout(() => {\n      reject('p1');\n    }, 1000);\n  });\n  await p2;\n  await p1;\n}\n\nlet p1 = testAsync();\n// Promise\xa0{<rejected>: Error: p2",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5982\u679c\u4efb\u4e00 ",a.a.createElement("code",null,"async")," \u51fd\u6570\u4f53\u4e2d\u7684 ",a.a.createElement("code",null,"await")," \u8c03\u7528\u5931\u8d25\uff0c\u51fd\u6570\u4f53\u5c06\u81ea\u52a8\u6355\u83b7\u5f02\u5e38\uff0c",a.a.createElement("code",null,"async")," \u51fd\u6570\u6267\u884c\u4e2d\u65ad\uff0c\u5e76\u901a\u8fc7\u9690\u5f0f\u8fd4\u56de ",a.a.createElement("code",null,"Promise")," \u5c06\u9519\u8bef\u4f20\u9012\u7ed9\u8c03\u7528\u8005"),a.a.createElement("li",null,"\u6ce8\u610f ",a.a.createElement("code",null,"return value")," \u4e0e ",a.a.createElement("code",null,"return await value")," \u7684\u533a\u522b\u3002\u524d\u8005\u4e0d\u8bba\u662f\u6210\u529f\u8fd8\u662f\u5931\u8d25\uff0c\u90fd\u662f\u76f4\u63a5\u8fd4\u56de ",a.a.createElement("code",null,"value"),"\uff1b\u800c\u540e\u8005\u5219\u4f1a\u7b49\u5f85 ",a.a.createElement("code",null,"value")," \u7684\u72b6\u6001\u6539\u53d8\uff0c\u5f53\u662f\u62d2\u7edd\u65f6\uff0c\u4f1a\u5728\u8fd4\u56de\u524d\u629b\u51fa\u5f02\u5e38")),a.a.createElement(c["a"],{code:"let testP1 = function () {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve('testP1 fulfilled');\n    }, 500);\n  });\n};\n\nlet testP2 = function () {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      reject('testP2 reject');\n    }, 1000);\n  });\n};\n\nlet testP3 = function () {\n  return new Promise((resolve, reject) => {\n    throw new Error('testP3 error');\n  });\n};",lang:"js"}),a.a.createElement(c["a"],{code:"async function testAsync() {\n  try {\n    return testP1();\n  } catch (e) {\n    return e;\n  }\n}\nasync function testAsync1() {\n  try {\n    return testP2();\n  } catch (e) {\n    return 'reject ' + e;\n  }\n}\nasync function testAsync2() {\n  try {\n    return testP3();\n  } catch (e) {\n    return 'return before ' + e;\n  }\n}\n\nlet test1 = testAsync();\n// Promise\xa0{<fulfilled>: \"testP1 fulfilled\"}\n\nlet test2 = testAsync1();\n// Promise\xa0{<rejected>: \"testP2 reject\"}\n\nlet test3 = testAsync2();\n// Promise\xa0{<rejected>: Error: testP3 error",lang:"js"}),a.a.createElement(c["a"],{code:'async function testAsync() {\n  try {\n    return await testP1();\n  } catch (e) {\n    return e;\n  }\n}\nasync function testAsync1() {\n  try {\n    return await testP2();\n  } catch (e) {\n    return \'reject \' + e;\n  }\n}\nasync function testAsync2() {\n  try {\n    return await testP3();\n  } catch (e) {\n    return \'return before \' + e;\n  }\n}\n\nlet test1 = testAsync();\n// Promise\xa0{<fulfilled>: "testP1 fulfilled"}\n\nlet test2 = testAsync1();\n// Promise\xa0{<fulfilled>: "reject testP2 reject"}\n\nlet test3 = testAsync2();\n// Promise\xa0{<fulfilled>: "return before Error: testP3 error"}',lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u6ce8\u610f\uff1a\u5f53 ",a.a.createElement("code",null,"await")," \u540e\u9762\u7684\u4ee3\u7801\u51fa\u73b0\u5f02\u5e38\u3001\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38\u6216\u8005\u72b6\u6001\u5207\u6362\u4e3a ",a.a.createElement("code",null,"rejected")," \u65f6\uff0c\u624d\u4f1a\u5728\u8fd4\u56de\u4e4b\u524d\u6355\u83b7\u8be5\u5f02\u5e38")),a.a.createElement("hr",null),a.a.createElement("h2",{id:"await"},a.a.createElement(r["AnchorLink"],{to:"#await","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"await"),a.a.createElement("hr",null),a.a.createElement("ol",null,a.a.createElement("li",null,"await \u7684\u4f5c\u7528")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u7528\u4e8e\u8fd4\u56de\u4e00\u4e2a ",a.a.createElement("code",null,"promise")," \u5bf9\u8c61\uff0c\u5e76\u4e14\u5b83\u53ea\u80fd\u5728 ",a.a.createElement("code",null,"async")," \u51fd\u6570\u4f53\u4e2d\u4f7f\u7528\u3002\u5b83\u4e5f\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a ",a.a.createElement("code",null,"thenable")," \u5bf9\u8c61\uff0c\u8fd4\u56de\u503c\u6839\u636e\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\u6765\u5904\u7406")),a.a.createElement(c["a"],{code:"let obj = {\n  then: function (resolve, reject) {\n    setTimeout(() => {\n      resolve('resolved 2s');\n    }, 2000);\n  },\n};\n\nasync function testAsync() {\n  let res = await obj;\n  console.log(res);\n}\n\ntestAsync();\n// resolved 2s",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"await")," \u4f1a\u6682\u505c\u5f53\u524d ",a.a.createElement("code",null,"async")," \u51fd\u6570\u7684\u6267\u884c\uff0c\u76f4\u5230\u7b49\u5f85\u7684 ",a.a.createElement("code",null,"promise")," \u5904\u7406\u5b8c\u6210")),a.a.createElement("li",null,a.a.createElement("p",null,"\u6211\u4eec\u53ef\u4ee5\u5c06 async \u8c03\u7528\u7684\u51fd\u6570\u5f53\u6210\u662f\u4e00\u4e2a\u534f\u7a0b\uff0c\u5f53\u9047\u5230 await \u5173\u952e\u5b57\u65f6\uff0c\u4f1a\u4fdd\u5b58\u5f53\u524d\u51fd\u6570\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u4fe1\u606f\uff0c\u5e76\u5c06\u63a7\u5236\u6743\u8f6c\u4ea4\u5230\u5916\u90e8\uff1b\u5f53 await \u7b49\u5f85\u5e76\u83b7\u5f97\u4e00\u4e2a\u5df2\u786e\u5b9a\u7684\u7ed3\u679c\u4ee5\u540e\uff0c\u63a7\u5236\u6743\u4f1a\u6062\u590d\u5230\u534f\u7a0b\u4e4b\u4e2d\u6267\u884c"))),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"\u8fd4\u56de\u503c")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5f53\u88ab\u7b49\u5f85 ",a.a.createElement("code",null,"promise")," \u7684\u72b6\u6001\u5207\u6362\u4e3a ",a.a.createElement("code",null,"fulfilled")," \u65f6\uff0c\u8c03\u7528\u7684\u6539\u53d8\u72b6\u6001\u7684\u56de\u8c03\u51fd\u6570 ",a.a.createElement("code",null,"onFulfill")," \u4e2d\u7684\u53c2\u6570\u5c06\u4f5c\u4e3a ",a.a.createElement("code",null,"await")," \u8868\u8fbe\u5f0f\u7684\u8fd4\u56de\u503c")),a.a.createElement(c["a"],{code:"let testP = function () {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve('testP1 fulfilled');\n    }, 500);\n  });\n};\n\nasync function testAsync() {\n  let p = await testP();\n  console.log(p);\n}\n\ntestAsync();\n// testP1 fulfilled",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5f53\u88ab\u7b49\u5f85 ",a.a.createElement("code",null,"promise")," \u7684\u72b6\u6001\u5207\u6362\u4e3a ",a.a.createElement("code",null,"rejected")," \u6216\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38\u65f6\uff0c",a.a.createElement("code",null,"await")," \u4f1a\u5c06 ",a.a.createElement("code",null,"promise")," \u7684\u5f02\u5e38\u629b\u51fa")),a.a.createElement(c["a"],{code:"let testP = function () {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      reject('testP1 rejected');\n    }, 500);\n    // throw new Error('testP1 rejected')\n  });\n};\n\nasync function testAsync() {\n  let p = await testP();\n  // Uncaught (in promise) testP1 rejected\n  // \u629b\u51fa\u5f02\u5e38\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u4e0d\u4f1a\u88ab\u6267\u884c\n  console.log('p', p);\n  return p;\n}\n\ntestAsync();\n// Promise\xa0{<rejected>: \"testP1 rejected\"}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u82e5 ",a.a.createElement("code",null,"await")," \u64cd\u4f5c\u7b26\u540e\u7684\u8868\u8fbe\u5f0f\u7684\u503c\u4e0d\u662f\u4e00\u4e2a ",a.a.createElement("code",null,"Promise"),"\uff0c\u5219\u8fd4\u56de\u8be5\u503c\u672c\u8eab")),a.a.createElement(c["a"],{code:"async function testAsync() {\n  let p = await 1;\n  // Uncaught (in promise) testP1 rejected\n  // \u629b\u51fa\u5f02\u5e38\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u4e0d\u4f1a\u88ab\u6267\u884c\n  console.log('p', p);\n  return p;\n}\n\ntestAsync();\n// p 1\n// Promise\xa0{<fulfilled>: 1}",lang:"js"})))})));n["default"]=e=>{var n=a.a.useContext(r["context"]),t=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(s,{demos:t})}}}]);