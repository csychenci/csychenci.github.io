(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[43],{eKVM:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=t("dEAq"),s=(t("0H/f"),t("N0lm"),t("DgDr"),t("cGlH"),t("ekZX"),t("Bjia")),c=(t("tVxl"),t("1pSt"),l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u9759\u6001\u5c5e\u6027\u4e0e\u65b9\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u9759\u6001\u5c5e\u6027\u4e0e\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u9759\u6001\u5c5e\u6027\u4e0e\u65b9\u6cd5"),l.a.createElement("hr",null),l.a.createElement("ol",null,l.a.createElement("li",null,"\u9759\u6001\u5c5e\u6027")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u9759\u6001\u5c5e\u6027\uff0c\u5b83\u5c5e\u4e8e\u7c7b\u7684\u51fd\u6570\u672c\u8eab\uff0c\u800c\u4e0d\u4f1a\u6dfb\u52a0\u5230\u539f\u578b\u5bf9\u8c61\u4e0a\u3002\u53ea\u80fd\u901a\u8fc7 ",l.a.createElement("code",null,"\u7c7b.\u5c5e\u6027\u540d")," \u6765\u8bbf\u95ee\uff0c\u9759\u6001\u5c5e\u6027\u7528\u4e8e\u5b9e\u73b0\u5c5e\u4e8e\u8be5\u7c7b\u4f46\u4e0d\u5c5e\u4e8e\u8be5\u7c7b\u4efb\u4f55\u7279\u5b9a\u5bf9\u8c61\u7684\u51fd\u6570\uff0c\u5b83\u4e0e\u7c7b\u7684\u5177\u4f53\u5b9e\u4f8b\u65e0\u5173\uff0c\u4e0d\u4f1a\u88ab\u7ed1\u5b9a\u5230\u5b9e\u4f8b\u4e0a")),l.a.createElement(s["a"],{code:"// \u6784\u9020\u51fd\u6570\nfunction Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\nPerson.static_name = 'person';\nPerson.get_static_name = function () {\n  return this.static_name;\n};",lang:"js"}),l.a.createElement(s["a"],{code:"// class\u7c7b\nclass Person {\n  static static_name = 'person';\n  static get_static_name() {\n    return this.static_name;\n  }\n}",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u9759\u6001\u5c5e\u6027\u5728\u975e\u9759\u6001\u65b9\u6cd5\u4e2d\u88ab\u4f7f\u7528\u65f6\uff0c\u4e0d\u80fd\u76f4\u63a5\u4f7f\u7528 ",l.a.createElement("code",null,"this")," \u5173\u952e\u5b57\u6765\u8c03\u7528\uff0c\u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u51fd\u6570\u540d\u6216\u6784\u9020\u51fd\u6570\u7684\u5c5e\u6027\u6765\u8c03\u7528")),l.a.createElement(s["a"],{code:"class Person {\n  constructor() {\n    this.name = Person.static_name;\n    // this.name = this.constructor.static_name\n  }\n  static static_name = 'person';\n  static get_static_name() {\n    return this.static_name;\n  }\n}",lang:"js"}),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"\u9759\u6001\u5c5e\u6027\u7684\u7ee7\u627f")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4f7f\u7528 ",l.a.createElement("code",null,"extends")," \u53bb\u6269\u5c55\u7c7b\u65f6\uff0c\u5f53\u5b50\u7c7b\u7ee7\u627f\u7236\u7c7b\u65f6\uff0c\u4f1a\u5c06\u7236\u7c7b\u7684\u9759\u6001\u5c5e\u6027\u548c\u65b9\u6cd5\u4e5f\u7ee7\u627f\u4e0b\u6765\u3002\u4f46\u662f\uff0c\u5b83\u4ecd\u7136\u662f\u57fa\u4e8e\u539f\u578b\u7684\u7ee7\u627f\u65b9\u5f0f")),l.a.createElement(s["a"],{code:"class Person {\n  static static_name = 'person';\n  static get_static_name() {\n    return this.static_name;\n  }\n}\n\nclass User extends Person {}\n\nPerson.static_name; // person\nUser.static_name; // person\n\nUser.static_name = 'user';\nUser.static_name; // user\nPerson.static_name; // person\n// \u4e3a\u5b50\u7c7b\u8bbe\u7f6e\u540c\u540d\u7684\u9759\u6001\u5c5e\u6027\uff0c\u5c06\u4e0d\u4f1a\u518d\u53bb\u7236\u7c7b\u4e0a\u5bfb\u627e\u540c\u540d\u7684\u9759\u6001\u5c5e\u6027",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6b64\u65f6\uff0c\u5b50\u7c7b\u7684\u9759\u6001\u5c5e\u6027\u548c\u65b9\u6cd5\u662f\u4ece\u7236\u7c7b\u4e0a\u7ee7\u627f\u6765\u7684\uff0c\u4e5f\u5c31\u662f\u5f53\u5b50\u7c7b\u5728\u81ea\u8eab\u627e\u4e0d\u5230\u8fd9\u4e2a\u9759\u6001\u5c5e\u6027\u65f6\uff0c\u4ed6\u4f1a\u53bb\u7236\u7c7b\u4e2d\u5bfb\u627e\u3002\u56e0\u6b64\uff0c",l.a.createElement("code",null,"extends")," \u9664\u4e86\u5c06\u5b50\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\u7684 ",l.a.createElement("em",null,l.a.createElement("strong",null,"proto"))," \u6307\u5411\u7236\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\u5916\uff0c\u8fd8\u5c06\u5b50\u7c7b\u7684 ",l.a.createElement("em",null,l.a.createElement("strong",null,"proto"))," \u6307\u5411\u4e86\u7236\u7c7b")),l.a.createElement("p",null,l.a.createElement("img",{src:t("f5OM"),alt:"\u7ee7\u627f\u5173\u7cfb"})),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5728 ",l.a.createElement("code",null,"extends")," \u5b9e\u73b0\u7ee7\u627f\u65f6\uff0c\u5b83\u521b\u5efa\u4e86\u4e24\u4e2a ",l.a.createElement("code",null,"[[Prototype]]")," \u5f15\u7528\uff0c\u5b50\u7c7b\u7684\u51fd\u6570\u7684\u539f\u578b\u7ee7\u627f\u81ea\u7236\u7c7b\uff0c\u5b50\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\u7ee7\u627f\u81ea\u7236\u7c7b\u7684\u539f\u578b\u5bf9\u8c61")),l.a.createElement(s["a"],{code:"class Person {\n  static static_name = 'person';\n  static get_static_name() {\n    return this.static_name;\n  }\n}\n\nclass User extends Person {}\n\nObject.getPrototypeOf(User) === Person; // true\nObject.getPrototypeOf(User.prototype) == Person.prototype; // true",lang:"js"}),l.a.createElement("hr",null),l.a.createElement("h2",{id:"\u79c1\u6709\u5c5e\u6027\u4e0e\u53d7\u4fdd\u62a4\u7684\u5c5e\u6027"},l.a.createElement(r["AnchorLink"],{to:"#\u79c1\u6709\u5c5e\u6027\u4e0e\u53d7\u4fdd\u62a4\u7684\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u79c1\u6709\u5c5e\u6027\u4e0e\u53d7\u4fdd\u62a4\u7684\u5c5e\u6027"),l.a.createElement("hr",null),l.a.createElement("ol",null,l.a.createElement("li",null,"\u5185\u90e8\u63a5\u53e3\u4e0e\u5916\u90e8\u63a5\u53e3")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"\u5185\u90e8\u63a5\u53e3"),"\uff1a\u53ef\u4ee5\u901a\u8fc7\u8be5\u7c7b\u7684\u5176\u4ed6\u65b9\u6cd5\u8bbf\u95ee\uff0c\u4f46\u4e0d\u80fd\u4ece\u5916\u90e8\u8bbf\u95ee\u7684\u65b9\u6cd5\u548c\u5c5e\u6027"),l.a.createElement("li",null,l.a.createElement("code",null,"\u5916\u90e8\u63a5\u53e3"),"\uff1a\u53ef\u4ee5\u901a\u8fc7\u8be5\u7c7b\u7684\u5176\u4ed6\u65b9\u6cd5\u8bbf\u95ee\uff0c\u4e5f\u53ef\u4ee5\u4ece\u7c7b\u7684\u5916\u90e8\u8bbf\u95ee\u7c7b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5"),l.a.createElement("li",null,l.a.createElement("code",null,"\u53d7\u4fdd\u62a4\u7684"),"\uff1a\u53ea\u80fd\u4ece\u7c7b\u7684\u5185\u90e8\u548c\u57fa\u4e8e\u5176\u6269\u5c55\u7684\u7c7b\u7684\u5185\u90e8\u8bbf\u95ee")),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"\u53d7\u4fdd\u62a4\u7684\u5c5e\u6027")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u901a\u8fc7\u8bbe\u7f6e ",l.a.createElement("code",null,"\u8bbf\u95ee\u5668\u5c5e\u6027")," \u4ee5\u8fbe\u5230\u63a7\u5236\u5c5e\u6027\u88ab\u4fee\u6539\u7684\u6761\u4ef6")),l.a.createElement(s["a"],{code:"class Person {\n  constructor(name, idcard) {\n    this.name = name;\n    this._idcard = idcard;\n  }\n  get idcard() {\n    return this._idcard;\n  }\n  set idcard(value) {\n    if (`${value}`.length < 6) {\n      throw new Error('idcard length is too small');\n    }\n    this._idcard = value;\n  }\n}\n\nlet p1 = new Person('Mary', 431126);\np1.idcard = 2; //  Uncaught Error: idcard length is too small",lang:"js"}),l.a.createElement("ol",{start:3},l.a.createElement("li",null,"\u53ea\u8bfb\u7684\u5c5e\u6027")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u53ea\u8bbe\u7f6e\u67d0\u5c5e\u6027\u7684 ",l.a.createElement("code",null,"get"),"\uff0c\u800c\u4e0d\u8bbe\u7f6e\u5b83\u7684 ",l.a.createElement("code",null,"set"),"\uff0c\u8fd9\u6837\u8be5\u5c5e\u6027\u53ea\u80fd\u88ab\u8bfb\u53d6\uff0c\u800c\u4e0d\u80fd\u88ab\u4fee\u6539")),l.a.createElement(s["a"],{code:"class Person {\n  constructor(name, idcard) {\n    this.name = name;\n    this._idcard = idcard;\n  }\n  get idcard() {\n    return this._idcard;\n  }\n}\n\nclass User extends Person {}\n\nlet p1 = new Person('Mary', 431126);\n// \u4ee5_\u5f00\u5934\u4f5c\u4e3a\u53d7\u4fdd\u62a4\u7684\u5c5e\u6027\u662f\u4e00\u4e2a\u7ea6\u5b9a\uff0c\u4f46\u6b64\u65f6\u901a\u8fc7 this._idcard \u4ecd\u53ef\u4fee\u6539\u8be5\u5c5e\u6027\uff0c\u9700\u8981\u6ce8\u610f",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u9700\u8981\u6ce8\u610f\uff0c",l.a.createElement("strong",null,"\u6b64\u79cd\u7c7b\u578b\u7684\u5c5e\u6027\u662f\u80fd\u88ab\u901a\u8fc7\u7ee7\u627f\u7684\u65b9\u5f0f\u7ee7\u627f\u5230\u5b50\u7c7b\u7684"))),l.a.createElement("ol",{start:4},l.a.createElement("li",null,"\u79c1\u6709\u7684\u5c5e\u6027")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u8be5\u63d0\u6848\u662f\u5373\u5c06\u88ab\u6dfb\u52a0\u5230\u89c4\u8303\u4e2d\u7684 js \u63d0\u6848\uff0c\u4e3a\u79c1\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\u63d0\u4f9b\u8bed\u8a00\u7ea7\u652f\u6301"),l.a.createElement("li",null,"\u5f53\u4f60\u9700\u8981\u5b9a\u4e49\u79c1\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\u65f6\uff0c\u5b83\u4eec\u5e94\u8be5\u4ee5 ",l.a.createElement("code",null,"#")," \u5f00\u5934\uff0c\u5e76\u4e14\u5b83\u4eec\u53ea\u5728\u7c7b\u7684\u5185\u90e8\u53ef\u88ab\u8bbf\u95ee\uff0c\u6211\u4eec\u65e0\u6cd5\u4ece\u5916\u90e8\u6216\u4ece\u7ee7\u627f\u7684\u7c7b\u4e2d\u8bbf\u95ee\u5b83")),l.a.createElement(s["a"],{code:"class Home {\n  #riches = 100;\n  #increasePrice(val) {\n    this.#riches = val + parseInt(this.#riches);\n  }\n  constructor(father, mother, son) {\n    this.father = father;\n    this.mother = mother;\n    this.son = son;\n  }\n  handleChange(val) {\n    this.#increasePrice(val);\n    console.log(this.#riches);\n  }\n}\n\nlet h1 = new Home('Bob', 'Jim', 'Tim');\n// {father: \"Bob\", mother: \"Jim\", son: \"Tim\", #increasePrice: \u0192, #riches: \"100 million\"}\n\nh1.#richers; // Uncaught SyntaxError: Private field '#richers' must be declared in an enclosing class\n\nh1.#increasePrice(250); // Uncaught SyntaxError: Private field '#richers' must be declared in an enclosing class\n\nh1.handleChange(260); // 360",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5f53\u5b50\u7c7b\u7ee7\u627f\u5177\u6709\u79c1\u6709\u5c5e\u6027\u7684\u7236\u7c7b\u65f6\uff0c\u65e0\u6cd5\u76f4\u63a5\u5728\u5b50\u7c7b\u65b9\u6cd5\u91cc\u8bbf\u95ee\u79c1\u6709\u5c5e\u6027\u3002\u4f46\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",l.a.createElement("strong",null,"\u8bbf\u95ee\u5668\u5c5e\u6027")," \u53bb\u8bbf\u95ee\u79c1\u6709\u5c5e\u6027\u3002\u56e0\u6b64\uff0c\u5229\u4e8e\u533a\u5206\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u540c\u540d\u7684\u516c\u6709\u5b57\u6bb5\uff0c\u800c ",l.a.createElement("strong",null,"\u540c\u540d\u7684\u79c1\u6709\u548c\u516c\u6709\u5b57\u6bb5\u4e0d\u4f1a\u53d1\u751f\u51b2\u7a81"))),l.a.createElement(s["a"],{code:"class Home {\n  #riches = 100;\n  #increasePrice(val) {\n    this.#riches = val + parseInt(this.#riches);\n  }\n  constructor(father, mother, son) {\n    this.father = father;\n    this.mother = mother;\n    this.son = son;\n  }\n  handleChange(val) {\n    this.#increasePrice(val);\n    console.log(this.#riches);\n  }\n}\n\nclass Person extends Home {\n  testRiches() {\n    console.log(this.#riches);\n  }\n}\n// SyntaxError: Private field '#riches' must be declared in an enclosing class",lang:"js"}),l.a.createElement(s["a"],{code:'class Home {\n  #riches = 100;\n  #increasePrice(val) {\n    this.#riches = val + parseInt(this.#riches);\n  }\n  constructor(father, mother, son) {\n    this.father = father;\n    this.mother = mother;\n    this.son = son;\n  }\n  handleChange(val) {\n    this.#increasePrice(val);\n    console.log(this.#riches);\n  }\n  get riches() {\n    return this.#riches;\n  }\n  set riches(val) {\n    this.#increasePrice(val);\n  }\n}\n\nclass Person extends Home {\n  testRiches() {\n    console.log(this.riches);\n  }\n}\n\nlet p1 = new Person(\'Bob\', \'Jim\', \'Tim\');\n// {father: "Bob", mother: "Jim", son: "Tim", #increasePrice: \u0192, #riches: 100}\n\np1.riches = 10;\n// {father: "Bob", mother: "Jim", son: "Tim", #increasePrice: \u0192, #riches: 110}\n\np1.testRiches(); // 110',lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u540c\u65f6\u6ce8\u610f\uff0c\u79c1\u6709\u5b57\u6bb5\u65e0\u6cd5\u901a\u8fc7 ",l.a.createElement("code",null,"this[name]")," \u6765\u8bbf\u95ee\uff0c\u5e76\u4e14\u79c1\u6709\u5b57\u6bb5\u4e0d\u80fd\u901a\u8fc7\u5728\u4e4b\u540e\u8d4b\u503c\u6765\u521b\u5efa\u5b83\u4eec\uff0c\u8fd9\u662f\u786e\u4fdd\u79c1\u6709\u6027\u7684 ",l.a.createElement("code",null,"\u8bed\u6cd5\u9650\u5236"),"\uff0c\u662f\u6bd4\u8f83\u7279\u6b8a\u7684\u4e00\u4e2a\u5730\u65b9")),l.a.createElement(s["a"],{code:"class User {\n  constructor(name) {\n    this.name = name;\n  }\n  #name = 'bob';\n  printName() {\n    return this['#name'];\n  }\n}\n\nlet u1 = new User('jim');\n// {name: \"jim\", #name: \"bob\"}\n\nu1.printName(); // undefined",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u628a\u79c1\u6709\u5c5e\u6027\u8bbe\u7f6e\u4e3a ",l.a.createElement("code",null,"\u9759\u6001\u79c1\u6709\u5c5e\u6027"),"\uff0c\u5b83\u53ea\u80fd\u5728\u8be5\u7c7b\u4e2d\u88ab\u8bbf\u95ee\u548c\u4fee\u6539\uff0c\u65e0\u6cd5\u5728\u7c7b\u7684\u5b9e\u4f8b\u4e2d\u4e0e\u6d3e\u751f\u7c7b\u6240\u8bbf\u95ee\u5230")),l.a.createElement(s["a"],{code:"class User {\n  constructor(name) {\n    this.name = name;\n  }\n\n  static #name = 'bob';\n\n  printName() {\n    return this['#name'];\n  }\n\n  getPriveteStaticProperty() {\n    return User.#name;\n  }\n}\n\nlet u1 = new User('jetmine');\n// User\xa0{name: \"jetmine\"}\n// \u672a\u88ab\u8bbe\u7f6e\u4e3a User\u5b9e\u4f8b\u5bf9\u8c61\u7684\u79c1\u6709\u5c5e\u6027\n\nu1.getPriveteStaticProperty(); // bob",lang:"js"})))})));n["default"]=e=>{var n=l.a.useContext(r["context"]),t=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(c,{demos:t})}},f5OM:function(e,n,t){e.exports=t.p+"static/static_property.9f90b12e.png"}}]);