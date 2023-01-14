import request from '../utils/request1'
export const uploadFile=(data)=>{
    return request({url:'upload',
        method:'post',
        data})
}