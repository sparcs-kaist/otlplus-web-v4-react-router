import styled from "@emotion/styled"
import React, { useState } from "react"
import Credits from "@/common/components/Credits"
import FlexWrapper from "@/common/components/FlexWrapper"
import type { NewCourse } from "@/common/components/interface/NewCourse"
import CourseExample from "@/dummy/CourseExample"
import CourseInfoSubsection from "@/features/dictionary/sections/courseInfoSubsection"
import CourseHistorySubsection from "@/features/dictionary/sections/courseHistorySubsection"
import CourseReviewSubsection from "@/features/dictionary/sections/courseReviewSubsection"
import Typography from "@/common/components/Typography"

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
  selectedCourseId: number | null;
}

const CourseDetailSection: React.FC<CourseDetailSectionProps> = ({ selectedCourseId }) => {
  const [courseDetail, setCourseDetail] = useState<NewCourse | null>(CourseExample);
  const [selectedProfessorId, setSelectedProfessorId] = useState<number | null>(null);

  return (
    <CourseDetailSectionInner direction="column" gap={12} align={"center"} justify={selectedCourseId ? "start" : "center"}>
      {selectedCourseId ? (
        <>
          <CourseTitle direction="column" gap={2} align={"center"} justify={"center"}>
            <Typography type={"Bigger"} color={"Text.default"}>{courseDetail?.title}</Typography>
            <Typography type={"Big"} color={"Text.default"}>{courseDetail?.code}</Typography>
          </CourseTitle>
          <CourseDetailWrapper direction="column" gap={10}>
            <CourseInfoSubsection courseDetail={courseDetail}/>
          </CourseDetailWrapper>
          <Divider/>
          <CourseDetailWrapper direction="column" gap={10}>
            <CourseHistorySubsection courseDetail={courseDetail} selectedProfessorId={selectedProfessorId} setSelectedProfessorId={setSelectedProfessorId}/>
          </CourseDetailWrapper>
          <Divider/>
          <CourseDetailWrapper direction="column" gap={10}>
            <CourseReviewSubsection courseName={courseDetail?.title} selectedProfessorId={selectedProfessorId}/>
          </CourseDetailWrapper>
        </>
      ) : <Credits/>}
    </CourseDetailSectionInner>
  )
}

export default CourseDetailSection;
