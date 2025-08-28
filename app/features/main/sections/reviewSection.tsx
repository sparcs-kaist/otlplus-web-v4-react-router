import { type Dispatch, type SetStateAction, useRef, useState } from "react"

import { set } from "zod"

import Button from "@/common/components/Button"
import FlexWrapper from "@/common/components/FlexWrapper"
import Grade from "@/common/components/Grade"
import TextInputArea from "@/common/components/TextInputArea"
import Typography from "@/common/components/Typography"
import i18n from "@/libs/i18n"

import Widget from "../components/Widget"

interface ReviewSectionProps {
  lectureId: number
  lectureName: string
}

type ReviewValue = "A" | "B" | "C" | "D" | "E"

function ReviewSection({ lectureId, lectureName }: ReviewSectionProps) {
  const [reviewText, setReviewText] = useState("")
  const [reviewGrade, setReviewGrade] = useState<ReviewValue | null>(null)
  const [reviewLoad, setReviewLoad] = useState<ReviewValue | null>(null)
  const [reviewSpeech, setReviewSpeech] = useState<ReviewValue | null>(null)

  function submitReview() {
    const submitData = {
      reviewText,
      reviewGrade,
      reviewLoad,
      reviewSpeech,
      lectureId,
      lectureName,
    }

    alert(JSON.stringify(submitData, null, 2))
  }

  return (
    <Widget direction="column" gap={20} padding="23px 30px" align="stretch">
      <Typography type="BiggerBold" color="Text.default">
        {lectureName} 강의는 어땠나요?
      </Typography>
      <TextInputArea
        placeholder="학점, 로드 등의 평가에 대해 설명해주세요."
        type="text"
        readOnly={false}
        handleChange={(value) => {
          setReviewText(value)
        }}
        area
      />
      <FlexWrapper direction="column" gap={20} align="stretch">
        <FlexWrapper direction="column" gap={12}>
          {(
            [
              ["성적", reviewGrade, setReviewGrade],
              ["널널", reviewLoad, setReviewLoad],
              ["강의", reviewSpeech, setReviewSpeech],
            ] as [string, string, Dispatch<SetStateAction<string>>][]
          ).map(([tag, currentState, DispatchFunction]) => (
            <FlexWrapper key={tag as string} direction="row" gap={10}>
              <Typography type="Normal" color="Text.light">
                {tag as string}
              </Typography>
              <FlexWrapper direction="row" gap={5}>
                {"ABCDE".split("").map((grade) => (
                  <Grade
                    key={grade}
                    onClick={() => {
                      DispatchFunction(grade)
                    }}
                    isSelected={currentState === grade}
                  >
                    {grade}
                  </Grade>
                ))}
              </FlexWrapper>
            </FlexWrapper>
          ))}
        </FlexWrapper>
        <FlexWrapper direction="row" justify="flex-end" gap={12}>
          <Button type="default" $paddingLeft={8} $paddingTop={8}>
            <Typography type="Normal">다른 과목 작성</Typography>
          </Button>
          <Button
            type={
              reviewText && reviewGrade && reviewSpeech && reviewLoad
                ? "default"
                : "disabled"
            }
            $paddingLeft={8}
            $paddingTop={8}
            onClick={submitReview}
          >
            <Typography
              type="Normal"
              color={
                reviewText && reviewGrade && reviewSpeech && reviewLoad
                  ? "Highlight.default"
                  : "Text.disable"
              }
            >
              업로드
            </Typography>
          </Button>
        </FlexWrapper>
      </FlexWrapper>
    </Widget>
  )
}

export default ReviewSection
