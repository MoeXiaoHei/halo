(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-97593564"],{1:function(t,e){},"1bab":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("8237");var a=n("2b0e"),o=n("4328"),s=n.n(o);function i(t,e,n){return new Promise((o,i)=>{let l={data:JSON.stringify(e)};var r="60000";null!=n&&(r=n+"");let c=parseInt(r);t=t+"?"+(new Date).getTime()+Math.random()+Math.ceil(-89999*Math.random()+99999),a.default.prototype.$http.post(t,s.a.stringify(l),{timeout:c}).then(t=>{o(t)}).catch(t=>{i(t)})})}},"25db":function(t,e,n){t.exports=n.p+"img/hellohaologo-w.c3a11a10.svg"},3471:function(t,e,n){"use strict";n("9eef")},"8b28":function(t,e,n){"use strict";n.r(e);var a=n("1bab"),o={data:()=>({isshow:0,wzxy:[8,33],wzxy2:[8,5],hellohaologo:n("25db"),tagname:null,screenWidth:document.body.clientWidth,isCollapsed:!1}),methods:{expand(){this.isCollapsed=!0},goHome(){window.location.href="/"},adminmenuItem(t,e){this.tagname=e,this.$router.replace("/admin"+t)},exit(){this.$Modal.confirm({title:"确定要退出你的账号吗？",content:"<p>期待你再次登录  (๑ó﹏ò๑)</p>",onOk:()=>{this.logout()},onCancel:()=>{}})},logout(){Object(a.a)("/user/logout",{}).then(t=>{if(console.log(t),200==t.status){var e=t.data;this.$store.state.loginStatus=!1,localStorage.removeItem("Authorization"),localStorage.removeItem("RoleLevel"),this.$router.replace(""),this.$Message.success(e.info),setTimeout(()=>{location.reload()},1500)}else this.$Message.error("请求时出现错误")}).catch(t=>{console.log(t),this.$Message.error("服务器请求错误")})}},mounted(){this.$Spin.hide(),window.onresize=()=>(()=>{window.screenWidth=document.body.clientWidth,this.screenWidth=window.screenWidth})()},computed:{menuitemClasses:function(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}},metaInfo(){return{title:"控制台|"+this.$store.state.metaInfo.webname+this.$store.state.metaInfo.splitline+this.$store.state.metaInfo.websubtitle,meta:[{name:"keywords",content:this.$store.state.metaInfo.keywords},{name:"description",content:this.$store.state.metaInfo.description}]}}},s=(n("3471"),n("2877")),i=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("Layout",{style:{minHeight:"100vh"}},[n("Sider",{class:{miniW:t.screenWidth<=768},staticStyle:{height:"100vh","z-index":"15"},attrs:{breakpoint:"md",collapsible:"","collapsed-width":78},model:{value:t.isCollapsed,callback:function(e){t.isCollapsed=e},expression:"isCollapsed"}},[n("Menu",{class:t.menuitemClasses,staticStyle:{"overflow-y":"auto","overflow-x":"hidden",height:"90vh"},attrs:{accordion:!0,"active-name":"control",theme:"dark",width:"auto"}},[n("MenuItem",{attrs:{name:"men01"}},[n("img",{staticStyle:{width:"135px"},attrs:{src:null==t.$store.state.metaInfo.logo?t.hellohaologo:t.$store.state.metaInfo.logo},on:{click:t.goHome}})]),n("MenuItem",{staticStyle:{background:"#515a6e"},attrs:{name:"control"},nativeOn:{click:function(e){return t.goHome.apply(null,arguments)}}},[n("Icon",{staticClass:"menucolo",attrs:{type:"md-home"}}),n("span",{staticClass:"menucolo"},[t._v("首 页")])],1),n("MenuItem",{staticStyle:{background:"#515a6e"},attrs:{name:"control"},nativeOn:{click:function(e){return t.adminmenuItem("/",null)}}},[n("Icon",{staticClass:"menucolo",attrs:{type:"md-speedometer"}}),n("span",{staticClass:"menucolo"},[t._v("仪表盘")])],1),n("Submenu",{attrs:{name:"men1"}},[n("template",{slot:"title"},[n("Icon",{staticClass:"menucolo",attrs:{type:"md-contact"}}),n("span",{staticClass:"menucolo"},[t._v("个人中心")])],1),n("MenuItem",{attrs:{name:"photo"},nativeOn:{click:function(e){return t.adminmenuItem("/photo","个人中心")}}},[t._v("我的相册")]),n("MenuItem",{attrs:{name:"gallery"},nativeOn:{click:function(e){return t.adminmenuItem("/gallery","个人中心")}}},[t._v("画廊管理")])],2),n("Submenu",{attrs:{name:"men5"}},[n("template",{slot:"title"},[n("Icon",{staticClass:"menucolo",attrs:{type:"md-color-fill"}}),n("span",{staticClass:"menucolo"},[t._v("个性设置")])],1),n("MenuItem",{attrs:{name:"photo"},nativeOn:{click:function(e){return t.adminmenuItem("/usersetting","个性设置")}}},[t._v("密码修改")]),1==t.$store.state.metaInfo.watermark?n("MenuItem",{attrs:{name:"watermark"},nativeOn:{click:function(e){return t.adminmenuItem("/watermark","个性设置")}}},[t._v("水印配置")]):t._e(),1==t.$store.state.metaInfo.api?n("MenuItem",{attrs:{name:"api"},nativeOn:{click:function(e){return t.adminmenuItem("/api","API文档")}}},[t._v("API文档")]):t._e()],2),"admin"==t.$store.state.RoleLevel?n("Submenu",{attrs:{name:"men2"}},[n("template",{slot:"title"},[n("Icon",{staticClass:"menucolo",attrs:{type:"md-contacts"}}),n("span",{staticClass:"menucolo"},[t._v("用户管理")])],1),n("MenuItem",{attrs:{name:"user"},nativeOn:{click:function(e){return t.adminmenuItem("/user","用户管理")}}},[t._v("用户列表")]),n("MenuItem",{attrs:{name:"group"},nativeOn:{click:function(e){return t.adminmenuItem("/group","用户管理")}}},[t._v("分发群组")]),n("MenuItem",{attrs:{name:"capacity"},nativeOn:{click:function(e){return t.adminmenuItem("/capacity","用户管理")}}},[t._v("扩容码")])],2):t._e(),"admin"==t.$store.state.RoleLevel?n("Submenu",{attrs:{name:"men3"}},[n("template",{slot:"title"},[n("Icon",{staticClass:"menucolo",attrs:{type:"ios-switch"}}),n("span",{staticClass:"menucolo"},[t._v("系统设置")])],1),n("MenuItem",{attrs:{name:"storage"},nativeOn:{click:function(e){return t.adminmenuItem("/storage","系统设置")}}},[t._v("存储设置")]),n("MenuItem",{attrs:{name:"setting"},nativeOn:{click:function(e){return t.adminmenuItem("/setting","系统设置")}}},[t._v("站点设置")]),n("MenuItem",{attrs:{name:"MoreSetting"},nativeOn:{click:function(e){return t.adminmenuItem("/moresetting","系统设置")}}},[t._v("更多设置")])],2):t._e(),"admin"==t.$store.state.RoleLevel?n("Submenu",{attrs:{name:"men4"}},[n("template",{slot:"title"},[n("Icon",{staticClass:"menucolo",attrs:{type:"md-git-branch"}}),n("Badge",{attrs:{dot:"",offset:t.wzxy,count:t.isshow}},[n("span",{staticClass:"menucolo"},[t._v("更 多")])])],1),n("MenuItem",{attrs:{name:"about"},nativeOn:{click:function(e){return t.adminmenuItem("/about","系统设置")}}},[n("Badge",{attrs:{dot:"",count:t.isshow,offset:t.wzxy2}},[t._v("关于程序")])],1)],2):t._e()],1)],1),n("Layout",[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isCollapsed&&t.screenWidth<=768,expression:"!isCollapsed && screenWidth<=768"}],staticStyle:{width:"100%",height:"100%","background-color":"rgba(51,51,51,0.36)",position:"fixed","z-index":"14"},on:{click:t.expand}}),n("Header",{style:{background:"#fff",boxShadow:"0 2px 3px 2px rgba(0,0,0,.1)",minWidth:"380px",position:"fixed",top:"0",width:"100%",zIndex:"12"}},[n("Breadcrumb",{style:{float:"left"}},t._l(this.$route.matched,(function(e,a){return n("BreadcrumbItem",{key:a},[t._v(" "+t._s(e.meta.title)+" ")])})),1),n("div",{staticClass:"layout-nav"},[n("Menu",{attrs:{mode:"horizontal",theme:"light","active-name":"1"}},[n("Submenu",{attrs:{name:"3"}},[n("template",{slot:"title"},[n("Icon",{staticStyle:{"font-size":"large"},attrs:{type:"md-contact"}}),t._v(" 用户管理 ")],1),n("MenuGroup",[n("MenuItem",{attrs:{name:"setpass"},nativeOn:{click:function(e){return t.adminmenuItem("/usersetting","个性设置")}}},[t._v("修改密码")]),n("MenuItem",{attrs:{name:"exit"},nativeOn:{click:function(e){return t.exit.apply(null,arguments)}}},[t._v("退出登录")])],1)],2)],1)],1)],1),n("Content",{staticStyle:{padding:"16px",height:"100vh",overflow:"auto"}},[n("div",{staticStyle:{background:"#F8F8F8",height:"auto"}},[n("router-view")],1)])],1)],1)],1)}),[],!1,null,"44cb5c4b",null);e.default=i.exports},"9eef":function(t,e,n){}}]);