(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{637:function(t,e,r){},657:function(t,e,r){"use strict";r(637)},680:function(t,e,r){"use strict";r.r(e);var n=r(17),o=(r(77),r(61),r(1)),d=r(0),c=r.n(d),l=o.default.extend({data:function(){return{page:{}}},computed:{createTime:function(){return this.page.createdAt?c()(this.page.createdAt).format("YYYY 年 MM 月 D 日 HH:mm:ss"):""}},watch:{page:function(t){t.title&&(document.title="柠喵的布洛阁 - "+t.title)}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles",t.$route.params.slug).fetch();case 2:r=e.sent,Array.isArray(r)||setTimeout((function(){t.page=r}),500);case 4:case"end":return e.stop()}}),e)})))()}}}),v=(r(657),r(86)),_=r(114),m=r.n(_),x=r(682),f=r(599),h=r(638),k=r(612),w=r(611),C=r(648),y=r(598),V=r(674),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("div",[t.page.wip?r("v-alert",{attrs:{text:"",color:"warning",dark:"",outlined:"",rounded:"lg",icon:"mdi-alert"}},[t._v("\n      本文章尚未完成，内容可能出现较大改动\n    ")]):t._e(),t._v(" "),t.createTime?r("v-card",{staticClass:"post-detail-card"},[r("div",{staticClass:"post-detail-card-header"},[r("div",{staticClass:"width-10px"}),t._v(" "),r("v-btn",{attrs:{elevation:"0",fab:"",text:""},on:{click:function(e){return t.$router.back()}}},[r("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),r("div",[r("v-card-title",[t._v("\n            "+t._s(t.page&&t.page.title)+"\n          ")]),t._v(" "),r("v-card-subtitle",[r("div",{staticClass:"post-times"},[r("div",[t._v("发布时间："+t._s(t.createTime))])])])],1)],1),t._v(" "),r("v-card-text",[r("nuxt-content",{attrs:{document:t.page}})],1)],1):r("v-card",{staticClass:"post-loading-card"},[r("div",{staticClass:"post-loading-card-header"},[r("v-skeleton-loader",{attrs:{type:"avatar"}}),t._v(" "),r("div",{staticClass:"post-loading-card-header-texts"},[r("v-skeleton-loader",{attrs:{type:"heading"}}),t._v(" "),r("v-skeleton-loader",{staticClass:"text-loading",attrs:{type:"text"}})],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",[r("v-skeleton-loader",{attrs:{type:"text"}}),t._v(" "),r("v-skeleton-loader",{attrs:{type:"text"}}),t._v(" "),r("v-skeleton-loader",{attrs:{type:"text","max-width":"50%"}}),t._v(" "),r("v-skeleton-loader",{attrs:{type:"text"}}),t._v(" "),r("v-skeleton-loader",{attrs:{type:"text"}}),t._v(" "),r("v-skeleton-loader",{attrs:{type:"text","max-width":"50%"}})],1)],1)],1)])}),[],!1,null,"85aa9e10",null);e.default=component.exports;m()(component,{VAlert:x.a,VBtn:f.a,VCard:h.a,VCardSubtitle:k.a,VCardText:k.b,VCardTitle:k.c,VContainer:w.a,VDivider:C.a,VIcon:y.a,VSkeletonLoader:V.a})}}]);