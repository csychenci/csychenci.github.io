(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[240],{PlUZ:function(n,e,a){"use strict";a.r(e);var t=a("q1tI"),l=a.n(t),s=a("dEAq"),c=(a("0H/f"),a("N0lm"),a("DgDr"),a("cGlH"),a("ekZX"),a("Bjia")),r=(a("tVxl"),a("1pSt"),l.a.memo((n=>{n.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u6587\u4ef6\u6307\u7eb9"},l.a.createElement(s["AnchorLink"],{to:"#\u6587\u4ef6\u6307\u7eb9","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6587\u4ef6\u6307\u7eb9"),l.a.createElement("hr",null),l.a.createElement("ol",null,l.a.createElement("li",null,"\u4ec0\u4e48\u662f\u6587\u4ef6\u6307\u7eb9")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4e00\u822c\u662f\u6307\u6253\u5305\u540e\u8f93\u51fa\u7684\u6587\u4ef6\u540d\u7684\u540e\u7f00\uff0c\u5f88\u591a\u7f51\u7ad9\u5728\u5b83\u7684\u5f00\u53d1\u8005\u6a21\u5f0f\u4e0b\u90fd\u6709\u8fd9\u79cd\u60c5\u51b5\uff0c\u5982\u4e0b\u6240\u793a")),l.a.createElement("p",null,l.a.createElement("img",{src:a("ybcD"),alt:""})),l.a.createElement("ul",null,l.a.createElement("li",null,"\u8fd9\u79cd\u5c31\u662f\u6587\u4ef6\u6307\u7eb9\uff0c\u5b83\u7684\u540e\u9762\u7684\u51e0\u4e2a\u5b57\u7b26\u6587\u4ef6\u6307\u7eb9\uff0c\u5b83\u53ef\u4ee5\u7528\u6765\u505a\u4e00\u4e9b\u7248\u672c\u7ba1\u7406")),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"\u751f\u6210\u6587\u4ef6\u6307\u7eb9")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6587\u4ef6\u6307\u7eb9\u4e00\u822c\u53ef\u4ee5\u751f\u6210\u4e09\u79cd\u4e0d\u540c\u5f62\u5f0f\u7684\uff1aHash\u3001Chunkhash\u3001Contenthash"),l.a.createElement("li",null,l.a.createElement("code",null,"Hash"),"\uff1a\u548c\u6574\u4e2a\u9879\u76ee\u7684\u6784\u5efa\u6709\u5173\uff0c\u53ea\u8981\u9879\u76ee\u6587\u4ef6\u6709\u4fee\u6539\uff0c\u6574\u4e2a\u9879\u76ee\u6784\u5efa\u7684 hash \u503c\u5c31\u4f1a\u66f4\u6539"),l.a.createElement("li",null,l.a.createElement("code",null,"Chunkhash"),"\uff1a\u548c webpack \u6253\u5305\u7684 chunk \u6709\u5173\uff0c\u4e0d\u540c\u7684 entry \u4f1a\u751f\u6210\u4e0d\u540c\u7684 chunkhash \u503c\uff0c\u4e0d\u4f1a\u56e0\u4e3a\u5176\u4ed6 chunk \u7684\u6587\u4ef6\u5185\u5bb9\u53d8\u5316\u800c\u91cd\u65b0\u6784\u5efa"),l.a.createElement("li",null,l.a.createElement("code",null,"Contenthash"),"\uff1a\u6839\u636e\u6587\u4ef6\u5185\u5bb9\u6765\u5b9a\u4e49 hash\uff0c\u6587\u4ef6\u5185\u5bb9\u4e0d\u53d8\uff0c\u5219 contenthash \u4e0d\u53d8")),l.a.createElement(c["a"],{code:"npm i mini-css-extract-plugin -D",lang:"bash"}),l.a.createElement(c["a"],{code:"/** \n  * js \u4e00\u822c\u4f7f\u7528 chunkhash \u6765\u751f\u6210\u6587\u4ef6\u6307\u7eb9\n  * css \u4e00\u822c\u4f7f\u7528 contenthash \u6765\u751f\u6210\u6587\u4ef6\u6307\u7eb9\u3002\n  * css\u6587\u4ef6\u5982\u679c\u4f7f\u7528 style-loader/css-loader\uff0ccss\u4f1a\u88ab style-loader \u63d2\u5165\u5230 head \u6807\u7b7e\u4e2d\uff0c\u6b64\u65f6\u5e76\u6ca1\u6709\u72ec\u7acb\u7684css\u6587\u4ef6\uff0c\u6b64\u65f6\u9700\u8981 plugin \u6765\u628a style-loader \u4e2d\u7684 css \u63d0\u53d6\u6210\u4e00\u4e2a\u72ec\u7acb\u7684\u6587\u4ef6\n  * style-loader \u4e0e mini-css-extract-plugin \u529f\u80fd\u662f\u51b2\u7a81\u7684\uff0c\u4f7f\u7528\u9700\u8981\u5c06 style-loader \u53bb\u6389\uff0c\u66ff\u6362\u6210 mini-css-extract-plugin \u7684 loader\n*/\nconst MiniCssExtractPlugin = require('mini-css-extract-plugin');\n\nmodule.exports = {\n  entry: {\n    app: \"./src/app.js\",\n    appAdmin: \"./src/admin.js\"\n  },\n  mode:\"production\",\n  output: {\n    filename: \"[name][chunkhash:8].js\",\n    // \u8bbe\u7f6e js \u6587\u4ef6\u6307\u7eb9\n    path: __dirname + '/dist'\n  },\n  module: {\n    rule:[\n      {\n        test: /\\.css$/,\n        use: [\n          MiniCssExtractPlugin.loader,\n          // \u4f7f\u7528MiniCssExtractPlugin\u7684loader\u6765\u63d0\u53d6css\u6210\u4e00\u4e2a\u72ec\u7acb\u7684\u6587\u4ef6\n          'css-loader'\n        ]\n      },\n      {\n        test: /\\.less$/,\n        use: [\n          MiniCssExtractPlugin.loader,\n          // \u4f7f\u7528MiniCssExtractPlugin\u7684loader\u6765\u63d0\u53d6css\u6210\u4e00\u4e2a\u72ec\u7acb\u7684\u6587\u4ef6\n          'css-loader',\n          'less-loader'\n        ]\n      },\n    ]\n  }\n  plugins:[\n    new MiniCssExtractPlugin({\n      filename:\"[name][contenthash:8].css\"\n      // \u914d\u7f6eMiniCssExtractPlugin\u4ee5contenthash\u7684\u65b9\u5f0f\u751f\u6210\u6587\u4ef6\u6307\u7eb9\n    })\n  ]\n}",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u56fe\u7247\u7684\u6587\u4ef6\u6307\u7eb9\u8bbe\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u8bbe\u7f6e file-loader \u7684 name\uff0c\u4f7f\u7528 hash")),l.a.createElement(c["a"],{code:'/** \n  * \u8fd9\u91cc\u7684 [hash] \u5360\u4f4d\u7b26\u662f\u6587\u4ef6\u5185\u5bb9\u7684 hash\uff0c\u9ed8\u8ba4\u662f md5 \u751f\u6210\uff0c\u4e0e\u4e0a\u9762\u7684 [hash] \u4e0d\u4e00\u6837\n  * file-loader \u5360\u4f4d\u7b26\u542b\u4e49\n  * [ext] \u8d44\u6e90\u540e\u7f00\u540d\n  * [name] \u6587\u4ef6\u540d\u79f0\n  * [path] \u6587\u4ef6\u7684\u76f8\u5bf9\u8def\u5f84\n  * [floder] \u6587\u4ef6\u6240\u5728\u7684\u6587\u4ef6\u5939\n  * [contenthash] \u6587\u4ef6\u7684\u5185\u5bb9hash\uff0c\u9ed8\u8ba4\u662fmd5\u751f\u6210\n  * [hash] \u6587\u4ef6\u7684\u5185\u5bb9hash\uff0c\u9ed8\u8ba4\u662fmd5\u751f\u6210\n  * [emoji] \u4e00\u4e2a\u968f\u673a\u7684\u6307\u4ee3\u6587\u4ef6\u5185\u5bb9\u7684 emoji\n*/\nmodule.exports = {\n  entry: {\n    app: "./src/app.js",\n    appAdmin: "./src/admin.js"\n  },\n  mode:"production",\n  output: {\n    filename: "[name]_[chunkhash:8].js",\n    // \u8bbe\u7f6e js \u6587\u4ef6\u6307\u7eb9\n    path: __dirname + \'/dist\'\n  },\n  module:{\n    rules:[\n      {\n        test:/\\.(png|jpg|jpeg|git)/,\n        use:[\n          {\n            loader:\'file-loader\',\n            options:{\n              name:\'img/[name]_[hash:8].[ext]\'\n            }\n          }\n        ]\n      }\n    ]\n  }\n}',lang:"js"}),l.a.createElement("ol",{start:3},l.a.createElement("li",null,"\u533a\u5206\u751f\u4ea7\u4e0e\u5f00\u53d1\u73af\u5883\u914d\u7f6e")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u65b0\u5efa webpack.prod.js \u6587\u4ef6\uff0c\u7528\u6765\u914d\u7f6e\u751f\u4ea7\u73af\u5883\u7684 webpack \u914d\u7f6e")),l.a.createElement(c["a"],{code:"const path = require('path');\nconst webpack = require('webpack')\nconst MiniCssExtractPlugin = require('mini-css-extract-plugin')\n\nmodule.exports = {\n  mode: 'production',\n  entry: {\n    app: \"./src/app.js\",\n    appAdmin: \"./src/admin.js\"\n  },\n  output: {\n    filename: \"[name]_[chunkhash:8].js\",\n    path: __dirname + '/dist'\n  },\n  plugins:[\n    new MiniCssExtractPlugin({\n      filename:\"[name][contenthash:8].css\"\n    })\n  ],\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        use: \"babel-loader\"\n      },\n      {\n        test: /\\.css$/,\n        use: [\n          MiniCssExtractPlugin.loader,\n          'css-loader'\n        ]\n      },\n      {\n        test: /\\.less$/,\n        use: [\n          MiniCssExtractPlugin.loader,\n          'css-loader',\n          'less-loader'\n        ]\n      },\n      {\n        test: /\\.(png|jpg|jpeg|gif)$/,\n        use: [\n          {\n            loader:\"file-loader\",\n            options:{\n              filename:\"[name]_[hash:8].[ext]\"\n            }\n          }\n        ]\n      },\n    ]\n  }\n}",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u65b0\u5efa webpack.dev.js \u6587\u4ef6\uff0c\u914d\u7f6e\u5f00\u53d1\u73af\u5883\u7684 webpack")),l.a.createElement(c["a"],{code:"const path = require('path');\nconst webpack = require('webpack')\n\nmodule.exports = {\n  mode: 'development',\n  entry: {\n    app: \"./src/app.js\",\n    appAdmin: \"./src/admin.js\"\n  },\n  output: {\n    filename: \"[name]_[chunkhash:8].js\",\n    path: __dirname + '/dist'\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        use: \"babel-loader\"\n      },\n      {\n        test: /\\.css$/,\n        use: [\n          'style-loader',\n          'css-loader'\n        ]\n      },\n      {\n        test: /\\.less$/,\n        use: [\n          'style-loader',\n          'css-loader',\n          'less-loader'\n        ]\n      },\n      {\n        test: /\\.(png|jpg|jpeg|gif)$/,\n        use: [\n          {\n            loader:\"url-loader\",\n            options:{\n              limit:10240\n            }\n          }\n        ]\n      },\n    ]\n  },\n  plugins:[\n    new webpack.HotModuleReplacementPlugin()\n  ],\n  devServer:{\n    static:'./dist',\n    hot: true\n  }\n}",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5176\u4e2d\u7684 package.json \u6587\u4ef6\u4fee\u6539\u5185\u5bb9\u5982\u4e0b\uff0c\u6307\u5b9a\u4e0d\u540c\u73af\u5883\u7684\u914d\u7f6e\u6587\u4ef6")),l.a.createElement(c["a"],{code:'{\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n-   "build": "webpack",\n+   "build": "webpack --config webpack.prod.js",\n    "watch": "webpack --watch",\n-   "dev":"webpack-dev-server --open",\n+   "dev": "webpack-dev-server --config webpack.dev.js --open"\n  }\n}',lang:"diff"})))})));e["default"]=n=>{var e=l.a.useContext(s["context"]),a=e.demos;return l.a.useEffect((()=>{var e;null!==n&&void 0!==n&&null!==(e=n.location)&&void 0!==e&&e.hash&&s["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),l.a.createElement(r,{demos:a})}},ybcD:function(n,e,a){n.exports=a.p+"static/fileFingerprint.38b260a2.png"}}]);