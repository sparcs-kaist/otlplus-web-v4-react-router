import { useEffect, useState } from "react"

export type OS = "ios" | "android" | "PC"

const getOS = (): OS => {
  if (!(navigator.maxTouchPoints && navigator.maxTouchPoints > 2)) return "PC"
  const userAgent = window.navigator.userAgent.toLowerCase()
  if (/android/.test(userAgent)) return "android"
  else return "ios"
}

export const useDetectOS = (): OS => {
  const [os, setOs] = useState<OS>("PC")

  useEffect(() => {
    setOs(getOS())
  }, [])

  return os
}
