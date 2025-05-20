"use client"

import React from "react"

import styled from "@emotion/styled"

const SearchSectionWrapper = styled.div`
  width: 645px;
  height: 64px;
  border: 2px solid ${({ theme }) => theme.colors.Highlight.default};
  border-radius: 36px;
  display: flex;
  align-items: center;
  padding: 12px 24px 12px 24px;
`

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 24px;
`

const SearchImg = styled.img<{ src: string }>``

const SearchInput = styled.input`
  width: 100%;
  height: 20px;
  border: 0;
  outline: none;
  background: transparent;
  font-size: ${({ theme }) => theme.fonts.Big.fontSize}px;
  line-height: 20px;
  padding: 0;

  &::placeholder {
    color: ${({ theme }) => theme.colors.Text.placeholder};
  }
`

const Wrapped = () => (
  <Wrapper>
    <SearchImg src="/static/favicon-32.png" />
    <SearchInput type="text" placeholder="과목명, 교수명 등을 검색해보세요" />
  </Wrapper>
)

const SearchSection = () => {
  return (
    <SearchSectionWrapper>
      <Wrapped />
    </SearchSectionWrapper>
  )
}

export default SearchSection
