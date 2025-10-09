import React, { useState } from "react"

import styled from "@emotion/styled"

import type { GETCourseDetailResponse } from "@/api/courses/$courseId"
import exampleCourse from "@/api/example/Course"
import Credits from "@/common/components/Credits"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

import CourseHistorySubsection from "./CourseHistorySubsection"
import CourseInfoSubsection from "./CourseInfoSubsection"
import CourseReviewSubsection from "./CourseReviewSubsection"

const CourseDetailSectionInner = styled(FlexWrapper)`
    width: 100%;
    height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

const CourseDetailWrapper = styled(FlexWrapper)`
    width: 100%;
`

const CourseTitle = styled(FlexWrapper)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
`

const Divider = styled.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({ theme }) => theme.colors.Line.divider};
`

interface CourseDetailSectionProps {
    selectedCourseId: number | null
}

const CourseDetailSection: React.FC<CourseDetailSectionProps> = ({
    selectedCourseId,
}) => {
    const [courseDetail, setCourseDetail] = useState<GETCourseDetailResponse | null>(
        exampleCourse,
    )
    const [selectedProfessorId, setSelectedProfessorId] = useState<number | null>(null)

    return (
        <CourseDetailSectionInner
            direction="column"
            gap={12}
            align={"center"}
            justify={selectedCourseId ? "start" : "center"}
        >
            {selectedCourseId ? (
                <>
                    <CourseTitle
                        direction="column"
                        gap={2}
                        align={"center"}
                        justify={"center"}
                    >
                        <Typography type={"Bigger"} color={"Text.default"}>
                            {courseDetail?.name}
                        </Typography>
                        <Typography type={"Big"} color={"Text.default"}>
                            {courseDetail?.code}
                        </Typography>
                    </CourseTitle>
                    <CourseDetailWrapper direction="column" gap={10}>
                        <CourseInfoSubsection courseDetail={courseDetail} />
                    </CourseDetailWrapper>
                    <Divider />
                    <CourseDetailWrapper direction="column" gap={10}>
                        <CourseHistorySubsection
                            courseDetail={courseDetail}
                            selectedProfessorId={selectedProfessorId}
                            setSelectedProfessorId={setSelectedProfessorId}
                        />
                    </CourseDetailWrapper>
                    <Divider />
                    <CourseDetailWrapper direction="column" gap={10}>
                        <CourseReviewSubsection
                            selectedProfessorId={selectedProfessorId}
                        />
                    </CourseDetailWrapper>
                </>
            ) : (
                <Credits />
            )}
        </CourseDetailSectionInner>
    )
}

export default CourseDetailSection
