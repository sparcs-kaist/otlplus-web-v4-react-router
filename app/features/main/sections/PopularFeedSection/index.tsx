import styled from "@emotion/styled"
import { Trans } from "react-i18next"

import ReviewBlock from "@/common/components/blocks/ReviewBlock"
import type ReviewFeed from "@/common/interface/ReviewFeed"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

import Widget from "../../components/Widget"

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
