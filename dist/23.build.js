webpackJsonp([23],{110:function(e,t,i){"use strict";t.a={data:function(){return{radioList:[{name:"自定义中奖概率",isChecked:!0,code:0},{name:"系统分配中奖概率",isChecked:!1,code:1}]}},mounted:function(){},methods:{chooseProbabilityMethod:function(e,t,i){var a=this;this.radioList.forEach(function(e){e.isChecked!==a.radioList[t].isChecked&&(e.isChecked=!1)}),e.isChecked=!e.isChecked,"1"==i?this.$router.push({path:"/activity/awardSetting/systemProbability"}):this.$router.push({path:"/activity/awardSetting/customProbability"})}}}},175:function(e,t,i){var a=i(176);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=i(4).default;r("1e83e83a",a,!0,{})},176:function(e,t,i){t=e.exports=i(3)(!1),t.push([e.i,'#awardSetting-main .awardModel h4[data-v-72587c60]{font-size:.7rem;color:#929292;height:1.8rem;line-height:1.8rem;padding:0 .5rem}#awardSetting-main .awardModel div[data-v-72587c60]{height:2rem;line-height:2rem;background:#fff;padding:0 .5rem}#awardSetting-main .awardModel div label[data-v-72587c60]{font-size:.7rem;color:#333}#awardSetting-main .awardModel div label[data-v-72587c60]:not(:last-child){margin-right:1rem}#awardSetting-main .awardModel div label input[type=radio][data-v-72587c60]{position:relative;top:.1rem}#awardSetting-main .awardModel div label input[type=radio][data-v-72587c60]:before{display:block;width:.6rem;height:.6rem;content:"";position:absolute;top:-.16rem;left:-.1rem;background:#fff;border:1px solid #929292;text-align:center;line-height:.43rem;font-size:1.2rem;border-radius:50%}#awardSetting-main .awardModel div label input[type=radio][data-v-72587c60]:checked:before{display:block;width:.6rem;height:.6rem;content:"\\2022";color:#f35353;position:absolute;top:-.16rem;left:-.1rem;background:#fff;border:1px solid;text-align:center;line-height:.43rem;font-size:1.2rem;border-radius:50%}',""])},177:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"awardSetting-main"}},[i("section",{staticClass:"awardModel"},[i("h4",[e._v("中奖模式")]),e._v(" "),i("div",e._l(e.radioList,function(t,a){return i("label",{on:{click:function(i){e.chooseProbabilityMethod(t,a,t.code)}}},[i("input",{attrs:{type:"radio",name:"probability"},domProps:{checked:t.isChecked}}),e._v("\n\t\t\t\t"+e._s(t.name)+"\n\t\t\t")])}))]),e._v(" "),i("div",{staticClass:"awardModelComponent"},[i("router-view")],1)])},r=[],o={render:a,staticRenderFns:r};t.a=o},70:function(e,t,i){"use strict";function a(e){i(175)}Object.defineProperty(t,"__esModule",{value:!0});var r=i(110),o=i(177),d=i(12),n=a,c=d(r.a,o.a,!1,n,"data-v-72587c60",null);t.default=c.exports}});
//# sourceMappingURL=23.build.js.map