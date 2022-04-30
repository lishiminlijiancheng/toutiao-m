import request from '../utils/request'
const getRecomChannels=()=>{
    return request({url:"getRecomChannels",method:'get'})
}
const getMyChannels=()=>{
    return request({url:'app/channels',method:'get'})
}
export {getRecomChannels,getMyChannels}