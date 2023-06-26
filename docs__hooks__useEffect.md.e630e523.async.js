(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[61],{lap5:function(e,t,l){"use strict";l.r(t);var n=l("q1tI"),a=l.n(n),c=l("dEAq"),r=(l("0H/f"),l("N0lm"),l("DgDr"),l("cGlH"),l("ekZX")),u=l("Bjia"),m=l("tVxl"),o=(l("1pSt"),a.a.memo((e=>{var t=e.demos,l=t["useEffect-demo"].component,n=t["useEffect-demo-1"].component,o=t["useEffect-demo-2"].component,s=t["useEffect-demo-3"].component,E=t["useEffect-demo-4"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"useeffect-\u7684\u7528\u6cd5"},a.a.createElement(c["AnchorLink"],{to:"#useeffect-\u7684\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"useEffect \u7684\u7528\u6cd5"),a.a.createElement("hr",null),a.a.createElement("ol",null,a.a.createElement("li",null,"useEffect \u7684\u4ecb\u7ecd")),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("p",null,"\u7528\u4e8e\u6267\u884c\u4e00\u6bb5\u526f\u4f5c\u7528\uff0c\u4e5f\u5c31\u662f\u4e00\u6bb5\u548c ",a.a.createElement("strong",null,"\u5f53\u524d\u6267\u884c\u7ed3\u679c\u65e0\u5173\u7684\u4ee3\u7801"),"\u3002\u4f8b\u5982\u4fee\u6539\u51fd\u6570\u5916\u90e8\u7684\u67d0\u4e2a\u53d8\u91cf\uff0c\u53d1\u8d77\u4e00\u4e2a\u8bf7\u6c42\u7b49\uff0c\u5728\u51fd\u6570\u7ec4\u4ef6\u7684\u5f53\u6b21\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c",a.a.createElement("em",null,"useEffect")," \u4e2d\u4ee3\u7801\u7684\u6267\u884c\u662f\u4e0d\u5f71\u54cd\u6e32\u67d3\u51fa\u6765\u7684 ",a.a.createElement("em",null,"UI")," \u7684")),a.a.createElement("li",null,a.a.createElement("p",null,"\u5728\u5b9e\u73b0\u4e2d\uff0c\u5b83\u901a\u8fc7\u5b8f\u4efb\u52a1\u6765\u5b9e\u73b0\uff0c\u76ee\u7684\u662f\u4fdd\u8bc1\u526f\u4f5c\u7528\u903b\u8f91\u80fd\u5728 dom \u6e32\u67d3\u5b8c\u6210\u4e4b\u540e\u6267\u884c\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u662f\u5728\u4e0b\u4e00\u8f6e\u4e8b\u4ef6\u5faa\u73af\u624d\u4f1a\u6267\u884c\u3002\u5728\u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0c\u5b83\u4f7f\u7528 ",a.a.createElement("code",null,"requestidleCallback + setTimeout(\u517c\u5bb9\u4e0d\u652f\u6301\u7684\u6d4f\u89c8\u5668)")," \u6765\u5b9e\u73b0\uff0c\u4f46\u7531\u4e8e ",a.a.createElement("code",null,"requestidleCallback")," \u6267\u884c\u65f6\u95f4\u662f\u4e0d\u786e\u5b9a\u7684(\u9700\u8981\u6ee1\u8db3\u5237\u65b0\u7387\uff0c\u800c\u4e00\u8f6e\u4e8b\u4ef6\u5faa\u73af\u53ef\u80fd\u5f88\u77ed)\uff1b\u56e0\u6b64\u76ee\u524d\u7684\u5b9e\u73b0\u662f\u7528 ",a.a.createElement("code",null,"MessageChanel + setTimeout(\u517c\u5bb9\u4e0d\u652f\u6301\u7684\u6d4f\u89c8\u5668)")," \u6765\u505a\u7684")),a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("em",null,"useLayoutEffect")," \u5728\u6e32\u67d3\u5b8c\u6210\u3001\u4e0b\u4e00\u8f6e\u4e8b\u4ef6\u5faa\u73af\u5f00\u59cb\u4e4b\u524d\uff0c\u4e5f\u5c31\u662f\u5728 useEffect \u7684\u56de\u8c03\u6267\u884c\u4e4b\u524d"))),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"useEffect(callback, dependencies)")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u8981\u6267\u884c\u7684\u51fd\u6570\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7528\u4e8e\u4f5c\u4e3a ",a.a.createElement("code",null,"useEffect")," \u7684\u4f9d\u8d56\u53c2\u6570"),a.a.createElement("li",null,"\u82e5 dependencies \u7f3a\u7701\uff0c\u4e5f\u5c31\u662f\u4e0d\u4f20\u5165\u4f9d\u8d56\u9879\uff0c\u5219 callback \u4f1a\u5728\u6bcf\u6b21\u51fd\u6570\u7ec4\u4ef6\u6267\u884c\u5b8c\u540e\u90fd\u6267\u884c"),a.a.createElement("li",null,"\u82e5 ",a.a.createElement("code",null,"useEffect")," \u8981\u4f20\u5165\u4f9d\u8d56\u9879\uff0c\u5219\u8be5 ",a.a.createElement("code",null,"\u4f9d\u8d56\u9879")," \u987b\u4e3a\u6570\u7ec4\uff0c\u6570\u7ec4\u7684\u5185\u5bb9\u662f\u51fd\u6570\u7ec4\u4ef6\u4e2d\u901a\u8fc7 ",a.a.createElement("code",null,"useState ")," \u81ea\u5b9a\u4e49\u7684\u53d8\u91cf\u6216\u8005\u662f\u7236\u7ec4\u4ef6\u4f20\u503c\u8fc7\u6765\u7684 ",a.a.createElement("code",null,"props")," \u4e2d\u7684\u53d8\u91cf\uff0c\u544a\u8bc9 React \u53ea\u6709\u6570\u7ec4\u5185\u7684\u53d8\u91cf\u53d1\u751f\u53d8\u5316\u65f6\u624d\u4f1a\u89e6\u53d1 callback \u7684\u6267\u884c")),a.a.createElement(m["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u4f9d\u8d56\u9879\u60c5\u51b5"),a.a.createElement("th",null,"\u7ed3\u679c"),a.a.createElement("th",null,"\u4f8b\u5b50"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"\u4e0d\u63d0\u4f9b\u7b2c\u4e8c\u4e2a\u4f9d\u8d56\u9879\u53c2\u6570"),a.a.createElement("td",null,"\u6bcf\u6b21 render \u540e\u6267\u884c"),a.a.createElement("td",null,"useEffect(()=>","{","}",")")),a.a.createElement("tr",null,a.a.createElement("td",null,"\u63d0\u4f9b\u4e00\u4e2a\u7a7a\u6570\u7ec4\u4f5c\u4e3a\u4f9d\u8d56\u9879"),a.a.createElement("td",null,"\u4ec5\u9996\u6b21 render \u540e\u6267\u884c"),a.a.createElement("td",null,"useEffect(()=>","{","}",",[])")),a.a.createElement("tr",null,a.a.createElement("td",null,"\u63d0\u4f9b\u4f9d\u8d56\u9879\u6570\u7ec4"),a.a.createElement("td",null,"\u7b2c\u4e00\u6b21\u4ee5\u53ca\u4f9d\u8d56\u9879\u53d1\u751f\u53d8\u5316\u540e\u6267\u884c"),a.a.createElement("td",null,"useEffect(()=>","{","}",",[deps])")),a.a.createElement("tr",null,a.a.createElement("td",null,"\u8fd4\u56de\u4e00\u4e2a\u56de\u8c03\u51fd\u6570"),a.a.createElement("td",null,"\u7ec4\u4ef6 unmount \u540e\u6267\u884c\uff0c\u7528\u4e8e\u5728\u7ec4\u4ef6\u9500\u6bc1\u7684\u65f6\u5019\u505a\u4e00\u4e9b\u6e05\u7406\u7684\u64cd\u4f5c"),a.a.createElement("td",null,"useEffect(()=>","{","return () => ","{","}","}",",[])")))),a.a.createElement("ul",null,a.a.createElement("li",null,"\u7528\u4e8e\u89e3\u51b3\u7c7b\u7ec4\u4ef6\u4e2d ",a.a.createElement("code",null,"\u67d0\u4e9b\u6267\u884c\u4ee3\u7801\u88ab\u5206\u6563\u5728\u4e0d\u540c\u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u4e2d")," \u7684\u95ee\u9898\u3002\u5bf9\u5e94\u5230\u7c7b\u7ec4\u4ef6\u4e2d\uff0c\u5b83\u6db5\u76d6\u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u6709\uff1a",a.a.createElement("code",null,"componentDidMount"),"\u3001",a.a.createElement("code",null,"componentDidUpdate"),"\u3001",a.a.createElement("code",null,"compomentWillUnmount"),"\uff0c\u4f46\u4e0d\u8981\u5c06 ",a.a.createElement("em",null,"useEffect")," \u5bf9\u5e94\u5230\u67d0\u51e0\u4e2a\u751f\u547d\u5468\u671f\uff0c\u53ea\u9700\u8981\u77e5\u9053 ",a.a.createElement("strong",null,a.a.createElement("em",null,"useEffect")," \u4f1a\u5728\u6bcf\u6b21\u7ec4\u4ef6 ",a.a.createElement("em",null,"render")," \u5b8c\u540e\u5224\u65ad\u4f9d\u8d56\u5e76\u6267\u884c")))),a.a.createElement(r["default"],t["useEffect-demo"].previewerProps,a.a.createElement(l,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("ul",null,a.a.createElement("li",null,"\u9700\u8981\u6ce8\u610f\u56e0\u4e3a ",a.a.createElement("code",null,"state")," \u7684\u53d8\u5316\u800c\u5bfc\u81f4\u7684\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\uff0c\u800c\u6267\u884c\u526f\u4f5c\u7528\u903b\u8f91\u91cc\u9762\u6539\u53d8 ",a.a.createElement("code",null,"state"),"\uff0c\u8fdb\u800c\u5f15\u53d1\u7ec4\u4ef6\u7684\u91cd\u65b0\u6e32\u67d3\uff0c\u4f1a\u5bfc\u81f4\u5faa\u73af\u903b\u8f91")),a.a.createElement(u["a"],{code:"import React, { useState, useEffect } from 'react';\n\nexport default (props) => {\n  const [id, setId] = useState(0);\n\n  useEffect(() => {\n    setId(id + 1);\n    // \u5728\u526f\u4f5c\u7528\u903b\u8f91\u4e2d\u66f4\u65b0state\n    console.log('Effect', id);\n  }, [id]);\n  console.log('render', id);\n  // \u5c06state\u4f5c\u4e3a\u4f9d\u8d56\u9879\n  // \u7ec4\u4ef6\u6e32\u67d3\u5b8c\u6210 --\x3e \u6267\u884c\u526f\u4f5c\u7528 --\x3e state\u53d8\u5316\uff0c\u7ec4\u4ef6\u5237\u65b0\uff0c\u6267\u884c\u526f\u4f5c\u7528\u903b\u8f91 --\x3e state\u53d8\u5316\uff0c\u7ec4\u4ef6\u5237\u65b0\uff0c\u6267\u884c\u526f\u4f5c\u7528\u903b\u8f91\n  return id;\n};",lang:"jsx"}),a.a.createElement("ol",{start:3},a.a.createElement("li",null,"\u6e05\u9664\u526f\u4f5c\u7528")),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("em",null,"useEffect")," \u5141\u8bb8\u6211\u4eec\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\uff0c\u7528\u4e8e\u5728\u7ec4\u4ef6\u9500\u6bc1\u7684\u65f6\u5019\u505a\u4e00\u4e9b\u6e05\u7406\u7684\u5de5\u4f5c\uff0c\u5982\u79fb\u9664\u65f6\u95f4\u7684\u76d1\u542c\u7b49\u3002\u8be5\u56de\u8c03\u51fd\u6570\u4f1a\u5728 ",a.a.createElement("strong",null,"\u7ec4\u4ef6\u88ab\u5378\u8f7d\u524d")," \u6216 ",a.a.createElement("strong",null,"\u7ec4\u4ef6\u6e32\u67d3\u5b8c\u6210\u540e\u3001\u4e0b\u4e00\u6b21 useEffect \u6267\u884c\u4e4b\u524d")," \u6267\u884c")),a.a.createElement(u["a"],{code:"// \u8bbe\u7f6e\u4e00\u4e2a size \u7684 state \u7528\u4e8e\u4fdd\u5b58\u5f53\u524d\u7a97\u53e3\u5c3a\u5bf8\nconst [size, setSize] = useState({});\nuseEffect(() => {\n  // \u7a97\u53e3\u5927\u5c0f\u53d8\u5316\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\n  const handler = () => {\n    setSize(getSize());\n  };\n  // \u76d1\u542c resize \u4e8b\u4ef6\n  window.addEventListener('resize', handler);\n\n  // \u8fd4\u56de\u4e00\u4e2a callback \u5728\u7ec4\u4ef6\u9500\u6bc1\u65f6\u8c03\u7528\n  return () => {\n    // \u79fb\u9664 resize \u4e8b\u4ef6\n    window.removeEventListener('resize', handler);\n  };\n}, []);",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u6bcf\u6b21\u526f\u4f5c\u7528\u6267\u884c\uff0c\u90fd\u4f1a\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684 ",a.a.createElement("code",null,"clear")," \u51fd\u6570\uff0c",a.a.createElement("code",null,"clear")," \u51fd\u6570\u4f1a\u5728\u4e0b\u4e00\u6b21\u526f\u4f5c\u7528\u903b\u8f91\u4e4b\u524d\u6267\u884c\uff0c\u4e5f\u5c31\u662f\u5728 ",a.a.createElement("code",null,"DOM")," \u6e32\u67d3\u5b8c\u6bd5\u4e4b\u540e\uff0c\u4f46\u7ec4\u4ef6\u9500\u6bc1\u4e5f\u4f1a\u6267\u884c\u4e00\u6b21"),a.a.createElement("li",null,"\u5bf9\u4e8e\u8fd9\u4e00\u70b9\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a ",a.a.createElement("em",null,"useEffect")," \u8fd4\u56de\u7684\u56de\u8c03\u51fd\u6570\uff0c\u53ea\u9002\u7528\u4e8e\u6e05\u7406\u5f53\u524d\u6267\u884c\u7684\u526f\u4f5c\u7528\u672c\u8eab\u3002\u4e5f\u5c31\u662f\u8bf4\u5b83\u7684\u4f5c\u7528\u662f\u7528\u4e8e ",a.a.createElement("strong",null,"\u6e05\u7406\u4e0a\u4e00\u6b21\u526f\u4f5c\u7528\u6267\u884c\u540e\u7684\u7ed3\u679c")))),a.a.createElement(r["default"],t["useEffect-demo-1"].previewerProps,a.a.createElement(n,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("ul",null,a.a.createElement("li",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u901a\u8fc7\u5728 ",a.a.createElement("em",null,"useEffect")," \u4e2d\u8fd4\u56de\u4e00\u4e2a\u6e05\u7406\u51fd\u6570\uff0c\u5e76\u4e14\u5c06\u4f9d\u8d56\u9879\u7f6e\u4e3a\u7a7a\u6570\u7ec4\uff0c\u56e0\u6b64\uff0c\u5b83\u53ea\u4f1a\u5728\u7ec4\u4ef6\u88ab\u5378\u8f7d\u7684\u65f6\u5019\u6267\u884c\u4e00\u6b21\uff0c\u8fd9\u5c31\u5b9e\u73b0\u4e86\u4e0e ",a.a.createElement("em",null,"componentWillUnmount")," \u4e00\u6837\u7684\u529f\u80fd")),a.a.createElement("ol",{start:4},a.a.createElement("li",null,"\u4f9d\u8d56\u9879\u7684\u6ce8\u610f")),a.a.createElement("ul",null,a.a.createElement("li",null,"Hooks \u63d0\u4f9b\u4e86\u8ba9\u4f60\u76d1\u542c\u67d0\u4e2a\u6570\u636e\u53d8\u5316\u7684\u80fd\u529b\u3002\u8fd9\u4e2a\u53d8\u5316\u53ef\u80fd\u4f1a\u89e6\u53d1\u7ec4\u4ef6\u7684\u5237\u65b0\uff0c\u4e5f\u53ef\u80fd\u662f\u53bb\u521b\u5efa\u4e00\u4e2a\u526f\u4f5c\u7528\uff0c\u53c8\u6216\u8005\u662f\u5237\u65b0\u4e00\u4e2a\u7f13\u5b58\u3002\u90a3\u4e48\u5b9a\u4e49\u8981\u76d1\u542c\u54ea\u4e9b\u6570\u636e\u53d8\u5316\u7684\u673a\u5236\uff0c\u5176\u5b9e\u5c31\u662f\u6307\u5b9a Hooks \u7684\u4f9d\u8d56\u9879"),a.a.createElement("li",null,"\u4f9d\u8d56\u9879\u4e2d\u5b9a\u4e49\u7684\u53d8\u91cf\u4e00\u5b9a\u662f\u4f1a\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u7528\u5230\u7684\uff0c\u5426\u5219\u58f0\u660e\u4f9d\u8d56\u9879\u662f\u6ca1\u6709\u4efb\u4f55\u610f\u4e49\u7684"),a.a.createElement("li",null,"\u4f9d\u8d56\u9879\u4e00\u822c\u662f\u4e00\u4e2a ",a.a.createElement("strong",null,a.a.createElement("code",null,"\u5e38\u91cf\u6570\u7ec4")),"\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u53d8\u91cf\u3002\u56e0\u4e3a\u4e00\u822c\u5728\u521b\u5efa callback \u65f6\uff0c\u5c31\u4f1a\u77e5\u9053\u4f1a\u7528\u5230\u54ea\u4e00\u4e9b\u4f9d\u8d56\u9879\u4e86\u3002\u800c\u4f9d\u8d56\u9879\u6570\u7ec4\u53ea\u6709\u90e8\u5206\u4f9d\u8d56\uff0c\u6f0f\u6389\u4e86\u90e8\u5206\u4f9d\u8d56\u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u5bfc\u81f4\u6f0f\u6389\u7684\u8be5\u4f9d\u8d56\u53d8\u5316\u65f6 ",a.a.createElement("em",null,"useEffect")," \u5185\u90e8\u7684\u903b\u8f91\u4e0d\u6267\u884c"))),a.a.createElement(r["default"],t["useEffect-demo-2"].previewerProps,a.a.createElement(o,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("ul",null,a.a.createElement("li",null,"\u56e0\u6b64\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a",a.a.createElement("em",null,"\u5e76\u4e0d\u662f\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\uff0c\u526f\u4f5c\u7528\u903b\u8f91\u5c31\u4f1a\u6267\u884c"),"\uff0c\u800c\u662f\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u5b8c\u6210\u540e\uff0c",a.a.createElement("em",null,"useEffect")," \u9700\u8981\u6bd4\u8f83\u4f9d\u8d56\u662f\u5426\u53d8\u5316\u624d\u4f1a\u6267\u884c"),a.a.createElement("li",null,a.a.createElement("em",null,"react")," \u4f7f\u7528\u6d45\u6bd4\u8f83\u6765\u5bf9\u6bd4\u4f9d\u8d56\u9879\u662f\u5426\u53d1\u751f\u53d8\u5316\u3002\u56e0\u6b64\uff0c\u5f53\u521b\u5efa\u4e00\u4e2a\u6570\u7ec4\u6216\u5bf9\u8c61\u7c7b\u578b\u65f6\uff0c\u5373\u4f7f\u548c\u4e4b\u524d\u7684\u503c\u662f\u7b49\u4ef7\u7684\uff0c\u4e5f\u4f1a\u88ab\u8ba4\u5b9a\u4f9d\u8d56\u9879\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u4ece\u800c\u5bfc\u81f4\u4e00\u4e2a Bug"))),a.a.createElement(r["default"],t["useEffect-demo-3"].previewerProps,a.a.createElement(s,null)),a.a.createElement(r["default"],t["useEffect-demo-4"].previewerProps,a.a.createElement(E,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("ol",{start:5},a.a.createElement("li",null,"hook \u7684\u4f7f\u7528\u89c4\u5219")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u2460 \u53ea\u80fd\u5728\u51fd\u6570\u7ec4\u4ef6\u7684\u9876\u7ea7\u4f5c\u7528\u57df\u4f7f\u7528\u3002\u6240\u8c13\u9876\u5c42\u4f5c\u7528\u57df\uff0c\u5c31\u662f ",a.a.createElement("em",null,"Hooks")," \u4e0d\u80fd\u5728 ",a.a.createElement("strong",null,"\u5faa\u73af\u3001\u6761\u4ef6\u5224\u65ad\u6216\u8005\u5d4c\u5957\u51fd\u6570\u5185")," \u6267\u884c\uff0c\u800c\u5fc5\u987b\u662f\u5728\u9876\u5c42\u3002\u540c\u65f6 Hooks \u5728\u7ec4\u4ef6\u7684\u591a\u6b21\u6e32\u67d3\u4e4b\u95f4\uff0c\u5fc5\u987b\u6309\u987a\u5e8f\u88ab\u6267\u884c\u3002\u56e0\u4e3a\u5728 ",a.a.createElement("em",null,"React")," \u7ec4\u4ef6\u5185\u90e8\uff0c\u5176\u5b9e\u662f\u7ef4\u62a4\u4e86\u4e00\u4e2a\u5bf9\u5e94\u7ec4\u4ef6\u7684\u56fa\u5b9a ",a.a.createElement("em",null,"Hooks")," \u6267\u884c\u5217\u8868\u7684\uff0c\u4ee5\u4fbf\u5728\u591a\u6b21\u6e32\u67d3\u4e4b\u95f4\u4fdd\u6301 ",a.a.createElement("em",null,"Hooks")," \u7684\u72b6\u6001\uff0c\u5e76\u505a\u5bf9\u6bd4\u3002\u603b\u7ed3\u4e3a\u4e24\u70b9\uff1a\u7b2c\u4e00\uff0c",a.a.createElement("em",null,"\u6240\u6709 Hook \u5fc5\u987b\u8981\u88ab\u6267\u884c\u5230"),"\u3002\u7b2c\u4e8c\uff0c",a.a.createElement("em",null,"\u5fc5\u987b\u6309\u987a\u5e8f\u6267\u884c")),a.a.createElement("li",null,"\u2461 \u53ea\u80fd\u5728\u51fd\u6570\u7ec4\u4ef6\u6216\u8005\u5176\u4ed6 ",a.a.createElement("em",null,"Hooks")," \u4e2d\u4f7f\u7528\u3002",a.a.createElement("em",null,"Hooks")," \u4f5c\u4e3a\u4e13\u95e8\u4e3a\u51fd\u6570\u7ec4\u4ef6\u8bbe\u8ba1\u7684\u673a\u5236\uff0c\u4f7f\u7528\u7684\u60c5\u51b5\u53ea\u6709\u4e24\u79cd\uff0c\u4e00\u79cd\u662f ",a.a.createElement("em",null,"\u5728\u51fd\u6570\u7ec4\u4ef6\u5185"),"\uff0c\u53e6\u5916\u4e00\u79cd\u5219\u662f ",a.a.createElement("em",null,"\u5728\u81ea\u5b9a\u4e49\u7684 ",a.a.createElement("em",null,"Hooks")," \u91cc\u9762"))),a.a.createElement(u["a"],{code:"const example = () => {\n  const [count, setCount] = useState(0);\n  // ... \u6b63\u786e\uff0chook\u4e00\u5b9a\u4f1a\u88ab\u6267\u884c\u5230\n  return <div>{count}</div>;\n};",lang:"js"}),a.a.createElement(u["a"],{code:"const MyComp = () => {\n  const [count, setCount] = useState(0);\n  if (count > 10) {\n    // \u9519\u8bef\uff1a\u4e0d\u80fd\u5c06 Hook \u7528\u5728\u6761\u4ef6\u5224\u65ad\u91cc\n    useEffect(() => {\n      // ...\n    }, [count]);\n  }\n\n  // \u8fd9\u91cc\u53ef\u80fd\u63d0\u524d\u8fd4\u56de\u7ec4\u4ef6\u6e32\u67d3\u7ed3\u679c\uff0c\u540e\u9762\u5c31\u4e0d\u80fd\u518d\u7528 Hooks \u4e86\n  if (count === 0) {\n    return 'No content';\n  }\n\n  // \u9519\u8bef\uff1a\u4e0d\u80fd\u5c06 Hook \u653e\u5728\u53ef\u80fd\u7684 return \u4e4b\u540e\n  const [loading, setLoading] = useState(false);\n\n  //...\n  return <div>{count}</div>;\n};",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u6839\u636e\u8fd9\u4e9b\u89c4\u5219\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u5728\u5229\u7528\u9ad8\u9636\u7ec4\u4ef6\u7684\u6a21\u5f0f\uff0c\u5c06 Hooks \u5c01\u88c5\u6210\u9ad8\u9636\u7ec4\u4ef6\uff0c\u4ece\u800c\u8ba9\u7c7b\u7ec4\u4ef6\u4f7f\u7528")),a.a.createElement(u["a"],{code:"import React from 'react';\nimport {useWindowSize} from './useWindowSize';\n\nconst withWindowSize = (Comp) => {\n  return props => {\n    const size = useWindowSize();\n    return <Comp size={size} {...props}>\n  }\n}\n\nClass TestComp extends React.Component {\n  render(){\n    const {size} = this.props;\n    // \u590d\u7528hook\u7684\u903b\u8f91\n    return (\n      <div>{size}</div>\n    )\n  }\n}\n\nexport default withWindowSize(TestComp)",lang:"jsx"}),a.a.createElement("ol",{start:6},a.a.createElement("li",null,"\u4f7f\u7528 eslint \u68c0\u6d4b Hooks")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5728 useEffect \u7684\u56de\u8c03\u51fd\u6570\u4e2d\u4f7f\u7528\u7684\u53d8\u91cf\uff0c\u90fd\u5fc5\u987b\u5728\u4f9d\u8d56\u9879\u4e2d\u58f0\u660e"),a.a.createElement("li",null,"Hooks \u4e0d\u80fd\u51fa\u73b0\u5728\u6761\u4ef6\u8bed\u53e5\u6216\u8005\u5faa\u73af\u4e2d\uff0c\u4e5f\u4e0d\u80fd\u51fa\u73b0\u5728 return \u4e4b\u540e"),a.a.createElement("li",null,"Hooks \u53ea\u80fd\u5728\u51fd\u6570\u7ec4\u4ef6\u6216\u8005\u81ea\u5b9a\u4e49 Hooks \u4e2d\u4f7f\u7528")),a.a.createElement(u["a"],{code:"npm install eslint-plugin-react-hooks --save-dev",lang:"bash"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5728 ",a.a.createElement("em",null,"eslint")," \u914d\u7f6e\u6587\u4ef6\u4e2d\u52a0\u5165\u4e24\u4e2a\u89c4\u5219\uff1a",a.a.createElement("em",null,"rules-of-hooks")," \u548c ",a.a.createElement("em",null,"exhaustive-deps"))),a.a.createElement(u["a"],{code:'{\n  "plugins": [\n    // ...\n    "react-hooks"\n  ],\n  "rules": {\n    // ...\n    // \u68c0\u67e5 Hooks \u7684\u4f7f\u7528\u89c4\u5219\n    "react-hooks/rules-of-hooks": "error",\n    // \u68c0\u67e5\u4f9d\u8d56\u9879\u7684\u58f0\u660e\n    "react-hooks/exhaustive-deps": "warn"\n  }\n}',lang:"json"}),a.a.createElement("ol",{start:7},a.a.createElement("li",null,"\u9762\u8bd5\u9898")),a.a.createElement(u["a"],{code:"import React, { useState, useEffect } from 'react';\n\nexport default function AnimateDemo() {\n  const [counter, setCounter] = useState(0);\n\n  useEffect(() => {\n    const timer = setTimeout(() => {\n      setCounter(counter + 1);\n    }, 300);\n    console.log('effect:', timer);\n\n    return () => {\n      console.log('clear:', timer);\n      clearTimeout(timer);\n    };\n  });\n\n  console.log('before render');\n\n  return (\n    <div className=\"container\">\n      <div className=\"el\">{counter}</div>\n    </div>\n  );\n}",lang:"js"}))))})));t["default"]=e=>{var t=a.a.useContext(c["context"]),l=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(o,{demos:l})}}}]);