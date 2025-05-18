import logger from "loglevel"

import { clientEnv } from "@/env"

const initialize = () => {
  switch (clientEnv.VITE_APP_LOG_LEVEL) {
    case "error":
      return logger.setLevel(logger.levels.ERROR)
    case "warn":
      return logger.setLevel(logger.levels.WARN)
    case "info":
      return logger.setLevel(logger.levels.INFO)
    case "debug":
    default:
      return logger.setLevel(logger.levels.DEBUG)
  }
}

initialize()

export default logger
