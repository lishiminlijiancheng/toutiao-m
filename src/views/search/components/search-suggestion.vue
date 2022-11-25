<template>
  <div class="search-suggestion">
       <van-cell v-for="(item,index) in suggestions" :key="index"  
       icon="search" @click="$emit('search',item)">
         <div slot="title" v-html="highLight(searchText,item)"></div>
       </van-cell>
  </div>
</template>

<script>
import {getSearchSuggestions} from '../../../api/searchSuggestion'
import {debounce} from 'lodash'
export default {
  name:'SearchSuggestion',
  props:{
    searchText:{
      type:String,
      required:true
    }
  },
  data(){
    return {
      suggestions:[]
    }
  },
  watch:{
    searchText:{
    //   handler(val){
    //     // console.log(val)
    //     this.loadSearchSuggestions(val)
    //   },
    //   immediate:true
    // }
    handler:debounce(function (value){
      this.loadSearchSuggestions(value)
    },500)

  }},
  methods:{
    async loadSearchSuggestions(val){
     try{const {data:res}=await getSearchSuggestions({p:val})
      this.suggestions=res.options
      }
      catch(err){
        this.$toast("获取数据失败！")
      }
    },
    highLight(keyword,source){
      const reg=new RegExp(keyword,'ig')
      return source.replace(reg,`<span class="active">${keyword}</span>`)
    }
  }

}
</script>

<style lang='less' scoped>
.search-suggestion{
 /deep/ .active{
    color:#21A4FE
  }
}
</style>