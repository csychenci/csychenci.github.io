(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[190],{dP7T:function(e,n,t){e.exports=t.p+"static/AE29A183-72AF-486C-BBF9-90AC86978069.b23f2894.png"},qdXk:function(e,n,t){"use strict";t.r(n);var l=t("q1tI"),a=t.n(l),r=t("dEAq"),s=(t("0H/f"),t("N0lm"),t("DgDr"),t("cGlH"),t("ekZX"),t("Bjia")),i=(t("tVxl"),t("1pSt"),a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"\u7279\u6b8a\u7c7b\u578b\u7684\u7279\u6027"},a.a.createElement(r["AnchorLink"],{to:"#\u7279\u6b8a\u7c7b\u578b\u7684\u7279\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u7279\u6b8a\u7c7b\u578b\u7684\u7279\u6027"),a.a.createElement("hr",null),a.a.createElement("ol",null,a.a.createElement("li",null,"isAny")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u600e\u4e48\u5224\u65ad\u4e00\u4e2a\u7c7b\u578b\u662f\u5426\u662f any \u7c7b\u578b\uff0c\u8fd9\u9700\u8981\u6839\u636e\u5b83\u7684\u7279\u6027\u6765\uff0c",a.a.createElement("strong",null,"any \u7c7b\u578b\u4e0e\u4efb\u4f55\u7c7b\u578b\u7684\u4ea4\u53c9\u90fd\u662f any"))),a.a.createElement(s["a"],{code:"type A = 1 & any;",lang:"ts"}),a.a.createElement(s["a"],{code:"/** \n * \u8fd9\u91cc\u7684 string \u548c number \u53ef\u4ee5\u6362\u6210\u4efb\u610f\u4e24\u4e2a\u4e0d\u76f8\u540c\u7684\u7c7b\u578b\n * type isAny<T> = 1 extends (2 & T) ? true : false\n */\ntype isAny<T> = string extends (number & T) ? true : false;\n\ntype res = isAny<any>",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u6b64\u5916\uff0cany \u5728\u6761\u4ef6\u7c7b\u578b\u4e2d\u6bd4\u8f83\u7279\u6b8a\uff0c\u5982\u679c\u5de6\u8fb9\u7684\u7c7b\u578b\u53c2\u6570\u4e3a any\uff0c\u4f1a\u8fd4\u56de trueType \u548c falseType \u7684\u5408\u5e76")),a.a.createElement(s["a"],{code:"type VerifAny<T> = T extends number ? 1 : 2;\n\ntype VerifAny1<T> = T extends number ? true : false;\n\ntype Verif1 = VerifAny<any>;\n/** type Verif1 = 1 | 2 */\n\ntype Verif2 = VerifAny1<any>;\n/** type Verif2 = boolean */",lang:"ts"}),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"isEqual")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5224\u65ad\u4e24\u4e2a\u7c7b\u578b\u662f\u5426\u76f8\u540c\uff0c\u4e4b\u524d\u7684 isEqual \u662f\u8fd9\u6837\u7684")),a.a.createElement(s["a"],{code:"type IsEqual<A,B> = (A extends B ? true : false) & (B extends A ? true : false)\n\ntype res1 = isEqual<any,2>;\n/**\n * \u5bf9\u4e8e any \u7c7b\u578b\u7684\u5224\u65ad\u4f1a\u51fa\u73b0\u8bef\u5dee\n * \u8fd9\u91cc\u7ed3\u679c\u5e94\u662f false\uff0c\u4f46\u5b9e\u9645\u4e3a true\n */",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u8fd9\u662f\u56e0\u4e3a any \u53ef\u4ee5\u662f\u4efb\u610f\u7c7b\u578b\uff0c\u4efb\u610f\u7c7b\u578b\u4e5f\u53ef\u4ee5\u662f any\uff0c\u6240\u4ee5\u4e0a\u9762\u7684\u65b9\u5f0f\u65e0\u6cd5\u5224\u65ad\u51fa any")),a.a.createElement(s["a"],{code:"/** ts\u5bf9\u8fd9\u79cd\u5f62\u5f0f\u7684\u7c7b\u578b\u505a\u4e86\u7279\u6b8a\u5904\u7406 */\ntype IsEqual<A,B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u8fd9\u79cd\u5904\u7406\u65b9\u5f0f\u5728\u4e8e ts \u6e90\u7801\u4e2d\u7279\u6b8a\u7684\u5904\u7406(checkTypeRelatedTo)\uff0c\u5176\u4e2d\u6709\u4e24\u4e2a\u90fd\u662f\u6761\u4ef6\u7c7b\u578b\u7684\u60c5\u51b5\u7684\u5904\u7406")),a.a.createElement("p",null,a.a.createElement("img",{src:t("dP7T"),alt:""})),a.a.createElement("ul",null,a.a.createElement("li",null,"\u4e0a\u9762\u6ce8\u91ca\u90e8\u5206\u7684\u610f\u601d\u662f\uff1a\u5f53\u4e24\u4e2a\u6761\u4ef6\u7c7b\u578b ",a.a.createElement("code",null,"T1 extends U1 ? X1 : Y1")," \u548c ",a.a.createElement("code",null,"T2 extends U2 ? X2 : Y2")," \u76f8\u5173\u7684\u8bdd\uff0c\u90a3 T1 \u548c T2 \u76f8\u5173\u3001X1 \u548c X2 \u76f8\u5173\u3001Y1 \u548c Y2 \u76f8\u5173\uff0c\u800c U1 \u548c U2 \u76f8\u7b49\u3002\u8fd9\u91cc\u662f\u76f8\u5173\uff0c\u800c\u4e0d\u662f\u76f8\u7b49"),a.a.createElement("li",null,"\u5982\u679c\u662f\u5224\u65ad\u76f8\u5173\u6027\uff0c\u4efb\u4f55\u7c7b\u578b extends any \u90fd\u662f true\uff1bany \u548c 1\uff0c\u5224\u65ad\u76f8\u5173\u6027\u7684\u8bdd\uff0c\u80af\u5b9a\u662f true\uff0c\u4f46\u662f\u5224\u65ad\u76f8\u7b49\u7684\u8bdd\uff0c\u5c31\u662f false"),a.a.createElement("li",null,"\u901a\u8fc7\u6784\u9020\u4e24\u4e2a\u6761\u4ef6\u7c7b\u578b\u5224\u65ad\u76f8\u5173\u6027\uff0c\u5c31\u53ef\u4ee5\u5229\u7528 extends \u53f3\u8fb9\u90e8\u5206\u76f8\u7b49\u7684\u6027\u8d28\u6765\u5224\u65ad\u4e24\u4e2a\u7c7b\u578b\u662f\u5426 equal")),a.a.createElement("ol",{start:3},a.a.createElement("li",null,"isUnion")),a.a.createElement(s["a"],{code:"/**\n * \u8fd9\u91cc\u7684\u5206\u5e03\u5f0f\u6761\u4ef6\u7c7b\u578b\u4f7f\u5f97 A \u88ab\u62c6\u5206\u6210\u591a\u4e2a\u5143\u7d20\u8fdb\u884c\u8ba1\u7b97\n */\ntype isUnion<A,B = A> = A extends A ? [B] extends [A] ? false : true : never",lang:"ts"}),a.a.createElement("ol",{start:4},a.a.createElement("li",null,"isNever")),a.a.createElement("ul",null,a.a.createElement("li",null,"never \u7684\u7279\u6027\u662f\uff0c\u5728\u6761\u4ef6\u7c7b\u578b\u5185\u4f7f\u7528\u7c7b\u578b\u53c2\u6570\u65f6\uff0c\u5e76\u4e14\u4f20\u5165\u7684\u662f never \u7684\u65f6\u5019\uff0c\u5b83\u4f1a\u76f4\u63a5\u8fd4\u56de never")),a.a.createElement(s["a"],{code:"type VerifNever<T> = T extends string ? true : false;\n\ntype Verif1 = VerifNever<never>;\n/** type Verif1 = never */",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u610f\u601d\u662f\u5f53\u6761\u4ef6\u7c7b\u578b\u5de6\u8fb9\u662f never \u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u76f4\u63a5\u8fd4\u56de never\u3002\u6240\u4ee5\uff0c\u4e0d\u80fd\u901a\u8fc7\u6b64\u65b9\u5f0f\u53d6\u9a8c\u8bc1 never\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8fdb\u884c\u9a8c\u8bc1")),a.a.createElement(s["a"],{code:"/**\n * \u7c7b\u4f3c\u539f\u7406\n * type isNever<T> = Record<string,T> extends Record<string,never>? true : false;\n */\ntype isNever<T> = [T] extends [never] ? true : false;\n\ntype Verif2 = isNever<never>;\n/** type Verif2 = true; */",lang:"ts"}),a.a.createElement("ol",{start:5},a.a.createElement("li",null,"isTuple")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5143\u7ec4\u7c7b\u578b\u4e5f\u662f\u6570\u7ec4\u7c7b\u578b\uff0c\u4f46\u662f\u5b83\u7684\u5143\u7d20\u662f\u53ea\u8bfb\u7684\uff0c\u5143\u7d20\u4e2a\u6570\u4e5f\u662f\u56fa\u5b9a\u7684\u3002\u8fd9\u5c31\u662f\u610f\u5473\u7740\uff0c\u5b83\u7684 length \u53ef\u80fd\u4f1a\u4e0d\u592a\u4e00\u6837")),a.a.createElement(s["a"],{code:"type tupleLen = [1,2]['length'];\n/** type tupleLen = 2 */\n\ntype arrLen = number[]['length'];\n/** type tupleLen = number */",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u53ef\u4ee5\u53d1\u73b0\uff0c\u5143\u7ec4\u7c7b\u578b\u7684 length \u7684\u7c7b\u578b\u662f\u6570\u5b57\u5b57\u9762\u91cf\uff1b\u800c\u6570\u7ec4\u7c7b\u578b\u7684 length \u7684\u7c7b\u578b\u662f number")),a.a.createElement(s["a"],{code:"type NotEqual<A,B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? false : true;\n\ntype isTuple<T> = T extends readonly [...infer R] ? NotEqual<R['length'],number> : false\n\ntype tuple1 = isTuple<[]>;\n/** type tuple1 = true */\n\ntype tuple2 = isTuple<[1,2,3]>;\n/** type tuple2 = true */\n\ntype tuple2 = isTuple<number[]>;\n/** type tuple3 = false */",lang:"ts"}),a.a.createElement("ol",{start:6},a.a.createElement("li",null,"\u8054\u5408\u8f6c\u4ea4\u53c9")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u7c7b\u578b\u4e4b\u95f4\u5b58\u5728\u7236\u5b50\u5173\u7cfb\uff0c\u66f4\u5177\u4f53\u7684\u662f\u5b50\u7c7b\u578b\u3002\u4f8b\u5982\u4ea4\u53c9\u7c7b\u578b A & B \u662f\u8054\u5408\u7c7b\u578b A | B \u7684\u5b50\u7c7b\u578b"),a.a.createElement("li",null,"\u5728\u8fd9\u4e4b\u4e2d\uff0c\u5982\u679c ",a.a.createElement("strong",null,"\u5141\u8bb8\u7236\u7c7b\u578b\u8d4b\u503c\u7ed9\u5b50\u7c7b\u578b"),"\uff0c\u8fd9\u53eb\u505a ",a.a.createElement("strong",null,"\u9006\u53d8"),"\uff1b\u5982\u679c ",a.a.createElement("strong",null,"\u5141\u8bb8\u5b50\u7c7b\u578b\u8d4b\u503c\u7ed9\u7236\u7c7b\u578b"),"\uff0c\u5c31\u53eb\u505a ",a.a.createElement("strong",null,"\u534f\u53d8")),a.a.createElement("li",null,"\u800c\u51fd\u6570\u53c2\u6570\u662f\u6709\u9006\u53d8\u7684\u6027\u8d28\u7684\uff0c\u4e5f\u5c31\u662f\u5982\u679c\u53c2\u6570\u53ef\u80fd\u662f\u591a\u4e2a\u7c7b\u578b\uff0c\u53c2\u6570\u7c7b\u578b\u4f1a\u53d8\u6210\u5b83\u4eec\u7684\u4ea4\u53c9\u7c7b\u578b")),a.a.createElement(s["a"],{code:"/**\n * 1. \u901a\u8fc7 U extends U \u89e6\u53d1\u8054\u5408\u7c7b\u578b\u7684\u5206\u5e03\u5f0f\u8ba1\u7b97\uff0c\u8ba9\u6bcf\u4e2a\u7c7b\u578b\u5355\u72ec\u4f20\u5165\u505a\u8ba1\u7b97\uff0c\u6700\u540e\u8fdb\u884c\u5408\u5e76\n * 2. \u4ee5 U \u4e3a\u53c2\u6570\u6784\u9020\u4e2a\u51fd\u6570\uff0c\u901a\u8fc7\u6a21\u5f0f\u5339\u914d\u63d0\u53d6\u53c2\u6570\u7684\u7c7b\u578b\n */\ntype UnionToIntersection<U> = (U extends U ? (x:U) => unknown : never) extends (x:infer R) => unknown ? R : never;\n\ntype res = UnionToIntersection<{\n    a: 1\n} | {\n    b: 2\n}>\n/**\n * type res = {\n    a: 1;\n  } & {\n    b: 2;\n  }\n */",lang:"ts"}),a.a.createElement("ol",{start:7},a.a.createElement("li",null,"getOptional")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u8981\u63d0\u53d6\u7d22\u5f15\u7c7b\u578b\u4e2d\u7684\u53ef\u9009\u7d22\u5f15\uff0c\u53ef\u4ee5\u5229\u7528\u5b83\u7684\u7279\u6027\uff1a\u53ef\u9009\u7d22\u5f15\u7684\u503c\u4e3a undefined \u548c\u503c\u7c7b\u578b\u7684\u8054\u5408\u7c7b\u578b\u3002\u8fd9\u610f\u5473\u7740\u8be5\u5c5e\u6027\u5728\u7c7b\u578b\u4e2d\u53ef\u4ee5\u5b58\u5728\u4e5f\u53ef\u4ee5\u4e0d\u5b58\u5728")),a.a.createElement(s["a"],{code:"/**\n * \u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u56fa\u5b9a\u7d22\u5f15\u7684\u503c\u7c7b\u578b\u4e3a number | undefined \u4e0e \u53ef\u9009\u7d22\u5f15\u662f\u4e0d\u4e00\u6837\u7684\n * \u56fa\u5b9a\u7d22\u5f15\u662f\u5fc5\u987b\u5b58\u5728\u7684\uff0c\u800c\u53ef\u9009\u7d22\u5f15\u662f\u53ef\u4ee5\u4e0d\u5b58\u5728\u7684\n */\ntype Person = {\n  name:string;\n  address?:string;\n  id:number | undefined;\n};\n/**\n * type Person = {\n    name: string;\n    address?: string | undefined;\n    id:number | undefined;\n  }\n */\n\nlet p1:Person = {\n  name:'xiaoming',\n  id:undefined\n}\n// ok\n\nlet p2:Person = {\n  name:'xiaoming',\n}\n/** \n * Property 'id' is missing in type '{ name: string; }' but required in type 'Person'.(2741)\n */",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u5c06\u8be5 key \u4e0e\u5bf9\u5e94\u7684\u503c\u7c7b\u578b\u4e00\u8d77\u53d6\u51fa\u6784\u9020\u4e00\u4e2a\u65b0\u7684\u7d22\u5f15\u7c7b\u578b\uff0c\u518d\u5224\u65ad ","{","}"," \u662f\u5426\u6ee1\u8db3\u5b83\u7684\u5f62\u72b6\u5373\u53ef")),a.a.createElement(s["a"],{code:"type A = {} extends {name?:string;} ? true : false;\n/** type A = true */\n\ntype B = {} extends {name:string;} ? true : false;\n/** type B = false */",lang:"ts"}),a.a.createElement(s["a"],{code:"/**\n * pick \u662f\u5185\u7f6e\u7684\u9ad8\u7ea7\u7c7b\u578b\n * type Pick1<T,K extends keyof T> = { [P in K]:T[P]}\n * type Pick<T,K> = { [P in keyof T as P extends K ? P : never]:T[P]}\n */\ntype getOptional<\n  T extends Record<string,any>\n> = {\n  [K in keyof T as {} extends Pick<T,K> ? K : never]:T[K]\n};\n\ntype Person = {\n  name:string;\n  address?:string;\n  id:number | undefined;\n};\n\ntype optional1 = getOptional<Person>;\n/**\n * type optional1 = {\n    address?: string | undefined;\n  }\n */",lang:"ts"}),a.a.createElement("ol",{start:8},a.a.createElement("li",null,"getRequired")),a.a.createElement("ul",null,a.a.createElement("li",null,"getOptional \u662f\u8fc7\u6ee4\u51fa\u6240\u6709\u53ef\u9009\u7d22\u5f15\u7ec4\u6210\u65b0\u7684\u7c7b\u578b\uff0c\u90a3\u5982\u4f55\u8fc7\u6ee4\u975e\u53ef\u9009\u7d22\u5f15\u7684\u7c7b\u578b\u5462")),a.a.createElement(s["a"],{code:"/**\n * \u5c06\u53ef\u9009\u7d22\u5f15\u8fc7\u6ee4\u6389\n */\ntype isRequired<\n  T,\n  K extends keyof T\n> = {} extends Pick<T,K> ? never : K;\n\ntype getRequired<\n  T extends Record<string,any>\n> = {\n  [K in keyof T as isRequired<T,K>]:T[K]\n}\n\ntype required1 = getRequired<Person>;\n/** \n * type required1 = {\n    name: string;\n    id: number | undefined;\n  }\n */",lang:"ts"}),a.a.createElement("ol",{start:9},a.a.createElement("li",null,"RemoveIndexSignature")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u7d22\u5f15\u7c7b\u578b\u4e2d\u5b58\u5728\u7d22\u5f15\u548c\u7d22\u5f15\u7b7e\u540d\uff0c\u5982\u4f55\u5220\u9664\u5176\u4e2d\u7684\u7d22\u5f15\u7b7e\u540d\u5462")),a.a.createElement(s["a"],{code:"/** [key:string] \u662f\u7d22\u5f15\u7b7e\u540d\uff0c\u610f\u4e3a\u53ef\u4ee5\u6dfb\u52a0\u4efb\u610f\u4e2a string \u7c7b\u578b\u7684\u7d22\u5f15 */\ntype Person = {\n  name:string;\n  address?:string;\n  id:number | undefined;\n  [key:string]:any\n};",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u53ef\u4ee5\u6839\u636e\u7d22\u5f15\u7b7e\u540d\u7684\u6027\u8d28\u6765\uff0c\u7d22\u5f15\u7b7e\u540d\u4e0d\u80fd\u6784\u9020\u6210\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b\uff0c\u56e0\u4e3a\u5b83\u6ca1\u6709\u540d\u5b57\uff0c\u4f46\u5176\u4ed6\u7d22\u5f15\u662f\u53ef\u4ee5\u7684")),a.a.createElement(s["a"],{code:"/**\n * \u63d0\u53d6\u51fa\u5176\u4ed6\u7d22\u5f15\uff0c\u8fc7\u6ee4\u6389\u7d22\u5f15\u7b7e\u540d\n * \u4fdd\u7559\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u7c7b\u578b\u7684\u7d22\u5f15\uff0c\u5426\u5219\u8fc7\u6ee4\u6389\n */\ntype isIndexSignature<\n  T,K extends keyof T\n>= K extends `${infer Str}` ? Str : never;\n\ntype RemoveIndexSignature<\n  T extends Record<string,any>\n> = {\n  [K in keyof T as isIndexSignature<T,K>]:T[K]\n}\n\ntype NonIndexSignature = RemoveIndexSignature<Person>\n/**\n * \n  type NonIndexSignature = {\n    name: string;\n    address?: string | undefined;\n    id: number | undefined;\n  }\n*/",lang:"ts"}),a.a.createElement("ol",{start:10},a.a.createElement("li",null,"ClassPublicProps")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5bf9\u4e8e class \u6765\u8bf4\uff0ckeyof \u53ea\u80fd\u62ff\u5230 class \u7684 public \u7d22\u5f15\uff0cprivate \u548c protected \u7684\u7d22\u5f15\u4f1a\u88ab\u5ffd\u7565")),a.a.createElement(s["a"],{code:"class Person {\n  constructor(public name:string,public age:number,private id:string) {}\n}\n\ntype PersonInter = {\n  [K in keyof Person]:Person[K]\n}\n/**\n * type PersonInter = {\n    name: string;\n    age: number;\n  }\n */",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u90a3\u4e48\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u5229\u7528 keyof \u5b9e\u73b0\u8fc7\u6ee4 public \u7c7b\u578b\u7684\u7d22\u5f15")),a.a.createElement(s["a"],{code:"type ClassPublicProps<\n  T extends Record<string,any>\n> = {\n  [K in keyof T]:T[K]\n}",lang:"ts"}),a.a.createElement("ol",{start:11},a.a.createElement("li",null,"as const")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0cts \u7684\u7c7b\u578b\u63a8\u65ad\u9ed8\u8ba4\u63a8\u5bfc\u51fa\u6765\u7684\u7c7b\u578b\u5e76\u4e0d\u662f\u5b57\u9762\u91cf\u7c7b\u578b")),a.a.createElement(s["a"],{code:"const obj = {\n  a:1,\n  b:'b'\n}\n\n/**\n * const obj: {\n    a: number;\n    b: string;\n  }\n */\n\nconst arr = [null,0,'',]\n/**\n * const arr: (string | number | null)[]\n */",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5982\u679c\u9700\u8981\u5229\u7528\u5b83\u7684\u5b57\u9762\u91cf\u7c7b\u578b\uff0c\u5c31\u9700\u8981\u7528\u5230 as const\uff0c\u6839\u636e as const \u63a8\u5bfc\u51fa\u6765\u7684\u7c7b\u578b\u4f1a\u5e26\u4e0a reandonly \u4fee\u9970\u7b26\uff0c\u53ef\u4ee5\u901a\u8fc7\u6a21\u5f0f\u5339\u914d\u63d0\u53d6")),a.a.createElement(s["a"],{code:"const obj = {\n  a:1,\n  b:'b'\n} as const;\n\n/**\n * const obj: {\n    readonly a: 1;\n    readonly b: \"b\";\n  }\n */\n\nconst arr = [null,0,'',]  as const;\n/**\n * const arr: readonly [null, 0, \"\"]\n */",lang:"ts"}),a.a.createElement("ul",null,a.a.createElement("li",null,"const \u610f\u5473\u9996\u5148\u662f\u4e00\u4e2a\u5e38\u91cf\uff0c\u4e5f\u5c31\u662f\u5b57\u9762\u91cf\u503c\uff0c\u5e76\u4e14\u662f\u4e0d\u53ef\u4fee\u6539\u7684(readonly)\u3002\u56e0\u6b64\u80fd\u901a\u8fc7 as const \u63a8\u5bfc\u51fa\u5b57\u9762\u91cf\u7c7b\u578b"),a.a.createElement("li",null,"\u6a21\u5f0f\u5339\u914d\u4e0b\uff0c\u5982\u679c\u4e0d\u6dfb\u52a0 readonly \u4fee\u9970\u7b26\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5339\u914d\u51fa\u9519")),a.a.createElement(s["a"],{code:'type ReverseArr<Arr> = Arr extends [infer First,...infer R] ? [...ReverseArr<R>,First] : Arr;\n\ntype arrType = typeof arr;\ntype arr1 = ReverseArr<arrType>\n/**\n * \u53d1\u73b0\u8fd9\u91cc\u5e76\u6ca1\u6709\u51fa\u73b0\u53cd\u8f6c\n * type arr1 = readonly [null, 0, ""]\n */',lang:"ts"}),a.a.createElement(s["a"],{code:'type ReverseArr<Arr> = Arr extends readonly [infer First,...infer R] ? [...ReverseArr<R>,First] : Arr;\n\ntype arrType = typeof arr;\ntype arr1 = ReverseArr<arrType>\n/**\n * type arr1 = ["", 0, null]\n * \u53cd\u8f6c\u6210\u529f\n */',lang:"ts"})))})));n["default"]=e=>{var n=a.a.useContext(r["context"]),t=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(i,{demos:t})}}}]);