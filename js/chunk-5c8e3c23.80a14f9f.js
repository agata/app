(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c8e3c23"],{"47cd":function(e,t,n){},"8cd4":function(e,t,n){"use strict";var l=n("47cd"),a=n.n(l);a.a},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},f608:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.options.template&&e.options.template.length>0?n("v-popover",{attrs:{trigger:"hover"}},[n("div",{staticClass:"readonly-many-to-many"},[e._v(e._s(e.itemCount))]),n("template",{slot:"popover"},[n("ul",{staticClass:"list"},e._l(e.value,function(t,l){return n("li",{key:l},[e._v(e._s(e.render(t)))])}),0)])],2):n("div",{staticClass:"readonly-many-to-many"},[e._v(e._s(e.itemCount))])},a=[],u=n("8db2"),o=n.n(u),r={name:"readonly-many-to-many",mixins:[o.a],computed:{itemCount:function(){return this.$tc("item_count",(this.value||[]).length,{count:(this.value||[]).length})}},methods:{render:function(e){return this.$helpers.micromustache.render(this.options.template,e)}}},i=r,s=(n("8cd4"),n("2877")),d=Object(s["a"])(i,l,a,!1,null,"adf7fa14",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-5c8e3c23.80a14f9f.js.map