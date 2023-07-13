(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[242],{WVRf:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),i=a("dEAq"),s=(a("0H/f"),a("N0lm"),a("DgDr"),a("cGlH"),a("ekZX"),a("Bjia")),r=(a("tVxl"),a("1pSt"),l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u4ee3\u7801\u538b\u7f29"},l.a.createElement(i["AnchorLink"],{to:"#\u4ee3\u7801\u538b\u7f29","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u538b\u7f29"),l.a.createElement("hr",null),l.a.createElement("ol",null,l.a.createElement("li",null,"js \u7684\u538b\u7f29")),l.a.createElement("ul",null,l.a.createElement("li",null,"webpack4 \u4e2d\u5185\u7f6e\u4e86 uglifyjs-webpack-plugin \u63d2\u4ef6\uff0c\u8fd9\u65f6\u5019\u9ed8\u8ba4\u6253\u5305\u51fa\u6765\u7684 js \u6587\u4ef6\u5c31\u662f\u538b\u7f29\u8fc7\u7684\uff0c\u4e0d\u9700\u8981\u505a\u5176\u4ed6\u989d\u5916\u7684\u64cd\u4f5c\uff0c\u4f46\u662f\u8fd9\u4e2a\u63d2\u4ef6\u4e0d\u652f\u6301 es6 \u7684\u8bed\u6cd5"),l.a.createElement("li",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528 terser-webpack-plugin \u6765\u538b\u7f29 js\uff0c\u5b83\u652f\u6301 es6 \u8bed\u6cd5")),l.a.createElement(s["a"],{code:"npm i terser-webpack-plugin -D",lang:"bash"}),l.a.createElement(s["a"],{code:"const TerserPlugin = require('terser-webpack-plugin');\n\nmodule.exports = {\n  optimization: {\n    minimizer: [\n      new TerserPlugin()\n    ]\n  },\n}",lang:"js"}),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"css \u7684\u538b\u7f29")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("del",null,"\u4e00\u822c\u4f7f\u7528 optimize-css-assets-webpack-plugin \u548c cssnano \u538b\u7f29 css \u6587\u4ef6"))),l.a.createElement(s["a"],{code:"npm i optimize-css-assets-webpack-plugin cssnano -D",lang:"bash"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("del",null,"\u9700\u8981 cssnano \u9884\u5904\u7406\u5668\u8fdb\u884c\u9884\u5904\u7406\uff0c\u968f\u540e\u518d\u7531 optimize-css-assets-webpack-plugin \u5bf9\u5904\u7406\u540e\u7684\u6587\u4ef6\u8fdb\u884c\u538b\u7f29"),"\u3002\u76f4\u63a5\u4f7f\u7528 optimize-css-assets-webpack-plugin \u5373\u53ef")),l.a.createElement(s["a"],{code:"/**\n  * npm i  optimize-css-assets-webpack-plugin -D\n*/\nmodule.exports = {\n  optimization: {\n    minimizer: [\n      new OptimizeCssAssetsPlugin({\n        assetNameRegExp: /\\.css$/g,\n        // cssProcessor: require('cssnano'),\n        cssProcessorPluginOptions: {\n          preset: ['default', { discardComments: { removeAll: true } }],\n        },\n        canPrint: true\n      })\n    ]\n  },\n}",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u76ee\u524d\u7248\u672c\u8be5\u538b\u7f29\u63d2\u4ef6\u5b58\u5728\u4e00\u5b9a\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0e\u4e4b\u7c7b\u4f3c\u7684 ",l.a.createElement("code",null,"css-minimizer-webpack-plguin")," \u63d2\u4ef6\u8fdb\u884c css \u7684\u538b\u7f29\u64cd\u4f5c")),l.a.createElement(s["a"],{code:"/**\n  * npm i  optimize-css-assets-webpack-plugin -D\n*/\nconst CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')\nmodule.exports = {\n  optimization: {\n    minimizer: [\n      new CssMinimizerWebpackPlugin()\n    ]\n  },\n}",lang:"js"}),l.a.createElement("ol",{start:3},l.a.createElement("li",null,"html \u7684\u538b\u7f29")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4f7f\u7528 html-webpack-plugin \u6765\u538b\u7f29 html \u6587\u4ef6\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u4e00\u4e2a html-webpack-plugin \u5bf9\u5e94\u4e00\u4e2a\u9875\u9762\uff0c\u5982\u679c\u6709\u591a\u4e2a\u9875\u9762\u7684\u5165\u53e3\u5c31\u9700\u8981\u914d\u7f6e\u591a\u4e2a html-webpack-plugin")),l.a.createElement(s["a"],{code:"/** \n  * template\uff1a\u6307\u5b9a\u8981\u538b\u7f29\u7684\u6a21\u677fhtml\u6240\u5728\u4f4d\u7f6e\n  * filename\uff1a\u6253\u5305\u51fa\u6765\u7684\u6587\u4ef6\u540d\n  * chunks\uff1a\u751f\u6210\u4e86html\u8981\u4f7f\u7528\u54ea\u4e9b chunk\n  * inject\uff1a\u6253\u5305\u51fa\u6765\u7684 chunk \u81ea\u52a8\u6ce8\u5165\u5230 html\u4e2d\n*/\nconst HtmlWebpackPlugin = require('html-webpack-plugin')\n\nmodule.exports = {\n  plugins:[\n    new HtmlWebpackPlugin({\n      template:path.join(__dirname, 'src/index.html'),\n      // \n      filename:'index.html',\n      chunks:['index'],\n      inject:true,\n      minify: {\n        html5: true,\n        collapseWhitespace: true,\n        preserveLineBreaks: false,\n        minifyCSS: true,\n        minifyJS: true,\n        removeComments: false\n      }\n    }),\n    new HtmlWebpackPlugin({\n      template: path.join(__dirname, 'src/appAdmin.html'),\n      filename: 'appAdmin.html',\n      chunks: ['app','appAdmin'],\n      inject: true,\n      minify: {\n        html5: true,\n        collapseWhitespace: true,\n        preserveLineBreaks: false,\n        minifyCSS: true,\n        minifyJS: true,\n        removeComments: false\n      }\n    })\n  ]\n}",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6211\u4eec\u5728\u7b2c\u4e8c\u4e2a\u9875\u9762\u4e2d\u6307\u5b9a\u4e24\u4e2a chunk\uff0c\u53ef\u4ee5\u53d1\u73b0\u6ce8\u5165\u4e24\u4e2a\u5bf9\u5e94\u7684 js \u6587\u4ef6")),l.a.createElement(s["a"],{code:'\x3c!-- appAdmin.html --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width,initial-scale=1">\n  <title>Document</title>\n  <script defer="defer" src="app_8fde65b3.js"><\/script>\n  <script defer="defer" src="appAdmin_869b5d7c.js"><\/script>\n  <link href="app_baa2017f.css" rel="stylesheet">\n</head>\n\n<body>\n  <div id="root"></div>\n</body>\n\n</html>',lang:"html"}),l.a.createElement("ol",{start:4},l.a.createElement("li",null,"\u6e05\u7406\u6784\u5efa\u76ee\u5f55")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6bcf\u6b21\u6784\u5efa\u524d\u5e94\u6e05\u7406\u76ee\u5f55\uff0c\u4e0d\u7136\u4f1a\u9020\u6210 output \u8f93\u51fa\u7684\u6587\u4ef6\u8d8a\u6765\u8d8a\u591a\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u63d2\u4ef6\u6765\u5b8c\u6210\u8fd9\u4e2a\u529f\u80fd")),l.a.createElement(s["a"],{code:"npm i clean-webpack-plugin -D",lang:"bash"}),l.a.createElement(s["a"],{code:"const { CleanWebpackPlugin } = require('clean-webpack-plugin')\n\nmodule.exports = {\n  plugins:[\n    new CleanWebpackPlugin()\n  ]\n}",lang:"js"}),l.a.createElement("hr",null),l.a.createElement("h2",{id:"\u672c\u4f8b\u7684webpack\u914d\u7f6e"},l.a.createElement(i["AnchorLink"],{to:"#\u672c\u4f8b\u7684webpack\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u672c\u4f8b\u7684webpack\u914d\u7f6e"),l.a.createElement("hr",null),l.a.createElement("ol",null,l.a.createElement("li",null,"webpack.prod.js")),l.a.createElement(s["a"],{code:"const path = require('path');\nconst MiniCssExtractPlugin = require('mini-css-extract-plugin')\nconst CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nconst TerserPlugin = require('terser-webpack-plugin');\nconst {CleanWebpackPlugin} = require('clean-webpack-plugin')\n\nmodule.exports = {\n  mode: 'production',\n  entry: {\n    app: \"./src/app.js\",\n    appAdmin: \"./src/admin.js\"\n  },\n  output: {\n    filename: \"[name]_[chunkhash:8].js\",\n    path: __dirname + '/dist'\n  },\n  optimization: {\n    minimizer: [\n      new CssMinimizerWebpackPlugin()\n      new TerserPlugin()\n    ],\n    noEmitOnErrors: true\n  },\n  plugins: [\n    new MiniCssExtractPlugin({\n      filename: \"[name]_[contenthash:8].css\"\n    }),\n    new HtmlWebpackPlugin({\n      template: path.join(__dirname, 'src/app.html'),\n      filename: 'app.html',\n      chunks: ['app'],\n      inject: true,\n      minify: {\n        html5: true,\n        collapseWhitespace: true,\n        preserveLineBreaks: false,\n        minifyCSS: true,\n        minifyJS: true,\n        removeComments: false\n      }\n    }),\n    new HtmlWebpackPlugin({\n      template: path.join(__dirname, 'src/appAdmin.html'),\n      filename: 'appAdmin.html',\n      chunks: ['app','appAdmin'],\n      inject: true,\n      minify: {\n        html5: true,\n        collapseWhitespace: true,\n        preserveLineBreaks: false,\n        minifyCSS: true,\n        minifyJS: true,\n        removeComments: false\n      }\n    }),\n    new CleanWebpackPlugin()\n  ],\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        use: \"babel-loader\"\n      },\n      {\n        test: /\\.css$/,\n        use: [\n          MiniCssExtractPlugin.loader,\n          'css-loader'\n        ]\n      },\n      {\n        test: /\\.less$/,\n        use: [\n          MiniCssExtractPlugin.loader,\n          'css-loader',\n          'less-loader'\n        ],\n      },\n      {\n        test: /\\.(png|jpg|jpeg|gif)$/,\n        use: [\n          {\n            loader: \"file-loader\",\n            options: {\n              filename: \"[name]_[hash:8].[ext]\"\n            }\n          }\n        ]\n      },\n    ]\n  }\n}",lang:"js"})))})));n["default"]=e=>{var n=l.a.useContext(i["context"]),a=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&i["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(r,{demos:a})}}}]);