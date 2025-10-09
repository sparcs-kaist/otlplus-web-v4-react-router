import React, { useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import Button from "@/common/components/Button"
import { semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import TextInput from "@/common/primitives/TextInputArea"
import Typography from "@/common/primitives/Typography"
import ReviewGradeCircles from "@/features/dictionary/components/ReviewGradeCircles"

const ReviewWrapper = styled(FlexWrapper)`
  padding: 8px 10px;
  width: 100%;
  border-radius: 6px;
  border: 1px ${({ theme }) => theme.colors.Background.Block.dark} solid;
  background-color: ${({ theme }) => theme.colors.Background.Block.default};
`

const ReviewTextInput = styled(TextInput)`
  height: 160px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.Line.block};
`

interface ReviewWritingBlockProps {
  courseName?: string
}

const ReviewWritingBlock: React.FC<ReviewWritingBlockProps> = ({ courseName }) => {
  const { t } = useTranslation()

  const [writingReviewContent, setWritingReviewContent] = useState<string>("")
  const [writingReviewScores, setWritingReviewScores] = useState({
    grade: 0,
    load: 0,
    speech: 0,
  })

  return (
    <>
      <ReviewWrapper direction="column" gap={8}>
        <FlexWrapper direction="row" gap={6} align={"center"} justify={"center"}>
          <Typography type={"NormalBold"} color={"Text.default"}>
            {courseName}
          </Typography>
          {["스팍스", "2025", semesterToString(3)].map((text) => (
            <Typography type={"Normal"} color={"Text.lighter"}>
              {text}
            </Typography>
          ))}
        </FlexWrapper>
        <ReviewTextInput
          placeholder={t("common.review.writingPlaceholder")}
          value={writingReviewContent}
          handleChange={setWritingReviewContent}
          area={true}
        />
        <FlexWrapper direction="row" gap={12}>
          <FlexWrapper direction="row" gap={6} align="center">
            <Typography type="Normal" color="Text.default">
              {t("common.grade")}
            </Typography>
            <ReviewGradeCircles
              grade={writingReviewScores.grade}
              setGrade={(grade) =>
                setWritingReviewScores({ ...writingReviewScores, grade: grade })
              }
            />
          </FlexWrapper>
          <FlexWrapper direction="row" gap={6} align="center">
            <Typography type="Normal" color="Text.default">
              {t("common.load")}
            </Typography>
            <ReviewGradeCircles
              grade={writingReviewScores.load}
              setGrade={(load) =>
                setWritingReviewScores({ ...writingReviewScores, load: load })
              }
            />
          </FlexWrapper>
          <FlexWrapper direction="row" gap={6} align="center">
            <Typography type="Normal" color="Text.default">
              {t("common.speech")}
            </Typography>
            <ReviewGradeCircles
              grade={writingReviewScores.speech}
              setGrade={(speech) =>
                setWritingReviewScores({ ...writingReviewScores, speech: speech })
              }
            />
          </FlexWrapper>
        </FlexWrapper>
        <FlexWrapper direction="row" gap={0} justify={"end"} style={{ width: "100%" }}>
          <Button type={"selected"} $paddingLeft={9}>
            {t("common.upload")}
          </Button>
        </FlexWrapper>
      </ReviewWrapper>
    </>
  )
}

export default ReviewWritingBlock
