(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-doctor-doctor_detail"],{"1e46":function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("7ca8")),s={data:function(){return{isHasBg:!1,title:"刘亦菲的诊室",scrollLeft:"-40",schedules:[{date:"03-08",week:"周一",m:!0,a:!1},{date:"03-09",week:"周二",m:!0,a:!0},{date:"03-10",week:"周三",m:!1,a:!1},{date:"03-11",week:"周四",m:!1,a:!0},{date:"03-12",week:"周五",m:!0,a:!1},{date:"03-13",week:"周六",m:!1,a:!0},{date:"03-14",week:"周天",m:!0,a:!0},{date:"03-15",week:"周一",m:!0,a:!1},{date:"03-16",week:"周二",m:!0,a:!0}],doctors:[{name:"刘亦菲",name_1:"副主任医师",name_2:"远程",name_3:"儿科",name_4:"南方科技大学附属医院",name_5:"治疗小儿反复哮喘、婴幼儿类百日咳综合症、过敏性…",src:"/static/img/doctor/d.jpg"},{name:"刘亦菲",name_1:"副主任医师",name_2:"远程",name_3:"儿科",name_4:"南方科技大学附属医院",name_5:"治疗小儿反复哮喘、婴幼儿类百日咳综合症、过敏性…",src:"/static/img/doctor/d.jpg"},{name:"刘亦菲",name_1:"副主任医师",name_2:"远程",name_3:"儿科",name_4:"南方科技大学附属医院",name_5:"治疗小儿反复哮喘、婴幼儿类百日咳综合症、过敏性…",src:"/static/img/doctor/d.jpg"},{name:"刘亦菲",name_1:"副主任医师",name_2:"远程",name_3:"儿科",name_4:"南方科技大学附属医院",name_5:"治疗小儿反复哮喘、婴幼儿类百日咳综合症、过敏性…",src:"/static/img/doctor/d.jpg"},{name:"刘亦菲",name_1:"副主任医师",name_2:"远程",name_3:"儿科",name_4:"南方科技大学附属医院",name_5:"治疗小儿反复哮喘、婴幼儿类百日咳综合症、过敏性…",src:"/static/img/doctor/d.jpg"},{name:"刘亦菲",name_1:"副主任医师",name_2:"远程",name_3:"儿科",name_4:"南方科技大学附属医院",name_5:"治疗小儿反复哮喘、婴幼儿类百日咳综合症、过敏性…",src:"/static/img/doctor/d.jpg"}]}},methods:{timeSelect:function(t,e){},tabSelect:function(t){this.scrollLeft=60*(t.currentTarget.dataset.id-1)},toDetail:function(){uni.navigateTo({url:"/pages/doctor/doctor_detail"})}},components:{DoctorList:n.default}};e.default=s},"238e":function(t,e,a){"use strict";a.r(e);var i=a("32ea"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},3094:function(t,e,a){"use strict";a.r(e);var i=a("eab9"),n=a("f43f");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("ba43");var c=a("2877"),o=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,"7cb85393",null);e["default"]=o.exports},"32ea":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"doctor-list",props:{doctors:{type:Array,default:null}},data:function(){return{}},methods:{toDetail:function(){uni.navigateTo({url:"/pages/doctor/doctor_detail"})}}};e.default=i},"455d":function(t,e,a){var i=a("dcb6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("61051e07",i,!0,{sourceMap:!1,shadowMode:!1})},"7ca8":function(t,e,a){"use strict";a.r(e);var i=a("8053"),n=a("238e");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("8598");var c=a("2877"),o=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,"2e4d48bb",null);e["default"]=o.exports},8053:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"doctors cu-list menu-avatar bg-white"},t._l(t.doctors,function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item margin-top-sm",attrs:{"hover-class":"hover"},on:{click:function(e){e=t.$handleEvent(e),t.toDetail()}}},[a("v-uni-image",{staticClass:"cu-avatar round lg",attrs:{src:e.src}}),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"text-grey"},[a("v-uni-text",{staticClass:"text-black text-bold text-lg"},[t._v(t._s(e.name))]),a("v-uni-text",{staticClass:"text-xs margin-left-sm"},[t._v(t._s(e.name_1))]),a("v-uni-view",{staticClass:"cu-tag round line-orange xs margin-left-sm"},[t._v(t._s(e.name_2))])],1),a("v-uni-view",{staticClass:"text-gray text-sm flex"},[a("v-uni-text",{staticClass:"text-cut"},[t._v(t._s(e.name_3)+"："+t._s(e.name_4))])],1),a("v-uni-view",{staticClass:"text-black text-sm flex"},[a("v-uni-text",{staticClass:"text-cut"},[t._v("擅长："+t._s(e.name_5))])],1)],1)],1)}),1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},8598:function(t,e,a){"use strict";var i=a("455d"),n=a.n(i);n.a},9966:function(t,e,a){var i=a("f383");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("ece02152",i,!0,{sourceMap:!1,shadowMode:!1})},ba43:function(t,e,a){"use strict";var i=a("9966"),n=a.n(i);n.a},dcb6:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cu-list.menu-avatar>.cu-item[data-v-2e4d48bb]{height:%?170?%}.cu-list.menu-avatar>.cu-item .content[data-v-2e4d48bb]{width:100%}.cu-list.menu-avatar>.cu-item .flex .text-cut[data-v-2e4d48bb]{max-width:%?560?%}.cu-list.menu-avatar>.cu-item.hover[data-v-2e4d48bb]{background-color:#eee}',""])},eab9:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"cu-bar m-header bg-blue"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-navigator",{attrs:{"open-type":"navigateBack"}},[a("v-uni-text",{staticClass:"icon-back"})],1)],1),a("v-uni-view",{staticClass:"content text-bold"},[t._v(t._s(t.title))]),a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"icon-favor"})],1)],1),a("v-uni-scroll-view",{staticClass:"page",attrs:{"scroll-y":"true"}},[a("v-uni-view",{staticClass:"header"},[a("v-uni-view",{staticClass:"bg"},[a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"doctor-des"},[a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{staticClass:"flex-treble"},[a("v-uni-view",{staticClass:"text-black text-bold text-lg"},[t._v("刘亦菲")]),a("v-uni-view",{staticClass:"text-section"},[t._v("儿科 副主任医师")]),a("v-uni-view",{staticClass:"text-hospital"},[t._v("南方科技大学附属医院")])],1),a("v-uni-view",{staticClass:"flex-sub text-center"},[a("v-uni-image",{staticClass:"round doctor-des-avator",attrs:{src:"../../static/img/doctor/d.jpg"}}),a("v-uni-view",{staticClass:"cu-capsule round capsule-favor"},[a("v-uni-view",{staticClass:"cu-tag"},[a("v-uni-text",{staticClass:"icon-favorfill"}),a("v-uni-text",{staticClass:"favor-number"},[t._v("234")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"text-info"},[t._v("擅长：治疗小儿反复哮喘、婴幼儿类百日咳综合症过敏性…")])],1)],1),a("v-uni-view",{staticClass:"bg-white"},[a("v-uni-view",{staticClass:"cu-bar margin-top-sm"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"text-xs text-bold"},[t._v("医生简介")])],1)],1),a("v-uni-view",{staticClass:"doctor-ins"},[t._v("医学博士后，硕士生导师，科副主任，1996年开始从事儿科临床工作。医学博士后，硕士生导师，科副主任，1996年开始从事儿科临床")])],1),a("v-uni-view",{staticClass:"bg-white"},[a("v-uni-view",{staticClass:"cu-bar margin-top-sm"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"text-sm text-bold"},[t._v("预约挂号")]),a("v-uni-text",{staticClass:"text-sm margin-left-sm"},[t._v("费用："),a("v-uni-text",{staticClass:"text-red"},[t._v("¥20")])],1)],1)],1),a("v-uni-view",{staticClass:"schedule"},[a("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":"","scroll-with-animation":"","scroll-left":t.scrollLeft}},[a("v-uni-view",{staticClass:"cu-item",staticStyle:{width:"80upx"}},[a("v-uni-view",{staticClass:"text-center schedule-time",attrs:{"data-id":0},on:{click:function(e){e=t.$handleEvent(e),t.tabSelect(e)}}},[a("v-uni-view",[t._v("排")]),a("v-uni-view",{staticClass:"padding-bottom-xs"},[t._v("班")])],1),a("v-uni-view",{staticClass:"text-center border"},[t._v("上午")]),a("v-uni-view",{staticClass:"text-center border"},[t._v("下午")])],1),t._l(t.schedules,function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item"},[a("v-uni-view",{staticClass:"text-center schedule-time",attrs:{"data-id":i},on:{click:function(e){e=t.$handleEvent(e),t.tabSelect(e)}}},[a("v-uni-view",[t._v(t._s(e.date))]),a("v-uni-view",{staticClass:"padding-bottom-xs"},[t._v(t._s(e.week))])],1),e.m?a("v-uni-view",{staticClass:"text-center border allowed",on:{click:function(a){a=t.$handleEvent(a),t.timeSelect(e,1)}}},[t._v("可预约")]):a("v-uni-view",{staticClass:"text-center border filled",on:{click:function(a){a=t.$handleEvent(a),t.timeSelect(e,1)}}},[t._v("约满")]),e.a?a("v-uni-view",{staticClass:"text-center border allowed",on:{click:function(a){a=t.$handleEvent(a),t.timeSelect(e,1)}}},[t._v("可预约")]):a("v-uni-view",{staticClass:"text-center border filled",on:{click:function(a){a=t.$handleEvent(a),t.timeSelect(e,1)}}},[t._v("约满")])],1)})],2)],1)],1),a("v-uni-view",{staticClass:"bg-white"},[a("v-uni-view",{staticClass:"cu-bar margin-top-sm"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"text-sm text-bold"},[t._v("预约远程诊疗")]),a("v-uni-text",{staticClass:"text-xs margin-left-sm text-blue"},[t._v("远程诊疗说明")])],1)],1),a("v-uni-view",{staticClass:"schedule"},[a("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":"","scroll-with-animation":"","scroll-left":t.scrollLeft}},t._l(t.schedules,function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item"},[a("v-uni-view",{staticClass:"text-center schedule-time",attrs:{"data-id":i},on:{click:function(e){e=t.$handleEvent(e),t.tabSelect(e)}}},[a("v-uni-view",[t._v(t._s(e.date))]),a("v-uni-view",{staticClass:"padding-bottom-xs"},[t._v(t._s(e.week))])],1),e.m?a("v-uni-view",{staticClass:"text-center border",on:{click:function(a){a=t.$handleEvent(a),t.timeSelect(e,1)}}},[t._v("可预约")]):a("v-uni-view",{staticClass:"text-center border filled",on:{click:function(a){a=t.$handleEvent(a),t.timeSelect(e,1)}}},[t._v("约满")]),e.a?a("v-uni-view",{staticClass:"text-center border",on:{click:function(a){a=t.$handleEvent(a),t.timeSelect(e,1)}}},[t._v("可预约")]):a("v-uni-view",{staticClass:"text-center border filled",on:{click:function(a){a=t.$handleEvent(a),t.timeSelect(e,1)}}},[t._v("约满")])],1)}),1)],1)],1),a("v-uni-view",{staticClass:"cu-bar margin-top-sm bg-white"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"text-sm text-bold"},[t._v("其他医生")])],1)],1),a("doctor-list",{attrs:{doctors:t.doctors},on:{toDetail:function(e){e=t.$handleEvent(e),t.toDetail(e)}}})],1)],1)],1)],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},f383:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page .m-header[data-v-7cb85393]{position:fixed;width:100%;z-index:10;top:0}.page .header[data-v-7cb85393]{background:#fff;height:%?440?%}.page .header .bg[data-v-7cb85393]{width:100%;height:%?180?%;padding-top:%?30?%;background-color:#4da1ff}.page .header .bg .box[data-v-7cb85393]{width:%?680?%;height:%?300?%;border-radius:%?20?%;margin:0 auto;background:#fff;-webkit-box-shadow:0 %?5?% %?20?% %?0?% rgba(0,0,150,.2);box-shadow:0 %?5?% %?20?% %?0?% rgba(0,0,150,.2)}.page .header .bg .box .doctor-des[data-v-7cb85393]{background-color:#fff;margin:%?20?%;padding:%?30?% 0 %?20?% %?20?%;border-radius:%?30?%}.page .header .bg .box .doctor-des .text-section[data-v-7cb85393]{font-size:%?20?%;color:#aaa;margin:%?15?% 0}.page .header .bg .box .doctor-des .text-hospital[data-v-7cb85393]{font-size:%?20?%;color:#777}.page .header .bg .box .doctor-des .text-info[data-v-7cb85393]{line-height:%?44?%;font-size:%?20?%;margin:%?20?% %?30?% 0 0}.page .header .bg .box .doctor-des-avator[data-v-7cb85393]{height:%?120?%;width:%?120?%}.page .header .bg .box .doctor-des .capsule-favor[data-v-7cb85393]{position:absolute}.page .header .bg .box .doctor-des .capsule-favor .cu-tag[data-v-7cb85393]{background:#fff;position:absolute;right:0;top:%?100?%;-webkit-box-shadow:0 %?6?% %?48?% 0 rgba(59,53,56,.17);box-shadow:0 %?6?% %?48?% 0 rgba(59,53,56,.17);border-radius:%?24?%;height:%?32?%}.page .header .bg .box .doctor-des .capsule-favor .cu-tag .icon-favorfill[data-v-7cb85393]{color:#ffbc07}.page .header .bg .box .doctor-des .capsule-favor .cu-tag .favor-number[data-v-7cb85393]{color:#777;margin-left:%?20?%;font-size:%?18?%}.page .header .bg .doctor-ins[data-v-7cb85393]{font-size:%?24?%;line-height:%?50?%;margin:0 %?30?%;padding:%?20?% 0}.page .schedule-time[data-v-7cb85393]{font-size:%?20?%;color:#333;line-height:%?40?%}.page .schedule .border[data-v-7cb85393]{border-top:%?2?% solid #dedede}.page .schedule .cu-item[data-v-7cb85393]{height:auto;border-top:%?2?% solid #dedede;border-bottom:%?2?% solid #dedede;border-right:%?2?% solid #dedede;width:%?120?%;padding:%?20?% 0 0;margin:0}.page .schedule .cu-item .filled[data-v-7cb85393]{background-color:#f1f1f1}.page .schedule .cu-item .allowed[data-v-7cb85393]{color:#2796e9}.page .cu-header[data-v-7cb85393]{position:fixed;background:#fff;z-index:2;width:%?80?%;text-align:center}',""])},f43f:function(t,e,a){"use strict";a.r(e);var i=a("1e46"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a}}]);