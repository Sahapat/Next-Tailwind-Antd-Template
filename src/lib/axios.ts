import { message } from 'antd'
import axios, { AxiosRequestConfig } from 'axios'

const axiosInstance = axios.create({
  baseURL: "url"
})

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers = {
    ...config.headers,
    'Authorization': `Bearer token`,
  }
  return config
})

axiosInstance.interceptors.response.use((response: any) => {
  return response
}, (error: any) => {
  switch (error?.response?.status) {
    case 401:
      message.error('Unauthorized! Please try to login again')
      break
    case 403:
      message.error('Forbidden')
      break
    case 406:
      message.error('Not Acceptable')
      break
    case 422:
      message.error('Unprocessable Entity')
      break
    default:
      message.error(error.message)
      break
  }
  return Promise.reject(error)
})

export default axiosInstance
