import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import FlexWrapper from "@/common/primitives/FlexWrapper"

const Menu = styled(FlexWrapper)`
  width: 100%;
  position: fixed;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.Background.Page.default};
  padding: 10px 20px 20px 20px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.Text.default};
  font-size: ${({ theme }) => theme.fonts.Big.fontSize}px;

  &:hover {
    color: ${({ theme }) => theme.colors.Highlight.default};
  }
`

interface MobileMenuProps {
  setMobileMenuOpen: (open: boolean) => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setMobileMenuOpen }) => {
  const { t } = useTranslation()

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <Menu direction="column" gap={10}>
      <StyledLink to="/dictionary" onClick={handleLinkClick}>
        {t("header.dictionary")}
      </StyledLink>
      <StyledLink to="/write-reviews" onClick={handleLinkClick}>
        {t("header.writeReviews")}
      </StyledLink>
      <StyledLink to="/timetable" onClick={handleLinkClick}>
        {t("header.timetable")}
      </StyledLink>
    </Menu>
  )
}

export default MobileMenu
