(window.webpackJsonpR_UI=window.webpackJsonpR_UI||[]).push([[21],{102:function(e,n,t){var a=t(103);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(5)(a,o);a.locals&&(e.exports=a.locals)},103:function(e,n,t){(e.exports=t(4)(!1)).push([e.i,".CodeMirror {\n  height: auto; }\n\n.cm-s-neo.CodeMirror {\n  padding-bottom: 10px;\n  background: #e9f0f8; }\n\n.md {\n  padding-top: 40px; }\n  .md blockquote {\n    padding: 0 1em;\n    border-left: .25em solid #dfe2e5;\n    color: #6a737d; }\n    .md blockquote p {\n      margin-top: 10px;\n      margin-bottom: 10px; }\n  .md h1 {\n    padding-bottom: 20px;\n    font-weight: 500;\n    font-size: 24px;\n    color: #45526B; }\n  .md h2,\n  .md h3 {\n    padding: 20px;\n    padding-left: 0px;\n    font-weight: 500;\n    font-size: 20px;\n    color: #45526B; }\n  .md h3 {\n    font-size: 18px; }\n  .md table {\n    display: table;\n    border-collapse: collapse;\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 40px;\n    color: #45526b; }\n    .md table thead {\n      line-height: 50px;\n      background: #e8f0f9; }\n      .md table thead tr:first-child {\n        border-bottom: 1px solid transparent; }\n      .md table thead tr {\n        height: 50px; }\n      .md table thead td,\n      .md table thead th:not(:last-child) {\n        border: none; }\n      .md table thead th {\n        padding: 0.6em 1em;\n        font-weight: 500;\n        text-align: left; }\n    .md table tbody tr:first-child {\n      border-bottom: 1px solid transparent; }\n    .md table tbody tr:nth-child(2n) {\n      background-color: #f8f9fa; }\n    .md table tbody tr {\n      height: 40px;\n      line-height: 40px; }\n      .md table tbody tr td {\n        padding: .6em 1em;\n        color: #596c8e; }\n  .md a {\n    color: #3683d6; }\n  .md code {\n    padding: 0.15rem 0.5rem;\n    margin: 0;\n    border-radius: 4px;\n    color: #3683d6;\n    background-color: #e4f1ff; }\n  .md p {\n    margin-bottom: 50px;\n    color: #45526B; }\n  .md pre {\n    padding: 10px;\n    margin-bottom: 30px;\n    line-height: 30px;\n    text-indent: -7px;\n    background: #f2f4f5; }\n  .md pre code {\n    color: #314659;\n    background: transparent; }\n  .md ol,\n  .md p,\n  .md ul {\n    line-height: 2; }\n  .md ol,\n  .md ul {\n    padding-left: 1.2em; }\n    .md ol li,\n    .md ul li {\n      list-style: disc;\n      color: #45526B; }\n",""])},104:function(e,n,t){var a=t(105);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(5)(a,o);a.locals&&(e.exports=a.locals)},105:function(e,n,t){(e.exports=t(4)(!1)).push([e.i,".r-code-card {\n  max-width: 1000px;\n  padding: 20px;\n  padding-bottom: 30px;\n  margin: 30px 0;\n  border: 1px solid #dee2e6;\n  box-shadow: 2px 2px 30px #c7ccd7; }\n  .r-code-card > .content {\n    padding: 10px 30px; }\n  .r-code-card > .title {\n    position: relative;\n    height: 1px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    background: #d3dce6; }\n    .r-code-card > .title span {\n      position: absolute;\n      top: 50%;\n      padding-right: 10px;\n      padding-left: 10px;\n      font-weight: bold;\n      color: #45526B;\n      background: #fff;\n      transform: translate(50px, -50%); }\n  .r-code-card .sub-title {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #596c8e; }\n    .r-code-card .sub-title .icon {\n      margin-left: 10px;\n      cursor: pointer; }\n      .r-code-card .sub-title .icon.open {\n        outline: none;\n        transform: rotate(-90deg);\n        transition: 0.3s;\n        transition-property: all; }\n      .r-code-card .sub-title .icon.close {\n        outline: none;\n        transform: rotate(90deg);\n        transition: 0.3s;\n        transition-property: all; }\n",""])},106:function(e,n,t){"use strict";var a=t(0),o=t.n(a),i=t(3),r=t(2),l=t(19),m=t(108);t(109),t(110),t(111),t(112),t(102),t(114),t(115);t(113);var d,c=o.a.createRef(),u=function(e){return o.a.createElement("div",{style:{fontSize:"1em",lineHeight:1.4,background:"#e9f0f8",fontFamily:"Hack, monospace"}},o.a.createElement(l.a,{in:1===e.scaleMultiple,timeout:300,unmountOnExit:!0,onEnter:function(e){var n=c.current;if(n){var t=n.getBoundingClientRect(),a=t.top,o=t.bottom;d=o-a+"px",e.style.opacity="0",e.style.height="0"}},onEntering:function(e){e.style.height=d,e.style.marginTop="20px",e.style.opacity="1",e.style.transition="all 0.3s ease"},onExit:function(e){e.style.height=d,e.style.opacity="1"},onExiting:function(e){e.style.height="0",e.style.marginTop="0",e.style.opacity="0",e.style.transition="all 0.3s ease"}},o.a.createElement("div",{ref:c},o.a.createElement(m.Controlled,{onBeforeChange:function(e,n,t){},value:e.value,options:{mode:"jsx",theme:"neo",keyMap:"sublime",lineNumbers:!0},onChange:function(e,n,t){}}))))};t(104),n.a=function(e){var n=e.children,t=e.title,l=e.code,m=e.summary,d=Object(a.useState)(0),c=d[0],p=d[1];return o.a.createElement("div",{className:"r-code-card"},o.a.createElement("div",{className:"content"},n),o.a.createElement("div",{className:"title"},o.a.createElement("span",null,t)),o.a.createElement("div",{className:"sub-title"},m," ",o.a.createElement(i.a,{color:"#596c8e",className:Object(r.b)("icon",1===c?"open":"close"),name:"right",onClick:function(){p(0===c?1:0)}})),o.a.createElement(u,{scaleMultiple:c,value:l}))}},251:function(e,n,t){"use strict";t.r(n),n.default="# Menu 导航菜单\n为页面提供导航的菜单列表。\n\n# 何时使用\n网站顶部和左侧的导航。\n\n# 代码示例"},252:function(e,n,t){"use strict";t.r(n),n.default="# API\n\n## Menu\n|    属性    |   说明   |    类型    |  默认值  | 是否必须 |\n| --------- | ------- | --------- | ------- | -------  |\n| mode    | 模式 |  horizontal \\| vertical   | horizontal | 否 |\n| selectedKey | 当前激活子选项的 key |  string   | -   | - |\n| expandKeys | 当前展开子菜单的 key 数组 |  string[]   | -   | - |\n| expandKeysOnlyOne | 是否只能同时展开一个子菜单|  boolean   | true   | - |\n| defaultSelectedKey | 默认激活子选项的 key |  string   | -   | 否 |\n| defaultExpandKeys  | 默认展开子菜单的 key 数组 |  string[]   | -  | 否 |\n| onSelectedChange   | 激活子选项改变时的回调 | \t(selectedKey: string) => any  | - | 否 |\n| onExpandChange   | 展开子菜单改变时的回调 | (expandKeys: string[]) => any | - | 否 |\n\n## SubMenu\n|    属性    |   说明   |    类型    |  默认值  | 是否必须 |\n| --------- | ------- | --------- | ------- | -------  |\n| key    | 唯一标志 |  string   | - | 是 |\n\n## MenuItem\n|    属性    |   说明   |    类型    |  默认值  | 是否必须 |\n| --------- | ------- | --------- | ------- | -------  |\n| key    | 唯一标志 |  string   | - | 是 |"},280:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(107),r=t.n(i),l=t(106),m=t(12),d=t(13),c=t(14);n.default=function(){return o.a.createElement(a.Fragment,null,o.a.createElement(r.a,{source:t(251).default,className:"md"}),o.a.createElement(l.a,{title:"水平导航",summary:"水平的顶部导航菜单。",code:' \n      <Menu >\n        <MenuItem key="item1">Option 1</MenuItem>\n        <MenuItem key="item2">Option 2</MenuItem>\n        <MenuItem key="item3">Option 3</MenuItem>\n        <SubMenu key="sub" title="SubMenu">\n          <MenuItem key="item4">Option 4</MenuItem>\n          <MenuItem key="item5">Option 5</MenuItem>\n          <SubMenu key="sub-two" title="SubMenu">\n            <MenuItem key="item6">Option 6</MenuItem>\n            <MenuItem key="item7">Option 7</MenuItem>\n            <MenuItem key="item8">Option 8</MenuItem>\n          </SubMenu>\n        </SubMenu>\n      </Menu>'},o.a.createElement(m.a,{style:{marginBottom:"240px"}},o.a.createElement(d.a,{key:"item1"},"Option 1"),o.a.createElement(d.a,{key:"item2"},"Option 2"),o.a.createElement(d.a,{key:"item3"},"Option 3"),o.a.createElement(c.a,{key:"sub",title:"SubMenu"},o.a.createElement(d.a,{key:"item4"},"Option 4"),o.a.createElement(d.a,{key:"item5"},"Option 5"),o.a.createElement(c.a,{key:"sub-two",title:"SubMenu"},o.a.createElement(d.a,{key:"item6"},"Option 6"),o.a.createElement(d.a,{key:"item7"},"Option 7"),o.a.createElement(d.a,{key:"item8"},"Option 8"))))),o.a.createElement(l.a,{title:"垂直导航",summary:"垂直的侧边导航菜单。",code:' \n      <Menu mode="vertical" style={{ marginBottom: "10px" }}>\n        <MenuItem key="item1">Option 1</MenuItem>\n        <MenuItem key="item2">Option 2</MenuItem>\n        <MenuItem key="item3">Option 3</MenuItem>\n        <SubMenu key="sub" title="SubMenu">\n          <MenuItem key="item4">Option 4</MenuItem>\n          <MenuItem key="item5">Option 5</MenuItem>\n          <SubMenu key="sub-two" title="SubMenu">\n            <MenuItem key="item6">Option 6</MenuItem>\n            <MenuItem key="item7">Option 7</MenuItem>\n            <MenuItem key="item8">Option 8</MenuItem>\n          </SubMenu>\n        </SubMenu>\n      </Menu>'},o.a.createElement(m.a,{mode:"vertical",style:{height:"400px",width:"220px",borderRight:"1px solid #dedede"}},o.a.createElement(d.a,{key:"item1"},"Option 1"),o.a.createElement(d.a,{key:"item2"},"Option 2"),o.a.createElement(d.a,{key:"item3"},"Option 3"),o.a.createElement(c.a,{key:"sub",title:"SubMenu"},o.a.createElement(d.a,{key:"item4"},"Option 4"),o.a.createElement(d.a,{key:"item5"},"Option 5"),o.a.createElement(c.a,{key:"sub-two",title:"SubMenu"},o.a.createElement(d.a,{key:"item6"},"Option 6"),o.a.createElement(d.a,{key:"item7"},"Option 7"),o.a.createElement(d.a,{key:"item8"},"Option 8"))))),o.a.createElement(r.a,{source:t(252).default,className:"md"}))}}}]);