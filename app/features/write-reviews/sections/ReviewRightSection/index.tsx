import { useState } from "react"

import styled from "@emotion/styled"

import exampleReviews from "@/api/example/Reviews"
import { type GETWritableReviewsResponse } from "@/api/users/writable-reviews"
import { type TabType } from "@/common/interface/ReviewWriteTabs"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Widget from "@/common/primitives/Widget"

import LikedReviewsSection from "./LikedReviewsSubSection"
import PopularFeedSubSection from "./PopularFeedSubSection"
import ReviewFeedSubSection from "./ReviewFeedSubSection"
import TabsSubSection from "./TabsSubSection"
import WriteReviewsSubSection from "./WriteReviewsSubSection"

interface ReviewRightSectionProps {
    selectedLecture: GETWritableReviewsResponse
}

const StyledWidget = styled(Widget)`
    background: transparent;
    overflow: hidden;
`

const ReviewRightSubSection = styled(FlexWrapper)`
    background: ${({ theme }) => theme.colors.Background.Section.default};
    flex: 1 1 auto;
    border-top-right-radius: 16px;
`

function ReviewRightSection({ selectedLecture }: ReviewRightSectionProps) {
    const [tab, setTab] = useState<TabType>("write")

    function likeReview(reviewId: number) {
        alert("like review " + reviewId)
    }

    return (
        <StyledWidget
            width={1248}
            direction="column"
            align="stretch"
            justify="stretch"
            gap={0}
        >
            <TabsSubSection tab={tab} setTab={setTab} />
            <ReviewRightSubSection
                direction="column"
                align="stretch"
                justify="stretch"
                gap={0}
                padding="16px"
            >
                <FlexWrapper direction="column" align="stretch" gap={12} padding="12px">
                    {(() => {
                        switch (tab) {
                            case "write":
                                return (
                                    <WriteReviewsSubSection
                                        selectedLecture={selectedLecture}
                                    />
                                )
                            case "popularFeed":
                                return (
                                    <PopularFeedSubSection
                                        reviews={exampleReviews}
                                        likeReview={likeReview}
                                    />
                                )
                            case "reviewFeed":
                                return (
                                    <ReviewFeedSubSection
                                        reviews={exampleReviews}
                                        likeReview={likeReview}
                                    />
                                )
                            case "liked":
                                return (
                                    <LikedReviewsSection
                                        reviews={exampleReviews}
                                        likeReview={likeReview}
                                    />
                                )
                            default:
                                return null
                        }
                    })()}
                </FlexWrapper>
            </ReviewRightSubSection>
        </StyledWidget>
    )
}

export default ReviewRightSection
