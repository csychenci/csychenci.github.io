(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[180],{Bh8n:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=t("dEAq"),o=(t("0H/f"),t("N0lm"),t("DgDr"),t("cGlH"),t("ekZX"),t("Bjia")),i=(t("tVxl"),t("1pSt"),l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u8054\u5408\u7c7b\u578b"},l.a.createElement(r["AnchorLink"],{to:"#\u8054\u5408\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u8054\u5408\u7c7b\u578b"),l.a.createElement("hr",null),l.a.createElement("ol",null,l.a.createElement("li",null,"\u8054\u5408\u7c7b\u578b\u7684\u5b9a\u4e49")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u8054\u5408\u7c7b\u578b\u8868\u793a\u53d8\u91cf\u3001\u53c2\u6570\u7684\u7c7b\u578b\u4e0d\u662f\u5355\u4e00\u7684\u539f\u5b50\u7c7b\u578b\uff0c\u800c\u53ef\u80fd\u662f\u591a\u79cd\u4e0d\u540c\u7684\u7c7b\u578b\u7684\u7ec4\u5408\u3002\u8054\u5408\u7c7b\u578b\u8868\u793a\u53d6\u503c\u53ef\u4ee5\u4e3a\u591a\u79cd\u7c7b\u578b\u4e2d\u7684\u4e00\u79cd\uff0c\u4f7f\u7528\u7ba1\u9053\u7b26 ",l.a.createElement("code",null,"|")," \u5206\u5272\u591a\u4e2a\u7c7b\u578b")),l.a.createElement(o["a"],{code:"let typeUnion: string | number;\ntypeUnion = 'jetaime';\ntypeUnion = 123;\n\ntypeUnion = Symbol('a');\n// Type 'symbol' is not assignable to type 'string | number'.",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5f53\u6211\u4eec\u8bbf\u95ee\u8054\u5408\u7c7b\u578b\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u65f6\uff0c\u5e76\u4e14 ts \u4e0d\u786e\u5b9a\u4e00\u4e2a\u8054\u5408\u7c7b\u578b\u7684\u53d8\u91cf\u5230\u5e95\u662f\u54ea\u4e2a\u7c7b\u578b\u65f6\uff0c\u5c31\u53ea\u80fd\u8bbf\u95ee\u6b64\u8054\u5408\u7c7b\u578b\u7684\u6240\u6709\u7c7b\u578b\u91cc\u5171\u6709\u7684\u5c5e\u6027\u6216\u65b9\u6cd5")),l.a.createElement(o["a"],{code:"function getLength(params: string | number): number {\n  return params.length;\n}\n\n// Property 'length' does not exist on type 'string | number'.Property 'length' does not exist on type 'number'.\n\n// number\u7c7b\u578b\u4e2d\u5e76\u4e0d\u5b58\u5728length\u5c5e\u6027\uff0c\u56e0\u6b64\u4f1a\u62a5\u9519",lang:"ts"}),l.a.createElement(o["a"],{code:"function ToString(params: string | number): string {\n  return params.toString();\n}\n// \u8bbf\u95ee\u5171\u6709\u5c5e\u6027\u6ca1\u6709\u95ee\u9898\xb7",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u8054\u5408\u7c7b\u578b\u7684\u53d8\u91cf\u5728\u88ab\u8d4b\u503c\u65f6\uff0c\u4f1a\u6839\u636e\u7c7b\u578b\u63a8\u65ad\u7684\u89c4\u5219\u63a8\u65ad\u51fa\u4e00\u4e2a\u7c7b\u578b")),l.a.createElement(o["a"],{code:"let typeUnion: string | number;\n\ntypeUnion = 'jetaime';\nconsole.log(typeUnion.length);\n\ntypeUnion = 15;\nconsole.log(typeUnion.length);\n// Property 'length' does not exist on type 'number'.",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5f53\u6211\u4eec\u4f7f\u7528\u8054\u5408\u7c7b\u578b\u8fdb\u884c\u8d4b\u503c\u65f6\uff0c\u6570\u636e\u7ed3\u6784\u53ea\u80fd\u9009\u62e9\u6ee1\u8db3\u5176\u4e2d\u67d0\u4e2a\u5f62\u72b6\u6216\u8005\u90fd\u6ee1\u8db3")),l.a.createElement(o["a"],{code:"interface UnionOne {\n  name: string;\n  age: number;\n  id: string;\n}\n\ninterface UnionTwo {\n  name: string;\n  address: string;\n}\n\ntype Union = UnionOne | UnionTwo;\n\nconst aPerson: Union = {\n  name: 'tom',\n  age: 18,\n  id: '123456',\n};\n// \u7b26\u5408UnionOne\u63a5\u53e3\u5f62\u72b6\n\nconst bPerson: Union = {\n  name: 'tom',\n  age: 18,\n  address: 'shenzhen',\n  id: '123456',\n};\n// \u540c\u65f6\u7b26\u5408\u63a5\u53e3\u5f62\u72b6\n\nconst cPerson: Union = {\n  name: 'tom',\n  age: 18,\n  address: 'shenzhen',\n};\n// \u7b26\u5408UnionTwo\u63a5\u53e3\u5f62\u72b6\n\nconst dPerson: Union = {\n  name: 'tom',\n  age: 18,\n};\n// \u4e0d\u7b26\u5408\u4efb\u610f\u5f62\u72b6",lang:"ts"}),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"in \u64cd\u4f5c\u7b26")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u53ef\u4ee5\u4f7f\u7528 in \u64cd\u4f5c\u7b26\u5224\u65ad\u4e00\u4e2a\u5c5e\u6027\u662f\u5426\u5b58\u5728\uff0c\u53ef\u4ee5\u914d\u5408\u7c7b\u578b\u5b88\u536b\u8fdb\u884c\u4f7f\u7528")),l.a.createElement(o["a"],{code:"type Person = {\n  name: string;\n};\n\nlet p1: Person = {\n  name: 'a',\n};\n\n'name' in p1;",lang:"ts"}),l.a.createElement("hr",null),l.a.createElement("h2",{id:"\u4ea4\u53c9\u7c7b\u578b"},l.a.createElement(r["AnchorLink"],{to:"#\u4ea4\u53c9\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ea4\u53c9\u7c7b\u578b"),l.a.createElement("hr",null),l.a.createElement("ol",null,l.a.createElement("li",null,"\u4ea4\u53c9\u7c7b\u578b\u5b9a\u4e49")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u53ef\u4ee5\u628a\u591a\u4e2a\u7c7b\u578b\u5408\u5e76\u6210\u4e00\u4e2a\u7c7b\u578b\uff0c\u5408\u5e76\u540e\u7684\u7c7b\u578b\u5c06\u62e5\u6709\u6240\u6709\u6210\u5458\u7c7b\u578b\u7684\u7279\u6027\uff0c\u5b83\u9002\u7528\u4e8e\u5bf9\u8c61\u6df7\u7528\u7684\u573a\u666f\u3002\u4f7f\u7528 ",l.a.createElement("em",null,"&")," \u64cd\u4f5c\u7b26\u6765\u58f0\u660e\u4ea4\u53c9\u7c7b\u578b\uff0c\u867d\u7136\u662f\u53eb\u4ea4\u53c9\uff0c\u4f46\u662f\u5374\u662f\u53d6\u7684 ",l.a.createElement("strong",null,"\u5e76\u96c6"),"\uff0c\u9700\u8981\u7279\u522b\u6ce8\u610f")),l.a.createElement(o["a"],{code:"/** \n * \u5c06\u591a\u4e2a\u539f\u5b50\u7c7b\u578b\u5408\u5e76\u4e3a\u4ea4\u53c9\u7c7b\u578b\uff0c\u4efb\u4f55\u7c7b\u578b\u90fd\u4e0d\u80fd\u6ee1\u8db3\u5c5e\u4e8e\u591a\u79cd\u539f\u5b50\u7c7b\u578b\uff0c\u56e0\u6b64Useless\u7684\u7c7b\u578b\u662fnever\n*/\ntype Useless = string & number;",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u53ef\u4ee5\u5c06\u591a\u4e2a\u63a5\u53e3\u7c7b\u578b\u5408\u5e76\u4e3a\u4e00\u4e2a\u7c7b\u578b\uff0c\u4ece\u800c\u5b9e\u73b0\u7b49\u540c\u63a5\u53e3\u7ee7\u627f\u7684\u6548\u679c")),l.a.createElement(o["a"],{code:"type anyType = { id: number; address: string } & { name: string; age: number };\n\nlet u1: anyType = {\n  id: 1,\n  address: 'China',\n  name: 'Wu',\n  age: 18,\n};",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u591a\u4e2a\u63a5\u53e3\u4e2d\u7684\u5c5e\u6027\u7c7b\u578b\u91cd\u590d\u65f6\uff0c\u5408\u5e76\u7684\u63a5\u53e3\u7684\u8be5\u5c5e\u6027\u7684\u7c7b\u578b\u5c31\u662f\u539f\u5b50\u7c7b\u578b\u7684\u4ea4\u53c9\u7c7b\u578b\uff0c\u5373 ",l.a.createElement("em",null,"never"),"\uff0c\u540c\u65f6\u8d4b\u7ed9\u5b83\u4efb\u610f\u7c7b\u578b\u7684\u503c(null | undefined \u9664\u5916)\u90fd\u4f1a\u62a5\u9519")),l.a.createElement(o["a"],{code:"type anyType = { id: number; age: string } & { name: string; age: number };\n\nlet u1: anyType = {\n  id: 1,\n  name: 'Wu', // \u7f3a\u5c11\u4f1a\u63d0\u793a\u5fc5\u9700\u5c5e\u6027\u7f3a\u5c11\u7684\u9519\u8bef\n  age: 18,\n  // Type 'number' is not assignable to type 'string & number'.\n};",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u539f\u5b50\u7c7b\u578b\u4e0e\u5b57\u9762\u91cf\u7684\u7c7b\u578b\u7684\u4ea4\u53c9\u7c7b\u578b\u662f\u5b83\u4eec\u4e24\u7684\u5b50\u7c7b\u578b")),l.a.createElement(o["a"],{code:"type anyType = { id: number; age: 2 } & { name: string; age: number };\n\ntype a = anyType[\"age\"];\n// type a = 2;\n\nlet a1: anyType = {\n  id: 12,\n  age: 2, // \u6570\u5b57\u5b57\u9762\u91cf\u7c7b\u578b 2\n  name: 'Wu',\n};\n\nlet a2: anyType = {\n  id: 12,\n  age: 18, // \u6570\u5b57\u5b57\u9762\u91cf\u7c7b\u578b 2\n  // Type '18' is not assignable to type '2'.\n  name: 'Wu',\n};",lang:"ts"}),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"\u5408\u5e76\u8054\u5408\u7c7b\u578b")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5f53\u9700\u8981\u6ee1\u8db3\u4e0d\u540c\u7684\u8054\u5408\u7c7b\u578b\u9650\u5236\u65f6\uff0c\u8fd9\u65f6\u5c31\u9700\u8981\u63d0\u53d6\u6240\u6709\u8054\u5408\u7c7b\u578b\u7684\u76f8\u540c\u7c7b\u578b\u6210\u5458")),l.a.createElement(o["a"],{code:"type UnionA = 'a' | 'b' | 2 | 3;\ntype UnionB = 'a' | 'c' | 2 | 4;\ntype UnionC = UnionA & UnionB;\n// hover that : type UnionC = \"a\" | 2",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5982\u679c\u591a\u4e2a\u8054\u5408\u7c7b\u578b\u6ca1\u6709\u76f8\u540c\u7684\u7c7b\u578b\u6210\u5458\uff0c\u4ea4\u53c9\u51fa\u6765\u7684\u7c7b\u578b\u5c31\u662f ",l.a.createElement("em",null,"never"))),l.a.createElement(o["a"],{code:"type UnionA = 'a' | 'b';\ntype UnionB = 'd' | 'c';\ntype UnionC = UnionA & UnionB;\n// hover that : type UnionC = never",lang:"ts"}),l.a.createElement("ol",{start:3},l.a.createElement("li",null,"\u8054\u5408\u3001\u4ea4\u53c9\u7ec4\u5408")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u8054\u5408\u3001\u4ea4\u53c9\u7c7b\u578b\u53ef\u4ee5\u7ec4\u5408\u4f7f\u7528\uff0c\u4e14\u8054\u5408\u64cd\u4f5c\u7b26 ",l.a.createElement("code",null,"|")," \u7684\u4f18\u5148\u7ea7\u4f4e\u4e8e\u4ea4\u53c9\u64cd\u4f5c\u7b26 ",l.a.createElement("code",null,"&"),"\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 () \u8c03\u6574\u64cd\u4f5c\u7b26\u7684\u4f18\u5148\u7ea7")),l.a.createElement(o["a"],{code:"type a = ('a' | 'b') & number;\n/** type a = never */\ntype b = 'a' | 'b' & number;\n/** type b = 'a' */",lang:"ts"}),l.a.createElement(o["a"],{code:"type UnionA = ('a' & 'b' & 2) | 3;\ntype UnionB = ('a' & 'c' & 2) | 4;\ntype UnionC = UnionA & UnionB;\n// hover that : type UnionC = 3 & 4",lang:"ts"}),l.a.createElement("ol",{start:4},l.a.createElement("li",null,"\u7c7b\u578b\u7f29\u51cf")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5bf9\u4e8e\u5b57\u9762\u91cf\u7c7b\u578b\u4e0e\u539f\u59cb\u7c7b\u578b\u7684\u8054\u5408\u7c7b\u578b\uff0c\u4f1a\u88ab\u7f29\u51cf\u4e3a\u539f\u59cb\u7c7b\u578b")),l.a.createElement(o["a"],{code:"type anyType = string | 'aa';\n// \u9002\u7528\u4e8enumber\u3001boolean\n// hover that : type anyType = string;",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5f53\u7136\u6211\u4eec\u4e5f\u53ef\u4ee5\u5bf9\u7c7b\u578b\u7f29\u51cf\u8fdb\u884c\u63a7\u5236\uff0c\u53ea\u9700\u8981\u7ed9\u7236\u7c7b\u578b\u6dfb\u52a0 ",l.a.createElement("em",null,"&","{","}")," \u5c31\u53ef\u4ee5\u4e86")),l.a.createElement(o["a"],{code:"type color = 'red' | 'blue' | 'green' | 'gray' | (string & {});\n// hover that : type color = \"red\" | \"blue\" | \"green\" | \"gray\" | (string & {})",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5f53\u8054\u5408\u7c7b\u578b\u7684\u6210\u5458\u662f\u63a5\u53e3\u7c7b\u578b\uff0c\u5982\u679c\u6ee1\u8db3\u5176\u4e2d\u4e00\u4e2a\u63a5\u53e3\u7684\u5c5e\u6027\u662f\u53e6\u5916\u4e00\u4e2a\u63a5\u53e3\u5c5e\u6027\u7684\u5b50\u96c6\uff0c\u8fd9\u4e2a\u5c5e\u6027\u4e5f\u4f1a\u7c7b\u578b\u7f29\u51cf")),l.a.createElement(o["a"],{code:"type UnionInterce = { age: '1' } | { age: '1' | '2'; [key: string]: string };\n// age\u7684\u7c7b\u578b\u88ab\u8bbe\u7f6e\u4e3a '1' | '2'",lang:"ts"}),l.a.createElement(o["a"],{code:"// \u8bbe\u7f6e\u4e00\u4e2a\u5373\u662fnumber\u53c8\u662fstring\u7684\u7c7b\u578b\u5c5e\u6027\ntype UnionInterce =\n  | {\n      age: number;\n    }\n  | {\n      age: never;\n      [key: string]: string;\n    };\nconst O: UnionInterce = {\n  age: 2,\n  string: 'string',\n};",lang:"ts"})))})));n["default"]=e=>{var n=l.a.useContext(r["context"]),t=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:t})}}}]);