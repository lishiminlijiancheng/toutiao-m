<template>
  <div class="my">
          <div class="unlogin" v-if='user==null'>
              <img src="../../assets/mobile.png" alt="">
            <div class="text" @click="login">登录|注册</div>
        </div>
        <div class="login" v-else>
          <div class="loginHead">
                <div class="person">
                    <div class="image">
                        <van-image
                         width="100"
                         height="100"
                         round
                         :src="require('../../assets/avatar.png')"
                        />
                    </div>
                    <div class="text">黑马程序员</div>
                      <div class="edit"><van-button icon="plus" size="small" plain round type="primary">编辑资料</van-button></div>
                </div>
                <div class="infor">
                <div class="gz">
                    <div class="text">头条</div>
                    <div class="count">{{userInfo.toutiao}}</div>
                </div>
                <div class="gz">
                    <div class="text">关注</div>
                    <div class="count">{{userInfo.guanzhu}}</div>
                </div>
                <div class="gz">
                    <div class="text">粉丝</div>
                    <div class="count">{{userInfo.fensi}}</div>
                </div>
                <div class="gz">
                    <div class="text">获赞</div>
                    <div class="count">{{userInfo.huozan}}</div>
                </div>
               </div>
            </div>
            <van-grid :column-num="2" class="grid  mb-9" clickable>
                <van-grid-item class="subgrid">
                    <i slot="icon" class="iconfont icon-favorite"></i>
                    <span slot="text">收藏</span>
                </van-grid-item>
                <van-grid-item class="subgrid">
                     <i slot="icon" class="iconfont icon-success"></i>
                    <span slot="text">历史</span>
                </van-grid-item>
            </van-grid>
             <van-cell title="消息通知" is-link />
            <van-cell title="小智同学" is-link class="mb-9" />
            <van-cell title="退出登录" class="logout-cell" clickable @click="logout" />
        </div> 
      </div>
</template>

<script>
import {mapState} from 'vuex'
import {getUserInfo} from '@/api/user'
export default {
name:'myIndex',
data(){
    return{
        userInfo:{}
    }
},
computed:{
    ...mapState(['user'])
},
created(){
    if(this.$store.state.user!=null){
        this.loadUserInfo();
    }

},
methods:{
    login(){
        this.$router.push("/login")
    },
    logout(){
        this.$dialog.confirm({
        title: '提示',
        message: '确定要退出登录吗？',
    })
   .then(() => {
    this.$store.commit('setUser',null)
   })
   .catch(() => {
    // on cancel
  });
    },
    async loadUserInfo(){
        try{const{data:res}=await getUserInfo();
        console.log(res)
        this.userInfo=res.data
        console.log(this.userInfo)}
        catch(err){
            console.log(err)
        }
        
    }
}
}
</script>

<style lang='less' scoped>
        .unlogin{
            background-image: url("~@/assets/banner.png");
             background-size: cover;
            height:400px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          align-items: center;
            img{
                width:300px;
                height:300px;
                margin-bottom: 10px;
            }
            .text{
               color: white;
                font-size:40px;
                text-align: center;

            }
        }
        .loginHead{
            height: 340px;
            display: flex;
            padding-left: 25px;
            flex-direction: column;
            justify-content: space-around;
            background-image: url("~@/assets/banner.png");
            background-size: cover;
            .person{
                height:250px;
                display: flex;
                box-sizing: border-box;
                align-items: center;
                .text{
                    text-align: center;
                    color: white;
                    font-size: 28px;
                    margin-left: 20px;
                }
                .van-image__img{
                    vertical-align: center;
                    margin-right: 10px;
                }
            }
            .edit{
                margin-left: 80px;
            }
        }
    .infor{
        height: 60px;
        display: flex;
        color:white;
        font-size: 30px;
        justify-content: space-around;
        align-items: center;
        .gz{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
    .grid{
     .subgrid{
         height:100px;
     }
       i.iconfont{
            font-size:40px;
        }
          .icon-favorite{
                color:red !important;
            }
            .icon-success{
                color:orange !important
            }
        span{
            font-size: 28px;
        }
    }
   .mb-9{
       margin-bottom: 10px;
   }
    .logout-cell{
        text-align: center;
        color:red;
    }

</style>