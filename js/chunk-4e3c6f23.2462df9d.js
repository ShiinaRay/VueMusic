(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e3c6f23"],{"1f3c":function(t,e,a){"use strict";a("c906")},"40d6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top-nav"},[a("el-menu",{attrs:{"default-active":t.$route.path,router:"",mode:"horizontal"}},t._l(t.tabitem,(function(e,n){return a("el-menu-item",{key:n,attrs:{index:e.path}},[t._v(" "+t._s(e.name)+" ")])})),1)],1)},s=[],i={name:"TopNav",props:{tabitem:{type:Array,default(){return[]}}}},r=i,o=(a("1f3c"),a("2877")),c=Object(o["a"])(r,n,s,!1,null,"d11967da",null);e["a"]=c.exports},c906:function(t,e,a){},e86c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-favorite"},[t.$store.state.isLogin?a("div",{staticClass:"logined"},[a("TopNav",{attrs:{tabitem:t.topnav}}),a("div",{staticClass:"favorite-content w"},[a("router-view")],1)],1):a("div",{staticClass:"nologin"},[a("el-empty",{attrs:{description:"登录后才能查看","image-size":200}})],1)])},s=[],i=a("40d6"),r={name:"MyFavorite",components:{TopNav:i["a"]},data(){return{topnav:[{path:"/myfavorite/album",name:"专辑"},{path:"/myfavorite/singer",name:"歌手"},{path:"/myfavorite/mv",name:"视频"}]}},created(){this.$store.state.isLogin||this.$message({type:"warning",message:"登录后才能查看",showClose:!0,center:!0})},activated(){document.querySelector(".view").scrollTop=0}},o=r,c=a("2877"),l=Object(c["a"])(o,n,s,!1,null,"19cf721a",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-4e3c6f23.2462df9d.js.map