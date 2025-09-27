import styled from "@emotion/styled"

import Typography from "@/common/primitives/Typography"

type ChipProps = {
  selected?: boolean
  chipIndex?: string
  chipText?: string
} & React.ComponentProps<"div">

const ChipInner = styled.div`
  width: 150px;
  height: 28px;
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  font-size: 14px;
  line-height: 17.5px;
  font-weight: 400;
`

const ChipDefaultInner = styled(ChipInner)`
  color: ${({ theme }) => theme.colors.Text.light};
  background: ${({ theme }) => theme.colors.Background.Button.default};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.Background.Button.dark};
  }
`

const ChipSelectedInner = styled(ChipInner)`
  color: ${({ theme }) => theme.colors.Highlight.default};
  background: ${({ theme }) => theme.colors.Background.Button.highlight};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.Background.Button.highlightDark};
  }
`

const ChipContentWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 6px;
  width: 100%;
  height: 100%;
  align-items: center;
`

const CourseHistoryChip = ({
  selected = false,
  chipIndex = "",
  chipText = "",
  ...divProps
}: ChipProps) => {
  const ChipContent = () => (
    <ChipContentWrapper>
      <Typography type={"NormalBold"}>{chipIndex}</Typography>
      <Typography type={"Normal"}>{chipText}</Typography>
    </ChipContentWrapper>
  )

  const ChipChosenInner = selected ? ChipSelectedInner : ChipDefaultInner
  return (
    <ChipChosenInner {...divProps}>
      <ChipContent />
    </ChipChosenInner>
  )
}

export default CourseHistoryChip
