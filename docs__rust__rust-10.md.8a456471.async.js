(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[171],{wCUR:function(e,n,t){"use strict";t.r(n);var l=t("q1tI"),a=t.n(l),r=t("dEAq"),i=(t("0H/f"),t("N0lm"),t("DgDr"),t("cGlH"),t("ekZX"),t("Bjia")),o=(t("tVxl"),t("1pSt"),a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"\u679a\u4e3e"},a.a.createElement(r["AnchorLink"],{to:"#\u679a\u4e3e","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u679a\u4e3e"),a.a.createElement("hr",null),a.a.createElement("ol",null,a.a.createElement("li",null,"\u4ec0\u4e48\u662f\u679a\u4e3e")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u679a\u4e3e\u5141\u8bb8\u6211\u4eec\u5217\u4e3e\u6240\u6709\u53ef\u80fd\u7684\u503c\u6765\u5b9a\u4e49\u4e00\u4e2a\u7c7b\u578b\u3002\u679a\u4e3e\u4e2d\u6240\u6709\u53ef\u80fd\u7684\u503c\u53eb\u505a\u8fd9\u4e2a\u679a\u4e3e\u7684\u53d8\u4f53")),a.a.createElement(i["a"],{code:"// \u5b9a\u4e49\u4e00\u4e2a\u679a\u4e3e\nenum Color {\n  // \u53d8\u4f53\n  Black,\n  White,\n  Green,\n  Blue\n}\n\nfn main() {\n\t// \u521b\u5efa\u679a\u4e3e\u503c\uff0c\u5b83\u4eec\u7684\u7c7b\u578b\u662f Color\n  let black = Color::Black;\n\t// let black: Color\n  let white = Color::White;\n\t// let white: Color\n\tget_color(black);\n\tget_color(white);\n}\n\nfn get_color(color:Color) {\n\n}",lang:"rs"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u679a\u4e3e\u7684\u53d8\u4f53\u90fd\u4f4d\u4e8e\u6807\u8bc6\u7b26\u7684\u547d\u540d\u7a7a\u95f4\u4e0b\uff0c\u4f7f\u7528\u4e24\u4e2a\u5192\u53f7 :: \u8fdb\u884c\u5206\u5272"),a.a.createElement("li",null,"\u8fd8\u53ef\u5c06\u6570\u636e\u9644\u52a0\u5230\u679a\u4e3e\u7684\u53d8\u4f53\u4e2d\uff0c\u8fd9\u6837\u5c31\u4e0d\u9700\u8981\u4f7f\u7528 struct\uff0c\u4e14\u6bcf\u4e2a\u53d8\u4f53\u53ef\u4ee5\u62e5\u6709\u4e0d\u540c\u7684\u7c7b\u578b\u4ee5\u53ca\u5173\u8054\u7684\u6570\u636e\u91cf(\u751a\u81f3\u53ef\u4ee5\u662f\u53e6\u4e00\u79cd\u679a\u4e3e\u7c7b\u578b)")),a.a.createElement(i["a"],{code:"// Rgb\nenum ColorType {\n\tRgb(i8,i8,i8),\n\tRgba(i8,i8,i8,i8)\uff0c\n\tRMap {x:i32,y:i32}\n}\n\nfn main() {\n\tlet rgb1 = ColorType::Rgb(0,0,0);\n\tlet rgba1 = ColorType::Rgba(0,0,255,1);\n}",lang:"rs"}),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"\u4e3a\u679a\u4e3e\u5b9a\u4e49\u65b9\u6cd5")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u53ef\u4ee5\u4f7f\u7528 impl \u4e3a\u679a\u4e3e\u5b9a\u4e49\u65b9\u6cd5")),a.a.createElement(i["a"],{code:'#[derive(Debug)]\nenum ColorType {\n\tRgb(i8,i8,i8),\n\tRgba(i8,i8,i8,i8),\n\tRMap {x:i32,y:i32}\n}\n\nimpl ColorType {\n\tfn print(&self) {\n\t\tprintln!("{:#?}",self);\n\t}\n}\n\nfn main() {\n\tlet rgb1 = ColorType::Rgb(0,0,0);\n\trgb1.print();\n}`',lang:"rs"}),a.a.createElement("ol",{start:3},a.a.createElement("li",null,"option \u679a\u4e3e")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5728 rust \u4e2d\u662f\u6ca1\u6709 null \u7684\uff0c\u800c\u5728\u5176\u4ed6\u8bed\u8a00\u4e2d\uff0c\u4e00\u4e2a\u53d8\u91cf\u53ef\u4ee5\u5904\u4e8e\u4e24\u79cd\u72b6\u6001\uff1a\u975e\u7a7a\u3001\u7a7a\u503c(null)"),a.a.createElement("li",null,"\u800c null \u7684\u95ee\u9898\u5728\u4e8e\uff0c\u5f53\u4f60\u5c1d\u8bd5\u50cf\u4f7f\u7528\u975e null \u503c\u90a3\u6837\u4f7f\u7528 null \u503c\u65f6\uff0c\u5c31\u4f1a\u5f15\u8d77\u67d0\u79cd\u9519\u8bef\uff1b\u5f53 null \u8fd9\u4e2a\u6982\u5ff5\u8fd8\u662f\u6709\u7528\u7684\uff0c\u56e0\u67d0\u79cd\u60c5\u51b5\u800c\u53d8\u4e3a\u65e0\u6548\u6216\u7f3a\u5931\u7684\u503c"),a.a.createElement("li",null,"\u56e0\u6b64\uff0crust \u4e2d\u7c7b\u4f3c null \u6982\u5ff5\u7684\u679a\u4e3e\u5c31\u662f Option<T>\u3002\u5b83\u5b9a\u4e49\u4e8e\u6807\u51c6\u5e93\u4e2d\uff0c\u5728 prelude(\u9884\u5bfc\u5165\u6a21\u5757) \u4e2d\uff0c\u5b83\u63cf\u8ff0\u4e86\uff1a\u67d0\u4e2a\u503c\u53ef\u80fd\u5b58\u5728\u3001\u53ef\u80fd\u662f\u67d0\u79cd\u7c7b\u578b\u7684\u6216\u4e0d\u5b58\u5728\u7684\u60c5\u51b5"),a.a.createElement("li",null,"\u5b83\u5728\u6807\u51c6\u5e93\u4e2d\u7684\u5b9a\u4e49\u5982\u4e0b\u6240\u793a\uff0c\u5b83\u6709\u4e24\u4e2a\u53d8\u4f53\u3002\u56e0\u4e3a\u5b83\u5305\u542b\u5728 Prelude \u4e2d\uff0c\u6240\u4ee5\u53d8\u4f53\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528")),a.a.createElement(i["a"],{code:"// T \u662f\u6cdb\u578b\u53c2\u6570\nenum Option<T> {\n\tSome(T),\n\tNone\n}",lang:"rs"}),a.a.createElement(i["a"],{code:'fn main(){\n\tlet some_number = Some(5);\n\t// Option<i32>\n\tlet some_string = Some("str");\n\t// Option<&str>\n\tlet absent_number:Option<i32> = None;\n\t// \u5728\u4f7f\u7528 None \u8fd9\u4e2a\u53d8\u4f53\u65f6\uff0c\u7f16\u8bd1\u5668\u65e0\u6cd5\u76f4\u63a5\u63a8\u65ad\u51fa T \u5230\u5e95\u662f\u4ec0\u4e48\u7c7b\u578b\uff0c\u9700\u8981\u663e\u5f0f\u5b50\u5730\u58f0\u660e\u5b83\u7684\u7c7b\u578b\n}',lang:"rs"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u8fd9\u6837\u8bbe\u8ba1\u6709\u4ec0\u4e48\u597d\u5904\u5462\uff1f\u5728 rust \u4e2d\uff0cOption<T> \u548c T \u662f\u4e0d\u540c\u7684\u7c7b\u578b\uff0c\u4e0d\u53ef\u4ee5\u628a Option<T> \u76f4\u63a5\u5f53\u6210 T \u6765\u4f7f\u7528")),a.a.createElement(i["a"],{code:"fn main(){\n\tlet x:i8 = 5;\n\tlet y:Option<i8> = Some(5);\n\n\tlet sum = x + y;\n\t// \u7f16\u8bd1\u62a5\u9519error: cannot add `Option<i8>` to `i8`\n}",lang:"rs"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u800c\u82e5\u60f3\u4f7f\u7528 Option<T> \u4e2d\u7684 T\uff0c\u5fc5\u987b\u5c06\u5b83\u8f6c\u6362\u4e3a T\u3002\u5728 rust \u4e2d\uff0c\u5982\u679c\u67d0\u4e2a\u503c\u4e0d\u662f Option<T>\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u5b89\u5168\u7684\u5047\u8bbe\u8fd9\u4e2a\u503c\u80af\u5b9a\u4e0d\u662f\u7a7a\u7684\uff1b\u5982\u679c\u5b83\u662f Option<T>\uff0c\u5c31\u5fc5\u987b\u5c06\u5b83\u8f6c\u6362\u540e\u624d\u80fd\u4f7f\u7528"),a.a.createElement("li",null,"\u8fd9\u6837\u7684\u8bbe\u8ba1\u5c31\u6bd4\u8f83\u5b89\u5168\uff0c\u907f\u514d\u4e86 null \u503c\u6cdb\u6ee5\u7684\u60c5\u51b5")),a.a.createElement("hr",null),a.a.createElement("h2",{id:"\u6a21\u5f0f\u5339\u914d"},a.a.createElement(r["AnchorLink"],{to:"#\u6a21\u5f0f\u5339\u914d","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6a21\u5f0f\u5339\u914d"),a.a.createElement("hr",null),a.a.createElement("ol",null,a.a.createElement("li",null,"match")),a.a.createElement("ul",null,a.a.createElement("li",null,"rust \u63d0\u4f9b\u4e86\u4e00\u4e2a\u6781\u4e3a\u5f3a\u5927\u7684\u63a7\u5236\u6d41\u8fd0\u7b97\u7b26\uff0cmatch\u3002\u5b83\u5141\u8bb8\u4e00\u4e2a\u503c\u4e0e\u4e00\u7cfb\u5217\u6a21\u5f0f\u8fdb\u884c\u5339\u914d\uff0c\u5e76\u6267\u884c\u5339\u914d\u7684\u6a21\u5f0f\u5bf9\u5e94\u7684\u4ee3\u7801"),a.a.createElement("li",null,"\u8fd9\u4e9b\u6a21\u5f0f\u53ef\u4ee5\u662f\u5b57\u9762\u503c\u3001\u53d8\u91cf\u540d\u3001\u901a\u914d\u7b26\u7b49")),a.a.createElement(i["a"],{code:"// \u7f8e\u56fd\u786c\u5e01\u7684\u679a\u4e3e\nenum Coin {\n\tPenny,\n\tNickel,\n\tDime,\n\tQuarter\n}\n\nfn value_in_cents(coin:Coin) -> u8 {\n\tmatch coin {\n\t\tCoin::Penny => 1,\n\t\tCoin::Nickel => 5,\n\t\tCoin::Dime => 10,\n\t\tCoin::Quarter => 25\n\t}\n}",lang:"rs"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5728 match \u8868\u8fbe\u5f0f\u6267\u884c\u7684\u65f6\u5019\uff0c\u5b83\u4f1a\u5c06\u540e\u9762\u7684\u8868\u8fbe\u5f0f\u4f9d\u6b21\u4e0e\u91cc\u9762\u7684\u5206\u652f\u8fdb\u884c\u6bd4\u8f83\uff0c\u5339\u914d\u6210\u529f\u7684\u5206\u652f\u7684\u4ee3\u7801\u8868\u8fbe\u5f0f\u5c31\u4f1a\u4f5c\u4e3a\u6574\u4e2a match \u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u8fdb\u884c\u8fd4\u56de")),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"\u7ed1\u5b9a\u503c\u7684\u6a21\u5f0f")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5339\u914d\u7684\u5206\u652f\u53ef\u4ee5\u7ed1\u5b9a\u5230\u88ab\u5339\u914d\u5bf9\u8c61\u7684\u90e8\u5206\u503c")),a.a.createElement(i["a"],{code:'#[derive(Debug)]\nenum Cash {\n\tOne,\n\tFive,\n\tTen,\n\tTwenty,\n\tFifty,\n\tHundred\n}\n\nenum Pay {\n\tAlipay,\n\tWechatpay,\n\tCashpay(Cash),\n}\n\nfn get_pay_type(pay:Pay) -> i8 {\n\treturn match pay {\n\t\tPay::Alipay => 0,\n\t\tPay::Wechatpay => 1,\n\t\tPay::Cashpay(state) => {\n\t\t\tprintln!("{:#?}",state);\n\t\t\treturn 2;\n\t\t},\n\t};\n}\n\nfn main() {\n\tprintln!("{}",get_pay_type(Pay::Cashpay(Cash::Hundred)));\n\t// Hundred 2\n}',lang:"rs"}),a.a.createElement("ol",{start:3},a.a.createElement("li",null,"\u5339\u914dOption<T>")),a.a.createElement(i["a"],{code:"fn main () {\n\tlet six =add_one(Some(5));\n\tlet none = add_one(None);\n}\n\nfn add_one(num:Option<i32>) -> Option<i32> {\n\tmatch num {\n\t\tNone => None,\n\t\tSome(i) => Some(i + 1),\n\t}\n}",lang:"rs"}),a.a.createElement("ul",null,a.a.createElement("li",null,"match \u5339\u914d\u7684\u65f6\u5019\u5fc5\u987b\u7a77\u4e3e\u6240\u6709\u7684\u53ef\u80fd\uff0c\u6bd4\u5982\u679a\u4e3e\u4e2d\u7684\u53d8\u4f53\u9700\u8981\u90fd\u5199\u51fa\u8868\u8fbe\u5f0f\u3002\u4f46\u5f53\u5339\u914d\u7684\u503c\u8fc7\u591a\u65e0\u6cd5\u4e00\u4e00\u5217\u51fa\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u901a\u914d\u7b26\u6765\u66ff\u4ee3\u5176\u4f59\u6ca1\u5217\u51fa\u7684\u503c")),a.a.createElement(i["a"],{code:'fn main() {\n\tlet v = 0u8;\n\tmatch v {\n\t\t1 => println!("one"),\n\t\t2 => println!("two"),\n\t\t_ => ()\n\t}\n}',lang:"rs"}),a.a.createElement("ul",null,a.a.createElement("li",null,"v\u7684\u503c\u6709 256 \u79cd\u53ef\u80fd\uff0c0-255\uff0c\u4e00\u5171\u662f256\u4e2a\u6574\u6570\u3002\u5982\u679c\u9700\u8981\u7a77\u4e3e\uff0c\u5c31\u9700\u8981\u5199256\u79cd\u53ef\u80fd\uff0c\u4f46\u5b9e\u9645\u4e0a\u6211\u4eec\u53ea\u9700\u8981\u5904\u7406\u6211\u4eec\u9700\u8981\u7684\uff0c\u4f46\u662f\u8981\u5c06\u901a\u914d\u7b26\u5199\u5230\u6700\u540e")),a.a.createElement("ol",{start:4},a.a.createElement("li",null,"if let")),a.a.createElement("ul",null,a.a.createElement("li",null,"match \u662f\u4e00\u4e2a\u63a7\u5236\u6d41\u8868\u8fbe\u5f0f\uff0c\u800c if let \u662f\u4e00\u4e2a\u7b80\u5355\u7684\u63a7\u5236\u6d41\uff0c\u5b83\u5904\u7406\u7684\u4e8b\u53ea\u5173\u5fc3\u4e00\u79cd\u5339\u914d\u800c\u5ffd\u7565\u5176\u4ed6\u5339\u914d\u7684\u60c5\u51b5")),a.a.createElement(i["a"],{code:'fn main() {\n\tlet v = Some(0u8);\n\tmatch v {\n\t\tSome(1) => println!("one"),\n\t\t_ => ()\n\t}\n\n\tif let Some(1) = v {\n\t\tprintln!("one");\n\t} else {\n\t\tprintln!("others");\n\t}\n}',lang:"rs"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5982\u4e0a\u6240\u793a\uff0c\u5f53\u6211\u4eec\u53ea\u9700\u8981\u5904\u7406\u4e00\u79cd\u5339\u914d\u65f6(\u8fd9\u91cc\u6211\u4eec\u5ffd\u7565\u4e86 None \u53ca\u5176\u4ed6\u53d8\u4f53)\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 if let \u66ff\u4ee3\u5904\u7406"),a.a.createElement("li",null,"\u5b83\u5177\u6709\u66f4\u5c11\u7684\u4ee3\u7801\u3001\u66f4\u5c11\u7684\u7f29\u8fdb\u3001\u66f4\u5c11\u7684\u6a21\u7248\u4ee3\u7801\uff0c\u4e14\u653e\u5f03\u4e86\u7a77\u4e3e\u7684\u53ef\u80fd\uff0c\u5b83\u53ef\u4ee5\u770b\u4f5c\u662f match \u7684\u8bed\u6cd5\u7cd6\uff0c\u4e5f\u5c31\u662f\u53ea\u9488\u5bf9\u4e00\u79cd\u7279\u5b9a\u6a21\u5f0f\u6765\u8fd0\u884c\u800c\u5ffd\u7565\u5176\u4ed6\u7684\u53ef\u80fd\u6027")),a.a.createElement(i["a"],{code:'// \u5982\u679c\u9700\u8981\u5176\u4ed6\u60c5\u51b5\u7684\u5904\u7406\uff0c\u4e5f\u53ef\u4ee5\u642d\u914d else \u8fdb\u884c\u4f7f\u7528\nfn main() {\n\tlet v = Some(0u8);\n\t// match v {\n\t// \tSome(1) => println!("one"),\n\t// \t_ => ()\n\t// }\n\n\t// \u8fd9\u91cc\u5e76\u4e0d\u662f\u6bd4\u5bf9\uff0c\u53ef\u4ee5\u770b\u4f5c\u662f\u7c7b\u578b\u8f6c\u6362\n\tif let Some(1) = v {\n\t\tprintln!("one");\n\t} else {\n\t\tprintln!("others");\n\t}\n}',lang:"rs"})))})));n["default"]=e=>{var n=a.a.useContext(r["context"]),t=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(o,{demos:t})}}}]);