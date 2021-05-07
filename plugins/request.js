import axios from 'axios'

export const app = axios.create({
  baseURL: '',
  timeout: 50000
})

// 利用插件的方式 插件注入的时候回可以获取参数
export default (a) => {
  // console.log(a)
  app.interceptors.request.use(function (config) {
    return config
  }, function (error) {
    return Promise.reject(error)
  })
}
