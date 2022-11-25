<template>
   <van-cell class="article-item"
    :to="{
        name:'article',
        params:{articleId:article.id}
    }">
       <div slot="title" class="title van-multi-ellipsis--l2">{{article.title}}</div>
       <div slot="label" class="label">
           <div v-if="article.pic.length==3" class="cover-wrap">
               <div v-for="(img,index) in article.pic" :key="index" class="cover-wrap-item">
                   <van-image
                    class="cover-item-img"
                    :src="img"
                   />
               </div>
           </div>
           <div class="label-info">
               <span>{{article.aut_name}}</span>
               <span>{{article.comn_count}}评论</span>
               <span>{{article.date|relativeTime}}</span>
           </div>
       </div>
        <van-image v-if="article.pic.length==1"
            slot="default"
            width="100"
            height="100"
            class="right-cover"
            fit="cover"
            :src="article.pic[0]"
           />
   </van-cell>
</template>

<script>
export default {
    name:'ArticleItem',
    props:{
        article:{
            type:Object,
            required:true
        }
    }

}
</script>

<style lang="less" scoped>

.article-item{
   .label-info span{
            font-size: 22px;
            color:#b4b4b4;
            margin-right:25px;
        }
        .title{
            font-size:32px;
            color:'#3a3a3a';
        }
        .van-cell__value{
            flex: unset;
            width:232px;
            height:146px;
            padding-left:25px;
        }
        .right-cover{
            width:232px !important;
            height:146px;
        }
         .cover-wrap{
           margin-top:0;
            display:flex;
            padding:30px 0;
             .cover-wrap-item{
                flex:1;
                height: 146px;
                &:not(:last-child){
                    padding-right:4px;
                }
                .cover-item-img{
                    width:100%;
                    height:146px;
                }
            }
        }
    
     
    }
      
         
   
</style>