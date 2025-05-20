"use client"

import React from "react"

import styled from "@emotion/styled"

type ButtonProps = {
  type?: keyof typeof ButtonTypeInner
  children?: React.ReactNode
  isFlexColumn?: boolean
  isFlexRow?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const ButtonInner = styled.div<{ isFlexColumn: boolean; isFlexRow: boolean }>`
  display: inline-flex;
  padding: 9px 20px;
  justify-content: center;
  width: ${(props) => (props.isFlexRow ? "100%" : "fit-content")};
  height: ${(props) => (props.isFlexColumn ? "100%" : "fit-content")};
  align-items: center;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fonts.Normal.fontSize}px;
  line-height: ${({ theme }) => theme.fonts.Normal.lineHeight}px;
  font-weight: ${({ theme }) => theme.fonts.Normal.fontWeight};
`

const ButtonDefaultInner = styled(ButtonInner)`
  color: ${({ theme }) => theme.colors.Highlight.default};
  background: ${({ theme }) => theme.colors.Background.Button.highlight};
  cursor: pointer;
  outline: none;
  &:hover {
    background: ${({ theme }) => theme.colors.Background.Button.highlightDark};
  }
`

const ButtonSelectedInner = styled(ButtonInner)`
  color: ${({ theme }) => theme.colors.Highlight.default};
  background: ${({ theme }) => theme.colors.Background.Button.highlight};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.Background.Button.highlightDark};
  }
`

const ButtonHighlightedInner = styled(ButtonInner)`
  color: ${({ theme }) => theme.colors.Highlight.default};
  background: ${({ theme }) => theme.colors.Background.Button.highlight};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.Background.Button.highlightDark};
  }
`

const ButtonDisabledInner = styled(ButtonInner)`
  color: ${({ theme }) => theme.colors.Text.placeholder};
  background: ${({ theme }) => theme.colors.Background.Button.default};
  cursor: not-allowed;
`

const ButtonTypeInner = {
  default: ButtonDefaultInner,
  disabled: ButtonDisabledInner,
  selected: ButtonSelectedInner,
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
  isFlexRow = false,
  isFlexColumn = false,
  children = undefined,
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
      isFlexRow={isFlexRow}
      isFlexColumn={isFlexColumn}
    >
      <ButtonContent />
    </ButtonChosenInner>
  )
}

export default Button
