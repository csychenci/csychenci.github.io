(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[178],{xI3Y:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),l=t("dEAq"),i=(t("0H/f"),t("N0lm"),t("DgDr"),t("cGlH"),t("ekZX"),t("Bjia")),m=(t("tVxl"),t("1pSt"),r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"trait"},r.a.createElement(l["AnchorLink"],{to:"#trait","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Trait"),r.a.createElement("hr",null),r.a.createElement("ol",null,r.a.createElement("li",null,"\u4ec0\u4e48\u662f trait")),r.a.createElement("ul",null,r.a.createElement("li",null,"Trait \u544a\u8bc9\u7f16\u8bd1\u5668\uff0c\u67d0\u79cd\u7c7b\u578b\u5177\u6709\u54ea\u4e9b\u5e76\u4e14\u53ef\u4ee5\u4e0e\u5176\u5b83\u7c7b\u578b\u5171\u4eab\u7684\u529f\u80fd\u3002trait \u53ef\u4ee5\u4ee5\u62bd\u8c61\u7684\u65b9\u5f0f\u6765\u5b9a\u4e49\u5171\u4eab\u884c\u4e3a\uff0c\u7c7b\u4f3c\u5176\u4ed6\u8bed\u8a00\u4e2d\u7684 interface\uff0c\u4f46\u6709\u4e9b\u533a\u522b"),r.a.createElement("li",null,"trait bounds(\u7ea6\u675f): \u5b83\u53ef\u4ee5\u5c06\u6cdb\u578b\u7c7b\u578b\u53c2\u6570\u6307\u5b9a\u4e3a\u5b9e\u73b0\u4e86\u7279\u5b9a\u884c\u4e3a\u7684\u7c7b\u578b\uff0c\u5c31\u662f\u8981\u6c42\u6cdb\u578b\u7684\u7c7b\u578b\u53c2\u6570\u5b9e\u73b0\u4e86\u67d0\u4e9b trait")),r.a.createElement("ol",{start:2},r.a.createElement("li",null,"\u5b9a\u4e49\u4e00\u4e2a trait")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\u5b83\u7684\u884c\u4e3a\u7531\u8be5\u7c7b\u578b\u672c\u8eab\u53ef\u8c03\u7528\u7684\u65b9\u6cd5\u6765\u7ec4\u6210\u7684\uff0c\u4f46\u662f\u6709\u65f6\u5019\u4e0d\u540c\u7684\u7c7b\u578b\u4e0a\u8fb9\u4ed6\u4eec\u90fd\u5177\u6709\u76f8\u540c\u7684\u65b9\u6cd5\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u79f0\u8fd9\u4e9b\u7c7b\u578b\u5171\u4eab\u4e86\u76f8\u540c\u7684\u884c\u4e3a"),r.a.createElement("li",null,"trait \u63d0\u4f9b\u4e86\u4e00\u79cd\u65b9\u5f0f\uff0c\u5b83\u53ef\u4ee5\u628a\u4e00\u4e9b\u65b9\u6cd5\u653e\u5728\u4e00\u8d77\uff0c\u6765\u5b9a\u4e49\u5b9e\u73b0\u67d0\u79cd\u76ee\u7684\u6240\u5fc5\u9700\u7684\u4e00\u7ec4\u884c\u4e3a\u3002\u5728 trait \u7684\u5b9a\u4e49\u5185\uff0c\u53ea\u6709\u65b9\u6cd5\u7b7e\u540d\uff0c\u6ca1\u6709\u5177\u4f53\u5b9e\u73b0\u3002trait \u5185\u53ef\u4ee5\u5b9a\u4e49\u591a\u4e2a\u65b9\u6cd5\uff0c\u4ee5 ; \u7ed3\u5c3e")),r.a.createElement(i["a"],{code:"pub trait Summary {\n    sn summarize(&self) -> String;\n}",lang:"rs"}),r.a.createElement("ol",{start:3},r.a.createElement("li",null,"\u5728\u7c7b\u578b\u4e0a\u5b9e\u73b0 trait")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u4e0e\u4e3a\u7c7b\u578b\u5b9e\u73b0\u65b9\u6cd5\u7c7b\u4f3c\uff0c\u4f46\u4e5f\u6709\u4e0d\u540c\u4e4b\u5904\u3002\u9700\u8981\u5728 impl \u7684\u5757\u5185\uff0c\u5bf9 trait \u7684\u65b9\u6cd5\u7b7e\u540d\u8fdb\u884c\u5177\u4f53\u7684\u5b9e\u73b0(\u6709\u70b9\u7c7b\u4f3c\u62bd\u8c61\u7c7b + \u7ee7\u627f)")),r.a.createElement(i["a"],{code:'// Cargo.toml\n[package]\nname = "rust_demo"',lang:"rs"}),r.a.createElement(i["a"],{code:'/** \n  * Summary \u5b9a\u4e49\u4e86\u65b9\u6cd5\u7b7e\u540d\uff0c\u5982\u679c\u8981\u5728\u7c7b\u578b\u4e0a\u5b9e\u73b0 trait\uff0c\u9700\u8981\u5b9e\u73b0\u8be5\u65b9\u6cd5\n  * src/lib.rs\n*/\npub trait Summary {\n    fn summarize(&self) -> String;\n}\n\npub struct NewsArticle {\n    pub headline: String,\n    pub location: String,\n    pub author: String,\n    pub content: String,\n}\n\nimpl Summary for NewsArticle {\n    fn summarize(&self) -> String {\n        return format!("{}, by {} ({})",self.headline,self.author,self.location);\n    }\n}\n\npub struct Tweet {\n    pub username: String,\n    pub content: String,\n    pub reply: bool,\n    pub retweet: bool,\n}\n\nimpl Summary for Tweet {\n    fn summarize(&self) -> String {\n        return format!("{}: {}",self.username,self.content);\n    }\n}',lang:"rs"}),r.a.createElement(i["a"],{code:'// src/main.rs\nuse rust_demo::Tweet;\nuse rust_demo::NewsArticle;\n\nfn main () {\n    let tweet = Tweet {\n        username:"xiaoming".to_string(),\n        content:"dioajkdkajsnfjdan sjnndajsdnjasn".to_string(),\n        reply:false,\n        retweet:false\n    };\n\n    println!("new tweet: {}",tweet.summarize());\n}',lang:"rs"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u8fd9\u91cc\u53ef\u4ee5\u53d1\u73b0\uff0c\u8fd9\u4e2a trait \u4e5f\u88ab\u6211\u4eec\u5f15\u5165\u8fdb\u6765\u4e86\uff0c\u8fd9\u662f\u56e0\u4e3a\u6765\u81ea trait \u91cc\u9762\u7684\u4e1c\u897f\uff0c\u53ea\u6709\u5f53\u8fd9\u4e2a trait \u5728\u4f5c\u7528\u57df\u7684\u65f6\u5019\u624d\u80fd\u88ab\u4f7f\u7528(\u8fd8\u9700\u8981\u662f\u516c\u5171\u7684)")),r.a.createElement("ol",{start:4},r.a.createElement("li",null,"\u5b9e\u73b0 trait \u7684\u7ea6\u675f")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5728\u67d0\u4e2a\u7c7b\u578b\u4e0a\u5b9e\u73b0\u67d0\u4e2a trait \u7684\u524d\u63d0\u6761\u4ef6\u662f\uff0c\u8fd9\u4e2a\u7c7b\u578b\u6216\u8fd9\u4e2a trait \u662f\u5728\u672c\u5730 crate \u91cc\u5b9a\u4e49\u7684"),r.a.createElement("li",null,"\u65e0\u6cd5\u4e3a\u5916\u90e8\u7c7b\u578b\u6765\u5b9e\u73b0\u5185\u90e8\u7684 trait\uff0c\u4f8b\u5982\u5728\u672c\u5730\u5e93\u91cc\u9762\u4e3a\u6807\u51c6\u5e93\u91cc\u9762 vector \u8fd9\u4e2a\u7c7b\u578b\u5b9e\u73b0\u6807\u51c6\u5e93\u91cc\u9762\u7684 display trait\uff0c\u8fd9\u5c31\u662f\u4e0d\u53ef\u4ee5\u7684"),r.a.createElement("li",null,"\u8fd9\u4e2a\u9650\u5236\u662f\u7a0b\u5e8f\u5c5e\u6027\u7684\u4e00\u90e8\u5206(\u4e5f\u5c31\u662f\u4e00\u81f4\u6027)\uff0c\u66f4\u5177\u4f53\u5730\u8bf4\u662f\u5b64\u513f\u89c4\u5219\uff1a\u4e4b\u6240\u4ee5\u8fd9\u6837\u547d\u540d\u662f\u56e0\u4e3a\u5b83\u7684\u7236\u7c7b\u578b\u5e76\u6ca1\u6709\u5b9a\u4e49\u5728\u5f53\u524d\u7684\u5e93\u91cc\u8fb9\uff1b\u6b64\u89c4\u5219\u53ef\u4ee5\u786e\u4fdd\u5176\u4ed6\u4eba\u7684\u4ee3\u7801\u4e0d\u80fd\u7834\u574f\u4f60\u5199\u7684\u4ee3\u7801\uff0c\u53cd\u4e4b\u4ea6\u7136"),r.a.createElement("li",null,"\u5982\u679c\u6ca1\u6709\u8fd9\u4e2a\u89c4\u5219\uff0c\u4e24\u4e2a crate \u53ef\u4ee5\u4e3a\u540c\u4e00\u7c7b\u578b\u5b9e\u73b0\u540c\u4e00\u4e2a trait\uff0crust \u5c31\u4e0d\u77e5\u9053\u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a\u5b9e\u73b0\u4e86")),r.a.createElement("ol",{start:5},r.a.createElement("li",null,"\u9ed8\u8ba4\u5b9e\u73b0")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u6709\u65f6\u4e3a trait \u4e2d\u7684\u67d0\u4e9b\u6216\u8005\u6240\u6709\u65b9\u6cd5\u63d0\u4f9b\u9ed8\u8ba4\u884c\u4e3a\u662f\u975e\u5e38\u6709\u7528\u7684\uff0c\u5b83\u53ef\u4ee5\u4f7f\u6211\u4eec\u65e0\u9700\u4e3a\u6bcf\u4e00\u4e2a\u7c7b\u578b\u7684\u5b9e\u73b0\u90fd\u63d0\u4f9b\u81ea\u5b9a\u4e49\u7684\u884c\u4e3a\uff0c\u6211\u4eec\u53ef\u4ee5\u9488\u5bf9\u67d0\u4e9b\u7279\u5b9a\u7684\u7c7b\u578b\u5b9e\u73b0 trait \u91cc\u9762\u7684\u65b9\u6cd5"),r.a.createElement("li",null,"\u5f53\u6211\u4eec\u4e3a\u67d0\u4e2a\u7279\u5b9a\u7c7b\u578b\u5b9e\u73b0 trait \u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u4fdd\u7559\u6216\u8005\u662f\u91cd\u8f7d\u6bcf\u4e2a\u65b9\u6cd5\u7684\u9ed8\u8ba4\u5b9e\u73b0")),r.a.createElement(i["a"],{code:'/** \n  * summarize \u6ca1\u6709\u65b9\u6cd5\u5b9e\u73b0\uff0c\u6211\u4eec\u53ef\u4ee5\u7ed9\u5b83\u505a\u4e00\u4e2a\u9ed8\u8ba4\u7684\u5b9e\u73b0\n  * src/lib.rs\n*/\npub trait Summary {\n    // fn summarize(&self) -> String;\n    fn summarize(&self) -> String {\n        String::from("(Read more ... )")\n    }\n}\n\npub struct NewsArticle {\n    pub headline: String,\n    pub location: String,\n    pub author: String,\n    pub content: String,\n}\n\n/**\n * \u6709\u4e86\u9ed8\u8ba4\u7684\u5b9e\u73b0\uff0c\u5982\u679c\u6ca1\u9700\u8981\u7684\u8bdd\uff0c\u5c31\u53ef\u4ee5\u4e0d\u7528\u8fdb\u884c\u81ea\u5df1\u7684\u5b9e\u73b0\uff0c\u4f46\u4e0d\u59a8\u788d\u7c7b\u578b\u7684\u8c03\u7528\n*/\nimpl Summary for NewsArticle {\n    // fn summarize(&self) -> String {\n    //     return format!("{}, by {} ({})",self.headline,self.author,self.location);\n    // }\n}\n\npub struct Tweet {\n    pub username: String,\n    pub content: String,\n    pub reply: bool,\n    pub retweet: bool,\n}\n\n/**\n * \u8fd9\u91cc\u9488\u5bf9 summarize \u6709\u4e86\u4e00\u4e2a\u5177\u4f53\u7684\u5b9e\u73b0\uff0c\u6211\u4eec\u628a\u8fd9\u4e2a\u5b9e\u73b0\u53eb\u505a\u9ed8\u8ba4\u5b9e\u73b0\u7684\u4e00\u4e2a\u91cd\u5199\u7684\u5b9e\u73b0\n*/\nimpl Summary for Tweet {\n    fn summarize(&self) -> String {\n        return format!("{}: {}",self.username,self.content);\n    }\n}',lang:"rs"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u9ed8\u8ba4\u5b9e\u73b0\u7684\u65b9\u6cd5\u4e5f\u53ef\u4ee5\u8c03\u7528 trait \u4e2d\u5176\u5b83\u7684\u65b9\u6cd5\uff0c\u5373\u4f7f\u8fd9\u4e9b\u65b9\u6cd5\u6ca1\u6709\u9ed8\u8ba4\u5b9e\u73b0")),r.a.createElement(i["a"],{code:'/** \n  * summarize_author \u53ea\u6709\u65b9\u6cd5\u7b7e\u540d\u6ca1\u6709\u9ed8\u8ba4\u5b9e\u73b0\uff0c\u4f46 trait \u4e2d\u7684 summarize \u65b9\u6cd5\u4ecd\u7136\u53ef\u4ee5\u8c03\u7528\u5b83\n  * src/lib.rs\n*/\npub trait Summary {\n    fn summarize_author(&self) -> String;\n\n    fn summarize(&self) -> String {\n        String::from("(Read more from {} ... )",self.summarize_author())\n    }\n}\n\npub struct NewsArticle {\n    pub headline: String,\n    pub location: String,\n    pub author: String,\n    pub content: String,\n}\n\n/**\n * \u5982\u679c\u60f3\u5728\u5177\u4f53\u7684\u7c7b\u578b\u4e0a\u4f7f\u7528 summarize \u8fd9\u4e2a\u9ed8\u8ba4\u5b9e\u73b0\u7684\u8bdd\uff0c\u6211\u4eec\u5c31\u9700\u8981\u5b9e\u73b0\u8fd9\u4e2a summarize_author \u65b9\u6cd5\uff0c\u8fd9\u6837\u7c7b\u578b\u5c31\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528 summarize \u8fd9\u4e2a\u65b9\u6cd5\u4e86\n*/\nimpl Summary for NewsArticle {\n    fn summarize_author(&self) -> String {\n        return format!("@{}",self.author);\n    }\n}',lang:"rs"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u65e0\u6cd5\u4ece\u65b9\u6cd5\u7684\u91cd\u5199\u4e2d\u8c03\u7528 trait \u9ed8\u8ba4\u7684\u65b9\u6cd5\u5b9e\u73b0"))))})));n["default"]=e=>{var n=r.a.useContext(l["context"]),t=n.demos;return r.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(m,{demos:t})}}}]);