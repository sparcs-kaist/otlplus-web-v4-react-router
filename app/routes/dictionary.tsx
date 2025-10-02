import { useState } from "react"

import styled from "@emotion/styled"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Widget from "@/common/primitives/Widget"
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
                <Widget
                    width={630}
                    direction="column"
                    align="stretch"
                    gap={0}
                    padding="16px"
                    borderRadius={12}
                >
                    <CourseListSection
                        selectedCourseId={selectedCourseId}
                        setSelectedCourseId={setSelectedCourseId}
                    />
                </Widget>
                <Widget
                    width={630}
                    direction="column"
                    align="stretch"
                    gap={0}
                    padding="16px"
                    borderRadius={12}
                >
                    <CourseDetailSection selectedCourseId={selectedCourseId} />
                </Widget>
            </DictionaryWrapperInner>
        </DictionaryWrapper>
    )
}
