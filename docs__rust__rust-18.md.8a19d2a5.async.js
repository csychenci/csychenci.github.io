(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[179],{X8tz:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),r=t.n(a),l=t("dEAq"),i=(t("0H/f"),t("N0lm"),t("DgDr"),t("cGlH"),t("ekZX"),t("Bjia")),m=(t("tVxl"),t("1pSt"),r.a.memo((n=>{n.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"trait"},r.a.createElement(l["AnchorLink"],{to:"#trait","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Trait"),r.a.createElement("hr",null),r.a.createElement("ol",null,r.a.createElement("li",null,"\u5982\u4f55\u628a Trait \u4f5c\u4e3a\u53c2\u6570")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u4f7f\u7528 impl Trait \u8bed\u6cd5\uff0c\u5b83\u9002\u7528\u4e8e\u7b80\u5355\u60c5\u51b5")),r.a.createElement(i["a"],{code:'pub trait Summary {\n    fn summarize(&self) -> String;\n}\n\npub struct NewsArticle {\n    pub headline: String,\n    pub location: String,\n    pub author: String,\n    pub content: String,\n}\n\nimpl Summary for NewsArticle {\n    fn summarize(&self) -> String {\n        return format!("{}, by {} ({})",self.headline,self.author,self.location);\n    }\n}\n\npub struct Tweet {\n    pub username: String,\n    pub content: String,\n    pub reply: bool,\n    pub retweet: bool,\n}\n\nimpl Summary for Tweet {\n    fn summarize(&self) -> String {\n        return format!("{}: {}",self.username,self.content);\n    }\n}\n\n/**\n  * \u6b64\u65f6\u65e2\u53ef\u4ee5\u4f20\u8fdb\u53bb NewsArticle \u4e5f\u53ef\u4ee5\u4f20\u8fdb\u53bb Tweet\n  * \u5982\u679c\u6709\u5176\u5b83\u7684\u7c7b\u578b\u4e5f\u5b9e\u73b0\u4e86 Summary\uff0c\u90a3\u4e48\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u53c2\u6570\u4f20\u8fdb\u53bb\n*/\npub fn notify(item:impl Summary) {\n    println!("Breaking news! {}",item.summarize());\n}',lang:"rs"}),r.a.createElement("ul",null,r.a.createElement("li",null,"Trait bound \u8bed\u6cd5\uff0c\u9002\u5408\u4e8e\u6bd4\u8f83\u590d\u6742\u7684\u60c5\u51b5\u3002\u4e0b\u9762\u7684\u4f8b\u4e00\u770b\u4e0d\u51fa\u6765 trait bound \u7684\u4f18\u52bf\uff0c\u6362\u4e00\u79cd\u5199\u6cd5\u770b\u770b")),r.a.createElement(i["a"],{code:'pub trait Summary {\n    fn summarize(&self) -> String;\n}\n\npub fn notify<T: Summary>(item:T) {\n    println!("Breaking news! {}",item.summarize());\n}',lang:"rs"}),r.a.createElement(i["a"],{code:'pub trait Summary {\n    fn summarize(&self) -> String;\n}\n\npub fn notify<T: Summary>(item1:T,item2:T) {\n    println!("Breaking news! {}",item1.summarize());\n}\n\npub fn notify1(item1:impl Summary,item2:impl Summary) {\n    println!("Breaking news! {}",item1.summarize());\n}',lang:"rs"}),r.a.createElement("ul",null,r.a.createElement("li",null,"impl Trait \u8bed\u6cd5\u662f Trait bound \u7684\u8bed\u6cd5\u7cd6\u3002\u8fd8\u53ef\u4ee5\u4f7f\u7528 + \u6307\u5b9a\u591a\u4e2a trait")),r.a.createElement(i["a"],{code:'/**\n  * \u8981\u6c42\u5b9e\u73b0 Summary \u548c\u6807\u51c6\u5e93\u7684 Display \u8fd9\u4e24\u4e2a trait\n*/\nuse std::fmt::Display;\n\npub trait Summary {\n    fn summarize(&self) -> String;\n}\n\npub fn notify<T: Summary + Display>(item:T) {\n    println!("Breaking news! {}",item.summarize());\n}\n\npub fn notify1(item:impl Summary + Display) {\n    println!("Breaking news! {}",item.summarize());\n}',lang:"rs"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u4f46\u662f\u8fd9\u79cd\u5199\u6cd5\u4e5f\u662f\u6709\u7f3a\u70b9\u7684\uff0c\u56e0\u4e3a\u6bcf\u4e2a\u6cdb\u578b\u90fd\u6709\u81ea\u5df1\u7684 trait \u7ea6\u675f\uff0c\u5982\u679c\u662f\u591a\u4e2a\u6cdb\u578b\u53c2\u6570\u7684\u8bdd\uff0c\u8fd9\u4e2a\u51fd\u6570\u540d\u548c\u51fd\u6570\u53c2\u6570\u5217\u8868\u4e4b\u95f4\u5c31\u53ef\u80fd\u4f1a\u5199\u5927\u91cf\u7684 trait \u7ea6\u675f\u4fe1\u606f\uff0c\u8fd9\u4e2a\u65f6\u5019\u51fd\u6570\u7684\u7b7e\u540d\u5c31\u4e0d\u592a\u76f4\u89c2\u3001\u4e0d\u592a\u597d\u7406\u89e3\u4e86")),r.a.createElement(i["a"],{code:'use std::fmt::{Display,Debug};\n\npub trait Summary {\n    fn summarize(&self) -> String;\n}\n\npub fn notify<T: Summary + Display,U:Clone + Debug>(a:T,b:U) -> String {\n    println!("Breaking news! {}",a.summarize());\n}\n\npub fn notify<T, U>(a: T, b: U) -> String\nwhere\n    T: Summary + Display,\n    U: Clone + Debug,\n{\n    let v = a.summarize();\n    println!("Breaking news! {}", v);\n    return v;\n\n}',lang:"rs"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u8fd9\u6837\u5199\u5c31\u76f4\u89c2\u5f88\u591a\u4e86\uff0c\u901a\u8fc7\u5728 \u65b9\u6cd5\u7b7e\u540d\u540e\u6307\u5b9a where \u5b50\u53e5")),r.a.createElement("ol",{start:2},r.a.createElement("li",null,"\u5b9e\u73b0 Trait \u4f5c\u4e3a\u8fd4\u56de\u7c7b\u578b")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u540c\u6837\u8fd4\u56de\u7c7b\u578b\u4e5f\u53ef\u4ee5\u4f7f\u7528 impl Trait\u3002\u4f46\u8fd9\u79cd\u5199\u6cd5\u6709\u4e00\u70b9\u6ce8\u610f\uff0c\u5982\u679c\u8ba9\u8fd4\u56de\u7c7b\u578b\u5b9e\u73b0\u4e86\u67d0\u4e2a trait\uff0c\u90a3\u4e48\u5fc5\u987b\u8ba9\u8fd9\u4e2a\u51fd\u6570\u6216\u8005\u65b9\u6cd5\u5b83\u53ef\u80fd\u8fd4\u56de\u7684 ",r.a.createElement("strong",null,"\u5177\u4f53\u7684\u7c7b\u578b"),"\u3002\u4e5f\u5c31\u662f\u8bf4\uff0cimpl Trait \u53ea\u80fd\u8fd4\u56de\u786e\u5b9a\u7684\u540c\u4e00\u79cd\u7c7b\u578b\uff0c\u8fd4\u56de\u53ef\u80fd\u4e0d\u540c\u7c7b\u578b\u7684\u4ee3\u7801\u4f1a\u62a5\u9519")),r.a.createElement(i["a"],{code:'pub trait Summary {\n    fn summarize(&self) -> String;\n}\n\npub struct Tweet {\n    pub username: String,\n    pub content: String,\n    pub reply: bool,\n    pub retweet: bool,\n}\n\nimpl Summary for Tweet {\n    fn summarize(&self) -> String {\n        return format!("{}: {}",self.username,self.content);\n    }\n}\n\npub fn notify(s:&str) -> impl Summary {\n    return Tweet {\n        username:"xiaoming".to_string(),\n        content:"dioajkdkajsnfjdan sjnndajsdnjasn".to_string(),\n        reply:false,\n        retweet:false\n    };\n}',lang:"rs"}),r.a.createElement(i["a"],{code:'/**\n  * \u4ee5\u4e0b\u7684\u5199\u6cd5\u5c31\u4f1a\u62a5\u9519\n*/\npub fn notify(flag:bool) -> impl Summary {\n    if flag {\n        return Tweet {\n            username:"xiaoming".to_string(),\n            content:"dioajkdkajsnfjdan sjnndajsdnjasn".to_string(),\n            reply:false,\n            retweet:false\n        };\n    } else {\n        return NewsArticle {\n            headline: String::from("xxxxx"),\n            location: String::from("xxxxx"),\n            author: String::from("xxxxx"),\n            content: String::from("xxxxx"),\n        }\n    }\n}',lang:"rs"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u4f7f\u7528 Trait bound \u4fee\u590d\u4e4b\u524d\u62a5\u9519\u7684 largest \u51fd\u6570\u3002\u8fd9\u4e2a\u53ea\u8981\u5c06 PartialOrd \u8fd9\u4e2a trait \u52a0\u5165\u5230\u6cdb\u578b\u7684\u7ea6\u675f\u91cc\u9762\u5c31\u53ef\u4ee5\u4e86")),r.a.createElement(i["a"],{code:"/**\n  * can't compare `T` with `T`\n  * > \u5bf9\u5e94\u7684\u662f \u6807\u51c6\u5e93\u4e0a\u7684 std::cmp::PartialOrd ,\u8fd9\u4e2a trait \u4e0a\u9762\u6709\u4e00\u4e2a\u9ed8\u8ba4\u7684\u65b9\u6cd5\n  * \u6240\u4ee5\uff0c\u53ea\u6709 T \u8fd9\u4e2a\u7c7b\u578b\u5b9e\u73b0\u4e86\u8fd9\u4e2a trait\uff0c\u90a3\u4e48\u5b83\u624d\u53ef\u4ee5\u4f7f\u7528 \u5927\u4e8e\u53f7\u6765\u8fdb\u884c\u6bd4\u8f83\n*/\nfn largest<T>(list:&[T]) -> T {\n    let mut largest = list[0];\n\n    for &item in list.iter() {\n        if item > largest {\n            largest = item;\n        }\n    }\n\n    return largest\n}",lang:"rs"}),r.a.createElement(i["a"],{code:"/**\n  * can't compare `T` with `T`\n  * > \u5bf9\u5e94\u7684\u662f \u6807\u51c6\u5e93\u4e0a\u7684 std::cmp::PartialOrd ,\u8fd9\u4e2a trait \u4e0a\u9762\u6709\u4e00\u4e2a\u9ed8\u8ba4\u7684\u65b9\u6cd5\n  * \u6240\u4ee5\uff0c\u53ea\u6709 T \u8fd9\u4e2a\u7c7b\u578b\u5b9e\u73b0\u4e86\u8fd9\u4e2a trait\uff0c\u90a3\u4e48\u5b83\u624d\u53ef\u4ee5\u4f7f\u7528 \u5927\u4e8e\u53f7\u6765\u8fdb\u884c\u6bd4\u8f83\n*/\nfn largest<T:PartialOrd + Clone>(list:&[T]) -> T {\n    let mut largest = list[0].clone();\n\n    for item in list.iter() {\n        if *item > largest {\n            largest = item.clone();\n        }\n    }\n\n    return largest\n}",lang:"rs"}),r.a.createElement(i["a"],{code:"fn largest<T:PartialOrd + Clone>(list:&[T]) -> &T {\n    let mut largest = list[0];\n\n    for item in list.iter() {\n        if *item > &largest {\n            largest = item;\n        }\n    }\n\n    return largest\n}",lang:"rs"}),r.a.createElement("ol",{start:3},r.a.createElement("li",null,"\u4f7f\u7528 trait bound \u6709\u6761\u4ef6\u7684\u5b9e\u73b0\u65b9\u6cd5")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5728\u4f7f\u7528\u6cdb\u578b\u7c7b\u578b\u53c2\u6570\u7684 impl \u5757\u4e0a\u4f7f\u7528 Trait bound\uff0c\u6211\u4eec\u53ef\u4ee5\u6709\u6761\u4ef6\u7684\u4e3a\u5b9e\u73b0\u4e86\u7279\u5b9a trait \u7684\u7c7b\u578b\u6765\u5b9e\u73b0\u65b9\u6cd5")),r.a.createElement(i["a"],{code:'use std::fmt::Display;\n\nstruct Pair<T> {\n    x: T,\n    y: T\n}\n\nimpl<T> Pair<T> {\n    fn new(x:T,y:T) -> Self {\n        return Self {x,y}\n    }\n}\n\nimpl <T: Display + PartialOrd> Pair<T> {\n    fn cmp_display(&self) {\n        if self.x > self.y {\n            println!("{} is more than {}",self.x,self,y);\n        } else {\n            println!("{} is more than {}",self.y,self,x);\n        }\n    }\n}',lang:"rs"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u4e0d\u7ba1 T \u662f\u4ec0\u4e48\u7c7b\u578b\uff0cPair<T> \u90fd\u4f1a\u6709\u4e00\u4e2a new \u65b9\u6cd5\uff1b\u800c T \u53ea\u6709\u5b9e\u73b0\u4e86 Display\u3001PartialOrd \u8fd9\u4e24\u4e2a trait \u7684\u65f6\u5019\uff0c\u5b83\u624d\u62e5\u6709 cmp_display \u8fd9\u4e2a\u65b9\u6cd5"),r.a.createElement("li",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u4e3a\u5b9e\u73b0\u4e86\u5176\u4ed6 trait \u7684\u4efb\u610f\u7c7b\u578b\u6709\u6761\u4ef6\u7684\u5b9e\u73b0\u67d0\u4e2a Trait\u3002\u800c\u4e3a\u6ee1\u8db3 Trait bound \u7684\u6240\u6709\u7c7b\u578b\u4e0a\u5b9e\u73b0 Trait \u53eb\u505a\u8986\u76d6\u5b9e\u73b0(blanket implementations)")),r.a.createElement(i["a"],{code:"/** \n  * \u9488\u5bf9\u6240\u6709\u5b9e\u73b0\u4e86 Display trait \u7684\u7c7b\u578b\u90fd\u7ed9\u5b83\u4eec\u5b9e\u73b0\u4e86 ToString \u8fd9\u4e2a trait\n  * \u800c\u5728 ToString \u8fd9\u4e2a\u65b9\u6cd5\u4e0a\uff0c\u5c31\u5b58\u5728\u4e00\u4e2a to_string \u65b9\u6cd5\uff0c\u8fd9\u6837\u5b9e\u73b0\u4e86 Display trait \u7684\u7c7b\u578b\u5c31\u53ef\u4ee5\u8c03\u7528 to_string \u65b9\u6cd5\n*/\nimpl <T: fmt::Display> ToString for T {\n\n}",lang:"rs"})))})));e["default"]=n=>{var e=r.a.useContext(l["context"]),t=e.demos;return r.a.useEffect((()=>{var e;null!==n&&void 0!==n&&null!==(e=n.location)&&void 0!==e&&e.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),r.a.createElement(m,{demos:t})}}}]);