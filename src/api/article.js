import request from '../utils/request'
export const getArticles=(params)=>{
  return  request({
        method:'get',
        url:'app/articles',
        params
    })
}

export const getLists = (params) => {
  return request({
    method: 'get',
    url:'app/v1_0/lists',
    params
  })
}

export const getArticle = (params) => {
  return request({
    method: 'get',
    url:'app/v1_0/article',
    params
  })
}

