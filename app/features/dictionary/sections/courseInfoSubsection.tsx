import Typography from "@/common/components/Typography"
import FlexWrapper from "@/common/components/FlexWrapper"
import React from "react"
import type { NewCourse } from "@/common/components/interface/NewCourse"
import styled from "@emotion/styled"

const CourseInfo = styled(FlexWrapper)`
  width: 100%;
`

const NumberWrapper = styled(FlexWrapper)`
  width: 100%;
  padding: 10px 165px;
`

const DetailHeaderText = styled(Typography)`
  white-space: nowrap;
`

interface CourseInfoSubsectionProps {
  courseDetail: NewCourse | null;
}

const CourseInfoSubsection: React.FC<CourseInfoSubsectionProps> = ({ courseDetail }) => {
  return (
    <>
      <CourseInfo direction="column" gap={8}>
        {[["분류", courseDetail?.department.name + ", " + courseDetail?.type],
          ["설명", courseDetail?.summary]]
          .map(([label, value], index) => (
          <FlexWrapper key={index} direction="row" gap={6}>
            <DetailHeaderText type={"NormalBold"} color={"Text.default"}>{label}</DetailHeaderText>
            <Typography type={"Normal"} color={"Text.default"}>{value}</Typography>
          </FlexWrapper>
        ))}
      </CourseInfo>
      <NumberWrapper direction="row" gap={0} justify={"space-between"} align={"center"}>
        {[[courseDetail?.num_classes, "강의시간"],
          [courseDetail?.num_labs, "실험"],
          [courseDetail?.credit, "학점"]]
          .map(([value, label], index) => (
          <FlexWrapper key={index} direction="column" gap={0} align={"center"}>
            <Typography type={"Bigger"} color={"Text.default"}>{value}</Typography>
            <Typography type={"Smaller"} color={"Text.default"}>{label}</Typography>
          </FlexWrapper>
        ))}
      </NumberWrapper>
    </>
  )
}

export default CourseInfoSubsection;