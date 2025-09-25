import { useEffect, useState } from "react"

import styled from "@emotion/styled"

import FlexWrapper from "@/common/components/FlexWrapper"
import ScrollableDropdown from "@/common/components/ScrollableDropdown"
import Typography from "@/common/components/Typography"
import type Lecture from "@/common/components/interface/Lecture"
import type TimeBlock from "@/common/components/interface/Timeblock"
import type { LectureSummary } from "@/common/components/interface/Timetable"
import type UserProfile from "@/common/components/interface/User"

import CustomTimeTableGrid from "../components/CustomTimeTableGrid"
import Widget from "../components/Widget"

const TimeTableInner = styled(FlexWrapper)`
  flex-grow: 1;
  width: 100%;
`

interface TimeTableSectionProps {
  user: UserProfile
}

const TimeTableSection = ({ user }: TimeTableSectionProps) => {
  const [selected, setSelected] = useState<Lecture | null>(null)
  const [hover, setHover] = useState<Lecture | null>(null)
  const [timeFilter, setTimeFilter] = useState<TimeBlock | null>(null)

  const [selectedOption, setSelectedOption] = useState<number>(0)

  const [lectureSummary, setLectureSummary] = useState<LectureSummary[]>()

  useEffect(() => {
    setLectureSummary(
      user.my_timetable_lectures.map((lecture) => ({
        id: lecture.id,
        course_id: lecture.course,
        title: lecture.title,
        title_en: lecture.title_en,
        professor_name: lecture.professors.map((prof) => prof.name).join(", "),
        professor_name_en: lecture.professors.map((prof) => prof.name_en).join(", "),
        classroom: lecture.classroom,
        classroom_en: lecture.classroom_en,
        timeBlocks: lecture.classtimes.map((time) => ({
          day: time.day,
          timeIndex: time.timeIndex,
          duration: time.duration,
          startTime: time.startTime,
          endTime: time.endTime,
        })),
      })),
    )
  }, [user])

  return (
    <Widget width={856} direction="column" gap={0} padding="30px">
      <TimeTableInner direction="column" align="stretch" gap={16}>
        <FlexWrapper direction="row" justify="space-between" align="center" gap={0}>
          <FlexWrapper direction="row" gap={0}>
            <Typography type="BiggerBold" color="Highlight.default">
              {user.firstName}
              {user.lastName}
            </Typography>
            <Typography type="BiggerBold" color="Text.dark">
              &nbsp;님의 시간표
            </Typography>
          </FlexWrapper>
        </FlexWrapper>
        <CustomTimeTableGrid
          cellWidth={150}
          lectureSummary={lectureSummary || []}
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
