import Mock from "mockjs";
const info=Mock.mock({
    'toutiao|1-99':1,
    'guanzhu|1-99':1,
    'fensi|1-99':1,
    "huozan|1-99":1
})
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