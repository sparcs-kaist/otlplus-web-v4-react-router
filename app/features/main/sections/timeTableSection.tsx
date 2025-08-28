import { useState } from "react"

import styled from "@emotion/styled"

import FlexWrapper from "@/common/components/FlexWrapper"
import ScrollableDropdown from "@/common/components/ScrollableDropdown"
import Typography from "@/common/components/Typography"
import type Lecture from "@/common/components/interface/Lecture"
import type TimeBlock from "@/common/components/interface/Timeblock"
import type { LectureSummary } from "@/common/components/interface/Timetable"

import CustomTimeTableGrid from "../components/CustomTimeTableGrid"
import Widget from "../components/Widget"

const TimeTableInner = styled(FlexWrapper)`
  flex-grow: 1;
  width: 100%;
`

const DropDownWrapper = styled.div`
  width: 150px;
  height: 36px;
`

const TimeTableSection = ({ lectureSummary }: { lectureSummary: LectureSummary[] }) => {
  const [selected, setSelected] = useState<Lecture | null>(null)
  const [hover, setHover] = useState<Lecture | null>(null)
  const [timeFilter, setTimeFilter] = useState<TimeBlock | null>(null)

  const [selectedOption, setSelectedOption] = useState<number>(0)

  return (
    <Widget width={856} direction="column" gap={0} padding="30px">
      <TimeTableInner direction="column" align="stretch" gap={16}>
        <FlexWrapper direction="row" justify="space-between" align="center" gap={0}>
          <FlexWrapper direction="row" gap={0}>
            <Typography type="BiggerBold" color="Highlight.default">
              강재환
            </Typography>
            <Typography type="BiggerBold" color="Text.dark">
              &nbsp;님의 시간표
            </Typography>
          </FlexWrapper>
          <DropDownWrapper>
            <ScrollableDropdown
              options={["시간표 1", "시간표 2", "시간표 3", "시간표 4"]}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </DropDownWrapper>
        </FlexWrapper>
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
