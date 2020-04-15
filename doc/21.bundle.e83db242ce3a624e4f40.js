(window.webpackJsonpR_UI=window.webpackJsonpR_UI||[]).push([[21],{215:function(n,o,t){"use strict";t.r(o),o.default="# 快速上手\n\nRedell-UI 致力于提供给程序员自己造轮子的乐趣。\n\n## 安装\n\n```bash\nnpm install redell-ui\nyarn add redell-ui\n```\n\n## 按需加载配置\n\n### 安装插件\n\n```bash\nyarn add babel-plugin-component -D\n```\n\n### 配置 webpack.config.js\n\n```js\n...\n\n{\n  test: /\\.(js|mjs|jsx|ts|tsx)$/,\n  ...\n  plugins: [\n    [\n      'component', {\n          'libraryName': 'redell-ui',\n          'styleLibrary': {\n            'name': 'css',\n            'base': false, // no base.css file\n            'path': '[module].css'\n          },\n       }\n    ]\n  ]\n}\n...\n```\n\n## 开始使用\n\n### 示例代码\n\n```react\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Button } from 'redell-ui'\n\nReactDOM.render(\n  <div>\n    <Button type=\"primary\">主要按钮</Button>\n  </div>,\n  mountNode\n)\n```\n\n### 展示效果\n"},266:function(n,o,t){"use strict";t.r(o);var r=t(0),e=t.n(r),a=t(107),i=t.n(a),l=t(8);o.default=function(){return e.a.createElement(r.Fragment,null,e.a.createElement(i.a,{source:t(215).default,className:"md"}),e.a.createElement(l.a,{type:"primary"},"主要按钮"))}},62:function(n,o,t){var r=t(63);"string"==typeof r&&(r=[[n.i,r,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};t(5)(r,e);r.locals&&(n.exports=r.locals)},63:function(n,o,t){(n.exports=t(4)(!1)).push([n.i,'@charset "UTF-8";\n@keyframes spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.r-button,\n.r-button--default {\n  font-size: 14px;\n  font-family: PingFang SC;\n  padding: 5px 16px;\n  border-radius: 2px;\n  border: 1px solid #d9d9d9;\n  background: #fff;\n  color: rgba(0, 0, 0, 0.65);\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  vertical-align: middle;\n  min-width: 32px;\n  cursor: pointer;\n  box-sizing: border-box; }\n  .r-button:focus, .r-button:hover,\n  .r-button--default:focus,\n  .r-button--default:hover {\n    outline: none; }\n  .r-button:focus:not(.disabled), .r-button:hover:not(.disabled),\n  .r-button--default:focus:not(.disabled),\n  .r-button--default:hover:not(.disabled) {\n    outline: none;\n    color: #3963BC;\n    border: 1px solid #3963BC; }\n  .r-button > .r-button-content,\n  .r-button--default > .r-button-content {\n    order: 2; }\n  .r-button > .icon,\n  .r-button--default > .icon {\n    order: 1;\n    margin-right: 0.4em; }\n  .r-button.icon-right > .r-button-content,\n  .r-button--default.icon-right > .r-button-content {\n    order: 1; }\n  .r-button.icon-right > .icon,\n  .r-button--default.icon-right > .icon {\n    order: 2;\n    margin-right: 0;\n    margin-left: 0.4em; }\n  .r-button.clearMargin,\n  .r-button--default.clearMargin {\n    padding: 0; }\n    .r-button.clearMargin > .icon,\n    .r-button--default.clearMargin > .icon {\n      margin-right: 0;\n      margin-left: 0; }\n  .r-button.circle,\n  .r-button--default.circle {\n    border-radius: 50%;\n    padding: 10px; }\n  .r-button.disabled,\n  .r-button--default.disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .r-button .loading,\n  .r-button--default .loading {\n    opacity: 0.5;\n    animation: spin 2s infinite linear; }\n  .r-button svg,\n  .r-button--default svg {\n    fill: #fff; }\n\n.r-button + .r-button {\n  margin-left: 10px; }\n\n.r-button--primary {\n  background: #3963BC;\n  color: #fff;\n  border: 1px solid #3963BC; }\n  .r-button--primary.plain {\n    color: #3963BC;\n    background: #fff;\n    border: 1px solid #3963BC; }\n    .r-button--primary.plain svg {\n      fill: #3963BC; }\n    .r-button--primary.plain:hover:not(.disabled), .r-button--primary.plain:focus:not(.disabled) {\n      background: #3963BC;\n      color: #fff;\n      border: 1px solid #3963BC; }\n      .r-button--primary.plain:hover:not(.disabled) svg, .r-button--primary.plain:focus:not(.disabled) svg {\n        fill: #fff; }\n  .r-button--primary:hover:not(.disabled), .r-button--primary:focus:not(.disabled) {\n    color: #fff;\n    background: #0037ad;\n    border: 1px solid #0037ad; }\n    .r-button--primary:hover:not(.disabled) svg, .r-button--primary:focus:not(.disabled) svg {\n      fill: #fff; }\n\n.r-button--success {\n  background: #34BFA3;\n  color: #fff;\n  border: 1px solid #34BFA3; }\n  .r-button--success.plain {\n    color: #34BFA3;\n    background: #fff;\n    border: 1px solid #34BFA3; }\n    .r-button--success.plain svg {\n      fill: #34BFA3; }\n    .r-button--success.plain:hover:not(.disabled), .r-button--success.plain:focus:not(.disabled) {\n      background: #34BFA3;\n      color: #fff;\n      border: 1px solid #34BFA3; }\n      .r-button--success.plain:hover:not(.disabled) svg, .r-button--success.plain:focus:not(.disabled) svg {\n        fill: #fff; }\n  .r-button--success:hover:not(.disabled), .r-button--success:focus:not(.disabled) {\n    color: #fff;\n    background: #009d72;\n    border: 1px solid #009d72; }\n    .r-button--success:hover:not(.disabled) svg, .r-button--success:focus:not(.disabled) svg {\n      fill: #fff; }\n\n.r-button--danger {\n  background: #F4516C;\n  color: #fff;\n  border: 1px solid #F4516C; }\n  .r-button--danger.plain {\n    color: #F4516C;\n    background: #fff;\n    border: 1px solid #F4516C; }\n    .r-button--danger.plain svg {\n      fill: #F4516C; }\n    .r-button--danger.plain:hover:not(.disabled), .r-button--danger.plain:focus:not(.disabled) {\n      background: #F4516C;\n      color: #fff;\n      border: 1px solid #F4516C; }\n      .r-button--danger.plain:hover:not(.disabled) svg, .r-button--danger.plain:focus:not(.disabled) svg {\n        fill: #fff; }\n  .r-button--danger:hover:not(.disabled), .r-button--danger:focus:not(.disabled) {\n    color: #fff;\n    background: #d62f40;\n    border: 1px solid #d62f40; }\n    .r-button--danger:hover:not(.disabled) svg, .r-button--danger:focus:not(.disabled) svg {\n      fill: #fff; }\n\n.r-button--reverse {\n  background: #DEE2E6;\n  color: #fff;\n  border: 1px solid #DEE2E6; }\n  .r-button--reverse.plain {\n    color: #8C98AE;\n    background: #fff;\n    border: 1px solid #8C98AE; }\n    .r-button--reverse.plain svg {\n      fill: #8C98AE; }\n    .r-button--reverse.plain:hover:not(.disabled), .r-button--reverse.plain:focus:not(.disabled) {\n      background: #DEE2E6;\n      color: #fff;\n      border: 1px solid #DEE2E6; }\n      .r-button--reverse.plain:hover:not(.disabled) svg, .r-button--reverse.plain:focus:not(.disabled) svg {\n        fill: #fff; }\n  .r-button--reverse:hover:not(.disabled), .r-button--reverse:focus:not(.disabled) {\n    color: #fff;\n    background: #BFCBD7;\n    border: 1px solid #BFCBD7; }\n    .r-button--reverse:hover:not(.disabled) svg, .r-button--reverse:focus:not(.disabled) svg {\n      fill: #fff; }\n\n.ripple {\n  position: relative;\n  overflow: hidden; }\n\n/*button 水波纹点击效果*/\n.ripple:after {\n  content: "";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #000 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s; }\n\n.ripple:active:after {\n  transform: scale(0, 0);\n  opacity: 0.2;\n  transition: 0s; }\n',""])},8:function(n,o,t){"use strict";var r=t(1),e=t(0),a=t.n(e),i=t(3),l=t(2),d=(t(62),function(n){var o=n.type,t=n.plain,e=n.circle,d=n.disabled,s=n.ripple,u=n.icon,b=n.loading,c=n.iconPosition,f=n.children,p=n.className,g=n.htmlType,m=r.c(n,["type","plain","circle","disabled","ripple","icon","loading","iconPosition","children","className","htmlType"]),v=Object(l.b)(p,"r-button","r-button--"+o,"icon-"+c,t?"plain":"",e?"circle clearMargin":"",d?"disabled":"",s&&!d?"ripple":"");return a.a.createElement("button",r.a({className:v},m,{disabled:d,type:g}),""===u||void 0===u||b?null:a.a.createElement(i.a,{className:"icon",name:u}),b?a.a.createElement(i.a,{className:"loading icon",name:"loading",color:"#fff"}):null,a.a.createElement("div",{className:"r-button-content"},f))});d.defaultProps={type:"default",htmlType:"button",plain:!1,circle:!1,disabled:!1,ripple:!0,loading:!1,iconPosition:"left"},d.displayName="Button",o.a=d}}]);