<template>
  <div>
  <van-nav-bar  class="page-nav-bar" title="登录" >
  <template #left>
    <van-icon @click="back" class="icon-text" name="arrow-left" size="18" />
  </template>
      </van-nav-bar>

  <van-cell-group inset>
    <van-field
      v-model="user.mobile"
      name="mobile"
      placeholder="请输入手机号"
    ><i slot="left-icon" class="iconfont icon-user"></i></van-field>
    <van-field
      v-model="user.password"
      type="password"
      name="password"
      placeholder="请输入密码"
    ><i slot="left-icon" class="iconfont icon-user"></i></van-field>
    <van-radio-group v-model="user.identity" direction="horizontal">
  <van-radio name="1">我是管理员</van-radio>
  <van-radio name="2">我是配送员</van-radio>
</van-radio-group>
  </van-cell-group>
  
  <div style="margin: 16px;">
    <van-button class="btn"  block type="primary" @click="onLogin">
        登录
    </van-button>
  </div>

  </div>
</template>

<script>
// import {login} from '../../api/user'
export default {
name:'LoginPage',
data(){
    return {
        user:{
        mobile:'',
        password:'',
        identity:1
        },
        countVisible:false
      
    }
},
created(){},
mounted(){},
computed:{},
watch:{},
methods:{
   async onLogin(){
       this.$toast.loading({
         duration:0,
         message:'加载中...',
         forbidClick:true
       })
      

          this.$toast.success("登录成功！")
          if(this.user.identity==1){
            console.log('hahahah')
            this.$router.push('/layout1')
          }else{
            if(this.user.password=='12345')
              this.$router.push('/layout2')
            else{
               this.$router.push('/layout3')
            }
          }
      
        }

    },
//    async sendMessage(){
//         try{
//           await this.$refs.loginForm.validate('mobile')
//         }catch(err){
//           return console.log("发送验证码失败！",err);
//         }
//         this.countVisible=true;
//     },
    back(){
      this.$router.back();
    }
    
}
</script>

<style lang='less' scoped>
.iconfont{
    font-size: 36px;
}
/deep/.van-radio__label{
    padding:0.5rem;
    font-size: 32px;
}

</style>