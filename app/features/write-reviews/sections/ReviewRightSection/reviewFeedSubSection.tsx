import { useState } from "react"

import styled from "@emotion/styled"

import type { GETReviewsResponse } from "@/api/reviews"
import ScrollableDropdown from "@/common/components/ScrollableDropdown"
import ReviewBlock from "@/common/components/blocks/ReviewBlock"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

const DropDownWrapper = styled(FlexWrapper)`
  flex: 1 0 1;
  width: 225px;
`

interface ReviewFeedSubSectionProps {
  reviews: GETReviewsResponse
  likeReview: (reviewId: number) => void
}

function ReviewFeedSubSection({ reviews, likeReview }: ReviewFeedSubSectionProps) {
  const [time, setTime] = useState(0)

  return (
    <FlexWrapper direction="column" align="stretch" gap={12}>
      <FlexWrapper direction="row" align="center" gap={8}>
        <Typography type="NormalBold">년도</Typography>
        <DropDownWrapper direction="row" gap={0}>
          <ScrollableDropdown
            options={["2023", "2022", "2021", "2020", "2019", "2018", "2017"]}
            selectedOption={time}
            setSelectedOption={setTime}
          />
        </DropDownWrapper>
      </FlexWrapper>
      <FlexWrapper direction="column" align="center" gap={12}>
        <Typography type="NormalBold">명예의 전당 - 년도 학기</Typography>
        <FlexWrapper direction="column" align="center" gap={0}>
          <Typography type="Bigger">9988</Typography>
          <Typography type="Smaller">전체 후기</Typography>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper direction="column" align="stretch" gap={12}>
        {reviews.reviews.map((review, idx) => (
          <ReviewBlock key={idx} review={review} likeReview={likeReview} />
        ))}
      </FlexWrapper>
    </FlexWrapper>
  )
}

export default ReviewFeedSubSection
