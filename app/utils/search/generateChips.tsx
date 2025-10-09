import React, { useEffect } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import Chip from "@/common/components/search/Chip"

interface OptionChipGridProps {
    selectedAll: boolean
    nameList: string[]
    chosenList: boolean[] | number | null
    handleOptionClick?: (value: number) => void
    handleSelectAllClick?: () => void
    isSingleSelect: boolean
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
    isSingleSelect,
}) => {
    const { t } = useTranslation()

    useEffect(() => {
        if (!isSingleSelect && !(chosenList as boolean[]).includes(false))
            handleSelectAllClick()
    }, [chosenList])

    return (
        <OptionChipWrapper>
            <Chip
                selected={selectedAll}
                chipText={t("common.search.all")}
                onClick={handleSelectAllClick}
            />
            {nameList.map((value, idx: number) => (
                <Chip
                    key={idx}
                    selected={
                        isSingleSelect
                            ? (chosenList as number) == idx
                            : (chosenList as boolean[])[idx]
                    }
                    chipText={`${t(value)}`}
                    onClick={() => {
                        handleOptionClick(idx)
                    }}
                />
            ))}
        </OptionChipWrapper>
    )
}

export default OptionChipGrid
