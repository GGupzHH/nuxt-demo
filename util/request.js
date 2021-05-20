/**
 * axios
*/

import axios from 'axios'

const request = axios.create({
  baseURL: 'https://conduit.productionready.io/api'
})

// request拦截器
request.interceptors.request.use(
  request => {
    return request
  },
  error => {
    return Promise.reject(error)
  }
)

// respone拦截器
request.interceptors.response.use(
  response => {
    const data = response.data
    return data
  },
  error => {
    return {
      status: error.response.status,
      data: error.response.data
    }
  }
)


export default request
