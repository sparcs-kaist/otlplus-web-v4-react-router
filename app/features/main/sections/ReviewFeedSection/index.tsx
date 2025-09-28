import styled from "@emotion/styled"
import { Trans } from "react-i18next"

import type { GETReviewsResponse } from "@/api/reviews"
import ReviewBlock from "@/common/components/blocks/ReviewBlock"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

import Widget from "../../components/Widget"

const UniformWidget = styled(Widget)`
  flex: 1 1 0;
`

interface ReviewFeedSectionProps {
  reviews: GETReviewsResponse
  likeReview: (reviewId: number) => void
}

function ReviewFeedSection({ reviews, likeReview }: ReviewFeedSectionProps) {
  return (
    <UniformWidget direction="column" gap={20} padding="30px">
      <FlexWrapper direction="row" gap={0}>
        <Trans
          i18nKey="main.reviewFeed.title"
          components={{
            bold: (
              <Typography
                type="BiggerBold"
                color="Highlight.default"
                children={undefined}
              />
            ),
            normal: <Typography type="BiggerBold" children={undefined} />,
            space: <>&nbsp;</>,
          }}
        />
      </FlexWrapper>
      <FlexWrapper direction="column" gap={15}>
        {reviews.reviews.map((review, idx) => (
          <ReviewBlock key={idx} review={review} likeReview={likeReview} />
        ))}
      </FlexWrapper>
    </UniformWidget>
  )
}

export default ReviewFeedSection
