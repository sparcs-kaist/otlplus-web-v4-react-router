import type { CSSProperties } from "react"

import styled from "@emotion/styled"

import type { ClassTime, Lecture } from "@/common/schemas/lecture"

// tile Color를 mapping 해주는 부분
export const colorMap: Array<CSSProperties["color"]> = [
  "#F2CECE",
  "#F4B3AE",
  "#F2BCA0",
  "#F0D3AB",
  "#F1E1A9",
  "#F4F2B3",
  "#DBF4BE",
  "#BEEDD7",
  "#B7D2DE",
  "#C9DAF4",
  "#B4D3ED",
  "#B9C5ED",
  "#D8C1F0",
  "#EBCAEF",
  "#F4BADB",
]

export const darkColorMap: Array<CSSProperties["color"]> = [
  "#EDA0A0",
  "#F5837A",
  "#F49A6B",
  "#F0BE78",
  "#F1D676",
  "#F4F180",
  "#C3F38C",
  "#8FE9BF",
  "#8BDBD4",
  "#99DDF1",
  "#84BCEA",
  "#89A0EA",
  "#BE92EC",
  "#E19DE9",
  "#F487C5",
]

const TileWrapper = styled.div<{
  course_id: number
  duration: number
  cellWidth: number
  isSelected: boolean
  isHighlighted: boolean
  cellHeight: number
}>`
  display: flex;
  flex-direction: column;
  padding: 4px 6px;
  width: ${({ cellWidth }) => `${cellWidth}px`};
  height: ${({ duration, cellHeight }) => `${duration * cellHeight - 4}px`};
  margin-bottom: 2px;
  margin-top: 2px;
  justify-content: center;
  background-color: ${({ theme, course_id, isHighlighted }) =>
    isHighlighted ? theme.colors.Highlight.default : colorMap[course_id % 15]};
  border-radius: 2px;
  overflow: hidden;
  overflow-wrap: break-word;
  gap: 1px;
  transition: box-shadow 0.1s ease-in-out;
  cursor: pointer;
`

const TitleWrapper = styled.span<{ isHighlighted: boolean }>`
  width: 100%;
  font-size: ${({ theme }) => theme.fonts.Small.fontSize}px;
  line-height: ${({ theme }) => `${theme.fonts.Small.lineHeight}px`};
  font-weight: ${({ theme }) => theme.fonts.Small.fontWeight};
  color: ${({ theme, isHighlighted }) =>
    isHighlighted ? "white" : theme.colors.Text.default};
  display: inline-block;
  word-wrap: break-word;
  word-break: keep-all;
  white-space: normal;
`

const DescWrapper = styled.span<{ isHighlighted: boolean }>`
  width: 100%;
  font-size: ${({ theme }) => theme.fonts.Small.fontSize}px;
  line-height: ${({ theme }) => `${theme.fonts.Small.lineHeight}px`};
  font-weight: ${({ theme }) => theme.fonts.Small.fontWeight};
  color: ${({ isHighlighted }) =>
    isHighlighted ? "rgba(255, 255, 255, 0.6)" : "rgba(102, 102, 102, 0.6)"};
  word-wrap: break-word;
  display: inline-block;
  word-break: break-word;
  white-space: normal;
`

const LectureTile: React.FC<{
  lecture: Lecture
  timeBlock: ClassTime
  cellWidth: number
  cellHeight: number
  isSelected?: boolean
  isHovered?: boolean
}> = ({
  lecture,
  timeBlock,
  cellWidth,
  cellHeight,
  isSelected = false,
  isHovered = false,
}) => {
  const isHighlighted = isSelected || isHovered

  return (
    <TileWrapper
      course_id={lecture.courseId}
      duration={(timeBlock.end - timeBlock.begin) / 30}
      cellWidth={cellWidth}
      isSelected={isSelected}
      isHighlighted={isHighlighted}
      cellHeight={cellHeight}
    >
      <TitleWrapper isHighlighted={isHighlighted}>{lecture.name}</TitleWrapper>
      <DescWrapper isHighlighted={isHighlighted}>
        {lecture.professors.map((prof) => prof.name).join(", ")}
      </DescWrapper>
      <DescWrapper isHighlighted={isHighlighted}>
        ({timeBlock.buildingCode}) {timeBlock.placeName}
      </DescWrapper>
    </TileWrapper>
  )
}

export default LectureTile
