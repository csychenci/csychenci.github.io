(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[164],{jWkp:function(e,n,t){"use strict";t.r(n);var l=t("q1tI"),a=t.n(l),r=t("dEAq"),i=(t("0H/f"),t("N0lm"),t("DgDr"),t("cGlH"),t("ekZX"),t("Bjia")),o=(t("tVxl"),t("1pSt"),a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"\u6cdb\u578b"},a.a.createElement(r["AnchorLink"],{to:"#\u6cdb\u578b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6cdb\u578b"),a.a.createElement("hr",null),a.a.createElement("ol",null,a.a.createElement("li",null,"\u6cdb\u578b\u7684\u4f5c\u7528")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u80fd\u63d0\u9ad8\u4ee3\u7801\u590d\u7528\u80fd\u529b\uff0c\u4f8b\u5982\u5904\u7406\u91cd\u590d\u4ee3\u7801\u7684\u95ee\u9898\u3002\u6cdb\u578b\u662f ",a.a.createElement("strong",null,"\u5177\u4f53\u7c7b\u578b\u6216\u5176\u4ed6\u5c5e\u6027\u7684\u62bd\u8c61\u4ee3\u66ff"),"\uff0c\u610f\u601d\u662f\u5f53\u4f60\u5199\u4ee3\u7801\u65f6\uff0c\u4f60\u7f16\u5199\u7684\u4ee3\u7801\u4e0d\u662f\u6700\u7ec8\u7684\u4ee3\u7801\uff0c\u800c\u662f\u4e00\u79cd\u6a21\u7248\uff0c\u91cc\u9762\u6709\u4e00\u4e9b\u5360\u4f4d\u7b26\uff1b\u800c\u7f16\u8bd1\u5668\u5728 ",a.a.createElement("strong",null,"\u7f16\u8bd1\u65f6")," \u6839\u636e\u4f60\u7684\u4f7f\u7528\u5c06\u5360\u4f4d\u7b26\u66ff\u6362\u6210\u5177\u4f53\u7684\u7c7b\u578b\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u53eb\u5355\u6001\u5316")),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"\u6cdb\u578b\u7684\u5e94\u7528")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u6cdb\u578b\u53ef\u4ee5\u5728\u51fd\u6570\u4e2d\u4f7f\u7528\uff0c\u8fd9\u53eb\u6cdb\u578b\u51fd\u6570")),a.a.createElement(i["a"],{code:"// \u4e0d\u6b62\u53ef\u4ee5\u4f20\u4eba vector\uff0c\u8fd8\u53ef\u4ee5\u4f20\u5165\u4efb\u4f55\u80fd\u5207\u7247\u7684\u7c7b\u578b\nfn largest<T>(list:&[T]) -> T {\n    let mut largest = list[0];\n    for &item in largest {\n        if item > largest {\n            largest = item;\n        }\n    }\n\n    return largest\n}",lang:"rs"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5728 struct \u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a\u6cdb\u578b\u7684\u7c7b\u578b\u53c2\u6570\uff0c\u4f46\u662f\u592a\u591a\u7684\u7c7b\u578b\u53c2\u6570\u610f\u5473\u7740\u4f60\u7684\u4ee3\u7801\u9700\u8981\u91cd\u7ec4\u4e3a\u591a\u4e2a\u66f4\u5c0f\u7684\u5355\u5143")),a.a.createElement(i["a"],{code:"struct Point<T> {\n    x: T,\n    y: T\n}\n\nfn main () {\n    let integer = Ponit {x:10,y:5};\n    let float = Point {x:1.5,y:2.5};\n}",lang:"rs"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5728\u679a\u4e3e\u4e2d\u4f7f\u7528\u6cdb\u578b\uff0c\u53ef\u4ee5\u8ba9\u679a\u4e3e\u7684\u53d8\u4f53\u6301\u6709\u6cdb\u578b\u6570\u636e\u7c7b\u578b\uff0c\u4f8b\u5982 Option<T>\u3001Result<T,E>")),a.a.createElement(i["a"],{code:"enum Option<T> {\n    Some(T),\n    None,\n}\n\nenum Result<T,E> {\n    Ok(T),\n    Err(E)\n}",lang:"rs"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u65b9\u6cd5\u4e2d\u5b9a\u4e49\u7684\u6cdb\u578b\uff0c\u5728\u4e3a struct \u6216 enum \u5b9e\u73b0\u65b9\u6cd5\u7684\u65f6\u5019\uff0c\u53ef\u5728\u5b9a\u4e49\u4e2d\u4f7f\u7528\u6cdb\u578b\u3002\u628a T \u653e\u5728 impl \u5173\u952e\u5b57\u540e\uff0c\u8868\u793a\u5728\u7c7b\u578b T \u4e0a\u5b9e\u73b0\u65b9\u6cd5\uff0c\u5982 impl<T> Point<T>\uff1b\u53e6\u4e00\u4e2a\u5c31\u662f\u53ea\u9488\u5bf9\u5177\u4f53\u7c7b\u578b\u5b9e\u73b0\u65b9\u6cd5\uff0c\u5176\u4f59\u7c7b\u578b\u6ca1\u5b9e\u73b0\u65b9\u6cd5\uff0c\u4f8b\u5982 impl Point<i32>")),a.a.createElement(i["a"],{code:"struct Point<T> {\n    x: T,\n    y: T\n}\n\n// \u6b64\u5904 impl \u540e\u8fb9\u7684 <T> \u610f\u5473\u7740\u5b83\u662f\u9488\u5bf9 Point<T> \u6765\u5b9e\u73b0\u7684 get_x\uff0c\u800c\u4e0d\u662f\u67d0\u4e2a\u5177\u4f53\u7684\u7c7b\u578b\nimpl<T> Point<T> {\n    fn get_x(&self) -> &T {\n        return &self.x\n    }\n}\n\n// \u4e5f\u53ef\u4ee5\u9488\u5bf9\u5177\u4f53\u7684\u7c7b\u578b\u6765\u5b9e\u73b0\nimpl Point<i32> {\n    fn get_x_i(&self) -> &i32 {\n        return &self.x\n    }\n}",lang:"rs"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u53e6\u5916\uff0cstruct \u91cc\u7684\u6cdb\u578b\u7c7b\u578b\u53c2\u6570\u53ef\u4ee5\u548c\u65b9\u6cd5\u4e2d\u7684\u6cdb\u578b\u7c7b\u578b\u53c2\u6570\u4e0d\u540c")),a.a.createElement(i["a"],{code:"struct Point<T,U> {\n    x: T,\n    y: U\n}\n\nimpl<T,U> Point<T,U> {\n    fn mixup<V,W>(self,other:Point<V,W>) -> Point<T,W> {\n        return Point {\n            x:self.x,\n            y:other.y\n        }\n    }\n}",lang:"rs"}),a.a.createElement("ol",{start:3},a.a.createElement("li",null,"\u6cdb\u578b\u4ee3\u7801\u7684\u6027\u80fd")),a.a.createElement("ul",null,a.a.createElement("li",null,"rust \u5b9e\u73b0\u6cdb\u578b\u7684\u65b9\u5f0f\u51b3\u5b9a\u4e86\u4f7f\u7528\u6cdb\u578b\u7684\u4ee3\u7801\u548c\u4f7f\u7528\u5177\u4f53\u7c7b\u578b\u7684\u4ee3\u7801\u8fd0\u884c\u901f\u5ea6\u662f\u4e00\u6837\u7684\u3002\u8fd9\u662f\u56e0\u4e3a rust \u5728\u7f16\u8bd1\u7684\u65f6\u5019\u4f1a\u6267\u884c\u5355\u6001\u5316(monomorphization)\u8fd9\u6837\u4e00\u4e2a\u8fc7\u7a0b(\u5728\u7f16\u8bd1\u65f6\u5c06\u6cdb\u578b\u66ff\u6362\u4e3a\u5177\u4f53\u7c7b\u578b\u7684\u8fc7\u7a0b)")),a.a.createElement(i["a"],{code:"fn main () {\n    let integer = Some(5);\n    let float = Some(5.0);\n}",lang:"rs"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5728\u4e0a\u8ff0\u7684\u4ee3\u7801\u4e2d\uff0c\u7f16\u8bd1\u65f6 rust \u4f1a\u5c06 Option<T> \u8fd9\u4e2a\u6cdb\u578b\u5b9a\u4e49\u5c55\u5f00\u4e3a Option_i32 \u548c Option_f64\uff0c\u610f\u601d\u5c31\u662f\u5c06 Option<T> \u8fd9\u4e2a\u6cdb\u578b\u7684\u5b9a\u4e49\u66ff\u6362\u4e3a\u5177\u4f53\u7684\u5b9a\u4e49\uff0c\u800c\u5355\u6001\u5316\u540e\u7684 main \u51fd\u6570\u4e5f\u5c31\u53d8\u6210\u4e0b\u9762\u7684\u6837\u5b50")),a.a.createElement(i["a"],{code:"enum Option_i32 {\n    Some(i32),\n    None\n}\n\nenum Option_f64 {\n    Some(f64),\n    None\n}\n\nfn main() {\n    let integer = Option_i32::Some(5);\n    let float = Option_f64::Some(5.0);\n}",lang:"rs"})))})));n["default"]=e=>{var n=a.a.useContext(r["context"]),t=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(o,{demos:t})}}}]);