import React from "react"

import { useTheme } from "@emotion/react"

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false)
  const theme = useTheme()

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < theme.breakpoints.mobile)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [theme.breakpoints.mobile])

  return isMobile
}

export default useIsMobile
