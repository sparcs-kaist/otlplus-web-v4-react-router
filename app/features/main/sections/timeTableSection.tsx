import { useState } from "react"

import styled from "@emotion/styled"

import type Lecture from "@/common/components/interface/Lecture"
import type TimeBlock from "@/common/components/interface/Timeblock"
import type { LectureSummary } from "@/common/components/interface/Timetable"

import CustomTimeTableGrid from "../components/CustomTimeTableGrid"

const TimeTableWrapper = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const TimeTableHeader = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
`

const TimeTableTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.Bigger.fontSize}px;
`

const TimeTableSection = ({ lectureSummary }: { lectureSummary: LectureSummary[] }) => {
  const [selected, setSelected] = useState<Lecture | null>(null)
  const [hover, setHover] = useState<Lecture | null>(null)
  const [timeFilter, setTimeFilter] = useState<TimeBlock | null>(null)

  return (
    <TimeTableWrapper>
      <TimeTableHeader>
        <TimeTableTitle>강재환님의 시간표</TimeTableTitle>
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
    </TimeTableWrapper>
  )
}

export default TimeTableSection
