import React, { useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/components/FlexWrapper"
import Typography from "@/common/components/Typography"
import ReviewBlock from "@/common/components/blocks/reviewBlock"
import type { NewReview } from "@/common/interface/NewReview"
import NewReviews from "@/dummy/NewReviews"
import CourseReviewLanguageChip from "@/features/dictionary/components/CourseReviewLanguageChip"
import ReviewWritingBlock from "@/features/dictionary/components/ReviewWritingBlock"
import { getAverageScoreLabel } from "@/utils/scoreUtils"

const NumberWrapper = styled(FlexWrapper)`
  width: 100%;
  padding: 10px 165px;
`

const ReviewWrapper = styled(FlexWrapper)`
  padding: 8px 10px;
  width: 100%;
  border-radius: 6px;
  border: 1px ${({ theme }) => theme.colors.Background.Block.dark} solid;
  background-color: ${({ theme }) => theme.colors.Background.Block.default};
`

interface CourseReviewSubsectionProps {
  courseName?: string
  selectedProfessorId: number | null
}

const CourseReviewSubsection: React.FC<CourseReviewSubsectionProps> = ({
  courseName,
  selectedProfessorId,
}) => {
  const { t } = useTranslation()

  const [reviews, setReviews] = useState<NewReview | null>(NewReviews)
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
      <ReviewWritingBlock courseName={courseName} />
      {reviews?.reviews.map((review, index) => (
        <ReviewBlock review={review} likeReview={() => {}} key={index} />
      ))}
    </>
  )
}

export default CourseReviewSubsection
