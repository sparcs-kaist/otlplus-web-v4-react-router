import { useState } from "react"

import styled from "@emotion/styled"
import { Trans, useTranslation } from "react-i18next"

import type { GETReviewsResponse } from "@/api/reviews"
import ScrollableDropdown from "@/common/components/ScrollableDropdown"
import ReviewBlock from "@/common/components/blocks/ReviewBlock"
import { SemesterEnum, semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

interface ReviewFeedSubSectionProps {
    reviews: GETReviewsResponse
    likeReview: (reviewId: number) => void
}
const DropDownWrapper = styled(FlexWrapper)`
    flex: 1 0 1;
    width: 225px;
    height: 36px;
`

const ReviewWrapper = styled(FlexWrapper)`
    background: ${({ theme }) => theme.colors.Background.Block.default};
    border-radius: 6px;
`

const options = ["2023", "2022", "2021", "2020", "2019", "2018", "2017"]

function ReviewFeedSubSection({ reviews, likeReview }: ReviewFeedSubSectionProps) {
    const [year, setYear] = useState(0)
    const { t } = useTranslation()

    return (
        <FlexWrapper direction="column" align="stretch" gap={12}>
            <FlexWrapper direction="row" align="center" gap={8}>
                <Typography type="NormalBold">{t("common.year")}</Typography>
                <DropDownWrapper direction="row" gap={0}>
                    <ScrollableDropdown
                        options={options}
                        selectedOption={year}
                        setSelectedOption={setYear}
                    />
                </DropDownWrapper>
            </FlexWrapper>
            <FlexWrapper direction="column" align="center" gap={12}>
                <Typography type="NormalBold">
                    <Trans
                        i18nKey="writeReviews.reviewFeed.title"
                        values={{
                            year: options[year],
                            semester: semesterToString(SemesterEnum.SPRING),
                        }}
                    />
                </Typography>
                <FlexWrapper direction="column" align="center" gap={0}>
                    <Typography type="Bigger">{reviews.reviews.length}</Typography>
                    <Typography type="Smaller">
                        {t("writeReviews.reviewFeed.total")}
                    </Typography>
                </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper direction="column" align="stretch" gap={12}>
                {reviews.reviews.map((review, idx) => (
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

export default ReviewFeedSubSection
