import styled from "@emotion/styled"

import Line from "@/common/components/Line"
import { type TakenLectures } from "@/common/interface/takenLectures"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Widget from "@/features/main/components/Widget"

import MySummarySubSection from "./mySummarySubSection"
import TakenLectureSubSection from "./takenLectureSubSection"

interface reviewLeftSectionType {
  lecturesWraps: TakenLectures[]
}

const TakenLecturesWrapper = styled(FlexWrapper)`
  min-height: 0;
  overflow: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

function Index({ lecturesWraps }: reviewLeftSectionType) {
  return (
    <Widget
      width={288}
      direction="column"
      align="stretch"
      gap={12}
      borderRadius={12}
      padding="16px"
    >
      <MySummarySubSection />

      <Line height={2} color="Line.divider" />

      <TakenLecturesWrapper direction="column" align="stretch" gap={24}>
        {lecturesWraps.map((lecturesWrap, idx) => (
          <TakenLectureSubSection key={idx} lecturesWrap={lecturesWrap} />
        ))}
      </TakenLecturesWrapper>
    </Widget>
  )
}

export default Index
