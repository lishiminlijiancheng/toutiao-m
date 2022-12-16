<template>
  <div class="manage2">
      <van-nav-bar
  title="物资配送员小A"
  right-text="退出"
  left-arrow
  @click-right="onClickRight"
/>
 
<div class="content">
 <van-steps :active="active" direction="vertical">
  <van-step v-for="(item,index) in roads" :key="index">
    <p><van-icon name="location" />{{item.name}}</p>
    <p><van-icon name="underway-o" />{{item.time}}</p>
  </van-step>
</van-steps>
<div class="myb">
    <div class="inner">
         <van-button @click="sub" round size="small" type="primary">上一站</van-button>
<van-button @click="add" round size="small" type="primary">下一站</van-button>
<van-button @click="show=true" icon="guide-o" round size="small" type="info">导航</van-button>
    </div>
   
</div>
<van-action-sheet v-model="show" title="导航">
  <div class="content">
    <iframe  src='http://8.142.19.67:3000/images/shiqu.html' width="100%" height="600px"></iframe>
  </div>
</van-action-sheet>
</div>

  </div>
</template>

<script>
export default {
 name:'manage2',
 data(){
    return {
        s:'http://8.142.19.67:3000/images/shiqu.html',
        loaded:false,
        show:false,
        active:1,
        roads:[{name:'西安京东仓库',time:'2022.12.14 07：00'},
        {name:'西安体育学院',time:'2022.12.14 10：20'},
        {name:'西北大学',time:'2022.12.14 14：00'},
        {name:'西安电子科技大学',time:'2022.12.14 15：00'},
        {name:'西安外国语大学',time:'2022.12.14 20：00'},
        {name:'西安京学院',time:'2022.12.15 10：00'},{name:'西北政法大学',time:'2022.12.15 11：00'},
        {name:'西安亚欧学院',time:'2022.12.15 102：00'},{name:'陕西师范大学',time:'2022.12.15 12：30'},
        {name:'长安大学',time:'2022.12.15 15：00'},{name:'西安建筑科技大学',time:'2022.12.15 16：00'},
        {name:'西安交通大学',time:'2022.12.15 17：00'},{name:'西安京东仓库',time:'2022.12.16 07：00'},]
       
    }
 },
 methods:{
    sub(){
        if(this.active>0)
            this.active--;
    },
    add(){
        if(this.active<this.roads.length-1)
            this.active++;
    },
     onClickRight(){
        this.$router.push('/')
    }
 }
}
</script>

<style lange='less' scoped>
.manage2{
    background: white;
}
.content{
    display: flex;
    justify-content: space-evenly;
}
.myb{
    display: flex;
    flex-direction: column;
    padding-top: 200px;
}
.inner{
    position: fixed;
}
.van-button{
    margin-bottom: 0.5rem;
}
</style>