import FlexWrapper from "@/common/components/FlexWrapper"
import Typography from "@/common/components/Typography"
import ReviewBlock from "@/common/components/blocks/reviewBlock"
import type ReviewFeed from "@/common/components/interface/ReviewFeed"

interface LikedReviewsSectionProps {
  reviews: ReviewFeed[]
  likeReview: (reviewId: number) => void
}

function LikedReviewsSection({ reviews, likeReview }: LikedReviewsSectionProps) {
  return (
    <FlexWrapper direction="column" align="stretch" gap={12}>
      <FlexWrapper direction="column" align="center" gap={12}>
        <Typography type="NormalBold">좋아요한 과목 후기</Typography>
      </FlexWrapper>
      <FlexWrapper direction="column" align="stretch" gap={12}>
        {reviews.map((review, idx) => (
          <ReviewBlock key={idx} review={review} likeReview={likeReview} />
        ))}
      </FlexWrapper>
    </FlexWrapper>
  )
}

export default LikedReviewsSection
