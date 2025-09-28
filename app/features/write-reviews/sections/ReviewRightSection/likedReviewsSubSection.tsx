import type { GETReviewsResponse } from "@/api/reviews"
import ReviewBlock from "@/common/components/blocks/ReviewBlock"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

interface LikedReviewsSectionProps {
  reviews: GETReviewsResponse
  likeReview: (reviewId: number) => void
}

function LikedReviewsSection({ reviews, likeReview }: LikedReviewsSectionProps) {
  return (
    <FlexWrapper direction="column" align="stretch" gap={12}>
      <FlexWrapper direction="column" align="center" gap={12}>
        <Typography type="NormalBold">좋아요한 과목 후기</Typography>
      </FlexWrapper>
      <FlexWrapper direction="column" align="stretch" gap={12}>
        {reviews.reviews.map((review, idx) => (
          <ReviewBlock key={idx} review={review} likeReview={likeReview} />
        ))}
      </FlexWrapper>
    </FlexWrapper>
  )
}

export default LikedReviewsSection
