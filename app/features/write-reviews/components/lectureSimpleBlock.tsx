import FlexWrapper from "@/common/components/FlexWrapper"
import Typography from "@/common/components/Typography"
import { type LectureSimpleBlock as LectureSimpleBlockType } from "@/common/components/interface/LectureSimpleBlock"

function LectureSimpleBlock({ lecture }: { lecture: LectureSimpleBlockType }) {
  return (
    <>
      <FlexWrapper direction="column" align="center" gap={0}>
        <Typography type="NormalBold" color="Text.default">
          {lecture.name}
        </Typography>
        <Typography type="Normal" color="Text.default">
          {lecture.code}
        </Typography>
      </FlexWrapper>
    </>
  )
}

export default LectureSimpleBlock
