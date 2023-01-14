<template>
  <div class="layout-container">
     <!-- 子路由出口 -->
     <router-view></router-view>
     <!-- 标签导航栏 -->
<van-tabbar route>
  <van-tabbar-item icon="todo-list-o" replace to="/layout3/manage">管理</van-tabbar-item>
  <van-tabbar-item icon="user-o" replace to="/layout3/my">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
name:'layoutIndex4',
data(){
    return{
       
    }
}
}
</script>

<style>

</style>