import React, { useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import exampleReviews from "@/api/example/Reviews"
import type { GETReviewsResponse } from "@/api/reviews"
import ReviewBlock from "@/common/components/blocks/ReviewBlock"
import { getAverageScoreLabel } from "@/common/enum/scoreEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import CourseReviewLanguageChip from "@/features/dictionary/components/CourseReviewLanguageChip"
import ReviewWritingBlock from "@/features/dictionary/components/ReviewWritingBlock"

const NumberWrapper = styled(FlexWrapper)`
  width: 100%;
  padding: 10px 165px;
`

const ReviewWrapper = styled.div`
  padding: 8px 6px;
  width: 100%;
  border-radius: 6px;
  border: 1px ${({ theme }) => theme.colors.Background.Block.dark} solid;
  background-color: ${({ theme }) => theme.colors.Background.Block.default};
`

interface CourseReviewSubsectionProps {
  selectedProfessorId: number | null
}

const CourseReviewSubsection: React.FC<CourseReviewSubsectionProps> = ({
  selectedProfessorId,
}) => {
  const { t } = useTranslation()

  const [reviews, setReviews] = useState<GETReviewsResponse | null>(exampleReviews)
  const [reviewLanguage, setReviewLanguage] = useState("all")

  return (
    <>
      <Typography type={"NormalBold"} color={"Text.default"}>
        {t("dictionary.review")}
      </Typography>
      <FlexWrapper direction="column" gap={6}>
        <Typography type={"NormalBold"} color={"Text.default"}>
          {t("dictionary.reviewLanguage")}
        </Typography>
        <FlexWrapper direction="row" gap={6}>
          {["all", "english"].map((lang) => (
            <CourseReviewLanguageChip
              key={lang}
              selected={reviewLanguage == lang}
              chipText={t(`dictionary.reviewLanguageOptions.${lang}`)}
              onClick={() => setReviewLanguage(lang)}
            />
          ))}
        </FlexWrapper>
      </FlexWrapper>
      <NumberWrapper direction="row" gap={0} justify={"space-between"} align={"center"}>
        {[
          [
            getAverageScoreLabel(reviews?.averageGrade, reviews?.reviews.length),
            t("common.grade"),
          ],
          [
            getAverageScoreLabel(reviews?.averageLoad, reviews?.reviews.length),
            t("common.load"),
          ],
          [
            getAverageScoreLabel(reviews?.averageSpeech, reviews?.reviews.length),
            t("common.speech"),
          ],
        ].map(([value, label], index) => (
          <FlexWrapper key={index} direction="column" gap={0} align={"center"}>
            <Typography type={"Bigger"} color={"Text.default"}>
              {value}
            </Typography>
            <Typography type={"Smaller"} color={"Text.default"}>
              {label}
            </Typography>
          </FlexWrapper>
        ))}
      </NumberWrapper>
      {exampleReviews.reviews.length > 0 && (
        <ReviewWritingBlock courseName={exampleReviews.reviews[0].courseName} />
      )}
      {reviews?.reviews.map((review, index) => (
        <ReviewWrapper>
          <ReviewBlock review={review} likeReview={() => {}} key={index} />
        </ReviewWrapper>
      ))}
    </>
  )
}

export default CourseReviewSubsection
