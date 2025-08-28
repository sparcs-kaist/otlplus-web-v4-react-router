import { useEffect, useState } from "react"

import styled from "@emotion/styled"

import FlexWrapper from "@/common/components/FlexWrapper"
import type TimeBlock from "@/common/components/interface/Timeblock"
import type { LectureSummary } from "@/common/components/interface/Timetable"
import Footer from "@/common/guideline/components/Footer"
import AdFeedSection from "@/features/main/sections/adFeedSection"
import PopularFeedSection from "@/features/main/sections/popularFeedSection"
import ReviewFeedSection from "@/features/main/sections/reviewFeedSection"
import ReviewSection from "@/features/main/sections/reviewSection"
import ScheduleFeedSection from "@/features/main/sections/scheduleFeedSection"
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

const MainWrapperInner = styled(FlexWrapper)`
  width: 1298px;
`

const SearchSectionWrapper = styled(FlexWrapper)`
  width: 100%;
  height: 68px;
  z-index: 2;
`

const StretechedFlexWrapper = styled(FlexWrapper)`
  flex: 1 1 auto;
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

const exampleReviewFeed = [
  {
    reviewId: 3678,
    lectureName: "화학 및 생물 제품디자인",
    professorName: "장용근",
    year: 2025,
    semester: 1,
    content:
      "이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다.",
    like: 5,
    isDeleted: false,
    grade: 1,
    load: 2,
    speech: 1,
    userspecificIsLiked: false,
  },
  {
    reviewId: 3678,
    lectureName: "화학 및 생물 제품디자인",
    professorName: "장용근",
    year: 2025,
    semester: 1,
    content:
      "이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다.",
    like: 5,
    isDeleted: false,
    grade: 4,
    load: 1,
    speech: 3,
    userspecificIsLiked: true,
  },
  {
    reviewId: 3678,
    lectureName: "화학 및 생물 제품디자인",
    professorName: "장용근",
    year: 2025,
    semester: 1,
    content:
      "이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다.",
    like: 5,
    isDeleted: false,
    grade: 1,
    load: 1,
    speech: 1,
    userspecificIsLiked: false,
  },
  {
    reviewId: 3678,
    lectureName: "화학 및 생물 제품디자인",
    professorName: "장용근",
    year: 2025,
    semester: 1,
    content:
      "이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다.",
    like: 5,
    isDeleted: false,
    grade: 1,
    load: 1,
    speech: 1,
    userspecificIsLiked: true,
  },
]

const exampleScheduleFeed = [
  {
    from: new Date("2024-12-16"),
    to: new Date("2024-12-20"),
    title: "2024 겨울 기말고사",
  },
  {
    from: new Date("2025-01-20"),
    to: new Date("2025-01-24"),
    title: "2025 겨울 계절학기",
  },
]

export default function Home() {
  const [timeFilter, setTimeFilter] = useState<TimeBlock | null>(null)

  function likeReview(reviewId: number) {
    alert("like review " + reviewId)
  }

  return (
    <>
      <MainWrapper direction="column" align="center" gap={240}>
        <MainWrapperInner direction="column" align="center" gap={60}>
          <SearchSectionWrapper direction="row" justify="center" gap={0}>
            <SearchSection timeFilter={timeFilter} setTimeFilter={setTimeFilter} />
          </SearchSectionWrapper>
          <FlexWrapper direction="column" justify="center" gap={24}>
            <FlexWrapper direction="row" align="stretch" gap={24}>
              <FlexWrapper direction="column" align="stretch" gap={0}>
                <TimeTableSection lectureSummary={exampleLectureSummary} />
              </FlexWrapper>
              <FlexWrapper direction="column" align="stretch" gap={24}>
                <FlexWrapper direction="column" align="stretch" gap={24}>
                  <ScheduleSection
                    content="2025 봄 수강신청 마감"
                    dueDate={new Date("2025-04-11")}
                  />
                  <ReviewSection lectureId={3678} lectureName="이산구조" />
                </FlexWrapper>
                <StretechedFlexWrapper direction="column" align="stretch" gap={24}>
                  <AdFeedSection src="/ad.png" />
                  <AdFeedSection src="/ad.png" />
                </StretechedFlexWrapper>
              </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper direction="row" align="stretch" gap={24}>
              <ReviewFeedSection reviews={exampleReviewFeed} likeReview={likeReview} />
              <PopularFeedSection reviews={exampleReviewFeed} likeReview={likeReview} />
              <ScheduleFeedSection schedules={exampleScheduleFeed} />
            </FlexWrapper>
          </FlexWrapper>
        </MainWrapperInner>
        <Footer />
      </MainWrapper>
    </>
  )
}
