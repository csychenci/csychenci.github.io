(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[202],{"bGJ+":function(e,n,t){"use strict";t.r(n);var l=t("q1tI"),u=t.n(l),r=t("dEAq"),a=(t("0H/f"),t("N0lm"),t("DgDr"),t("cGlH"),t("ekZX"),t("Bjia")),m=(t("tVxl"),t("1pSt"),u.a.memo((e=>{e.demos;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"markdown"},u.a.createElement("h2",{id:"\u6570\u7ec4\u957f\u5ea6\u505a\u8bb0\u6570"},u.a.createElement(r["AnchorLink"],{to:"#\u6570\u7ec4\u957f\u5ea6\u505a\u8bb0\u6570","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u6570\u7ec4\u957f\u5ea6\u505a\u8bb0\u6570"),u.a.createElement("hr",null),u.a.createElement("ol",null,u.a.createElement("li",null,"\u6570\u503c\u8fd0\u7b97")),u.a.createElement("ul",null,u.a.createElement("li",null,"ts \u7c7b\u578b\u7cfb\u7edf\u6ca1\u6709\u7b97\u672f\u8fd0\u7b97\u7b26\uff0c\u5982\u679c\u8981\u505a\u6570\u503c\u8fd0\u7b97\uff0c\u5e94\u8be5\u5982\u4f55\u505a\uff1f\u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u4e0d\u540c\u957f\u5ea6\u7684\u6570\u7ec4\u7136\u540e\u53d6 length\uff0c\u5c31\u53ef\u4ee5\u8fdb\u884c\u6570\u503c\u7684\u8fd0\u7b97\uff0c\u628a\u7b97\u672f\u8fd0\u7b97\u8f6c\u5316\u4e3a\u5bf9\u6570\u7ec4\u7684\u63d0\u53d6\u548c\u6784\u9020"),u.a.createElement("li",null,"\u610f\u601d\u5c31\u662f\uff0c\u5c06\u4e24\u4e2a\u6570\u7684\u7b97\u672f\u64cd\u4f5c\u8f6c\u6362\u4e3a\u5bf9\u4e24\u4e2a\u4e0d\u540c\u957f\u5ea6\u7684\u6570\u7ec4\u7684\u64cd\u4f5c\u6784\u9020\u6210\u65b0\u7684\u6570\u7ec4\uff0c\u7136\u540e\u53d6\u5b83\u7684\u957f\u5ea6\u5373\u53ef\u3002\u6211\u4eec\u5148\u6765\u5b9e\u73b0\u4e00\u4e2a\u6784\u9020\u6307\u5b9a\u957f\u5ea6\u7684\u6570\u7ec4\u7684\u7c7b\u578b")),u.a.createElement(a["a"],{code:'/**\n * @desc: \u5b9e\u73b0\u4e00\u4e2a\u6784\u9020\u6307\u5b9a\u957f\u5ea6\u7684\u6570\u7ec4\u7684\u7c7b\u578b\n * @param{Length}: \u8981\u6784\u9020\u7684\u6570\u7ec4\u7c7b\u578b\u7684\u957f\u5ea6\n * @param{Ele}: \u6784\u9020\u7684\u6570\u7ec4\u8981\u586b\u5145\u4ec0\u4e48\u7c7b\u578b\u7684\u5143\u7d20\uff0c\u9ed8\u8ba4\u4e3aunknown\u7c7b\u578b\n * @param{Res}: \u6700\u7ec8\u6784\u9020\u5b8c\u6210\u7684\u6570\u7ec4\n * */\n\ntype BuildArr<\n  Length extends number,\n  Ele = unknown,\n  Res extends unknown[] = []\n> = Res["length"] extends Length ? Res : BuildArr<Length, Ele, [...Res, Ele]>;\n\ntype buildArr1 = BuildArr<8>;\n// type buildArr1 = [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]\n\ntype buildArr1Len = buildArr1["length"];\n// type buildArr1Len = 8;',lang:"ts"}),u.a.createElement("ol",{start:2},u.a.createElement("li",null,"\u6570\u7ec4\u957f\u5ea6\u5b9e\u73b0\u7b97\u672f\u8fd0\u7b97")),u.a.createElement("ul",null,u.a.createElement("li",null,"\u6848\u4f8b\u4e00\uff1a\u5b9e\u73b0\u4e24\u4e2a\u6570\u7684\u52a0\u6cd5\u8fd0\u7b97\u3002\u5f88\u7b80\u5355\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5c06\u6784\u9020\u51fa\u7684\u6570\u7ec4\u8fdb\u884c\u5408\u5e76\u5c31\u53ef\u4ee5\u4e86")),u.a.createElement(a["a"],{code:'/** \u5f53\u524d\u53ea\u80fd\u5b9e\u73b0 0 \u4ee5\u4e0a\u7684\u6574\u6570\u76f8\u52a0 */\n\ntype Add<\n  Num1 extends number,\n  Num2 extends number  \n> = [...BuildArr<Num1>,...BuildArr<Num2>]["length"];\n\ntype sum1 = Add<45,28>;\n// type sum1 = 73',lang:"ts"}),u.a.createElement("ul",null,u.a.createElement("li",null,"\u8fd9\u91cc\u628a\u7ea6\u675f\u5173\u7cfb\u8c03\u6362\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u62a5\u9519(Length extends Arr['length'])\u3002\u7c7b\u578b\u7f16\u7a0b\u4e2d\u5982\u679c\u9700\u8981\u53d6\u7c7b\u578b\u53c2\u6570\u505a\u4e00\u4e9b\u8ba1\u7b97\u7684\u65f6\u5019\uff0c\u9ed8\u8ba4\u63a8\u5bfc\u51fa\u7684\u662f\u7ea6\u675f\u7684\u7c7b\u578b\uff0c\u5982\u679c\u6ca1\u6709\u7c7b\u578b\u7ea6\u675f\uff0c\u90a3\u5c31\u662f unknown")),u.a.createElement(a["a"],{code:"type TestNumber<T extends number,U = 2> = U extends T ? true :false;\n\ntype TestNumber1<T extends number,U = 2> = T extends U ? true :false;\n\ntype test1 = TestNumber<number>\n/** type test1 = true */\n\ntype test2 = TestNumber1<number>\n/** type test2 = false */",lang:"ts"}),u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement("p",null,"\u8fd9\u662f\u56e0\u4e3a number extends \u67d0\u4e2a\u5177\u4f53\u7684\u6570\u5b57\u6c38\u8fdc\u4e0d\u4f1a\u6210\u7acb\uff0c\u6c38\u8fdc\u662f false")),u.a.createElement("li",null,u.a.createElement("p",null,"\u6848\u4f8b\u4e8c\uff1a\u5b9e\u73b0\u4e24\u4e2a\u6570\u4e4b\u95f4\u7684\u51cf\u6cd5\u8fd0\u7b97\u3002\u6784\u9020\u4e0d\u540c\u957f\u5ea6\u7684\u540c\u4e00\u5143\u7d20\u7684\u6570\u7ec4\uff0c\u5176\u4e2d\u957f\u5ea6\u5c0f\u7684\u662f\u957f\u5ea6\u5927\u7684\u7684\u5b50\u96c6\uff0c\u56e0\u6b64\uff0c\u53ea\u9700\u8981\u6c42\u5f97\u5269\u4e0b\u7684\u6570\u7ec4\u7684\u957f\u5ea6\u5373\u53ef"))),u.a.createElement(a["a"],{code:'/**\n * \u901a\u8fc7\u6784\u9020\u4e24\u4e2a\u6570\u7ec4\uff0c\u6c42\u5269\u4e0b\u7684\u6570\u7ec4\u7684\u957f\u5ea6\u5373\u53ef\n */\ntype Subtract<\n  Num1 extends number,\n  Num2 extends number\n> = BuildArr<Num1> extends [...BuildArr<Num2>, ...infer R] ? R["length"] : never;\n\ntype subtract1 = Subtract<45,16>;\n/** type subtract1 = 29; */',lang:"ts"}),u.a.createElement("ul",null,u.a.createElement("li",null,"\u6848\u4f8b\u4e09\uff1a\u5b9e\u73b0\u4e24\u4e2a\u6570\u4e4b\u95f4\u7684\u4e58\u6cd5\u8fd0\u7b97")),u.a.createElement(a["a"],{code:'/**\n * \u4e24\u4e2a\u6570\u76f8\u4e58 n*m\uff0c\u53ef\u4ee5\u770b\u6210 n \u4e2a m \u76f8\u52a0\n * \u6bcf\u6b21\u76f8\u52a0\uff0c\u90fd\u5c06 n \u7684\u503c\u51cf\u4e00\uff0c\u76f4\u5230\u4ed6\u4e3a\u96f6\n */\n\ntype Mutiply<\n  Num1 extends number,\n  Num2 extends number,\n  Res extends unknown[] = []\n> = Num2 extends 0 ? Res["length"] : Mutiply<Num1,Subtract<Num2,1>,[...Res,...BuildArr<Num1>]>;\n\ntype mutiply1 = Mutiply<5,8>\n/** type mutiply1 = 40 */',lang:"ts"}),u.a.createElement("ul",null,u.a.createElement("li",null,"\u6848\u4f8b\u56db\uff1a\u5b9e\u73b0\u4e24\u4e2a\u6570\u4e4b\u95f4\u7684\u9664\u6cd5\u8fd0\u7b97")),u.a.createElement(a["a"],{code:'/**\n * \u9664\u6cd5\u4e0e\u4e58\u6cd5\u7c7b\u578b\uff0c\u4e58\u6cd5\u662f\u67d0\u4e2a\u6570\u4f9d\u6b21\u76f8\u52a0\u591a\u5c11\u6b21\n * \u9664\u6cd5\u5c31\u662f\u67d0\u4e2a\u6570\u4e00\u76f4\u51cf\u67d0\u4e2a\u6570\uff0c\u76f4\u5230\u4e3a 0\n */\n\ntype Divide<\n  Num1 extends number,\n  Num2 extends number,\n  Res extends unknown[] = []\n> = Num1 extends 0 ? Res["length"] : Divide<Subtract<Num1,Num2>,Num2,[unknown,...Res]>;\n\ntype divide1 = Divide<25,5>;\n/** type divide1 = 5 */',lang:"ts"}),u.a.createElement("ol",{start:3},u.a.createElement("li",null,"\u6570\u7ec4\u957f\u5ea6\u5b9e\u73b0\u8ba1\u6570")),u.a.createElement("ul",null,u.a.createElement("li",null,"\u6570\u7ec4\u957f\u5ea6\u53ef\u4ee5\u901a\u8fc7 length \u6765\u83b7\u53d6\uff0c\u90a3\u5b57\u7b26\u4e32\u7c7b\u578b\u662f\u65e0\u6cd5\u53d6 length \u7684\uff0c\u5982\u4f55\u83b7\u53d6\u4e00\u4e2a\u957f\u5ea6\u4e0d\u786e\u5b9a\u7684\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u957f\u5ea6\u5462")),u.a.createElement(a["a"],{code:"/** \n * \u901a\u8fc7\u6a21\u5f0f\u5339\u914d\u63d0\u53d6\u53bb\u6389\u4e00\u4e2a\u5b57\u7b26\u4e4b\u540e\u7684\u5269\u4f59\u5b57\u7b26\u4e32\n */\ntype StrLen<\n  Str extends string,\n  Count extends unknown[] = []\n> = Str extends `${string}${infer R}` ? StrLen<R,[...Count,unknown]> : Count[\"length\"];\n\ntype len1 = StrLen<'jetaime'>\n/** type len1 = 7 */",lang:"ts"}),u.a.createElement("ul",null,u.a.createElement("li",null,"\u6848\u4f8b\u4e8c\uff1a\u63d0\u4f9b\u4e00\u4e2a\u7c7b\u578b\u80fd\u591f\u505a\u4e24\u4e2a\u6570\u4e4b\u95f4\u7684\u6bd4\u8f83")),u.a.createElement(a["a"],{code:"/** \n * \u5f80\u7a7a\u6570\u7ec4\u5185\u653e\u5165\u5143\u7d20\uff0c\u4e00\u65e6\u5176\u4e2d\u67d0\u4e2a\u6570\u5148 extends \u6570\u7ec4['length']\uff0c\u8bf4\u660e\u8fd9\u4e2a\u6570\u662f\u8f83\u5c0f\u7684\u90a3\u4e2a\u6570\n */\ntype MoreThen<\n  Num1 extends number,\n  Num2 extends number,\n  Count extends unknown[] = []\n> = Num1 extends Num2 ? false : Num1 extends Count['length'] ? false : Num2 extends Count['length'] ? true : MoreThen<Num1,Num2,[...Count,unknown]>;\n\ntype than1 = MoreThen<5,1>;\n/** type than1 = true */\n\ntype than2 = MoreThen<5,10>;\n/** type than2 = false */\n\ntype than3 = MoreThen<5,5>;\n/** type than3 = false */",lang:"ts"}),u.a.createElement(a["a"],{code:"type MoreThen<\n  Num1 extends number,\n  Num2 extends number,\n  Count extends unknown[] = []\n> = Num1 extends Num2 ? false : BuildArr<Num1> extends [...BuildArr<Num2>,...infer R] ? true : false",lang:"ts"}),u.a.createElement("ul",null,u.a.createElement("li",null,"\u6848\u4f8b\u4e09\uff1a\u6839\u636e\u4ee5\u4e0a\u7684\u7c7b\u578b\u5b9e\u73b0\u4e00\u4e2a\u6590\u6ce2\u90a3\u5951\u6570\u5217")),u.a.createElement(a["a"],{code:'/**\n * @Prev : \u8868\u793a\u4e4b\u524d\u7684\u7d2f\u52a0\u503c\u7684\u6570\u7ec4\n * @Current : \u8868\u793a\u5f53\u524d\u6570\u503c\u7684\u6570\u7ec4\n * @Index : \u7528\u4e8e\u8bb0\u5f55\u5f53\u524d\u8d70\u5230\u54ea\u4e2a\u4f4d\u7f6e\u4e86\n * @Num : \u8868\u793a\u6c42\u6570\u5217\u7684\u54ea\u4e2a\u6570\n */\ntype FibonacciLoop<\n  Num extends number = 1,\n  Prev extends unknown[] = [1],\n  Current extends unknown[] = [],\n  Index extends unknown[] = [0],\n> = Index["length"] extends Num ? Index : FibonacciLoop<Num,Current, [...Prev, ...Current], [...Index, Add<Prev["length"],Current[\'length\']>]>;\n\n/**\n * type FibonacciLoop<\n  Prev extends unknown[] = [],\n  Current extends unknown[] = [],\n  Index extends unknown[] = [],\n  Num extends number = 1\n  > = Index[\'length\'] extends Num ? Index : FibonacciLoop<Current,[...Prev,...Current],[...Index,Add<Prev["length"],Current["length"]>],Num>;\n * */\n\ntype Fibonacci<Num extends number> = FibonacciLoop<Num>;\n\ntype Fibonacci1 = Fibonacci<10>;\n// type Fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]',lang:"ts"})))})));n["default"]=e=>{var n=u.a.useContext(r["context"]),t=n.demos;return u.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),u.a.createElement(m,{demos:t})}}}]);