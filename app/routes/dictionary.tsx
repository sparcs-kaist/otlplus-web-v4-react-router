import { useState } from "react"

import styled from "@emotion/styled"

import FlexWrapper from "@/common/components/FlexWrapper"
import CourseDetailSection from "@/features/dictionary/sections/courseDetailSection"
import CourseListSection from "@/features/dictionary/sections/courseListSection"

const DictionaryWrapper = styled(FlexWrapper)`
  height: 90vh;
`

const SectionWrapper = styled.div`
  width: 630px;
  height: 100%;
  border-radius: 12px;
  padding: 16px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.Background.Section.default};
`

export default function DictionaryPage() {
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(745)

  return (
    <div>
      <DictionaryWrapper direction={"row"} gap={12} justify={"center"}>
        <SectionWrapper>
          <CourseListSection
            selectedCourseId={selectedCourseId}
            setSelectedCourseId={setSelectedCourseId}
          />
        </SectionWrapper>
        <SectionWrapper>
          <CourseDetailSection selectedCourseId={selectedCourseId} />
        </SectionWrapper>
      </DictionaryWrapper>
    </div>
  )
}
