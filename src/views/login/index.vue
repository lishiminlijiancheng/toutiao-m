<template>
  <div>
      <van-nav-bar class="page-nav-bar" title="登录" />
    <van-form ref="loginForm" @submit="onLogin">
  <van-cell-group inset>
    <van-field
      v-model="user.mobile"
      name="mobile"
      placeholder="请输入手机号"
      :rules="formRules.mobile"
    ><i slot="left-icon" class="iconfont icon-user"></i></van-field>
    <van-field
      v-model="user.code"
      type="password"
      name="code"
      placeholder="请输入验证码"
      :rules="formRules.code"
    ><i slot="left-icon" class="iconfont icon-survey"></i>
     <template #button>
      <van-button v-if="!countVisible" class="btn" size="small" type="primary" @click="sendMessage">发送验证码</van-button>
      <van-count-down v-else :time="1000*60" format="ss秒" @finish="countVisible=false"/>
    </template>
    </van-field>
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button class="btn"  block type="primary" native-type="submit">
        登录
    </van-button>
  </div>
</van-form>

  </div>
</template>

<script>
import {login} from '../../api/user'
export default {
name:'LoginPage',
data(){
    return {
        user:{
        mobile:'',
        code:''
        },
        formRules:{
          mobile:[
            {
              require:true,
              message:'手机号不能为空！',
              trigger:"onBlur"
            },
            {
              pattern:/^1[3|5|7|8]\d{9}$/,
              message:'手机号格式错误！',
               trigger:"onBlur"
            }
          ],
          code:[
            {
              require:true,
              message:"验证码不能为空！",
               trigger:"onBlur"
            },
            {
              pattern:/^\d{6}$/,
              message:'验证码格式错误',
               trigger:"onBlur"
            }
          ]
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
       try {const res=await login({...this.user})
       if(res.data.status==0){
        this.$toast.success("登录成功！")
        this.$store.commit('setUser',data)}
      else
        this.$toast.fail("登录失败！")
       }
       catch(err){
        
       }
    },
   async sendMessage(){
        try{
          await this.$refs.loginForm.validate('mobile')
        }catch(err){
          return console.log("发送验证码失败！",err);
        }
        this.countVisible=true;
    }
    
}
}
</script>

<style lang='less' scoped>
.iconfont{
    font-size: 36px;
}

</style>