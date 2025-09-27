import React, { useState } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { ThemeType } from "@/styles/themes"

interface GradeButtonProps {
  children: React.ReactNode
  onClick?: () => void
  isSelected?: boolean
}

const GradeButtonDefaultStyle = (theme: ThemeType) => css`
  background-color: ${theme.colors.Background.Tab.darker};
  color: ${theme.colors.Background.Section.default};
`

const GradeButtonHoveredStyle = (theme: ThemeType) => css`
  background-color: ${theme.colors.Text.disable};
  color: ${theme.colors.Background.Section.default};
`

const GradeButtonSelectedStyle = (theme: ThemeType) => css`
  background-color: ${theme.colors.Text.lighter};
  color: ${theme.colors.Background.Section.default};
`

const GradeButtonWrapper = styled(FlexWrapper)`
  width: 19px;
  height: 19px;
  cursor: pointer;
`

const GradeButton = styled.button<{ isHovered: boolean; isSelected: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-top: 2.5px;

  ${({ theme }) => GradeButtonDefaultStyle(theme)}
  ${({ theme, isHovered }) => isHovered && GradeButtonHoveredStyle(theme)}
  ${({ theme, isSelected }) => isSelected && GradeButtonSelectedStyle(theme)}
`

function Grade({ children, onClick, isSelected = false }: GradeButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => {
    setIsHovered(true)
  }

  const handleMouseOut = () => {
    setIsHovered(false)
  }

  return (
    <GradeButtonWrapper direction="row" justify="center" align="center" gap={0}>
      <GradeButton
        isHovered={isHovered}
        isSelected={isSelected}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={onClick}
      >
        <Typography type="NormalBold">{children}</Typography>
      </GradeButton>
    </GradeButtonWrapper>
  )
}

export default Grade
