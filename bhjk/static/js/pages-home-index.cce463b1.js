(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-index"],{"1b3f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-scroll-view",{staticClass:"page",attrs:{"scroll-y":""},on:{scroll:function(e){e=t.$handleEvent(e),t.pageScroll(e)}}},[n("SearchBar",{attrs:{isSearchBarActive:t.isSearchBarActive,searchInputFocus:t.searchInputFocus,searchInputBlur:t.searchInputBlur}}),n("v-uni-swiper",{staticClass:"screen-swiper",class:"square-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(t.bananerList,function(t,e){return n("v-uni-swiper-item",{key:e},[n("v-uni-image",{attrs:{src:t.image,mode:"aspectFill"}})],1)}),1),n("v-uni-view",{staticClass:"padding-top-lg padding-bottom-lg bg-white"},[n("v-uni-view",{staticClass:"flex"},t._l(t.serverTypes,function(e,i){return n("v-uni-view",{key:i,staticClass:"image-item flex-sub  text-center"},[n("v-uni-navigator",{attrs:{url:e.url,"hover-class":"navigator-hover"}},[n("v-uni-view",{staticClass:"image-content"},[n("v-uni-image",{staticClass:"server_type_img",attrs:{mode:e.mode,src:e.src}})],1),n("v-uni-view",{staticClass:"image-title margin-top-xs"},[t._v(t._s(e.text))])],1)],1)}),1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"radius shadow bg-white"},[n("v-uni-view",{staticClass:"cu-bar bg-white"},[n("v-uni-view",{staticClass:"action border-title"},[n("v-uni-text",{staticClass:"text-xl text-bold"},[t._v("科室")])],1)],1),t._l(t.sections,function(e,i){return n("v-uni-view",{key:i,staticClass:"flex text-center"},t._l(t.sections[i],function(e,i){return n("v-uni-view",{key:i,staticClass:"image-item flex-sub  text-center section-bg margin-xs padding-sm",on:{click:function(n){n=t.$handleEvent(n),t.toSection(e.text)}}},[n("v-uni-view",{staticClass:"image-content"},[n("v-uni-image",{staticClass:"section_type_img",attrs:{mode:e.mode,src:e.src}})],1),n("v-uni-view",{staticClass:"image-title"},[t._v(t._s(e.text))])],1)}),1)})],2),n("v-uni-view",{staticClass:"news padding-xs padding-top-lg bg-white"},[n("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":"true"}},t._l(t.advList,function(t,e){return n("v-uni-view",{key:e,staticClass:"scroll-view-item_H"},[n("v-uni-image",{staticClass:"item-image",attrs:{src:t.image}})],1)}),1)],1)],1),n("v-uni-view",{staticClass:"informations margin-top-sm bg-white"},[n("glanceSlideNavTabBar",{attrs:{fontsize:"28upx",topfixed:!0,data:t.informations},on:{clickitem:function(e){e=t.$handleEvent(e),t.clickitem(e)}}}),n("v-uni-view",{staticClass:"cu-card article padding-top-sm"},t._l(t.informationsList,function(e,i){return n("v-uni-view",{key:i,staticClass:"cu-item shadow"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view",{staticClass:"text-cut"},[t._v(t._s(e.title))])],1),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"desc"},[n("v-uni-view",{staticClass:"text-content"},[t._v(t._s(e.content))])],1),n("v-uni-image",{attrs:{src:"/static/img/temp/4_4.png",mode:"aspectFill"}})],1)],1)}),1)],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"1d32":function(t,e,n){var i=n("a7ff");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("204b5ce1",i,!0,{sourceMap:!1,shadowMode:!1})},"1f07":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"search-bar"},[n("v-uni-view",{staticClass:"cu-bar search",class:{"bg-gradual-blue":t.isSearchBarActive}},[n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"icon-location"}),n("v-uni-text",{staticStyle:{"font-size":"28upx"}},[t._v("深圳")])],1),n("v-uni-view",{staticClass:"search-form round"},[n("v-uni-text",{staticClass:"icon-search"}),n("v-uni-input",{attrs:{"adjust-position":!1,type:"text",placeholder:t.placeholder,"confirm-type":"search"},on:{focus:function(e){e=t.$handleEvent(e),t.searchInputFocus(e)}},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}})],1)],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"1f24":function(t,e,n){var i=n("528e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("047df368",i,!0,{sourceMap:!1,shadowMode:!1})},"3b8d":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return o});var i=n("795b"),a=n.n(i);function r(t,e,n,i,r,o,c){try{var s=t[o](c),l=s.value}catch(u){return void n(u)}s.done?e(l):a.a.resolve(l).then(i,r)}function o(t){return function(){var e=this,n=arguments;return new a.a(function(i,a){var o=t.apply(e,n);function c(t){r(o,i,a,c,s,"next",t)}function s(t){r(o,i,a,c,s,"throw",t)}c(void 0)})}}},4566:function(t,e,n){"use strict";n.r(e);var i=n("fb2f"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"4b18":function(t,e,n){"use strict";var i=n("dfb0"),a=n.n(i);a.a},"528e":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.bar-view[data-v-3d414dc3]{padding:%?10?% 0 %?5?% 0;position:-webkit-sticky;z-index:10}.bar-view .bar-view-view[data-v-3d414dc3]{background-color:inherit;margin:%?5?% %?10?%}.glance-slidenav-tabbar[data-v-3d414dc3]{height:%?60?%;display:inline-block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:1}.glance-slidenav-tabbar-item[data-v-3d414dc3]{height:%?45?%;width:auto;min-width:%?180?%;min-height:%?45?%;text-align:center}.glance-slidenav-tabbar-item-text[data-v-3d414dc3]{padding:%?5?% 0 %?5?% 0;width:100%;line-height:%?45?%}.glance-slidenav-tabbar .glance-slidenav-tabbar-item-text-magnify[data-v-3d414dc3]{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);font-size:%?36?%;color:#333}.glance-slidenav-tabbar .glance-slidenav-tabbar-itme-underline[data-v-3d414dc3]{border-radius:%?10?%;-webkit-border-radius:%?10?%;-moz-border-radius:%?10?%}',""])},5996:function(t,e,n){"use strict";var i=n("1d32"),a=n.n(i);a.a},"59dc":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"bar-view text-left",style:{top:t.topfixedval,position:t.positionS,background:t.bgcolor}},[n("v-uni-view",{staticClass:"bar-view-view"},[n("v-uni-scroll-view",{attrs:{"scroll-x":"true","scroll-left":"0","scroll-with-animation":"true","scroll-into-view":t.curscrollitem}},[n("v-uni-view",{staticClass:"glance-slidenav-tabbar"},t._l(t.gettabbars,function(e,i){return n("v-uni-view",{key:i},[n("v-uni-view",{staticClass:"glance-slidenav-tabbar-item",style:{fontSize:t.fontsize,color:t.textcolor},attrs:{id:"glsntb-"+i},on:{click:function(n){n=t.$handleEvent(n),t.clickitem(i,e.textcontent)}}},[n("v-uni-view",{staticClass:"glance-slidenav-tabbar-item-text",class:[i===t.activeitemindex?"glance-slidenav-tabbar-item-text-magnify":""]},[t._v(t._s(e.textcontent))])],1)],1)}),1)],1)],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"5c59":function(t,e,n){"use strict";var i=n("1f24"),a=n.n(i);a.a},6032:function(t,e,n){"use strict";n.r(e);var i=n("59dc"),a=n("4566");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("5c59");var o=n("2877"),c=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"3d414dc3",null);e["default"]=c.exports},"73eb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"search-bar",data:function(){return{searchKey:""}},props:{isSearchBarActive:{type:Boolean,default:!1},placeholder:{type:String,default:"搜索医生、医院、科室"}},methods:{searchInputFocus:function(){uni.navigateTo({url:"/pages/search/searchResult"})}}};e.default=i},"77da":function(t,e,n){"use strict";n.r(e);var i=n("1f07"),a=n("8be0");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("4b18");var o=n("2877"),c=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"428b1352",null);e["default"]=c.exports},"8af8":function(t,e,n){"use strict";n.r(e);var i=n("1b3f"),a=n("e683");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("5996");var o=n("2877"),c=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"27331f7a",null);e["default"]=c.exports},"8be0":function(t,e,n){"use strict";n.r(e);var i=n("73eb"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,a=i.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=y;var d="suspendedStart",f="suspendedYield",v="executing",p="completed",h={},g={};g[o]=function(){return this};var m=Object.getPrototypeOf,w=m&&m(m(O([])));w&&w!==i&&a.call(w,o)&&(g=w);var b=C.prototype=_.prototype=Object.create(g);k.prototype=b.constructor=C,C.constructor=k,C[s]=k.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},u.awrap=function(t){return{__await:t}},L(F.prototype),F.prototype[c]=function(){return this},u.AsyncIterator=F,u.async=function(t,e,n,i){var a=new F(y(t,e,n,i));return u.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},L(b),b[s]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},u.values=O,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(B),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,a){return c.type="throw",c.arg=t,e.next=i,a&&(e.method="next",e.arg=n),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],c=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),B(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var a=i.arg;B(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:O(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),h}}}function y(t,e,n,i){var a=e&&e.prototype instanceof _?e:_,r=Object.create(a.prototype),o=new T(i||[]);return r._invoke=S(t,n,o),r}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function _(){}function k(){}function C(){}function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function F(t){function e(n,i,r,o){var c=x(t[n],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&a.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,r,o)},function(t){e("throw",t,r,o)}):Promise.resolve(l).then(function(t){s.value=t,r(s)},function(t){return e("throw",t,r,o)})}o(c.arg)}var n;function i(t,i){function a(){return new Promise(function(n,a){e(t,i,n,a)})}return n=n?n.then(a,a):a()}this._invoke=i}function S(t,e,n){var i=d;return function(a,r){if(i===v)throw new Error("Generator is already running");if(i===p){if("throw"===a)throw r;return A()}n.method=a,n.arg=r;while(1){var o=n.delegate;if(o){var c=E(o,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===d)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=v;var s=x(t,e,n);if("normal"===s.type){if(i=n.done?p:f,s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(i=p,n.method="throw",n.arg=s.arg)}}}function E(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,E(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=x(i,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var r=a.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,h):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function B(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,r=function e(){while(++i<t.length)if(a.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return r.next=r}}return{next:A}}function A(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a6d5:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.search-bar[data-v-428b1352]{position:fixed;top:0;z-index:99;width:100%;background:hsla(0,0%,100%,.1)}.search-bar .icon-search[data-v-428b1352],.search-bar .search[data-v-428b1352]{color:#fff}.search-bar .icon-location-title[data-v-428b1352]{font-size:%?28?%}.search-bar .search-form[data-v-428b1352]{background-color:rgba(242,250,255,.5)}',""])},a7ff:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page[data-v-27331f7a]{height:100vh}.page .margin-xs[data-v-27331f7a]{margin:%?2?%}.page .image-item[data-v-27331f7a]{color:#333;font-size:%?28?%}.page .image-item .server_type_img[data-v-27331f7a]{width:%?110?%;height:%?110?%}.page .image-item .section_type_img[data-v-27331f7a]{width:%?76?%;height:%?76?%}.page .section-bg[data-v-27331f7a]{background:#f2faff}.page .cu-list.menu>.cu-item .content[data-v-27331f7a]{font-size:%?24?%}.page .news .scroll-view_H[data-v-27331f7a]{white-space:nowrap;width:100%}.page .news .scroll-view_H .scroll-view-item_H[data-v-27331f7a]{display:inline-block;margin:0 %?5?%}.page .news .scroll-view_H .scroll-view-item_H .item-image[data-v-27331f7a]{width:%?210?%;height:%?140?%}.page .align-center-m[data-v-27331f7a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.page .cu-card>.cu-item[data-v-27331f7a]{margin:0;height:%?232?%}.page .cu-card.article>.cu-item[data-v-27331f7a]{padding-bottom:%?10?%}.page .cu-card.article>.cu-item .title[data-v-27331f7a]{line-height:%?50?%;padding:0 %?30?%}.page .cu-card.article>.cu-item .content[data-v-27331f7a]{font-size:%?24?%}.page .cu-card.article>.cu-item .content uni-image[data-v-27331f7a]{width:%?232?%;height:%?150?%;margin-right:0}.page .informations .scroll-view_H[data-v-27331f7a]{width:100%}.page .informations .scroll-view_H .scroll-view-item_H[data-v-27331f7a]{display:inline-block;margin:0 %?5?%}',""])},dfb0:function(t,e,n){var i=n("a6d5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("256cf6e3",i,!0,{sourceMap:!1,shadowMode:!1})},e683:function(t,e,n){"use strict";n.r(e);var i=n("ec1b"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},ec1b:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("f499"));n("96cf");var r=i(n("3b8d")),o=i(n("77da")),c=i(n("6032")),s={data:function(){return{isSearchBarActive:!1,bananerList:[{image:"/static/img/doctor/b1.png"},{image:"/static/img/doctor/b2.png"}],serverTypes:[{mode:"aspectFill",text:"去预约",src:"/static/img/temp/2_1.png",url:"../doctor/search_doctor"},{mode:"aspectFill",text:"附近医院",src:"/static/img/temp/2_2.png",url:"../hospital/nearby_hospital"},{mode:"aspectFill",text:"找医生",src:"/static/img/temp/2_3.png",url:"../doctor/search_doctor"}],sections:[[{mode:"aspectFill",text:"内科",src:"/static/img/temp/3_1.png"},{mode:"aspectFill",text:"外科",src:"/static/img/temp/3_2.png"},{mode:"aspectFill",text:"儿科",src:"/static/img/temp/3_3.png"},{mode:"aspectFill",text:"妇科",src:"/static/img/temp/3_4.png"}],[{mode:"aspectFill",text:"耳鼻喉科",src:"/static/img/temp/3_5.png"},{mode:"aspectFill",text:"不孕不育",src:"/static/img/temp/3_6.png"},{mode:"aspectFill",text:"男科",src:"/static/img/temp/3_7.png"},{mode:"aspectFill",text:"全部",src:"/static/img/temp/3_8.png"}]],news:[],advList:[],informations:[{textcontent:"推荐文章",activeviewid:1},{textcontent:"女性健康",activeviewid:2},{textcontent:"母婴",activeviewid:3},{textcontent:"疫苗相关",activeviewid:4},{textcontent:"带状疱疹",activeviewid:5},{textcontent:"多发性病症",activeviewid:6},{textcontent:"医疗资讯",activeviewid:7},{textcontent:"健康资讯",activeviewid:8},{textcontent:"医美广告",activeviewid:9}],informationsList:[{title:"血常规三系减少，是怎么了？",content:"最近经常感觉乏力，头晕，去医院化验血常规，医生说三系减少，这是个什"},{title:"血常规三系减少，是怎么了？是怎么了？",content:"最近经常感觉乏力，头晕，去医院化验血常规，医生说三系减少，这是个什"},{title:"血常规三系减少，是怎么了？是怎么了？",content:"最近经常感觉乏力，头晕，去医院化验血常规，医生说三系减少，这是个什"},{title:"血常规三系减少，是怎么了？是怎么了？",content:"最近经常感觉乏力，头晕，去医院化验血常规，医生说三系减少，这是个什"},{title:"血常规三系减少，是怎么了？是怎么了？",content:"最近经常感觉乏力，头晕，去医院化验血常规，医生说三系减少，这是个什"},{title:"血常规三系减少，是怎么了？",content:"最近经常感觉乏力，头晕，去医院化验血常规，医生说三系减少，这是个什"},{title:"血常规三系减少，是怎么了？",content:"最近经常感觉乏力，头晕，去医院化验血常规，医生说三系减少，这是个什"},{title:"血常规三系减少，是怎么了？",content:"最近经常感觉乏力，头晕，去医院化验血常规，医生说三系减少，这是个什"},{title:"血常规三系减少，是怎么了？",content:"最近经常感觉乏力，头晕，去医院化验血常规，医生说三系减少，这是个什"}]}},onReady:function(){},methods:{getBananerList:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$req.ajax({path:"/app/bananer/list",title:"正在加载",data:{type:1}});case 2:e=t.sent,0==e.data.code?(console.log((0,a.default)(e)),this.bananerList=e.data.bananerList||[]):uni.showToast({title:e.msg||"请求错误，请重试",icon:"none"});case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getAdvList:function(){var t=(0,r.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$req.ajax({path:"/app/adv/list",title:"正在加载",data:{type:1}});case 2:e=t.sent,0==e.data.code?(console.log((0,a.default)(e)),this.advList=e.data.advList||[]):uni.showToast({title:e.msg||"请求错误，请重试",icon:"none"});case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),pageScroll:function(t){this.isSearchBarActive=t.detail.scrollTop>150},clickitem:function(t,e){},searchInputFocus:function(){},searchInputBlur:function(){},toSection:function(t){uni.navigateTo({url:"/pages/section/sectionDetail?name="+t})}},components:{glanceSlideNavTabBar:c.default,SearchBar:o.default}};e.default=s},fb2f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac6a");var i={name:"glanceSlideNavTabBar",props:{data:Array,bgcolor:{type:String,default:"#FFFFFF"},topfixed:{type:Boolean,default:!1},topfixedval:{type:String,default:"90upx"},fontsize:{type:String,default:"26upx"},textcolor:{type:String,default:"#333333"},activetextcolor:{type:String,default:"#333333"},activetextsize:{type:String,default:"36upx"}},data:function(){return{activeitemindex:0,curscrollitem:"glsntb-0",selfdata:[{textcontent:"",activeviewid:""}]}},computed:{gettabbars:function(){var t=[];return this.data&&this.data.forEach(function(e,n){t.push(e)}),t},positionS:function(){return this.topfixed?"sticky":"static"}},methods:{clickitem:function(t,e){this.curscrollitem="glsntb-"+t,this.activeitemindex=t,this.$emit("clickitem",t,e)}}};e.default=i}}]);