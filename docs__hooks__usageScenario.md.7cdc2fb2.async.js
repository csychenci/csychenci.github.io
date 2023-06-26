(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[60],{zv1i:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),l=t("dEAq"),s=(t("0H/f"),t("N0lm"),t("DgDr"),t("cGlH"),t("ekZX")),o=t("Bjia"),i=(t("tVxl"),t("1pSt"),r.a.memo((e=>{var n=e.demos,t=n["usageScenario-demo"].component,a=n["usageScenario-demo-1"].component,i=n["usageScenario-demo-2"].component,c=n["usageScenario-demo-3"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u5f02\u6b65\u5904\u7406\u53d1\u8d77\u8bf7\u6c42"},r.a.createElement(l["AnchorLink"],{to:"#\u5f02\u6b65\u5904\u7406\u53d1\u8d77\u8bf7\u6c42","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5f02\u6b65\u5904\u7406\uff1a\u53d1\u8d77\u8bf7\u6c42"),r.a.createElement("hr",null),r.a.createElement("ol",null,r.a.createElement("li",null,"\u5982\u4f55\u4f7f\u7528 Hooks \u5411\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5927\u90e8\u5206\u7684\u4e1a\u52a1\u573a\u666f\u9700\u8981\u4e0e\u670d\u52a1\u5668\u7aef\u4ea4\u4e92\uff0c\u5b83\u4eec\u4e4b\u95f4\u901a\u8fc7\u5404\u79cd API \u5b8c\u6210\u5404\u79cd\u529f\u80fd\u3002\u867d\u7136\u53d1\u9001\u8bf7\u6c42\u6709\u5f88\u591a\u505a\u6cd5\uff0c\u4f46\u5b83\u4eec\u90fd\u9075\u5faa\u4e00\u5b9a\u7684\u89c4\u5f8b")),r.a.createElement(o["a"],{code:"import React, { useState } from 'react';\n\nconst useAsync = (asyncFunction) => {\n  // \u8bbe\u7f6e\u4e09\u4e2a\u5f02\u6b65\u903b\u8f91\u76f8\u5173\u7684state\n  const [data, setData] = useState([]);\n  const [loading, setLoading] = useState(false);\n  const [error, setError] = useState(null);\n\n  const execute = useCallback(() => {\n    // \u8bf7\u6c42\u5f00\u59cb\u524d\uff0c\u91cd\u7f6e\u72b6\u6001\n    setLoading(true);\n    setData(null);\n    setError(null);\n    return asyncFunction()\n      .then((response) => {\n        // \u8bf7\u6c42\u6210\u529f\uff0c\u8bbe\u7f6e data \u4e0e loading\n        setData(response);\n        setLoading(fasle);\n      })\n      .catch((error) => {\n        // \u8bf7\u6c42\u5931\u8d25\uff0c\u8bbe\u7f6e error \u4e0e loading\n        setError(error);\n        setLoading(false);\n      });\n  }, [asyncFunction]);\n  // \u5c06 asyncFunction \u5b58\u5165\u4f9d\u8d56\u9879\uff0c\u5f53asyncFunction\u53d8\u5316\u65f6\u91cd\u65b0\u58f0\u660e\u6267\u884c\u5668\u51fd\u6570\n\n  return {\n    execute,\n    loading,\n    data,\n    error,\n  };\n};",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5728\u4e4b\u524d\u7684\u81ea\u5b9a\u4e49 Hooks \u4e2d\uff0c\u6709 ",r.a.createElement("code",null,"useAsync")," \u8fd9\u6837\u4e00\u4e2a\u7528\u4e8e\u53d1\u9001\u8bf7\u6c42\u5e76\u8bbe\u7f6e state \u7684 Hook\u3002\u4f46\u5982\u679c\u6211\u4eec\u9700\u8981\u7ed9\u8bf7\u6c42\u4e2d\u643a\u5e26\u4e00\u4e9b\u901a\u7528\u7684 headers\u3001\u914d\u7f6e\u4e0d\u540c\u7684\u670d\u52a1\u5668\u5730\u5740\u3001\u6388\u6743\u8fc7\u671f\u7b49\uff0c\u90a3\u5e94\u8be5\u5982\u4f55\u5904\u7406\u5462?\u5e38\u89c1\u7684\u505a\u6cd5\u662f ",r.a.createElement("strong",null,"\u521b\u5efa\u4e00\u4e2a\u8bf7\u6c42\u5668\uff0c\u6240\u6709\u7684\u8bf7\u6c42\u7edf\u4e00\u4f7f\u7528\u8fd9\u4e2a\u8bf7\u6c42\u5668\u53d1\u9001\u8bf7\u6c42"))),r.a.createElement(o["a"],{code:"import React from 'react';\nimport notification from 'antd/lib/notification';\n\nimport axios from 'axios';\n\nconst userInfo = {\n  token: sessionStorage.getItem('token'),\n};\n\nconst site = {\n  test: 'https://60b2643d62ab150017ae21de.mockapi.io/',\n  prod: 'https://prod.myapi.io/',\n  staging: 'https://staging.myapi.io/',\n};\n\nconst logout = () => {\n  sessionStorage.clear();\n  location.href = location.origin + location.pathname + '#/' + 'login';\n};\n\n// \u521b\u5efaaxios\u5b9e\u4f8b\nconst service = axios.create({\n  baseURL: site.test,\n  // \u6839\u636e\u73af\u5883\u914d\u7f6e\u4e0d\u540cbaseUrl\n  timeout: 60 * 1000,\n  withCredentials: false,\n});\n\n// \u5b9a\u4e49\u4e00\u4e2a\u8bf7\u6c42\u62e6\u622a\u5668\nservice.interceptors.request.use(\n  (config) => {\n    config.headers['token'] = userInfo?.token;\n    return config;\n  },\n  (error) => {\n    notification.error({\n      message: '\u8bf7\u6c42\u53d1\u9001\u5931\u8d25',\n      description: '\u53d1\u9001\u8bf7\u6c42\u7ed9\u670d\u52a1\u7aef\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7535\u8111\u7f51\u7edc\uff0c\u518d\u91cd\u8bd5',\n    });\n    return Promise.reject(error);\n  },\n);\n\n// \u54cd\u5e94\u62e6\u622a\u5668\nservice.interceptors.response.use(\n  (response) => {\n    /* \u53ef\u4ee5\u5728\u8fd9\u91cc\u5904\u7406\u8bf7\u6c42\u6210\u529f\u7684\u903b\u8f91 */\n    return response;\n  },\n  (error) => {\n    if (error.response.status === 403) {\n      // .. \u5904\u7406\u8bf7\u6c42\u5931\u8d25\u7684\u903b\u8f91\n    }\n    return Promise.reject(error);\n  },\n);\n\nexport default service;",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a API Client \u53d1\u9001\u8bf7\u6c42\u3002\u6211\u4eec\u53ef\u4ee5\u628a\u4efb\u4f55\u4e00\u4e2a\u6570\u636e\u6e90\u53d8\u6210 React \u7ec4\u4ef6\u4e2d\u53ef\u4ee5\u7ed1\u5b9a\u7684\u4e00\u4e2a\u6570\u636e\u6e90\uff0c\u7279\u522b\u662f get \u8bf7\u6c42\u8fd9\u79cd\u4e00\u822c\u9002\u7528\u4e8e\u83b7\u53d6\u6570\u636e\u7684\u8bf7\u6c42\uff0c\u6211\u4eec\u53ef\u4ee5\u8ba4\u4e3a\u5b83\u662f\u4e00\u4e2a\u8fdc\u7a0b\u6570\u636e\u6e90")),r.a.createElement(o["a"],{code:"import { useState, useEffect } from 'react';\nimport service from '@/utils/service';\n\nexport const useArticle = (ids) => {\n  // \u8bbe\u7f6e\u4e09\u4e2a\u5f02\u6b65\u903b\u8f91\u76f8\u5173\u7684state\n  const [data, setData] = useState([]);\n  const [loading, setLoading] = useState(false);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    // \u8bf7\u6c42\u5f00\u59cb\u524d\uff0c\u91cd\u7f6e\u72b6\u6001\n    setLoading(true);\n    setData(null);\n    setError(null);\n    service\n      .get(`/posts/${id}`)\n      .then((res) => {\n        // \u8bf7\u6c42\u6210\u529f\uff0c\u8bbe\u7f6e data \u4e0e loading\n        setData(response);\n        setLoading(fasle);\n      })\n      .catch((err) => {\n        // \u8bf7\u6c42\u5931\u8d25\uff0c\u8bbe\u7f6e error \u4e0e loading\n        setError(error);\n        setLoading(false);\n      });\n  }, [id]); // id\u53d8\u5316\u91cd\u65b0\u83b7\u53d6\u6570\u636e\n\n  return {\n    loading,\n    data,\n    error,\n  };\n};",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u90a3\u4e48\u4ee5\u4e0a\u9762\u8fd9\u4e2a\u4f8b\u5b50\u6765\u8bf4\uff0c\u5f53\u8981\u6839\u636e id \u83b7\u53d6\u67d0\u4e2a\u6570\u636e\u65f6\uff0c\u6211\u4eec\u4e0d\u5e94\u8be5\u518d\u60f3\u5230\u4e00\u4e2a\u5177\u4f53\u7684 Api \u8c03\u7528\uff0c\u800c\u662f\u628a\u5b83\u770b\u4f5c\u4e00\u4e2a ",r.a.createElement("strong",null,"\u53ef\u7ed1\u5b9a\u7684\u6570\u636e\u6e90"),"\uff0c\u53ea\u4e0d\u8fc7\u662f\u4e2a\u8fdc\u7a0b\u6570\u636e")),r.a.createElement(o["a"],{code:"import { useArticle } from './useArticle';\n\nconst ArticleView = ({ id }) => {\n  // \u5c06article\u770b\u4f5c\u4e00\u4e2a\u8fdc\u7a0b\u8d44\u6e90\uff0c\u5b83\u6709 data\uff0cloading\uff0cerror \u4e09\u4e2a\u72b6\u6001\n  const { data, loading, error } = useArticle(id);\n  if (error) return 'Faild';\n  if (!data || loading) return 'Loading...';\n  return (\n    <div>\n      <p>{data.title}</p>\n      <p>{data.content}</p>\n    </div>\n  );\n};",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5f53\u628a\u4e1a\u52a1\u903b\u8f91\u62bd\u79bb\u6210\u4e00\u4e2a hook \u65f6\uff0c\u7ec4\u4ef6\u7684\u8868\u73b0\u5c42\u903b\u8f91\u5c31\u4f1a\u975e\u5e38\u7b80\u6d01\uff0c\u53ea\u9700\u8981\u5c06\u6570\u636e\u6620\u5c04\u5230 jsx \u5e76\u663e\u793a\u51fa\u6765\u5c31\u53ef\u4ee5\u3002"),r.a.createElement("li",null,"\u90a3\u4e48\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u53ef\u4ee5\u628a\u6bcf\u4e00\u4e2a Get \u8bf7\u6c42\u90fd\u505a\u6210\u8fd9\u6837\u4e00\u4e2a Hook\u3002\u6570\u636e\u8bf7\u6c42\u548c\u5904\u7406\u903b\u8f91\u90fd\u653e\u5230 Hooks \u4e2d\uff0c\u4ece\u800c\u5b9e\u73b0 Model \u548c View \u7684\u9694\u79bb\uff0c\u4e0d\u4ec5\u4ee3\u7801\u66f4\u52a0\u6a21\u5757\u5316\uff0c\u800c\u4e14\u66f4\u6613\u4e8e\u6d4b\u8bd5\u548c\u7ef4\u62a4")),r.a.createElement(o["a"],{code:"// \u4e3a\u4ec0\u4e48\u4e0d\u4f7f\u7528\u8fd9\u79cd\u5c06api\u4f20\u5165\u7684\u65b9\u5f0f\u5462\nconst useRemoteData = (url) => {\n  // ...\n};",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"\u4e3a\u4e86\u4fdd\u8bc1\u6bcf\u4e2a Hook \u81ea\u8eab\u8db3\u591f\u7b80\u5355"),"\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u4e3a\u4e86\u8ba9\u670d\u52a1\u5668\u7684\u8fd4\u56de\u6570\u636e\u6ee1\u8db3 UI \u4e0a\u7684\u5c55\u73b0\u8981\u6c42\uff0c\u901a\u5e38\u9700\u8981\u8fdb\u4e00\u6b65\u5904\u7406\uff0c\u53ef\u80fd\u5bfc\u81f4\u6bcf\u4e2a\u8bf7\u6c42\u7684\u5904\u7406\u903b\u8f91\u90fd\u4e0d\u4e00\u81f4"),r.a.createElement("li",null,"\u8fd8\u6709\u5c31\u662f\u67d0\u4e2a\u8fdc\u7a0b\u8d44\u6e90\u6709\u53ef\u80fd\u662f\u7531\u591a\u4e2a\u8bf7\u6c42\u7ec4\u6210\u7684\uff0c\u90a3\u4e48 Hooks \u4e2d\u7684\u903b\u8f91\u5c31\u4f1a\u4e0d\u4e00\u6837\uff0c\u56e0\u4e3a\u8981\u540c\u65f6\u53d1\u51fa\u53bb\u591a\u4e2a\u8bf7\u6c42\uff0c\u7ec4\u6210 UI \u5c55\u73b0\u6240\u9700\u8981\u7684\u6570\u636e")),r.a.createElement("ol",{start:2},r.a.createElement("li",null,"\u4e32\u884c\u8bf7\u6c42")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u51fd\u6570\u7ec4\u4ef6\u662f\u4e00\u4e2a\u540c\u6b65\u7684\u51fd\u6570\uff0c\u8bf7\u6c42\u90fd\u662f\u4ea4\u7ed9\u526f\u4f5c\u7528\u6765\u89e6\u53d1\uff0c\u90a3\u4e48\u5982\u4f55\u901a\u8fc7\u4e0d\u540c\u7684\u72b6\u6001\u7ec4\u5408\uff0c\u6765\u5b9e\u73b0\u5f02\u6b65\u8bf7\u6c42\u7684\u903b\u8f91\u5462")),r.a.createElement(o["a"],{code:"import React, { useState, useEffect } from 'react';\nimport notification from 'antd/lib/notification';\n\nimport axios from 'axios';\n\nconst userInfo = {\n  token: sessionStorage.getItem('token'),\n};\n\nconst site = {\n  test: 'https://60b2643d62ab150017ae21de.mockapi.io/',\n  prod: 'https://prod.myapi.io/',\n  staging: 'https://staging.myapi.io/',\n};\n\nconst logout = () => {\n  sessionStorage.clear();\n  location.href = location.origin + location.pathname + '#/' + 'login';\n};\n\n// \u521b\u5efaaxios\u5b9e\u4f8b\nconst service = axios.create({\n  baseURL: site.test,\n  // \u6839\u636e\u73af\u5883\u914d\u7f6e\u4e0d\u540cbaseUrl\n  timeout: 60 * 1000,\n  withCredentials: false,\n});\n\n// \u5b9a\u4e49\u4e00\u4e2a\u8bf7\u6c42\u62e6\u622a\u5668\nservice.interceptors.request.use(\n  (config) => {\n    config.headers['token'] = userInfo?.token;\n    return config;\n  },\n  (error) => {\n    notification.error({\n      message: '\u8bf7\u6c42\u53d1\u9001\u5931\u8d25',\n      description: '\u53d1\u9001\u8bf7\u6c42\u7ed9\u670d\u52a1\u7aef\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7535\u8111\u7f51\u7edc\uff0c\u518d\u91cd\u8bd5',\n    });\n    return Promise.reject(error);\n  },\n);\n\n// \u54cd\u5e94\u62e6\u622a\u5668\nservice.interceptors.response.use(\n  (response) => {\n    /* \u53ef\u4ee5\u5728\u8fd9\u91cc\u5904\u7406\u8bf7\u6c42\u6210\u529f\u7684\u903b\u8f91 */\n    return response;\n  },\n  (error) => {\n    if (error.response.status === 403) {\n      // .. \u5904\u7406\u8bf7\u6c42\u5931\u8d25\u7684\u903b\u8f91\n    }\n    return Promise.reject(error);\n  },\n);\n\nconst useUser = (id) => {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(false);\n  const [error, setError] = useState(null);\n  useEffect(() => {\n    // \u5f53 id \u4e0d\u5b58\u5728\uff0c\u76f4\u63a5\u8fd4\u56de\uff0c\u4e0d\u53d1\u9001\u8bf7\u6c42\n    if (!id) return;\n    setLoading(true);\n    setData(null);\n    setError(null);\n    service\n      .get(`/users/${id}`)\n      .then((res) => {\n        setLoading(false);\n        setData(res.data);\n      })\n      .catch((err) => {\n        setLoading(false);\n        setError(err);\n      });\n  }, [id]);\n  return {\n    loading,\n    error,\n    data,\n  };\n};\n\nconst useArticle = (id) => {\n  // \u8bbe\u7f6e\u4e09\u4e2a\u5f02\u6b65\u903b\u8f91\u76f8\u5173\u7684state\n  const [data, setData] = useState([]);\n  const [loading, setLoading] = useState(false);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    // \u8bf7\u6c42\u5f00\u59cb\u524d\uff0c\u91cd\u7f6e\u72b6\u6001\n    setLoading(true);\n    setData(null);\n    setError(null);\n    service\n      .get(`/posts/${id}`)\n      .then((res) => {\n        // \u8bf7\u6c42\u6210\u529f\uff0c\u8bbe\u7f6e data \u4e0e loading\n        setData(res);\n        setLoading(false);\n      })\n      .catch((err) => {\n        // \u8bf7\u6c42\u5931\u8d25\uff0c\u8bbe\u7f6e error \u4e0e loading\n        setError(err);\n        setLoading(false);\n      });\n  }, [id]); // id\u53d8\u5316\u91cd\u65b0\u83b7\u53d6\u6570\u636e\n\n  return {\n    loading,\n    data,\n    error,\n  };\n};\n\nconst useComments = (id) => {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(false);\n  const [error, setError] = useState(null);\n  useEffect(() => {\n    setLoading(true);\n    setData(null);\n    setError(null);\n    service\n      .get(`/comments`)\n      .then((res) => {\n        setLoading(false);\n        setData(res.data);\n      })\n      .catch((err) => {\n        setLoading(false);\n        setError(err);\n      });\n  }, [id]);\n  return {\n    loading,\n    error,\n    data,\n  };\n};\n\nconst CommentList = ({ data = [] }) => {\n  return (\n    <div className=\"exp-09-comment-list\">\n      <h3>Comments ({data.length})</h3>\n      <dl>\n        div\n        {data.map((item) => (\n          <div key={item.id}>\n            <dt>{item.user}</dt>\n            <dd>{item.content}</dd>\n          </div>\n        ))}\n      </dl>\n    </div>\n  );\n};\n\nconst ArticleView = ({ id }) => {\n  const { data: article, loading, error } = useArticle(id);\n  const { data: comments } = useComments(id);\n  // \u83b7\u53d6comments\u548carticle\u662f\u4e24\u4e2a\u5e76\u53d1\u7684\u8bf7\u6c42\n  const { data: user } = useUser(article?.userId);\n  // user\u4f9d\u8d56\u4e8earticle\u8fd4\u56de\u7684\u6570\u636e\uff0c\u56e0\u6b64\u8fd9\u662f\u4e00\u4e2a\u4e32\u884c\u7684\u8bf7\u6c42\n\n  /*\n  1. \u7ec4\u4ef6\u9996\u6b21\u6e32\u67d3\uff0c\u53ea\u6709\u6587\u7ae0 ID \u8fd9\u4e2a\u4fe1\u606f\uff0c\u4ea7\u751f\u4e24\u4e2a\u526f\u4f5c\u7528\u53bb\u83b7\u53d6\u6587\u7ae0\u5185\u5bb9\u548c\u8bc4\u8bba\u5217\u8868\n  2. \u7ec4\u4ef6\u9996\u6b21\u6e32\u67d3\uff0c\u4f5c\u8005 ID \u8fd8\u4e0d\u5b58\u5728\uff0c\u56e0\u6b64\u4e0d\u53d1\u9001\u4efb\u4f55\u8bf7\u6c42\n  3. \u6587\u7ae0\u5185\u5bb9\u8bf7\u6c42\u8fd4\u56de\u540e\uff0c\u83b7\u5f97\u4e86\u4f5c\u8005 ID\uff0c\u7136\u540e\u53d1\u9001\u8bf7\u6c42\u83b7\u53d6\u7528\u6237\u4fe1\u606f\n  4. \u5c55\u793a\u7528\u6237\u4fe1\u606f\n */\n\n  if (error) return 'Failed.';\n  if (!article || loading) return 'Loading...';\n  return (\n    <div className=\"exp-09-article-view\">\n      <h1>\n        {id}. {article.title}\n      </h1>\n      {user && (\n        <div className=\"user-info\">\n          <img src={user.avatar} height=\"40px\" alt=\"user\" />\n          <div>{user.name}</div>\n          <div>{article.createdAt}</div>\n        </div>\n      )}\n      <p>{article.content}</p>\n      <CommentList data={comments || []} />\n    </div>\n  );\n};\n\n// Just for show example usage of ArticleView component\nexport default () => {\n  const [id, setId] = useState(1);\n  return (\n    <div className=\"exp-09-article-view-wrapper\">\n      <ul>\n        {[1, 2, 3, 4, 5].map((item, idx) => {\n          return (\n            <li key={idx} onClick={() => setId(item)}>\n              Article {item}\n            </li>\n          );\n        })}\n      </ul>\n      <ArticleView id={id} />\n    </div>\n  );\n};",lang:"jsx"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5f02\u6b65\u8bf7\u6c42\uff0c\u90fd\u662f\u57fa\u4e8e\u6570\u636e\u7684\u72b6\u6001\u53bb\u8fdb\u884c\u7684\uff0c\u8981 ",r.a.createElement("strong",null,"\u5229\u7528\u72b6\u6001\u7684\u7ec4\u5408\u53d8\u5316\u6765\u5b9e\u73b0\u5e76\u53d1\u548c\u4e32\u884c\u8bf7\u6c42"))),r.a.createElement("hr",null),r.a.createElement("h2",{id:"\u51fd\u6570\u7ec4\u4ef6\u8bbe\u8ba1\u6a21\u5f0f"},r.a.createElement(l["AnchorLink"],{to:"#\u51fd\u6570\u7ec4\u4ef6\u8bbe\u8ba1\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u51fd\u6570\u7ec4\u4ef6\u8bbe\u8ba1\u6a21\u5f0f"),r.a.createElement("hr",null),r.a.createElement("ol",null,r.a.createElement("li",null,"\u5bb9\u5668\u6a21\u5f0f")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u8bbe\u8ba1\u6a21\u5f0f\u5c31\u662f ",r.a.createElement("strong",null,"\u9488\u5bf9\u7279\u5b9a\u573a\u666f\uff0c\u63d0\u4f9b\u4e00\u79cd\u516c\u8ba4\u7684\u6700\u4f73\u5b9e\u8df5")),r.a.createElement("li",null,"Hooks \u6709\u4e00\u4e2a\u91cd\u8981\u89c4\u5219\uff1aHooks \u5fc5\u987b\u5728\u9876\u5c42\u4f5c\u7528\u57df\u8c03\u7528\uff0c\u800c\u4e0d\u80fd\u653e\u5728\u6761\u4ef6\u5224\u65ad\u3001\u5faa\u73af\u8bed\u53e5\u4e2d\uff0c\u540c\u65f6\u4e5f\u4e0d\u80fd\u5728\u53ef\u80fd\u7684 return \u8bed\u53e5\u4e4b\u540e\u6267\u884c\u3002\u4e5f\u5c31\u662f\u8bf4\uff0cHooks \u5fc5\u987b\u6309\u987a\u5e8f\u6267\u884c\u5230\uff0c\u8fd9\u662f\u56e0\u4e3a React \u9700\u8981\u5728\u51fd\u6570\u7ec4\u4ef6\u5185\u90e8\u7ef4\u62a4\u6240\u7528\u5230\u7684 Hooks \u7684\u72b6\u6001")),r.a.createElement(o["a"],{code:"import Modal from '@/components/Modal';\nimport useUser from '@/hooks/useUser';\n\nconst UserInfoModal = ({ visible, userId, ...rest }) => {\n  if (!visible) return null;\n  // visible\u4e3afalse\u65f6\uff0c\u4e0d\u6e32\u67d3\u4efb\u4f55\u5185\u5bb9\n  const { data, loading, error } = useUser(userId);\n  // hooks\u5728\u53ef\u80fd\u7684return\u4e4b\u540e\uff0c\u4f1a\u51fa\u73b0\u62a5\u9519\n  return (\n    <Modal visible={visible} {...rest}>\n      {/* \u5bf9\u8bdd\u6846\u5185\u5bb9 */}\n    </Modal>\n  );\n};",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u90a3\u4e48\u4e0a\u8ff0\u7684\u5199\u6cd5\u5b9e\u9645\u4e0a\u662f\u975e\u5e38\u76f4\u89c2\u7684\uff0c\u4f46\u662f\u5374\u901a\u4e0d\u8fc7\u7f16\u8bd1\uff0c\u56e0\u4e3a ",r.a.createElement("code",null,"useUser")," \u5728\u53ef\u80fd\u7684 return \u8bed\u53e5\u4e4b\u540e\uff0c\u56e0\u6b64\u6211\u4eec\u8981\u4f7f\u7528\u7b80\u6d01\u7684\u7684\u6a21\u5f0f\u6765\u5b9e\u73b0\u8fd9\u6837\u7684\u903b\u8f91\uff0c\u5c31\u662f ",r.a.createElement("em",null,"\u5bb9\u5668\u6a21\u5f0f"))),r.a.createElement(o["a"],{code:"// \u5728\u771f\u6b63\u7684\u5f39\u51fa\u6846\u5916\u5c42\u52a0\u4e00\u4e2a\u5bb9\u5668\uff0c\u5b9e\u73b0\u6761\u4ef6\u6e32\u67d3\nexport default ({ visible, ...rest }) => {\n  if (!visible) return null;\n  // \u5982\u679c\u5bf9\u8bdd\u6846\u4e0d\u663e\u793a\uff0c\u5219\u4e0dreturn\u4efb\u4f55\u5185\u5bb9\n\n  // \u5426\u5219\u6267\u884c\u771f\u6b63\u6e32\u67d3\u5f39\u7a97\u903b\u8f91\n  return <UserInfoModal visible={visible} {...rest} />;\n};",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7efc\u4e0a\u6240\u8ff0\uff0c\u5177\u4f53\u505a\u6cd5\u5c31\u662f ",r.a.createElement("strong",null,"\u628a\u6761\u4ef6\u5224\u65ad\u7684\u7ed3\u679c\u653e\u5230\u4e24\u4e2a\u7ec4\u4ef6\u4e4b\u4e2d\uff0c\u786e\u4fdd\u771f\u6b63 render UI \u7684\u7ec4\u4ef6\u6536\u5230\u7684\u6240\u6709\u5c5e\u6027\u90fd\u662f\u6709\u503c\u7684"),"\u3002\u5728\u5bb9\u5668\u6a21\u5f0f\u4e2d\uff0c\u6761\u4ef6\u7684\u9694\u79bb\u5bf9\u8c61\u662f\u591a\u4e2a\u5b50\u7ec4\u4ef6\uff0c\u8fd9\u5c31\u610f\u5473\u7740\u5b83\u901a\u5e38\u7528\u4e8e\u4e00\u4e9b\u6bd4\u8f83\u5927\u5757\u903b\u8f91\u7684\u9694\u79bb"),r.a.createElement("li",null,"\u90a3\u4e48\uff0c\u9664\u4e86\u5bb9\u5668\u6a21\u5f0f\u4ee5\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u5c06\u5224\u65ad\u6761\u4ef6\u653e\u5230 Hooks \u4e2d\u53bb,\u5c06\u6761\u4ef6\u8bed\u53e5\u81ea\u5305\u542b\u5728 Hook \u4e4b\u4e2d")),r.a.createElement(o["a"],{code:"const useUser = (id) => {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(false);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    if (!id) return;\n    // \u5f53id\u4e0d\u5b58\u5728\uff0c\u526f\u4f5c\u7528\u91cc\u9762\u4e0d\u505a\u4efb\u4f55\u4e8b\u60c5\n    // ...\n  });\n};",lang:"js"}),r.a.createElement("ul",null,r.a.createElement("li",null,"\u901a\u8fc7\u8fd9\u6837\u4e00\u4e2a\u5bb9\u5668\u6a21\u5f0f\uff0c\u6211\u4eec\u628a\u539f\u6765\u9700\u8981\u6761\u4ef6\u8fd0\u884c\u7684 Hooks \u62c6\u5206\u6210\u5b50\u7ec4\u4ef6\uff0c\u7136\u540e\u901a\u8fc7\u4e00\u4e2a\u5bb9\u5668\u7ec4\u4ef6\u6765\u8fdb\u884c\u5b9e\u9645\u7684\u6761\u4ef6\u5224\u65ad\uff0c\u4ece\u800c\u6e32\u67d3\u4e0d\u540c\u7684\u7ec4\u4ef6\uff0c\u5b9e\u73b0\u6309\u6761\u4ef6\u6e32\u67d3\u7684\u76ee\u7684\u3002\u8fd9\u5728\u4e00\u4e9b\u590d\u6742\u7684\u573a\u666f\u4e4b\u4e0b\uff0c\u4e5f\u80fd\u8fbe\u5230\u62c6\u5206\u590d\u6742\u5ea6\uff0c\u8ba9\u6bcf\u4e2a\u7ec4\u4ef6\u66f4\u52a0\u7cbe\u7b80\u7684\u76ee\u7684")),r.a.createElement("ol",{start:2},r.a.createElement("li",null,"render props")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"\u628a\u4e00\u4e2a render \u51fd\u6570\u4f5c\u4e3a\u5c5e\u6027\u4f20\u9012\u7ed9\u67d0\u4e2a\u7ec4\u4ef6\uff0c\u7531\u8fd9\u4e2a\u7ec4\u4ef6\u53bb\u6267\u884c\u8fd9\u4e2a\u51fd\u6570\u4ece\u800c render \u5b9e\u9645\u7684\u5185\u5bb9"),"\uff0c\u8fd9\u5c31\u662f ",r.a.createElement("code",null,"render props"),"\u3002\u5728 class \u7ec4\u4ef6\u4e2d\uff0cHOC \u548c render props \u4e24\u79cd\u6a21\u5f0f\u5c5e\u4e8e\u903b\u8f91\u91cd\u7528\u7684\u4e24\u79cd\u65b9\u5f0f"),r.a.createElement("li",null,"\u4f46 Hooks \u6709\u4e00\u4e2a\u5c40\u9650\uff0c\u5b83\u53ea\u80fd\u7528\u4f5c\u6570\u636e\u903b\u8f91\u7684\u91cd\u7528(\u53ea\u80fd\u66ff\u4ee3\u7eaf\u6570\u636e\u903b\u8f91\u7684 render props)\uff0c\u800c\u4e00\u65e6\u6d89\u53ca UI \u8868\u73b0\u903b\u8f91\u7684\u91cd\u7528\uff0c\u5c31\u4f1a\u660e\u663e\u4e0d\u8db3\uff0c\u4f46\u8fd9\u6b63\u662f render props \u64c5\u957f\u7684\u5730\u65b9"))),r.a.createElement(s["default"],n["usageScenario-demo"].previewerProps,r.a.createElement(t,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("ul",null,r.a.createElement("li",null,"\u5f53\u7136\uff0c\u4f60\u4e0d\u4e00\u5b9a\u8981\u4f7f\u7528 children \u5c5e\u6027\uff0c\u8fd8\u53ef\u4ee5\u662f\u5176\u4ed6\u5c5e\u6027\uff0c\u53ea\u8981\u5c06\u8fd9\u4e2a\u51fd\u6570\u4f5c\u4e3a\u5c5e\u6027\u4f20\u7ed9\u7ec4\u4ef6\u5373\u53ef"))),r.a.createElement(s["default"],n["usageScenario-demo-1"].previewerProps,r.a.createElement(a,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u4f3c\u5730\u5b9e\u4f8b")),r.a.createElement(o["a"],{code:"import React from 'react';\nimport Popover from 'antd/lib/popover/index';\n\nconst ListWithMore = ({ renderItem, data = [], max }) => {\n  const elements = data.map((item, index) => renderItem(item, index, data));\n  const show = elements.slice(0, max);\n  const hide = elements.slice(max);\n\n  return (\n    <span>\n      {show}\n      {hide?.length > 0 && (\n        <Popover content={<div style={{ maxWidth: 500 }}>{hide}</div>}>\n          <span className=\"more-items-wrapper\">\n            and{' '}\n            <span style={{ color: '#2175bc' }} className=\"more-items-trigger\">\n              {hide.length} more...\n            </span>\n          </span>\n        </Popover>\n      )}\n    </span>\n  );\n};\n\nconst data = [\n  {\n    id: '1',\n    name: 'Kennedy',\n    job: 'Chief Mobility Orchestrator',\n    city: 'North Alec',\n  },\n  {\n    id: '2',\n    name: 'Lucius',\n    job: 'Internal Research Manager',\n    city: 'Littleland',\n  },\n  {\n    id: '3',\n    name: 'Carlos',\n    job: 'Lead Configuration Analyst',\n    city: 'South Lillian',\n  },\n  {\n    id: '4',\n    name: 'Urban',\n    job: 'Chief Operations Agent',\n    city: 'Shieldshaven',\n  },\n  {\n    id: '5',\n    name: 'Katrine',\n    job: 'Legacy Solutions Orchestrator',\n    city: 'South Kyleigh',\n  },\n  {\n    id: '6',\n    name: 'Kennedi',\n    job: 'Global Assurance Developer',\n    city: 'East Jaunitaville',\n  },\n  {\n    id: '7',\n    name: 'Mariah',\n    job: 'Forward Functionality Administrator',\n    city: 'West Kody',\n  },\n  {\n    id: '8',\n    name: 'Danika',\n    job: 'Forward Applications Developer',\n    city: 'Lake Max',\n  },\n  {\n    id: '9',\n    name: 'Freeda',\n    job: 'Legacy Tactics Officer',\n    city: 'North Brandonview',\n  },\n  {\n    id: '10',\n    name: 'Lila',\n    job: 'Future Research Coordinator',\n    city: 'South Helenabury',\n  },\n];\n\nfunction ListWithMoreExample() {\n  return (\n    <div className=\"exp-10-list-with-more\">\n      <h1>User Names</h1>\n      <div className=\"user-names\">\n        Liked by:{' '}\n        <ListWithMore\n          renderItem={(user, index) => {\n            return (\n              <>\n                <span style={{ color: '#2175bc' }} key={index} className=\"user-name\">\n                  {user.name}\n                </span>\n                ,\n              </>\n            );\n          }}\n          data={data}\n          max={3}\n        />\n      </div>\n      <br />\n      <br />\n      <h1>User List</h1>\n      <div className=\"user-list\">\n        <div\n          style={{ display: 'grid', gridTemplateColumns: '80px 160px 280px', fontWeight: 'blod' }}\n          className=\"user-list-row user-list-row-head\"\n        >\n          <span style={{ border: '1px solid #eee', padding: '5px' }} className=\"user-name-cell\">\n            Name\n          </span>\n          <span style={{ border: '1px solid #eee', padding: '5px' }}>City</span>\n          <span style={{ border: '1px solid #eee', padding: '5px' }}>Job Title</span>\n        </div>\n        <ListWithMore\n          renderItem={(user, index) => {\n            return (\n              <div\n                style={{ display: 'grid', gridTemplateColumns: '80px 160px 280px' }}\n                key={index}\n                className=\"user-list-row\"\n              >\n                <span\n                  style={{ border: '1px solid #eee', padding: '5px' }}\n                  className=\"user-name-cell\"\n                >\n                  {user.name}\n                </span>\n                <span style={{ border: '1px solid #eee', padding: '5px' }}>{user.city}</span>\n                <span style={{ border: '1px solid #eee', padding: '5px' }}>{user.job}</span>\n              </div>\n            );\n          }}\n          data={data}\n          max={5}\n        />\n      </div>\n    </div>\n  );\n}\n\nexport default ListWithMoreExample;",lang:"jsx"}),r.a.createElement("hr",null),r.a.createElement("h2",{id:"\u4e8b\u4ef6\u5904\u7406\u81ea\u5b9a\u4e49\u4e8b\u4ef6"},r.a.createElement(l["AnchorLink"],{to:"#\u4e8b\u4ef6\u5904\u7406\u81ea\u5b9a\u4e49\u4e8b\u4ef6","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4e8b\u4ef6\u5904\u7406/\u81ea\u5b9a\u4e49\u4e8b\u4ef6"),r.a.createElement("hr",null),r.a.createElement("ol",null,r.a.createElement("li",null,"\u5408\u6210\u4e8b\u4ef6")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5728 React \u4e2d\uff0c\u7236\u5b50\u7ec4\u4ef6\u901a\u8fc7 props \u8fdb\u884c\u4ea4\u4e92\uff0c\u4e00\u822c\u662f\u7236\u7ec4\u4ef6\u901a\u8fc7 props \u5c06\u503c\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\uff0c\u4f46\u5b50\u7ec4\u4ef6\u4e5f\u53ef\u4ee5\u901a\u8fc7\u66b4\u9732\u4e00\u4e9b\u4e8b\u4ef6\uff0c\u7ed9\u7236\u7ec4\u4ef6\u4f20\u9012\u6570\u636e"),r.a.createElement("li",null,"\u7531\u4e8e React \u4e2d\u5b58\u5728\u865a\u62df Dom\uff0c\u5728 React \u4e2d\u5373\u4f7f\u7ed1\u5b9a\u4e00\u4e2a\u4e8b\u4ef6\u5230\u539f\u751f\u5730 Dom \u8282\u70b9\uff0c\u4e8b\u4ef6\u4e5f\u5e76\u4e0d\u662f\u7ed1\u5b9a\u5728\u5bf9\u5e94\u7684\u8282\u70b9\u4e0a\uff0c\u800c\u662f ",r.a.createElement("strong",null,"\u6240\u6709\u7684\u4e8b\u4ef6\u90fd\u662f\u7ed1\u5b9a\u5728\u6839\u8282\u70b9\u4e0a"),"\u3002\u7136\u540e\u7531 React \u7edf\u4e00\u76d1\u542c\u548c\u7ba1\u7406\uff0c\u83b7\u53d6\u4e8b\u4ef6\u540e\u518d\u5206\u53d1\u5230\u5177\u4f53\u7684\u865a\u62df Dom \u8282\u70b9\u4e0a"),r.a.createElement("li",null,"\u5728 React 17 \u4e4b\u524d\uff0c\u6240\u6709\u7684\u4e8b\u4ef6\u90fd\u662f\u7ed1\u5b9a\u5728 document \u4e0a\u7684\uff0c\u800c\u4ece React 17 \u5f00\u59cb\uff0c",r.a.createElement("strong",null,"\u6240\u6709\u7684\u4e8b\u4ef6\u90fd\u7ed1\u5b9a\u5728\u6574\u4e2a App \u4e0a\u7684\u6839\u8282\u70b9\u4e0a"),"\uff0c\u8fd9\u4e3b\u8981\u662f\u4e3a\u4e86\u4ee5\u540e\u9875\u9762\u4e0a\u53ef\u80fd\u5b58\u5728\u591a\u7248\u672c React \u7684\u8003\u8651"),r.a.createElement("li",null,"React \u8fd9\u4e48\u505a\u7684\u539f\u56e0\u4e3b\u8981\u6709\u4e24\u4e2a\u3002\u7b2c\u4e00\uff0c\u865a\u62df DOM render \u7684\u65f6\u5019\uff0c DOM \u5f88\u53ef\u80fd\u8fd8\u6ca1\u6709\u771f\u5b9e\u5730 render \u5230\u9875\u9762\u4e0a\uff0c\u6240\u4ee5\u65e0\u6cd5\u7ed1\u5b9a\u4e8b\u4ef6\u3002\u7b2c\u4e8c\uff0cReact \u53ef\u4ee5\u5c4f\u853d\u5e95\u5c42\u4e8b\u4ef6\u7684\u7ec6\u8282\uff0c\u907f\u514d\u6d4f\u89c8\u5668\u7684\u517c\u5bb9\u6027\u95ee\u9898\u3002\u540c\u65f6\u5462\uff0c\u5bf9\u4e8e React Native \u8fd9\u79cd\u4e0d\u662f\u901a\u8fc7\u6d4f\u89c8\u5668 render \u7684\u8fd0\u884c\u65f6\uff0c\u4e5f\u80fd\u63d0\u4f9b\u4e00\u81f4\u7684 API"),r.a.createElement("li",null,"\u501f\u7531\u4e8b\u4ef6\u5192\u6ce1\u673a\u5236\uff0c\u65e0\u8bba\u4e8b\u4ef6\u5728\u54ea\u4e2a\u8282\u70b9\u88ab\u89e6\u53d1\uff0c React \u90fd\u53ef\u4ee5\u901a\u8fc7\u4e8b\u4ef6\u7684 srcElement \u8fd9\u4e2a\u5c5e\u6027\uff0c\u77e5\u9053\u5b83\u662f\u4ece\u54ea\u4e2a\u8282\u70b9\u5f00\u59cb\u53d1\u51fa\u7684\uff0c\u8fd9\u6837 React \u5c31\u53ef\u4ee5\u6536\u96c6\u7ba1\u7406\u6240\u6709\u7684\u4e8b\u4ef6\uff0c\u7136\u540e\u518d\u4ee5\u4e00\u81f4\u7684 API \u66b4\u9732\u51fa\u6765")),r.a.createElement("ol",{start:2},r.a.createElement("li",null,"\u81ea\u5b9a\u4e49\u4e8b\u4ef6")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5bf9\u4e8e\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u9664\u4e86\u53ef\u4ee5\u901a\u8fc7 props \u63a5\u6536\u53c2\u6570\u5e76\u7528\u4e8e\u6e32\u67d3\u4e4b\u5916\uff0c\u8fd8\u6709\u53ef\u80fd ",r.a.createElement("strong",null,"\u9700\u8981\u4e0e\u7236\u7ec4\u4ef6\u8fdb\u884c\u4ea4\u4e92"),"\uff0c\u90a3\u4e48\u6b64\u65f6\u5c31\u9700\u8981\u4e3a\u7ec4\u4ef6\u521b\u5efa\u81ea\u5b9a\u4e49\u4e8b\u4ef6"),r.a.createElement("li",null,"\u90a3\u4e48 ",r.a.createElement("em",null,"\u81ea\u5b9a\u4e49\u4e8b\u4ef6")," \u548c ",r.a.createElement("em",null,"\u539f\u751f\u4e8b\u4ef6")," \u7684\u533a\u522b\u5c31\u662f \u539f\u751f\u4e8b\u4ef6\u662f\u6d4f\u89c8\u5668\u7684\u673a\u5236\uff0c\u800c\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u5c5e\u4e8e\u7ec4\u4ef6\u81ea\u5df1\u7684\u884c\u4e3a\uff0c\u672c\u8d28\u662f\u4e00\u79cd\u56de\u8c03\u51fd\u6570\u673a\u5236"))),r.a.createElement(s["default"],n["usageScenario-demo-2"].previewerProps,r.a.createElement(i,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("ol",{start:3},r.a.createElement("li",null,"\u76d1\u542c\u952e\u76d8\u8f93\u5165\u4e8b\u4ef6")),r.a.createElement("ul",null,r.a.createElement("li",null,"Hooks \u5177\u5907\u7ed1\u5b9a\u4efb\u4f55\u6570\u636e\u6e90\u7684\u80fd\u529b\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u53ef\u4ee5\u628a\u4efb\u610f\u5e38\u89c1\u7684\u6570\u636e\u6e90\u7ed1\u5b9a\u5230 Hooks \u4e0a\u3002\u6bd4\u5982\u8bf4\u5c06\u952e\u76d8\u8f93\u5165\u53d8\u4e3a\u67d0\u4e2a\u72b6\u6001\uff0c\u65b9\u4fbf\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528"))),r.a.createElement(s["default"],n["usageScenario-demo-3"].previewerProps,r.a.createElement(c,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("ul",null,r.a.createElement("li",null,"\u4e0a\u9762\u7684\u53ea\u662f\u76d1\u542c\u5355\u4e2a\u6309\u952e\u7684\u8f93\u5165\u529f\u80fd\uff0c\u90a3\u4e48\u5982\u679c\u6211\u4eec\u8981\u540c\u65f6\u76d1\u542c\u4e24\u4e2a\u4ee5\u4e0a\u6309\u952e\u7684\u8f93\u5165\u5462")),r.a.createElement(o["a"],{code:"export default function useKeyPress(dom = document.body) {\n  const [key, setKey] = useState([]);\n  const isNext = useRef(true); // \u5f53keyup\u4e4b\u540e\uff0cisNext\u7f6e\u4e3atrue\u8868\u793a\u53c8\u662f\u65b0\u4e00\u8f6e\u7684\u6309\u952e\u76d1\u542c\n  useEffect(() => {\n    const handleKeyPress = (e) => {\n      if (e.type === 'keydown') {\n        if (isNext.current) setKey([]);\n        setKey((keys) => [...new Set([...keys, e.key])]); // \u53bb\u91cd\n        isNext.current = false;\n      } else {\n        isNext.current = true;\n      }\n    };\n    dom.addEventListener('keydown', handleKeyPress);\n    dom.addEventListener('keyup', handleKeyPress);\n    return () => {\n      dom.removeEventListener('keydown', handleKeyPress);\n      dom.removeEventListener('keydown', handleKeyPress);\n    };\n  }, [dom]);\n  return key.join(',');\n}",lang:"js"}))))})));n["default"]=e=>{var n=r.a.useContext(l["context"]),t=n.demos;return r.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(i,{demos:t})}}}]);