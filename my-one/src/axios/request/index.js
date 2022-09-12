import { get, post } from '../axiosIntercept/index.js';
let BASE_URL = window.configObj.apiUrl
export const login = params => {
    let url = `${BASE_URL}/login`;
    return post(url, params);
}
// 注册
export const register = params => {
    let url = `${BASE_URL}/login`;
    return get(url, params);
}
// 个人信息
export const userInfoPost = params => {
    let url = `${BASE_URL}/home/userinfo`;
    console.log(url, params);
    return post(url, params);
}
//示例
export const userInfoGet = params => {
    let url = `${BASE_URL}/api`;
    console.log(url, params);
    return get(url, params);
}