import exampleReviews from "@/api/example/Reviews"
import { type TabType } from "@/common/interface/ReviewWriteTabs"
import FlexWrapper from "@/common/primitives/FlexWrapper"

import LikedReviewsSection from "./LikedReviewsSubSection"
import PopularFeedSubSection from "./PopularFeedSubSection"
import ReviewFeedSubSection from "./ReviewFeedSubSection"

interface WriteReviewsSubSectionType {
  tab: TabType
}

function WriteReviewsSubSection({ tab }: WriteReviewsSubSectionType) {
  function likeReview(reviewId: number) {
    alert("like review " + reviewId)
  }

  return (
    <FlexWrapper direction="column" align="stretch" gap={12} padding="12px">
      {(() => {
        switch (tab) {
          case "write":
            return <div>Preview Section (미구현)</div>
          case "popularFeed":
            return (
              <PopularFeedSubSection reviews={exampleReviews} likeReview={likeReview} />
            )
          case "reviewFeed":
            return (
              <ReviewFeedSubSection reviews={exampleReviews} likeReview={likeReview} />
            )
          case "liked":
            return (
              <LikedReviewsSection reviews={exampleReviews} likeReview={likeReview} />
            )
          default:
            return null
        }
      })()}
    </FlexWrapper>
  )
}

export default WriteReviewsSubSection
