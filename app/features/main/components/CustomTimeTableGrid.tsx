import React, { useEffect, useLayoutEffect, useRef, useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimeBlock } from "@/common/schemas/timeblock"
import { checkAnyOver24 } from "@/utils/timetable/checkAnyOver24"
import renderGrid from "@/utils/timetable/renderGrid"
import renderLectureTile from "@/utils/timetable/renderLectureTile"
import renderTargetArea from "@/utils/timetable/renderTargetArea"

interface GridProps {
  cellWidth?: number
  lectureSummary: Lecture[]
  setTimeFilter: React.Dispatch<React.SetStateAction<TimeBlock | null>>
  hover: Lecture | null
  setHover: React.Dispatch<React.SetStateAction<Lecture | null>>
  selected: Lecture | null
  setSelected: React.Dispatch<React.SetStateAction<Lecture | null>>
}

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  height: fit-content;
`

const TimeWrapper = styled.div<{ cellHeight: number }>`
  padding-top: 15px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  gap: ${({ cellHeight }) => `${cellHeight * 2 - 11}px`};
  font-size: 8px;
  line-height: 11px;
`

const DateWrapper = styled.div<{ width: number }>`
  width: ${(props) => `${props.width}px`};
  align-items: center;
  font-size: 12px;
  line-height: 15px;
  padding-bottom: 5px;
  text-align: center;
`

const CustomTimeTableGrid: React.FC<GridProps> = ({
  cellWidth = 120,
  lectureSummary,
  setTimeFilter,
  hover,
  setHover,
  selected,
  setSelected,
}) => {
  const { t } = useTranslation()

  const colPadding = 5
  const m = 5
  const begin = 8
  const gridRef = useRef<HTMLDivElement>(null)
  const dateHeader = [
    t("common.days.monday"),
    t("common.days.tuesday"),
    t("common.days.wednesday"),
    t("common.days.thursday"),
    t("common.days.friday"),
  ]
  const isAnyOver24 = checkAnyOver24(lectureSummary)
  const n = isAnyOver24 ? 38 : 32
  const end = isAnyOver24 ? 27 : 24
  const [cellHeight, setCellHeight] = useState(isAnyOver24 ? 22 : 25)

  // 전체 셀 크기를 반응형으로 조정하는 부분
  useEffect(() => {
    const handleResize = () => {
      const fullHeight = 926.5
      setCellHeight(fullHeight / 32)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const [dragging, setDragging] = useState<boolean>(false)
  const [startRow, setStartRow] = useState<number | null>(null)
  const [lastRow, setLastRow] = useState<number | null>(null)
  const [col, setCol] = useState<number | null>(null)
  const [holding, setHolding] = useState<boolean>(false)

  const [draggingArea, setDraggingArea] = useState<Map<number, boolean[]>>(
    new Map(Array.from({ length: m }, (_, rowIndex) => [rowIndex, Array(n).fill(null)])),
  )

  const getArea = (
    startRow: number,
    endRow: number,
    col: number,
  ): Map<number, boolean[]> => {
    const result = new Map(
      Array.from({ length: m }, (_, rowIndex) => [rowIndex, Array(n).fill(null)]),
    )
    for (let j = startRow; j < endRow + 1; j++) {
      result.get(col)![j] = true
    }

    return result
  }

  useLayoutEffect(() => {
    if (gridRef.current && dragging && !holding) {
      const _startRow = Math.min(startRow!, lastRow!)
      const _endRow = Math.max(startRow!, lastRow!)
      const targetArea = getArea(_startRow, _endRow, col!)
      setDraggingArea(targetArea)
    }
  }, [lastRow, startRow])

  return (
    <SectionWrapper>
      <TimeWrapper cellHeight={cellHeight}>
        {Array.from({ length: end - begin + 1 }, (_, index) => index + begin).map(
          (number) => (
            <div key={number}>{number % 12 || 12}</div>
          ),
        )}
      </TimeWrapper>
      <FlexWrapper direction="column" gap={0}>
        <FlexWrapper direction="row" gap={5}>
          {dateHeader.map(
            (date, index) =>
              date !== "none" && (
                <DateWrapper key={index} width={date === "" ? 10 : cellWidth}>
                  {date}
                </DateWrapper>
              ),
          )}
        </FlexWrapper>
        <div
          ref={gridRef}
          style={{
            display: "inline-block",
            position: "relative",
            userSelect: "none",
          }}
          onClick={() => {
            setSelected(null)
          }}
        >
          {renderGrid(n, m, cellWidth, cellHeight, colPadding, [], 10, 0)}
          {renderTargetArea(
            true,
            draggingArea,
            "rgba(229, 76, 101, 0.5)",
            cellHeight,
            cellWidth,
            2,
            colPadding,
            [],
            0,
            0,
          )}
          {renderLectureTile(
            lectureSummary,
            cellWidth,
            cellHeight,
            colPadding,
            selected,
            setSelected,
            hover,
            setHover,
            holding,
            setHolding,
            dragging,
          )}
        </div>
      </FlexWrapper>
    </SectionWrapper>
  )
}

export default CustomTimeTableGrid
