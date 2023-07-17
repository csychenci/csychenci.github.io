(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[172],{"zr+S":function(e,n,t){"use strict";t.r(n);var l=t("q1tI"),a=t.n(l),r=t("dEAq"),c=(t("0H/f"),t("N0lm"),t("DgDr"),t("cGlH"),t("ekZX"),t("Bjia")),o=(t("tVxl"),t("1pSt"),a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"vector"},a.a.createElement(r["AnchorLink"],{to:"#vector","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Vector"),a.a.createElement("hr",null),a.a.createElement("ol",null,a.a.createElement("li",null,"\u63cf\u8ff0")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5728 rust \u6807\u51c6\u5e93\u4e2d\uff0c\u63d0\u4f9b\u4e86\u5f88\u591a\u96c6\u5408\u7c7b\u578b\u7684\u6570\u636e\u7ed3\u6784\uff0c\u8fd9\u4e9b\u96c6\u5408\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u503c\u3002\u800c\u8fd9\u4e9b\u96c6\u5408\u548c\u6570\u7ec4\u3001tuple \u662f\u6709\u6240\u4e0d\u540c\u7684\uff0c\u8fd9\u4e9b\u96c6\u5408\u662f\u6307\u5411\u5728 heap \u4e0a\u7684\u6570\u636e\uff0c\u8fd9\u4e5f\u5c31\u610f\u5473\u7740\u8fd9\u4e9b\u96c6\u5408\u7684\u5927\u5c0f\u65e0\u9700\u5728\u7f16\u8bd1\u65f6\u5c31\u786e\u5b9a\uff0c\u5728\u8fd0\u884c\u65f6\u53ef\u4ee5\u52a8\u6001\u7684\u53d8\u5927\u6216\u8005\u53d8\u5c0f")),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"Vector")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u7531\u6807\u51c6\u5e93\u63d0\u4f9b\uff0c\u5199\u6cd5\u662f ",a.a.createElement("code",null,"Vec<T>"),"\uff0c\u5b83\u53ef\u4ee5\u5b58\u50a8\u591a\u4e2a\u503c\uff0c\u4f46\u53ea\u80fd ",a.a.createElement("strong",null,"\u5b58\u50a8\u76f8\u540c\u7c7b\u578b\u7684\u6570\u636e"),"\uff0c\u8fd9\u4e9b\u503c\u5728\u5185\u5b58\u4e2d\u8fde\u7eed\u5b58\u653e")),a.a.createElement(c["a"],{code:"// Vec::new \u521b\u5efa\u7684\u662f\u4e00\u4e2a\u7a7a\u7684vector\uff0c\u91cc\u9762\u6ca1\u6709\u6570\u636e\uff0c\u8fd9\u6837 rust \u4f1a\u65e0\u6cd5\u63a8\u65ad\u51fa\u5b83\u7684\u7c7b\u578b\n// \u56e0\u6b64\u9700\u8981\u663e\u793a\u6307\u660e vector \u5185\u7684\u7c7b\u578b\nfn main () {\n    let v:Vec<i32> = Vec::new();\n}",lang:"rs"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u8fd8\u53ef\u4ee5\u4f7f\u7528\u521d\u59cb\u503c\u6765\u521b\u5efa ",a.a.createElement("code",null,"Vec<T>"),"\uff0c\u4f7f\u7528 vec! \u5b8f\uff0c\u8fd9\u6837 rust \u5c31\u80fd\u63a8\u65ad\u51fa vector \u5185\u7684\u7c7b\u578b")),a.a.createElement(c["a"],{code:"fn main () {\n    let v = vec![1,2,3];\n}",lang:"rs"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u66f4\u65b0 vector\uff0c\u5411 vector \u6dfb\u52a0\u5143\u7d20\uff0c\u4f7f\u7528 push \u65b9\u6cd5")),a.a.createElement(c["a"],{code:"fn main () {\n    let mut v = Vec::new();\n    v.push(1);\n}",lang:"rs"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5220\u9664 vector\uff0c\u4e0e\u5176\u4ed6 struct \u4e00\u6837\uff0c\u5f53 vector \u79bb\u5f00\u4f5c\u7528\u57df\u540e\u5b83\u5c31\u88ab\u6e05\u7406\u6389\u4e86\uff0c\u6b64\u65f6\u5b83\u7684\u6240\u6709\u5143\u7d20\u4e5f\u4f1a\u88ab\u6e05\u7406\u6389"),a.a.createElement("li",null,"\u8bfb\u53d6 vector \u4e2d\u7684\u5143\u7d20\u53ef\u4ee5\u4f7f\u7528\u7d22\u5f15\u6216\u8005 get \u65b9\u6cd5\u83b7\u53d6\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cget \u65b9\u6cd5\u8fd4\u56de\u7684\u662f Option \u679a\u4e3e\uff0c\u6240\u4ee5\u9700\u8981\u7528\u5230\u6a21\u5f0f\u5339\u914d")),a.a.createElement(c["a"],{code:'fn main() {\n    let v = vec![1,2,3];\n    let third:&i32 = &v[2];\n\n    println!("index:{}",third);\n\n    match v.get(2) {\n        Some(i) => println!("get:",i),\n        None => ()\n    }\n}\n\n// index:3\n// get:3',lang:"rs"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u4f7f\u7528\u7d22\u5f15\u7684\u65b9\u5f0f\u8bbf\u95ee\uff0c\u5f53\u8d8a\u754c\u65f6\uff0c\u7a0b\u5e8f\u4f1a\u6050\u614c\uff1b\u800c get \u65b9\u6cd5\u4e0d\u4f1a\uff0c\u56e0\u4e3a match \u4e2d\u5bf9\u83b7\u53d6\u4e3a\u7a7a\uff0c\u4e5f\u5c31\u662f None \u7684\u53d8\u4f53\u8fdb\u884c\u4e86\u5904\u7406"),a.a.createElement("li",null,"\u6240\u6709\u6743\u548c\u501f\u7528\u89c4\u5219\uff0c\u4e0d\u80fd\u5728\u540c\u4e00\u4f5c\u7528\u57df\u5185\u540c\u65f6\u62e5\u6709\u53ef\u53d8\u548c\u4e0d\u53ef\u53d8\u5f15\u7528\u3002vector \u5728\u5185\u5b58\u4e2d\u7684\u4f4d\u7f6e\u662f\u8fde\u7eed\u7684\uff0c\u5728\u4ee5\u4e0b\u7684\u4ee3\u7801\u4e2d\uff0cpush \u5411 vector \u6dfb\u52a0\u5143\u7d20\u65f6\uff0c\u5728\u5185\u5b58\u4e2d\u5c31\u53ef\u80fd\u6ca1\u6709\u8fd9\u4e48\u5927\u7684\u8fde\u7eed\u5185\u5b58\uff0crust \u5c31\u4f1a\u5c06\u8fd9\u6bb5\u5185\u5b58\u91cd\u65b0\u5206\u914d\u4e00\u4e0b\uff0c\u518d\u627e\u4e00\u4e2a\u8db3\u591f\u5927\u7684\u5185\u5b58\u6765\u653e\u7f6e\u4e00\u4e2a\u6dfb\u52a0\u5143\u7d20\u4e4b\u540e\u7684 vector\uff0c\u8fd9\u6837\u7684\u8bdd\uff0c\u5b83\u539f\u5148\u7684\u90a3\u5757\u513f\u5185\u5b58\u5c31\u6709\u53ef\u80fd\u88ab\u91ca\u653e\u6216\u8005\u91cd\u65b0\u5206\u914d\uff0c\u5728\u5185\u5b58\u5206\u914d\u6216\u8005\u91cd\u65b0\u91ca\u653e\u6389\u540e\uff0cfirst \u53d8\u91cf\u4ecd\u4f1a\u6307\u5411\u4e4b\u524d\u7684\u5185\u5b58\u5730\u5740\uff0c\u8fd9\u6837\u7684\u8bdd\u8fd9\u4e2a\u7a0b\u5e8f\u5c31\u4f1a\u51fa\u95ee\u9898\uff0c\u800c\u501f\u7528\u89c4\u5219\u5c31\u4f1a\u9632\u6b62\u7c7b\u4f3c\u60c5\u51b5\u53d1\u751f")),a.a.createElement(c["a"],{code:'//  \u8fd9\u91cc\u4f1a\u4fdd\u5b58\u7684\u539f\u56e0\u662f first \u53d8\u91cf\u4fdd\u5b58\u4e86\u4e00\u4e2a v \u7684\u4e0d\u53ef\u53d8\u5f15\u7528\n// \u800c v.push \u5219\u662f\u4e00\u4e2a\u53ef\u53d8\u7684\u5f15\u7528\uff0c\u81ea\u7136\u5c31\u7f16\u8bd1\u4e0d\u901a\u8fc7\u4e86\nfn main () {\n    let mut v = vec![1,2,3,4,5];\n    let first = &v[0];\n    v.push(6);\n    // error\n    println!("{}",first);\n    // \u4f7f\u7528\u4e86\u4e0d\u53ef\u53d8\u501f\u7528\n}',lang:"rs"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u904d\u5386 vector \u5185\u7684\u503c\u53ef\u4ee5\u4f7f\u7528 for \u5faa\u73af")),a.a.createElement(c["a"],{code:'fn main () {\n    let mut v = vec![1,2,3,4,5];\n    for i in &mut v {\n        *i+=5;\n    }\n    // *\u662f\u53d6\u8fd9\u4e2a\u5730\u5740\u7684\u503c\uff0ci\u5bf9\u5e94\u7684\u662fv\u7684\u6bcf\u4e2a\u5143\u7d20\u7684\u5730\u5740\uff0c\u6240\u4ee5\u8981\u53d6\u8fd9\u4e2a\u5730\u5740\u7684\u503c\n    for i in &mut v {\n        println!("{}",i);\n    }\n}',lang:"rs"}),a.a.createElement("ul",null,a.a.createElement("li",null,"vector \u53ea\u80fd\u5b58\u50a8\u76f8\u540c\u7c7b\u578b\u7684\u6570\u636e\uff0c\u5982\u679c\u8981\u5b58\u50a8\u591a\u79cd\u6570\u636e\u7c7b\u578b\u7684\u8bdd\uff0c\u53ef\u4ee5\u5229\u7528 ",a.a.createElement("strong",null,"enum \u7684\u53d8\u4f53\u53ef\u4ee5\u9644\u52a0\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e")," \u7684\u7279\u70b9\uff0c\u5e76\u4e14\u53d8\u4f53\u7684\u7c7b\u578b\u8ddf\u679a\u4e3e\u7c7b\u578b\u4e00\u81f4\u3002\u4e0b\u9762\u7684 vector \u7684\u7c7b\u578b\u5c31\u662f SpreadsheetCell")),a.a.createElement(c["a"],{code:'enum SpreadsheetCell {\n    Int(i32),\n    Float(f64),\n    Text(String)\n}\n\nfn main () {\n    let row = vec![\n        SpreadsheetCell::Int(1),\n        SpreadsheetCell::Text(String::from("red")),\n        SpreadsheetCell::Float(1.5),\n    ];\n    \n}',lang:"rs"})))})));n["default"]=e=>{var n=a.a.useContext(r["context"]),t=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(o,{demos:t})}}}]);