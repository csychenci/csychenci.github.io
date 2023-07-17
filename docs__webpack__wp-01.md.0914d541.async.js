(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[237],{K9Nh:function(e,n,l){"use strict";l.r(n);var t=l("q1tI"),a=l.n(t),r=l("dEAq"),c=(l("0H/f"),l("N0lm"),l("DgDr"),l("cGlH"),l("ekZX"),l("Bjia")),m=l("tVxl"),u=(l("1pSt"),a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"webpack\u6838\u5fc3\u6982\u5ff5"},a.a.createElement(r["AnchorLink"],{to:"#webpack\u6838\u5fc3\u6982\u5ff5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"webpack\u6838\u5fc3\u6982\u5ff5"),a.a.createElement("hr",null),a.a.createElement("ol",null,a.a.createElement("li",null,"entry")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u4f7f\u7528\u8be5\u5c5e\u6027\u6765\u6307\u5b9a webpack \u7684\u6253\u5305\u5165\u53e3\uff0c\u6839\u636e\u6a21\u5757\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\u4ece\u5165\u53e3\u8fdb\u884c\u6253\u5305")),a.a.createElement(c["a"],{code:'/** \n * \u5355\u9875\u9762\u5165\u53e3\uff0c\u5b57\u7b26\u4e32\u5f62\u5f0f\n*/\nmodule.exports = {\n  entry:"/src/index.js"\n}',lang:"js"}),a.a.createElement(c["a"],{code:'/** \n * \u591a\u9875\u9762\u5165\u53e3\uff0c\u5bf9\u8c61\u5f62\u5f0f\n*/\nmodule.exports = {\n  entry:{\n    app: "./src/app.js",\n    appAdmin: "./src/admin.js"\n  }\n}',lang:"js"}),a.a.createElement(c["a"],{code:"/** \n * \u591a\u9875\u9762\u5165\u53e3\uff0c\u52a8\u6001\u5f62\u5f0f\n * npm i glob -D\n*/\nconst glob = require(\"glob\");\n\nconst matchFile = () => {\n  const entry = {};\n  const htmlWebpackPlguins = [];\n\n  const entryFiles = golb.sync(path.join(__dirname,'./src/*/index.js'))\n\n  Object.keys(entryFiles).map(key => {\n    const entryFile = entryFiles[key];\n\n    const chunkName =entryFile.match(/src\\(.*)\\/index\\.js/);\n\n    entry[chunkName] = entryFile;\n\n    htmlWebpackPlguins.push(new HtmlWebpackPlugin({\n      template: path.join(__dirname, `src/${chunkName}/.html`),\n      filename: `${chunkName}.html`,\n      chunks: [chunkName],\n      inject: true,\n      minify: {\n        html5: true,\n        collapseWhitespace: true,\n        preserveLineBreaks: false,\n        minifyCSS: true,\n        minifyJS: true,\n        removeComments: false\n      }\n    })\n    )\n  })\n\n  return {\n    entry,\n    htmlWebpackPlguins\n  }\n}\n\nconst {\n    entry,\n    htmlWebpackPlguins\n  } = matchFile()\nmodule.exports = {\n  entry:entry,\n  plugins:[].concat(htmlWebpackPlguins)\n}",lang:"js"}),a.a.createElement("ol",{start:2},a.a.createElement("li",null,"output")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u6307\u5b9a\u7f16\u8bd1\u540e\u7684\u6587\u4ef6\u8f93\u51fa\u5230\u78c1\u76d8\u7684\u54ea\u4e00\u4e2a\u4f4d\u7f6e")),a.a.createElement(c["a"],{code:'/** \n * \u5355\u9875\u9762\u5165\u53e3\uff0c\u5b57\u7b26\u4e32\u5f62\u5f0f\n*/\nmodule.exports = {\n  entry:"/src/index.js",\n  output:{\n    filename:"bundle.js",\n    path:__dirname + \'/dist\'\n  }\n}',lang:"js"}),a.a.createElement(c["a"],{code:'/** \n * \u5355\u9875\u9762\u5165\u53e3\uff0c\u5b57\u7b26\u4e32\u5f62\u5f0f\n * \u901a\u8fc7\u5360\u4f4d\u7b26\u786e\u4fdd\u540d\u79f0\u7684\u552f\u4e00\n * [name] \u8fd9\u4e2a\u6700\u540e\u6253\u5305\u51fa\u6765\u7684\u6587\u4ef6\u540d\u5c31\u662f\u8ddf entry \u8bbe\u7f6e\u7684\u5165\u53e3 key \u4e00\u81f4\n * \u4e5f\u5c31\u662f app.js appAdmin.js\n*/\nmodule.exports = {\n  entry:{\n    app: "./src/app.js",\n    appAdmin: "./src/admin.js"\n  },\n  output:{\n    filename:"[name].js",\n    path:__dirname + \'/dist\'\n  }\n}',lang:"js"}),a.a.createElement("ol",{start:3},a.a.createElement("li",null,"loaders")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u539f\u751f webpack \u53ea\u652f\u6301 js\u3001json \u4e24\u79cd\u6587\u4ef6\u7c7b\u578b\u3002\u5982\u679c\u9700\u8981\u652f\u6301\u5176\u4ed6\u6587\u4ef6\u7c7b\u578b\uff0c\u5e76\u4e14\u5c06\u5b83\u4eec\u8f6c\u5316\u6210\u6709\u6548\u7684\u6a21\u5757\uff0c\u518d\u5c06\u8fd9\u4e9b\u6a21\u5757\u6dfb\u52a0\u5230\u4f9d\u8d56\u56fe\u4e2d\uff0c\u5c31\u9700\u8981 loaders"),a.a.createElement("li",null,"\u672c\u8eab loaders \u662f\u4e00\u4e2a\u51fd\u6570(\u7ba1\u9053)\uff0c\u63a5\u6536\u6e90\u6587\u4ef6\u4f5c\u4e3a\u53c2\u6570\uff0c\u8fd4\u56de\u8f6c\u6362\u540e\u7684\u7ed3\u679c\u3002\u4e00\u4e2a\u7c7b\u578b\u7684\u6587\u4ef6\u53ef\u80fd\u9700\u8981\u7528\u5230\u591a\u4e2a loader \u7684\u5904\u7406\uff0cwebpack \u4f1a\u6309\u7167\u4ece\u540e\u5f80\u524d\u7684\u987a\u5e8f\u5c06\u8d44\u6e90\u4ea4\u7ed9\u8fd9\u4e9b loader \u53bb\u5904\u7406")),a.a.createElement(m["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5e38\u89c1\u7684loaders"),a.a.createElement("th",null,"\u63cf\u8ff0"),a.a.createElement("th",null,"\u7c7b\u578b"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"babel-loader"),a.a.createElement("td",null,"\u8f6c\u6362 ES6\u3001ES7\u7b49 JS \u65b0\u7279\u6027\u8bed\u6cd5"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"css-loader"),a.a.createElement("td",null,"\u652f\u6301 .css \u6587\u4ef6\u7684\u52a0\u8f7d\u548c\u89e3\u6790"),a.a.createElement("td",null,"\u7f16\u8bd1\u8f6c\u6362\u7c7b")),a.a.createElement("tr",null,a.a.createElement("td",null,"less-loader"),a.a.createElement("td",null,"\u5c06 less \u6587\u4ef6\u8f6c\u6362\u6210 css"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"ts-loader"),a.a.createElement("td",null,"\u5c06 ts \u8f6c\u6362\u4e3a js"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"file-loader"),a.a.createElement("td",null,"\u8fdb\u884c\u56fe\u7247\u3001\u5b57\u4f53\u7b49\u7684\u6253\u5305"),a.a.createElement("td",null,"\u6587\u4ef6\u64cd\u4f5c\u7c7b")),a.a.createElement("tr",null,a.a.createElement("td",null,"raw-loader"),a.a.createElement("td",null,"\u5c06\u6587\u4ef6\u4ee5\u5b57\u7b26\u4e32\u7684\u5f62\u5f0f\u5bfc\u5165"),a.a.createElement("td",null,"\u6587\u4ef6\u64cd\u4f5c\u7c7b")),a.a.createElement("tr",null,a.a.createElement("td",null,"thread-loader"),a.a.createElement("td",null,"\u8ba9webpack\u4ee5\u591a\u8fdb\u7a0b\u5f62\u5f0f\u6253\u5305 js \u548c css"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"eslint-loader"),a.a.createElement("td",null,"\u5bf9\u4ee3\u7801\u89c4\u5219\u505a\u68c0\u67e5"),a.a.createElement("td",null,"\u4ee3\u7801\u68c0\u67e5\u7c7b")))),a.a.createElement(c["a"],{code:'/** \n * \u89e3\u6790\u7684loader\u653e\u5728module\u5c5e\u6027\u4e0b\n * \u5176\u4e2d test \u6307\u5b9a\u5339\u914d\u89c4\u5219\uff0cuse \u6307\u5b9a\u4f7f\u7528\u7684 loader \u540d\u79f0\n * exclude\uff1a\u88ab\u8be5\u89c4\u5219\u5339\u914d\u5230\u7684\u6a21\u5757\u4e0d\u4f1a\u88abloader\u5904\u7406\n * include\uff1aloader\u53ea\u5904\u7406\u8be5\u89c4\u5219\u4e0b\u7684\u6a21\u5757\n*/\nmodule.exports = {\n  entry:{\n    app: "./src/app.js",\n    appAdmin: "./src/admin.js"\n  },\n  output:{\n    filename:"[name].js",\n    path:__dirname + \'/dist\'\n  },\n  module:{\n    rules:[\n      {\n        test:/\\.txt$/,\n        use:\'raw-loader\',\n        exclude: /node_modules/,\n        include: /src/\n      }\n    ]\n  }\n}',lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u9700\u8981\u6ce8\u610f\u4e00\u70b9\u7684\u662f\uff0cloader \u7684\u8c03\u7528\u662f\u94fe\u5f0f\u8c03\u7528\u7684\uff0c\u8c03\u7528\u987a\u5e8f\u662f\u4ece\u5de6\u5230\u53f3\u8c03\u7528\u7684")),a.a.createElement(c["a"],{code:"module.exports = {\n  // ...\n  module:{\n    rules:[\n      {\n        test:/\\.js$/,\n        use: \"babel-loader\"\n      },\n      {\n        test:/\\.css$/,\n        use:[\n          'style-loader',\n          'css-loader'\n        ]\n      }\n    ]\n  }\n}",lang:"js"}),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5982\u679c\u4f60\u9700\u8981\u4e00\u4e2a\u81ea\u5df1\u7684 loader\uff0c\u4e5f\u53ef\u4ee5\u5bf9\u5b83\u8fdb\u884c\u5904\u7406\uff0c\u4e00\u79cd\u662f\u76f4\u63a5\u4f5c\u4e3a\u4e00\u4e2a js \u4ee3\u7801\u5bfc\u51fa\uff0c\u6216\u8005\u5c06\u5bfc\u51fa\u7684\u5185\u5bb9\u4ea4\u7ed9\u53e6\u4e00\u4e2a loader \u5904\u7406")),a.a.createElement(c["a"],{code:'// md-loader.js\nconst marked = require("marked");\n\nmodule.exports = source => {\n  const html = marked.parse(source);\n  return `export default ${JSON.stringify(html)}`\n  // return `module.exports = ${JSON.stringify(html)}`\n}',lang:"js"}),a.a.createElement(c["a"],{code:'// md-loader.js\nconst marked = require("marked");\n\nmodule.exports = source => {\n  const html = marked.parse(source);\n  return html\n  // return `module.exports = ${JSON.stringify(html)}`\n}',lang:"js"}),a.a.createElement(c["a"],{code:'// webpack.config.js\nmodule.exports = {\n  // ...\n  module:{\n    rules:[\n      {\n        test:/\\.md/,\n        use:[\n          "html-loader",\n          "./loaders/md-loader"\n        ]\n      }\n    ]\n  }\n}',lang:"js"}),a.a.createElement("ol",{start:4},a.a.createElement("li",null,"plugins")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u63d2\u4ef6\uff0c\u7528\u4e8e\u6253\u5305\u6587\u4ef6\u7684\u4f18\u5316\u3001\u8d44\u6e90\u7ba1\u7406\u548c\u73af\u5883\u53d8\u91cf\u6ce8\u5165\u7684\u81ea\u52a8\u5316\u5de5\u4f5c\uff0c\u5b83\u4f5c\u7528\u4e8e\u6574\u4e2a\u6784\u5efa\u8fc7\u7a0b(\u6784\u5efa\u5f00\u59cb--\x3e\u7ed3\u675f)\u3002\u4e00\u822c loaders \u6ca1\u529e\u6cd5\u505a\u7684\u90fd\u53ef\u4ee5\u4ea4\u7ed9 plugins \u53bb\u5b8c\u6210")),a.a.createElement(m["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5e38\u7528\u7684plugin"),a.a.createElement("th",null,"\u63cf\u8ff0"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"CommonsChunkPlugin"),a.a.createElement("td",null,"\u5c06 chunks \u76f8\u540c\u7684\u6a21\u5757\u4ee3\u7801\u63d0\u53d6\u4e3a\u516c\u5171js")),a.a.createElement("tr",null,a.a.createElement("td",null,"CleanWebpackPlugin"),a.a.createElement("td",null,"\u6e05\u7406\u6784\u5efa\u76ee\u5f55")),a.a.createElement("tr",null,a.a.createElement("td",null,"ExtractTextWebpackPlugin"),a.a.createElement("td",null,"\u5c06 css \u4ece bundle \u6587\u4ef6\u91cc\u63d0\u53d6\u4e3a\u4e00\u4e2a\u72ec\u7acb\u7684 css \u6587\u4ef6")),a.a.createElement("tr",null,a.a.createElement("td",null,"CopyWebpackPlugin"),a.a.createElement("td",null,"\u5c06\u6587\u4ef6\u6216\u6587\u4ef6\u5939\u62f7\u8d1d\u5230\u6784\u5efa\u7684\u8f93\u51fa\u76ee\u5f55")),a.a.createElement("tr",null,a.a.createElement("td",null,"HtmlWebpackPlugin"),a.a.createElement("td",null,"\u521b\u5efa html \u6587\u4ef6\u53bb\u627f\u8f7d\u8f93\u51fa\u7684 bundle")),a.a.createElement("tr",null,a.a.createElement("td",null,"UglifyjsWebpackPlugin"),a.a.createElement("td",null,"\u538b\u7f29 js")),a.a.createElement("tr",null,a.a.createElement("td",null,"ZipWebpackPlugin"),a.a.createElement("td",null,"\u5c06\u6253\u5305\u51fa\u6765\u7684\u8d44\u6e90\u751f\u6210\u4e00\u4e2a zip \u5305")))),a.a.createElement(c["a"],{code:'/** \n * \u5c06\u5b9a\u4e49\u597d\u7684\u63d2\u4ef6\u653e\u5230 plugins \u8fd9\u4e2a\u6570\u7ec4\u91cc\u9762\n*/\nmodule.exports = {\n  entry:{\n    app: "./src/app.js",\n    appAdmin: "./src/admin.js"\n  },\n  output:{\n    filename:"[name].js",\n    path:__dirname + \'/dist\'\n  },\n  module:{\n    rules:[\n      {\n        test:/\\.txt$/,\n        use:\'raw-loader\'\n      }\n    ]\n  },\n  plugins:[\n    new HtmlWebpackPlugin({\n      template:"./src/index.html"\n    })\n  ]\n}',lang:"js"}),a.a.createElement("ol",{start:5},a.a.createElement("li",null,"mode")),a.a.createElement("ul",null,a.a.createElement("li",null,"\u7528\u6765\u6307\u5b9a\u5f53\u524d\u7684\u6784\u5efa\u73af\u5883\u662f\uff1aproduction(\u9ed8\u8ba4\u503c)\u3001development \u8fd8\u662f none\u3002\u8bbe\u7f6e\u5b83\u53ef\u4ee5\u4f7f\u7528 webpack \u5185\u7f6e\u7684\u51fd\u6570")),a.a.createElement(m["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u9009\u9879"),a.a.createElement("th",null,"\u63cf\u8ff0"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"development"),a.a.createElement("td",null,"\u8bbe\u7f6e ",a.a.createElement("code",null,"process.env.NODE_ENV")," \u7684\u503c\u4e3a ",a.a.createElement("code",null,"development"),"\uff0c\u5f00\u542fNamedChunksPlugin \u548c nameModulesPlugin")),a.a.createElement("tr",null,a.a.createElement("td",null,"none"),a.a.createElement("td",null,"\u4e0d\u5f00\u542f\u4efb\u4f55\u4f18\u5316\u9009\u9879")),a.a.createElement("tr",null,a.a.createElement("td",null,"production"),a.a.createElement("td",null,"\u8bbe\u7f6e ",a.a.createElement("code",null,"process.env.NODE_ENV")," \u7684\u503c\u4e3a ",a.a.createElement("code",null,"production"),"\uff0c\u5e76\u5f00\u542f\u591a\u4e2a plugin \u8fdb\u884c\u4f18\u5316")))),a.a.createElement("ul",null,a.a.createElement("li",null,"\u8fd8\u53ef\u4ee5\u901a\u8fc7 webpack.DefinePlugin \u6765\u6ce8\u5165\u4e00\u4e9b\u73af\u5883\u53d8\u91cf\u3001\u5168\u5c40\u53c2\u6570\u7b49")),a.a.createElement(c["a"],{code:'// webpack.config.js\n\nconst webpack = require("webpack");\n\nmodule.exports = {\n  mode:"none",\n  entry:"./src/index.js",\n  output:{\n    filename:"bundle.js"\n  },\n  plugins:[\n    new webpack.DefinePlugin({\n      API_BASE_URL:"https://api.examle.com"\n    })\n  ]\n}',lang:"js"})))})));n["default"]=e=>{var n=a.a.useContext(r["context"]),l=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(u,{demos:l})}}}]);