(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hospital-hospital_detail"],{"0091":function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.m-header[data-v-283e8d5c]{position:fixed;width:100%;z-index:10;top:0}.m-header .action.bg[data-v-283e8d5c]{background:#131313;opacity:.5;padding:%?10?%;color:#fff;border-radius:100%}',""])},"1dd9":function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.carousel[data-v-e98a1f78]{height:%?500?%;width:%?750?%;position:relative}.carousel uni-swiper[data-v-e98a1f78]{height:100%}.carousel .image-wrapper[data-v-e98a1f78]{width:100%;height:100%}.carousel .swiper-item[data-v-e98a1f78]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;height:%?750?%;overflow:hidden}.carousel .swiper-item uni-image[data-v-e98a1f78]{width:100%;height:100%}.doctor-ins[data-v-e98a1f78]{font-size:%?24?%;line-height:%?50?%;margin:0 %?30?%;padding:%?20?% 0}',""])},"238e":function(t,a,e){"use strict";e.r(a);var n=e("32ea"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);a["default"]=i.a},"32ea":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"doctor-list",props:{doctors:{type:Array,default:null}},data:function(){return{}},methods:{toDetail:function(){uni.navigateTo({url:"/pages/doctor/doctor_detail"})}}};a.default=n},"3ee8":function(t,a,e){"use strict";var n=e("818f"),i=e.n(n);i.a},"455d":function(t,a,e){var n=e("dcb6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("61051e07",n,!0,{sourceMap:!1,shadowMode:!1})},"47ca":function(t,a,e){"use strict";e.r(a);var n=e("c78c"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);a["default"]=i.a},"52ec":function(t,a,e){"use strict";e.r(a);var n=e("be59"),i=e("47ca");for(var s in i)"default"!==s&&function(t){e.d(a,t,function(){return i[t]})}(s);e("3ee8");var c=e("2877"),r=Object(c["a"])(i["default"],n["a"],n["b"],!1,null,"e98a1f78",null);a["default"]=r.exports},"73ac":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"m-header",props:{isFave:{type:Boolean,default:!0},isHasBg:{type:Boolean,default:!1},title:{type:String,default:""}},data:function(){return{}},methods:{toShare:function(){this.$emit("toShare")}}};a.default=n},"7ca8":function(t,a,e){"use strict";e.r(a);var n=e("8053"),i=e("238e");for(var s in i)"default"!==s&&function(t){e.d(a,t,function(){return i[t]})}(s);e("8598");var c=e("2877"),r=Object(c["a"])(i["default"],n["a"],n["b"],!1,null,"2e4d48bb",null);a["default"]=r.exports},8053:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"doctors cu-list menu-avatar bg-white"},t._l(t.doctors,function(a,n){return e("v-uni-view",{key:n,staticClass:"cu-item margin-top-sm",attrs:{"hover-class":"hover"},on:{click:function(a){a=t.$handleEvent(a),t.toDetail()}}},[e("v-uni-image",{staticClass:"cu-avatar round lg",attrs:{src:a.src}}),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-grey"},[e("v-uni-text",{staticClass:"text-black text-bold text-lg"},[t._v(t._s(a.name))]),e("v-uni-text",{staticClass:"text-xs margin-left-sm"},[t._v(t._s(a.name_1))]),e("v-uni-view",{staticClass:"cu-tag round line-orange xs margin-left-sm"},[t._v(t._s(a.name_2))])],1),e("v-uni-view",{staticClass:"text-gray text-sm flex"},[e("v-uni-text",{staticClass:"text-cut"},[t._v(t._s(a.name_3)+"："+t._s(a.name_4))])],1),e("v-uni-view",{staticClass:"text-black text-sm flex"},[e("v-uni-text",{staticClass:"text-cut"},[t._v("擅长："+t._s(a.name_5))])],1)],1)],1)}),1)},i=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i})},"818f":function(t,a,e){var n=e("1dd9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("2923e16a",n,!0,{sourceMap:!1,shadowMode:!1})},8598:function(t,a,e){"use strict";var n=e("455d"),i=e.n(n);i.a},"984f":function(t,a,e){"use strict";var n=e("b05f"),i=e.n(n);i.a},add7:function(t,a,e){"use strict";e.r(a);var n=e("73ac"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);a["default"]=i.a},b05f:function(t,a,e){var n=e("0091");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("da83c8c6",n,!0,{sourceMap:!1,shadowMode:!1})},bcdf:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"cu-bar m-header ",class:{"bg-blue":t.isHasBg}},[e("v-uni-view",{staticClass:"action",class:{bg:!t.isHasBg}},[e("v-uni-navigator",{attrs:{"open-type":"navigateBack"}},[e("v-uni-text",{staticClass:"icon-back",staticStyle:{padding:"0 4upx"}})],1)],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isHasBg,expression:"isHasBg"}],staticClass:"content text-bold"},[t._v(t._s(t.title))]),t.isFave?e("v-uni-view",{staticClass:"action",class:{bg:!t.isHasBg}},[e("v-uni-text",{staticClass:"icon-favor"})],1):e("v-uni-view",{staticClass:"action",class:{bg:!t.isHasBg},on:{click:function(a){a=t.$handleEvent(a),t.toShare(a)}}},[e("v-uni-text",{staticClass:"icon-share"})],1)],1)},i=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i})},be59:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-scroll-view",{staticClass:"page",attrs:{"scroll-y":"true"},on:{scroll:function(a){a=t.$handleEvent(a),t.scroll(a)}}},[e("m-header",{attrs:{title:t.title,isHasBg:t.isHasBg}}),e("v-uni-swiper",{staticClass:"screen-swiper",class:"square-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(t.imgList,function(a,n){return e("v-uni-swiper-item",{key:n},["image"==a.type?e("v-uni-image",{attrs:{src:a.url,mode:"aspectFill"}}):t._e(),"video"==a.type?e("v-uni-video",{attrs:{src:a.url,autoplay:"",loop:"",muted:"","show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()],1)}),1),e("v-uni-view",{staticClass:"bg-white"},[e("v-uni-view",{staticClass:"cu-bar margin-top-sm"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"text-xs text-bold"},[t._v("医院简介")])],1)],1),e("v-uni-view",{staticClass:"doctor-ins"},[t._v("南方医科大学南方医院诞生于解放战争的隆隆炮火之中，是南方医科大学第一附属医院，是一所历史悠久、规模宏大、设备先进、技术精良、环")])],1),e("v-uni-view",{staticClass:"bg-white"},[e("v-uni-view",{staticClass:"cu-bar margin-top-sm"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"text-xs text-bold"},[t._v("预约指南")])],1)],1),e("v-uni-view",{staticClass:"doctor-ins"},[t._v("接诊时间：周一、周二、周三、周四、周五、周六、周日 8:00-13:00   14:00-18:00（急诊科除外）")])],1),e("v-uni-view",{staticClass:"bg-white"},[e("v-uni-view",{staticClass:"cu-bar margin-top-sm"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"text-xs text-bold"},[t._v("地址信息")])],1)],1),e("v-uni-view",{staticClass:"doctor-ins"},[t._v("医院电话：020-2423523")]),e("v-uni-view",{staticClass:"doctor-ins"},[t._v("地      址：广东省广州市白云山东麓麒麟岗")])],1),e("v-uni-view",{staticClass:"bg-white"},[e("v-uni-view",{staticClass:"cu-bar margin-top-sm"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"text-xs text-bold"},[t._v("医院科室")])],1)],1),e("v-uni-view",{staticClass:"padding-lg"},[e("v-uni-text",{staticClass:"cu-tag round"},[t._v("心血管内科")]),e("v-uni-text",{staticClass:"cu-tag round"},[t._v("呼吸内科")]),e("v-uni-text",{staticClass:"cu-tag round"},[t._v("胃肠外科")]),e("v-uni-text",{staticClass:"cu-tag round"},[t._v("血液内科")])],1)],1),e("v-uni-view",{staticClass:"bg-white"},[e("v-uni-view",{staticClass:"cu-bar margin-top-sm"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"text-xs text-bold"},[t._v("医院医生")])],1)],1),e("doctor-list",{attrs:{doctors:t.doctors},on:{toDetail:function(a){a=t.$handleEvent(a),t.toDetail(a)}}})],1)],1)},i=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i})},c3a1b:function(t,a,e){"use strict";e.r(a);var n=e("bcdf"),i=e("add7");for(var s in i)"default"!==s&&function(t){e.d(a,t,function(){return i[t]})}(s);e("984f");var c=e("2877"),r=Object(c["a"])(i["default"],n["a"],n["b"],!1,null,"283e8d5c",null);a["default"]=r.exports},c78c:function(t,a,e){"use strict";var n=e("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("c3a1b")),s=n(e("7ca8")),c={data:function(){return{title:"南方医科大学附属医院",isHasBg:!1,imgList:[{url:"/static/img/temp/h.png",type:"image"},{url:"/static/img/temp/h.png",type:"image"}],doctors:[{name:"刘亦菲",name_1:"副主任医师",name_2:"远程",name_3:"儿科",name_4:"南方科技大学附属医院",name_5:"治疗小儿反复哮喘、婴幼儿类百日咳综合症、过敏性…",src:"/static/img/doctor/d.jpg"},{name:"刘亦菲",name_1:"副主任医师",name_2:"远程",name_3:"儿科",name_4:"南方科技大学附属医院",name_5:"治疗小儿反复哮喘、婴幼儿类百日咳综合症、过敏性…",src:"/static/img/doctor/d.jpg"},{name:"刘亦菲",name_1:"副主任医师",name_2:"远程",name_3:"儿科",name_4:"南方科技大学附属医院",name_5:"治疗小儿反复哮喘、婴幼儿类百日咳综合症、过敏性…",src:"/static/img/doctor/d.jpg"},{name:"刘亦菲",name_1:"副主任医师",name_2:"远程",name_3:"儿科",name_4:"南方科技大学附属医院",name_5:"治疗小儿反复哮喘、婴幼儿类百日咳综合症、过敏性…",src:"/static/img/doctor/d.jpg"},{name:"刘亦菲",name_1:"副主任医师",name_2:"远程",name_3:"儿科",name_4:"南方科技大学附属医院",name_5:"治疗小儿反复哮喘、婴幼儿类百日咳综合症、过敏性…",src:"/static/img/doctor/d.jpg"},{name:"刘亦菲",name_1:"副主任医师",name_2:"远程",name_3:"儿科",name_4:"南方科技大学附属医院",name_5:"治疗小儿反复哮喘、婴幼儿类百日咳综合症、过敏性…",src:"/static/img/doctor/d.jpg"}]}},methods:{scroll:function(t){this.isHasBg=t.detail.scrollTop>200},toDetail:function(){uni.navigateTo({url:"/pages/doctor/doctor_detail"})}},components:{DoctorList:s.default,MHeader:i.default}};a.default=c},dcb6:function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cu-list.menu-avatar>.cu-item[data-v-2e4d48bb]{height:%?170?%}.cu-list.menu-avatar>.cu-item .content[data-v-2e4d48bb]{width:100%}.cu-list.menu-avatar>.cu-item .flex .text-cut[data-v-2e4d48bb]{max-width:%?560?%}.cu-list.menu-avatar>.cu-item.hover[data-v-2e4d48bb]{background-color:#eee}',""])}}]);