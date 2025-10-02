import { useEffect, useState } from "react"

import styled from "@emotion/styled"

import exampleUserPastLectures from "@/api/example/UserPastLectures"
import { type GETUserPastLecturesResponse } from "@/api/users/$userId/lectures"
import { type GETWritableReviewsResponse } from "@/api/users/writable-reviews"
import { SemesterEnum } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import ReviewLeftSection from "@/features/write-reviews/sections/ReviewLeftSection"
import ReviewRightSection from "@/features/write-reviews/sections/ReviewRightSection"

const WriteReviewWrapper = FlexWrapper

const WriteReviewWrapperInner = styled(FlexWrapper)`
    flex: 1 0 0;
    overflow: auto;
`

export default function WriteReviews() {
    const [takenLectures, setTakenLectures] = useState<GETUserPastLecturesResponse>(
        exampleUserPastLectures,
    )

    const [selectedLecture, setSelectedLecture] = useState<GETWritableReviewsResponse>({
        name: "",
        courseId: 0,
        professors: [{ name: "", id: 0 }],
        year: 0,
        semester: SemesterEnum.SPRING,
    })

    useEffect(() => {
        const lectureWrap1 = takenLectures.lecturesWrap[0]

        const { year, semester } = lectureWrap1

        const lecture1 = lectureWrap1.lectures[0]

        const { name, courseId, professors } = lecture1

        setSelectedLecture({
            year,
            semester,
            name,
            courseId,
            professors,
        })
    }, [takenLectures])

    return (
        <WriteReviewWrapper
            direction="column"
            align="center"
            justify="stretch"
            gap={0}
            flex="1 0 0"
        >
            <WriteReviewWrapperInner
                direction="row"
                align="stretch"
                justify="center"
                gap={12}
                padding="0px 0px 15px 0px"
            >
                <ReviewLeftSection
                    takenLectures={takenLectures}
                    selectedLecture={selectedLecture}
                    setSelectedLecture={setSelectedLecture}
                />
                <ReviewRightSection selectedLecture={selectedLecture} />
            </WriteReviewWrapperInner>
        </WriteReviewWrapper>
    )
}
