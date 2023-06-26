(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[228],{Cyrt:function(e,n,t){"use strict";t.r(n);var l=t("q1tI"),a=t.n(l),r=t("dEAq"),c=(t("0H/f"),t("N0lm"),t("DgDr"),t("cGlH"),t("ekZX"),t("Bjia")),u=t("tVxl"),m=(t("1pSt"),a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"sourcemap"},a.a.createElement(r["AnchorLink"],{to:"#sourcemap","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"sourceMap"),a.a.createElement("hr",null),a.a.createElement("ol",null,a.a.createElement("li",null,"\u4e3a\u4ec0\u4e48\u9700\u8981sourceMap")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u6e90\u4ee3\u7801\u7ecf\u8fc7 webpack \u5904\u7406\u540e\uff0c\u4f1a\u88ab\u6253\u5305\u6210 bundle \u6587\u4ef6\uff0c\u4f46\u5b83\u4e0d\u5229\u4e8e\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7684\u8c03\u8bd5\uff0c\u8fd9\u65f6\u5019\u5c31\u9700\u8981 sourceMap(\u7ebf\u4e0a\u73af\u5883\u6700\u597d\u4e0d\u8981\u4f7f\u7528\uff0c\u6e90\u7801\u4f1a\u66b4\u9732\u51fa\u6765)")),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5173\u952e\u5b57"),a.a.createElement("th",null,"\u63cf\u8ff0"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"eval"),a.a.createElement("td",null,"\u4f7f\u7528 eval \u51fd\u6570\u5305\u88f9\u6e90\u4ee3\u7801\u3002\u8be5\u5173\u952e\u5b57\u4e0d\u4f1a\u751f\u6210\u5355\u72ec\u7684 .map \u6587\u4ef6\u3002")),a.a.createElement("tr",null,a.a.createElement("td",null,"source map"),a.a.createElement("td",null,"\u4ea7\u751f.map\u6587\u4ef6,\u5e76\u5728 bundle \u6587\u4ef6\u4e2d\u6dfb\u52a0\u5f15\u7528\u6ce8\u91ca")),a.a.createElement("tr",null,a.a.createElement("td",null,"cheap"),a.a.createElement("td",null,"\u4e0d\u5305\u542b\u5217\u4fe1\u606f,\u5ffd\u7565 loader source map")),a.a.createElement("tr",null,a.a.createElement("td",null,"inline"),a.a.createElement("td",null,"\u5c06.map\u4f5c\u4e3aDataUrI\u5d4c\u5165\uff0c\u4e0d\u5355\u72ec\u4ea7\u751f.map\u6587\u4ef6,\u4e0e\u5f62\u5982 eval-* \u7c7b\u578b\u751f\u6210\u7684\u4ee3\u7801\u7c7b\u4f3c\u90fd\u4f1a\u6dfb\u52a0\u5230 bundle \u4e2d")),a.a.createElement("tr",null,a.a.createElement("td",null,"module"),a.a.createElement("td",null,"\u5305\u542bloader\u7684sourceMap")))),a.a.createElement(c["a"],{code:'module.exports = {\n  mode:"none",\n  devtool:"eval"\n}',lang:"js"}),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"\u4f7f\u7528\u573a\u666f")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u4e00\u822c\u662f\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u4f7f\u7528\uff0c\u5982\u679c\u6ca1\u6dfb\u52a0 sourceMap\uff0c\u5f53\u6211\u4eec\u8c03\u8bd5\u7684\u65f6\u5019\u5c31\u662f\u7ecf\u8fc7\u6253\u5305\u540e\u7684\u4ee3\u7801\uff0c\u5982\u4e0b\u6240\u793a")),a.a.createElement("p",null,a.a.createElement("img",{src:t("WzGh"),alt:""})),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5f53\u6211\u4eec\u5f00\u542f sourceMap \u4e4b\u540e\uff0c\u5c31\u80fd\u5728\u5177\u4f53\u7684\u6e90\u4ee3\u7801\u4e0a\u8fdb\u884c\u8c03\u8bd5")),a.a.createElement("p",null,a.a.createElement("img",{src:t("dBTD"),alt:""})),a.a.createElement("hr",null),a.a.createElement("h2",{id:"\u672c\u4f8b\u7684webpack\u914d\u7f6e"},a.a.createElement(r["AnchorLink"],{to:"#\u672c\u4f8b\u7684webpack\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u672c\u4f8b\u7684webpack\u914d\u7f6e"),a.a.createElement("hr",null),a.a.createElement("ol",null,a.a.createElement("li",null,"webpack.dev.js")),a.a.createElement(c["a"],{code:"const path = require('path');\nconst webpack = require('webpack')\nconst glob = require('glob')\nconst HtmlWebpackPlugin = require('html-webpack-plugin')\nconst {CleanWebpackPlugin} = require('clean-webpack-plugin')\n\nconst matchFile = () => {\n  const entry = {};\n  const htmlWebpackPlguins = [];\n\n  const entryFiles = glob.sync('./src/*/index.js')\n\n  Object.keys(entryFiles).map(key => {\n    const entryFile = entryFiles[key];\n\n    const chunkName = entryFile.match(/src\\/(.*)\\/index\\.js/);\n\n    entry[chunkName[1]] = entryFile;\n\n    htmlWebpackPlguins.push(new HtmlWebpackPlugin({\n      template: path.join(__dirname, `src/${chunkName[1]}/index.html`),\n      filename: `${chunkName[1]}.html`,\n      chunks: [chunkName[1]],\n      inject: true,\n      minify: {\n        html5: true,\n        collapseWhitespace: true,\n        preserveLineBreaks: false,\n        minifyCSS: true,\n        minifyJS: true,\n        removeComments: false\n      }\n    })\n    )\n  })\n\n  return {\n    entry,\n    htmlWebpackPlguins\n  }\n}\n\nconst {\n  entry,\n  htmlWebpackPlguins\n} = matchFile()\n\nmodule.exports = {\n  mode: 'development',\n  entry: entry,\n  output: {\n    filename: \"[name][chunkhash:8].js\",\n    path: __dirname + '/dist'\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        use: \"babel-loader\"\n      },\n      {\n        test: /\\.css$/,\n        use: [\n          'style-loader',\n          'css-loader'\n        ]\n      },\n      {\n        test: /\\.less$/,\n        use: [\n          'style-loader',\n          'css-loader',\n          'less-loader'\n        ]\n      },\n      {\n        test: /\\.(png|jpg|jpeg|gif)$/,\n        use: [\n          {\n            loader:\"url-loader\",\n            options:{\n              limit:10240\n            }\n          }\n        ]\n      },\n    ]\n  },\n  plugins:[\n    new webpack.HotModuleReplacementPlugin(),\n    new CleanWebpackPlugin()\n  ].concat(htmlWebpackPlguins),\n  devServer:{\n    static:'./dist',\n    hot: true\n  },\n  devtool:\"source-map\"\n}",lang:"js"})))})));n["default"]=e=>{var n=a.a.useContext(r["context"]),t=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(m,{demos:t})}},WzGh:function(e,n,t){e.exports=t.p+"static/sourceMap1.b937daea.png"},dBTD:function(e,n,t){e.exports=t.p+"static/sourceMap2.2a3b3b8b.png"}}]);