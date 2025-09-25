import { useEffect, useState } from "react"

import styled from "@emotion/styled"

import FlexWrapper from "@/common/components/FlexWrapper"
import { type LectureSimpleBlock } from "@/common/components/interface/LectureSimpleBlock"
import { type TakenLectures } from "@/common/components/interface/takenLectures"
import UserLectures from "@/dummy/userLectures"
import ReviewLeftSection from "@/features/write-reviews/sections/reviewsLeftSection"

const MainWrapper = styled(FlexWrapper)`
  margin-top: 60px;
`

const MainWrapperInner = styled(FlexWrapper)`
  width: 1298px;
`

export default function WriteReviews() {
  const [takenLectures, setTakenLectures] = useState<TakenLectures[]>([])

  useEffect(() => {
    const results = []

    const wraps: { [key: string]: LectureSimpleBlock[] } = {}

    for (let lecture of UserLectures) {
      const { year, semester, title, code } = lecture

      if (!wraps[`${year} ${semester}`]) wraps[`${year} ${semester}`] = []

      wraps[`${year} ${semester}`].push({
        name: title,
        code,
      })
    }

    for (let year_semester in wraps) {
      const wrap = wraps[year_semester]

      const [year, semester] = year_semester.split(" ")

      results.push({
        year,
        semester,
        lectures: wrap,
      })
    }
  }, [UserLectures])

  return (
    <>
      <MainWrapper direction="column" align="center" gap={240}>
        <MainWrapperInner direction="column" align="center" gap={60}>
          <ReviewLeftSection reviews={takenLectures} />
        </MainWrapperInner>
      </MainWrapper>
    </>
  )
}
