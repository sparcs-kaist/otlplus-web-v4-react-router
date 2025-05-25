"use client"

import { useEffect, useState } from "react"

import styled from "@emotion/styled"
import { Link } from "react-router-dom"

import Widget from "../components/Widget"

interface ScheduleSectionProps {
  content: string
  dueDate: Date
}

const ScheduleSectionInner = styled.div`
  width: 418px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

const ScheduleContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`

const ContentTitle = styled.div`
  color: ${({ theme }) => theme.colors.Text.default};
  font-size: ${({ theme }) => theme.fonts.BiggerBold.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.BiggerBold.fontWeight};
  text-align: center;
  line-height: ${({ theme }) => theme.fonts.BiggerBold.lineHeight}px;
`

const ContentDeadline = styled.p`
  color: ${({ theme }) => theme.colors.Text.placeholder};
  font-size: ${({ theme }) => theme.fonts.Normal.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Normal.fontWeight};
  line-height: ${({ theme }) => theme.fonts.Normal.lineHeight}px;
`

const ScheduleLink = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.Highlight.default};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fonts.NormalBold.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.NormalBold.fontWeight};

  &:hover {
    color: ${({ theme }) => theme.colors.Highlight.dark};
  }
`

const ScheduleSection: React.FC<ScheduleSectionProps> = (props) => {
  const [now, setNow] = useState(new Date())
  const [timeLeft, setTimeLeft] = useState("")

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const diff = props.dueDate.getTime() - now.getTime()
    const isPast = diff < 0
    const absDiff = Math.abs(diff)
    const days = Math.floor(absDiff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((absDiff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((absDiff / (1000 * 60)) % 60)
    const seconds = Math.floor((absDiff / 1000) % 60)
    setTimeLeft(`D${isPast ? "+" : "-"}${days} ${hours}시간 ${minutes}분 ${seconds}초`)
  }, [now, props.dueDate])

  return (
    <Widget width={418}>
      <ScheduleSectionInner>
        <ScheduleContent>
          <ContentTitle>
            <p>{props.content}까지</p>
            <p>{timeLeft}</p>
          </ContentTitle>
          <ContentDeadline>
            {props.content} {props.dueDate.getFullYear()}.
            {String(props.dueDate.getMonth() + 1).padStart(2, "0")}.
            {String(props.dueDate.getDate()).padStart(2, "0")}
          </ContentDeadline>
        </ScheduleContent>
        <ScheduleLink>
          <StyledLink to="https://erp.kaist.ac.kr" target="_blank">
            학사 시스템 바로가기
          </StyledLink>
        </ScheduleLink>
      </ScheduleSectionInner>
    </Widget>
  )
}

export default ScheduleSection
