(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"/7QA":function(e,t,n){"use strict";n.r(t),n.d(t,"Foo",(function(){return c})),n.d(t,"Button",(function(){return f})),n.d(t,"Menu",(function(){return h})),n.d(t,"SubMenu",(function(){return E})),n.d(t,"MenuItem",(function(){return N})),n.d(t,"Switch",(function(){return g})),n.d(t,"Slider",(function(){return j})),n.d(t,"MimicryBtn",(function(){return S}));var a,l,r=n("q1tI"),i=n.n(r),c=e=>{var t=e.title;return i.a.createElement("h1",null,t)},u=n("0Owb"),s=n("PpiC"),o=n("TSYQ"),d=n.n(o),m=(n("vy4x"),["btnType","disabled","className","size","children","href"]);(function(e){e["lg"]="lg",e["sm"]="sm"})(a||(a={})),function(e){e["Primary"]="primary",e["Default"]="default",e["Danger"]="danger",e["Link"]="link"}(l||(l={}));var v=e=>{var t=e.btnType,n=e.disabled,a=(e.className,e.size),r=e.children,c=e.href,o=Object(s["a"])(e,m),v=d()("csy__btn",{["csy__btn__".concat(t)]:t,["csy__btn__".concat(a)]:a,disabled:t===l.Link&&n});return t===l.Link&&c?i.a.createElement("a",Object(u["default"])({className:v,href:c},o),r):i.a.createElement("button",Object(u["default"])({className:v,disabled:n},o),r)};v.defaultProps={disabled:!1,btnType:l.Default};var f=v,b=n("tJVT"),p=(n("qsLE"),Object(r["createContext"])({index:"0"})),y=e=>{var t=e.className,n=e.mode,a=e.style,l=e.children,c=e.defaultIndex,u=e.onSelect,s=e.defaultOpenSubMenus,o=Object(r["useState"])(c),m=Object(b["default"])(o,2),v=m[0],f=m[1],y=d()("csy__menu",t,{csy__menu__vertical:"vertical"===n,"menu-horizontal":"vertical"!==n}),h=e=>{f(e),u&&u(e)},_={index:v||"0",onSelect:h,mode:n,defaultOpenSubMenus:s},E=()=>i.a.Children.map(l,((e,t)=>{var n=e;n.type.displayName;return i.a.cloneElement(n,{index:"".concat(t)})}));return i.a.createElement("ul",{className:y,style:a},i.a.createElement(p.Provider,{value:_},E()))};y.defaultProps={defaultIndex:"0",mode:"horizontal",defaultOpenSubMenus:[]},y.displayName="Menu";var h=y,_=e=>{var t,n,a=e.index,l=e.title,c=e.children,s=e.className,o=Object(r["useContext"])(p),m=!a||"vertical"!==o.mode||(null===o||void 0===o||null===(t=o.defaultOpenSubMenus)||void 0===t?void 0:t.includes(a)),v=Object(r["useState"])(m),f=Object(b["default"])(v,2),y=f[0],h=f[1],_=e=>{e.preventDefault(),h(!y)},E=(e,t)=>{clearTimeout(n),e.preventDefault(),n=setTimeout((()=>{h(t)}),300)},O="vertical"===o.mode?{onClick:_}:{},N="vertical"!==o.mode?{onMouseEnter:e=>{E(e,!1)},onMouseLeave:e=>{E(e,!0)}}:{},g=d()("csy__menu__item csy__submenu__item",s,{"is-active":(null===o||void 0===o?void 0:o.index)===a}),j=()=>{var e=d()("csy__submenu",{"menu-opened":y}),t=i.a.Children.map(c,((e,t)=>{var n=e;if("MenuItem"===n.type.displayName)return i.a.cloneElement(n,{index:"".concat(a,"-").concat(t)});console.error("Warning\uff1aSubMenu has a child which is not a MenuItem Component")}));return i.a.createElement("ul",{className:e},t)};return i.a.createElement("li",Object(u["default"])({key:a,className:g},N),i.a.createElement("div",Object(u["default"])({className:"submenu-title"},O),l),j())};_.displayName="SubMenu";var E=_,O=e=>{var t=e.index,n=e.disabled,a=e.className,l=e.style,c=e.children,u=Object(r["useContext"])(p),s=d()("csy__menu__item",a,{"is-disabled":n,"is-active":u.index===t}),o=()=>{(null===u||void 0===u?void 0:u.onSelect)&&!n&&"string"===typeof t&&(null===u||void 0===u||u.onSelect(t))};return i.a.createElement("li",{className:s,style:l,onClick:o},c)};O.displayName="MenuItem";var N=O;n("7/xp");function g(e){var t=e.disabled,n=void 0!==t&&t,a=e.defaultChecked,l=void 0!==a&&a,c=e.onColor,u=void 0===c?"#86d993":c,s=e.offColor,o=void 0===s?"rgb(251, 251, 251)":s,m=e.className,v=e.onChange,f=e.style,p=Object(r["useState"])(null!==l&&void 0!==l&&l),y=Object(b["default"])(p,2),h=y[0],_=y[1],E=Object(r["useRef"])(null),O=Object(r["useRef"])(null),N=()=>{var e,t,n=h?"translate(0px)":"translate(".concat((null===E||void 0===E||null===(e=E.current)||void 0===e?void 0:e.clientWidth)-(null===O||void 0===O||null===(t=O.current)||void 0===t?void 0:t.clientWidth),"px)");O.current.style.transform=n},g=e=>{null===e||void 0===e||e.preventDefault(),n||(N(),_(!h),null===v||void 0===v||v(!h))},j=d()("switch-wrap",{on:h,disabled:n},m),x=d()("switch-btn",{active:h,right:l});return i.a.createElement("label",{className:"toggle-switch",style:f},i.a.createElement("input",{className:"toggle-input",type:"checkbox",checked:h,onChange:()=>{},onClick:g}),i.a.createElement("div",{ref:E,className:j,style:{background:h?u:o}},i.a.createElement("span",{ref:O,className:x})))}n("QIlQ");function j(e){var t=Object(r["useRef"])(null),n=Object(r["useRef"])(null),a=Object(r["useState"])(!1),l=Object(b["default"])(a,2),c=(l[0],l[1],e=>{});return Object(r["useEffect"])((()=>{var e;return null===t||void 0===t||null===(e=t.current)||void 0===e||e.addEventListener("touchmove",x,!1),()=>{var e;null===t||void 0===t||null===(e=t.current)||void 0===e||e.removeEventListener("touchmove",x)}}),[]),i.a.createElement("div",{ref:t,className:"toggle-slider"},i.a.createElement("span",{onMouseDown:c,ref:n,className:"slider"}))}var x=e=>{e.preventDefault?e.preventDefault():e.preventDefault=!1},S=(n("7sQJ"),e=>i.a.createElement("div",{className:"mimicry-btn-container"},Array(2).fill(7).map(((e,t)=>i.a.createElement("div",{key:t,className:"mimicry-btn-box"},i.a.createElement("div",{className:"mimicry-btn-img"},i.a.createElement("img",{src:"test.png",alt:""})),i.a.createElement("p",null,"\u6d4b\u8bd5\u6587\u5b57"))))))},"7/xp":function(e,t,n){},"7sQJ":function(e,t,n){},QIlQ:function(e,t,n){},TSYQ:function(e,t,n){var a,l;(function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)){if(a.length){var i=r.apply(null,a);i&&e.push(i)}}else if("object"===l)if(a.toString===Object.prototype.toString)for(var c in a)n.call(a,c)&&a[c]&&e.push(c);else e.push(a.toString())}}return e.join(" ")}e.exports?(r["default"]=r,e.exports=r):(a=[],l=function(){return r}.apply(t,a),void 0===l||(e.exports=l))})()},qsLE:function(e,t,n){},vy4x:function(e,t,n){}}]);