(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[70],{b0kD:function(e,n,l){"use strict";l.r(n);var a=l("q1tI"),t=l.n(a),o=l("dEAq"),c=(l("0H/f"),l("N0lm"),l("DgDr"),l("cGlH"),l("ekZX"),l("Bjia")),r=l("tVxl"),m=(l("1pSt"),t.a.memo((e=>{e.demos;return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h2",{id:"\u6570\u7ec4\u89e3\u6784"},t.a.createElement(o["AnchorLink"],{to:"#\u6570\u7ec4\u89e3\u6784","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u6570\u7ec4\u89e3\u6784"),t.a.createElement("hr",null),t.a.createElement("ol",null,t.a.createElement("li",null,"\u89e3\u6784\u7684\u610f\u4e49")),t.a.createElement("ul",null,t.a.createElement("li",null,"es6 \u5141\u8bb8\u6309\u7167\u4e00\u5b9a\u7684\u6a21\u5f0f\uff0c\u4ece\u6570\u7ec4\u548c\u5bf9\u8c61\u4e2d\u63d0\u53d6\u503c\uff0c\u5bf9\u53d8\u91cf\u8fdb\u884c\u8d4b\u503c\uff0c\u79f0\u4e4b\u4e3a\u89e3\u6784"),t.a.createElement("li",null,"\u89e3\u6784\u5e76\u4e0d\u610f\u5473\u7740\u7834\u574f\uff0c\u5b83\u901a\u8fc7\u5c06\u7ed3\u6784\u4e2d\u7684\u5404\u5143\u7d20\u590d\u5236\u5230\u53d8\u91cf\u4e2d\u6765\u8fbe\u5230\u89e3\u6784\u7684\u76ee\u7684\u3002\u4f46\u6570\u7ec4\u672c\u8eab\u662f\u6ca1\u6709\u88ab\u4fee\u6539\u7684")),t.a.createElement(c["a"],{code:"let arr = ['Bob', 18, '\u7537'];\nlet [name, age, sex] = arr;\n// \u7b49\u540c\u4e8e let name = arr[0]; let age = arr[1]; let sex = arr[2]",lang:"js"}),t.a.createElement(c["a"],{code:"// \u66f4\u4f18\u96c5\u7684\u4f7f\u7528\u6570\u7ec4\u89e3\u6784\nlet [name, age, sex] = 'Bob,18,\u7537'.split(',');",lang:"js"}),t.a.createElement("ol",{start:2},t.a.createElement("li",null,"\u6a21\u5f0f\u5339\u914d")),t.a.createElement("ul",null,t.a.createElement("li",null,"\u672c\u8d28\u4e0a\uff0c\u89e3\u6784\u8d4b\u503c\u53ef\u4ee5\u5c5e\u4e8e\u6a21\u5f0f\u5339\u914d\uff0c\u5373\u7b49\u53f7\u4e24\u8fb9\u7684\u6a21\u5f0f\u76f8\u540c\uff0c\u5de6\u8fb9\u7684\u53d8\u91cf\u5c31\u4f1a\u88ab\u8d4b\u4e88\u5bf9\u5e94\u7684\u503c")),t.a.createElement(c["a"],{code:"const [a, b, c] = [1, 2, 3];\nconsole.log(a, b, c); // 1 2 3",lang:"js"}),t.a.createElement(c["a"],{code:"// \u4f7f\u7528\u7a7a\u4f4d\u53bb\u5ffd\u7565\u4e0d\u60f3\u8981\u7684\u5143\u7d20\nconst [a, , b, , c] = [1, 2, 3, 4, 5];\nconsole.log(a, b, c); // 1 3 5\n// 2 4 \u88ab\u7a7a\u4f4d\u8df3\u8fc7",lang:"js"}),t.a.createElement(c["a"],{code:"const [, , a] = [1, 2, 3];\nconsole.log(a); // 3",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u5b9e\u9645\u4e0a\uff0c\u89e3\u6784\u8d4b\u503c\u4f7f\u7528\u5230\u4e86\u904d\u5386\u5668\u5bf9\u8c61\uff0c\u56e0\u6b64\uff0c\u4efb\u4f55\u90e8\u7f72\u4e86 ",t.a.createElement("code",null,"[Symbol.iterator]")," \u63a5\u53e3\u7684\u6570\u636e\u96c6\u5408\u90fd\u53ef\u4f7f\u7528\u89e3\u6784\u8d4b\u503c")),t.a.createElement(c["a"],{code:"/** \n  * 1. \u5185\u7f6e iterator\n*/\nlet [a, b, c] = '123';\nconsole.log(a, b, c); // 1 2 3\n\nlet [a1, b1, c1] = new Set([1, 2, 3]);\nconsole.log(a, b, c); // 1 2 3\n\n/** \n  * 2. \u81ea\u5b9a\u4e49 iterator\n*/\nfunction createIterator(...rest){\n  let i = 0;\n  return {\n    value:rest,\n    next: function () {\n      if(i>=this.value.length) return {done:true,value:undefined}\n      return {done:false,value:this.value[i++]}\n    },\n    [Symbol.iterator]: function () {\n      return this;\n    }\n  };\n}\nlet myIterator = createIterator(1,2,3,4,5);\n\nlet [a2,,b2,,c2] = myIterator;\n\n// a2:1 , b2:3 , c2:5",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u8fd8\u53ef\u7528\u4e8e\u5faa\u73af\u7ed3\u6784\u4e2d\uff0c\u7528\u4e8e\u904d\u5386\u7279\u5b9a\u7684\u5c5e\u6027")),t.a.createElement(c["a"],{code:"// for\u5faa\u73af\nlet user = {\n  name: 'John',\n  age: 30,\n};\n\n// \u5faa\u73af\u904d\u5386\u952e\u503c\u5bf9\nfor (let [key, value] of Object.entries(user)) {\n  console.log(`${key}:${value}`); // name:John, then age:30\n}",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u7528\u4e8e\u5feb\u6377\u7684\u4ea4\u6362\u4e24\u4e2a\u53d8\u91cf\u7684\u503c")),t.a.createElement(c["a"],{code:"let Bob = 'Bob';\nlet James = 'james';\n[Bob, James] = [James, Bob];\n\n/** \n  * Bob: 'james'\n  * James: 'Bob'\n*/",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u4f7f\u7528 ",t.a.createElement("code",null,"...")," \u6765\u6536\u96c6\u5269\u4f59\u7684\u6240\u6709\u5143\u7d20")),t.a.createElement(c["a"],{code:"const [a, ...c] = [1, 2, 3, 4];\nconsole.log(a, c); // 1 [2,3,4]",lang:"js"}),t.a.createElement(c["a"],{code:"const arr1=[1,2,3,4];\nconst arr2=[3,5,4];\nconsole.log([...arr1,arr2]); // [1,2,3,3,4,4,5]",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u9519\u8bef\u60c5\u51b5\uff0c\u5f53\u7b49\u53f7\u53f3\u8fb9\u4e0d\u662f\u53ef\u904d\u5386\u7684\u7ed3\u6784\u65f6\uff0c\u4f1a\u629b\u51fa\u4e00\u4e2a\u9519\u8bef")),t.a.createElement(r["a"],null,t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",null,"\u5b57\u6bb5"),t.a.createElement("th",null,"\u7ed3\u6784"))),t.a.createElement("tbody",null,t.a.createElement("tr",null,t.a.createElement("td",null,"1"),t.a.createElement("td",null,"Number")),t.a.createElement("tr",null,t.a.createElement("td",null,"false"),t.a.createElement("td",null,"Boolean")),t.a.createElement("tr",null,t.a.createElement("td",null,"NaN"),t.a.createElement("td",null,"Number")),t.a.createElement("tr",null,t.a.createElement("td",null,"undefined"),t.a.createElement("td",null,"undefined")),t.a.createElement("tr",null,t.a.createElement("td",null,"null"),t.a.createElement("td",null,"null")),t.a.createElement("tr",null,t.a.createElement("td",null,"{","}"),t.a.createElement("td",null,"\u7a7a\u5bf9\u8c61")))),t.a.createElement(c["a"],{code:"let [obj] = {};\n// Uncaught TypeError: {} is not iterable",lang:"js"}),t.a.createElement("ol",{start:3},t.a.createElement("li",null,"\u9ed8\u8ba4\u503c")),t.a.createElement("ul",null,t.a.createElement("li",null,"\u53d8\u91cf\u6570\u91cf\u591a\u4e8e\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u60c5\u51b5\uff0c\u4e0d\u5b8c\u5168\u89e3\u6784\uff0c\u53ea\u6709\u4e00\u90e8\u5206\u6a21\u5f0f\u5339\u914d")),t.a.createElement(c["a"],{code:"const [a,b,...c]=[1]\nconsole.log(a,c); // 1 undefined",lang:"js"}),t.a.createElement(c["a"],{code:"const [a,[b],c]=[1,[3,4]]\nconsole.log(a,b,c); // 1 3 undefined",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u5728\u89e3\u6784\u4e4b\u524d\u7ed9\u53d8\u91cf\u7ed9\u63d0\u4f9b\u4e00\u4e2a\u503c\uff0c\u5f53\u5b83\u65e0\u6cd5\u4ece\u6570\u7ec4\u89e3\u6784\u5230\u503c\u65f6\uff08",t.a.createElement("strong",null,"\u7b49\u53f7\u53f3\u8fb9\u4e25\u683c\u7b49\u4e8e ",t.a.createElement("code",null,"undefined")),"\uff09\uff0c\u5b83\u5c06\u4f7f\u7528\u8fd9\u4e2a\u9ed8\u8ba4\u503c")),t.a.createElement(c["a"],{code:"let [a = 1, b = a] = [undefined];\nconsole.log(a, b); // 1 1",lang:"js"}),t.a.createElement(c["a"],{code:"let [a = 1, b = a] = [undefined, 3];\nconsole.log(a, b); // 1 3",lang:"js"}),t.a.createElement(c["a"],{code:"let [a = 1, b = a] = [3, undefined];\nconsole.log(a, b); // 3,3",lang:"js"}),t.a.createElement(c["a"],{code:"let [a = 1, b = a] = [null, undefined];\nconsole.log(a, b); // null null",lang:"js"}),t.a.createElement(c["a"],{code:"let [a = 1, b = a] = [NaN, 2];\nconsole.log(a, b); // NaN 2",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u89e3\u6784\u8d4b\u503c\u662f\u4e00\u4e2a\u8868\u8fbe\u5f0f\u7684\u60c5\u51b5\u4e0b\uff0c\u5b83\u4f1a\u60f0\u6027\u6c42\u503c")),t.a.createElement(c["a"],{code:"function fn(){\n\tconsole.log('aaa')\n}\nlet [x = fn(), y = x] = [null,2];\nconsole.log(x,y); // null 2\n// \u56e0\u4e3anull \u4e0d\u4e25\u683c\u7b49\u4e8e undefined\uff0c\u56e0\u6b64\u4e0d\u4f1a\u88ab\u8d4b\u4e88fn()\uff0c\u800cfn()\u5c31\u4e0d\u4f1a\u6267\u884c",lang:"js"}),t.a.createElement(c["a"],{code:"function fn(){\n\tconsole.log('aaa')\n}\nlet [x = fn(), y = x] = [undefined,2];\nconsole.log(x,y);\n // aaa\n // undefined 2\n// x\u4f1a\u88ab\u8d4b\u4e88fn()\uff0c\u800cfn()\u4f1a\u6267\u884c\uff0c\u4f46\u56e0\u4e3afn\u6ca1\u6709\u660e\u786e\u8fd4\u56de\u503c\uff0c\u56e0\u6b64\u8fd4\u56de\u503c\u4e3aundefined",lang:"js"}),t.a.createElement("hr",null),t.a.createElement("h2",{id:"\u5bf9\u8c61\u89e3\u6784"},t.a.createElement(o["AnchorLink"],{to:"#\u5bf9\u8c61\u89e3\u6784","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u5bf9\u8c61\u89e3\u6784"),t.a.createElement("hr",null),t.a.createElement("ol",null,t.a.createElement("li",null,"\u4e0e\u6570\u7ec4\u89e3\u6784\u7684\u533a\u522b")),t.a.createElement("ul",null,t.a.createElement("li",null,"\u6570\u7ec4\u7684\u89e3\u6784\u8d4b\u503c\u5bf9\u5e94\u7684\u662f\u5143\u7d20\u7684\u4f4d\u7f6e\uff0c\u800c\u5bf9\u8c61\u7684\u89e3\u6784\u8d4b\u503c\u5bf9\u5e94\u7684\u662f\u540c\u540d\u7684\u5c5e\u6027\u540d\uff0c\u5b83\u6307\u5b9a\u4e86\u5c5e\u6027\u4e0e\u53d8\u91cf\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb"),t.a.createElement("li",null,"\u5bf9\u8c61\u7684\u89e3\u6784\u8d4b\u503c\u7684\u5185\u90e8\u673a\u5236\uff0c\u662f\u5148\u627e\u5230\u540c\u540d\u5c5e\u6027\uff0c\u7136\u540e\u518d\u8d4b\u7ed9\u5bf9\u5e94\u7684\u53d8\u91cf")),t.a.createElement("ol",{start:2},t.a.createElement("li",null,"\u5bf9\u8c61\u89e3\u6784\u7528\u6cd5")),t.a.createElement(c["a"],{code:'let {num1} = {num1:"hello",num2:"world"};\nconsole.log(num1); // hello',lang:"js"}),t.a.createElement(c["a"],{code:'let {num3} = {num1:"hello",num2:"world"};\nconsole.log(num3); // undefined',lang:"js"}),t.a.createElement(c["a"],{code:"let obj1 = {a:1,b:2};\nlet obj2 = {b:3,c:5};\nconsole.log({...obj1,...obj2}); // {a:1,b:3.c:5}",lang:"JavaScript"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u6307\u5b9a\u53d8\u91cf\u540d\u5e76\u8d4b\u503c\u7ed9\u5b83")),t.a.createElement(c["a"],{code:"let { num3: n3, num2: n2 } = { num1: 'hello', num2: 'world' };\nconsole.log(n2, n3); // \"world\" undefined\n// \u5c06num3\uff0cnum2\u4ece\u5bf9\u8c61\u4e2d\u89e3\u6784\u51fa\u6765\uff0c\u5e76\u8d4b\u503c\u7ed9\u5192\u53f7\u53f3\u8fb9\u7684\u53d8\u91cf",lang:"js"}),t.a.createElement("ol",{start:3},t.a.createElement("li",null,"\u9ed8\u8ba4\u503c")),t.a.createElement("ul",null,t.a.createElement("li",null,"\u9ed8\u8ba4\u503c\u53ef\u4ee5\u662f\u4efb\u610f\u8868\u8fbe\u5f0f\u6216\u51fd\u6570\u8c03\u7528\uff0c\u5b83\u4eec\u4ecd\u7136\u4f1a\u60f0\u6027\u6c42\u503c\u3002\u7c7b\u4f3c\u4e8e ",t.a.createElement("code",null,"\u6570\u7ec4\u89e3\u6784"),"\uff0c\u5f53\u53d8\u91cf\u5728\u5bf9\u8c61\u4e2d\u89e3\u6784\u51fa\u6765\u7684\u503c\u4e25\u683c\u7b49\u4e8e ",t.a.createElement("code",null,"undefined")," \u65f6\uff0c\u9ed8\u8ba4\u503c\u624d\u4f1a\u751f\u6548")),t.a.createElement(c["a"],{code:"let {\n  name = 'Jim',\n  age = '18',\n  sex = (() => {\n    return 'boy';\n  })(),\n} = { name: null, age: undefined };\n// let {name='Jim', age='18'} = {name: null}\nconsole.log(name, age, sex); // null '18' 'boy'",lang:"js"}),t.a.createElement(c["a"],{code:"let {\n  name = 'Jim',\n  age = '18',\n  sex = (() => {\n    return 'boy';\n  })(),\n} = { name: null, age: undefined, sex: '\u7537' };\n// let {name='Jim', age='18'} = {name: null}\nconsole.log(name, age, sex); // null '18' '\u7537'",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u6307\u5b9a\u53d8\u91cf\u540d\u4e14\u6307\u5b9a\u9ed8\u8ba4\u503c\u5e76\u8d4b\u503c")),t.a.createElement(c["a"],{code:"let {\n  name: n1 = 'Jim',\n  age: a1 = '18',\n  sex: s1 = (() => {\n    return 'boy';\n  })(),\n} = { name: null, age: undefined, sex: '\u7537' };\n// let {name='Jim', age='18'} = {name: null}\nconsole.log(n1, a1, s1); // null '18' '\u7537'",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u89e3\u6784\u8d4b\u503c\u53ef\u4ee5\u8ba9\u6211\u4eec\u53ea\u53d6\u6211\u4eec\u60f3\u8981\u7684\u503c")),t.a.createElement(c["a"],{code:"let { name } = { name: 'Jetmine', age: undefined, sex: '\u7537' };\nconsole.log(name); // Jetmine",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u4f7f\u7528 ",t.a.createElement("code",null,"...")," \u6765\u6536\u96c6\u5269\u4f59\u7684\u6240\u6709\u5143\u7d20\uff0c\u7c7b\u4f3c\u4e8e\u6570\u7ec4")),t.a.createElement(c["a"],{code:"let { name, ...rest } = { name: 'Jetmine', age: undefined, sex: '\u7537' };\nconsole.log(name, rest);\n// Jetmine {age: undefined, sex: \"\u7537\"}",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u6ce8\u610f\uff1a\u4e0d\u4f7f\u7528\u58f0\u660e\u5173\u952e\u5b57\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u4f1a\u62a5\u9519\u3002\u5de6\u8fb9\u7684\u8868\u8fbe\u5f0f\u88ab\u653e\u5165 ",t.a.createElement("code",null,"{","}")," \u4e2d\uff0c\u88ab\u5f53\u4f5c\u4ee3\u7801\u5757\u5904\u7406\u4e86\uff0c\u56e0\u6b64\u4f1a\u62a5\u9519")),t.a.createElement(c["a"],{code:"{name,...rest} = {name: 'Jetmine', age: undefined, sex:'\u7537'}\n// \u8fd9\u79cd\u60c5\u51b5\u4f1a\u62a5\u9519\n{name,age,sex} = {name: 'Jetmine', age: 18, sex:'\u7537'};\n// \u8fd9\u79cd\u60c5\u51b5\u4e0b\u4f1a\u62a5\u9519\n({name,age,sex} = {name: 'Jetmine', age: 18, sex:'\u7537'});\n// \u544a\u8bc9JavaScript\u8fd9\u4e0d\u662f\u4e00\u4e2a\u4ee3\u7801\u5757\uff0c\u8fd9\u6837\u5c31\u4e0d\u4f1a\u62a5\u9519\u4e86",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u8fd8\u53ef\u4ee5\u5bf9\u5bf9\u8c61\u4e2d\u7684\u5176\u4ed6\u590d\u6742\u5143\u7d20\u8fdb\u884c\u5d4c\u5957\u89e3\u6784")),t.a.createElement(c["a"],{code:"let family = {\n  son: {\n    name: 'John',\n    age: '18',\n  },\n  mom: {\n    name1: 'Mary',\n    sex: 'gril',\n  },\n  house: ['house1', 'house2'],\n};\n\nlet {\n  son: { name, age },\n  mom: { name1 },\n  house: [house1, house2],\n} = family;\n\nconsole.log(name);\n// \"John\"\nconsole.log(name1);\n// \"Mary\"\nconsole.log(age);\n// \"18\"\nconsole.log(house1);\n// \"house1\"\nconsole.log(house2);\n// \"house2\"",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u5728\u51fd\u6570\u53c2\u6570\u4e0a\u6307\u5b9a\u8fd9\u79cd\u89e3\u6784\u8d4b\u503c\u7684\u65b9\u5f0f\uff0c\u4ee5\u63d0\u4f9b\u9ed8\u8ba4\u503c")),t.a.createElement(c["a"],{code:"function makedefaultvalue({ name: n1 = 'Mary', age = 100, item: [item1, item2] }) {\n  console.log(n1);\n  console.log(age);\n  console.log(item1, item2);\n}\nmakedefaultvalue({ name: 'James', age: undefined, item: ['test1', 'test2'] });\n\nfunction makedefaultvalue1({ name: n1 = 'Mary', age = 100 }) {\n  console.log(n1);\n  console.log(age);\n}\nmakedefaultvalue1({}); // \u4f7f\u7528\u9ed8\u8ba4\u503c",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e0a\u8ff0\u60c5\u51b5\u4e2d\uff0c\u51fd\u6570\u53c2\u6570\u6709 ",t.a.createElement("code",null,"\u9ed8\u8ba4\u503c")," \u7684\u60c5\u51b5\u4e0b\uff0c\u5f53\u67d0\u4e2a\u51fd\u6570\u53c2\u6570\u9700\u8981\u89e3\u6784\u5bf9\u8c61\u4e2d\u7684\u6570\u7ec4\u65f6\uff0c\u82e5\u4e3a\u7a7a\u5bf9\u8c61\uff0c\u5219\u4f1a\u62a5\u9519\uff0c\u56e0\u4e3a ",t.a.createElement("code",null,"undefined")," \u6ca1\u6709 ",t.a.createElement("code",null,"iterator"),"\uff0c\u56e0\u6b64\u65e0\u6cd5\u88ab\u89e3\u6784")),t.a.createElement(c["a"],{code:"function makedefaultvalue({ name: n1 = 'Mary', age = 100, item: [item1, item2] }) {\n  console.log(n1);\n  console.log(age);\n  console.log(item1, item2);\n}\nmakedefaultvalue({});\n// Uncaught TypeError: undefined is not iterable",lang:"js"})))})));n["default"]=e=>{var n=t.a.useContext(o["context"]),l=n.demos;return t.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),t.a.createElement(m,{demos:l})}}}]);