(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[192],{CrHq:function(e,n,t){"use strict";t.r(n);var l=t("q1tI"),a=t.n(l),r=t("dEAq"),u=(t("0H/f"),t("N0lm"),t("DgDr"),t("cGlH"),t("ekZX"),t("Bjia")),m=(t("tVxl"),t("1pSt"),a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"\u51fd\u6570\u7c7b\u578b"},a.a.createElement(r["AnchorLink"],{to:"#\u51fd\u6570\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u51fd\u6570\u7c7b\u578b"),a.a.createElement("hr",null),a.a.createElement("ol",null,a.a.createElement("li",null,"\u51fd\u6570\u58f0\u660e")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u51fd\u6570\u662f\u6709\u8f93\u5165\u548c\u8f93\u51fa\u7684\uff0c\u9700\u8981\u5bf9\u5176\u51fd\u6570\u53c2\u6570\u4e0e\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u8fdb\u884c\u7ea6\u675f\u3002\u5982\u4e0b\u6240\u793a")),a.a.createElement(u["a"],{code:"function fnMultiply(x: number, y: number): number {\n  return x * y;\n}",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u8c03\u7528\u5df2\u7ecf\u58f0\u660e\u7684\u51fd\u6570\uff0c\u8981\u6c42\u8f93\u5165\u7ed9\u5b9a\u7684\u53c2\u6570\u3002\u4e5f\u5c31\u662f\u5b9e\u53c2\u8981\u4e0e\u5f62\u53c2\u7684\u4e2a\u6570\u548c\u7c7b\u578b\u4e00\u81f4")),a.a.createElement(u["a"],{code:"function fnMultiply1(x: number, y: number, c: number): number {\n  return x * y + c;\n}\n\nfnMultiply1(1, 2); // Expected 3 arguments, but got 2.\n\nfnMultiply1(1, 2, 3, 4); // Expected 3 arguments, but got 4.",lang:"ts"}),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"\u51fd\u6570\u8868\u8fbe\u5f0f")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u4e0d\u540c\u4e8e\u51fd\u6570\u58f0\u660e\uff0c\u5bf9\u4e8e\u51fd\u6570\u8868\u8fbe\u5f0f\uff0c\u6211\u4eec\u5e94\u8be5\u89c4\u5b9a\u7b49\u53f7\u5de6\u53f3\u4e24\u8fb9\u7684\u7c7b\u578b(\u5de6\u8fb9\u7684\u662f\u7c7b\u578b\uff0c\u53f3\u8fb9\u7684\u662f\u5177\u4f53\u7684\u5b9e\u73b0)")),a.a.createElement(u["a"],{code:"// \u7bad\u5934\u51fd\u6570\u5f62\u5f0f\nlet fn: (x: number, y: number) => number = (x ,y) => x + y;\n\n// \u666e\u901a\u51fd\u6570\u8868\u8fbe\u5f0f\nlet fn: (x: number, y: number) => number = function (x: number, y: number): number {\n  return x + y;\n};",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u4e0d\u6307\u5b9a\u5de6\u4fa7\u7c7b\u578b\u7684\u60c5\u51b5\u4e0b\uff0cts\u4f1a\u6839\u636e\u4e0a\u4e0b\u6587\u63a8\u65ad\u51fa\u4e00\u4e2a\u7c7b\u578b")),a.a.createElement(u["a"],{code:"/** \n * let fn: (x: number, y: number) => number\n*/\nlet fn = (x: number, y: number): number => x + y;",lang:"ts"}),a.a.createElement("ol",{start:3},a.a.createElement("li",null,"\u901a\u8fc7\u63a5\u53e3\u5b9a\u4e49\u51fd\u6570\u5f62\u72b6")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5bf9\u7b49\u53f7\u5de6\u4fa7\u8fdb\u884c\u7c7b\u578b\u9650\u5236\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u4ee5\u540e\u5bf9\u51fd\u6570\u540d\u8d4b\u503c\u65f6\u4fdd\u8bc1\u53c2\u6570\u4e2a\u6570\u3001\u53c2\u6570\u7c7b\u578b\u3001\u8fd4\u56de\u503c\u7c7b\u578b\u4e0d\u53d8")),a.a.createElement(u["a"],{code:"let compute:(a:number, b:number) => number\n// \u4ec5\u4ec5\u8868\u793a\u51fd\u6570\u7684\u7c7b\u578b\uff0c\u5e76\u6ca1\u6709\u5177\u4f53\u7684\u5b9e\u73b0\ncompute = (a, b) => a + b\n// \u5bf9compute\u7684\u5177\u4f53\u5b9e\u73b0",lang:"ts"}),a.a.createElement(u["a"],{code:"interface delFnc {\n  (methods: string, params: string): boolean;\n}\n\nlet fn1: delFnc = function (methods, params) {\n  if (methods && params === 'OK') {\n    return true;\n  } else {\n    return false;\n  }\n};\n\nlet delRes = fn1('get', 'OK');",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u4f7f\u7528\u63a5\u53e3\u6765\u5b9a\u4e49\u51fd\u6570\u7684\u7c7b\u578b\uff0c\u4ec5\u4ec5\u4ee3\u8868\u8be5\u51fd\u6570\u7684\u7c7b\u578b\uff0c\u5e76\u4e0d\u5305\u542b\u51fd\u6570\u7684\u5b9e\u73b0")),a.a.createElement("ol",{start:4},a.a.createElement("li",null,"\u53ef\u9009\u53c2\u6570")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u7c7b\u4f3c\u4e8e\u63a5\u53e3\u7684\u53ef\u9009\u5c5e\u6027\uff0c\u4f46\u5b83 ",a.a.createElement("strong",null,"\u5fc5\u987b\u5728\u56fa\u5b9a\u53c2\u6570\u7684\u540e\u9762"))),a.a.createElement(u["a"],{code:"interface Fn {\n  (x: string, y?: number): number;\n}\n\nlet fn: Fn = (x: string, y: number): number => parseInt(x, y);\n\nfn('0xff', 36); // 43323\nfn('0xff'); // 255",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u8fd8\u53ef\u4ee5\u7ed9\u53c2\u6570\u8bbe\u7f6e\u9ed8\u8ba4\u503c\uff0cts \u4f1a\u5c06\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u7684\u53c2\u6570\u8bc6\u522b\u4e3a\u53ef\u9009\u53c2\u6570\uff0c\u4f46\u5b83\u4e0d\u53d7 ",a.a.createElement("strong",null,a.a.createElement("code",null,"\u53ef\u9009\u53c2\u6570\u5fc5\u987b\u5728\u56fa\u5b9a\u53c2\u6570\u7684\u540e\u9762"))," \u7684\u9650\u5236")),a.a.createElement(u["a"],{code:"/**\n * \u4e0d\u80fd\u8fd9\u6837\u5b9a\u4e49\u63a5\u53e3\uff0c\u8fd9\u6837\u4ec5\u4ec5\u662f\u51fd\u6570\u7c7b\u578b\u7684\u5b9a\u4e49\n * \u9ed8\u8ba4\u503c\u9700\u8981\u5b9a\u4e49\u5230\u51fd\u6570\u7684\u5b9e\u73b0\u4e2d\n * \u53c2\u6570\u521d\u59cb\u503c\u8bbe\u5b9a\u9879\u53ea\u80fd\u5728\u51fd\u6570\u6216\u6784\u9020\u51fd\u6570\u7684\u5b9e\u73b0\u4e2d\u4f7f\u7528\n */\ninterface Fn {\n  (x: string = '123', y: number): number;\n}\n// ts error",lang:"ts"}),a.a.createElement(u["a"],{code:"function fn(x: string, y: number = 8): number {\n  return parseInt(x, y);\n}\n\n\nlet fn1 = (x: string, y: number = 8): number => parseInt(x, y);\n/** \n * \u4e0d\u80fd\u5728\u5de6\u8fb9\u4f7f\u7528\u7c7b\u578b\u58f0\u660e\u7684\u51fd\u6570\u8868\u8fbe\u5f0f\u4e2d\u4f7f\u7528\u9ed8\u8ba4\u503c\n * \u8fd9\u91cc fn1 \u7684\u7c7b\u578b\u662f ts \u6839\u636e\u540e\u9762 = \u5bf9\u5b83\u7684\u5b9e\u73b0\u4e2d\u63a8\u65ad\u51fa\u6765\u7684\u7c7b\u578b\n * \u8fd9\u79cd\u5c31\u53ef\u4ee5\u8bbe\u7f6e\u9ed8\u8ba4\u503c\n*/",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u9ed8\u8ba4\u503c\u7684\u7c7b\u578b\u5fc5\u987b\u662f\u53c2\u6570\u7c7b\u578b\u7684\u5b50\u7c7b\u578b")),a.a.createElement(u["a"],{code:"function fn(x: number = 'hello') {\n  return x;\n}\n// Type '\"hello\"' is not assignable to type 'number'.\n\nfunction fn1(x: number | string = 'jetmine') {\n  return x;\n}",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u4e0e\u8054\u5408\u7c7b\u578b\u5728\u51fd\u6570\u4e2d\u7684\u8868\u73b0\u533a\u522b\uff0c\u53ef\u4ee5\u53d1\u73b0\uff0c\u4f7f\u7528\u8054\u5408\u7c7b\u578b\u7684\u53c2\u6570\u5b9e\u9645\u4e0a\u8fd8\u662f\u4e00\u4e2a ",a.a.createElement("strong",null,"\u5fc5\u9700\u53c2\u6570"),"\uff0c\u5b83\u662f\u4e0d\u53ef\u7f3a\u7701\u7684")),a.a.createElement(u["a"],{code:"let fn = (x?: string) => x;\nlet fn1 = (x: string | undefined) => x;\n\nfn();\nfn1(); // // Expected 1 arguments, but got 0.\n\nfn(undefined);\nfn1(undefined);",lang:"ts"}),a.a.createElement("ol",{start:5},a.a.createElement("li",null,a.a.createElement("em",null,"rest")," \u53c2\u6570")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u83b7\u53d6\u51fd\u6570\u4e2d\u7684\u5269\u4f59\u53c2\u6570\uff0c\u5b83\u662f\u4e00\u4e2a\u6570\u7ec4")),a.a.createElement(u["a"],{code:"function fn(arr: any[], ...rest: any[]): any[] {\n  return arr.concat(rest);\n}\n\nlet arr1: number[] = [1, 2, 3, 4];\n\nlet arr2 = fn(arr1, [1, 2, 'a', true]);",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u8fd8\u53ef\u4ee5\u5c06 rest \u53c2\u6570\u805a\u5408\u7684\u7c7b\u578b\u5b9a\u4e49\u4e3a\u8054\u5408\u7c7b\u578b\u6570\u7ec4")),a.a.createElement(u["a"],{code:"let fn = (...rest: (string | number)[]): number => {\n  return rest.reduce<number>((last, target) => {\n    return last + Number(target);\n  }, 0);\n};\n\nfn(1, 2, 3, 4, '5', 6);",lang:"ts"}),a.a.createElement("ol",{start:6},a.a.createElement("li",null,"\u51fd\u6570\u91cd\u8f7d")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u91cd\u8f7d\u5141\u8bb8\u4e00\u4e2a\u51fd\u6570\u63a5\u53d7\u4e0d\u540c\u6570\u91cf\u6216\u7c7b\u578b\u7684\u53c2\u6570\u65f6\uff0c\u4f5c\u51fa\u4e0d\u540c\u7684\u5904\u7406\u3002\u5b83\u662f\u4e00\u79cd\u66f4\u7cbe\u786e\u5730\u63cf\u8ff0\u53c2\u6570\u4e0e\u8fd4\u56de\u503c\u7c7b\u578b\u7ea6\u675f\u5173\u7cfb\u7684\u51fd\u6570\u7c7b\u578b"),a.a.createElement("li",null,"\u4f7f\u7528\u51fd\u6570\u91cd\u8f7d\u53ef\u4ee5\u907f\u514d\u5b9a\u4e49\u591a\u4e2a\u529f\u80fd\u76f8\u4f3c\u7684\u51fd\u6570\uff0c\u63d0\u5347\u51fd\u6570\u7684\u53ef\u8bfb\u6027\u3002\u9700\u8981\u6ce8\u610f\uff1a\u51fd\u6570\u91cd\u8f7d\u5217\u8868\u7684\u5404\u4e2a\u6210\u5458\u5fc5\u987b\u662f\u51fd\u6570\u5b9e\u73b0\u7684\u5b50\u96c6")),a.a.createElement(u["a"],{code:"function add(...rest: string[]):string;\nfunction add(...rest: number[]): number;\nfunction add(...rest:Array<string|number>):string|number{\n  if(typeof rest[0] === 'number') {\n    return (rest as number[]).reduce<number>((prev:number,curr:number)=>{\n      return prev + curr\n    },0)\n  } else if(typeof rest[0] === 'string'){\n    return rest.join(',')\n  }\n  return ''\n}\n\nadd(2, 5, 4)\n\nadd('hello', ' ', 'world')",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"ts \u5728\u5904\u7406\u91cd\u8f7d\u7684\u65f6\u5019\uff0c\u4f1a\u4f18\u5148\u4ece\u6700\u524d\u9762\u7684 ",a.a.createElement("strong",null,"\u51fd\u6570\u5b9a\u4e49\u5217\u8868")," \u5f00\u59cb\u5339\u914d\uff0c\u5982\u679c\u5339\u914d\u7684\u8bdd\u4f1a\u4f7f\u7528\u7b2c\u4e00\u4e2a\u51fd\u6570\u5b9a\u4e49\uff0c\u5982\u679c\u4e0d\u5339\u914d\u5c31\u4f1a\u7ee7\u7eed\u5f80\u4e0b\u3002\u6240\u4ee5\u591a\u4e2a\u51fd\u6570\u5b9a\u4e49\u5982\u679c\u6709\u5305\u542b\u5173\u7cfb\uff0c\u9700\u8981\u4f18\u5148\u628a\u7cbe\u786e\u7684\u5b9a\u4e49\u5199\u5728\u524d\u9762")),a.a.createElement(u["a"],{code:"interface T1 {\n  name: string;\n}\n\ninterface T2 extends T1 {\n  age: number;\n}\n\nfunction fn(x: T1): number;\nfunction fn(x: T2): string;\nfunction fn(x: T1 | T2): any {}\nconst x = fn({ name: '' } as T1); // number\nconst y = fn({ name: '', age: 5 } as T2); // number\n/** \n * T2\u7ee7\u627f\u81f3T1\uff0c\u56e0\u6b64\u7c7b\u578b\u4e3aT2\u7684\u53c2\u6570\u4f1a\u548c\u7c7b\u578b\u4e3aT1\u7684\u53c2\u6570\u4e00\u6837\u5339\u914d\u5230\u7b2c\u4e00\u4e2a\u51fd\u6570\u91cd\u8f7d\n * \u6240\u4ee5\u5b83\u4eec\u7684\u8fd4\u56de\u503c\u5c31\u90fd\u662fnumber\n*/",lang:"ts"}),a.a.createElement(u["a"],{code:"interface T1 {\n  name: string;\n}\n\ninterface T2 extends T1 {\n  age: number;\n}\n\nfunction fn(x: T2): string;\nfunction fn(x: T1): number;\nfunction fn(x: T1 | T2): any {}\nconst x = fn({ name: '' } as T1); // number\nconst y = fn({ name: '', age: 5 } as T2); // string",lang:"ts"}),a.a.createElement("ol",{start:7},a.a.createElement("li",null,"this \u7684\u7c7b\u578b")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",a.a.createElement("em",null,"this")," \u7684\u7c7b\u578b\uff0c\u5f53\u6211\u4eec\u9519\u8bef\u4f7f\u7528 ",a.a.createElement("em",null,"this")," \u65f6\uff0c",a.a.createElement("em",null,"ts")," \u5c31\u4f1a\u63d0\u793a\u6211\u4eec")),a.a.createElement(u["a"],{code:"function fn() {\n  console.log(this.name);\n  // 'this' implicitly has type 'any' because it does not have a type annotation.\n}\n\nfn();",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u53ef\u4ee5\u5728\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e2d\u58f0\u660e ",a.a.createElement("em",null,"this")," \u6307\u4ee3\u7684\u5bf9\u8c61\u3002\u76f4\u63a5\u8c03\u7528\u7684\u60c5\u51b5\u4e0b\uff0c",a.a.createElement("em",null,"ts")," \u4f1a\u65e0\u6cd5\u786e\u5b9a\u51fd\u6570\u88ab\u8c01\u8c03\u7528\uff0c\u56e0\u6b64 ",a.a.createElement("em",null,"this")," \u4f1a\u6307\u5411\u9ed8\u8ba4\u4e3a ",a.a.createElement("em",null,"void"),"\uff0c\u4f1a\u63d0\u793a\u9519\u8bef")),a.a.createElement(u["a"],{code:"function fn(this: Window) {\n  console.log(this.name);\n}\nWindow.fn = fn;\nfn();",lang:"ts"}),a.a.createElement("ol",{start:8},a.a.createElement("li",null,"\u7c7b\u578b\u8c13\u8bcd")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5728 ",a.a.createElement("em",null,"ts")," \u4e2d\uff0c\u51fd\u6570\u8fd8\u652f\u6301\u53e6\u5916\u4e00\u79cd\u7279\u6b8a\u5730\u7c7b\u578b\u63cf\u8ff0\u3002\u4e00\u822c\u53ea\u80fd\u7528\u4e8e\u5b9a\u4e49\u81ea\u5b9a\u4e49\u7c7b\u578b\u5b88\u536b\uff0c\u610f\u601d\u662f ",a.a.createElement("strong",null,a.a.createElement("code",null,"\u5f53\u5b88\u536b\u8fd4\u56detrue\u65f6\uff0c\u5c06\u88ab\u5b88\u536b\u7684\u7c7b\u578b\u7f29\u5c0f\u5230 is \u6307\u5b9a\u7684\u66f4\u660e\u786e\u7684\u7c7b\u578b")))),a.a.createElement(u["a"],{code:"// \u6307\u5b9ax\u7684\u7c7b\u578b\u4e3astring\nfunction isString(x): x is string {\n  return typeof x === 'string';\n}\n\nfunction isNumber(x: number) {\n  return typeof x === 'number';\n}\n\nfunction fn(x: unknown) {\n  if (isString(x)) {\n    // \u7c7b\u578b\u7f29\u5c0f\u4e3astring\n  }\n  if (isNumber(x)) {\n    // Argument of type 'unknown' is not assignable to parameter of type 'number'.\n  }\n}",lang:"ts"})))})));n["default"]=e=>{var n=a.a.useContext(r["context"]),t=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(m,{demos:t})}}}]);