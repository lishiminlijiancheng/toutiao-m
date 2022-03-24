<template>
  <div class="layout-container">
     <!-- 子路由出口 -->
     <router-view></router-view>
     <!-- 标签导航栏 -->
<van-tabbar route>
  <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
  <van-tabbar-item icon="other-pay" replace to="/qu">问答</van-tabbar-item>
  <van-tabbar-item icon="video-o" replace to="/video">视频</van-tabbar-item>
  <van-tabbar-item icon="user-o" replace to="/my">{{this.$store.state.user==null?"未登录":"我的"}}</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
name:'layoutIndex',
data(){
    return{
       
    }
}
}
</script>

<style>

</style>