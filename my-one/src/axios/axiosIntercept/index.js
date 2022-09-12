import axios from 'axios';
import { Message } from "element-ui";
axios.defaults.baseURL = '/api';

// 请求响应
axios.interceptors.request.use(
    config => {
        config.headers["Authorization"] = 'Bearer ' + localStorage.token || ''; //Bearer一定要留一个空格
        return config;
    },
    err => {
        Promise.reject(err);
    }
);
// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登录页
axios.interceptors.response.use(
    response => {
        if (response.status && response.status == 200) {
            if (response.data.code == 200) {
                return response;
                // return response.data;
            } else if (response.data.code === 401) {
                Message.error({ message: response.data.errs[0] });
            } else if (response.data.code === 402) {
                Message.error({ message: response.data.errs[0] });
            } else {
                Message.error(response.data.info);
                return Promise.reject(response.data);
            }
        } else {
            // console.log(response)

        }
    },

    error => {
        // if (error && error.stack.indexOf('timeout') > -1) {
        //     Message.error('请求超时')
        // } else if (error && error.stack.indexOf('400') > -1) {
        //     Message.error('请求错误');
        // } else if (error && error.stack.indexOf('401') > -1) {
        //     Message.error('未授权，请登录');
        // } else if (error && error.stack.indexOf('403') > -1) {
        //     Message.error('拒绝访问');
        // } else if (error && error.stack.indexOf('404') > -1) {
        //     Message.error(`请求地址出错: ${error.response.config.url}`);
        // } else if (error && error.stack.indexOf('408') > -1) {
        //     Message.error('请求超时');
        // } else if (error && error.stack.indexOf('500') > -1) {
        //     Message.error('服务器内部错误');
        // } else if (error && error.stack.indexOf('501') > -1) {
        //     Message.error('服务未实现');
        // } else if (error && error.stack.indexOf('502') > -1) {
        //     Message.error('网关错误');
        // } else if (error && error.stack.indexOf('503') > -1) {
        //     Message.error('服务不可用');
        // } else if (error && error.stack.indexOf('504') > -1) {
        //     Message.error('网关超时');
        // } else if (error && error.stack.indexOf('505') > -1) {
        //     Message.error('HTTP版本不受支持');
        // }
        return Promise.reject(error.data);
    }
);

// get方法
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err)
        })
    });
}


//post方法
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            })
    });
}