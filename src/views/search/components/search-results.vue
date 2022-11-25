<template>
  <div class="search-results">
   <van-list
  v-model="loading"
  :finished="finished"
  loading-text="加载种"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item.id" :title="item.name" />
</van-list>
  </div>
</template>

<script>
import {getLists} from '../../../api/article'
export default {
  name:'SearchResults',
  props:{
    searchText:{
      type:String,
    }
  },
   data() {
    return {
      page:1,
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
   async onLoad() {
     this.loading=true
      setTimeout(async()=>{
        const {data:res} = await getLists({pageSize:10,page:this.page,key:this.searchText})
       if (res.data.length===0){
        this.loading=false
        this.finished=true
       }
       else {
        this.list.push(...res.data);
        this.page++;
        this.loading=false
       }
      },500)
      
     
    },
  },

}
</script>

<style>

</style>