<template>
  <div class="search-history">
      <van-cell title="搜索历史">
          <span @click="allDel">全部删除</span>
          <van-icon name="delete"></van-icon>
      </van-cell>

     <van-cell  v-for="item in histories"
      :key="item.id" :title="item.name"
      @click="$emit('search',item.name)">
     <span slot="right-icon"> <van-icon name="close" @click="delOne($event,item.id)"></van-icon></span>
     </van-cell>
  </div>
</template>

<script>
import history_search from '../../../api/history'
export default {
  name:'searchHistory',
  created(){
    this.getHistories()
  },
  data(){
    return {
      histories:[]
    }
  },
  methods:{
    async getHistories(){
      const {data:res}=await history_search();
      this.histories=res.data
    },
    allDel(){
      this.histories=[];
    },
    delOne(e,id){
      console.log('(((((',e)
      e.stopPropagation();
      
      this.histories=this.histories.filter((item)=>item.id!==id)
    }
  }
}
</script>

<style>

</style>