(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb1280b2"],{"0469":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"favorite-singer"},[i("el-divider",{attrs:{"content-position":"left"}},[i("h2",[t._v("我收藏的歌手("+t._s(t.singercount)+")")])]),i("Singerlist",{attrs:{singerlist:t.favoriteSinger}}),0==t.favoriteSinger.length?i("div",[i("el-empty",{attrs:{description:"还没有关注的歌手","image-size":200}})],1):t._e()],1)},n=[],a=i("055c"),r=i("2f62"),o=i("480b"),c={name:"FavoriteSinger",components:{Singerlist:o["a"]},computed:{...Object(r["b"])(["subSingerlist"])},data(){return{favoriteSinger:[],singercount:0}},methods:{getSubSingerBy(){Object(a["c"])().then(t=>{this.favoriteSinger=t.data.data,this.singercount=t.data.count,this.$store.dispatch("saveFavoriteSinger",t.data.data)})}},created(){0==this.subSingerlist.length?this.getSubSingerBy():(this.favoriteSinger=this.subSingerlist,this.singercount=this.subSingerlist.length)}},l=c,u=i("2877"),m=Object(u["a"])(l,s,n,!1,null,"e96bf250",null);e["default"]=m.exports},"055c":function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"b",(function(){return r}));var s=i("1bab");function n(){return Object(s["b"])({url:"/album/sublist",params:{timestamp:Date.parse(new Date),limit:48}})}function a(){return Object(s["b"])({url:"/artist/sublist",params:{timestamp:Date.parse(new Date),limit:48}})}function r(){return Object(s["b"])({url:"/mv/sublist",params:{timestamp:Date.parse(new Date),limit:40}})}},3024:function(t,e,i){"use strict";i("37cc")},"341a":function(t,e,i){},"37cc":function(t,e,i){},"480b":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return 0!==t.singerlist.length?i("div",{staticClass:"singer-list"},t._l(t.singerlist,(function(t,e){return i("SingerListItem",{key:e,attrs:{singeritem:t}})})),1):t._e()},n=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"singer-list-item",on:{click:function(e){return t.singerClick(t.singeritem.id)},mouseenter:t.showM,mouseleave:t.closeM}},[s("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"item-img"},[s("img",{attrs:{"data-src":t.cover,"data-loading":i("b67f")}}),s("transition",{attrs:{name:"el-zoom-in-top"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowIcon,expression:"isShowIcon"}],staticClass:"mask1"},[s("span",{staticClass:"iconfont icon-yinyue"}),s("span",[t._v(t._s(t.singeritem.musicSize))])])]),s("transition",{attrs:{name:"el-zoom-in-bottom"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowIcon,expression:"isShowIcon"}],staticClass:"mask2"},[s("span",{staticClass:"iconfont icon-zhuanji"}),s("span",[t._v(t._s(t.singeritem.albumSize))])])]),s("transition",{attrs:{name:"el-fade-in-linear"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowDetail,expression:"isShowDetail"}],staticClass:"mask3"},[s("div",{staticClass:"text"},[t._v("查看详情>")])])])],1),s("div",{staticClass:"item-name"},[s("span",{staticClass:"iconfont"},[t._v("")]),s("span",[t._v(t._s(t.singeritem.name))])])])},r=[],o={name:"SingerListItem",props:{singeritem:{type:Object,default(){return{}}}},data(){return{isShowIcon:!0,isShowDetail:!1}},computed:{cover(){return this.singeritem.img1v1Url+"?param=200y200"}},methods:{showM(){this.isShowIcon=!1,this.isShowDetail=!0},closeM(){this.isShowIcon=!0,this.isShowDetail=!1},singerClick(t){this.$router.push("/singerdetail/"+t),this.isShowIcon=!0,this.isShowDetail=!1}}},c=o,l=(i("3024"),i("2877")),u=Object(l["a"])(c,a,r,!1,null,"bcd18ee4",null),m=u.exports,g={name:"Singerlist",components:{SingerListItem:m},props:{singerlist:{type:Array,default(){return[]}}}},h=g,v=(i("9e03"),Object(l["a"])(h,s,n,!1,null,"420fe562",null));e["a"]=v.exports},"9e03":function(t,e,i){"use strict";i("341a")},b67f:function(t,e,i){t.exports=i.p+"img/singerload.22392afc.png"}}]);
//# sourceMappingURL=chunk-bb1280b2.dc78db19.js.map