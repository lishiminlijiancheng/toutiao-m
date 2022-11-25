import axios from "axios";
import store from "../store/index";
import jsonBig from 'json-bigint';
const request=axios.create({
    baseURL:'http://127.0.0.1:3000/',
    transformResponse: [function(data){
        try{
            return jsonBig.parse(data)
        }catch(err){
            return {data}
        }
    }]
})
//请求拦截器
request.interceptors.request.use(function(config){
    //请求发起会经过这里
    //config:本次请求的配置对象
    const { user } = store.state
    if (user) {
      config.headers.Authorization = user
    }
  
    // 注意：这里务必要返回 config 配置对象，否则请求就停在这里出不去了
    return config
},function(err){
    //如果请求出错了(还没有发出去)会进入这里
    return Promise.reject(err)
}
)
//响应拦截器
export default request