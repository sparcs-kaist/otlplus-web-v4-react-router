import styled from "@emotion/styled"

import FlexWrapper from "@/common/primitives/FlexWrapper"

import Widget from "../../components/Widget"

interface AdFeedSectionProps {
  src: string
}

const UniformWidget = styled(Widget)`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  overflow: hidden;
`

const WidgetInner = styled.div`
  width: 100%;
  height: 100%;
`

const AdFeed = styled(FlexWrapper)<{ src: string }>`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  background: ${({ src }) => `url(${src}) no-repeat center`};
`

interface AdFeedSectionProps {}

function AdFeedSection({ src }: AdFeedSectionProps) {
  return (
    <UniformWidget direction="column" align="stretch" justify="stretch" gap={0}>
      <WidgetInner>
        <AdFeed direction="row" gap={0} src={src} />
      </WidgetInner>
    </UniformWidget>
  )
}

export default AdFeedSection
