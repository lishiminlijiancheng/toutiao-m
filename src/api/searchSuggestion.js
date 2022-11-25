import request from '../utils/request'
export const getSearchSuggestions=(params)=>{
    return request({
        method:'get',
        url:'app/v1_0/suggestion',
        params
    })
}