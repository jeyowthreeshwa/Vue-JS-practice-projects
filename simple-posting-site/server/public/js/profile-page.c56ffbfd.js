(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile-page"],{"2a37":function(t,e,s){"use strict";s("80ca")},"3d82":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loading-component-main-div "},[s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"loading-animation"},[s("div",{staticClass:"hollow-dots-spinner"},[s("div",{staticClass:"dot"}),s("div",{staticClass:"dot"}),s("div",{staticClass:"dot"})])])])],1)},n=[],a={},r=a,c=(s("3fcc"),s("2877")),o=Object(c["a"])(r,i,n,!1,null,null,null);e["a"]=o.exports},"3fcc":function(t,e,s){"use strict";s("ac8d")},"80ca":function(t,e,s){},ac8d:function(t,e,s){},c66d:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile-main-container"},[s("div",{staticClass:"avatar large"},[s("img",{attrs:{src:"./api/users/profile-images/"+this.currentUser._id+"/"+this.currentUser.profile_image}})]),s("div",{staticClass:"p-3"},[s("h2",[t._v(t._s(this.currentUser.displayName))]),s("h4",{staticStyle:{opacity:"0.7"}},[t._v(t._s(this.currentUser.username))])]),s("hr"),s("h4",{staticClass:"posts-header font-weight-bold text-left"},[t._v("Your posts")]),s("PostList",{attrs:{id:this.currentUser._id}})],1)},n=[],a=(s("d3b7"),s("2f62")),r=s("3d82"),c=s("ef56"),o=function(){return{component:Promise.all([s.e("post-component~register-page"),s.e("post-component")]).then(s.bind(null,"454b")),loading:r["a"],error:c["a"],timeout:3e5}},l={components:{PostList:o},computed:Object(a["c"])(["currentUser"]),methods:{},created:function(){}},u=l,d=(s("2a37"),s("2877")),f=Object(d["a"])(u,i,n,!1,null,null,null);e["default"]=f.exports},ef56:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("i",[t._v("Failed to load the component in time. Please refresh the page")])])}],a={},r=a,c=s("2877"),o=Object(c["a"])(r,i,n,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=profile-page.c56ffbfd.js.map