<template>
  <div class="search-container">
<form action="/">
  <van-search
    v-model="searchText"
    show-action
    placeholder="请输入搜索关键词"
    background="#21A4FE"
    @cancel="onCancel"
    @focus="isResultShow=false"
  />
</form>
<search-result v-if="isResultShow" :searchText ="searchText"/>
<search-suggestion v-else-if="searchText" :searchText="searchText"  @search="onSearch"/>
<search-history v-else  @search="onSearch"/>

  </div>
</template>

<script>
import SearchHistory from './components/search-history.vue'
import SearchSuggestion from './components/search-suggestion.vue'
import SearchResult from './components/search-results.vue'
export default {
    name:'SearchIndex',
    components:{SearchHistory,SearchSuggestion,SearchResult},
     data() {
    return {
      searchText: '',
      isResultShow:false,
    };
  },
  methods: {
    onSearch(item) {
      console.log(item)
      this.searchText = item
      this.isResultShow = true
    },
    onCancel() {
      this.$router.back()
    },
  },

}
</script>

<style lang='less' scoped>
.search-container{
    .van-search__action{
        color:white;
    }
}
</style>