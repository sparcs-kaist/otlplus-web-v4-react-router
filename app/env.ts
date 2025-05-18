import z from "zod"

import stringToBoolean from "@/utils/stringToBoolean"

const publicEnvSchema = z.object({
  VITE_APP_LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]),
  VITE_APP_API_URL: z.string().url(),
  VITE_APP_API_MOCK_MODE: z.preprocess(
    (value) => stringToBoolean(value as string),
    z.boolean(),
  ),
})

export const clientEnv = publicEnvSchema.parse(import.meta.env)

console.log("[Current Environment]", clientEnv)
