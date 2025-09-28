import { type Dispatch, type SetStateAction, useState } from "react"

import { Trans, useTranslation } from "react-i18next"

import Button from "@/common/components/Button"
import Grade from "@/common/components/Grade"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import TextInputArea from "@/common/primitives/TextInputArea"
import Typography from "@/common/primitives/Typography"

import Widget from "../../components/Widget"

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

  const { t } = useTranslation()

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
        <Trans i18nKey="main.reviewSection.title" values={{ lectureName: lectureName }} />
      </Typography>
      <TextInputArea
        placeholder={t("main.reviewSection.placeholder")}
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
              [t("common.grade"), reviewGrade, setReviewGrade],
              [t("common.load"), reviewLoad, setReviewLoad],
              [t("common.speech"), reviewSpeech, setReviewSpeech],
            ] as [string, string, Dispatch<SetStateAction<string>>][]
          ).map(([tag, currentState, DispatchFunction]) => (
            <FlexWrapper key={tag as string} direction="row" align="center" gap={10}>
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
            <Typography type="Normal">{t("main.reviewSection.writeAnother")}</Typography>
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
              {t("common.upload")}
            </Typography>
          </Button>
        </FlexWrapper>
      </FlexWrapper>
    </Widget>
  )
}

export default ReviewSection
