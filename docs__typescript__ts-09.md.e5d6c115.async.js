(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[197],{kkeK:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),l=t.n(a),r=t("dEAq"),o=(t("0H/f"),t("N0lm"),t("DgDr"),t("cGlH"),t("ekZX"),t("Bjia")),i=(t("tVxl"),t("1pSt"),l.a.memo((n=>{n.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u58f0\u660e\u5408\u5e76"},l.a.createElement(r["AnchorLink"],{to:"#\u58f0\u660e\u5408\u5e76","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u58f0\u660e\u5408\u5e76"),l.a.createElement("hr",null),l.a.createElement("ol",null,l.a.createElement("li",null,"\u63a5\u53e3\u5408\u5e76")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5728\u7a0b\u5e8f\u4e2d\u5b9a\u4e49\u4e86\u591a\u4e2a\u76f8\u540c\u540d\u5b57\u7684\u63a5\u53e3\uff0c\u5728\u4f7f\u7528\u63a5\u53e3\u7684\u65f6\u5019\u53ef\u4ee5\u540c\u65f6\u5bf9\u5b83\u4eec\u5177\u6709\u611f\u77e5\u80fd\u529b")),l.a.createElement(o["a"],{code:"interface Query{\n  url:string;\n}\n\ninterface Query{\n  methods:'post' | 'get';\n  data:Object;\n}\n\nlet obj: Query = {\n  url: \"/api/v1/login\",\n  methods: \"post\",\n  data: {\n    \n  }\n}\n\n/** \n * \u4e00\uff1ainterface \u4f1a\u5bf9\u540c\u540d\u7684\u63a5\u53e3\u8fdb\u884c\u5408\u5e76\uff0c\u4f7f\u7528\u8be5\u63a5\u53e3\u9700\u8981\u7b26\u5408\u8be5\u63a5\u53e3\u7684\u6240\u6709\u5f62\u72b6\n * \u4e8c\uff1a\u5982\u679c\u67d0\u4e2a\u63a5\u53e3\u662f\u5168\u5c40\u6a21\u5757\uff0c\u5373\u4f7f\u4e0d\u5728\u4e00\u4e2a\u6587\u4ef6\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u8fdb\u884c\u5408\u5e76\n*/",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5728\u5408\u5e76\u540c\u540d\u63a5\u53e3\u65f6\uff0c\u5bf9\u4e8e\u63a5\u53e3\u4e2d ",l.a.createElement("strong",null,"\u975e\u51fd\u6570")," \u7684\u6210\u5458\uff0c\u8981\u6c42\u4fdd\u8bc1\u5b83\u7684\u552f\u4e00\u6027\u3002\u5982\u679c\u4e0d\u552f\u4e00(",l.a.createElement("strong",null,"\u4e5f\u5c31\u662f\u5b58\u5728\u591a\u4e2a\u63a5\u53e3\u4e2d\u7684\u540c\u540d\u6210\u5458"),")\uff0c\u90a3\u4e48\u5b83\u4eec\u7684\u7c7b\u578b\u5fc5\u987b\u76f8\u540c")),l.a.createElement(o["a"],{code:"interface UserIm {\n  name:string;\n  id:string | number;\n  height:number;\n  weight:number;\n}\n\ninterface UserIm {\n  age:number;\n  height:number;\n  weight:string;\n}\n/** \n * Subsequent property declarations must have the same type.  Property 'weight' must be of type 'number', but here has type 'string'.\n * \u975e\u51fd\u6570\u7684\u6210\u5458\u5982\u679c\u4e0d\u552f\u4e00\uff0c\u9700\u8981\u4fdd\u8bc1\u5b83\u4eec\u7684\u7c7b\u578b\u4e00\u81f4\uff0c\u5982 height \u5c5e\u6027\uff0c\u5b83\u7684\u503c\u7684\u7c7b\u578b\u90fd\u662fnumber\n*/",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u800c\u5bf9\u4e8e ",l.a.createElement("strong",null,"\u51fd\u6570")," \u6210\u5458\uff0c\u6bcf\u4e00\u4e2a\u51fd\u6570\u90fd\u4f1a\u88ab\u58f0\u660e\u6210\u4e00\u4e2a\u51fd\u6570\u91cd\u8f7d")),l.a.createElement(o["a"],{code:"interface UserIm {\n  name:string;\n  id:string | number;\n  height:number;\n  println (age:number):number\n}\n\ninterface UserIm {\n  age:number;\n  height:number;\n  println (name:string):string\n}\n\nlet xiaoming: UserIm = {\n  id: 'xiaoming1234',\n  name: 'xiaoming',\n  age: 18,\n  height: 173,\n  println: <T>(str: T) => {\n    return str\n  }\n}\n\n/** \n * \u51fd\u6570\u6210\u5458\u5728\u5408\u5e76\u65f6\u4f1a\u53d8\u6210\u51fd\u6570\u91cd\u8f7d\uff0c\u63a5\u53e3\u5185\u90e8\u51fd\u6570\u7684\u7c7b\u578b\u4f1a\u6309\u4e66\u5199\u7684\u987a\u5e8f\u8fdb\u884c\u6392\u4f4d\uff0c\n * \u4e5f\u5c31\u662f\u5148\u5199\u7684\u88ab\u4f18\u5148\u5339\u914d\uff0c\u50cf\u4e0a\u9762\u5c31\u662f println (age:number):number \u88ab\u4f18\u5148\u5339\u914d\n * \u4f8b\u5916\u60c5\u51b5\uff1a\u62e5\u6709\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u53c2\u6570\u7684\u51fd\u6570\u4f1a\u88ab\u4f18\u5148\u5339\u914d\n*/",lang:"ts"}),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"\u547d\u540d\u7a7a\u95f4\u7684\u5408\u5e76")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u547d\u4ee4\u7a7a\u95f4\u4f1a\u53d1\u751f\u5408\u5e76\u3002\u5176\u4e2d ",l.a.createElement("strong",null,"\u5bfc\u51fa\u7684\u6210\u5458\u540d\u4e0d\u5141\u8bb8\u91cd\u540d"),"\uff0c\u8981\u4e0e\u63a5\u53e3\u5408\u5e76\u533a\u5206\u5f00")),l.a.createElement(o["a"],{code:"/**\n * Duplicate function implementation.\n * \u540c\u540d\u547d\u540d\u7a7a\u95f4\u5408\u5e76\uff0c\u4e0d\u5141\u8bb8\u6210\u5458\u91cd\u590d\n */\n\nnamespace Userim{\n  const name = 'xiaoming';\n  export function printlnName(str:string) {\n    return str\n  }\n  export function getAge(age:number) {\n    return age\n  }\n}\n\nnamespace Userim{\n  const name = 'xiaoming';\n  export function printlnName(str:string) {\n    return str\n  }\n}\n/** \n * printlnName \u6807\u8bc6\u7b26\u91cd\u590d\n*/",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6269\u5c55\u4e00\u4e0b\uff0c\u547d\u540d\u7a7a\u95f4\u4f1a\u88ab\u7f16\u8bd1\u6210\u5982\u4e0b js \u4ee3\u7801")),l.a.createElement(o["a"],{code:"var Userim;\n\n(function (Userim) {\n    var name = 'xiaoming';\n    function printlnName(str) {\n      return str;\n    }\n    Userim.printlnName = printlnName;\n    function getAge(age) {\n        return age;\n    }\n    Userim.getAge = getAge;\n})(Userim || (Userim = {}));\n\n(function (Userim) {\n    var name = 'xiaoming';\n    function printlnName(str) {\n        return str;\n    }\n    Userim.printlnName = printlnName;\n})(Userim || (Userim = {}));",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6839\u636e\u4e0a\u8ff0\u8f6c\u8bd1\u7684\u4ee3\u7801\u53ef\u4ee5\u53d1\u73b0\uff0c\u6211\u4eec\u53ef\u4ee5\u624b\u52a8\u4f20\u5165\u4e00\u4e2a ",l.a.createElement("strong",null,"\u51fd\u6570\u5bf9\u8c61")," \u6216\u662f ",l.a.createElement("strong",null,"\u7c7b"),"\uff0c\u8fd9\u6837\u7684\u8bdd\u53ef\u4ee5\u7ed9\u51fd\u6570\u6216\u8005\u7c7b\u6dfb\u52a0\u4e00\u4e9b\u9759\u6001\u7684\u6210\u5458")),l.a.createElement(o["a"],{code:'function app() {}\n\nnamespace app{\n  export let version = "1.0"\n  export function getArgs() {\n    return arguments\n  }\n}\n\nclass Animal {\n\n}\n\nnamespace Animal {\n  export let getName = (name:string) => name\n  export function printlnSound <T>(sound:T) {\n    return sound\n  }\n}',lang:"ts"}),l.a.createElement(o["a"],{code:'function app() {\n}\n\n(function (app) {\n  app.version = "1.0";\n  function getArgs() {\n    return arguments;\n  }\n  app.getArgs = getArgs;\n})(app || (app = {}));\n\nvar Animal = /** @class */ (function () {\n  function Animal() {\n  }\n  return Animal;\n}());\n\n(function (Animal) {\n  Animal.getName = function (name) { return name; };\n  function printlnSound(sound) {\n    return sound;\n  }\n  Animal.printlnSound = printlnSound;\n})(Animal || (Animal = {}));',lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u547d\u4ee4\u7a7a\u95f4\u8fd8\u53ef\u4ee5\u548c ",l.a.createElement("strong",null,"\u679a\u4e3e")," \u8fdb\u884c\u5408\u5e76")),l.a.createElement(o["a"],{code:'// \u5b9a\u4e49\u4e00\u4e2a\u679a\u4e3e\u7c7b\u578b\nenum Role {\n  Repo,\n  Developer,\n  Maintainer,\n  Owner,\n  Guest\n}\n\nnamespace Role {\n  export let rootRole = "admin"\n  export function getRole() {\n    \n  }\n}',lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u8f6c\u8bd1\u6210 js \u540e\uff0c\u5b9e\u9645\u4e0a\u4e5f\u662f\u7ed9\u679a\u4e3e\u6dfb\u52a0\u4e86\u65b0\u7684\u6210\u5458\uff0c\u65b0\u7684\u6210\u5458\u4e0d\u4f1a\u8fdb\u884c\u53cd\u5411\u6620\u5c04")),l.a.createElement(o["a"],{code:'var Role;\n\n(function (Role) {\n    Role[Role["Repo"] = 0] = "Repo";\n    Role[Role["Developer"] = 1] = "Developer";\n    Role[Role["Maintainer"] = 2] = "Maintainer";\n    Role[Role["Owner"] = 3] = "Owner";\n    Role[Role["Guest"] = 4] = "Guest";\n})(Role || (Role = {}));\n\n(function (Role) {\n    Role.rootRole = "admin";\n    function getRole() {\n    }\n    Role.getRole = getRole;\n})(Role || (Role = {}));',lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5b9a\u4e49\u7684\u51fd\u6570\u6216\u7c7b\u9700\u8981\u5728\u547d\u540d\u7a7a\u95f4\u7684\u524d\u9762\uff0c\u800c\u679a\u4e3e\u6ca1\u6709\u8fd9\u4e2a\u8981\u6c42"),"\u3002\u8fd9\u662f\u56e0\u4e3a\u679a\u4e3e\u7684\u8f6c\u8bd1\u8fc7\u7a0b\u5e76\u4e0d\u4f1a\u4ea7\u751f\u7684\u65b0\u7684\u51fd\u6570\u6216\u5bf9\u8c61\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u5b83\u624d\u4f1a\u65b0\u5efa\u5bf9\u8c61\uff0c\u5982\u679c\u5b58\u5728\u4e86\u5c31\u53ea\u662f\u5728\u5176\u4e0a\u8fdb\u884c\u4fee\u6539\u3002\u800c\u7c7b\u6216\u51fd\u6570\u4f1a\u4ea7\u751f\u65b0\u7684\u51fd\u6570\u5bf9\u8c61\uff0c\u5982\u679c\u653e\u5728\u547d\u540d\u7a7a\u95f4\u7684\u540e\u9762\uff0c\u547d\u540d\u7a7a\u95f4\u4e2d\u65b0\u6dfb\u52a0\u7684\u53d8\u91cf\u6216\u65b9\u6cd5\u5168\u90e8\u4f1a\u88ab\u51fd\u6570\u5bf9\u8c61\u8986\u76d6\uff0c\u4e5f\u5c31\u5931\u53bb\u4e86\u5b83\u7684\u610f\u4e49")),l.a.createElement(o["a"],{code:'var Animal;\n\n(function (Animal) {\n    Animal.getName = function (name) { return name; };\n    function printlnSound(sound) {\n        return sound;\n    }\n    Animal.printlnSound = printlnSound;\n})(Animal || (Animal = {}));\n\nvar Animal = /** @class */ (function () {\n    function Animal() {\n    }\n    return Animal;\n}());\n/** \n * 1. \u547d\u540d\u7a7a\u95f4\u5728\u7c7b/\u51fd\u6570\u7684\u524d\u9762\n * \u8fd9\u91cc\u7684 Animal \u88ab\u8986\u76d6\uff0c\u547d\u540d\u7a7a\u95f4\u6dfb\u52a0\u7684\u5185\u5bb9\u5168\u90e8\u4e22\u5931\n*/\nvar Role;\n\n(function (Role) {\n    Role.rootRole = "admin";\n    function getRole() {\n    }\n    Role.getRole = getRole;\n})(Role || (Role = {}));\n\n(function (Role) {\n    Role[Role["Repo"] = 0] = "Repo";\n    Role[Role["Developer"] = 1] = "Developer";\n    Role[Role["Maintainer"] = 2] = "Maintainer";\n    Role[Role["Owner"] = 3] = "Owner";\n    Role[Role["Guest"] = 4] = "Guest";\n})(Role || (Role = {}));\n/** \n * 2. \u547d\u540d\u7a7a\u95f4\u5728\u679a\u4e3e\u7684\u524d\u9762\n * \u8fd9\u91cc\u53ea\u4f1a\u5728\u5df2\u5b58\u5728\u7684 Role \u4e0a\u8fdb\u884c\u4fee\u6539\uff0c\u4e0d\u4f1a\u88ab\u8986\u76d6\n*/',lang:"ts"}),l.a.createElement("hr",null),l.a.createElement("h2",{id:"\u58f0\u660e\u6587\u4ef6\u7684\u7f16\u5199"},l.a.createElement(r["AnchorLink"],{to:"#\u58f0\u660e\u6587\u4ef6\u7684\u7f16\u5199","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u58f0\u660e\u6587\u4ef6\u7684\u7f16\u5199"),l.a.createElement("hr",null),l.a.createElement("ol",null,l.a.createElement("li",null,"\u4ec0\u4e48\u662f\u58f0\u660e\u6587\u4ef6")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5728 ts \u9879\u76ee\u4e2d\u4f7f\u7528\u975e ts \u7f16\u5199\u7684\u7b2c\u4e09\u65b9\u5e93\u65f6\uff0c\u6211\u4eec\u9700\u8981\u5f15\u5165\u5b83\u7684\u58f0\u660e\u6587\u4ef6\u6216\u8005\u7f16\u5199\u5b83\u7684\u58f0\u660e\u6587\u4ef6\uff0c\u624d\u80fd\u83b7\u5f97\u5bf9\u5e94\u7684\u4ee3\u7801\u8865\u5168\u3001\u63a5\u53e3\u63d0\u793a\u7b49\u529f\u80fd")),l.a.createElement(o["a"],{code:"// xxx.d.ts\ndeclare let jQuery: (selector: string) => any;\n\n/** \n * \u4e5f\u53ef\u4ee5\u4f7f\u7528\u793e\u533a\u7f16\u5199\u597d\u7684\u7c7b\u578b\u58f0\u660e\u5305\uff0c\u793e\u533a\u4e0d\u5b58\u5728\u7684\u58f0\u660e\u6587\u4ef6\u4e5f\u53ef\u4ee5\u81ea\u5df1\u8fdb\u884c\u7f16\u5199\n * npm i @types/jquery\n*/",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4e00\u822c\u6211\u4eec\u628a\u628a\u5b83\u653e\u5728 ",l.a.createElement("em",null,"xxx.d.ts")," \u4e2d\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u58f0\u660e\u6587\u4ef6\uff0c\u53bb\u58f0\u660e\u67d0\u4e2a\u7b2c\u4e09\u65b9\u5e93\u7684\u7c7b\u578b\uff0c\u540e\u7f00\u4ee5 ",l.a.createElement("em",null,".d.ts")," \u7ed3\u5c3e\u3002\u9879\u76ee\u4e2d\u7684\u5176\u4ed6\u6240\u6709\u7684 ts \u6587\u4ef6\u90fd\u80fd\u83b7\u53d6\u5230 ",l.a.createElement("em",null,".d.ts")," \u7b2c\u4e09\u65b9\u5e93\u7684\u7c7b\u578b\u5b9a\u4e49")),l.a.createElement(o["a"],{code:'// tsconfig.json\n\n{\n  "include": ["**/*"]\n}',lang:"json"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6dfb\u52a0\u4ee5\u4e0a\u5185\u5bb9\uff0c\u53ef\u544a\u8bc9\u7f16\u8bd1\u5668\u5e2e\u52a9\u7f16\u8bd1\u9879\u76ee\u4e0b\u6240\u6709\u7684\u6587\u4ef6\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u53ef\u4ee5\u901a\u8fc7\u5b89\u88c5\u5bf9\u5e94\u7684 ",l.a.createElement("em",null,"@types/xxx")," \u6765\u5f15\u5165\u8be5\u5e93\u7684\u58f0\u660e\u6587\u4ef6")),l.a.createElement(o["a"],{code:"npm install @types/jQuery --save-dev",lang:"bash"}),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"\u7f16\u5199\u58f0\u660e\u6587\u4ef6")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5168\u5c40\u7c7b\u5e93\uff1a\u4e00\u822c\u7528\u4e8e\u5916\u90e8\u7b2c\u4e09\u65b9\u5e93\u7684\u6a21\u5757\u58f0\u660e\u3002\u5982\u679c\u6211\u4eec\u8981\u4f7f\u7528\u4e00\u4e2a\u5916\u90e8\u5305\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u5c06\u5b83\u5206\u4e3a\u6e90\u7801\u6587\u4ef6(js\u6587\u4ef6)\u548c\u58f0\u660e\u6587\u4ef6")),l.a.createElement(o["a"],{code:'/** \n * \u9996\u5148\u5728\u6587\u4ef6\u5939lib\u4e0b\u65b0\u5efa\u4e00\u4e2ajs\u6587\u4ef6\uff0c\u7528\u4e8e\u5145\u5f53\u6e90\u7801\u6587\u4ef6\n * path\uff1alib/app/app-lib.js\n*/\nfunction App () {}\n\nApp.version = "1.0"\n\nApp.tasks = []\n\nApp.run = function () {\n  while(App.tasks.length){\n    const task = App.tasks.shift();\n    task.task();\n  }\n}\n\nApp.addTask = function (name,task){\n  App.tasks.push({\n    name,\n    task\n  })\n}\n\nApp.singleRun = function (name) {\n  const index = App.tasks.findIndex(task => task.name === name);\n  App.tasks[index].task();\n  App.tasks.splice(index,0)\n}',lang:"js"}),l.a.createElement(o["a"],{code:"/** \n * \u63a5\u7740\u5728\u6587\u4ef6\u5939lib\u4e0b\u65b0\u5efa\u4e00\u4e2ats\u6587\u4ef6\uff0c\u7528\u4e8e\u5145\u5f53\u58f0\u660e\u6587\u4ef6\uff0c\u9700\u8981\u4ee5 .d.ts \u4e3a\u540e\u7f00\n * path\uff1alib/app/app-lib.d.ts\n*/\n\ndeclare function App(options):void\ndeclare namespace App {\n  const version = '1.0'\n  const tasks:{\n    name:string,\n    task:()=>void\n  }[]\n}",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6a21\u5757\u7c7b\u5e93\uff1a\u5f53\u6211\u4eec\u8981\u5728\u6587\u4ef6\u4e2d\u5f15\u5165\u5176\u4ed6\u6a21\u5757\u7684\u65f6\u5019\uff0c\u4f1a\u63d0\u793a\u627e\u4e0d\u5230\u8be5\u6a21\u5757\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u7f16\u5199\u5b83\u7684\u6a21\u5757\u7c7b\u5e93\u6587\u4ef6")),l.a.createElement(o["a"],{code:"module.exports = {\n  version:'1.0',\n  tasks:[ /* \u7701\u7565\u5185\u5bb9 */]\n}\n\n/**\n * import moduleLib from \u2018./module-lib' \u62a5\u9519\n */",lang:"js"}),l.a.createElement(o["a"],{code:"/** \n * module-lib.d.ts\n*/\n\ndeclare function moduleLib(options):void\n\ndeclare namespace moduleLib {\n  const version = '1.0'\n  const tasks:{\n    name:string,\n    task:()=>void\n  }[]\n}\n\nexport = moduleLib\n\n/** \n * \u901a\u8fc7export\u5c06\u6a21\u5757\u7c7b\u5e93\u5bfc\u51fa\n*/",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"UMD\u5e93\uff1a\u4e0e\u6a21\u5757\u7c7b\u5e93\u7c7b\u4f3c\uff0c\u4e5f\u662f\u5728\u5bfc\u51fa\u7684\u65f6\u5019\u62a5\u9519\u3002\u5b83\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5168\u5c40\u7684\u65b9\u5f0f\u5f15\u5165")),l.a.createElement(o["a"],{code:"/** \n * umd-lib.d.ts\n*/\n\ndeclare namespace umdLib {\n  const version = '1.0'\n  const tasks:{\n    name:string,\n    task:()=>void\n  }[]\n}\n\nexport as namespace umdLib\n// umd\u5e93\u4e0d\u53ef\u7f3a\u5c11\nexport = umdLib\n\n/** \n * \u901a\u8fc7export\u5c06\u6a21\u5757\u7c7b\u5e93\u5bfc\u51fa\n*/",lang:"ts"}),l.a.createElement("ol",{start:3},l.a.createElement("li",null,"\u63d2\u4ef6")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4e00\u822c\u6307\u7684\u662f\u7ed9\u5176\u4ed6\u7684\u4e09\u65b9\u7c7b\u5e93\u589e\u52a0\u4e00\u4e9b\u5b9e\u7528\u7684\u3001\u81ea\u5b9a\u4e49\u7684\u65b9\u6cd5")),l.a.createElement(o["a"],{code:"import moment from 'moment';\n\ndeclare module 'moment' fn (): void\n/** \n * \u6dfb\u52a0\u81ea\u5b9a\u4e49\u65b9\u6cd5 fn\n*/\n\nmoment.fn = () => {}\n// ok",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5982\u679c\u9700\u8981\u6dfb\u52a0\u5168\u5c40\u7684\u63d2\u4ef6\uff0c\u4e5f\u5c31\u662f\u7ed9\u5168\u5c40\u7684\u53d8\u91cf\u4e0a\u6dfb\u52a0\u5c5e\u6027\u6216\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5728 global \u4e0a\u8fdb\u884c\u5b9a\u4e49\uff0c\u4f46\u662f\u4f1a\u5bf9\u5168\u5c40\u7a7a\u95f4\u9020\u6210\u4e00\u5b9a\u7684\u6c61\u67d3")),l.a.createElement(o["a"],{code:"declare global {\n  namespace App {\n    function getVersion(arg:string):void\n  }\n}\n\nApp.getVersion('1.0')",lang:"ts"})))})));e["default"]=n=>{var e=l.a.useContext(r["context"]),t=e.demos;return l.a.useEffect((()=>{var e;null!==n&&void 0!==n&&null!==(e=n.location)&&void 0!==e&&e.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:t})}}}]);