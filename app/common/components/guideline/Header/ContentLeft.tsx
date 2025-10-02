import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import { media } from "@/styles/themes/media"

const ContentLeftWrapper = styled(FlexWrapper)`
  gap: 231px;

  ${media.tablet} {
    flex: 1;
    gap: 0;
  }
`

const StyledImg = styled.img<{ src: string }>`
  min-width: 55px;
  height: 27px;
  background: transparent;
`

const Menu = styled(FlexWrapper)`
  ${media.mobile} {
    display: none;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.Text.default};
  font-size: ${({ theme }) => theme.fonts.Big.fontSize}px;

  &:hover {
    color: ${({ theme }) => theme.colors.Highlight.default};
  }
`

const ContentLeft: React.FC = () => {
  const { t } = useTranslation()

  return (
    <ContentLeftWrapper direction="row" justify="space-between" align="center" gap={0}>
      <StyledLink to="/">
        <StyledImg src="/headerIcon.png" alt="Logo" />
      </StyledLink>
      <Menu direction="row" gap={24}>
        <StyledLink to="/dictionary">{t("header.dictionary")}</StyledLink>
        <StyledLink to="/write-reviews">{t("header.writeReviews")}</StyledLink>
        <StyledLink to="/timetable">{t("header.timetable")}</StyledLink>
      </Menu>
    </ContentLeftWrapper>
  )
}

export default ContentLeft
