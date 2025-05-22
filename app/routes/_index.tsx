import { useEffect, useState } from "react"

import styled from "@emotion/styled"

import FlexWrapper from "@/common/components/FlexWrapper"
import type TimeBlock from "@/common/components/interface/Timeblock"
import SearchSection from "@/features/main/sections/searchSection"

import type { Route } from "./+types/_index"

export function meta({}: Route.MetaArgs) {
  return [{ title: "Main" }, { name: "description", content: "Welcome to React Router!" }]
}

const MainWrapper = styled(FlexWrapper)`
  margin-top: 60px;
`

const SearchSectionWrapper = styled(FlexWrapper)`
  width: 100%;
  height: 68px;
  z-index: 2;
`

const WidgetSectionWrapper = styled(FlexWrapper)``

export default function Home() {
  const [timeFilter, setTimeFilter] = useState<TimeBlock | null>(null)

  return (
    <>
      <MainWrapper direction="column" align="center" gap={60}>
        <SearchSectionWrapper direction="row" justify="center" gap={0}>
          <SearchSection timeFilter={timeFilter} setTimeFilter={setTimeFilter} />
        </SearchSectionWrapper>
        <WidgetSectionWrapper
          direction="row"
          justify="center"
          gap={0}
        ></WidgetSectionWrapper>
      </MainWrapper>
    </>
  )
}
