(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{AM3I:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),a=t.n(o),r=t("dEAq"),l=(t("0H/f"),t("N0lm"),t("DgDr"),t("cGlH"),t("ekZX"),t("Bjia")),s=(t("tVxl"),t("1pSt"),a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"\u7ee7\u627f"},a.a.createElement(r["AnchorLink"],{to:"#\u7ee7\u627f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u7ee7\u627f"),a.a.createElement("hr",null),a.a.createElement("ol",null,a.a.createElement("li",null,"\u7ee7\u627f\u662f\u4ec0\u4e48")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u7ee7\u627f\u53ef\u4ee5\u4f7f\u5f97\u5b50\u7c7b\u5177\u6709\u7236\u7c7b\u522b\u7684\u5404\u79cd\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u800c\u4e0d\u9700\u8981\u518d\u6b21\u7f16\u5199\u76f8\u540c\u7684\u4ee3\u7801\u3002\u7ee7\u627f\u662f\u4e00\u4e2a\u7c7b\u4ece\u53e6\u4e00\u4e2a\u7c7b\u83b7\u53d6\u65b9\u6cd5\u548c\u5c5e\u6027\u7684\u8fc7\u7a0b\uff0c\u4ed6\u662f\u5bf9\u7c7b\u7684\u5c01\u88c5"),a.a.createElement("li",null,"js \u4e2d\u5b9e\u73b0\u7ee7\u627f\u7684\u539f\u7406\uff1a\u590d\u5236\u7236\u7c7b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u6765\u91cd\u5199\u5b50\u7c7b\u539f\u578b\u5bf9\u8c61\u3002\u5f15\u7528\u300c\u4f60\u4e0d\u77e5\u9053\u7684JavaScript\u300d\u4e2d\u7684\u8bdd\uff0c\u7ee7\u627f\u610f\u5473\u7740\u590d\u5236\u64cd\u4f5c\uff0c\u7136\u800c js \u9ed8\u8ba4\u5e76\u4e0d\u4f1a\u590d\u5236\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u76f8\u53cd\uff0cjs \u53ea\u662f\u5728\u4e24\u4e2a\u5bf9\u8c61\u4e4b\u95f4\u521b\u5efa\u4e86\u4e00\u4e2a\u5173\u8054\uff0c\u8fd9\u6837\uff0c\u4e00\u4e2a\u5bf9\u8c61\u5c31\u53ef\u4ee5\u901a\u8fc7\u59d4\u6258\u8bbf\u95ee\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u6240\u4ee5\u4e0e\u5176\u53eb\u7ee7\u627f\uff0c\u59d4\u6258\u7684\u8bf4\u6cd5\u53cd\u800c\u66f4\u51c6\u786e\u4e9b")),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"\u6784\u9020\u51fd\u6570\u7684\u7ee7\u627f")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u6784\u9020\u51fd\u6570\u7684\u672c\u8d28\u662f\u5728 new \u5185\u90e8\u5b9e\u73b0\u7684\u4e00\u4e2a\u590d\u5236\u8fc7\u7a0b\u3002\u56e0\u6b64\uff0c\u5b9e\u73b0\u6784\u9020\u51fd\u6570\u7684\u7ee7\u627f\uff0c\u53ea\u9700\u8981\u5c06\u7236\u7ea7\u6784\u9020\u51fd\u6570\u4e2d\u7684\u64cd\u4f5c\u5728\u5b50\u7ea7\u6784\u9020\u51fd\u6570\u4e2d\u91cd\u73b0\u4e00\u904d\u5373\u53ef")),a.a.createElement(l["a"],{code:"// 1. \u5148\u5b9a\u4e49\u4e00\u4e2a\u7236\u7ea7\u6784\u9020\u51fd\u6570\nfunction Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\nPerson.prototype.getName = function () {\n  return this.name;\n};",lang:"js"}),a.a.createElement(l["a"],{code:"// 2. \u5b9e\u73b0\u7ee7\u627f\nfunction Son(name, age, sex) {\n  Person.call(this, name, age);\n  this.sex = sex;\n}\nSon.prototype.getAge = function () {\n  return this.age;\n};\nvar s1 = new Son('Bob', 20, '\u7537');",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u6784\u9020\u51fd\u6570\u7684\u7ee7\u627f\uff0c\u53ea\u80fd\u5b9e\u73b0\u7236\u7c7b\u5c5e\u6027\u4e0e\u65b9\u6cd5\u7684\u7ee7\u627f\uff0c\u4e5f\u5c31\u662f\u901a\u8fc7 this \u58f0\u660e\u7684\u5c5e\u6027\uff0c\u65e0\u6cd5\u7ee7\u627f\u7236\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\u4e0a\u7684\u5c5e\u6027\u4e0e\u65b9\u6cd5")),a.a.createElement(l["a"],{code:"s1.getName(); // s1.getName is not a function\nObject.getPrototypeOf(Son.prototype) === Person.prototype; // false\nObject.getPrototypeOf(Son.prototype) === Object.prototype; // true",lang:"js"}),a.a.createElement("ol",{start:3},a.a.createElement("li",null,"\u539f\u578b\u7684\u7ee7\u627f")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u539f\u578b\u7684\u7ee7\u627f\uff0c\u53ea\u9700\u8981\u5c06\u5b50\u7ea7\u7684\u539f\u578b\u5bf9\u8c61\u8bbe\u7f6e\u4e3a\u7236\u7ea7\u7684\u4e00\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u52a0\u5165\u5230\u539f\u578b\u94fe \u4e2d\u5373\u53ef")),a.a.createElement(l["a"],{code:"// 1. \u5148\u5b9a\u4e49\u4e00\u4e2a\u7236\u7ea7\u6784\u9020\u51fd\u6570\nfunction Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\nPerson.prototype.getName = function () {\n  return this.name;\n};",lang:"js"}),a.a.createElement(l["a"],{code:"// 2. \u5b9a\u4e49\u4e00\u4e2a\u5b50\u7c7b\u6784\u9020\u51fd\u6570\nfunction Son(name, age, sex) {\n  this.sex = sex;\n}\n// \u6b64\u65f6\uff0c\u5b50\u7c7bSon\u7684\u539f\u578b\u94fe\u4e0a\u8fd8\u6ca1\u6709getName\u7684\u65b9\u6cd5",lang:"js"}),a.a.createElement(l["a"],{code:"// 3. \u5b9e\u73b0\u539f\u578b\u5bf9\u8c61\u65b9\u6cd5\u4e0a\u7684\u7ee7\u627f\nSon.prototype=new Person();\n// \u5c06\u4e2d\u95f4\u5bf9\u8c61\u6307\u5b9a\u4e3a\u5b50\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\uff0c\u53ef\u4ee5\u4e0d\u6307\u5b9aconstructor\uff0c\u56e0\u4e3a\u4ec5\u4ec5\u662f\u5c06\u8be5\u4e2d\u95f4\u5bf9\u8c61\u4f5c\u4e3a\u4e00\u4e2a\u7236\u5b50\u7c7b\u8fde\u63a5\u7684\u6865\u6881\nvar s1 =new Son('Bob',20,'\u7537')\nconsole.log(s1.getName())\uff1b // undefined",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u539f\u578b\u7ee7\u627f\u7684\u7f3a\u70b9\uff1a\u4e00\u662f\u7236\u7c7b\u4f7f\u7528 this \u58f0\u660e\u7684\u5c5e\u6027\u4f1a\u88ab\u6240\u6709\u5b9e\u4f8b\u5171\u4eab\uff0c\u56e0\u4e3a\u5b9e\u4f8b\u5316\u7684\u7236\u7c7b\u300cSon.prototype=new Person()\u300d\u662f\u4e00\u6b21\u6027\u8d4b\u503c\u5230\u5b50\u7c7b\u5b9e\u4f8b\u7684 \u539f\u578b(Son.prototype)\u4e0a\uff0c\u56e0\u6b64\u7236\u7c7b\u901a\u8fc7 this \u58f0\u660e\u7684\u5c5e\u6027\u4e5f\u5c06\u8d4b\u503c\u5230 Son.prototype \u4e0a"),a.a.createElement("li",null,"\u4e8c\u662f\u521b\u5efa\u5b50\u7c7b\u5b9e\u4f8b\u65f6\uff0c\u65e0\u6cd5\u5411\u7236\u7c7b\u4f20\u53c2\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\uff0c\u65e0\u6cd5\u5b9e\u4f8b\u5316\u7236\u7c7b\u7684\u6210\u5458\u5c5e\u6027\u5e76\u590d\u5236\u7ed9\u5b50\u7c7b")),a.a.createElement(l["a"],{code:"function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\nPerson.prototype.getName = function () {\n  return this.name;\n};\nfunction Son(name, age, sex) {\n  this.sex = sex;\n}\nSon.prototype = new Person();\nSon.prototype.getAge = function () {\n  return this.age;\n};\nvar s1 = new Son('Bob', 20, '\u7537');\ns1; // Son\xa0{sex: \"\u7537\"}\ns1.getAge(); // undefined\n// \u7236\u7c7b\u6784\u9020\u51fd\u6570\u4e0athis\u6307\u5b9a\u7684\u5c5e\u6027\u65e0\u6cd5\u901a\u8fc7\u521b\u5efa\u5b50\u7c7b\u5b9e\u4f8b\u7ee7\u627f\u5f97\u5230",lang:"js"}),a.a.createElement("ol",{start:4},a.a.createElement("li",null,"\u7ec4\u5408\u7ee7\u627f")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u501f\u7528\u6784\u9020\u51fd\u6570\u7684\u7ee7\u627f\u5c06\u7236\u7c7b\u901a\u8fc7 this \u58f0\u660e\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u7ee7\u627f\u5230\u5b50\u7c7b\u5b9e\u4f8b\u4e0a\uff0c\u501f\u7528\u539f\u578b\u7684\u7ee7\u627f\u5c06\u7236\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\u4e0a\u7684\u65b9\u6cd5\u7ee7\u627f\u5230\u5b50\u7c7b\u7684 prototype \u4e0a")),a.a.createElement(l["a"],{code:"function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\nPerson.prototype.getName = function () {\n  return this.name;\n};\n// 2. \u6784\u9020\u51fd\u6570\u7684\u7ee7\u627f\nfunction Son(name, age, sex) {\n  Person.call(this, name, age);\n  this.sex = sex;\n}\n// 3. \u539f\u578b\u7684\u7ee7\u627f\nSon.prototype = new Person();\nSon.prototype.constructor = Son;\nSon.prototype.getAge = function () {\n  return this.age;\n};\nvar s1 = new Son('Bob', 20, '\u7537');\ns1; // Son\xa0{name: \"Bob\", age: 20, sex: \"\u7537\"}\nObject.getPrototypeOf(s1) === Son.prototype; // true\nObject.getPrototypeOf(Son.prototype) === Person.prototype; // true",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u7ec4\u5408\u7ee7\u627f\u7684\u7f3a\u70b9\uff1a\u4e00\u662f\u4e24\u6b21\u8c03\u7528\u7236\u7c7b\u6784\u9020\u51fd\u6570\uff0c\u5bfc\u81f4\u7236\u7c7b\u901a\u8fc7 this \u58f0\u660e\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u751f\u6210\u4e86\u4e24\u6b21\uff0c\u53ef\u80fd\u9020\u6210\u4e00\u5b9a\u7684\u6027\u80fd\u635f\u8017\uff1b\u4e8c\u662f\u5728\u5b50\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\u4e0a\u6dfb\u52a0\u7684\u5c5e\u6027/\u65b9\u6cd5\u548c\u7236\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\u4e0a\u6dfb\u52a0\u7684\u5c5e\u6027/\u65b9\u6cd5\u90fd\u4f1a\u5b58\u5728\u4e8e\u5b50\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\u4e2d(\u7236\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\u4e0a\u7684\u5c5e\u6027/\u65b9\u6cd5\u4f1a\u88ab\u5b50\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\u7ee7\u627f )")),a.a.createElement("ol",{start:5},a.a.createElement("li",null,"\u539f\u578b\u5f0f\u7ee7\u627f")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5982\u679c\u539f\u578b\u94fe\u7684\u7ec8\u70b9 Object.prototype \u4e3a\u539f\u578b\u94fe\u7684 E(end)\u7aef\uff0c\u539f\u578b\u94fe\u7684\u8d77\u70b9\u4e3a S(start)\u7aef"),a.a.createElement("li",null,"\u6839\u636e\u539f\u578b\u94fe\u7684\u7279\u70b9\uff0c\u5904\u4e8e S \u7aef\u7684\u5bf9\u8c61\uff0c\u53ef\u4ee5\u901a\u8fc7 S -> E \u7684\u5355\u5411\u67e5\u627e\uff0c\u8bbf\u95ee\u5230\u539f\u578b\u94fe\u4e0a\u7684\u6240\u6709\u65b9\u6cd5\u4e0e\u5c5e\u6027\uff0c\u8fd9\u7ed9\u7ee7\u627f\u63d0\u4f9b\u4e86\u7406\u8bba\u57fa\u7840"),a.a.createElement("li",null,"\u6240\u4ee5\u6211\u4eec\u53ea\u9700\u5728 S \u7aef\u6dfb\u52a0\u65b0\u7684\u5bf9\u8c61\uff0c\u90a3\u4e48\u65b0\u5bf9\u8c61\u5c31\u80fd\u901a\u8fc7\u539f\u578b\u94fe\u8bbf\u95ee\u5230\u7236\u7ea7\u7684\u65b9\u6cd5\u4e0e\u5c5e\u6027")),a.a.createElement(l["a"],{code:"// 1. \u5148\u5c01\u88c5\u4e00\u4e2a\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u53ef\u4ee5\u6839\u636e\u7236\u7c7b\u5bf9\u8c61\u7684\u539f\u578b\u521b\u5efa\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u8be5\u5b9e\u4f8b\u5c06\u4f1a\u4f5c\u4e3a\u5b50\u7c7b\u5bf9\u8c61\u7684\u539f\u578b\nfunction create(proto, options) {\n  // \u521b\u5efa\u4e00\u4e2a\u7a7a\u5bf9\u8c61\n  var tmp = {};\n\n  // \u8ba9\u8fd9\u4e2a\u65b0\u7684\u7a7a\u5bf9\u8c61\u7684\u539f\u578b\u6307\u5411\u7236\u7c7b\u7684\u539f\u578b\n  tmp.__proto__ = proto;\n\n  // \u4f20\u5165\u7684\u65b9\u6cd5\u90fd\u6302\u8f7d\u5230\u65b0\u5bf9\u8c61\u4e0a\uff0c\u65b0\u7684\u5bf9\u8c61\u5c06\u4f5c\u4e3a\u5b50\u7c7b\u5bf9\u8c61\u7684\u539f\u578b\n  Object.defineProperties(tmp, options);\n  return tmp;\n}",lang:"js"}),a.a.createElement(l["a"],{code:"// 2. \u4f7f\u7528\u8be5\u65b9\u6cd5\u5b9e\u73b0\u539f\u578b\u5bf9\u8c61\u7684\u7ee7\u627f\nStudent.prototype = create(Person.prototype, {\n  // \u4e0d\u8981\u5fd8\u4e86\u91cd\u65b0\u6307\u5b9a\u6784\u9020\u51fd\u6570\n  constructor: {\n    value: Student\n  }\n  getGrade: {\n    value: function() {\n      return this.grade\n    }\n  }\n})",lang:"js"}),a.a.createElement(l["a"],{code:"// 3. \u5b8c\u6574\u4ee3\u7801\n// \u58f0\u660e\u6784\u9020\u51fd\u6570\nfunction Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\n// \u901a\u8fc7prototype\u5c5e\u6027,\u5c06\u65b9\u6cd5\u6302\u8f7d\u5230\u539f\u578b\u5bf9\u8c61\u4e0a\nPerson.prototype.getName = function () {\n  return this.name;\n};\n\nfunction Student(name, age, grade) {\n  // \u6784\u9020\u51fd\u6570\u7ee7\u627f\n  Person.call(this, name, age);\n  this.grade = grade;\n}\nfunction create(proto, options) {\n  // \u521b\u5efa\u4e00\u4e2a\u7a7a\u5bf9\u8c61\n  var tmp = {};\n\n  // \u8ba9\u8fd9\u4e2a\u65b0\u7684\u7a7a\u5bf9\u8c61\u6210\u4e3a\u7236\u7c7b\u5bf9\u8c61\u7684\u5b9e\u4f8b\n  tmp.__proto__ = proto;\n\n  // \u4f20\u5165\u7684\u65b9\u6cd5\u90fd\u6302\u8f7d\u5230\u65b0\u5bf9\u8c61\u4e0a\uff0c\u65b0\u7684\u5bf9\u8c61\u5c06\u4f5c\u4e3a\u5b50\u7c7b\u5bf9\u8c61\u7684\u539f\u578b\n  Object.defineProperties(tmp, options);\n  return tmp;\n}\nStudent.prototype = create(Person.prototype, {\n  // \u4e0d\u8981\u5fd8\u4e86\u91cd\u65b0\u6307\u5b9a\u6784\u9020\u51fd\u6570\n  constructor: {\n    value: Student,\n  },\n  getGrade: {\n    value: function () {\n      return this.grade;\n    },\n  },\n});\nvar s1 = new Student('ming', 22, 5);",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5229\u7528 Object.create \u53ef\u4ee5\u76f4\u63a5\u5b9e\u73b0\u4e0a\u9762 create \u65b9\u6cd5\u7684\u529f\u80fd")),a.a.createElement(l["a"],{code:"// 3. \u5b8c\u6574\u4ee3\u7801\n// \u58f0\u660e\u6784\u9020\u51fd\u6570\nfunction Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\n// \u901a\u8fc7prototype\u5c5e\u6027,\u5c06\u65b9\u6cd5\u6302\u8f7d\u5230\u539f\u578b\u5bf9\u8c61\u4e0a\nPerson.prototype.getName = function () {\n  return this.name;\n};\n\nfunction Student(name, age, grade) {\n  // \u6784\u9020\u51fd\u6570\u7ee7\u627f\n  Person.call(this, name, age);\n  this.grade = grade;\n}\nStudent.prototype = Object.create(Person.prototype, {\n  // \u4e0d\u8981\u5fd8\u4e86\u91cd\u65b0\u6307\u5b9a\u6784\u9020\u51fd\u6570\n  constructor: {\n    value: Student,\n  },\n  getGrade: {\n    value: function () {\n      return this.grade;\n    },\n  },\n});\nvar s1 = new Student('ming', 22, 5);",lang:"js"}),a.a.createElement("ol",{start:6},a.a.createElement("li",null,"\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f(call+\u5bc4\u751f\u5f0f\u5c01\u88c5)")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u4f7f\u7528 call \u7ee7\u627f\u7236\u7c7b this \u58f0\u660e\u7684\u5c5e\u6027/\u65b9\u6cd5"),a.a.createElement("li",null,"\u901a\u8fc7\u5bc4\u751f\u5f0f\u5c01\u88c5\u51fd\u6570\u8bbe\u7f6e\u7236\u7c7b prototype\u4e3a\u5b50\u7c7b prototype \u7684\u539f\u578b\u6765\u7ee7\u627f\u7236\u7c7b\u7684 prototype \u58f0\u660e\u7684\u5c5e\u6027/\u65b9\u6cd5"),a.a.createElement("li",null,"\u6700\u6210\u719f/\u5e38\u7528\u7684\u96c6\u6210\u65b9\u6cd5\uff0c\u907f\u514d\u4e86\u5728\u5b50\u7c7b prototype \u4e0a\u521b\u5efa\u4e0d\u5fc5\u8981\u7684\u591a\u4f59\u7684\u5c5e\u6027"),a.a.createElement("li",null,"\u53ea\u8c03\u7528\u4e00\u6b21\u7236\u7c7b\u7684\u6784\u9020\u51fd\u6570\uff0c\u540c\u65f6\u8fd8\u4fdd\u6301\u4e86\u539f\u578b\u94fe\u4e0a\u4e0b\u6587\u4e0d\u53d8")),a.a.createElement(l["a"],{code:"function Person(name, age) {\n  this.name = name;\n  this.age = age;\n  this.getName = function () {\n    return this.name;\n  };\n}\nPerson.prototype.getAge = function () {\n  return this.age;\n};\n// 1. \u501f\u7528\u6784\u9020\u51fd\u6570\u7ee7\u627f\u7236\u7c7b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\nfunction Son(name, age, sex, address) {\n  Person.call(this, name, age);\n  // \u4f7f\u7528call\u7ee7\u627f\u7236\u7c7b\u901a\u8fc7this\u58f0\u660e\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\n  this.sex = sex;\n  this.address = address;\n  this.getSex = function () {\n    return this.sex;\n  };\n}\n// 2. \u5bc4\u751f\u5f0f\u7ee7\u627f,\u5c01\u88c5\u4e86son.prototype\u5bf9\u8c61\u539f\u578b\u5f0f\u7ee7\u627ffather.prototype\u7684\u8fc7\u7a0b\uff0c\u5e76\u4e14\u589e\u5f3a\u4e86\u4f20\u5165\u7684\u5bf9\u8c61\u3002\nfunction inheritPrototype(son, father) {\n  const fatherPrototype = Object.create(father.prototype);\n  // \u539f\u578b\u5f0f\u7ee7\u627f\uff1a\u6d45\u62f7\u8d1dfather.prototype\u5bf9\u8c61 father.prototype\u4e3a\u65b0\u5bf9\u8c61\u7684\u539f\u578b\n  son.prototype = fatherPrototype;\n  // \u8bbe\u7f6efather.prototype\u4e3a\u5b50\u7c7bson.prototype\u7684\u539f\u578b\n  son.prototype.constructor = son;\n  // \u5c06\u5b50\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\u4e0a\u7684constructor\u6307\u5411\u4e3a\u81ea\u8eab\n}\ninheritPrototype(Son, Person);\nSon.prototype.getAddress = function () {\n  return this.address;\n};\nconst S1 = new Son('Bob', 20, '\u7537', 'SZ');",lang:"js"}),a.a.createElement("ol",{start:7},a.a.createElement("li",null,"ES6 extends \u7ee7\u627f")),a.a.createElement("ul",null,a.a.createElement("li",null,"es5 \u5b9e\u73b0 es6 \u7ee7\u627f")),a.a.createElement(l["a"],{code:"// extends \u6838\u5fc3\u4ee3\u7801\nfunction _inherits(son, father) {\n  // \u539f\u578b\u5f0f\u7ee7\u627f: \u8bbe\u7f6efather.prototype\u4e3ason.prototype\u7684\u539f\u578b \u7528\u4e8e\u7ee7\u627ffather.prototype\u7684\u5c5e\u6027/\u65b9\u6cd5\n  son.prototype = Object.create(father && father.prototype);\n  son.prototype.constructor = son; // \u4fee\u6b63constructor \u6307\u5411\n  // \u5c06\u7236\u7c7b\u8bbe\u7f6e\u4e3a\u5b50\u7c7b\u7684\u539f\u578b \u7528\u4e8e\u7ee7\u627f\u7236\u7c7b\u7684\u9759\u6001\u5c5e\u6027/\u65b9\u6cd5(father.some)\n  if (father) {\n    Object.setPrototypeOf ? Object.setPrototypeOf(son, father) : (son.__proto__ = father);\n  }\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u793a\u4f8b\u4ee3\u7801")),a.a.createElement(l["a"],{code:"function Person(name, age) {\n  this.name = name;\n  this.age = age;\n  this.getName = function () {\n    return this.name;\n  };\n}\n// \u8bbe\u7f6e\u7236\u7c7b\u7684\u9759\u6001\u5c5e\u6027/\u65b9\u6cd5\nPerson.static_pro_one = 'static_one';\nPerson.static_pro_two = function () {\n  console.log('\u6211\u662fPerson\u7684\u9759\u6001\u65b9\u6cd5');\n};\nPerson.prototype.getAge = function () {\n  return this.age;\n};\n// 1. \u501f\u7528\u6784\u9020\u51fd\u6570\u7ee7\u627f\u7236\u7c7b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\nfunction Son(name, age, sex, address) {\n  Person.call(this, name, age);\n  this.sex = sex;\n  this.address = address;\n  this.getSex = function () {\n    return this.sex;\n  };\n}\nfunction _inherits(son, father) {\n  // \u539f\u578b\u5f0f\u7ee7\u627f: \u8bbe\u7f6efather.prototype\u4e3ason.prototype\u7684\u539f\u578b \u7528\u4e8e\u7ee7\u627ffather.prototype\u7684\u5c5e\u6027/\u65b9\u6cd5\n  son.prototype = Object.create(father && father.prototype);\n  son.prototype.constructor = son; // \u4fee\u6b63constructor \u6307\u5411\n  // \u5c06\u7236\u7c7b\u8bbe\u7f6e\u4e3a\u5b50\u7c7b\u7684\u539f\u578b \u7528\u4e8e\u7ee7\u627f\u7236\u7c7b\u7684\u9759\u6001\u5c5e\u6027/\u65b9\u6cd5(father.some)\n  if (father) {\n    Object.setPrototypeOf ? Object.setPrototypeOf(son, father) : (son.__proto__ = father);\n  }\n}\n_inherits(Son, Person);\nconst S1 = new Son('Bob', 20, '\u7537', 'SZ');\nconsole.log(Son.static_pro_one); // static_one",lang:"js"}),a.a.createElement("ol",{start:8},a.a.createElement("li",null,"es5 \u4e0e es6 \u7ee7\u627f\u7684\u533a\u522b")),a.a.createElement("ul",null,a.a.createElement("li",null,"es5 \u7684\u7ee7\u627f\u5b9e\u8d28\u4e0a\u662f\u5148\u521b\u5efa\u5b50\u7c7b\u7684\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u518d\u5c06\u7236\u7c7b\u7684\u65b9\u6cd5\u6dfb\u52a0\u5230 this \u4e0a"),a.a.createElement("li",null,"es6 \u7684\u7ee7\u627f\u662f\u5148\u521b\u5efa\u7236\u7c7b\u7684\u5b9e\u4f8b\u5bf9\u8c61 this\uff0c\u518d\u7528\u5b50\u7c7b\u7684\u6784\u9020\u51fd\u6570\u4fee\u6539 this\uff0c\u56e0\u4e3a\u5b50\u7c7b\u6ca1\u6709\u81ea\u5df1\u7684 this \u5bf9\u8c61\uff0c\u6240\u4ee5\u5fc5\u987b\u5148\u8c03\u7528\u7236\u7c7b\u7684 super() \u65b9\u6cd5"))))})));n["default"]=e=>{var n=a.a.useContext(r["context"]),t=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(s,{demos:t})}}}]);