"use client"

import React, { useEffect } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import Chip from "@/common/components/search/Chip"

interface OptionChipGridProps {
  selectedAll: boolean
  nameList: Array<string>
  chosenList: Array<boolean>
  handleOptionClick?: (value: number) => void
  handleSelectAllClick?: () => void
}

const OptionChipWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  flex-wrap: wrap;
  overflow: hidden;
`
const OptionChipGrid: React.FC<OptionChipGridProps> = ({
  nameList,
  chosenList,
  handleOptionClick = () => {},
  handleSelectAllClick = () => {},
  selectedAll,
}) => {
  const { t } = useTranslation()

  useEffect(() => {
    if (!chosenList.includes(false)) {
      handleSelectAllClick()
    }
  }, [chosenList, handleSelectAllClick])

  return (
    <OptionChipWrapper>
      <Chip
        selected={selectedAll}
        chipText={t("common.search.all")}
        onClick={handleSelectAllClick}
      />
      {nameList.map((value, idx) => (
        <Chip
          key={idx}
          selected={chosenList[idx]}
          chipText={`${nameList[idx]}`}
          onClick={() => {
            handleOptionClick(idx)
          }}
        />
      ))}
    </OptionChipWrapper>
  )
}

export default OptionChipGrid
