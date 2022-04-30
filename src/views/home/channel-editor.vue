<template>
  <div>
        <van-cell title="我的频道" class="my_cha">
              <van-button plain type="danger" round size="mini" @click="isEdit=!isEdit">
            {{isEdit? "完成":"编辑"}}
        </van-button>
        </van-cell>
      
        <van-grid :gutter="10">
        <van-grid-item class="my" v-for="(channel,index) in myChannels" :key="index" @click="onMyChannelClick(channel,index)">
            <van-icon v-show="isEdit && !fixedChannels.includes(channel.id)" slot="icon" name="clear"></van-icon>
            <span slot="text" :class="{active:index==active}">{{channel.name}}</span>
        </van-grid-item>

        </van-grid>
        <van-cell title="推荐频道"></van-cell>
         <van-grid :gutter="10">
        <van-grid-item class="recomend_cell" v-for="(channel,index) in recomChannels" :key="index" :text="channel.name" icon="plus" @click="onaddChannel(channel)" />
        </van-grid>
        
  </div>
</template>

<script>
import {getRecomChannels} from '../../api/channel'
export default {
    name:'channelEditor',
    props:{
        myChannels:{
            type:Array,
            require:true
        },
        active:{
            type:Number,
            require:true
        }
    },
    data(){
     return {
         recomChannels:[],
         isEdit:false,
         fixedChannels:[0,1,2]
     }
    },
    created(){
       this.getRChannels()
    },
    methods:{
       async getRChannels(){
           const {data:res}=await getRecomChannels();
           console.log("hahaha")
           console.log(res)
           this.recomChannels=res.results
        },
        onaddChannel(channel){
            this.myChannels.push(channel)
            let index=this.recomChannels.indexOf(channel)
            this.recomChannels.splice(index,1)
        },
        delChannel(channel){
            this.myChannels.splice(this.myChannels.indexOf(channel),1)
            this.recomChannels.push(channel)
        },
        onMyChannelClick(channel,index){
            console.log(index)
            console.log(this.active)
            if(this.isEdit){
                //如果是固定频道则不允许删除
                if(this.fixedChannels.includes(channel.id)){
                    return;
                }
                if(index<=this.active){
                    this.$emit('update-active',this.active-1,true)
                }

                this.delChannel(channel)
            }
            else{
                this.$emit('update-active',index,false);
            }
        }
    }
    

}
</script>

<style scoped lang='less'>
.van-cell{
    margin-top:51px;
}
/deep/.van-grid-item__content{
    background-color: lightgray;
    font-size:22px;
    font-weight: bold;
}
/deep/.recomend_cell>.van-grid-item__content{
   flex-direction: row !important;
   .van-grid-item__icon{
       font-size:22px;
   }
   .van-grid-item__icon+.van-grid-item__text{
       margin-top:0
   }
}
/deep/.my{
    position: relative;
    .van-grid-item__icon-wrapper {
    font-size: 0.74667rem;
    position: absolute;
    top: -5px;
    right: -10px;
    font-size: 30px;
    z-index:2
}
 .van-grid-item__icon+.van-grid-item__text{
       margin-top:0
   }
   .active{
       color:red;
   }
}
</style>