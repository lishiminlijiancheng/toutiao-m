import request from '../utils/request'
 const history_search = ()=>{
    return request({
        url:'history',
        method:'get'
    })
}
export default history_search