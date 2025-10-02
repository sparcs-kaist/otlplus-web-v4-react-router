import styled from "@emotion/styled"
import { Trans } from "react-i18next"

import exampleReviews from "@/api/example/Reviews"
import { type GETWritableReviewsResponse } from "@/api/users/writable-reviews"
import Line from "@/common/components/Line"
import ReviewBlock from "@/common/components/blocks/ReviewBlock"
import ReviewWritingBlock from "@/common/components/reviews/ReviewWritingBlock"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import likeReview from "@/utils/reviews/likeReview"

interface WriteReviewsSubSectionType {
    selectedLecture: GETWritableReviewsResponse
}

const ReviewWrapper = styled(FlexWrapper)`
    background: ${({ theme }) => theme.colors.Background.Block.default};
    border-radius: 6px;
`

function WriteReviewsSubSection({ selectedLecture }: WriteReviewsSubSectionType) {
    return (
        <FlexWrapper direction="column" align="stretch" gap={12}>
            <FlexWrapper direction="column" gap={12} align="center">
                <Typography type="NormalBold">
                    <Trans
                        i18nKey="writeReviews.write.title"
                        values={{ lectureName: selectedLecture.name }}
                    />
                </Typography>
                <ReviewWritingBlock lecture={selectedLecture} />
            </FlexWrapper>
            <Line height={1} color="Line.default" />
            <FlexWrapper direction="column" gap={12} align="stretch">
                <FlexWrapper direction="column" gap={0} align="center">
                    <Typography type="NormalBold">
                        <Trans
                            i18nKey="writeReviews.write.related"
                            values={{ lectureName: selectedLecture.name }}
                        />
                    </Typography>
                </FlexWrapper>
                {exampleReviews.reviews.map((review, idx) => (
                    <ReviewWrapper
                        direction="column"
                        align="stretch"
                        gap={0}
                        padding="8px 10px"
                        key={idx}
                    >
                        <ReviewBlock review={review} likeReview={likeReview} />
                    </ReviewWrapper>
                ))}
            </FlexWrapper>
        </FlexWrapper>
    )
}

export default WriteReviewsSubSection
