<template>
  <div class="article-list">
    <van-pull-refresh 
    v-model="isreFreshLoading" 
    :success-text="refreshSuccess"
    success-duration=1500
    @refresh="onRefresh">

    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  :error.sync="error"
  error-text="请求失败，点击重新加载"
  @load="onLoad"
>
 <ArticleItem v-for="(item,index) in list" :key="index" :article="item" />
</van-list></van-pull-refresh>
  </div>
</template>

<script>
import {getArticles} from '../../api/article'
import ArticleItem from '../../components/article-item/index.vue'
export default {
name:'ArticleList',
props:{
    channel:{
        type:Object,
        require:true,
    }
},
components:{ArticleItem},
data(){
    return{ 
      channel_id:this.channel.id,
      list: [],
      timestamp:this.timestamp||Date.now(),
      loading: false,
      finished: false,
      error:false,
      isreFreshLoading:false ,
      refreshSuccess:"" 
      }
},
created(){this.getDatas()},
methods:{
async onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
     
  },
 async onRefresh(){
    try{
      const {data:res}=await getArticles({
        channel_id:this.channel_id,
        timestamp:Date.now(),
        with_top:1
      })
      this.list.unshift(...res.data.results)
      this.isreFreshLoading=false
      this.refreshSuccess=`刷新成功，更新了${res.data.results.length}条数据`
    }
    catch(err){
      this.isreFreshLoading=false
      this.$toast("刷新失败！")
    }
  },
  async getDatas(){
    try{const {data:res}= await getArticles({
        channel_id:this.channel_id,
        timestamp:Date.now(),
        with_top:1
      })
     const{results}=res.data
     console.log("-----------------------------------------")
     console.log(res)
     console.log(results)
      this.list.push(...results)
      this.loading=false
      if(results.length){
        this.timestamp=res.data.pretimestamp
      }
      else{
        console.log("haha")
        this.finished=true
      }
     }
      catch(err){
        console.log(err)
      }
      
  }
  
  }}
</script>

<style>
</style>