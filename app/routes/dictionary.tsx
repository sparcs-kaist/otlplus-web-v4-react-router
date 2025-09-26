import { useState } from "react"

import styled from "@emotion/styled"

import FlexWrapper from "@/common/components/FlexWrapper"
import CourseDetailSection from "@/features/dictionary/sections/courseDetailSection"
import CourseListSection from "@/features/dictionary/sections/courseListSection"

const DictionaryWrapper = styled(FlexWrapper)`
  flex: 1 1 0;
  min-height: 0;
  max-height: 100%;
`

const DictionaryWrapperInner = styled(FlexWrapper)`
  flex: 1 1 auto;
  min-height: 0;
  max-height: 100%;
`

const SectionWrapper = styled(FlexWrapper)`
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
        <SectionWrapper direction="column" align="stretch" gap={0}>
          <CourseListSection
            selectedCourseId={selectedCourseId}
            setSelectedCourseId={setSelectedCourseId}
          />
        </SectionWrapper>
        <SectionWrapper direction="column" align="stretch" gap={0}>
          <CourseDetailSection selectedCourseId={selectedCourseId} />
        </SectionWrapper>
      </DictionaryWrapper>
    </div>
  )
}
