"use client"

import styled from "@emotion/styled"

import type TimeBlock from "@/common/components/interface/Timeblock"

import SearchArea from "../components/SearchArea"

const SearchSectionInner = styled.div`
  width: 645px;
  border: 2px solid ${({ theme }) => theme.colors.Highlight.default};
  border-radius: 32px;
  background: ${({ theme }) => theme.colors.Background.Section.default};
  display: flex;
  align-items: flex-start;
  padding: 12px 24px 12px 24px;
  transition: all 0.3s ease-in-out;
  gap: 24px;
`

const FullWidthSearchArea = styled(SearchArea)`
  flex: 1 1 100%;
  width: 100%;
  display: flex;
  transition: all 0.3s ease-in-out;
`

interface SearchSectionProps {
  timeFilter: TimeBlock | null
  setTimeFilter: React.Dispatch<React.SetStateAction<TimeBlock | null>>
}

const SearchSection: React.FC<SearchSectionProps> = ({ timeFilter, setTimeFilter }) => {
  return (
    <SearchSectionInner>
      <FullWidthSearchArea timeFilter={timeFilter} setTimeFilter={setTimeFilter} />
    </SearchSectionInner>
  )
}

export default SearchSection
