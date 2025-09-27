import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

function MySummarySubSection() {
  return (
    <FlexWrapper direction="column" align="center" gap={10}>
      <Typography type="Big" color="Text.default">
        내가 들은 과목
      </Typography>

      <FlexWrapper direction="row" align="center" gap={48}>
        <FlexWrapper direction="column" align="center" gap={2}>
          <FlexWrapper direction="row" align="flex-end" gap={0}>
            <Typography type="BiggerBold" color="Text.default">
              1
            </Typography>
            <Typography type="SmallBold" color="Text.default">
              /n
            </Typography>
          </FlexWrapper>
          <Typography type="Smaller" color="Text.default">
            작성후기
          </Typography>
        </FlexWrapper>

        <FlexWrapper direction="column" align="center" gap={2}>
          <FlexWrapper direction="row" align="flex-end" gap={0}>
            <Typography type="BiggerBold" color="Text.default">
              0
            </Typography>
          </FlexWrapper>
          <Typography type="Smaller" color="Text.default">
            추천
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  )
}

export default MySummarySubSection
