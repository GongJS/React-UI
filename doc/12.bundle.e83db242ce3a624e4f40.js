(window.webpackJsonpR_UI=window.webpackJsonpR_UI||[]).push([[12],{102:function(e,n,t){var i=t(103);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(5)(i,r);i.locals&&(e.exports=i.locals)},103:function(e,n,t){(e.exports=t(4)(!1)).push([e.i,".CodeMirror {\n  height: auto; }\n\n.cm-s-neo.CodeMirror {\n  background: #e9f0f8;\n  padding-bottom: 10px; }\n\n.md {\n  padding-top: 40px; }\n  .md blockquote {\n    padding: 0 1em;\n    color: #6a737d;\n    border-left: .25em solid #dfe2e5; }\n    .md blockquote p {\n      margin-bottom: 10px;\n      margin-top: 10px; }\n  .md h1 {\n    color: #45526B;\n    font-weight: 500;\n    font-size: 24px;\n    padding-bottom: 20px; }\n  .md h2,\n  .md h3 {\n    color: #45526B;\n    font-weight: 500;\n    font-size: 20px;\n    padding: 20px;\n    padding-left: 0px; }\n  .md h3 {\n    font-size: 18px; }\n  .md table {\n    border-collapse: collapse;\n    display: table;\n    width: 100%;\n    max-width: 100%;\n    color: #45526b;\n    margin-bottom: 40px; }\n    .md table thead {\n      background: #e8f0f9;\n      line-height: 50px; }\n      .md table thead tr:first-child {\n        border-bottom: 1px solid transparent; }\n      .md table thead tr {\n        height: 50px; }\n      .md table thead td,\n      .md table thead th:not(:last-child) {\n        border: none; }\n      .md table thead th {\n        font-weight: 500;\n        text-align: left;\n        padding: 0.6em 1em; }\n    .md table tbody tr:first-child {\n      border-bottom: 1px solid transparent; }\n    .md table tbody tr:nth-child(2n) {\n      background-color: #f8f9fa; }\n    .md table tbody tr {\n      height: 40px;\n      line-height: 40px; }\n      .md table tbody tr td {\n        color: #596c8e;\n        padding: .6em 1em; }\n  .md a {\n    color: #3683d6; }\n  .md code {\n    color: #3683d6;\n    padding: 0.15rem 0.5rem;\n    margin: 0;\n    background-color: #e4f1ff;\n    border-radius: 4px; }\n  .md p {\n    margin-bottom: 50px;\n    color: #45526B; }\n  .md pre {\n    margin-bottom: 30px;\n    background: #f2f4f5;\n    line-height: 30px;\n    padding: 10px;\n    text-indent: -7px; }\n  .md pre code {\n    color: #314659;\n    background: transparent; }\n  .md ol,\n  .md p,\n  .md ul {\n    line-height: 2; }\n  .md ol,\n  .md ul {\n    padding-left: 1.2em; }\n    .md ol li,\n    .md ul li {\n      list-style: disc;\n      color: #45526B; }\n",""])},104:function(e,n,t){var i=t(105);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(5)(i,r);i.locals&&(e.exports=i.locals)},105:function(e,n,t){(e.exports=t(4)(!1)).push([e.i,".r-code-card {\n  border: 1px solid #dee2e6;\n  padding: 20px;\n  padding-bottom: 30px;\n  margin: 30px 0;\n  max-width: 1000px;\n  box-shadow: 2px 2px 30px #c7ccd7; }\n  .r-code-card > .content {\n    padding: 10px 30px; }\n  .r-code-card > .title {\n    position: relative;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    height: 1px;\n    background: #d3dce6; }\n    .r-code-card > .title span {\n      position: absolute;\n      top: 50%;\n      transform: translate(50px, -50%);\n      background: #fff;\n      padding-left: 10px;\n      padding-right: 10px;\n      color: #45526B;\n      font-weight: bold; }\n  .r-code-card .sub-title {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: #596c8e; }\n    .r-code-card .sub-title .icon {\n      cursor: pointer;\n      margin-left: 10px; }\n      .r-code-card .sub-title .icon.open {\n        outline: none;\n        transition: 0.3s;\n        transition-property: all;\n        transform: rotate(-90deg); }\n      .r-code-card .sub-title .icon.close {\n        outline: none;\n        transition: 0.3s;\n        transition-property: all;\n        transform: rotate(90deg); }\n",""])},106:function(e,n,t){"use strict";var i=t(0),r=t.n(i),a=t(3),o=t(2),l=t(19),s=t(108);t(109),t(110),t(111),t(112),t(102),t(114),t(115);t(113);var c,d=r.a.createRef(),u=function(e){return r.a.createElement("div",{style:{fontSize:"1em",lineHeight:1.4,background:"#e9f0f8",fontFamily:"Hack, monospace"}},r.a.createElement(l.a,{in:1===e.scaleMultiple,timeout:300,unmountOnExit:!0,onEnter:function(e){var n=d.current;if(n){var t=n.getBoundingClientRect(),i=t.top,r=t.bottom;c=r-i+"px",e.style.opacity="0",e.style.height="0"}},onEntering:function(e){e.style.height=c,e.style.marginTop="20px",e.style.opacity="1",e.style.transition="all 0.3s ease"},onExit:function(e){e.style.height=c,e.style.opacity="1"},onExiting:function(e){e.style.height="0",e.style.marginTop="0",e.style.opacity="0",e.style.transition="all 0.3s ease"}},r.a.createElement("div",{ref:d},r.a.createElement(s.Controlled,{onBeforeChange:function(e,n,t){},value:e.value,options:{mode:"jsx",theme:"neo",keyMap:"sublime",lineNumbers:!0},onChange:function(e,n,t){}}))))};t(104),n.a=function(e){var n=e.children,t=e.title,l=e.code,s=e.summary,c=Object(i.useState)(0),d=c[0],m=c[1];return r.a.createElement("div",{className:"r-code-card"},r.a.createElement("div",{className:"content"},n),r.a.createElement("div",{className:"title"},r.a.createElement("span",null,t)),r.a.createElement("div",{className:"sub-title"},s," ",r.a.createElement(a.a,{color:"#596c8e",className:Object(o.b)("icon",1===d?"open":"close"),name:"right",onClick:function(){m(0===d?1:0)}})),r.a.createElement(u,{scaleMultiple:d,value:l}))}},263:function(e,n,t){"use strict";t.r(n),n.default="# Upload 上传\n文件选择上传控件,支持 `移动端` 和 `PC端` 。\n\n# 何时使用\n上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。\n\n# 代码示例"},264:function(e,n,t){"use strict";t.r(n),n.default="# API\n\n|    属性    |   说明   |    类型    |  默认值  | 是否必须 |\n| --------- | ------- | --------- | ------- | -------  |\n| name    | 发到后台的文件参数名 |  string   | 'file' | 否 |\n| multiple  | 是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件 |  boolean  | false   | 否 |\n| action   | 上传的地址 |  string   | - | 是 |\n| fileList   | 已经上传的文件列表 |  Object[]   | [] | 否 |\n| onFileChange   | 文件上传完的状态 |  (fileList) => void   | - | 否 |\n| handleImgClick | 单击预览图片的回调函数；移动端单击图片，PC端单击Icon |  (url, index) => void   | - | 否 |\n| upload | 暴露给父组件调用的方法，触发上传 |  uploadRef.current.upload()   | - | 否 |\n\n\n`file` file 当前操作的文件对象。\n\n```\n{\n    uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突\n    name: 'xx.png'   // 文件名\n    status: 'done', // 状态有：uploading success error\n }\n```\n\n\n`fileList` 当前的文件列表。"},282:function(e,n,t){"use strict";t.r(n);var i=t(0),r=t.n(i),a=t(107),o=t.n(a),l=t(106),s=t(3),c=t(55),d=t(42);n.default=function(){var e=Object(i.useState)([]),n=e[0],a=e[1],u=Object(i.useState)([]),m=u[0],p=u[1],f=Object(i.useState)(),g=f[0],h=f[1],b=Object(i.useState)(),x=b[0],v=b[1],w=Object(i.useState)(!1),y=w[0],k=w[1],E=Object(i.useState)(!1),C=E[0],N=E[1],O=Object(i.useState)("0"),j=O[0],L=O[1],T=Object(i.useState)("0"),I=T[0],S=T[1],F=r.a.useRef(null);return r.a.createElement(i.Fragment,null,r.a.createElement(o.a,{source:t(263).default,className:"md"}),r.a.createElement(l.a,{title:"照片墙",summary:"用户可以上传图片并在列表中显示缩略图。",code:"\n      const onFileChange = (newFileList:FileListProps[]) => {\n        setFileList(newFileList)\n        const slideListCopy: img[] = []\n        newFileList.map(item => {\n          const v = {url:''}\n          v.url = item.url!\n          slideListCopy.push(v)\n        })\n        setSlideList(slideListCopy)\n      }\n      const onClose = () => {\n        setVisible(false)\n      }\n      const handleImgClick = (imgSrc: string,index:string) => {\n        setIndex(index)\n        setVisible(true)\n      }"},r.a.createElement(c.a,{ref:F,action:"https://koa-img.herokuapp.com/upload",name:"post",fileList:n,onFileChange:function(e){a(e);var n=[];e.map(function(e){var t={url:""};t.url=e.url,n.push(t)}),h(n)},handleImgClick:function(e,n){L(n),k(!0)}},r.a.createElement("div",{className:"r-upload-action"},r.a.createElement(s.a,{name:"add_light"}))),r.a.createElement(d.a,{list:g,visible:y,onClose:function(){L("0"),k(!1)},defaultIndex:j})),r.a.createElement(l.a,{title:"图片上传失败",summary:"图片上传失败后在列表中显示缩略图。",code:"\n      <Upload action={'/'} fileList={failFileList} onFileChange={onFailFileChange} handleImgClick={handleFailImgClick}>\n        <Icon name=\"add_light\" />\n      </Upload>\n      <Slide list={slideFailList} visible={failVisible} onClose={onFailClose} defaultIndex={failIndex}/>\n      "},r.a.createElement(c.a,{action:"/",fileList:m,onFileChange:function(e){p(e);var n=[];e.map(function(e){var t={url:""};t.url=e.url,n.push(t)}),v(n)},handleImgClick:function(e,n){S(n),N(!0)}},r.a.createElement("div",{className:"r-upload-action"},r.a.createElement(s.a,{name:"add_light"}))),r.a.createElement(d.a,{list:x,visible:C,onClose:function(){N(!1)},defaultIndex:I})),r.a.createElement(o.a,{source:t(264).default,className:"md"}))}},42:function(e,n,t){"use strict";var i=t(0),r=t.n(i),a=t(2),o=t(3),l=(t(68),function(e){var n,t,l,s,c,d,u,m,p,f,g,h,b,x,v=e.list,w=e.visible,y=e.onClose,k=e.defaultIndex,E=r.a.createRef(),C=r.a.createRef(),N=!1,O=!1,j=Object(i.useState)(),L=j[0],T=j[1],I=Object(i.useState)(function(){return k?parseInt(k):0}),S=I[0],F=I[1],M=function(e,n){var t=n.pageX-e.pageX,i=n.pageY-e.pageY;return Math.sqrt(t*t+i*i).toFixed(2)},R=function(e){if(C.current){var n=C.current.getElementsByTagName("li"),t=n.length,i=void 0;(i=S+1*parseInt(e))>t-1?i=t-1:i<0&&(i=0),F(i),n[i].style.webkitTransition="-webkit-transform 0.2s ease-out",n[i-1]&&(n[i-1].style.webkitTransition="-webkit-transform 0.2s ease-out"),n[i+1]&&(n[i+1].style.webkitTransition="-webkit-transform 0.2s ease-out"),n[i].style.webkitTransform="translate3d(0, 0, 0)",n[i-1]&&(n[i-1].style.transform="translate3d(-"+b+"px, 0, 0)"),n[i+1]&&(n[i+1].style.transform="translate3d("+b+"px, 0, 0)")}},B=function(e){n=(new Date).getTime(),t=e.touches[0].pageX,l=e.touches[0].pageY,s=0,e.touches.length>=2&&(O=!0,f=e.touches,g=h||(p?2:1)),1===e.touches.length&&(N=!0)},_=function(e){e.preventDefault();var n=e.target;if("IMG"===n.nodeName){if(O&&e.touches.length>=2){var i=e.touches;return h=g*(M(i[0],i[1])/M(f[0],f[1])),n.style.webkitTransition="none",void(n.style.webkitTransform="scale3d("+h+", "+h+", 1)")}}else if((O||p)&&N){c=(u||0)+e.targetTouches[0].pageX-t,d=(m||0)+e.targetTouches[0].pageY-l;var r=O?h:2;return n.style.webkitTransition="none",void(n.style.webkitTransform="scale3d("+r+", "+r+", 1) translate3d("+.5*c+"px, "+.5*d+"px, 0)")}if(N&&C.current){s=e.targetTouches[0].pageX-t;for(var a=C.current.getElementsByTagName("li"),o=S-1,x=o+3;o<x;o++)a[o]&&(a[o].style.webkitTransition="transform 0.2s ease-out"),a[o]&&(a[o].style.webkitTransform="translate3d("+((o-S)*b+s)+"px, 0, 0)")}},z=function(e){var t=e.target;"IMG"===t.nodeName&&(p||O)&&(u=c,m=d,h<1&&(t.style.webkitTransition="-webkit-transform .2s ease-in-out",t.style.webkitTransform="scale3d(1,1,1)",h=1)),N=!1;var i=b/6,r=(new Date).getTime();R(r-n>300?s>=i?"-1":s<0&&s<-i?"+1":"0":s>50?"-1":s<-50?"+1":"0")},X=0,D=function(e){if(!Object(a.a)()){var n=(new Date).getTime();n-X<230?(X=0,x&&clearTimeout(x),function(e){var n=e.target,t=e;if("IMG"===n.nodeName)if(p||O)n.style.webkitTransition="-webkit-transform .2s ease-in-out",n.style.webkitTransform="scale3d(1,1,1)",p=!1,O=!1,h=1;else{var i=t.offsetX,r=t.offsetY;n.style.webkitTransition="-webkit-transform .2s ease-in-out",n.style.webkitTransform="scale3d(2,2,1)",n.style.webkitTransformOriginX=i+"px",n.style.webkitTransformOriginY=r+"px",h=2,p=!0}}(e)):(X=n,x=setTimeout(function(){y&&(F(0),y())},230))}},H=function(e){e.preventDefault()};return Object(i.useLayoutEffect)(function(){T(window.innerHeight/window.innerWidth),b=window.innerWidth+10,function(){if(C.current)for(var e=C.current.getElementsByTagName("li"),n=e.length,t=S,i=0;i<n;i++)e[i].style.width=window.innerWidth+"px",e[i].style.webkitTransform="translate3d("+(i-t)*b+"px, 0, 0)"}()}),Object(i.useEffect)(function(){return E.current&&C.current&&(E.current.style.height=window.innerHeight+"px",C.current.style.cssText="width: "+b+"px;",document.addEventListener("gesturestart",H),C.current.addEventListener("touchstart",B),C.current.addEventListener("touchmove",_),C.current.addEventListener("touchend",z),C.current.addEventListener("click",D)),function(){C.current&&(document.removeEventListener("gesturestart",H),C.current.removeEventListener("touchstart",B),C.current.removeEventListener("touchmove",_),C.current.removeEventListener("touchend",z),C.current.removeEventListener("click",D))}}),w?r.a.createElement("div",{className:"r-slide",ref:E},r.a.createElement("ul",{className:"r-slide-outer",ref:C},v.map(function(e,n){return r.a.createElement("li",{key:n,style:{width:window.innerWidth+"px",transform:"translate3d("+(n-S)*b+"px,0,0)"}},r.a.createElement("img",{src:e.url,style:{height:e.height/e.width>L?window.innerHeight+"px":"",width:e.height/e.width<=L?window.innerWidth+"px":""}}))}),Object(a.a)()?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{name:"close_light",onClick:function(){y&&(F(0),y())},color:"#fff",className:"close"}),r.a.createElement("button",{className:"arrow pre",onClick:function(){return R("-1")}},r.a.createElement(o.a,{name:"back",color:"#fff"})),r.a.createElement("button",{className:"arrow next",onClick:function(){return R("+1")}},r.a.createElement(o.a,{name:"right",color:"#fff"}))):null),r.a.createElement("ul",{className:"r-slide-actions"},v.length>=2?v.map(function(e,n){return r.a.createElement("li",{key:n,className:Object(a.b)("r-slide-actions-dot",S===n?"active":"")},"•")}):null)):null});l.displayName="Slide",n.a=l},55:function(e,n,t){"use strict";var i=t(1),r=t(0),a=t.n(r),o=t(3),l=t(2),s=(t(83),function(e,n){var t=e.name,s=e.multiple,c=e.method,d=e.action,u=e.fileList,m=e.handleImgClick,p=e.onFileChange,f=e.className,g=e.children,h=i.c(e,["name","multiple","method","action","fileList","handleImgClick","onFileChange","className","children"]),b=Object(l.d)(4),x=null,v=Object(r.useRef)();v.current=u;var w=Object(r.useState)(!1),y=w[0],k=w[1],E=Object(r.useState)(),C=E[0],N=E[1],O=function(){(x=document.querySelector("#"+b))&&(x.addEventListener("change",T),x.click())},j=function(e,n){var t=new XMLHttpRequest;t.timeout=5e3,t.open(c||"post",d),t.onload=function(){200!==t.status?L(t,n,"error"):L(t,n,"success")},t.onerror=function(e){L(t,n,"error")},t.ontimeout=function(){L(t,n,"error")},t.send(e)},L=function(e,n,t){var i=v.current.filter(function(e){return e.uid===n})[0],r=v.current.indexOf(i);"success"===t?(i.status="success",i.url=JSON.parse(e.response).url,i.width=JSON.parse(e.response).width,i.height=JSON.parse(e.response).height):(i.status="error",i.url="https://i.loli.net/2019/08/27/2gBTWlfkt5EDVbi.jpg",i.width=500,i.height=500);var a=v.current.slice();a.splice(r,1,i),p(a)},T=function(e){var n=[];x.files&&(n=x.files);for(var i=JSON.parse(JSON.stringify(u)),r=0;r<n.length;r++){var a=n[r].name,o=Object(l.d)(4);n[r].uid=o;var s={name:a,uid:o,status:"uploading",url:"",width:0,height:0};i.push(s)}p(i),n.length>0&&function(e){for(var n=0;n<e.length;n++){var i=new FormData;i.append(t||"file",e[n]),j(i,e[n].uid)}}(n),x.removeEventListener("change",T),x.value=""},I=function(e){var n=u.filter(function(n){return n.uid!==e});p(n)},S=function(e,n){m&&m(e,n.toString())},F=function(){k(!1),N(null)};return Object(r.useImperativeHandle)(n,function(){return{upload:function(){O()}}}),a.a.createElement("div",i.a({className:Object(l.b)("r-upload",f)},h),v.current.map(function(e,n){return a.a.createElement("div",{key:n,className:"r-upload-item",onMouseEnter:function(){return function(e){k(!0),N(e)}(n)},onMouseLeave:F},"uploading"!==e.status?a.a.createElement("img",{className:y&&Object(l.a)()&&n===C?"mask":"",src:e.url,onClick:function(){return!Object(l.a)()&&S(e.url,n)}}):a.a.createElement(o.a,{name:"loading1",size:"3em",color:"#8C98AE",className:"loading"}),y&&Object(l.a)()&&n===C?a.a.createElement("div",{className:"pc-action"},a.a.createElement(o.a,{name:"attention_light",color:"#fff",onClick:function(){return S(e.url,n)},style:{marginRight:"5px"}}),a.a.createElement(o.a,{name:"delete_light",color:"#fff",onClick:function(){return I(e.uid)}})):null,Object(l.a)()?null:a.a.createElement("div",{className:"mobile-action"}," ",a.a.createElement(o.a,{name:"round_close_fill_light",color:"#f4516c",onClick:function(){return I(e.uid)}})))}),a.a.createElement("div",{onClick:O,onMouseEnter:function(){return k(!0)},onMouseLeave:function(){return k(!1)}},g),a.a.createElement("input",{id:b,multiple:s||!1,type:"file",name:t||"file",style:{display:"none"}}))});s.displayName="Upload",n.a=a.a.forwardRef(s)},68:function(e,n,t){var i=t(69);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(5)(i,r);i.locals&&(e.exports=i.locals)},69:function(e,n,t){(e.exports=t(4)(!1)).push([e.i,".r-slide {\n  transform: translate3d(0px, 0px, 3px);\n  transition: opacity 200ms ease 0s;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  background-color: black;\n  z-index: 100; }\n  .r-slide .r-slide-outer {\n    height: 100%;\n    position: relative;\n    overflow: hidden; }\n    .r-slide .r-slide-outer > li {\n      position: absolute;\n      display: flex;\n      align-items: center;\n      overflow: hidden;\n      height: 100%; }\n      .r-slide .r-slide-outer > li img {\n        max-width: 100%;\n        max-height: 100%;\n        margin: 0 auto;\n        width: 100%; }\n    .r-slide .r-slide-outer .close {\n      position: absolute;\n      right: 20px;\n      top: 20px;\n      cursor: pointer; }\n    .r-slide .r-slide-outer .arrow {\n      border: none;\n      outline: none;\n      padding: 0;\n      margin: 0;\n      height: 36px;\n      width: 38px;\n      cursor: pointer;\n      transition: .3s;\n      border-radius: 50%;\n      background-color: rgba(31, 45, 61, 0.11);\n      color: #fff;\n      position: absolute;\n      top: 50%;\n      z-index: 10;\n      transform: translateY(-50%);\n      text-align: center;\n      font-size: 12px; }\n      .r-slide .r-slide-outer .arrow:hover {\n        background-color: rgba(31, 45, 61, 0.41); }\n      .r-slide .r-slide-outer .arrow.pre {\n        left: 20px; }\n      .r-slide .r-slide-outer .arrow.next {\n        right: 20px; }\n  .r-slide .r-slide-actions {\n    position: absolute;\n    bottom: 24px;\n    left: 50%;\n    font-size: 19px;\n    transform: translateX(-50%);\n    color: #6d6d6d; }\n    .r-slide .r-slide-actions .r-slide-actions-dot {\n      float: left;\n      margin-right: 5px; }\n      .r-slide .r-slide-actions .r-slide-actions-dot.active {\n        color: #fff; }\n",""])},83:function(e,n,t){var i=t(84);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(5)(i,r);i.locals&&(e.exports=i.locals)},84:function(e,n,t){(e.exports=t(4)(!1)).push([e.i,"@keyframes spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.r-upload {\n  display: flex;\n  flex-wrap: wrap; }\n  .r-upload-item {\n    width: 100px;\n    height: 100px;\n    box-sizing: border-box;\n    margin: 0 8px 8px 0;\n    padding: 4px;\n    border: 1px solid #d9d9d9;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative; }\n    .r-upload-item .loading {\n      animation: spin 2s infinite linear; }\n    .r-upload-item .pc-action {\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      cursor: pointer; }\n    .r-upload-item .mobile-action {\n      position: absolute;\n      right: -2px;\n      top: -2px;\n      cursor: pointer; }\n    .r-upload-item img {\n      height: 100%;\n      object-fit: cover;\n      filter: brightness(100%); }\n      .r-upload-item img.mask {\n        filter: brightness(50%);\n        transition: filter 0.3s; }\n  .r-upload .r-upload-action {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100px;\n    height: 100px;\n    margin-right: 8px;\n    margin-bottom: 8px;\n    vertical-align: top;\n    background-color: #fafafa;\n    border: 1px dashed #d9d9d9;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: border-color 0.3s ease; }\n    .r-upload .r-upload-action:hover {\n      border-color: #4a90e2; }\n",""])}}]);