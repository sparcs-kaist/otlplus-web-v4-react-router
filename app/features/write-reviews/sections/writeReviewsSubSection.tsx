import FlexWrapper from "@/common/components/FlexWrapper"
import { type TabType } from "@/common/components/interface/reviewWriteTabs"
import exampleReviewFeed from "@/dummy/reviewFeed"

import LikedReviewsSection from "./likedReviewsSubSection"
import PopularFeedSection from "./popularFeedSection"
import ReviewFeedSection from "./reviewFeedSection"

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
              <PopularFeedSection reviews={exampleReviewFeed} likeReview={likeReview} />
            )
          case "reviewFeed":
            return (
              <ReviewFeedSection reviews={exampleReviewFeed} likeReview={likeReview} />
            )
          case "liked":
            return (
              <LikedReviewsSection reviews={exampleReviewFeed} likeReview={likeReview} />
            )
          default:
            return null
        }
      })()}
    </FlexWrapper>
  )
}

export default WriteReviewsSubSection
