import axios, { AxiosError } from 'axios'
import environment from '@/util/environment'
import { useStore } from '@/store'

const axiosInstance = axios.create({
  baseURL: environment.API_URL
})

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${environment.API_KEY}`
  return config
})

axiosInstance.interceptors.response.use((response: any) => {
  return response
}, (error: Error | AxiosError) => {
  const { openSideNotification } = useStore.getState()
  if (axios.isAxiosError(error)) {
    switch (error.response?.status) {
      case 401:
        openSideNotification(
          'Unauthorized! Please try to login again',
          error.response.data,
          'error')
        break
      case 403:
        openSideNotification(
          'Forbidden',
          error.response.data,
          'error')
        break
      case 406:
        openSideNotification(
          'Not Acceptable',
          error.response.data,
          'error')
        break
      case 422:
        openSideNotification(
          'Unprocessable Entity',
          error.response.data,
          'error')
        break
      default:
        openSideNotification(
          'Server Error',
          error.message,
          'error')
        break
    }
  } else {
    openSideNotification(
      'Application Error',
      `${error.cause}:${error.message}`,
      'error')
  }
  return Promise.reject(error)
})

export default axiosInstance
