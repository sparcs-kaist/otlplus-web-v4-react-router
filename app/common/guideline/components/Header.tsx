import { useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import FlexWrapper from "@/common/components/FlexWrapper"
import Icon from "@/common/components/Icon"

const HeaderWrapper = styled.div`
  height: max-content;
`

const HeaderBar = styled.div`
  width: 100%;
  height: 5px;
  background: ${({ theme }) => theme.colors.Highlight.default};
`

const HeaderInner = styled.header`
  height: 50px;
  padding-inline: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ContentLeft = styled(FlexWrapper)``

const StyledImg = styled.img<{ src: string }>`
  height: 27px;
  background: transparent;
`

const Menu = styled(FlexWrapper)``

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.Text.default};
  font-size: ${({ theme }) => theme.fonts.Big.fontSize}px;

  &:hover {
    color: ${({ theme }) => theme.colors.Highlight.default};
  }
`

const ContentRight = styled(FlexWrapper)`
  color: ${({ theme }) => theme.colors.Text.default};
`

const Header = () => {
  const [language, setLanguage] = useState<string>("ko")

  const { t, i18n } = useTranslation()

  return (
    <HeaderWrapper>
      <HeaderBar />
      <HeaderInner>
        <ContentLeft direction="row" justify="space-between" align="center" gap={231}>
          <StyledLink to="/">
            <StyledImg src="/headerIcon.png" alt="Logo" />
          </StyledLink>
          <Menu direction="row" gap={24}>
            <StyledLink to="/dictionary">{t("header.dictionary")}</StyledLink>
            <StyledLink to="/timetable">{t("header.writeReviews")}</StyledLink>
            <StyledLink to="/write-reviews">{t("header.timetable")}</StyledLink>
          </Menu>
        </ContentLeft>

        <ContentRight direction="row" justify="space-between" align="center" gap={16}>
          <Icon
            type={"Language"}
            size={16}
            onClick={() => {
              if (language === "ko") {
                setLanguage("en")
                i18n.changeLanguage("en")
              } else {
                setLanguage("ko")
                i18n.changeLanguage("ko")
              }
            }}
          />
        </ContentRight>
      </HeaderInner>
    </HeaderWrapper>
  )
}

export default Header
