(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[137],{"K/kN":function(e,t,n){e.exports=n.p+"static/Redux.28ba54d8.jpg"},L2dC:function(e,t,n){e.exports=n.p+"static/combineReducer.d5942ca5.jpg"},dJ0s:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("dEAq"),c=(n("0H/f"),n("N0lm"),n("DgDr"),n("cGlH"),n("ekZX"),n("Bjia")),o=(n("tVxl"),n("1pSt"),l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u72b6\u6001\u7ba1\u7406\u5de5\u5177\u7684\u4f5c\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u72b6\u6001\u7ba1\u7406\u5de5\u5177\u7684\u4f5c\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u72b6\u6001\u7ba1\u7406\u5de5\u5177\u7684\u4f5c\u7528"),l.a.createElement("hr",null),l.a.createElement("ol",null,l.a.createElement("li",null,"\u7528\u9014")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5b9e\u73b0\u7ec4\u4ef6\u4e4b\u95f4\u7684\u6570\u636e\u5171\u4eab"),l.a.createElement("li",null,"\u5b9e\u73b0\u6570\u636e\u7f13\u5b58")),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"Redux")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u57fa\u4e8e Flux \u601d\u60f3\u800c\u8bde\u751f\u4e00\u4e2a\u5f00\u6e90\u5e93\uff0c\u5b83\u662f\u4e00\u5957\u5177\u4f53\u7684\u6570\u636e\u89e3\u51b3\u65b9\u6848\u3002\u5b83\u662f\u4e00\u4e2a\u72b6\u6001\u5bb9\u5668\uff0c\u63d0\u4f9b\u53ef\u9884\u6d4b\u5316\u7684\u72b6\u6001\u7ba1\u7406"),l.a.createElement("li",null,"redux \u8981\u6c42\u6570\u636e\u90fd\u653e\u5728\u4e00\u4e2a\u516c\u5171\u7684\u5b58\u50a8\u533a\uff0c\u6240\u6709\u7ec4\u4ef6\u7684\u5171\u4eab\u6570\u636e\u90fd\u653e\u5728\u4e00\u4e2a\u516c\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u4e2d\uff0c\u7ec4\u4ef6\u901a\u8fc7\u8fd9\u4e2a\u5b58\u50a8\u7a7a\u95f4\u6765\u53d6\u6570\u636e\uff0c\u4e00\u65e6\u5b58\u50a8\u7a7a\u95f4\u4e2d\u7684\u6570\u636e\u53d1\u751f\u6539\u53d8\uff0c\u6240\u6709\u76f8\u5173\u7684\u7ec4\u4ef6\u90fd\u80fd\u611f\u77e5\u5230\u6570\u636e\u7684\u53d8\u5316\u5e76\u4f5c\u51fa\u76f8\u5e94\u5730\u64cd\u4f5c")),l.a.createElement("p",null,l.a.createElement("img",{src:n("xPA2"),alt:"\u6570\u636e\u4f20\u9012\u533a\u522b"})),l.a.createElement("ol",{start:3},l.a.createElement("li",null,"\u54cd\u5e94\u539f\u7406")),l.a.createElement("ul",null,l.a.createElement("li",null,"redux \u63d0\u4f9b\u4e86\u4e00\u79cd ",l.a.createElement("strong",null,"\u53ef\u9884\u6d4b\u5316\u7684\u72b6\u6001\u7ba1\u7406")," \u673a\u5236\uff0c\u5b83\u4f1a\u5c06\u6574\u4e2a\u5e94\u7528\u72b6\u6001\uff0c\u4e5f\u5c31\u662f\u7ec4\u4ef6\u4e4b\u95f4\u9700\u8981\u5171\u4eab\u7684\u6570\u636e\u5b58\u50a8\u5230\u4e00\u4e2a\u5730\u65b9\uff0c\u5b83\u5c31\u662f store\u3002store \u4e4b\u4e2d\u4fdd\u6709\u4e00\u9897\u72b6\u6001\u6811 state tree\uff0c\u7ec4\u4ef6\u6539\u53d8 state \u5730\u552f\u4e00\u65b9\u6cd5\u662f\u901a\u8fc7\u8c03\u7528 store \u7684 dispatch \u65b9\u6cd5\uff0c\u89e6\u53d1\u4e00\u4e2a action\uff0c\u8fd9\u4e2a action \u88ab\u5bf9\u5e94\u7684 reducer \u5904\u7406\uff0c\u4ece\u800c\u66f4\u65b0 state\u3002\u7ec4\u4ef6\u901a\u8fc7 dispatch(\u6d3e\u53d1) action(\u884c\u4e3a) \u7ed9 store\uff0c\u800c\u4e0d\u76f4\u63a5\u901a\u77e5\u5176\u4ed6\u7ec4\u4ef6\uff0c\u5176\u4ed6\u7ec4\u4ef6\u53ef\u4ee5\u901a\u8fc7\u8ba2\u9605 store \u4e2d\u7684\u72b6\u6001 state \u6765\u5237\u65b0\u81ea\u5df1\u7684\u89c6\u56fe")),l.a.createElement("p",null,l.a.createElement("img",{src:n("K/kN"),alt:"Redux\u6982\u5ff5\u56fe"})),l.a.createElement("ol",{start:4},l.a.createElement("li",null,"action")),l.a.createElement("ul",null,l.a.createElement("li",null,"action \u662f\u884c\u4e3a\u4fe1\u606f\u7684\u62bd\u8c61\uff0c\u5bf9\u8c61\u7c7b\u578b\uff0c\u5b83\u63cf\u8ff0\u53d1\u751f\u4e86\u4ec0\u4e48\u3002\u8be5\u5bf9\u8c61\u5fc5\u987b\u6709\u4e00\u4e2a type \u5c5e\u6027\uff0c\u5bf9\u4e8e\u5bf9\u8c61\u91cc\u9762\u7684\u5176\u4ed6\u5185\u5bb9\uff0c",l.a.createElement("code",null,"redux")," \u4e0d\u505a\u9650\u5236")),l.a.createElement(c["a"],{code:"// action\n{\n      type:'ACTION_TYPE',\n      payload, // \u8d1f\u8377\uff0c\u7528\u4e8e\u627f\u8f7daction\u643a\u5e26\u7684\u6570\u636e\n}",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"createAction\uff0c\u7528\u4e8e\u521b\u5efa action\uff0c\u5b83\u53ea\u7b80\u5355\u5730\u8fd4\u56de action")),l.a.createElement(c["a"],{code:"function createAction(params) {\n  return {\n    type: 'ACTION_TYPE',\n    payload, // \u8d1f\u8377\uff0c\u7528\u4e8e\u627f\u8f7daction\u643a\u5e26\u7684\u6570\u636e\n  };\n}",lang:"js"}),l.a.createElement("ol",{start:5},l.a.createElement("li",null,"state")),l.a.createElement("ul",null,l.a.createElement("li",null,"state \u662f\u88ab\u6258\u7ba1\u7684\u6570\u636e\uff0c\u4e5f\u5c31\u662f\u6bcf\u6b21\u89e6\u53d1\u76d1\u542c\u4e8b\u4ef6\uff0c\u6211\u4eec\u8981\u64cd\u4f5c\u7684\u6570\u636e")),l.a.createElement("ol",{start:6},l.a.createElement("li",null,"reducer")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7528\u4e8e\u63a7\u5236 state \u6539\u53d8\u7684\u51fd\u6570\u3002action \u63cf\u8ff0\u53d1\u751f\u4e86\u4ec0\u4e48\uff0c\u4f46\u662f\u5e76\u4e0d\u77e5\u9053\u76f8\u5e94\u5730 state \u8be5\u600e\u6837\u53d8\u5316\uff0c\u5bf9\u4e8e\u4e0d\u540c\u7684 action\uff0c\u76f8\u5e94\u5730 state \u53d8\u5316\u662f\u7528 reducer \u6765\u63cf\u8ff0\u7684\u3002"),l.a.createElement("li",null,"reducer \u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u662f state\uff0c\u7b2c\u4e8c\u4e2a\u662f action\uff0c\u5e76\u8fd4\u56de\u8ba1\u7b97\u4e4b\u540e\u65b0\u7684 state\u3002reducer \u5fc5\u987b\u662f\u4e00\u4e2a\u7eaf\u51fd\u6570\uff0c\u5bf9\u4e8e\u76f8\u540c\u7684\u8f93\u5165 (state\u3001action)\uff0c\u4e00\u5b9a\u4f1a\u8fd4\u56de\u76f8\u540c\u7684\u65b0\u7684 state"),l.a.createElement("li",null,"\u7eaf\u51fd\u6570\u6ca1\u6709\u4efb\u4f55\u526f\u4f5c\u7528\uff0c\u5e76\u4e14\u76f8\u540c\u7684\u8f93\u5165\uff0creducer \u51fd\u6570\u65e0\u8bba\u6267\u884c\u591a\u5c11\u904d\u59cb\u7ec8\u4f1a\u8fd4\u56de\u76f8\u540c\u7684\u8f93\u51fa\uff08newState\uff09\uff0c\u56e0\u6b64\u901a\u8fc7 reducer \u51fd\u6570\u5f88\u5bb9\u6613\u63a8\u65ad\u51fa state \u7684\u53d8\u5316")),l.a.createElement(c["a"],{code:"lei initState={\n  msg:'hello world'\n}\nfunction reducer(state=initState,action){\n  let newState=JSON.parse(JSON.stringify(state))\n  switch (action.type){\n        case 'action_type_one':\n              newState.msg=action.payload\n              return newState\n        default:\n              return newState\n  }\n}\n// \u539f\u59cb\u6570\u636e state=initState \u5e76\u4e0d\u4f1a\u6539\u53d8\uff0c\u65b0\u7684 newState \u662f\u4e00\u4e2a\u6700\u65b0\u7684\u5feb\u7167",lang:"js"}),l.a.createElement("ol",{start:7},l.a.createElement("li",null,"store")),l.a.createElement("ul",null,l.a.createElement("li",null,"store \u8d1f\u8d23\u5c06 state\u3001action\u3001reducer \u6574\u5408\u5728\u4e00\u8d77")),l.a.createElement(c["a"],{code:"{\n  createStore(rootReducer), // \u7528\u4e8e\u521b\u5efa\u6839store\n    combineReducers({ user: userReducer, home: homeReducer }), // \u7528\u4e8e\u6574\u5408\u591a\u4e2areducer\n    bindActionCreators,\n    applyMiddleware,\n    compose,\n    __DO_NOT_USE_ActionTypes;\n}",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6839 store \u7684\u4f5c\u7528\u6709\u5f88\u591a\uff0c\u901a\u5e38\u8d1f\u8d23\u6258\u7ba1\u5e94\u7528\u7684 state\u3001\u5141\u8bb8\u901a\u8fc7 store.getState() \u65b9\u6cd5\u8bbf\u95ee\u5230\u6258\u7ba1\u7684 state\u3001\u5141\u8bb8\u901a\u8fc7 store.dispatch() \u65b9\u6cd5\u89e6\u53d1 acton \u66f4\u65b0state\u3001\u5141\u8bb8\u901a\u8fc7 store.subscribe() \u6ce8\u518c\u76d1\u542c\u51fd\u6570\u76d1\u542c\u6bcf\u4e00\u6b21 action \u89e6\u53d1\u3001\u5141\u8bb8\u6ce8\u9500\u901a\u8fc7 store.subscribr() \u65b9\u6cd5\u6ce8\u518c\u7684\u76d1\u542c\u51fd\u6570")),l.a.createElement(c["a"],{code:"// \u6ce8\u518c\u76d1\u542c\u51fd\u6570\nconst unsubscribe=store.subscribe(()=>{...})\n// \u6ce8\u9500\u76d1\u542c\u51fd\u6570\nunsubscribe()",lang:"js"}),l.a.createElement("h2",{id:""},l.a.createElement(r["AnchorLink"],{to:"#","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("img",{src:n("sKc2"),alt:"RootStore"})),l.a.createElement("h2",{id:"redux-\u7684\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#redux-\u7684\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Redux \u7684\u4f7f\u7528"),l.a.createElement("hr",null),l.a.createElement("ol",null,l.a.createElement("li",null,"\u521b\u5efa reducer")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u5355\u72ec\u7684 reducer\uff0c\u4e5f\u53ef\u4ee5\u5c06\u591a\u4e2a reducer \u5408\u5e76\u4e3a\u4e00\u4e2a reducer\u3002redux \u63d0\u4f9b\u4e86 combineReducers(","{","user:userReducer,home:homeReducer","}",") \u65b9\u6cd5\u4e86\u6765\u8ba9\u6211\u4eec\u53ef\u4ee5\u5408\u5e76\u591a\u4e2a reducer"),l.a.createElement("li",null,"action \u53d1\u51fa\u547d\u4ee4\u540e\u5c06 state \u653e\u5165\u52a0\u5de5\u51fd\u6570 reducer \u4e2d\uff0c\u5bf9 state \u8fdb\u884c\u52a0\u5de5\u5904\u7406\uff0c\u8fd4\u56de\u65b0\u7684 state"),l.a.createElement("li",null,"reducer \u662f\u4e00\u4e2a\u7eaf\u51fd\u6570\uff0c\u4e5f\u5c31\u662f\u8bf4\u4e0d\u80fd\u5728 reducer \u4e2d\u8fdb\u884c\u5f02\u6b65\u64cd\u4f5c\u3002\u7eaf\u51fd\u6570\u6307\u7684\u662f\u7ed9\u56fa\u5b9a\u7684\u8f93\u5165\uff0c\u5c31\u4e00\u5b9a\u6709\u56fa\u5b9a\u7684\u8f93\u51fa\u4e14\u4e0d\u4f1a\u6709\u4efb\u4f55\u526f\u4f5c\u7528\uff09\uff0c\u5373 state \u662f\u4e00\u5b9a\u7684 action \u662f\u4e00\u5b9a\u7684\u90a3\u4e48\u8fd4\u56de\u7684\u6570\u636e\u4e00\u5b9a\u662f\u56fa\u5b9a\u7684")),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"\u521b\u5efa action")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7528\u6237\u662f\u63a5\u89e6\u4e0d\u5230 state\uff0c\u53ea\u80fd\u7531 view \u89e6\u53d1\uff0c\u56e0\u6b64\uff0c\u8fd9\u4e2a action(\u884c\u4e3a) \u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u79cd\u6307\u4ee4\uff0c\u9700\u8981\u53d1\u51fa\u591a\u5c11\u52a8\u4f5c\u5c31\u6709\u591a\u5c11\u6307\u4ee4"),l.a.createElement("li",null,"action \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5fc5\u987b\u6709\u4e00\u4e2a\u53eb type \u7684\u53c2\u6570\uff0c\u7528\u4e8e\u5b9a\u4e49 action \u7c7b\u578b")),l.a.createElement("ol",{start:3},l.a.createElement("li",null,"\u521b\u5efa store")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4f7f\u7528 createStore \u65b9\u6cd5\u521b\u5efa store\uff0c\u63d0\u4f9b dispatch\u3001subscribe\u3001getState \u7b49\u65b9\u6cd5")),l.a.createElement("ol",{start:4},l.a.createElement("li",null,"reduce \u8bbe\u8ba1\u548c\u4f7f\u7528\u4e09\u4e2a\u539f\u5219")),l.a.createElement("ul",null,l.a.createElement("li",null,"store \u5fc5\u987b\u662f\u552f\u4e00\u7684\uff0c\u5355\u4e00\u6570\u636e\u6e90\u53ef\u4ee5\u8ba9\u6574\u4e2a\u5e94\u7528\u7684 state \u53d8\u5f97\u65b9\u4fbf\u7ef4\u62a4\u3001\u8ffd\u8e2a\u7096\u597d\u4fee\u6539"),l.a.createElement("li",null,"\u53ea\u6709 store \u80fd\u591f\u6539\u53d8\u81ea\u5df1\u7684\u5185\u5bb9\uff08\u5e76\u4e0d\u662f reducer \u6539\u53d8\u6570\u636e\uff0creducer \u53ea\u662f\u751f\u6210\u4e86\u4e00\u4e2a\u6570\u636e\u7ed9 store\uff0cstore \u62ff\u5230\u4e86 reducer \u8fd4\u56de\u7684\u6570\u636e\u6765\u8fdb\u884c\u66f4\u65b0\uff0c\u6240\u4ee5\u53ea\u80fd\u5728 reducer \u4e2d\u62f7\u8d1d\u4e00\u4efd\u65e7\u7684 state \u7136\u540e\u62ff\u65b0\u7684\u6570\u636e\u6765\u6539\uff0c\u7edd\u5bf9\u4e0d\u80fd\u591f state \u76f4\u63a5\u8fdb\u884c\u4fee\u6539\uff09")),l.a.createElement("hr",null),l.a.createElement("h2",{id:"\u76f8\u5173-api-\u8bb2\u89e3"},l.a.createElement(r["AnchorLink"],{to:"#\u76f8\u5173-api-\u8bb2\u89e3","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u76f8\u5173 API \u8bb2\u89e3"),l.a.createElement("hr",null),l.a.createElement("ol",null,l.a.createElement("li",null,"combineReducers")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5f53\u9879\u76ee\u89c4\u6a21\u53d8\u5927\uff0c\u4e1a\u52a1\u573a\u666f\u8d8a\u6765\u8d8a\u590d\u6742\u65f6\uff0cstate \u7684\u7ed3\u6784\u4e5f\u4f1a\u53d8\u5f97\u8d8a\u6765\u8d8a\u590d\u6742\u800c\u4e14\u5e9e\u5927\u3002\u5982\u679c\u6211\u4eec\u53ea\u901a\u8fc7\u4e00\u4e2a reducer \u6765\u8ba1\u7b97 state \u7684\u53d8\u5316\u5fc5\u7136\u4f1a\u8ba9\u6211\u4eec\u7684\u4e1a\u52a1\u5904\u7406\u53d8\u5f97\u81c3\u80bf\u3002\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u5c06 state \u72ec\u7acb\u7684\u6570\u636e\u5206\u79bb\u51fa\u6765\uff0c\u5355\u72ec\u7528\u4e00\u4e2a reducer`\u6765\u8ba1\u7b97\uff0c\u7136\u540e\u4f7f\u7528 combineReducer \u5408\u5165 state \u4e2d")),l.a.createElement(c["a"],{code:"import { combineReducer, createStroe } from 'redux';\n\nconst rootReducer = combineReducers({\n  user: userReducer,\n  good: goodReducer,\n});\n\nconst store = createStore(rootReducer);",lang:"js"}),l.a.createElement("p",null,l.a.createElement("img",{src:n("L2dC"),alt:"combineReducer"})),l.a.createElement("hr",null),l.a.createElement("h2",{id:"react-redux"},l.a.createElement(r["AnchorLink"],{to:"#react-redux","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"react-redux"),l.a.createElement("hr",null),l.a.createElement("ol",null,l.a.createElement("li",null,"Redux \u5b98\u65b9\u63d0\u4f9b\u7684 react \u7ed1\u5b9a\u5e93")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u53ef\u4ee5\u5c06 store \u96c6\u6210\u5230 React \u7684\u7ec4\u4ef6\u9876\u5c42\u4e2d\uff0c\u56e0\u6b64\uff0c\u4e5f\u5c31\u662f\u9876\u5c42 props\uff0c\u8fd9\u6837\u6bcf\u4e2a\u5b50\u7ec4\u4ef6\u90fd\u80fd\u8bbf\u95ee props \u4e86")),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"Provider")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5c06\u9876\u5c42\u7ec4\u4ef6\u5305\u62ec\u5728 ",l.a.createElement("code",null,"react-redux")," \u63d0\u4f9b\u7684 ",l.a.createElement("code",null,"\u9876\u7ea7\u7ec4\u4ef6")," Provider \u4e2d\uff0c\u8fd9\u6837\uff0c\u4f4d\u4e8e\u9876\u5c42\u7ec4\u4ef6\u4e2d\u7684\u5176\u4ed6\u5b50\u7ec4\u4ef6\u5c31\u5728 ",l.a.createElement("code",null,"react-redux")," \u7684\u63a7\u5236\u4e4b\u4e0b\u4e86\uff0c\u4f46\u662f ",l.a.createElement("code",null,"store")," \u9700\u8981\u4f5c\u4e3a\u5168\u5c40\u6570\u636e\u6ce8\u5165\u5230 ",l.a.createElement("code",null,"Provider")," \u7ec4\u4ef6\u4e2d\u53bb")),l.a.createElement(c["a"],{code:'// main.js\nReactDOM.render({\n  <App />,\n  document.getElementById("#root")\n})',lang:"js"}),l.a.createElement(c["a"],{code:'// App.js\nfunction App(){\n  <Provider store={store}>\n    <div className="App">\n      {/**  */}\n    </div>\n  <Provider>\n}',lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"Provider")," \u53ef\u4ee5\u8ba9\u6240\u6709\u7ec4\u4ef6\u90fd\u80fd\u591f\u8bbf\u95ee\u5230 ",l.a.createElement("code",null,"Redux")," \u4e2d\u7684\u6570\u636e")),l.a.createElement("ol",{start:3},l.a.createElement("li",null,"connect")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u8bed\u6cd5\uff1aconnect(mapStateToProps,mapActionsToProps)(Component)"),l.a.createElement("li",null,"mapStateToProps\uff1a\u7528\u4e8e\u5c06 ",l.a.createElement("code",null,"redux")," \u4e2d\u7684\u6570\u636e\u6620\u5c04\u5230 ",l.a.createElement("code",null,"react")," \u7684 ",l.a.createElement("code",null,"props")," \u4e2d\u53bb\uff0c\u540e\u7eed\u6211\u4eec\u53ef\u4ee5\u5728\u88ab\u6ce8\u5165\u4e86 ",l.a.createElement("code",null,"state")," \u7684\u7ec4\u4ef6\u4e2d\u76f4\u63a5\u4f7f\u7528 ",l.a.createElement("code",null,"props.xxx/\u51fd\u6570\u7ec4\u4ef6")," \u6216 ",l.a.createElement("code",null,"this.props.xxx/\u7c7b\u7ec4\u4ef6")," \u8bbf\u95ee ",l.a.createElement("code",null,"state"))),l.a.createElement(c["a"],{code:"function mapStateToProps(state) {\n  return {\n    msg: 'hello world',\n    count: 0,\n  };\n}\n// \u5c06state\u4e2d\u7684\u67d0\u4e2a\u6570\u636e\u6620\u5c04\u5230props\u4e2d",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"mapActionsToProps\uff1a\u7c7b\u4f3c\u7684\u6982\u5ff5\uff0c\u5c06 ",l.a.createElement("code",null,"(dispach(action))")," \u6620\u5c04\u5230 ",l.a.createElement("code",null,"props")," \u4e2d")),l.a.createElement(c["a"],{code:'function mapActionsToProps(){\n  return(\n    changeCount:()=>{\n      dispatch({\n        type:"add",payload\n      })\n    }\n  )\n}\n// payload\u7528\u4e8e\u4f20\u9012\u53c2\u6570',lang:"js"}),l.a.createElement("ol",{start:4},l.a.createElement("li",null,"useSelector")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7528\u4e8e\u4ece ",l.a.createElement("code",null,"redux")," \u7684 ",l.a.createElement("code",null,"store")," \u5bf9\u8c61\u4e2d\u63d0\u53d6\u6570\u636e ",l.a.createElement("code",null,"state"),"\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u53ef\u80fd\u5728\u4efb\u4f55\u65f6\u5019\u6267\u884c\u591a\u6b21\uff0c\u56e0\u6b64\u9700\u4fdd\u6301\u8fd9\u4e2a ",l.a.createElement("code",null,"selector")," \u662f\u4e00\u4e2a\u7eaf\u51fd\u6570"),l.a.createElement("li",null,"\u7528\u4e8e\u66ff\u4ee3\u4e4b\u524d\u7684\u7684 ",l.a.createElement("code",null,"connect")," \u4e2d\u7684 ",l.a.createElement("code",null,"mapStateToProps")," \u53c2\u6570\u7684\u6982\u5ff5\uff0c",l.a.createElement("code",null,"useSelector")," \u4f1a\u8ba2\u9605 ",l.a.createElement("code",null,"store"),"\uff0c\u5f53 ",l.a.createElement("code",null,"dispatch")," \u4e00\u4e2a ",l.a.createElement("code",null,"action")," \u65f6\uff0c\u4f1a\u8fd0\u884c ",l.a.createElement("code",null,"selector"))),l.a.createElement("ol",{start:5},l.a.createElement("li",null,l.a.createElement("code",null,"useSelector")," \u4e0e ",l.a.createElement("code",null,"mapStateToProps")," \u7684\u5dee\u5f02")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"selector")," \u4f1a\u8fd4\u56de\u4efb\u4f55\u503c\u4f5c\u4e3a\u7ed3\u679c\uff0c\u5e76\u4e0d\u4ec5\u4ec5\u662f\u5bf9\u8c61\uff0c",l.a.createElement("code",null,"selector")," \u8fd4\u56de\u7684\u7ed3\u679c\uff0c\u4f1a\u4f5c\u4e3a ",l.a.createElement("code",null,"useSelector")," \u7684\u7ed3\u679c"),l.a.createElement("li",null,"\u5f53 ",l.a.createElement("code",null,"action")," \u88ab ",l.a.createElement("code",null,"dispatch")," \u65f6\uff0c",l.a.createElement("code",null,"useSelector")," \u4f1a\u5bf9\u524d\u4e00\u4e2a ",l.a.createElement("code",null,"selector")," \u7684\u7ed3\u679c\u503c\u548c\u5f53\u524d\u7ed3\u679c\u503c\u8fdb\u884c\u6d45\u6bd4\u8f83\u3002\u5982\u679c\u4e0d\u540c\uff0c\u5c31\u4f1a\u88ab ",l.a.createElement("code",null,"re-render"))),l.a.createElement(c["a"],{code:"import React from 'react';\nimport { useSelector } from 'react-redux';\nexport const CounterComponent = () => {\n  const count = useSelector((state) => state.count);\n  return <div>{count}</div>;\n};",lang:"js"}),l.a.createElement("hr",null),l.a.createElement("h2",{id:"redux-\u5b9e\u4f8b"},l.a.createElement(r["AnchorLink"],{to:"#redux-\u5b9e\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"redux \u5b9e\u4f8b"),l.a.createElement("hr",null),l.a.createElement("ol",null,l.a.createElement("li",null,"\u5b89\u88c5\u4f9d\u8d56")),l.a.createElement(c["a"],{code:"npm install redux react-redux -S",lang:"bash"}),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"\u521b\u5efa reducer")),l.a.createElement(c["a"],{code:"// store/reducer.js\nimport { CHANGE_INPUT_VALUE, ADD_ITEM, DEL_ITEM } from './actionTypes';\n\nconst defaultState = {\n  list: [1, 2, 3],\n  inputValue: '',\n};\n\nexport default (state = defaultState, action) => {\n  if (action.type === CHANGE_INPUT_VALUE) {\n    const newState = JSON.parse(JSON.stringify(state));\n    newState.inputValue = action.value;\n    console.log(newState.inputValue);\n    return newState;\n  }\n\n  if (action.type === ADD_ITEM) {\n    const newState = JSON.parse(JSON.stringify(state));\n    newState.list.push(newState.inputValue);\n    newState.inputValue = '';\n    // \u8fd4\u56de\u6570\u636e\u7ed9store\u6765\u66ff\u6362\n    return newState;\n  }\n\n  if (action.type === DEL_ITEM) {\n    const newState = JSON.parse(JSON.stringify(state));\n    newState.list.splice(action.index, 1);\n    return newState;\n  }\n\n  return state;\n};",lang:"js"}),l.a.createElement("ol",{start:3},l.a.createElement("li",null,"\u521b\u5efa store")),l.a.createElement(c["a"],{code:"// src/store/index,js\nimport { createStore } from 'redux';\n// \u7528\u4e8e\u521b\u5efastore\uff0c\u4f7f\u7528\u4e86createStore\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u63a5\u6536reducer\nimport reducer from './reducer';\n\nconst store = createStore(reducer);\n\nexport default store;",lang:"js"}),l.a.createElement("ol",{start:4},l.a.createElement("li",null,"\u521b\u5efa actionType")),l.a.createElement(c["a"],{code:"// \u7528\u4e8e\u5b9a\u4e49action\u5e38\u91cf\nexport const CHANGE_INPUT_VALUE = 'input-value-changed';\nexport const ADD_ITEM = 'add-item';\nexport const DEL_ITEM = 'idel-item';",lang:"js"}),l.a.createElement("ol",{start:5},l.a.createElement("li",null,"\u521b\u5efa action \u751f\u6210\u5668")),l.a.createElement(c["a"],{code:"import { ADD_ITEM, CHANGE_INPUT_VALUE, DEL_ITEM } from './actionTypes';\n\nexport const getInputChangeAction = (value) => ({\n  type: CHANGE_INPUT_VALUE,\n  value,\n});\n\nexport const getAddItemAction = () => ({\n  type: ADD_ITEM,\n});\n\nexport const getDelItemAction = (index) => ({\n  type: DEL_ITEM,\n  index,\n});",lang:"js"}),l.a.createElement("ol",{start:6},l.a.createElement("li",null,"\u5c06 store \u6ce8\u5165\u5230\u9876\u5c42 props \u4e2d")),l.a.createElement(c["a"],{code:"// App.js\nimport React from 'react';\nimport store from '@/src/store/index';\nimport { Provider } from 'react-redux';\nimport TodoList from '@/src/components/test';\nfunction App() {\n  <Provider store={store}>\n    <div className=\"App\">\n      <TodoList />\n    </div>\n  </Provider>;\n}\n\nexport default App;",lang:"js"}),l.a.createElement("ol",{start:7},l.a.createElement("li",null,"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528 store")),l.a.createElement(c["a"],{code:"import React, { Component, Fragment } from 'react';\nimport 'antd/dist/antd.css';\nimport { List, Input, Button } from 'antd';\nimport store from './store';\nimport { getInputChangeAction, getAddItemAction, getDelItemAction } from './store/actionCreator';\n\nclass TodoList extends Component {\n  constructor(props) {\n    super(props);\n    this.handleInputChange = this.handleInputChange.bind(this);\n    this.handleStoreChange = this.handleStoreChange.bind(this);\n    this.handleAddItem = this.handleAddItem.bind(this);\n    // \u4ecestore\u4e2d\u83b7\u53d6\u521d\u59cb\u6570\u636e\n    this.state = store.getState();\n    // \u76d1\u542cstore\u7684\u6539\u53d8\u7136\u540e\u8d4b\u7ed9state\n    store.subscribe(this.handleStoreChange);\n  }\n\n  render() {\n    return (\n      <Fragment>\n        <Input\n          style={{ marginTop: '20px', marginLeft: '20px', width: '300px' }}\n          value={this.state.inputValue}\n          onChange={this.handleInputChange}\n        />\n        <Button\n          type=\"primary\"\n          style={{ marginLeft: '10px', marginTop: '20px' }}\n          onClick={this.handleAddItem}\n        >\n          \u65b0\u589e\n        </Button>\n        <List\n          style={{ marginTop: '10px', marginLeft: '20px', width: '350px' }}\n          bordered\n          dataSource={this.state.list}\n          renderItem={(item, index) => (\n            <List.Item onClick={this.handleDelete.bind(this, index)}>{item}</List.Item>\n          )}\n        />\n      </Fragment>\n    );\n  }\n\n  handleAddItem() {\n    const action = getAddItemAction();\n    store.dispatch(action);\n  }\n\n  handleInputChange(e) {\n    const action = getInputChangeAction(e.target.value);\n    store.dispatch(action);\n  }\n\n  handleDelete(index) {\n    const action = getDelItemAction(index);\n    store.dispatch(action);\n  }\n\n  handleStoreChange() {\n    this.setState(store.getState());\n  }\n}\n\nexport default TodoList;",lang:"js"}),l.a.createElement(c["a"],{code:'// @/src/components/Count.js\n// \u7ec4\u4ef6\u8ba2\u9605store\uff0c\u5f53store\u53d1\u751f\u53d8\u5316\u65f6\uff0cstore\u901a\u77e5\u7ec4\u4ef6\u66f4\u65b0\n//\nimport React from \'react\'\nimport {connect} from \'react-redux\'\n\nfunction mapStateToProps(store){\n  return{\n    msg:store.msg,\n    count:store.msg\n  }\n}\n\nfunction mapActionsToProps(dispatch){\n  return{\n    changeCount:()=>{\n      dispatch({\n        type:"increnent"\n      })\n    }\n    changeMsg:(payload)=>{\n      dispatch({\n        type:"ChangeMsg",payload\n      })\n    }\n  }\n}\n\nfunction Count(props){\n  function ChangeCount(){\n    props.changeCount()\n  }\n  function ChangeMsg(){\n    props.changeMsg("Hello Jemtine")\n  }\n  return (\n    <div className="Count">\n      <span>{props.msg}</span>\n      <button onClick={ChangeMsg}>\u6539\u53d8msg</button>\n      <span>{props.count}</span>\n      <button onClick={ChangeCount}>\u6539\u53d8count</button>\n    </div>\n  )\n}\n\nexport default connect(mapStateToProps,mapActionsToProps)(Count)',lang:"js"})))})));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:n})}},sKc2:function(e,t,n){e.exports=n.p+"static/rootStore.d254bc17.jpg"},xPA2:function(e,t,n){e.exports=n.p+"static/1-768x452.f4128db5.png"}}]);