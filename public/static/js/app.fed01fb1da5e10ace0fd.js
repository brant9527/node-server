webpackJsonp([1],{"6Wp1":function(t,e){},"9D6l":function(t,e){},"9aa6":function(t,e){},CvTG:function(t,e){},DWgH:function(t,e){},EuYV:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},s,!1,function(t){n("6Wp1")},null,null).exports,o=n("/ocq"),l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"am-background"},[n("div",[n("div",{staticClass:"am-h3 text-center login-tietle"},[t._v("滴约车")]),t._v(" "),n("div",{staticClass:"am-input am-margin-center"},[n("div",{staticClass:"input_tip_text",class:{active:t.focus_num}},[t._v("请输入您的手机号码")]),t._v(" "),n("a",{staticClass:"am-input-icon iconfont icon-mobilephone_fill"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input_num,expression:"input_num"}],attrs:{placeholder:""},domProps:{value:t.input_num},on:{focus:t.numFocus,focusout:t.numFocusOut,input:function(e){e.target.composing||(t.input_num=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"am-input am-margin-center am-margin-top-1"},[n("div",{staticClass:"input_tip_text",class:{active:t.focus_psw}},[t._v("请输入您的密码")]),t._v(" "),n("a",{staticClass:"am-input-icon iconfont icon-icon-"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input_psw,expression:"input_psw"}],attrs:{placeholder:""},domProps:{value:t.input_psw},on:{focus:t.pswFocus,focusout:t.pswFocusOut,input:function(e){e.target.composing||(t.input_psw=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"router-text"},[t._v("没有账号？"),n("router-link",{staticClass:"am-router-text",attrs:{to:"/resign"}},[t._v("注册")])],1),t._v(" "),n("div",{staticClass:"am-margin-top-3"},[n("button",{staticClass:"am-btn am-margin-center",on:{click:t.login}},[t._v("登陆")])])])])},staticRenderFns:[]};var r=n("VU/8")({data:function(){return{input_num:"",input_psw:"",focus_num:!1,focus_psw:!1}},methods:{login:function(){this.$router.push({path:"/main"})},numFocus:function(){""===this.input_num&&(this.focus_num=!0)},numFocusOut:function(){""===this.input_num&&(this.focus_num=!1)},pswFocus:function(){""===this.input_psw&&(this.focus_psw=!0)},pswFocusOut:function(){""===this.input_psw&&(this.focus_psw=!1)}}},l,!1,function(t){n("DWgH")},null,null).exports,c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tabBar"},[e("div",{directives:[{name:"tap",rawName:"v-tap",value:{methods:this.fnorder},expression:"{methods:fnorder}"}],staticClass:"tabItem"},[e("a",{staticClass:"iconfont icon-activity tab-icon"})]),this._v(" "),e("div",{directives:[{name:"tap",rawName:"v-tap",value:{methods:this.fnpublish},expression:"{methods:fnpublish}"}],staticClass:"tabItem"},[e("a",{staticClass:"iconfont tab-icon icon-add"})]),this._v(" "),e("div",{directives:[{name:"tap",rawName:"v-tap",value:{methods:this.fnmine},expression:"{methods:fnmine}"}],staticClass:"tabItem"},[e("a",{staticClass:"iconfont tab-icon icon-homepage"})])])},staticRenderFns:[]};var u={components:{tabBar:n("VU/8")({methods:{fnorder:function(){this.$router.push({path:"/main"})},fnpublish:function(){this.$router.push({path:"/main/publish"})},fnmine:function(){this.$router.push({path:"/main/mine"})}}},c,!1,function(t){n("iC/y")},"data-v-4752deb4",null).exports}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("div",{staticClass:"main-view"},[e("router-view")],1),this._v(" "),e("tab-bar")],1)},staticRenderFns:[]};var m=n("VU/8")(u,d,!1,function(t){n("OpSG")},null,null).exports,p={props:{value:Object,width:{type:Number,default:3},height:{type:Number,default:1},propsList:{type:Array},isBorder:{default:!0,type:Boolean}},data:function(){return{flag:!1,selectValue:{}}},methods:{change:function(t){this.selectValue={value:t.event.target.value,label:t.event.target.textContent},this.$emit("input",this.selectValue),this.flag=!1},changeFlag:function(t){this.flag=!0}},mounted:function(){this.selectValue=this.value}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"am-select",class:{active:t.flag},style:{width:t.width+"rem",height:t.height+"rem"}},[n("div",{directives:[{name:"tap",rawName:"v-tap",value:{methods:t.changeFlag},expression:"{methods: changeFlag}"}],staticClass:"item"},[t._v(t._s(t.selectValue.label)+"\n    "),n("a",{staticClass:"iconfont icon icon-unfold"})]),t._v(" "),t.flag?n("ul",[n("a",{staticClass:"arrow"}),t._v(" "),t._l(t.propsList,function(e){return n("li",{directives:[{name:"tap",rawName:"v-tap",value:{methods:t.change},expression:"{methods: change}"}],key:e.id,class:{active:t.selectValue.value===e.value},attrs:{value:e.value}},[t._v(t._s(e.label)+"\n      "),n("a",{staticClass:"iconfont icon icon-right"})])})],2):t._e()])])},staticRenderFns:[]};var f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"head"}),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"money"},[t._v(t._s(t.money+"元"))]),t._v(" "),n("div",{staticClass:"time"},[t._v(t._s(t.time+" "+t.start+" - "+t.end))]),t._v(" "),n("a",{staticClass:"arrow iconfont icon-return"})])])},staticRenderFns:[]};var h={components:{AmSelect:n("VU/8")(p,v,!1,function(t){n("9aa6")},null,null).exports,cardInfoItem:n("VU/8")({props:{start:"",end:"",time:"",money:"",headurl:"",name:""},data:function(){return{}}},f,!1,function(t){n("Np4P")},"data-v-9f97632c",null).exports},data:function(){return{selectStart:{label:"选择起点",value:"-1"},selectEnd:{label:"选择终点",value:"-1"},propsList:[{value:0,label:"湖里"},{value:1,label:"金山"}],cardList:[{name:"我",time:"9:00",start:"金山",end:"guanyinshan",money:"10",headurl:""},{name:"我",time:"9:00",start:"金山",end:"guanyinshan",money:"10",headurl:""},{name:"我",time:"9:00",start:"金山",end:"guanyinshan",money:"10",headurl:""},{name:"我",time:"9:00",start:"金山",end:"guanyinshan",money:"10",headurl:""},{name:"我",time:"9:00",start:"金山",end:"guanyinshan",money:"10",headurl:""},{name:"我",time:"9:00",start:"金山",end:"guanyinshan",money:"10",headurl:""}],iscrollClass:{top:2,bottom:0}}},watch:{selectStart:function(t){}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"topTab"},[n("am-select",{staticClass:"select-out",attrs:{isBorder:!1,propsList:t.propsList},model:{value:t.selectStart,callback:function(e){t.selectStart=e},expression:"selectStart"}}),t._v(" "),n("am-select",{staticClass:"select-out",attrs:{isBorder:!1,propsList:t.propsList},model:{value:t.selectEnd,callback:function(e){t.selectEnd=e},expression:"selectEnd"}})],1),t._v(" "),n("am-iscroll",{attrs:{iscrollClass:t.iscrollClass}},t._l(t.cardList,function(t){return n("cardInfoItem",{key:t.id,attrs:{name:t.name,time:t.time,start:t.start,end:t.end,money:t.money,headurl:t.headurl}})}))],1)},staticRenderFns:[]};var b=n("VU/8")(h,_,!1,function(t){n("9D6l")},"data-v-32c7e398",null).exports,g={data:function(){return{startAddress:"",endAddress:"",pickerVisible:"点击此处选择时间",contact:"",roleValue:"",options:[{label:"司机",value:"1"},{label:"乘客",value:"2"}],introduction:""}},methods:{openPicker:function(){this.$refs.picker.open()},handleConfirm:function(t){console.log(t)},commit:function(){this.$axios.create({baseURL:"https://localhost"})({method:"post",url:"/car/setTrip",data:{startAddress:this.startAddress}}).then(function(t){console.log(t)})}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("mt-field",{attrs:{label:"起点",placeholder:"请输入起点"},model:{value:t.startAddress,callback:function(e){t.startAddress=e},expression:"startAddress"}}),t._v(" "),n("mt-field",{attrs:{label:"终点",placeholder:"请输入终点"},model:{value:t.endAddress,callback:function(e){t.endAddress=e},expression:"endAddress"}}),t._v(" "),n("mt-field",{attrs:{label:"联系方式",placeholder:"手机号或微信号"},model:{value:t.contact,callback:function(e){t.contact=e},expression:"contact"}}),t._v(" "),n("mt-radio",{attrs:{title:"您是？",options:t.options},model:{value:t.roleValue,callback:function(e){t.roleValue=e},expression:"roleValue"}}),t._v(" "),n("mt-cell",{attrs:{title:"出发时间"}},[n("div",{staticClass:"timeSlect",on:{click:t.openPicker}},[t._v(t._s(t.pickerVisible))])]),t._v(" "),n("mt-datetime-picker",{ref:"picker",attrs:{type:"time"},on:{confirm:t.handleConfirm},model:{value:t.pickerVisible,callback:function(e){t.pickerVisible=e},expression:"pickerVisible"}}),t._v(" "),n("mt-field",{attrs:{label:"备注",placeholder:"请输入备注内容",type:"textarea",rows:"4"},model:{value:t.introduction,callback:function(e){t.introduction=e},expression:"introduction"}}),t._v(" "),n("div",{staticClass:"commit"},[n("mt-button",{attrs:{type:"default",size:"large"},on:{click:t.commit}},[t._v("提交信息")])],1)],1)},staticRenderFns:[]};var y=n("VU/8")(g,C,!1,function(t){n("EuYV")},null,null).exports,w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{},[this._v("\n  Mine\n")])},staticRenderFns:[]};var x=n("VU/8")({},w,!1,function(t){n("O5rI")},null,null).exports;a.default.use(o.a);var k=new o.a({routes:[{path:"/",name:"Login",component:r},{path:"/main",name:"Main",component:m,children:[{path:"/",name:"default",component:b},{path:"publish",nam:"Publish",component:y},{path:"mine",nam:"Mine",component:x}]}]}),V=n("w/E5"),F=n.n(V),$=n("bHfy"),E=n.n($),A={name:"amIscroll",props:{config:{type:Object,default:function(t){return{scrollbars:!0,mouseWheel:!0,interactiveScrollbars:!0,shrinkScrollbars:"scale",fadeScrollbars:!1}}},iscrollClass:{type:Object,defalut:function(t){return{top:0,bottom:0}}}},data:function(){return{iscroll:{}}},methods:{refresh:function(){}},mounted:function(){this.iscroll=new E.a(this.$el,this.config)},destroyed:function(){this.iscroll.destroy()}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"iscroll",style:{top:this.iscrollClass.top+"rem",bottom:this.iscrollClass.bottom+"rem"}},[e("div",{staticClass:"wrap"},[this._t("default")],2)])},staticRenderFns:[]};var N=n("VU/8")(A,S,!1,function(t){n("CvTG")},"data-v-0d41931e",null).exports;N.install=function(t,e){t.component(N.name,N)};var O=N,L=n("Au9i"),R=n.n(L),U=(n("d8/S"),n("mtWM")),I=n.n(U);n("SvJZ"),n("Ya+h");a.default.config.productionTip=!1,a.default.use(F.a),a.default.use(O),a.default.use(R.a),a.default.prototype.$axios=I.a,new a.default({el:"#app",router:k,components:{App:i},template:"<App/>"})},Np4P:function(t,e){},O5rI:function(t,e){},OpSG:function(t,e){},SvJZ:function(t,e){},"Ya+h":function(t,e){},"d8/S":function(t,e){},"iC/y":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fed01fb1da5e10ace0fd.js.map