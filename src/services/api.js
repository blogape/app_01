import request from '../utils/request.js';

// 获取树形结构
export function getCqssTreeData(){
    return request({
        url:'/lottery/list?lotteryType=1',
        method:'get'
    })
}

// 登录
export function Login(username,password){
    const data={
        username,
        password
    }
    return request({
        url:'/acount/signin',
        method:'post',
        data:data
    })
}

