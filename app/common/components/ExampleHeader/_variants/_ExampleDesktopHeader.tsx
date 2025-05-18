import React from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import { SelectedThemeContext } from "@/Providers"
import LogoImage from "@/assets/logo.svg?react"

import { IconButton } from "../_atomic/IconButton"

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const ExampleDesktopHeader: React.FC = () => {
  const { i18n } = useTranslation()
  const { selectedTheme, setSelectedTheme } = React.useContext(SelectedThemeContext)

  const toggleTheme = () => {
    setSelectedTheme(selectedTheme === "light" ? "dark" : "light")
  }

  const toggleLanguage = () => {
    const nextLang = i18n.language === "ko" ? "en" : "ko"
    i18n.changeLanguage(nextLang)
  }

  return (
    <HeaderContainer>
      <LogoGroup>
        <LogoImage width={50} height={50} />
        <h6>Coffee Example</h6>
      </LogoGroup>
      <Controls>
        <IconButton onClick={toggleLanguage}>
          {i18n.language === "ko" ? "EN" : "KO"}
        </IconButton>
        <IconButton onClick={toggleTheme}>
          {selectedTheme === "light" ? <p>Dark</p> : <p>Light</p>}
        </IconButton>
      </Controls>
    </HeaderContainer>
  )
}
