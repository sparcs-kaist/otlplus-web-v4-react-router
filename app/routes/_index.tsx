import { useEffect, useState } from "react"

import styled from "@emotion/styled"

import DividedLayoutRight from "@/common/components/DividedLayoutRight"
import FlexWrapper from "@/common/components/FlexWrapper"
import type TimeBlock from "@/common/components/interface/Timeblock"
import type { LectureSummary } from "@/common/components/interface/Timetable"
import ReviewSection from "@/features/main/sections/reviewSection"
import ScheduleSection from "@/features/main/sections/scheduleSection"
import SearchSection from "@/features/main/sections/searchSection"
import TimeTableSection from "@/features/main/sections/timeTableSection"

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

const WidgetSectionWrapper = styled(FlexWrapper)`
  display: flex;
  gap: 24px;
`

const exampleLectureSummary: LectureSummary[] = [
  {
    id: 3678,
    course_id: 3678,
    title: "화학 및 생물 제품디자인",
    title_en: "Chemical and Biological Product Design",
    professor_name: "장용근",
    professor_name_en: "",
    classroom: "(E2) 산업경영학동 1225",
    classroom_en: "B102",
    timeBlocks: [
      {
        day: 1,
        timeIndex: 0,
        duration: 3,
        startTime: "",
        endTime: "",
      },
      {
        day: 3,
        timeIndex: 4,
        duration: 3,
        startTime: "",
        endTime: "",
      },
    ],
  },
  {
    id: 295,
    course_id: 295,
    title: "공정 및 제품 디자인",
    title_en: "Techniques of Process and Product Design",
    professor_name: "이재우, 장용근",
    professor_name_en: "",
    classroom: "(W1-3) 응용공학동 (2501-1호) 세미나실",
    classroom_en: "(W1-3) Applied Enginnering B/D (2501-1) Seminar Room",
    timeBlocks: [
      {
        day: 1,
        timeIndex: 6,
        duration: 5,
        startTime: "",
        endTime: "",
      },
      {
        day: 3,
        timeIndex: 9,
        duration: 5,
        startTime: "",
        endTime: "",
      },
    ], // classtimes가 비어있음
  },
  {
    id: 1599,
    course_id: 1599,
    title: "생명화학공학 디자인 프로젝트",
    title_en: "Chemical and Biomolecular Engineering Capstone Design Project",
    professor_name: "리섕",
    professor_name_en: "",
    classroom: "(W1-1) 응용공학동 2122",
    classroom_en: "(W1-1) Applied Enginnering B/D 2122",
    timeBlocks: [
      {
        day: 5,
        timeIndex: 6,
        duration: 5,
        startTime: "",
        endTime: "",
      },
      {
        day: 5,
        timeIndex: 11,
        duration: 5,
        startTime: "",
        endTime: "",
      },
    ],
  },
]

export default function Home() {
  const [timeFilter, setTimeFilter] = useState<TimeBlock | null>(null)

  return (
    <>
      <MainWrapper direction="column" align="center" gap={60}>
        <SearchSectionWrapper direction="row" justify="center" gap={0}>
          <SearchSection timeFilter={timeFilter} setTimeFilter={setTimeFilter} />
        </SearchSectionWrapper>
        <WidgetSectionWrapper direction="row" justify="center" gap={0}>
          <DividedLayoutRight>
            <FlexWrapper direction="column" gap={24}>
              <TimeTableSection lectureSummary={exampleLectureSummary} />
            </FlexWrapper>
            <FlexWrapper direction="column" gap={24}>
              <ScheduleSection
                content="2025 봄 수강신청 마감"
                dueDate={new Date("2025-04-11")}
              />
              <ReviewSection
                content="2025 봄 수강신청 마감"
                dueDate={new Date("2025-04-11")}
              />
            </FlexWrapper>
          </DividedLayoutRight>
        </WidgetSectionWrapper>
      </MainWrapper>
    </>
  )
}
