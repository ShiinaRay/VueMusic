(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12da3e8a"],{2181:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mv"},[e("div",{ref:"tagsnav",staticClass:"tags"},[e("TagsBar",{attrs:{taglist:t.areaList},on:{tagBarClick:t.areaClick}}),e("TagsBar",{attrs:{taglist:t.typeList},on:{tagBarClick:t.typeClick}}),e("TagsBar",{attrs:{taglist:t.orderList},on:{tagBarClick:t.orderClick}})],1),e("div",{staticClass:"mv-list"},[e("VideoList",{attrs:{videolist:t.mvList}})],1)])},a=[],r=e("3d40"),o=e("def2"),n=e("f019"),l={components:{VideoList:o["a"],TagsBar:n["a"]},name:"Mv",data(){return{areaList:{category:"地区",list:["全部","内地","港台","欧美","日本","韩国"]},typeList:{category:"类型",list:["全部","官方版","原生","现场版","网易出品"]},orderList:{category:"排序",list:["上升最快","最热","最新"]},mvList:[],hasMore:!1,area:"全部",type:"全部",order:"上升最快",limit:40,page:1}},created(){this.getAllMvBy("全部","全部","上升最快",1)},methods:{getAllMvBy(t,i,e,s){let a=(s-1)*this.limit;Object(r["c"])(t,i,e,a,this.limit).then(t=>{t.data.hasMore&&(this.mvList.push(...t.data.data),this.hasMore=t.data.hasMore,this.page+=1)})},areaClick(t){this.page=1,this.mvList=[],this.area=t,this.getAllMvBy(t,this.type,this.order,this.page)},typeClick(t){this.page=1,this.mvList=[],this.type=t,this.getAllMvBy(this.area,t,this.order,this.page)},orderClick(t){this.page=1,this.mvList=[],this.order=t,this.getAllMvBy(this.area,this.type,t,this.page)},more(){let t=document.querySelector(".view");Math.ceil(t.scrollTop)+t.clientHeight>=t.scrollHeight&&this.getAllMvBy(this.area,this.type,this.order,this.page)}},activated(){document.querySelector(".view").addEventListener("scroll",this.more)},deactivated(){document.querySelector(".view").removeEventListener("scroll",this.more)}},d=l,c=(e("94e5"),e("2877")),u=Object(c["a"])(d,s,a,!1,null,"1c67482f",null);i["default"]=u.exports},"24d0":function(t,i,e){"use strict";e("380f")},"325a":function(t,i,e){"use strict";e("8da1")},"380f":function(t,i,e){},"3d40":function(t,i,e){"use strict";e.d(i,"c",(function(){return a})),e.d(i,"e",(function(){return r})),e.d(i,"h",(function(){return o})),e.d(i,"g",(function(){return n})),e.d(i,"n",(function(){return l})),e.d(i,"a",(function(){return d})),e.d(i,"b",(function(){return c})),e.d(i,"d",(function(){return u})),e.d(i,"j",(function(){return m})),e.d(i,"i",(function(){return v})),e.d(i,"l",(function(){return h})),e.d(i,"o",(function(){return p})),e.d(i,"m",(function(){return f})),e.d(i,"k",(function(){return y})),e.d(i,"f",(function(){return b}));var s=e("1bab");function a(t,i,e,a,r){return Object(s["b"])({url:"/mv/all",params:{area:t,type:i,order:e,offset:a,limit:r}})}function r(t){return Object(s["b"])({url:"/mv/detail",params:{mvid:t}})}function o(t){return Object(s["b"])({url:"/simi/mv",params:{mvid:t}})}function n(t){return Object(s["b"])({url:"/mv/url",params:{id:t}})}function l(t,i){return Object(s["b"])({url:"/mv/sub",params:{t:t,mvid:i,timestamp:Date.parse(new Date)}})}function d(){return Object(s["b"])({url:"/video/group/list"})}function c(){return Object(s["b"])({url:"/video/category/list"})}function u(t,i){return Object(s["b"])({url:"/video/group",params:{id:t,offset:i}})}function m(t){return Object(s["b"])({url:"/video/detail",params:{id:t}})}function v(t){return Object(s["b"])({url:"/related/allvideo",params:{id:t}})}function h(t){return Object(s["b"])({url:"/video/url",params:{id:t}})}function p(t,i){return Object(s["b"])({url:"/video/sub",params:{t:t,id:i,timestamp:Date.parse(new Date)}})}function f(t,i,e){return Object(s["b"])({url:"/resource/like",params:{t:t,type:i,id:e,timestamp:Date.parse(new Date)}})}function y(t){return Object(s["b"])({url:"/video/detail/info",params:{vid:t,timestamp:Date.parse(new Date)}})}function b(t){return Object(s["b"])({url:"/mv/detail/info",params:{mvid:t,timestamp:Date.parse(new Date)}})}},"850c":function(t,i,e){"use strict";e("df01")},"8da1":function(t,i,e){},"94e5":function(t,i,e){"use strict";e("ef14")},def2:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"video-list"},t._l(t.videolist,(function(t,i){return e("video-list-item",{key:i,attrs:{videolistitem:t}})})),1)},a=[],r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"video-list-item",on:{click:t.videoItemClick}},[e("div",{staticClass:"item-img",on:{mouseenter:t.showIcon,mouseleave:t.closeIcon}},[e("img",{attrs:{src:t.showImg,alt:""}}),e("transition",{attrs:{name:"el-fade-in-linear"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowPlay,expression:"isShowPlay"}],staticClass:"mask-playicon"},[e("span",{staticClass:"iconfont icon-play"})])]),e("transition",{attrs:{name:"el-zoom-in-top"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowIcon,expression:"isShowIcon"}],staticClass:"play-icon"},[e("span",{staticClass:"iconfont icon-play-square"}),e("span",[t._v(t._s(t._f("formatNum")(t.videolistitem.playCount||t.videolistitem.playTime||t.videolistitem.data.playTime||t.videolistitem.data.playCount)))])])]),e("transition",{attrs:{name:"el-zoom-in-bottom"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowIcon,expression:"isShowIcon"}],staticClass:"playduration"},[e("span",[t._v(t._s(t._f("formatDuration")(t.videolistitem.duration||t.videolistitem.durationms||t.videolistitem.data.durationms||t.videolistitem.data.duration)))])])])],1),e("div",{staticClass:"item-text"},[e("div",{staticClass:"twoLine"},[t._v(" "+t._s(t.videolistitem.name||t.videolistitem.title||t.videolistitem.data.title||t.videolistitem.data.name)+" ")]),e("div",{staticClass:"by"},[t._v("by"+t._s(t.showAuthor))])])])},o=[],n={name:"VideoListItem",props:{videolistitem:{type:Object,default(){return{}}}},data(){return{isShowIcon:!0,isShowPlay:!1}},computed:{showImg(){return this.videolistitem.cover||this.videolistitem.imgurl16v9||this.videolistitem.picUrl||this.videolistitem.coverUrl||this.videolistitem.data.coverUrl},showAuthor(){return this.videolistitem.id?this.videolistitem.artistName:this.videolistitem.data?this.videolistitem.data.artists?this.videolistitem.data.artists[0].name:this.videolistitem.data.creator.nickname:this.videolistitem.vid?this.videolistitem.creator[0].userName:void 0}},methods:{showIcon(){this.isShowIcon=!1,this.isShowPlay=!0},closeIcon(){this.isShowIcon=!0,this.isShowPlay=!1},videoItemClick(){this.videolistitem.data?0==this.videolistitem.data.videoGroup[0].type?this.$router.push({name:"VideoDetail",params:{id:this.videolistitem.data.id,type:"mv"}}):this.$router.push({name:"VideoDetail",params:{id:this.videolistitem.data.vid,type:"video"}}):this.videolistitem.id?this.$router.push({name:"VideoDetail",params:{id:this.videolistitem.id,type:"mv"}}):this.videolistitem.vid&&(0==this.videolistitem.type?this.$router.push({name:"VideoDetail",params:{id:this.videolistitem.vid,type:"mv"}}):this.$router.push({name:"VideoDetail",params:{id:this.videolistitem.vid,type:"video"}})),this.isShowIcon=!0,this.isShowPlay=!1}}},l=n,d=(e("325a"),e("2877")),c=Object(d["a"])(l,r,o,!1,null,"7b710bec",null),u=c.exports,m={name:"Videolist",components:{VideoListItem:u},props:{videolist:{type:Array,default(){return[]}}}},v=m,h=(e("24d0"),Object(d["a"])(v,s,a,!1,null,"d47e34de",null));i["a"]=h.exports},df01:function(t,i,e){},ef14:function(t,i,e){},f019:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"tags-bar"},[e("ul",[e("li",{staticStyle:{color:"black","font-size":"16px"}},[t._v(t._s(t.taglist.category)+":")]),t._l(t.taglist.list,(function(i,s){return e("li",{key:s,on:{click:function(e){return t.tagBarClick(s,i)}}},[e("span",{class:{active:t.currentIndex==s}},[t._v(t._s(i.name||i))])])}))],2)])},a=[],r={name:"TagsBar",props:{taglist:{type:Object,default(){return{}}}},data(){return{currentIndex:0}},methods:{tagBarClick(t,i){this.currentIndex=t,this.$emit("tagBarClick",i)}}},o=r,n=(e("850c"),e("2877")),l=Object(n["a"])(o,s,a,!1,null,"c0cfdc36",null);i["a"]=l.exports}}]);
//# sourceMappingURL=chunk-12da3e8a.2737abb2.js.map