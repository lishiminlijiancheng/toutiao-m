import request from '../utils/request'
export const login=data=>{
  return request({url:'app/v1_0/authorizations',method:'post',data})
}
/**
 * 获取用户自己的信息
 */
export const getUserInfo=()=>{
  return request({
    method:'get',
    url:'app/v1_0/user',
  })
}
export const getChannels=()=>{
  return request({
    method:'get',
    url:'app/channels'
  })
}