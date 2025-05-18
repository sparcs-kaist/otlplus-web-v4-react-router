import React from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import { SelectedThemeContext } from "@/Providers"

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`

const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`

const MenuIcon = styled.div`
  width: 24px;
  height: 2px;
  background-color: currentColor;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 2px;
    background-color: currentColor;
    transition: transform 0.3s ease;
  }

  &::before {
    top: -6px;
  }

  &::after {
    bottom: -6px;
  }
`

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 0.5rem;
  min-width: 150px;
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-10px)")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
  z-index: 1000;
`

const MenuItem = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    opacity: 0.8;
  }
`

export const ExampleMobileHeader: React.FC = () => {
  const { i18n } = useTranslation()
  const { selectedTheme, setSelectedTheme } = React.useContext(SelectedThemeContext)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleTheme = () => {
    setSelectedTheme(selectedTheme === "light" ? "dark" : "light")
    setIsMenuOpen(false)
  }

  const toggleLanguage = () => {
    const nextLang = i18n.language === "ko" ? "en" : "ko"
    i18n.changeLanguage(nextLang)
    setIsMenuOpen(false)
  }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest("button")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMenuOpen])

  return (
    <HeaderContainer>
      <Logo>
        <h6>Coffee Example</h6>
      </Logo>
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <MenuIcon />
      </MenuButton>
      <DropdownMenu isOpen={isMenuOpen}>
        <MenuItem onClick={toggleLanguage}>
          {i18n.language === "ko" ? "Switch to English" : "한국어로 전환"}
        </MenuItem>
        <MenuItem onClick={toggleTheme}>
          {selectedTheme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </MenuItem>
      </DropdownMenu>
    </HeaderContainer>
  )
}
