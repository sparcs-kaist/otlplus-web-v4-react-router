import { type Dispatch, Fragment, type SetStateAction, useState } from "react"

import styled from "@emotion/styled"
import { Trans, useTranslation } from "react-i18next"

import Button from "@/common/components/Button"
import GradeWrap from "@/common/components/GradeWrap"
import { ScoreEnum } from "@/common/enum/scoreEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import TextInputArea from "@/common/primitives/TextInputArea"
import Typography from "@/common/primitives/Typography"

import Widget from "../../../../common/primitives/Widget"

interface ReviewSectionProps {
    lectureId: number
    lectureName: string
}

const ReviewBoxWrapper = styled(FlexWrapper)`
    height: 173px;
`

const ScoreGrid = styled.div`
    display: grid;
    grid-template-columns: max-content auto;
    column-gap: 12px;
    row-gap: 8px;
    align-items: end;
`

function ReviewSection({ lectureId, lectureName }: ReviewSectionProps) {
    const [reviewText, setReviewText] = useState("")
    const [reviewGrade, setReviewGrade] = useState<ScoreEnum>(0)
    const [reviewLoad, setReviewLoad] = useState<ScoreEnum>(0)
    const [reviewSpeech, setReviewSpeech] = useState<ScoreEnum>(0)

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
                <Trans
                    i18nKey="main.reviewSection.title"
                    values={{ lectureName: lectureName }}
                />
            </Typography>
            <ReviewBoxWrapper
                direction="column"
                align="stretch"
                justify="stretch"
                gap={0}
            >
                <TextInputArea
                    placeholder={t("main.reviewSection.placeholder")}
                    type="text"
                    readOnly={false}
                    handleChange={(value) => {
                        setReviewText(value)
                    }}
                    area
                />
            </ReviewBoxWrapper>
            <FlexWrapper direction="column" gap={20} align="stretch">
                <ScoreGrid>
                    {(
                        [
                            [t("common.grade"), reviewGrade, setReviewGrade],
                            [t("common.load"), reviewLoad, setReviewLoad],
                            [t("common.speech"), reviewSpeech, setReviewSpeech],
                        ] as [string, ScoreEnum, Dispatch<SetStateAction<ScoreEnum>>][]
                    ).map(([tag, currentState, DispatchFunction]) => (
                        <Fragment key={tag}>
                            <Typography type="Normal" color="Text.light">
                                {tag}
                            </Typography>
                            <FlexWrapper
                                key={tag}
                                direction="row"
                                align="center"
                                gap={10}
                            >
                                <GradeWrap
                                    score={currentState}
                                    setScore={DispatchFunction}
                                />
                            </FlexWrapper>
                        </Fragment>
                    ))}
                </ScoreGrid>
                <FlexWrapper direction="row" justify="flex-end" gap={12}>
                    <Button type="default" $paddingLeft={8} $paddingTop={8}>
                        <Typography type="Normal">
                            {t("main.reviewSection.writeAnother")}
                        </Typography>
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
