(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[108],{"/JOR":function(n,e,t){"use strict";t.r(e);var l=t("q1tI"),a=t.n(l),m=t("dEAq"),o=(t("0H/f"),t("N0lm"),t("DgDr"),t("cGlH"),t("ekZX"),t("Bjia")),r=(t("tVxl"),t("1pSt"),a.a.memo((n=>{n.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"\u79fb\u52a8\u96f6"},a.a.createElement(m["AnchorLink"],{to:"#\u79fb\u52a8\u96f6","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u79fb\u52a8\u96f6"),a.a.createElement("hr",null),a.a.createElement("ol",null,a.a.createElement("li",null,"\u9898\u76ee")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u7ed9\u5b9a\u4e00\u4e2a\u6570\u7ec4 nums\uff0c\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\u5c06\u6240\u6709 0 \u79fb\u52a8\u5230\u6570\u7ec4\u7684\u672b\u5c3e\uff0c\u540c\u65f6\u4fdd\u6301\u975e\u96f6\u5143\u7d20\u7684\u76f8\u5bf9\u987a\u5e8f\u3002\u8bf7\u6ce8\u610f\uff0c\u5fc5\u987b\u5728\u4e0d\u590d\u5236\u6570\u7ec4\u7684\u60c5\u51b5\u4e0b\u539f\u5730\u5bf9\u6570\u7ec4\u8fdb\u884c\u64cd\u4f5c")),a.a.createElement(o["a"],{code:"\u8f93\u5165: nums = [0,1,0,3,12]\n\u8f93\u51fa: [1,3,12,0,0]",lang:"md"}),a.a.createElement(o["a"],{code:"\u8f93\u5165: nums = [0]\n\u8f93\u51fa: [0]",lang:"md"}),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"\u5206\u6790")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u901a\u8fc7\u53cc\u6307\u9488\u7684\u65b9\u5f0f\u53bb\u6c42\u89e3\uff0c\u4e00\u4e2a\u662f\u5faa\u73af\u6307\u9488i\uff0c\u4e00\u4e2a\u662f\u53ea\u5728\u5143\u7d20\u662f\u975e\u96f6\u5143\u7d20\u65f6\u624d\u79fb\u52a8\u7684\u6307\u9488j\u3002\u5faa\u73af\u5f00\u59cb\u65f6\uff0c\u5f53\u5f53\u524d\u5143\u7d20\u4e0d\u7b49\u4e8e\u96f6\u65f6\uff0c\u5c06 nums[i] \u8d4b\u503c\u7ed9 nums[j]\uff0c\u5e76\u4e14\u5c06\u6307\u9488 j \u5411\u540e\u79fb\u52a8\uff0c\uff1b\u5f53\u524d\u5143\u7d20\u7b49\u4e8e\u96f6\u65f6\uff0c\u6307\u9488 j \u4e0d\u505a\u4efb\u4f55\u53d8\u5316\uff0c\u76f4\u5230\u5faa\u73af\u7ed3\u675f\u3002\u6700\u540e\u5c06 nums \u4e2d\u4ece\u4f4d\u7f6e j \u5f00\u59cb\u7684\u540e\u9762\u7684\u5143\u7d20\u5168\u90e8\u7f6e\u4e3a0")),a.a.createElement("p",null,a.a.createElement("img",{src:t("pUTX"),alt:""})),a.a.createElement(o["a"],{code:"function moveZeroes(nums){\n\n  if(!nums) return;\n\n  let nonZeroIndex = 0;\n\n  for(let i=0;i<nums.length;i++){\n    if(nums[i]!=0){\n      nums[nonZeroIndex++] = nums[i]\n    }\n  }\n  // \u8fd8\u53ef\u4ee5\u76f4\u63a5\u5c06i\u548cj\u7684\u5143\u7d20\u8fdb\u884c\u4ea4\u6362\uff0c\u5c31\u4e0d\u9700\u8981\u518d\u8fdb\u884c\u4e0b\u4e00\u6b65\u7684\u91cd\u7f6e0\u7684\u64cd\u4f5c\u4e86\n\n  // while(i<nums.length){\n  // if(nums[i]!=0){\n  //   let temp = nums[nonZeroIndex]\n  //   nums[i]=temp;\n  //   nums[i] = nums[nonZeroIndex++]\n  // }\n  // }\n\n  for(let i =nonZeroIndex;i<nums.length;i++){\n    nums[i] = 0\n  }\n\n  // while(nonZeroIndex<nums.length){\n  //   nums[nonZeroIndex++] = 0\n  // }\n\n  return nums\n}",lang:"js"})))})));e["default"]=n=>{var e=a.a.useContext(m["context"]),t=e.demos;return a.a.useEffect((()=>{var e;null!==n&&void 0!==n&&null!==(e=n.location)&&void 0!==e&&e.hash&&m["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),a.a.createElement(r,{demos:t})}},pUTX:function(n,e,t){n.exports=t.p+"static/moveZero.663f797b.png"}}]);