import React from "react"
import type { ReactNode } from "react"

import styled from "@emotion/styled"

import FlexWrapper, { type FlexWrapperProps } from "@/common/components/FlexWrapper"

const WidgetInner = styled(FlexWrapper)<{ width: number | undefined }>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  background: ${({ theme }) => theme.colors.Background.Section.default};
  border-radius: 16px;
`

interface WidgetProps extends FlexWrapperProps {
  width?: number | undefined
  children?: ReactNode | null
}

function Widget({ width = undefined, children = null, ...props }: WidgetProps) {
  return (
    <WidgetInner width={width} {...props}>
      {children}
    </WidgetInner>
  )
}

export default Widget
