(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bc2a876"],{"0706":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"rec-everyday w"},[t.$store.state.isLogin?s("div",{staticClass:"logined"},[s("div",{staticClass:"hd"},[s("div",{staticClass:"nowdata"},[s("div",{staticClass:"left-date"},[s("p",[t._v(t._s(t.getNowDay))]),s("div",{staticClass:"nowday"},[t._v(t._s(t.getNowDate))])]),t._m(0)]),s("div",{staticClass:"btn"},[s("el-button",{attrs:{type:"primary",icon:"el-icon-video-play"},on:{click:t.playAll}},[t._v("播放全部")]),s("el-button",{attrs:{icon:"el-icon-folder-add"}},[t._v("收藏全部")])],1)]),s("div",{staticClass:"bd"},[s("SongTable",{attrs:{songs:t.recsongs}})],1)]):s("div",{staticClass:"nologin"},[s("el-empty",{attrs:{description:"登录后才能查看","image-size":200}})],1)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"right-text"},[s("h2",[t._v("每日歌曲推荐")]),s("div",[t._v("根据你的音乐口味生成，每天6:00更新")])])}],i=s("1bab");function o(){return Object(i["b"])({url:"/recommend/songs"})}var r=s("5cd6"),l=s("40a1"),c={name:"RecEveryDay",components:{SongTable:l["a"]},data(){return{recsongs:[]}},computed:{getNowDate(){var t=new Date,e=t.getDate();return e},getNowDay(){var t=new Date,e=t.getDay(),s=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];return s[e]}},created(){this.$store.state.isLogin?o().then(t=>{this.recsongs=t.data.data.dailySongs}):this.$message({type:"warning",message:"登录后才能查看",showClose:!0,center:!0})},methods:{playAll(){this.$store.dispatch("addAllSong",this.recsongs),Object(r["d"])(this.recsongs[0].id).then(t=>{this.$store.dispatch("saveSongUrl",t.data.data[0].url)}),this.$store.dispatch("saveSongDetail",this.recsongs[0])}},activated(){document.querySelector(".view").scrollTop=0}},d=c,u=(s("d23c"),s("2877")),g=Object(u["a"])(d,a,n,!1,null,"67f4a1ae",null);e["default"]=g.exports},"316a":function(t,e,s){"use strict";s("6856")},"40a1":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"song-table"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.songs,"empty-text":"数据加载中~","row-class-name":t.tableRowClassName},on:{"row-dblclick":t.playMusic}},[s("el-table-column",{attrs:{width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.id==t.nowSongDetail.id?s("span",{staticClass:"iconfont",class:t.isPlaying?" icon-voice":"icon-jingyin_laba"}):s("span",[t._v(t._s(t._f("formatIndex")(e.row.index)))])]}}])}),s("el-table-column",{attrs:{width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"operation"},[s("span",{class:-1!==t.likeSongIds.indexOf(e.row.id)?"iconfont icon-xihuan2":"iconfont icon-xihuan",attrs:{title:-1!==t.likeSongIds.indexOf(e.row.id)?"取消喜欢":"喜欢"},on:{click:function(s){return t.likeSong(e.row)}}}),s("span",{staticClass:"iconfont icon-xiazai",attrs:{title:"下载"},on:{click:function(s){return t.downloadCurrentMusic(e.row)}}}),s("span",{staticClass:"el-icon-plus",attrs:{title:"添加到播放列表"},on:{click:function(s){return t.addSong(e.row)}}})])]}}])}),s("el-table-column",{attrs:{prop:"name",label:"歌曲",width:"300","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"songname"},[t._v(" "+t._s(e.row.name)+" "),1==e.row.fee?s("i",{staticClass:"iconfont icon-vip"}):t._e(),0!=e.row.mv?s("i",{staticClass:"iconfont icon-mv",on:{click:function(s){return t.toMvDetail(e.row.mv)}}}):t._e()])]}}])}),s("el-table-column",{attrs:{prop:"al.name",label:"专辑","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",{staticClass:"sthover",on:{click:function(s){return t.toAlbum(e.row.al.id)}}},[t._v(" "+t._s(e.row.al.name)+" ")])]}}])}),s("el-table-column",{attrs:{prop:"ar[0].name",label:"歌手","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",{staticClass:"sthover",on:{click:function(s){return t.toSinger(e.row.ar[0].id)}}},[t._v(" "+t._s(e.row.ar[0].name)+" ")])]}}])}),s("el-table-column",{attrs:{prop:"dt",label:"时长"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(" "+t._s(t._f("formatDuration")(e.row.dt))+" ")])]}}])})],1)],1)},n=[],i=s("5cd6"),o=s("2f62"),r={name:"SongTable",props:{songs:{type:Array,default(){return[]}}},data(){return{islike:!1,currentIndex:null}},computed:{...Object(o["b"])(["isPlaying","nowSongDetail","isLogin","userInfo","userSongList","likeSongIds"])},filters:{formatIndex(t){return t<9?"0"+(t+1):t+1}},created(){this.isLogin&&0===this.likeSongIds.length&&this.getUserLikSongs()},methods:{playMusic(t){Object(i["a"])(t.id).then(e=>{Object(i["d"])(t.id).then(t=>{this.$store.dispatch("saveSongUrl",t.data.data[0].url)}),this.$store.dispatch("changePlayState",!0),this.$store.dispatch("saveSongDetail",t),this.$store.dispatch("addPlayinglist",t)}).catch(t=>{this.$message({message:"暂时无法播放，换首试试",type:"warning",center:!0})})},getUserLikSongs(){Object(i["b"])(this.userInfo.userId).then(t=>{Array.isArray(t.data.ids)&&0!=t.data.ids.length&&this.$store.dispatch("saveLikeSongIds",t.data.ids)})},likeSong(t){if(!this.$store.state.isLogin)return void this.$message({type:"warning",message:"登录后才能收藏",showClose:!0,center:!0});let e=-1===this.likeSongIds.indexOf(t.id);this.userSongList[0].id!=this.$route.params.id?this.likeNowSongBy(t,e):this.$confirm("确定将选中歌曲从我喜欢的音乐中删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",confirmButtonClass:""}).then(()=>{this.likeNowSongBy(t,e),this.$emit("updateSonglist")}).catch(t=>{})},likeNowSongBy(t,e){Object(i["e"])(t.id,e).then(t=>{this.getUserLikSongs(),!0===e?(this.$message({message:"已添加到我喜欢的音乐",type:"success",center:!0}),this.islike=!0):(this.$message({message:"取消喜欢成功",type:"success",center:!0}),this.islike=!1)}).catch(t=>{this.$message.warning("操作失败,请重试")})},downloadCurrentMusic(t){Object(i["a"])(t.id).then(e=>{Object(i["d"])(t.id).then(e=>{let s=e.data.data[0].url,a={url:s,name:t.name+" - "+t.ar[0].name};this.$store.commit("updateDownloadMusicInfo",a)})}).catch(t=>{this.$message({message:"暂无版权，无法下载",type:"warning",center:!0})})},addSong(t){this.$store.dispatch("addPlayinglist",t),this.$message({message:"已添加到播放列表",type:"success",center:!0})},toSinger(t){this.$router.push("/singerdetail/"+t)},toAlbum(t){this.$router.push("/albumdetail/"+t)},toMvDetail(t){this.$router.push({name:"VideoDetail",params:{id:t,type:"mv"}})},tableRowClassName({row:t,rowIndex:e}){if(t.index=e,e%2!==0)return"rowEven"}}},l=r,c=(s("316a"),s("2877")),d=Object(c["a"])(l,a,n,!1,null,"2fedf183",null);e["a"]=d.exports},6856:function(t,e,s){},b9d6:function(t,e,s){},d23c:function(t,e,s){"use strict";s("b9d6")}}]);
//# sourceMappingURL=chunk-7bc2a876.9bcfc3b2.js.map