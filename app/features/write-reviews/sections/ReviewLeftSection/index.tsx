import styled from "@emotion/styled"

import { type GETUserPastLecturesResponse } from "@/api/users/$userId/lectures"
import { type GETWritableReviewsResponse } from "@/api/users/writable-reviews"
import Line from "@/common/components/Line"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Widget from "@/common/primitives/Widget"

import MySummarySubSection from "./MySummarySubSection"
import TakenLectureSubSection from "./TakenLectureSubSection"

interface reviewLeftSectionType {
    takenLectures: GETUserPastLecturesResponse
    selectedLecture: GETWritableReviewsResponse
    setSelectedLecture: (lecture: GETWritableReviewsResponse) => void
}

const TakenLecturesWrapper = styled(FlexWrapper)`
    min-height: 0;
    overflow: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

function ReviewLeftSection({
    takenLectures,
    selectedLecture,
    setSelectedLecture,
}: reviewLeftSectionType) {
    return (
        <Widget
            width={288}
            direction="column"
            align="stretch"
            gap={12}
            borderRadius={12}
            padding="16px"
        >
            <MySummarySubSection
                totalLectures={takenLectures.totalLectures}
                reviewedLectures={takenLectures.reviewedLectures}
                totalLikes={takenLectures.totalLikes}
            />

            <Line height={2} color="Line.divider" />

            <TakenLecturesWrapper direction="column" align="stretch" gap={24}>
                {takenLectures.lecturesWrap.map((lecturesWrap, idx) => (
                    <TakenLectureSubSection
                        key={idx}
                        lecturesWrap={lecturesWrap}
                        selectedLecture={selectedLecture}
                        setSelectedLecture={setSelectedLecture}
                    />
                ))}
            </TakenLecturesWrapper>
        </Widget>
    )
}

export default ReviewLeftSection
