import { useEffect, useState } from "react"

import styled from "@emotion/styled"
import { Trans } from "react-i18next"

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
        <Trans
          i18nKey="main.popularFeed.title"
          components={{
            bold: (
              <Typography
                type="BiggerBold"
                color="Highlight.default"
                children={undefined}
              />
            ),
            space: <>&nbsp;</>,
            normal: <Typography type="BiggerBold" children={undefined} />,
          }}
        />
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
