import { useEffect, useState } from "react"

import styled from "@emotion/styled"

import FlexWrapper from "@/common/components/FlexWrapper"
import type TimeBlock from "@/common/components/interface/Timeblock"
import type { LectureSummary } from "@/common/components/interface/Timetable"
import Footer from "@/common/guideline/components/Footer"
import exampleReviewFeed from "@/dummy/reviewFeed"
import exampleScheduleFeed from "@/dummy/scheduleFeed"
import User from "@/dummy/user"
import AdFeedSection from "@/features/main/sections/adFeedSection"
import PopularFeedSection from "@/features/main/sections/popularFeedSection"
import ReviewFeedSection from "@/features/main/sections/reviewFeedSection"
import ReviewSection from "@/features/main/sections/reviewSection"
import ScheduleFeedSection from "@/features/main/sections/scheduleFeedSection"
import ScheduleSection from "@/features/main/sections/scheduleSection"
import SearchSection from "@/features/main/sections/searchSection"
import TimeTableSection from "@/features/main/sections/timeTableSection"

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
                <TimeTableSection user={User} />
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
