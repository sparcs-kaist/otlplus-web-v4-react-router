import { useEffect, useState } from "react"

import { useTheme } from "@emotion/react"

const useIsMobile = (): boolean => {
  const theme = useTheme()
  const [isMobile, setIsMobile] = useState(window.innerWidth < theme.breakpoints.mobile)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < theme.breakpoints.mobile)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [theme.breakpoints.mobile])

  return isMobile
}

export default useIsMobile
