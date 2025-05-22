import React, { Component } from "react"

import styled from "@emotion/styled"
import { Link } from "react-router-dom"

import FlexWrapper from "@/common/components/FlexWrapper"

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
  aling-items: center;
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

const ContentRight = styled(FlexWrapper)``

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderBar />
      <HeaderInner>
        <ContentLeft direction="row" justify="space-between" align="center" gap={231}>
          <StyledLink to="/">
            <StyledImg src="/headerIcon.png" alt="Logo" />
          </StyledLink>
          <Menu direction="row" gap={24}>
            <StyledLink to="/dictionary">과목사전</StyledLink>
            <StyledLink to="/timetable">과목후기 작성하기</StyledLink>
            <StyledLink to="/write-reviews">모의시간표</StyledLink>
            <StyledLink to="/planner">졸업플래너</StyledLink>
          </Menu>
        </ContentLeft>

        <ContentRight
          direction="row"
          justify="space-between"
          align="center"
          gap={0}
        ></ContentRight>
      </HeaderInner>
    </HeaderWrapper>
  )
}

export default Header
