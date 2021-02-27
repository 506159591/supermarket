import axios from 'axios'

export function request (config) {
    //创建axios的实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/w6',
        timeout: 5000
    })
    //配置请求和响应拦截
    instance.interceptors.request.use(config => {
        return config
    }, err => {

    })
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })
    return instance(config)
}

