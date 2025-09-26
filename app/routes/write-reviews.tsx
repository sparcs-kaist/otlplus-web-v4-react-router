import { useEffect, useState } from "react"

import styled from "@emotion/styled"

import FlexWrapper from "@/common/components/FlexWrapper"
import { type LectureSimpleBlock } from "@/common/components/interface/LectureSimpleBlock"
import { type TakenLectures } from "@/common/components/interface/takenLectures"
import UserLectures from "@/dummy/userLectures"
import ReviewLeftSection from "@/features/write-reviews/sections/reviewLeftSection"
import ReviewRightSection from "@/features/write-reviews/sections/reviewRightSection"

const WriteReviewWrapper = styled(FlexWrapper)`
  flex: 1 0 0;
  min-height: 0;
`

const WriteReviewWrapperInner = styled(FlexWrapper)`
  flex: 1 0 0;
  overflow: auto;
`

export default function WriteReviews() {
  const [takenLectures, setTakenLectures] = useState<TakenLectures[]>([])

  // 이 로직 필요없음. API에서 이 형식대로 받아올 예정.
  // 혹시 API에서 안해주면 여기서 처리
  /*
    {
      year: number;
      semester: number;
      lectures: {
        name: string;
        code: string;
      }[]
    }[]
  */
  useEffect(() => {
    const results: TakenLectures[] = []

    const wraps: { [key: number]: LectureSimpleBlock[] } = {}

    for (let lecture of UserLectures) {
      const { year, semester, title, code } = lecture

      if (!wraps[year * 10 + semester]) wraps[year * 10 + semester] = []

      wraps[year * 10 + semester].push({
        name: title,
        code,
      })
    }

    for (let year_semester in wraps) {
      const year_semester_num = Number(year_semester)
      const wrap = wraps[year_semester_num]

      const year: number = Math.floor(year_semester_num / 10)
      const semester: number = year_semester_num % 10

      results.push({
        year,
        semester,
        lectures: wrap,
      })
    }

    setTakenLectures(results)
  }, [UserLectures])

  return (
    <>
      <WriteReviewWrapper direction="column" align="center" justify="stretch" gap={0}>
        <WriteReviewWrapperInner
          direction="row"
          align="stretch"
          justify="center"
          gap={12}
          padding="0px 0px 15px 0px"
        >
          <ReviewLeftSection lecturesWraps={takenLectures} />
          <ReviewRightSection />
        </WriteReviewWrapperInner>
      </WriteReviewWrapper>
    </>
  )
}
