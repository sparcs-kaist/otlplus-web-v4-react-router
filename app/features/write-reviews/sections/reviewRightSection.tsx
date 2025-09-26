import { useState } from "react"

import styled from "@emotion/styled"

import FlexWrapper from "@/common/components/FlexWrapper"
import { type TabType } from "@/common/components/interface/ReviewWriteTabs"
import Widget from "@/features/main/components/Widget"

import TabsSubSection from "./tabsSubSection"
import WriteReviewsSubSection from "./writeReviewsSubSection"

const StyledWidget = styled(Widget)`
  background: transparent;
  overflow: hidden;
`

const ReviewRightSubSection = styled(FlexWrapper)`
  background: ${({ theme }) => theme.colors.Background.Section.default};
  flex: 1 1 auto;
  border-top-right-radius: 16px;
`

function ReviewRightSection() {
  const [tab, setTab] = useState<TabType>("write")

  return (
    <StyledWidget
      width={1248}
      direction="column"
      align="stretch"
      justify="stretch"
      gap={0}
    >
      <TabsSubSection tab={tab} setTab={setTab} />
      <ReviewRightSubSection
        direction="column"
        align="stretch"
        justify="stretch"
        gap={0}
        padding="16px"
      >
        <WriteReviewsSubSection tab={tab} />
      </ReviewRightSubSection>
    </StyledWidget>
  )
}

export default ReviewRightSection
