(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[189],{a5rx:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),l=t.n(a),o=t("dEAq"),r=(t("0H/f"),t("N0lm"),t("DgDr"),t("cGlH"),t("ekZX"),t("Bjia")),i=(t("tVxl"),t("1pSt"),l.a.memo((n=>{n.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u8054\u5408\u5206\u6563\u53ef\u7b80\u5316"},l.a.createElement(o["AnchorLink"],{to:"#\u8054\u5408\u5206\u6563\u53ef\u7b80\u5316","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u8054\u5408\u5206\u6563\u53ef\u7b80\u5316"),l.a.createElement("hr",null),l.a.createElement("ol",null,l.a.createElement("li",null,"\u5206\u5e03\u5f0f\u6761\u4ef6\u7c7b\u578b")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5f53 ",l.a.createElement("strong",null,"\u7c7b\u578b\u53c2\u6570\u4e3a\u8054\u5408\u7c7b\u578b\uff0c\u5e76\u4e14\u5728\u6761\u4ef6\u7c7b\u578b\u5de6\u8fb9\u76f4\u63a5\u5f15\u7528\u8be5\u53c2\u6570\u7c7b\u578b")," \u7684\u65f6\u5019\uff0cts \u4f1a\u628a\u6bcf\u4e00\u4e2a\u5143\u7d20\u5355\u72ec\u4f20\u5165\u6765\u505a\u7c7b\u578b\u8fd0\u7b97\uff0c\u6700\u540e\u518d\u5c06\u8fd0\u7b97\u7684\u7ed3\u679c\u5408\u5e76\u6210\u8054\u5408\u7c7b\u578b")),l.a.createElement(r["a"],{code:"/** \u8bbe\u7f6e\u4e00\u4e2a\u7c7b\u578b\uff0c\u5b83\u53ef\u4ee5\u628a\u6307\u5b9a\u7684\u5b57\u7b26\u8f6c\u4e3a\u5927\u5199 */\ntype UpperStr<\n  Str extends string,\n  CH\n> = Str extends CH ? Uppercase<Str> : Str;\n\ntype u1 = UpperStr<'a' | 'b' | 'c','a'>;\n\ntype Union = 'a' | 'b' | 'c';\n\ntype UnionRes = UpperStr<Union,'a'>;\n/** type UnionRes = \"b\" | \"c\" | \"A\" */",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4ece\u4e0a\u4f8b\u4e2d\u53ef\u4ee5\u770b\u5230\uff0cts \u5bf9\u8054\u5408\u7c7b\u578b\u5728\u6761\u4ef6\u7c7b\u578b\u4e2d\u4f7f\u7528\u65f6\u4f1a\u505a\u7279\u6b8a\u5904\u7406\uff0c\u8054\u5408\u7c7b\u578b\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\u90fd\u4f1a\u88ab\u5355\u72ec\u4f20\u5165\u505a\u7c7b\u578b\u8ba1\u7b97\uff0c\u6700\u540e\u7ed3\u679c\u4f1a\u505a\u5408\u5e76")),l.a.createElement(r["a"],{code:'type AddOtherStr<T> = T extends `${infer Prefix}${infer R}` ? `---${Prefix}---` : T;\n\ntype str1 = AddOtherStr<Union>;\n/**\n * type str1 = "---a---" | "---b---" | "---c---"\n */',lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u8054\u5408\u7c7b\u578b\u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u662f\u4e92\u4e0d\u76f8\u5173\u7684\uff0c\u56e0\u6b64\u9700\u8981\u8fdb\u884c\u5355\u72ec\u5904\u7406(boolean \u7c7b\u578b\u4e5f\u662f\u8054\u5408\u7c7b\u578b\uff0c\u4e5f\u5c31\u662f true | false)")),l.a.createElement(r["a"],{code:'type TestUnion<\n T,\n U = T\n> = T extends U ? {\n  t:T,\n  u:U\n} : never;\n\ntype tu1 = TestUnion<\'a\' | \'b\' | \'c\'>;\n// type tu1 = {\n//     t: "a";\n//     u: "a" | "b" | "c";\n// } | {\n//     t: "b";\n//     u: "a" | "b" | "c";\n// } | {\n//     t: "c";\n//     u: "a" | "b" | "c";\n// }',lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u53ef\u4ee5\u53d1\u73b0\uff0c\u867d\u7136 U \u548c T \u662f\u540c\u4e00\u4e2a\u7c7b\u578b\uff0c\u4f46\u662f\u503c\u4e0d\u4e00\u6837\uff1f\u8fd9\u662f\u56e0\u4e3a\u6761\u4ef6\u7c7b\u578b\u5de6\u8fb9\u5982\u679c\u662f\u8054\u5408\u7c7b\u578b\uff0c\u4f1a\u628a\u6bcf\u4e2a\u5143\u7d20\u5355\u72ec\u4f20\u5165\u8ba1\u7b97\uff0c\u800c\u53f3\u8fb9\u4e0d\u4f1a\u3002\u4e5f\u5c31\u662f\uff0cT \u662f a \u65f6\uff0cU \u662f a | b | c\uff1bT \u662f b \u65f6\uff0cU \u662f a | b | c\uff1bT \u662f c \u65f6\uff0cU \u662f a | b | c")),l.a.createElement("li",null,l.a.createElement("p",null,"\u53e6\u5916\uff0c\u5f53 T \u662f\u8054\u5408\u7c7b\u578b\u65f6\uff0cT extends T \u662f\u4e3a\u4e86\u89e6\u53d1\u5206\u5e03\u5f0f\u6761\u4ef6\u7c7b\u578b\uff0c\u8ba9\u6bcf\u4e2a\u7c7b\u578b\u90fd\u80fd\u5355\u72ec\u4f20\u5165\u8ba1\u7b97\u3002T extends T \u4e0e [T] extends [T] \u662f\u4e24\u79cd\u4e0d\u540c\u7684\u5904\u7406\uff0c\u540e\u8005\u662f\u5355\u4e2a\u7c7b\u578b\u548c\u6574\u4e2a\u7c7b\u578b\u505a\u5224\u65ad\uff1b\u524d\u8005\u4e24\u8fb9\u90fd\u662f\u8054\u5408\u7c7b\u578b\uff0c\u56e0\u4e3a\u53ea\u6709 extends \u5de6\u8fb9 ",l.a.createElement("strong",null,"\u76f4\u63a5\u662f\u7c7b\u578b\u53c2\u6570")," \u624d\u4f1a\u89e6\u53d1\u5206\u5e03\u5f0f\u6761\u4ef6\u7c7b\u578b"))),l.a.createElement(r["a"],{code:"/** \n * \u5224\u65ad\u67d0\u4e2a\u7c7b\u578b\u662f\u5426\u662f\u8054\u5408\u7c7b\u578b\n *  T extends T \u662f\u4e3a\u4e86\u89e6\u53d1\u5206\u5e03\u5f0f\u6761\u4ef6\u7c7b\u578b\uff0c\u8ba9 T \u7684\u6bcf\u4e2a\u5143\u7d20\u5355\u72ec\u4f20\u5165\n * [U] extends [T] \u53ef\u4ee5\u907f\u514d\u89e6\u53d1\u5206\u5e03\u5f0f\u6761\u4ef6\u7c7b\u578b\uff0c[U] \u662f\u6574\u4e2a\u7c7b\u578b\n * U \u662f\u8054\u5408\u7c7b\u578b\u6574\u4f53\uff0c\u800c T \u662f\u5355\u4e2a\u7c7b\u578b\n * \u53e6\u5916\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c['a'|'b'|'c'] \u8868\u793a\u7684\u662f\u4e00\u4e2a\u5143\u7d20(\u5b83\u7684\u7c7b\u578b\u662f 'a' | 'b' | 'c')\u7684\u5143\u7ec4\u3002\u4ee5\u4e0b\u90fd\u662f\u53ef\u4ee5\u7684\uff0c\u56e0\u6b64\uff0c['a'] extends ['a'|'b'|'c'] \u662f\u6210\u7acb\u7684\n * let a1:['a'|'b'|'c'] = ['a'];\n * let a2:['a'|'b'|'c'] = ['b'];\n * let a3:['a'|'b'|'c'] = ['c'];\n*/\n\ntype isUnion<T,U = T> = T extends T ? [U] extends [T] ? false : true : never;\n\ntype UnionRes1 = isUnion<'a' | 'b' | 'c'>;\n/** type UnionRes1 = true */\n\ntype UnionRes2 = isUnion<unknown>;\n/** type UnionRes2 = false */",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\u662f\uff0c\u89e6\u53d1\u5206\u5e03\u5f0f\u6761\u4ef6\u7c7b\u578b\uff0c\u5fc5\u987b\u662f\u4ee5 \u7c7b\u578b\u53c2\u6570\uff08\u6cdb\u578b\uff09\u7684\u65b9\u5f0f\u4f7f\u7528\u624d\u884c")),l.a.createElement(r["a"],{code:"type union = 'a' | 'b' | 'c';\ntype nonConditionType = union extends 'a' ? union : false;\n/**\n * \u8fd9\u4e2a\u5e76\u4e0d\u4f1a\u89e6\u53d1\u5206\u5e03\u5f0f\u6761\u4ef6\u7c7b\u578b\n * type nonConditionType = false\n */\n\ntype isConditionType<T> = T extends 'a' ? T : false \n\ntype unionRes = isConditionType<union>\n/**\n * \u8fd9\u91cc\u624d\u4f1a\u89e6\u53d1\u5206\u5e03\u5f0f\u6761\u4ef6\u7c7b\u578b\n * type unionRes = false | \"a\"\n */",lang:"ts"}),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"\u8054\u5408\u7c7b\u578b\u6784\u9020\u5176\u4ed6\u7c7b\u578b")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u4e00\u4e2a\u9875\u9762\u53ef\u80fd\u5b58\u5728\u4e24\u4e2a\u4ee5\u4e0a\u7684\u4e3b\u9898\u3002\u8fdb\u884c\u4e3b\u9898\u5207\u6362\uff0c\u4e00\u822c\u662f\u5bf9\u5143\u7d20\u7684\u7c7b\u578b\u7684\u524d\u7f00\u8fdb\u884c\u66f4\u6362")),l.a.createElement(r["a"],{code:"type Theme = BEM<'antd',['button','tabs','table'],['warning','success','error']>\n\n/**\n * \u6784\u9020\u6210\u4ee5\u4e0b\u7c7b\u578b\n * antd__button--warning\n * antd__button--success\n * antd__button--error\n * antd__tabs--warning\n * antd__tabs--success\n * antd__tabs--error\n * antd__table--warning\n * antd__table--success\n * antd__table--error\n */",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u8fd9\u4e09\u4e2a\u90e8\u5206\u7684\u5408\u5e76\uff0c\u9700\u8981\u53d6\u51fa\u5e76\u904d\u5386\u6bcf\u4e00\u4e2a\u5143\u7d20\u6765\u548c\u5176\u4ed6\u90e8\u5206\u7ec4\u5408\uff0c\u8fd9\u6837\u6548\u7387\u975e\u5e38\u4f4e\u3002\u8fd9\u65f6\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u8054\u5408\u7c7b\u578b")),l.a.createElement(r["a"],{code:"/** \u6570\u7ec4\u8f6c\u8054\u5408\u7c7b\u578b\uff0c\u8fd9\u91cc number \u8868\u793a\u7684\u662f\u6570\u7ec4\u7d22\u5f15\u7684\u7c7b\u578b\uff0c\u901a\u8fc7\u7d22\u5f15\u8bbf\u95ee\u53d8\u6210\u8054\u5408\u7c7b\u578b\uff0c\u6570\u7ec4\u7c7b\u578b\u53d6\u51fa\u6240\u6709\u7684\u6570\u5b57\u7d22\u5f15\u5bf9\u5e94\u7684\u503c */\ntype Union1 = ['button','tabs','table'][number]\n\n/** type Union1 = \"button\" | \"tabs\" | \"table\" */",lang:"ts"}),l.a.createElement(r["a"],{code:'/**\n * \u5b57\u7b26\u4e32\u7c7b\u578b\u4e2d\u9047\u5230\u8054\u5408\u7c7b\u578b\u7684\u65f6\u5019\uff0c\u4f1a\u6bcf\u4e2a\u5143\u7d20\u5355\u72ec\u4f20\u5165\u8ba1\u7b97\n */\ntype BEM<\n  Theme extends string,\n  Component extends string[],\n  Effect extends string[]\n> = `${Theme}__${Component[number]}--${Effect[number]}`;\n\ntype Antd = BEM<\'antd\',[\'button\',\'tabs\',\'table\'],[\'warning\',\'success\',\'error\']>;\n/**\n * type Antd = "antd__button--warning" | "antd__button--success" | "antd__button--error" | "antd__tabs--warning" | "antd__tabs--success" | "antd__tabs--error" | "antd__table--warning" | "antd__table--success" | "antd__table--error"\n */',lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u8fd8\u6709\u6848\u4f8b\u5c31\u662f\uff0c\u9700\u8981\u6839\u636e\u8054\u5408\u7c7b\u578b\u6765\u8fdb\u884c\u7ec4\u5408\u64cd\u4f5c\uff0c\u5982\u4e0b\u6240\u793a")),l.a.createElement(r["a"],{code:"\x3c!-- \u4e24\u4e24\u7ec4\u5408\uff0c\u7ec4\u5408\u51fa\u7684\u5b57\u7b26\u4e32\u518d\u548c\u5176\u4ed6\u5b57\u7b26\u4e32\u4e24\u4e24\u7ec4\u5408 --\x3e\nscanf: 'A' | 'B'\nprint: 'A' | 'B' | 'AB' | 'BA'",lang:"md"}),l.a.createElement(r["a"],{code:"type Combination<\n  A extends string,\n  B extends string\n> = A | B | `${A}${B}` | `${B}${A}`;\n\ntype Combinate1 = Combination<'A','B'>;\n/**\n * type Combinate1 = 'A' | 'B' | 'AB' | 'BA'\n */",lang:"ts"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u90a3\u4e48\u591a\u4e2a\u8054\u5408\u7684\u7c7b\u578b\u7684\u5168\u7ec4\u5408\uff0c\u5c31\u53ef\u4ee5\u8fd9\u6837\u5199\u4e86")),l.a.createElement(r["a"],{code:"/**\n * \u8fd9\u91cc\u5b9e\u9645\u4e0a\u4f1a\u88ab\u62c6\u5206\u6210\u591a\u4e2a\u7c7b\u578b\u7684\u7ec4\u5408\n * example\uff1a'A' | 'B' | 'C'\n * \u4e00\uff1atype AllCombinationtype<'A' | 'B' | 'C'>= Combination<'A',AllCombinationtype<'B' | 'C'> | Combination<'B',AllCombinationtype<'A' | 'C'> | Combination<'C',AllCombinationtype<'A' | 'B'>\n * \u4e8c\uff1atype AllCombinationtype<'B' | 'C'> = Combination<'B',AllCombinationtype<'C'>> | Combination<'C',AllCombinationtype<'B'>> \n * \u4e09\uff1aAllCombinationtype<'C'> = Combination<'C',AllCombinationtype<never> = never> = 'C'\n */\ntype AllCombinationtype<\n  A extends string,\n  B extends string = A\n> = A extends A ? Combination<A,AllCombinationtype<Exclude<B,A>>> : never\n\ntype Combinate2 = AllCombinationtype<'A' | 'B' | 'C'>;\n\n/**\n * type Combinate2 = \"A\" | \"B\" | \"AB\" | \"BA\" | \"C\" | \"BC\" | \"CB\" | \"AC\" | \"ABC\" | \"ACB\" | \"CA\" | \"BCA\" | \"CBA\" | \"BAC\" | \"CAB\"\n */",lang:"ts"})))})));e["default"]=n=>{var e=l.a.useContext(o["context"]),t=e.demos;return l.a.useEffect((()=>{var e;null!==n&&void 0!==n&&null!==(e=n.location)&&void 0!==e&&e.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:t})}}}]);