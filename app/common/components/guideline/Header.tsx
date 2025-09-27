import React, { useState } from "react"

import styled from "@emotion/styled"
import LanguageIcon from "@mui/icons-material/Language"
import PersonIcon from "@mui/icons-material/Person"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import exampleUserInfo from "@/api/example/UserInfo"
import type { GETUserInfoResponse } from "@/api/users/$userId/info"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import AccountPageModal from "@/features/account/AccountPageModal"

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

const AccountButtonWrapper = styled(FlexWrapper)`
  cursor: pointer;
`

const Header: React.FC = () => {
  const [language, setLanguage] = useState<string>("ko")
  const [accountPageOpen, setAccountPageOpen] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<GETUserInfoResponse | null>(exampleUserInfo)

  const { t, i18n } = useTranslation()

  return (
    <HeaderWrapper>
      <AccountPageModal
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        accountPageOpen={accountPageOpen}
        setAccountPageOpen={setAccountPageOpen}
      />
      <HeaderBar />
      <HeaderInner>
        <ContentLeft direction="row" justify="space-between" align="center" gap={231}>
          <StyledLink to="/">
            <StyledImg src="/headerIcon.png" alt="Logo" />
          </StyledLink>
          <Menu direction="row" gap={24}>
            <StyledLink to="/dictionary">{t("header.dictionary")}</StyledLink>
            <StyledLink to="/write-reviews">{t("header.writeReviews")}</StyledLink>
            <StyledLink to="/timetable">{t("header.timetable")}</StyledLink>
          </Menu>
        </ContentLeft>

        <ContentRight direction="row" justify="space-between" align="center" gap={16}>
          <Icon
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
          >
            <LanguageIcon />
          </Icon>
          <AccountButtonWrapper
            direction="row"
            gap={4}
            align="center"
            onClick={() => {
              setAccountPageOpen(true)
            }}
          >
            <Icon size={16}>
              <PersonIcon />
            </Icon>
            <Typography type={"Normal"} color={"Text.default"}>
              {userInfo?.name}
            </Typography>
          </AccountButtonWrapper>
        </ContentRight>
      </HeaderInner>
    </HeaderWrapper>
  )
}

export default Header
