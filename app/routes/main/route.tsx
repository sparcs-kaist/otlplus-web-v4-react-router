import { useState } from "react"

import styled from "@emotion/styled"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"
import StarIcon from "@mui/icons-material/Star"

import Button from "@/common/components/Button"
import FlexWrapper from "@/common/components/FlexWrapper"
import type TimeBlock from "@/common/components/interface/Timeblock"
import SearchArea from "@/common/components/search/SearchArea"
import TextInput from "@/common/components/search/TextInput"
import SearchSection from "@/features/main/sections/searchSection"

import type { Route } from "./+types/route"

export function meta({}: Route.MetaArgs) {
  return [{ title: "Main" }, { name: "description", content: "Welcome to React Router!" }]
}

const MainWrapper = styled(FlexWrapper)`
  margin-top: 24px;
`

const SearchSectionWrapper = styled(FlexWrapper)`
  position: absolute;
  z-index: 2;
`

const WidgetSectionWrapper = styled(FlexWrapper)`
  top: 84px;
`

export default function Page() {
  const [timeFilter, setTimeFilter] = useState<TimeBlock | null>(null)

  return (
    <>
      <MainWrapper direction="column" align="center" gap={60}>
        <SearchSectionWrapper direction="row" justify="center" gap={0}>
          <SearchSection />
        </SearchSectionWrapper>
        <WidgetSectionWrapper direction="row" justify="center" gap={0}>
          <SearchSection />
        </WidgetSectionWrapper>
      </MainWrapper>
    </>
  )
}
