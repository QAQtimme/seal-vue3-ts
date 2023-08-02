import axios from "axios";

// 创建axios实例
const instance = axios.create({
    baseURL: "http://pcapi-xiaotuxian-front.itheima.net/.",
    timeout: 5000,
});

// 请求拦截
instance.interceptors.request.use((config)=>{
    return config
},(err)=>{
    return Promise.reject(err)
})

// 响应拦截
instance.interceptors.response.use((response)=>{
    return response.data
},(err)=>{
    return Promise.reject(err)
})

export default instance