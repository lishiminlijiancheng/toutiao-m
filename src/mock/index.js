import Mock from "mockjs";
var getQuery = (url, name) => {
    console.log(url, name);
    const index = url.indexOf("?");
    if (index !== -1) {
      const queryStrArr = url.substr(index + 1).split("&");
      for (var i = 0; i < queryStrArr.length; i++) {
        const itemArr = queryStrArr[i].split("=");
        console.log(itemArr);
        if (itemArr[0] === name) {
          return itemArr[1];
        }
      }
    }
    return null;
  };
const info=Mock.mock({
    'toutiao|1-99':1,
    'guanzhu|1-99':1,
    'fensi|1-99':1,
    "huozan|1-99":1
})
const {channels}=Mock.mock({
    'channels|5-10':[
        {
            id:"@increment()",
            name:"@ctitle(2)"
        }
    ]
})
const {recomChannels}=Mock.mock({
    'recomChannels|20-30':[
        {
            id:"@increment()",
            name:"@ctitle(2)"
        }
    ]
})
const {articles}=Mock.mock({
    'articles|20-32':[
        {
            id:"@increment()",
            title:"@ctitle(50)",
            content:"@csentence(30)",
            aut_name:"@cname",
            'comn_count|10-99':1,
            date:'@date(yyyy-MM-dd hh:mm:ss)',
            'pic|0-4':['@image("8*8","#ff0000","#fff","png","坤坤")']
    
        }
    ]
})
console.log(articles)
console.log(channels)
console.log(info)
const sum=1
const school='尚硅谷'
console.log({sum:'sum',school:'school'})
console.log(['sum','school'])
Mock.mock("http://127.0.0.1:3000/app/v1_0/authorizations",'post',(option)=>{
    const datas=JSON.parse(option.body);
    console.log(datas)
    let mobile=datas.mobile
    let code=datas.code
    if(mobile=='15638329257'&&code=='123456')
    return {
        status:200,
        message:'成功',
        results:`{"mobile:"${mobile},"code:"${code}}`
    }
    else
        return{
            status:400,
            message:'失败'
        }
})
Mock.mock("http://127.0.0.1:3000/app/v1_0/user",'get',(option)=>{
   const authorizations=option
   console.log(authorizations)
    return {
        status:200,
        data:{
         ...info
        }
    }
})
Mock.mock("http://127.0.0.1:3000/app/channels",'get',(option)=>{
        return {
            status:200,
            data:channels
        }
})
Mock.mock(/http:\/\/127.0.0.1:3000\/app\/articles/,'get',(option)=>{
   //let channel_id=getQuery(option.url,"channel_id");
   let timestamp=getQuery(option.url,"timestamp");
   console.log(timestamp)
   return {
       msg:"ok",
       data:{
           pretimestamp:Date.now(),
           results:articles,
           page:1,
       }
   }
  

})
Mock.mock('http://127.0.0.1:3000/getRecomChannels','get',(option)=>{

    return {
        msg:'ok',
        results:recomChannels
    }
})
Mock.mock(/http:\/\/127.0.0.1:3000\/app\/v1_0\/suggestion/,'get',(option)=>{
    let p=getQuery(option.url,'p')
    console.log('----------------------------------')
    console.log(p)
    return {
        msg:'ok',
        options:[
            p+'.h',
            p+'.less',
            p+'.java',
            p+'.react'
        ]
    }
})


var length=200
Mock.mock(/http:\/\/127.0.0.1:3000\/app\/v1_0\/lists/,'get',(option)=>{
    const {lists} = Mock.mock({
        "lists|20":[
            {id:'@increment()',
             name:'@csentence(10,20)'}
        ]
    })
    length-=10;
    if(length<=0){
        return {msg:'ok',
                data:[]}
    }
    else
    return {
        msg:'ok',
        data:lists
    }
})
Mock.mock('http://127.0.0.1:3000/history','get',()=>{
    const {histories}=Mock.mock({
        "histories|5-10":[
            {id:'@increment()',
            name:'@csentence(4,8)'}
        ]
    })
    return {
        msg:'ok',
        data:histories
    }
})
Mock.mock(/http:\/\/127.0.0.1:3000\/app\/v1_0\/article/,'get',()=>{
    const {article} = Mock.mock({
        "article":{
            title: '@ctitle(5,10)',
            pubdate: '@date(yyyy-MM-dd hh:mm:ss)',
            content:'<p>前端攻城狮，精通vue,react,node.js.十多年大厂前端开发经验...</p>'+
                    '<img style="width:100%;height:300px" src="https://img01.yzcdn.cn/vant/apple-1.jpg"/>'+
                    '<p>有uniapp移动端开发经验，网站性能提升...</p>'+
                    '<img style="width:100%;height:300px" src="https://img01.yzcdn.cn/vant/apple-2.jpg"/>',
            aut_id:1,
            ch_id:8,
            aut_name:"我的腿不短",
            aut_photo:'@image("8*8","#ff0000","#fff","png","坤坤")',
            is_followed:false,
            attitude:-1,
            is_collected:false,
            recomments:[]
        }
    })
    return {
        code:200,
        msg:'success',
        data:article
    }
})