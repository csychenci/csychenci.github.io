(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[181],{"+K1W":function(e,l,n){e.exports=n.p+"static/sanliebiao.b113e624.png"},kXUp:function(e,l,n){"use strict";n.r(l);var t=n("q1tI"),a=n.n(t),r=n("dEAq"),c=(n("0H/f"),n("N0lm"),n("DgDr"),n("cGlH"),n("ekZX"),n("Bjia")),u=(n("tVxl"),n("1pSt"),a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"\u5b57\u5178\u7ed3\u6784"},a.a.createElement(r["AnchorLink"],{to:"#\u5b57\u5178\u7ed3\u6784","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5b57\u5178\u7ed3\u6784"),a.a.createElement("hr",null),a.a.createElement("ol",null,a.a.createElement("li",null,"\u4ec0\u4e48\u662f\u5b57\u5178")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u6211\u4eec\u7528 ",a.a.createElement("em",null,"\u96c6\u5408")," \u6765\u8868\u793a\u4e00\u7ec4\u4e92\u4e0d\u76f8\u540c(\u4e0d\u91cd\u590d)\u7684\u5143\u7d20\uff0c\u5b83\u7684\u5b58\u50a8\u65b9\u5f0f\u4e3a ",a.a.createElement("code",null,"[\u503c,\u503c]"),"\uff0c\u800c\u5728\u5b57\u5178\u4e2d\uff0c\u5b58\u50a8\u7684\u662f ",a.a.createElement("code",null,"[\u952e,\u503c]"),"\uff0c\u4e5f\u79f0\u5b83\u4e3a ",a.a.createElement("em",null,"\u6620\u5c04"),"\u3001",a.a.createElement("em",null,"\u7b26\u53f7\u8868")," \u6216 ",a.a.createElement("em",null,"\u5173\u8054\u6570\u7ec4")),a.a.createElement("li",null,"\u5b57\u6bb5\u5e38\u7528\u4e8e\u8ba1\u7b97\u673a\u4e2d\u4fdd\u5b58\u5bf9\u8c61\u7684\u5f15\u7528\u5730\u5740\u3002\u5728 ",a.a.createElement("em",null,"chrome/\u5f00\u53d1\u8005\u5de5\u5177/memory")," \u4e2d\uff0c\u4f7f\u7528\u5feb\u7167\u529f\u80fd\uff0c\u5c31\u53ef\u4ee5\u770b\u5230\u5185\u5b58\u4e2d\u7684\u4e00\u4e9b\u5bf9\u8c61\u548c\u5b83\u4eec\u5bf9\u5e94\u7684\u5730\u5740\u5f15\u7528")),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"\u5b57\u5178\u7ed3\u6784")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u9996\u5148\u521b\u9020\u5b57\u5178\u7684\u7ed3\u6784")),a.a.createElement(c["a"],{code:"const defaultToStr = (item) => {\n  if (item === null) {\n    return 'NULL';\n  } else if (item === undefined) {\n    return 'UNDEFINED';\n  } else if (typeof item === 'string' || item instanceof String) {\n    return item;\n  }\n  return item.toString();\n  // \u5982\u679citem\u662f\u4e00\u4e2a\u5176\u4ed6\u7c7b\u578b\u7684\u503c\uff0c\u5b83\u9700\u8981\u5b9e\u73b0toString\u65b9\u6cd5\n};\n\n// \u7528\u4e8e\u5b58\u50a8\u5b57\u6bb5\u7684value\nclass ValuePair {\n  constructor(key, value) {\n    this.key = key;\n    this.value = value;\n  }\n  toString() {\n    return `[#${this.key}:${this.value}]`;\n  }\n}\n\nclass Dictionary {\n  constructor(toStrFn = defaultToStr) {\n    this.toStrFn = toStrFn;\n    this.table = {};\n    // \u5b57\u5178\u7684\u5b58\u50a8\u5f62\u5f0f\u4e3a [key] = {key,value}\n  }\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u8981\u6ce8\u610f\u4e00\u70b9\u7684\u662f\uff0c",a.a.createElement("code",null,"es6")," \u4e2d\u7684 ",a.a.createElement("code",null,"Map")," \u7ed3\u6784\uff0c\u5b83\u7684\u952e\u662f\u53ef\u4ee5\u4e3a\u4efb\u610f\u7c7b\u578b\uff0c\u5e76\u4e14\u4e0d\u4f1a\u88ab\u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32(\u800c ",a.a.createElement("code",null,"Object")," \u4f1a\u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32)"),a.a.createElement("li",null,"\u63a5\u4e0b\u6765\uff0c\u4e3a\u5b57\u5178\u5b9e\u73b0\u4e00\u4e9b\u76f8\u5e94\u5730\u65b9\u6cd5"),a.a.createElement("li",null,a.a.createElement("code",null,"hasKey(key)"),"\uff1a\u5982\u679c\u67d0\u4e2a\u952e\u503c\u5b58\u5728\u4e8e\u5b57\u5178\u4e2d\uff0c\u8fd4\u56de ",a.a.createElement("code",null,"true"),"\uff0c\u5426\u5219\u8fd4\u56de ",a.a.createElement("code",null,"false"))),a.a.createElement(c["a"],{code:"hasKey(key){\n  return this.table[this.toStrFn(key)] != null\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"set(key,value)"),"\uff1a\u5411\u5b57\u5178\u4e2d\u6dfb\u52a0\u65b0\u5143\u7d20\u3002\u5982\u679c ",a.a.createElement("code",null,"key")," \u5df2\u7ecf\u5b58\u5728\uff0c\u90a3\u4e48\u5bf9\u5e94\u7684 ",a.a.createElement("code",null,"value")," \u4f1a\u88ab\u65b0\u503c\u66ff\u6362")),a.a.createElement(c["a"],{code:"set(key,value){\n  if(key != null && value !=null){\n    const dictKey = this.toStrFn(key);\n    this.table[dictKey] = new ValuePair(key,value);\n    return true\n  }\n  return false\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"remove(key)"),"\uff1a\u4ece\u5b57\u5178\u4e2d\u5220\u9664\u4e00\u4e2a\u503c")),a.a.createElement(c["a"],{code:"remove(key){\n  if(this.hasKey(key)){\n    delete this.table[this.toStrFn(key)];\n    return truel\n  }\n  return false;\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"get(key)"),"\uff1a\u4ece\u5b57\u5178\u4e2d\u68c0\u7d22\u67d0\u4e2a\u503c")),a.a.createElement(c["a"],{code:"get(key){\n  const valuePair = this.table[this.toStrFn(key)];\n  return ValuePair == null ? undefined ? valuePair?.value\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"keyValues()"),"\uff1a\u8fd4\u56de\u5b57\u5178\u4e2d\u7684\u6240\u6709 ",a.a.createElement("code",null,"valuePair")," \u5bf9\u8c61")),a.a.createElement(c["a"],{code:"keyValues() {\n  return Object.values(this.table)\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"keys()"),"\uff1a\u8fd4\u56de\u5b57\u5178\u4e2d\u7528\u4e8e\u8bc6\u522b\u503c\u7684\u6240\u6709(\u539f\u59cb)\u952e")),a.a.createElement(c["a"],{code:"keys(){\n  return this.keyValues().map(valuePair => valuePair.key)\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"values()"),"\uff1a\u8fd4\u56de\u4e00\u4e2a\u5b57\u5178\u5305\u542b\u7684\u6240\u6709\u503c\u6784\u6210\u7684\u6570\u7ec4")),a.a.createElement(c["a"],{code:"values(){\n  return this.keyValues().map(valuePair => valuePair.value)\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"forEach(callBackFn)"),"\uff1a\u8fed\u4ee3\u5b57\u5178\u4e2d\u6bcf\u4e2a\u503c\uff0c\u5e76\u5c06\u5b83\u4eec\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u4e00\u4e2a\u56de\u8c03\u51fd\u6570")),a.a.createElement(c["a"],{code:"forEach(callBackFn){\n  const valuePairs = this.keyValues();\n  for(let i=0;i<valuePairs.length;i++){\n    const result = callBackFn(valuePairs[i].key,valuePairs[i].value)\n    if(result === false){\n      break;\n      // \u7a0b\u5e8f\u8fd4\u56de\u4e86false\uff0c\u5c06\u8df3\u51fa\u6b63\u5728\u8fed\u4ee3\u7684\u5faa\u73af\n    }\n  }\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"clear()"),"\uff1a\u6e05\u7a7a\u5b57\u5178\u5185\u5bb9")),a.a.createElement(c["a"],{code:"clear(){\n  this.table = {}\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"size()"),"\uff1a\u8fd4\u56de\u5b57\u5178\u4e2d\u7684\u503c\u7684\u4e2a\u6570")),a.a.createElement(c["a"],{code:"size(){\n  return this.keys().length\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"isEmpty()"),"\uff1a\u6821\u9a8c\u5b57\u5178\u662f\u5426\u4e3a\u7a7a")),a.a.createElement(c["a"],{code:"isEmpty(){\n  return this.size() === 0\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"toString()"),"\uff1a\u4ee5\u5b57\u7b26\u4e32\u5f62\u5f0f\u8f93\u51fa\u5b57\u5178\u7684\u6240\u6709\u503c")),a.a.createElement(c["a"],{code:"toString(){\n  if(this.isEmpty()){\n    return ''\n  }\n  const valuePairs = this.keyValues();\n  let objString = `${valuePairs[0].toString()}`;\n  for(let i=1;i<valuePairs.length;i++){\n    objString +=`${objString},${valuePairs[i].toString()}`\n  }\n  return objString\n}",lang:"js"}),a.a.createElement("hr",null),a.a.createElement("h2",{id:"\u6563\u5217\u8868\u7ed3\u6784"},a.a.createElement(r["AnchorLink"],{to:"#\u6563\u5217\u8868\u7ed3\u6784","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6563\u5217\u8868\u7ed3\u6784"),a.a.createElement("hr",null),a.a.createElement("ol",null,a.a.createElement("li",null,"\u6563\u5217\u7b97\u6cd5")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u53ef\u4ee5\u5c3d\u53ef\u80fd\u5feb\u5730\u5728\u6570\u636e\u7ed3\u6784\u4e2d\u627e\u5230\u4e00\u4e2a\u503c\u3002\u5728\u4e4b\u524d\u7684\u6570\u636e\u7ed3\u6784\u4e2d\uff0c\u9700\u8981\u8fed\u4ee3\u6574\u4e2a\u6570\u636e\u7ed3\u6784\u6765\u627e\u5230\u5b83\u3002\u800c\u4f7f\u7528\u6563\u5217\u51fd\u6570\u7684\u8bdd\uff0c\u5c31\u77e5\u9053\u503c\u5730\u5177\u4f53\u4f4d\u7f6e\uff0c\u56e0\u6b64\u53ef\u4ee5\u5feb\u901f\u627e\u5230\u5b83"),a.a.createElement("li",null,"\u6563\u5217\u51fd\u6570\u7684\u4f5c\u7528\u5c31\u662f\u7ed9\u5b9a\u4e00\u4e2a\u952e\u503c\uff0c\u8fd4\u56de\u503c\u5728\u8868\u4e2d\u7684\u5730\u5740\uff0c\u5b83\u5c5e\u4e8e\u5b57\u5178\u5730\u4e00\u79cd\u5b9e\u73b0\u3002\u5b83\u8fd8\u53ef\u4ee5\u7528\u6765\u8868\u793a\u5bf9\u8c61\uff0c\u5728 ",a.a.createElement("code",null,"js")," \u5185\u90e8\u5c31\u662f\u7528\u6563\u5217\u8868\u6765\u8868\u793a\u6bcf\u4e2a\u5bf9\u8c61")),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"\u521b\u5efa\u6563\u5217\u8868")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5148\u6765\u642d\u5efa\u6563\u5217\u8868\u7684\u9aa8\u67b6")),a.a.createElement(c["a"],{code:"class HashTable {\n  constructor(toStrFn = defaultToStr) {\n    this.toStrFn = toStrFn;\n    this.table = {};\n  }\n\n  hashCode(key) {\n    return this.loseloseHashCode(key);\n  }\n\n  loseloseHashCode(key) {\n    if (typeof key === 'number') {\n      return key;\n    }\n    const tableKey = this.toStrFn(key);\n    let hash = 0;\n    for (let i = 0; i < tableKey.length; i++) {\n      hash += tableKey.charCodeAt(i);\n      // \u83b7\u53d6\u6bcf\u4e2a\u5b57\u7b26\u7684ASCII\u503c\n    }\n    return hash % 37;\n    // \u4efb\u610f\u6570\u9664\u6cd5\u89c4\u907f\u64cd\u4f5c\u6570\u8d85\u8fc7\u6570\u5b57\u53d8\u91cf\u6700\u5927\u8868\u793a\u8303\u56f4\n  }\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"put(ket,value)"),"\uff1a\u5c06\u952e\u548c\u503c\u52a0\u5165\u6563\u5217\u8868")),a.a.createElement(c["a"],{code:"put(ket,value){\n  if(key != null && value != null){\n    const position = this.hashCode(key);\n    this.table[position] = new ValuePair(key,value);\n    return true;\n  }\n  return false\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"get(key)"),"\uff1a\u4ece\u6563\u5217\u8868\u4e2d\u83b7\u53d6\u4e00\u4e2a\u503c")),a.a.createElement(c["a"],{code:"get(key){\n  const ValuePair = this.table[this.hashCode(key)];\n  return ValuePair == null ? undefined : ValuePair?.value\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"remove(key)"),"\uff1a\u4ece\u6563\u5217\u8868\u4e2d\u5220\u9664\u4e00\u4e2a\u503c")),a.a.createElement(c["a"],{code:"remove(key){\n  const hash = this.hashCode(key);\n  const valuePair = this.table[hash];\n  if(valuePair != null){\n    delete this.table[hash];\n    return true\n  }\n  return false\n}",lang:"js"}),a.a.createElement("ol",{start:3},a.a.createElement("li",null,"\u6563\u5217\u8868\u6d4b\u8bd5")),a.a.createElement(c["a"],{code:"const hashTable = new HashTable();\nhashTable.put('Tom Smith', 'TomSmith@gamil.com');\nhashTable.put('Tony Stack', 'TonyStack@gamil.com');\nhashTable.put('Jason Chen', 'JasonChen@gamil.com');",lang:"js"}),a.a.createElement("p",null,a.a.createElement("img",{src:n("+K1W"),alt:"sanliebiao"}))))})));l["default"]=e=>{var l=a.a.useContext(r["context"]),n=l.demos;return a.a.useEffect((()=>{var l;null!==e&&void 0!==e&&null!==(l=e.location)&&void 0!==l&&l.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(u,{demos:n})}}}]);