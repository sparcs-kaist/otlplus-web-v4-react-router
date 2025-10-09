import type { HTMLAttributes } from "react"
import React from "react"

import styled from "@emotion/styled"

type ButtonProps = {
  type?: keyof typeof ButtonTypeInner
  children?: React.ReactNode
  $isFlexColumn?: boolean
  $isFlexRow?: boolean
  $paddingLeft?: number
  $paddingTop?: number
} & HTMLAttributes<HTMLDivElement>

const ButtonInner = styled.div<{
  $isFlexColumn: boolean
  $isFlexRow: boolean
  $paddingLeft: number
  $paddingTop: number
}>`
  display: inline-flex;
  padding: ${(props) => `${props.$paddingTop}px ${props.$paddingLeft}px`};
  justify-content: center;
  width: ${(props) => (props.$isFlexRow ? "100%" : "fit-content")};
  height: ${(props) => (props.$isFlexColumn ? "100%" : "fit-content")};
  align-items: center;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fonts.Normal.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Normal.fontWeight};
  line-height: 17.5px;
  font-weight: 400;
`

const ButtonDefaultInner = styled(ButtonInner)`
  color: ${({ theme }) => theme.colors.Text.placeholder};
  background: ${({ theme }) => theme.colors.Background.Button.default};
  cursor: pointer;
  &:hover {
    background: #ebebeb;
  }
`

const ButtonSelectedInner = styled(ButtonInner)`
  color: ${({ theme }) => theme.colors.Highlight.default};
  background: #f9f0f0;
  cursor: pointer;
  &:hover {
    background: #fae6e6;
  }
`

const ButtonDisabledInner = styled(ButtonInner)`
  color: #aaaaaa;
  background: #f5f5f5;
  cursor: not-allowed;
`

const ButtonDarkInner = styled(ButtonInner)`
  color: ${({ theme }) => theme.colors.Text.placeholder};
  background: #ebebeb;
  cursor: pointer;
  &:hover {
    background: #e1e1e1;
  }
`

const ButtonHighlightedInner = styled(ButtonInner)`
  color: white;
  background: #e54c65;
  cursor: pointer;
  &:hover {
    background: #963246;
  }
`

const ButtonTypeInner = {
  default: ButtonDefaultInner,
  disabled: ButtonDisabledInner,
  selected: ButtonSelectedInner,
  dark: ButtonDarkInner,
  highlighted: ButtonHighlightedInner,
}

const ButtonWithTextInner = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
`

const ButtonWithChildren = (children: React.ReactNode) => (
  <ButtonWithTextInner>{children}</ButtonWithTextInner>
)

const Button = ({
  type = "default",
  $isFlexRow: isFlexRow = false,
  $isFlexColumn: isFlexColumn = false,
  children = undefined,
  $paddingLeft: paddingLeft = 24,
  $paddingTop: paddingTop = 9,
  ...divProps
}: ButtonProps) => {
  const ButtonChosenInner = ButtonTypeInner[type]

  const ButtonContent = () => {
    return ButtonWithChildren(children)
  }

  return (
    <ButtonChosenInner
      {...divProps}
      onClick={type === "disabled" ? undefined : divProps.onClick}
      $isFlexRow={isFlexRow ?? false}
      $isFlexColumn={isFlexColumn ?? false}
      $paddingTop={paddingTop ?? 9}
      $paddingLeft={paddingLeft ?? 24}
    >
      <ButtonContent />
    </ButtonChosenInner>
  )
}

export default Button
