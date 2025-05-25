import { useState } from "react"

import styled from "@emotion/styled"

import ScrollableDropdown from "@/common/components/ScrollableDropdown"
import type Lecture from "@/common/components/interface/Lecture"
import type TimeBlock from "@/common/components/interface/Timeblock"
import type { LectureSummary } from "@/common/components/interface/Timetable"

import CustomTimeTableGrid from "../components/CustomTimeTableGrid"
import Widget from "../components/Widget"

const TimeTableInner = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const TimeTableHeader = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TimeTableTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.Bigger.fontSize}px;
`

const DropDownWrapper = styled.div`
  width: 150px;
  height: 36px;
`

const UserName = styled.span`
  color: ${({ theme }) => theme.colors.Highlight.default};
`

const TimeTableSection = ({ lectureSummary }: { lectureSummary: LectureSummary[] }) => {
  const [selected, setSelected] = useState<Lecture | null>(null)
  const [hover, setHover] = useState<Lecture | null>(null)
  const [timeFilter, setTimeFilter] = useState<TimeBlock | null>(null)

  const [selectedOption, setSelectedOption] = useState<number>(0)

  return (
    <Widget>
      <TimeTableInner>
        <TimeTableHeader>
          <TimeTableTitle>
            <UserName>강재환</UserName> 님의 시간표
          </TimeTableTitle>
          <DropDownWrapper>
            <ScrollableDropdown
              options={["시간표 1", "시간표 2", "시간표 3", "시간표 4"]}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </DropDownWrapper>
        </TimeTableHeader>
        <CustomTimeTableGrid
          cellWidth={150}
          lectureSummary={lectureSummary}
          setTimeFilter={setTimeFilter}
          hover={hover}
          setHover={setHover}
          selected={selected}
          setSelected={setSelected}
        />
      </TimeTableInner>
    </Widget>
  )
}

export default TimeTableSection
