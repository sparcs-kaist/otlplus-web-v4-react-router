import { AxiosError, type InternalAxiosRequestConfig } from "axios"
import log from "loglevel"

import { clientEnv } from "@/env"
import logger from "@/utils/logger"

export const BASE_URL = clientEnv.VITE_APP_API_URL ?? ""

const mockInterceptor = {
  async onFulfilled(config: InternalAxiosRequestConfig) {
    const responseConfig = { ...config }
    try {
      const parsedUrl = new URL(config.url ?? "")

      if (parsedUrl.host != null) {
        return responseConfig
      }
    } catch (error) {
      logger.error("Mock interceptor error", error)
    }

    if (clientEnv.VITE_APP_API_MOCK_MODE) {
      const method = config?.method
      const url = config?.url
      const requestBody = config?.data || {}
      const queryParams = config?.params || {}
      log.debug(config)
      log.debug(
        `${method} ${url}\nbody: ${JSON.stringify(
          requestBody,
        )}\nqueryParams: ${JSON.stringify(queryParams)}`,
      )
      return responseConfig
    }

    responseConfig.baseURL = BASE_URL

    return responseConfig
  },
  onRejected(error: AxiosError) {
    return Promise.reject(error)
  },
}

export default mockInterceptor
