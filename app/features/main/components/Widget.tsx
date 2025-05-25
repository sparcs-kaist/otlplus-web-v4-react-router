import React from "react"
import type { ReactNode } from "react"

import styled from "@emotion/styled"

import FlexWrapper from "@/common/components/FlexWrapper"

const WidgetInner = styled(FlexWrapper)<{ width: number | undefined }>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  background: ${({ theme }) => theme.colors.Background.Section.default};
  border-radius: 16px;
`

interface WidgetProps {
  width?: number | undefined
  children?: ReactNode | null
}

const Widget: React.FC<WidgetProps> = (
  props = {
    width: undefined,
    children: null,
  },
) => {
  return (
    <WidgetInner width={props.width} direction="row" gap={16} padding="23px 30px">
      {props.children}
    </WidgetInner>
  )
}

export default Widget
