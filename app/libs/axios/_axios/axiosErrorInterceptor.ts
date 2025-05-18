import { AxiosError, type AxiosResponse, HttpStatusCode } from "axios"

const errorInterceptor = {
  onFulfilled(values: AxiosResponse) {
    return values
  },
  async onRejected(error: AxiosError) {
    switch (error.response?.status) {
      case HttpStatusCode.Unauthorized: {
        // TODO: Handle Application Logic
        return Promise.reject(error)
      }
      case HttpStatusCode.Forbidden: {
        // TODO: Handle Application Logic
        return Promise.reject(error)
      }
      default: {
        return Promise.reject(error)
      }
    }
  },
}

export default errorInterceptor
