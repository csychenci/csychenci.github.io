(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[62],{kVDF:function(e,t,l){"use strict";l.r(t);var n=l("q1tI"),a=l.n(n),r=l("dEAq"),c=(l("0H/f"),l("N0lm"),l("DgDr"),l("cGlH"),l("ekZX")),u=l("Bjia"),o=l("tVxl"),d=(l("1pSt"),a.a.memo((e=>{var t=e.demos,n=t["useReducer-demo"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"usereducer"},a.a.createElement(r["AnchorLink"],{to:"#usereducer","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"useReducer"),a.a.createElement("hr",null),a.a.createElement("ol",null,a.a.createElement("li",null,"\u4e3a\u4f55\u4f1a\u51fa\u73b0 redux")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u968f\u7740\u5bf9 React \u4f7f\u7528\u7684\u6df1\u5165\uff0c\u7ec4\u4ef6\u7ea7\u522b\u7684 state \u548c\u4ece\u4e0a\u800c\u4e0b\u4f20\u9012\u7684 props \u8fd9\u4e24\u4e2a\u72b6\u6001\u673a\u5236\uff0c\u5df2\u7ecf\u65e0\u6cd5\u6ee1\u8db3\u590d\u6742\u529f\u80fd\u7684\u9700\u8981(\u4f8b\u5982\u8de8\u5c42\u7ea7\u4e4b\u95f4\u7684\u6570\u636e\u5171\u4eab\u548c\u4f20\u9012)"),a.a.createElement("li",null,"\u5355\u4e2a\u7ec4\u4ef6\u7684\u72b6\u6001\u53ef\u4ee5\u7528\u5185\u90e8\u7684 state \u6765\u7ef4\u62a4\uff0c\u7ec4\u4ef6\u5916\u90e8\u662f\u65e0\u6cd5\u8bbf\u95ee\u8fd9\u4e2a\u72b6\u6001\u7684\u3002\u800c Redux \u4f7f\u7528\u5168\u5c40\u552f\u4e00\u7684 store \u7ef4\u62a4\u6574\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7684\u72b6\u6001\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u9875\u9762\u4e0a\u7684\u591a\u4e2a\u7ec4\u4ef6\uff0c\u90fd\u53ef\u4ee5\u4ece\u8fd9\u4e2a store \u83b7\u53d6\u72b6\u6001\uff0c\u4fdd\u8bc1\u7ec4\u4ef6\u4e4b\u95f4\u80fd\u591f\u5171\u4eab\u72b6\u6001"),a.a.createElement("li",null,a.a.createElement("strong",null,"Redux Store")," \u5177\u6709\u4e24\u4e2a\u7279\u70b9\uff1a\u4e00\u662f ",a.a.createElement("strong",null,"Redux Store \u662f\u5168\u5c40\u552f\u4e00\u7684"),"\uff0c\u5373\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e00\u822c\u53ea\u6709\u4e00\u4e2a Store\uff1b\u4e8c\u662f ",a.a.createElement("strong",null,"Redux Store \u662f\u6811\u72b6\u7ed3\u6784"),"\uff0c\u53ef\u4ee5\u66f4\u5929\u7136\u5730\u6620\u5c04\u7ec4\u4ef6\u6811\u7684\u7ed3\u6784\uff0c\u867d\u7136\u4e0d\u662f\u5fc5\u987b\u7684"),a.a.createElement("li",null,"\u901a\u8fc7\u628a\u72b6\u6001\u653e\u5728\u7ec4\u4ef6\u4e4b\u5916\uff0c\u5c31\u53ef\u4ee5\u8ba9 React \u7ec4\u4ef6\u6210\u4e3a\u66f4\u52a0\u7eaf\u7cb9\u7684\u8868\u73b0\u5c42\uff0c\u90a3\u4e48\u5f88\u591a\u5bf9\u4e8e\u4e1a\u52a1\u6570\u636e\u548c\u72b6\u6001\u6570\u636e\u7684\u7ba1\u7406\uff0c\u5c31\u90fd\u53ef\u4ee5\u5728\u7ec4\u4ef6\u4e4b\u5916\u53bb\u5b8c\u6210"),a.a.createElement("li",null,"\u72b6\u6001\u5171\u4eab\u7684\u80fd\u529b\u4f53\u73b0\u5728\u4e24\u4e2a\u573a\u666f\u4e2d\uff1a\u4e00\u662f\u8de8\u7ec4\u4ef6\u7684\u72b6\u6001\u5171\u4eab\uff1b\u4e8c\u662f\u540c\u7ec4\u4ef6\u591a\u4e2a\u5b9e\u4f8b\u5730\u72b6\u6001\u5171\u4eab")),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"redux \u7684\u4e09\u4e2a\u6982\u5ff5")),a.a.createElement("p",null,a.a.createElement("img",{src:l("xs2G"),alt:"reducer\u6982\u5ff5"})),a.a.createElement(o["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u6982\u5ff5"),a.a.createElement("th",null,"\u63cf\u8ff0"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"state"),a.a.createElement("td",null,"\u5373 store\uff0c\u4e00\u822c\u662f\u4e00\u4e2a\u7eaf JS Object")),a.a.createElement("tr",null,a.a.createElement("td",null,"action"),a.a.createElement("td",null,"\u4e5f\u662f\u4e00\u4e2a Object\uff0c\u7528\u4e8e\u63cf\u8ff0\u53d1\u751f\u7684\u52a8\u4f5c")),a.a.createElement("tr",null,a.a.createElement("td",null,"reducer"),a.a.createElement("td",null,"\u4e00\u4e2a\u51fd\u6570\uff0c\u63a5\u6536 action \u548c state \u4f5c\u4e3a\u53c2\u6570\uff0c\u901a\u8fc7\u8ba1\u7b97\u5f97\u5230\u65b0\u7684 store")))),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5728 Redux \u4e2d\uff0c\u6240\u6709\u5bf9\u4e8e Store \u7684\u4fee\u6539\u90fd\u5fc5\u987b\u901a\u8fc7 Reducer \u53bb\u5b8c\u6210\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u4fee\u6539 Store\u3002\u8fd9\u6837\u4e00\u65b9\u9762\u53ef\u4ee5 ",a.a.createElement("strong",null,"\u4fdd\u8bc1\u6570\u636e\u7684\u4e0d\u53ef\u53d8\u6027"),"\uff0c\u540c\u65f6\u8fd8\u6709\uff1a",a.a.createElement("strong",null,"\u53ef\u9884\u6d4b\u6027\uff08Predictable\uff09"),"\uff1a\u5373\u7ed9\u5b9a\u4e00\u4e2a\u521d\u59cb\u72b6\u6001\u548c\u4e00\u7cfb\u5217\u7684 Action\uff0c\u4e00\u5b9a\u80fd\u5f97\u5230\u4e00\u81f4\u7684\u7ed3\u679c\uff0c\u540c\u65f6\u8fd9\u4e5f\u8ba9\u4ee3\u7801\u66f4\u5bb9\u6613\u6d4b\u8bd5\u3002",a.a.createElement("strong",null,"\u6613\u4e8e\u8c03\u8bd5"),"\uff1a\u53ef\u4ee5\u8ddf\u8e2a Store \u4e2d\u6570\u636e\u7684\u53d8\u5316\uff0c\u751a\u81f3\u6682\u505c\u548c\u56de\u653e\u3002\u56e0\u4e3a\u6bcf\u6b21 Action \u4ea7\u751f\u7684\u53d8\u5316\u90fd\u4f1a\u4ea7\u751f\u65b0\u7684\u5bf9\u8c61\uff0c\u800c\u6211\u4eec\u53ef\u4ee5\u7f13\u5b58\u8fd9\u4e9b\u5bf9\u8c61\u7528\u4e8e\u8c03\u8bd5")),a.a.createElement(u["a"],{code:"import { createStore } from 'redux';\n\nconst initialState = { count: 0 };\n// \u5b9a\u4e49 store \u7684\u521d\u59cb\u503c\n\n// reducer\uff0c\u7528\u4e8e\u5904\u7406action\u8fd4\u56de\u7684state\nconst counterReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'counter/add':\n      return { count: state.count + 1 };\n    case 'counter/del':\n      return { count: state.count + 1 };\n    default:\n      return state;\n  }\n};\n\n// \u4f7f\u7528redux\u63d0\u4f9b\u7684createStore\u521b\u5efa\u4e00\u4e2astore\uff0c\u5b83\u63a5\u6536\u4e00\u4e2aReducer(\u7eaf\u51fd\u6570)\u4f5c\u4e3a\u53c2\u6570\nconst store = createStore(counterReducer);\n\nstore.subscribe(() => console.log(store.getState()));\n\n// \u521b\u5efa\u4e00\u4e2a\u8ba1\u65f6\u5668+1\u7684\u52a8\u4f5c\nconst addAction = { type: 'counter/add' };\n\n// \u521b\u5efa\u4e00\u4e2a\u8ba1\u65f6\u5668-1\u7684\u52a8\u4f5c\nconst delAction = { type: 'counter/del' };",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u90a3\u4e48\uff0c\u6574\u4e2a Redux \u7684\u903b\u8f91\u5c31\u662f\uff1a\u9996\u5148\u521b\u5efa Store\uff0c\u518d\u5229\u7528 Reducer \u548c Action \u4fee\u6539 Store\uff0c\u6700\u540e subscribe \u76d1\u542c Store \u7684\u53d8\u5316")),a.a.createElement("ol",{start:3},a.a.createElement("li",null,"redux \u6620\u5c04\u5230\u7ec4\u4ef6\u4e2d")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u6211\u4eec\u9700\u8981 Redux \u7684\u72b6\u6001\u4f53\u73b0\u5230 UI \u4e0a\uff0c\u5982\u4f55\u5efa\u7acb Redux \u548c React \u7684\u8054\u7cfb\u5462?\u4e3b\u8981\u662f\u4e24\u70b9\uff1a\u4e00\u662f ",a.a.createElement("strong",null,"React \u7ec4\u4ef6\u80fd\u5728\u4f9d\u8d56\u7684 Store \u7684\u6570\u636e\u53d8\u5316\u65f6\uff0c\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6"),"\uff0c\u4e8c\u662f ",a.a.createElement("strong",null,"\u5728 React \u7ec4\u4ef6\u4e2d\uff0cdispatch \u4e00\u4e2a action\uff0c\u89e6\u53d1 Store \u7684\u66f4\u65b0")),a.a.createElement("li",null,"Hooks \u7684\u672c\u8d28\u662f\u63d0\u4f9b\u4e86\u8ba9 React \u7ec4\u4ef6\u80fd\u591f\u7ed1\u5b9a\u5230\u67d0\u4e2a\u53ef\u53d8\u7684\u6570\u636e\u6e90\u7684\u80fd\u529b\u3002\u5728 Redux \u4e2d\uff0c\u8fd9\u4e2a\u53ef\u53d8\u7684\u5bf9\u8c61\u5c31\u662f Store"))),a.a.createElement(c["default"],t["useReducer-demo"].previewerProps,a.a.createElement(n,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("em",null,"react-redux")," \u662f\u7528\u4e8e\u8fde\u63a5 React \u4e0e Redux \u7684\uff0c\u4e3a\u4e86\u786e\u4fdd\u9700\u8981\u7ed1\u5b9a\u7684\u7ec4\u4ef6\u80fd\u591f\u8bbf\u95ee\u5230\u5168\u5c40\u552f\u4e00\u7684 Redux Store\uff0c\u5b83\u5229\u7528\u4e86 Context \u673a\u5236\u53bb\u5b58\u653e Store \u7684\u4fe1\u606f\uff0c\u4e00\u822c\u9700\u8981\u5c06\u8fd9\u4e2a context \u4f5c\u4e3a\u5e94\u7528\u7a0b\u5e8f\u7684\u6839\u8282\u70b9")),a.a.createElement("ol",{start:4},a.a.createElement("li",null,"\u5904\u7406\u5f02\u6b65\u903b\u8f91")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5728 Redux \u4e2d\uff0c\u5904\u7406\u5f02\u6b65\u903b\u8f91\u88ab\u79f0\u4e3a ",a.a.createElement("strong",null,"\u5f02\u6b65 Action"),"\u3002Redux \u63d0\u4f9b\u4e86 middleware \u8fd9\u6837\u7684\u673a\u5236\uff0c\u7528\u4e8e\u5b9e\u73b0\u5f02\u6b65 action\u3002middleware \u53ef\u4ee5\u8ba9\u4f60\u63d0\u4f9b\u4e00\u4e2a\u62e6\u622a\u5668\u5728 reducer \u5904\u7406 action \u4e4b\u524d\u88ab\u8c03\u7528\u3002\u5728\u8fd9\u4e2a\u62e6\u622a\u5668\u4e2d\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u5904\u7406\u83b7\u5f97\u7684 action\u3002\u65e0\u8bba\u662f\u628a\u8fd9\u4e2a action \u76f4\u63a5\u4f20\u9012\u5230 reducer\uff0c\u6216\u8005\u6784\u5efa\u65b0\u7684 action \u53d1\u9001\u5230 reduce")),a.a.createElement(u["a"],{code:"// redux-thunk\u7684\u6838\u5fc3\u4ee3\u7801\uff0c\u5220\u6389\u4e86ts\u58f0\u660e\u4e0e\u6ce8\u91ca\u90e8\u5206\nfunction createThunkMiddleware(extraArgument) {\n  const middleware =\n    ({ dispatch, getState }) =>\n    (next) =>\n    (action) => {\n      if (typeof action === 'function') {\n        // \u5224\u65adaction\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u6267\u884c\u8be5action\u5e76\u5c06dispatch\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u5b83\n        return action(dispatch, getState, extraArgument);\n      }\n\n      return next(action);\n      // \u5982\u679c\u4e0d\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u76f4\u63a5\u5c06action\u4f20\u9012\u7ed9Reducer\n    };\n  return middleware;\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"Redux \u4e2d\u7684 Action \u4e0d\u4ec5\u4ec5\u53ef\u4ee5\u662f\u4e00\u4e2a Object\uff0c\u5b83\u53ef\u4ee5\u662f\u4efb\u4f55\u4e1c\u897f\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u51fd\u6570\u3002\u901a\u8fc7 Redux \u63d0\u4f9b\u7684 ",a.a.createElement("code",null,"redux-thunk")," \u8fd9\u6837\u7684\u4e2d\u95f4\u4ef6\uff0c\u5b83\u5982\u679c\u53d1\u73b0\u63a5\u6536\u5230\u7684 action \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u90a3\u4e48\u5c31\u4e0d\u4f1a\u4f20\u9012\u7ed9 Reducer\uff0c\u800c\u662f\u6267\u884c\u8fd9\u4e2a\u51fd\u6570\uff0c\u5e76\u628a dispatch \u4f5c\u4e3a\u53c2\u6570\u4f20\u7ed9\u8fd9\u4e2a\u51fd\u6570\uff0c\u4ece\u800c\u5728\u8fd9\u4e2a\u51fd\u6570\u4e2d\u4f60\u53ef\u4ee5\u81ea\u7531\u51b3\u5b9a\u4f55\u65f6\uff0c\u5982\u4f55\u53d1\u9001 Action")),a.a.createElement(u["a"],{code:"import { createStore, applyMiddleware } from 'redux';\nimport thunkMiddleware from 'redux-thunk';\nimport rootReducer from './reducer';\n\nconst composedEnhancer = applyMiddleware(thunkMiddleware);\n// \u4f7f\u7528\u62e6\u622a\u5668\uff0c\u6307\u5b9a\u4f7f\u7528 redux-thunk\u4e2d\u95f4\u4ef6\uff0c\u5728action\u88abreducer\u5904\u7406\u4e4b\u524d\nconst store = createStore(rootReducer, composedEnhancer);\n\nconst fetchData = () => {\n  return (dispatch) => {\n    dispatch({ type: 'FETCH_DATA_BEGIN' });\n    fetch()\n      .then((res) => {\n        dispatch({ type: 'FETCH_DATA_SUCCESS', data: res });\n      })\n      .catch((err) => {\n        dispatch({ type: 'FETCH_DATA_FAILED', error: err });\n      });\n  };\n};\n\nconst dataList = () => {\n  const dispatch = useDispatch();\n  // dispatch\u4e00\u4e2a\u51fd\u6570 \u5b83\u5c06\u7531 redux-thunk \u4e2d\u95f4\u4ef6\u53bb\u6267\u884c\n  dispatch(fetchData());\n};",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u901a\u8fc7 dispatch \u4e00\u4e2a\u51fd\u6570\u7684\u65b9\u5f0f\uff0c\u5c06\u5176\u4e2d\u7684\u5f02\u6b65\u903b\u8f91\u4ea4\u7531\u4e2d\u95f4\u4ef6\u53bb\u5904\u7406\uff0c\u7531\u6b64\u5b9e\u73b0\u4e86\u5f02\u6b65\u903b\u8f91\u7684\u91cd\u7528\uff0c\u8fd9\u79cd\u673a\u5236\u5c31\u79f0\u4e3a ",a.a.createElement("em",null,"\u5f02\u6b65 Action"),"\u3002\u5b83\u5e76\u4e0d\u662f\u4e00\u4e2a\u5177\u4f53\u7684\u6982\u5ff5\uff0c\u800c\u662f Redux \u7684\u4e00\u79cd\u4f7f\u7528\u6a21\u5f0f\uff0c\u901a\u8fc7\u7ec4\u5408\u4f7f\u7528 ",a.a.createElement("em",null,"\u540c\u6b65 Action")," \u53bb\u5904\u7406\u5f02\u6b65\u903b\u8f91")),a.a.createElement("ol",{start:5},a.a.createElement("li",null,"\u72b6\u6001\u7ba1\u7406\u7684\u539f\u5219")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u4e00\u662f\u8981\u4fdd\u8bc1 ",a.a.createElement("strong",null,"\u72b6\u6001\u6700\u5c0f\u5316\uff0c\u907f\u514d\u5197\u4f59\u72b6\u6001")," \u539f\u5219\u3002\u5728\u4fdd\u8bc1 State \u5b8c\u6574\u6027\u7684\u540c\u65f6\uff0c\u4e5f\u8981\u4fdd\u8bc1\u5b83\u7684\u6700\u5c0f\u5316\u3002\u5728\u5b9a\u4e49\u7ec4\u4ef6 State \u4e4b\u524d\uff0c\u8981\u786e\u5b9a\u8fd9\u4e2a\u72b6\u6001\u662f\u5426\u662f\u5fc5\u987b\u7684?\u662f\u5426\u80fd\u901a\u8fc7\u8ba1\u7b97\u5f97\u5230?"),a.a.createElement("li",null,"\u4e8c\u662f\u8981 ",a.a.createElement("strong",null,"\u907f\u514d\u4e2d\u95f4\u72b6\u6001\uff0c\u786e\u4fdd\u552f\u4e00\u7684\u6570\u636e\u6e90"),"\u3002\u5f53\u539f\u59cb\u72b6\u6001\u6570\u636e\u6765\u81ea\u67d0\u4e2a\u5916\u90e8\u6570\u636e\u6e90\uff0c\u800c\u975e state \u6216 props \u65f6\uff0c\u9700\u8981\u786e\u4fdd\u5b83\u662f\u552f\u4e00\u7684\u6570\u636e\u6e90\uff0c\u907f\u514d\u5b9a\u4e49\u4e2d\u95f4\u72b6\u6001 state")))))})));t["default"]=e=>{var t=a.a.useContext(r["context"]),l=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(d,{demos:l})}},xs2G:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAADGCAYAAAA3zacAAAAAAXNSR0IArs4c6QAABj50RVh0bXhmaWxlACUzQ214ZmlsZSUyMGhvc3QlM0QlMjJhcHAuZGlhZ3JhbXMubmV0JTIyJTIwbW9kaWZpZWQlM0QlMjIyMDIyLTAzLTA1VDE0JTNBMzklM0EwNi44NTNaJTIyJTIwYWdlbnQlM0QlMjI1LjAlMjAoV2luZG93cyUyME5UJTIwMTAuMCUzQiUyMFdpbjY0JTNCJTIweDY0KSUyMEFwcGxlV2ViS2l0JTJGNTM3LjM2JTIwKEtIVE1MJTJDJTIwbGlrZSUyMEdlY2tvKSUyMENocm9tZSUyRjk4LjAuNDc1OC4xMDIlMjBTYWZhcmklMkY1MzcuMzYlMjIlMjBldGFnJTNEJTIyd0V0ZU5WN1ZabFVWRTlNTEoxcUQlMjIlMjB2ZXJzaW9uJTNEJTIyMTYuNi42JTIyJTIwdHlwZSUzRCUyMmRldmljZSUyMiUzRSUzQ2RpYWdyYW0lMjBpZCUzRCUyMmNpLTYwMktwZkYtRnhWWTFSVlhfJTIyJTIwbmFtZSUzRCUyMlBhZ2UtMSUyMiUzRTdWakxjcHN3RlAwYUwlMkJOQkNEQXNFJTJCZTFTS2VadWpOTmxxcTRnQnFNWENGaU8xOWZDU1FEeG1rZWpkMTAwbzBIbmZ1UXVPZmNhOWtqUEoydkxnUlpaSjk0RFBuSWRlTFZDSiUyQk9YRGZFZ2ZyVXdMb0JmTmR2Z0ZTd3VJRlFDOHpZQXhqUU1XakZZaWg3anBMelhMSkZINlM4S0lES0hrYUU0TXUlMkJXOEx6JTJGcTRMa3BvZG5SYVlVWkxEd08wYmkyVm0wS2pyZmdrc3pleldybU1zM3dtOVN3V3ZDck5od1F0b0xITmk4eGpYTWlNeFgzWWdmRGJDVThHNWJKN21xeW5rdXF5MlpFM2MlMkJTUFd6WmtGRlBJNUFaSDMlMkJUeTVuUHlVb1glMkIxcERmVGxZaXVqbHl2U1hOUDhzb1VZeWFKTk85UXlyVXRVZjJPb0ZPaEVUNVpaa3pDYkVHb3RpNlZKaFNXeVhsdXpCbWhXU1hnUXVPbm5nSVNsdWRUbm5OUko4TkpRbWtVS2J5VWd0OUJ4NElESE9GNFk3RnNPRG9ITCUyQlRNSE1qVm0zREJIaFJHN0s0a1oybWhucWtxQ0toOEolMkZjZ0pGTXNIeHZEbk1XeERqOHA3MEJTbTNmREM3S2JOUHBFZWhOVEhaVUlWbyUyRldIVzNZVkEwQ2ZBNVNySldMQ1RoQ3BobE1jJTJCRFFkTXV5bGRyRVFGbEhaTmdLM0lnNzNXUnVTVllQaHVlWGNPNFBPUDhDY1VWVnpmYktPcVhnSjhtQTlSZ1NVdVZ5SiUyQmVwSURGVGRiYSUyQmRYdTlxUlRTbkpUbExpWDBOUElHTWdoUVR3VmU0QXhVRU9KRHFpQVlxS0NBcFFJJTJCUVA4ZmpIUXZHcnY5N3ZmOUllJTJGSUNjYiUyQklhbWZET2lGV0gwaG1xVnBzajdqWE1pTXA3d2clMkJSWG5Dd1AlMkJBQ25YWmx5U1N2SyUyQkNtREY1STJ1cFhxNVpuWGJzWnl1VEpucnhkb3VDdldDblNDOXZPM2EyckI2MWNiRnglMkZvaW9KWjhBY1hYakJXMWlJaXc0enhzdk14S0M2amtsYUJ3RFlLcHNvTFFjbVpGYWx4VlpBcHloM0ZiaWp1VnB6WTZaNXFVanBCMGlYOHZJOFZJZmFSbnpPN21lRSUyQjI5MUNZQW5JaTJYMyUyRkpMc1Vaa0t2T1ZObjNBZ2FvYWclMkZ4cXlXYkFwVDFDYXFleHQ1S2xIbzl4TVpBcllUMVlMZnZNOGY5RUE0R0glMkZIVkRKZTdIdnlKVWtZZnBDYkQlMkZLY2QzYnppZDd4NEh2SEElMkJ5MVUlMkZrdEIxJTJGNDNNSG43MmZ3T2M1NDZ4NXZmOWk5ZFBRZG9XQXJsZWZnZ3c0JTJGN1B6dmczJTJCMUQ3eSUyRjNBZTRQOU05aE1iJTJCNiUyRm9BdWM0NFF2NEVPeGhQbkVrWWhIdTZFYWhsJTJCemRMNDk3JTJCallYUGZnRSUzRCUzQyUyRmRpYWdyYW0lM0UlM0MlMkZteGZpbGUlM0W8tg07AAAcs0lEQVR4Xu2dC1gV1drHX0AREG+IZpFZWkmlWSZpYVZcvVSeMLUij30flZWWkaZdjmmZmZeiOlpax/NVZqUVJ0+pKIgIktf00FHDvOId5aYgd+R73mmt3bDdmz2zmRlm1n7X8/i42bOu/3f99rvWmpm1vICFAeGD4tq39p1eD9C5tq7er7S8uj2/5qn/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"}}]);