<template>
  <div class="home">
  <van-nav-bar class="page-nav-bar" fixed>
    <van-button class="search_btn" slot="title"
     icon="search" round size="small" to="/search">
     搜索
    </van-button>
  </van-nav-bar>
  <van-tabs class="channel_tabs" v-model="active" animated swipeable >
  <van-tab v-for="(channel) in channels" :key="channel.id" :title="channel.name"><article-list :channel="channel"/></van-tab>
  <div slot="nav-right" class="placeholder"></div>
  <div slot="nav-right" class="menu" @click="show"><i class="iconfont icon-menu"></i></div>
</van-tabs>
<van-popup
  v-model="channelEditorShow"
   close-icon-position="top-left"
  closeable
  position="bottom"
  :style="{ height: '100%' }"
>
  <channel-editor :myChannels="channels" :active="active" @update-active="onUpdateActive"></channel-editor>
</van-popup>

  </div>
</template>

<script>
import {getMyChannels} from '../../api/channel'
import ArticleList from './article-list.vue'
import ChannelEditor from './channel-editor.vue'
export default {
  components: { ArticleList,ChannelEditor },
name:'homeIndex',
data(){
  return{
    active:0,
    channels:[],
    channelEditorShow:false
  }
},
created(){
  this.reqChannels()
},
methods:{
  async reqChannels(){
    const{data:res}=await getMyChannels();
    this.channels=res.data;
    console.log(res)
  },
  show(){
  this.channelEditorShow=true
},
  onUpdateActive(index,isChannelEditSHow=true){
    this.active=index
    this.channelEditorShow=isChannelEditSHow

  }
},

}
</script>

<style lang="less" scoped>
.home{
padding-bottom: 60px;
padding-top:174px !important;
}
.page-nav-bar_title{
  max-width: unset;
 
  
}
.search_btn{
    background-color:#5baffb ;
    width:400px;
    height:64px;
    border: none;
    font-size: 28px;
     color: white;
    .van-icon{
      font-size:28px;
    }
  }
  /deep/.channel_tabs{
    .van-tab{
       border-right: 1px solid #edeff3;
      min-width: 200px;
      font-size: 30px;
      color: #777777;
        .van-tab--active {
      color: #333333;
    }
    }
      .van-tabs__nav {
      padding-bottom: 0;
    }

    .van-tabs__line {
      bottom: 8px;
      width: 31px !important;
      height: 6px;
      background-color: #3296fa;
    }
    .placeholder{
      flex-shrink: 0;
      width:66px;
      height:82px;
    }
    .menu{
     background-color: white;
      position: fixed;
      right:0;
      width:66px;
      height:82px;
      display: flex;
      justify-content: center;
      align-items: center;
      &::before{
        content: " ";
        position: absolute;
        left:0;
        width:2px;
        height:100%;
        background-image: url(~@/assets/gradient-gray-line.png);
      }
     i.icon-menu{
        font-size: 50px;
      }
    }
    .van-tabs__wrap {
    // overflow: hidden;
    position: fixed;
    top: 92px;
    z-index: 1;
    left: 0;
    right: 0;
}

    
  }
</style>