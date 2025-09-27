import type { ReactNode } from "react"

import styled from "@emotion/styled"

import FlexWrapper, { type FlexWrapperProps } from "@/common/primitives/FlexWrapper"

const WidgetInner = styled(FlexWrapper)<{
  width: number | undefined
  borderRadius?: number
}>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  background: ${({ theme }) => theme.colors.Background.Section.default};
  border-radius: ${(props) => props.borderRadius}px;
`

interface WidgetProps extends FlexWrapperProps {
  width?: number | undefined
  borderRadius?: number
  children?: ReactNode | null
}

function Widget({
  width = undefined,
  borderRadius = 16,
  children = null,
  ...props
}: WidgetProps) {
  return (
    <WidgetInner width={width} borderRadius={borderRadius} {...props}>
      {children}
    </WidgetInner>
  )
}

export default Widget
