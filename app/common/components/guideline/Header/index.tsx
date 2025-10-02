import { useEffect, useState } from "react"

import styled from "@emotion/styled"
import CloseIcon from "@mui/icons-material/Close"
import MenuIcon from "@mui/icons-material/Menu"

import exampleUserInfo from "@/api/example/UserInfo"
import type { GETUserInfoResponse } from "@/api/users/$userId/info"
import Icon from "@/common/primitives/Icon"
import AccountPageModal from "@/features/account/AccountPageModal"
import { media } from "@/styles/themes/media"
import useIsMobile from "@/utils/useIsMobile"

import ContentLeft from "./ContentLeft"
import ContentRight from "./ContentRight"
import MobileMenu from "./MobileMenu"

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
  white-space: nowrap;
  gap: 16px;
`

const MobileMenuButtonWrapper = styled.div`
  display: none;

  ${media.mobile} {
    display: block;
  }
`

const Header: React.FC = () => {
  const isMobile = useIsMobile()

  const [accountPageOpen, setAccountPageOpen] = useState<boolean>(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  const [userInfo, setUserInfo] = useState<GETUserInfoResponse | null>(exampleUserInfo)

  useEffect(() => {
    if (!isMobile) setMobileMenuOpen(false)
  }, [isMobile])

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
        <ContentLeft />
        <ContentRight
          setAccountPageOpen={setAccountPageOpen}
          userName={userInfo ? userInfo.name : "Sign in"}
        />
        <MobileMenuButtonWrapper onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Icon size={18}>{mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}</Icon>
        </MobileMenuButtonWrapper>
      </HeaderInner>
      {mobileMenuOpen && <MobileMenu setMobileMenuOpen={setMobileMenuOpen} />}
    </HeaderWrapper>
  )
}

export default Header
