import styled from "@emotion/styled"
import Typography from "@/common/components/Typography"

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
  color: #555555;
  background: #f5f5f5;
  cursor: pointer;

  &:hover {
    background: #ebebeb;
  }
`

const ChipSelectedInner = styled(ChipInner)`
  color: #e54c65;
  background: #f9f0f0;
  cursor: pointer;

  &:hover {
    background: #fae6e6;
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

const CourseHistoryChip = ({ selected = false, chipIndex = "", chipText = "", ...divProps }: ChipProps) => {
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
