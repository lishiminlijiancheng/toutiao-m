import request from '../utils/request'
export const getArticles=(params)=>{
  return  request({
        method:'get',
        url:'app/articles',
        params
    })
}