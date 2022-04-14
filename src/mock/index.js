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