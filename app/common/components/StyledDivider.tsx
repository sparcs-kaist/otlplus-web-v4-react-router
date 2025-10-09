import styled from "@emotion/styled"

const StyledDividerRow = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.Highlight.default};
`

const StyledDividerColumn = styled.div`
  width: 1px;
  height: 100%;
  background: ${({ theme }) => theme.colors.Highlight.default};
`

const StyledDivider: React.FC<{ direction?: "column" | "row" }> = ({
  direction = "row",
}) => {
  return direction == "row" ? <StyledDividerRow /> : <StyledDividerColumn />
}

export default StyledDivider
