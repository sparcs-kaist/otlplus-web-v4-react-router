import { useEffect, useState } from "react"

import styled from "@emotion/styled"

import FlexWrapper from "@/common/components/FlexWrapper"
import Typography from "@/common/components/Typography"
import ReviewBlock from "@/common/components/blocks/reviewBlock"
import type ReviewFeed from "@/common/components/interface/ReviewFeed"

import Widget from "../components/Widget"

const UniformWidget = styled(Widget)`
  flex: 1 1 0;
`

interface PopularFeedSectionProps {
  reviews: ReviewFeed[]
  likeReview: (reviewId: number) => void
}

function PopularFeedSection({ reviews, likeReview }: PopularFeedSectionProps) {
  return (
    <UniformWidget direction="column" gap={20} padding="30px">
      <FlexWrapper direction="row" gap={0}>
        <Typography type="BiggerBold" color="Highlight.default">
          사랑받는&nbsp;
        </Typography>
        <Typography type="BiggerBold">전공후기</Typography>
      </FlexWrapper>
      <FlexWrapper direction="column" gap={15}>
        {reviews.map((review, idx) => (
          <ReviewBlock key={idx} review={review} likeReview={likeReview} />
        ))}
      </FlexWrapper>
    </UniformWidget>
  )
}

export default PopularFeedSection
