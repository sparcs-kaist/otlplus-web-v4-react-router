import { useState } from "react"

import styled from "@emotion/styled"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import CourseDetailSection from "@/features/dictionary/sections/CourseDetailSection"
import CourseListSection from "@/features/dictionary/sections/CourseListSection"

const DictionaryWrapper = styled(FlexWrapper)`
  flex: 1 0 0;
  min-height: 0;
`

const DictionaryWrapperInner = styled(FlexWrapper)`
  flex: 1 0 0;
  overflow: auto;
  min-height: 0;
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
    <DictionaryWrapper direction="column" align="center" justify="stretch" gap={0}>
      <DictionaryWrapperInner
        direction="row"
        gap={12}
        align="stretch"
        justify="center"
        padding="0px 0px 15px 0px"
      >
        <SectionWrapper direction="column" align="stretch" gap={0}>
          <CourseListSection
            selectedCourseId={selectedCourseId}
            setSelectedCourseId={setSelectedCourseId}
          />
        </SectionWrapper>
        <SectionWrapper direction="column" align="stretch" gap={0}>
          <CourseDetailSection selectedCourseId={selectedCourseId} />
        </SectionWrapper>
      </DictionaryWrapperInner>
    </DictionaryWrapper>
  )
}
