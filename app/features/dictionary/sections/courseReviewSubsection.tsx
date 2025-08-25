import Typography from "@/common/components/Typography"
import FlexWrapper from "@/common/components/FlexWrapper"
import CourseReviewLanguageChip from "@/features/dictionary/components/CourseReviewLanguageChip"
import React, { useState } from "react"
import styled from "@emotion/styled"
import type { NewReview } from "@/common/components/interface/NewReview"
import NewReviews from "@/dummy/NewReviews"
import Icon from "@/common/components/Icon"
import themes from "@/styles/themes"
import ReviewWritingBlock from "@/features/dictionary/components/ReviewWritingBlock"
import { stringSemester } from "@/utils/semesterToString"
import { getAverageScoreLabel, getSingleScoreLabel } from "@/utils/scoreUtils"

const NumberWrapper = styled(FlexWrapper)`
  width: 100%;
  padding: 10px 165px;
`

const ReviewWrapper = styled(FlexWrapper)`
  padding: 8px 10px;
  width: 100%;
  border-radius: 6px;
  border: 1px ${({theme} ) => theme.colors.Background.Block.dark} solid;
  background-color: ${({ theme }) => theme.colors.Background.Block.default};
`

interface CourseReviewSubsectionProps {
  courseName?: string;
  selectedProfessorId: number | null;
}

const CourseReviewSubsection: React.FC<CourseReviewSubsectionProps> = ({ courseName, selectedProfessorId }) => {
  const [reviews, setReviews] = useState<NewReview | null>(NewReviews);
  const [reviewLanguage, setReviewLanguage] = useState("전체");

  return (
    <>
      <Typography type={"NormalBold"} color={"Text.default"}>과목 후기</Typography>
      <FlexWrapper direction="column" gap={6}>
        <Typography type={"NormalBold"} color={"Text.default"}>언어</Typography>
        <FlexWrapper direction="row" gap={6}>
          {["전체", "영어"].map((lang) => (
            <CourseReviewLanguageChip
              key={lang}
              selected={reviewLanguage == lang}
              chipText={lang}
              onClick={() => setReviewLanguage(lang)}
            />))}
        </FlexWrapper>
      </FlexWrapper>
      <NumberWrapper direction="row" gap={0} justify={"space-between"} align={"center"}>
        {[[getAverageScoreLabel(reviews?.averageGrade, reviews?.reviews.length), "성적"],
          [getAverageScoreLabel(reviews?.averageLoad, reviews?.reviews.length), "널널"],
          [getAverageScoreLabel(reviews?.averageSpeech, reviews?.reviews.length), "강의"]]
          .map(([value, label], index) => (
          <FlexWrapper key={index} direction="column" gap={0} align={"center"}>
            <Typography type={"Bigger"} color={"Text.default"}>{value}</Typography>
            <Typography type={"Smaller"} color={"Text.default"}>{label}</Typography>
          </FlexWrapper>
        ))}
      </NumberWrapper>
      <ReviewWritingBlock courseName={courseName}/>
      {reviews?.reviews.map((review, index) => (
        <ReviewWrapper direction="column" gap={8}>
          <FlexWrapper direction="row" gap={6} align={"center"} justify={"center"}>
            <Typography type={"NormalBold"} color={"Text.default"}>{courseName}</Typography>
            <Typography type={"Normal"} color={"Text.lighter"}>{review.professorName}</Typography>
            <Typography type={"Normal"} color={"Text.lighter"}>({review.year}</Typography>
            <Typography type={"Normal"} color={"Text.lighter"}>{stringSemester(review.semester)})</Typography>
          </FlexWrapper>
          <Typography type={"Normal"} color={"Text.default"}>{review.content}</Typography>
          <FlexWrapper direction="row" gap={0} justify={"space-between"} style={{ width : "100%" }}>
            <FlexWrapper direction="row" gap={8}>
              {["좋아요 " + review.like,
                "성적 " + getSingleScoreLabel(review.grade),
                "널널 " + getSingleScoreLabel(review.load),
                "강의 " + getSingleScoreLabel(review.speech)]
                .map((text) => (
                <Typography type={"Normal"} color={"Text.lighter"}>{text}</Typography>
              ))}
            </FlexWrapper>
            <FlexWrapper direction="row" gap={4} align={"center"}>
              <Typography type={"Normal"} color={"Highlight.default"}>좋아요</Typography>
              <Icon type={review.userspecificIsLiked ? "Favorite" : "FavoriteBorder"} size={14} color={themes.light.colors.Highlight.default}/>
            </FlexWrapper>
          </FlexWrapper>
        </ReviewWrapper>
      ))}
    </>
  );
}

export default CourseReviewSubsection;