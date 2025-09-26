import styled from "@emotion/styled"

import FlexWrapper from "@/common/components/FlexWrapper"
import Typography from "@/common/components/Typography"
import { type LectureSimpleBlock as LectureSimpleBlockType } from "@/common/components/interface/LectureSimpleBlock"

const BlockInner = styled(FlexWrapper)`
  background: ${({ theme }) => theme.colors.Background.Block.default};
`

function LectureSimpleBlock({ lecture }: { lecture: LectureSimpleBlockType }) {
  return (
    <>
      <BlockInner direction="column" align="center" gap={2} padding="8px 0px">
        <Typography type="NormalBold" color="Text.default">
          {lecture.name}
        </Typography>
        <Typography type="Normal" color="Text.default">
          {lecture.code}
        </Typography>
      </BlockInner>
    </>
  )
}

export default LectureSimpleBlock
