(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-setting-setting"],{4215:function(t,i,e){var n=e("beb3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("4f06").default;s("fb85fe4a",n,!0,{sourceMap:!1,shadowMode:!1})},"526f":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"bg-white"},[e("v-uni-view",{staticClass:"cu-bar m-header bg-white"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-navigator",{attrs:{"open-type":"navigateBack"}},[e("v-uni-text",{staticClass:"icon-back"})],1)],1),e("v-uni-view",{staticClass:"text-bold title content"},[t._v("设置")])],1),e("v-uni-view",{staticClass:"list-content"},[e("v-uni-view",{staticClass:"list"},[e("v-uni-view",{staticClass:"li"},[e("v-uni-view",{staticClass:"text"},[t._v("修改密码")]),e("v-uni-image",{staticClass:"to",attrs:{src:"/static/img/mine/to.png"}})],1),e("v-uni-view",{staticClass:"li"},[e("v-uni-view",{staticClass:"text"},[t._v("绑定微信")]),e("v-uni-image",{staticClass:"to",attrs:{src:"/static/img/mine/to.png"}})],1),e("v-uni-view",{staticClass:"li"},[e("v-uni-view",{staticClass:"text"},[t._v("地址管理")]),e("v-uni-image",{staticClass:"to",attrs:{src:"/static/img/mine/to.png"}})],1),e("v-uni-view",{staticClass:"li"},[e("v-uni-view",{staticClass:"text"},[t._v("意见反馈")]),e("v-uni-image",{staticClass:"to",attrs:{src:"/static/img/mine/to.png"}})],1),e("v-uni-view",{staticClass:"li"},[e("v-uni-view",{staticClass:"text"},[t._v("给我们评分吧")]),e("v-uni-image",{staticClass:"to",attrs:{src:"/static/img/mine/to.png"}})],1),e("v-uni-view",{staticClass:"li",on:{click:function(i){i=t.$handleEvent(i),t.logout(i)}}},[e("v-uni-view",{staticClass:"text"},[t._v("退出登录")]),e("v-uni-image",{staticClass:"to",attrs:{src:"/static/img/mine/to.png"}})],1)],1)],1)],1)},s=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return s})},"8ce0":function(t,i,e){"use strict";e.r(i);var n=e("da71"),s=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);i["default"]=s.a},beb3:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.line-blue[data-v-44d229e9]{color:#1482fd}.list[data-v-44d229e9]{width:100%;border-bottom:%?15?% solid #f1f1f1;background:#fff}.list[data-v-44d229e9]:last-child{border:none}.list .li[data-v-44d229e9]{width:100%;height:%?100?%;padding:0 %?35?%;border-bottom:%?1?% solid #f3f3f3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.list .li.noborder[data-v-44d229e9]{border-bottom:0}.list .li .icon[data-v-44d229e9]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.list .li .icon uni-image[data-v-44d229e9]{width:%?35?%;height:%?35?%}.list .li .text[data-v-44d229e9]{padding-left:%?20?%;width:100%;color:#333}.list .li .to[data-v-44d229e9]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?20?%;height:%?20?%}',""])},ca9a:function(t,i,e){"use strict";e.r(i);var n=e("526f"),s=e("8ce0");for(var a in s)"default"!==a&&function(t){e.d(i,t,function(){return s[t]})}(a);e("e50f");var l=e("2877"),c=Object(l["a"])(s["default"],n["a"],n["b"],!1,null,"44d229e9",null);i["default"]=c.exports},da71:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{}},methods:{logout:function(){console.log("退出登录"),uni.removeStorage({key:"token",success:function(t){uni.navigateTo({url:"/pages/login/login"})}})}}};i.default=n},e50f:function(t,i,e){"use strict";var n=e("4215"),s=e.n(n);s.a}}]);