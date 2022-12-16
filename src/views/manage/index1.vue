<template>
  <div class="manage1">
    <van-nav-bar
  title="系统管理员"
  right-text="退出"
  left-arrow
  @click-right="onClickRight"
/>
<p class="top" style="margin-top:0.2rem;margin-bottom:0.2rem">
<span><van-icon name="orders-o" /><span style="font-size:0.4rem">共12个订单</span></span>
<van-button round type="primary" @click="show=true" size="small">生成配送路线</van-button>
</p>
<van-collapse v-model="activeNames">
  <van-collapse-item v-for="(item,index) in orders" :key="item.id" :name="String(index+1)">
    <template #title>
      <div><van-icon name="shop" color="red"/><span style="color:gray;font-weight:bold">订单编号</span>{{item.id}}<span><van-tag type="warning">未完成</van-tag></span></div>
    </template>
    <p>订单详情：{{item.name}}</p>
    <p><van-icon name="location" /><span>发出：{{item.start}}</span><span style="margin-left:1rem"><van-icon name="location" />终点：{{item.end}}</span></p>
    <p>联系发货人：{{item.send}}<span style="margin-left:0.5rem"><van-icon color="green" name="phone" /></span><span style="color:blue;margin-left:0.5rem">复制</span><span style="color:blue;margin-left:0.5rem">呼叫</span></p>
    <p>联系收货人：{{item.receive}}<span style="margin-left:0.5rem"><van-icon color="green" name="phone" /></span><span style="color:blue;margin-left:0.5rem">复制</span><span style="color:blue;margin-left:0.5rem">呼叫</span></p>
  </van-collapse-item>
</van-collapse>
<van-action-sheet v-model="show" title="配送路线">
  <p>运输机所有路线长度为：291.5127km</p>
  <p>第1架运输机路线长度为：100.8739km</p>
  <p>第1架运输机路线为：西安京东仓库->西安体育学院->西北大学->西安电子科技大学->西京学院->西北政法大学->
    西安亚欧学院->陕西师范大学->长安大学->西安建筑科技大学->西安交通大学->西安京东仓库
  </p>
  <p>第2架运输机路线长度为：190.6388km</p>
  <p>第2架运输机路线为：西安京东仓库->西北农林科技大学->西安京东仓库</p>
  <div class="content">
    <iframe src="http://8.142.19.67:3000/images/best_route.html" width="100%" height="600px"></iframe>
  </div>
</van-action-sheet>
  </div>
</template>

<script>
export default {
name:'manage1',
data(){
    return {
           show:false,
           activeNames: ['1'],
           orders:[
            {id:'dj8f0000432',name:'有机生燕麦片杂粮水煮粥350g*100',finish:false,start:'西安京东仓库',end:'陕西师范大学',send:'15137131120',receive:'17970397748'},
            {id:'dj8f0000433',name:'有机蔬菜新鲜配送套餐礼盒绿色6斤生菜沙拉素材包*200',finish:true,start:'西安京东仓库',end:'西北大学',send:'16137131120',receive:'13970397748'},
            {id:'dj8f0000434',name:'紫薯新鲜板栗红番薯地瓜蜜薯唐心10斤山芋烟薯蔬菜农家自种*1000',finish:false,start:'西安京东仓库',end:'西北政法大学',send:'15537131120',receive:'17900397748'},
            {id:'dj8f0000435',name:'乳酸吐司紫米夹心面包早餐代餐糕点*100',finish:false,start:'西安京东仓库',end:'长安大学',send:'17137131120',receive:'17870397748'},
            {id:'dj8f0000436',name:'伊利牛纯牛奶250ml*12盒*500箱',finish:true,start:'西安京东仓库',end:'西安亚欧学院',send:'14137131120',receive:'19970397748'},
            {id:'dj8f0000437',name:'蒙牛牛纯牛奶250ml*12盒*500箱',finish:true,start:'西安京东仓库',end:'西安电子科技大学',send:'14137131120',receive:'19970397748'},
            {id:'dj8f0000438',name:'特仑苏有机牛奶250ml*12盒*500箱',finish:true,start:'西安京东仓库',end:'西北农林科技大学',send:'14137131120',receive:'19970397748'},
            {id:'dj8f0000439',name:'金典高钙牛奶250ml*12盒*500箱',finish:true,start:'西安京东仓库',end:'西安建筑科技大学',send:'14137131120',receive:'19970397748'},
            {id:'dj8f0000440',name:'安慕希牛奶250ml*12盒*500箱',finish:true,start:'西安京东仓库',end:'西安交通大学',send:'14137131120',receive:'19970397748'},
            {id:'dj8f0000441',name:'光明牛奶250ml*12盒*500箱',finish:true,start:'西安京东仓库',end:'西京学院',send:'14137131120',receive:'19970397748'},
            {id:'dj8f0000442',name:'莫里斯安牛奶250ml*12盒*500箱',finish:true,start:'西安京东仓库',end:'西安体育学院',send:'14137131120',receive:'19970397748'},
            {id:'dj8f0000443',name:'新西兰牛纯牛奶250ml*12盒*500箱',finish:true,start:'西安京东仓库',end:'西安建筑科技大学',send:'14137131120',receive:'19970397748'}
           ]
    }
},
methods: {
    onClickRight(){
        this.$router.push('/')
    }
},
}
</script>

<style lange='less' scoped>
.manage1{
    margin-bottom: 400px;
}
.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.van-tag{
    margin-left: 2.5rem;
}
.van-button--primary{
    margin-left:0.4rem;
    margin-top:0.4rem;
}
p{
    font-size: 0.3rem;
    margin-top:0.2rem;
    margin-bottom: 0.2rem;
}


</style>