import React from "react"

import useIsMobile from "@/common/hooks/useIsMobile"

import { ExampleDesktopHeader } from "./_variants/_ExampleDesktopHeader"
import { ExampleMobileHeader } from "./_variants/_ExampleMobileHeader"

const ExampleHeader: React.FC = () => {
  const isMobile = useIsMobile()

  return isMobile ? <ExampleMobileHeader /> : <ExampleDesktopHeader />
}

export default ExampleHeader
