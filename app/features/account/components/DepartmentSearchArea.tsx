import React, { useEffect, useRef, useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/components/FlexWrapper"
import Icon from "@/common/components/Icon"
import StyledDivider from "@/common/components/StyledDivider"
import Typography from "@/common/components/Typography"
import type Department from "@/common/components/interface/Departmet"
import DepartmentList from "@/dummy/departments.json"

const DepartmentSearchAreaInner = styled(FlexWrapper)`
  width: 630px;
  min-height: 316px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.Line.divider};
  padding: 14px 4px 0 12px;
`

const SearchContainer = styled(FlexWrapper)`
  border-radius: 8px;
  width: 100%;
`

const SearchIconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.Highlight.default};
  cursor: none;
`

const TagList = styled(FlexWrapper)`
  flex-grow: 1;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.Text.default};
  font-size: ${({ theme }) => theme.fonts.Normal.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Normal.fontWeight};
  max-height: 100px;
  overflow-y: auto;

  scrollbar-width: none;
`

const TagItem = styled(FlexWrapper)`
  background-color: ${({ theme }) => theme.colors.Background.Block.default};
  border-radius: 6px;
  padding: 8px 10px;
  white-space: nowrap;
`

const SearchInput = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  min-width: 150px;
`

const SearchResultWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  height: 248px;

  scrollbar-width: none;
`

const SearchResultText = styled(Typography)`
  padding: 8px 10px;
  cursor: pointer;
  height: 32px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.Background.Block.default};
  }
`

interface DepartmentSearchAreaProps {
  currentDepartment: number[]
  setCurrentDepartment: React.Dispatch<React.SetStateAction<number[]>>
}

const DepartmentSearchArea: React.FC<DepartmentSearchAreaProps> = ({
  currentDepartment,
  setCurrentDepartment,
}) => {
  const { t, i18n } = useTranslation()

  const [inputValue, setInputValue] = useState("")
  const [searchResult, setSearchResult] = useState<Department[]>([])

  const searchInput = useRef<HTMLInputElement | null>(null)

  function findDepartmentNameById(id: number): string | undefined {
    const department = DepartmentList.find((dept) => dept.id === id)
    return department
      ? i18n.language === "en"
        ? department.name_en
        : department.name
      : undefined
  }

  const addDepartment = (id: number) => {
    if (!currentDepartment.includes(id)) {
      setCurrentDepartment([...currentDepartment, id])
    }
    setInputValue("")
  }

  const removeDepartment = (id: number) => {
    setCurrentDepartment(currentDepartment.filter((deptId) => deptId !== id))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
    } else if (
      e.key === "Backspace" &&
      inputValue === "" &&
      currentDepartment.length > 0
    ) {
      setCurrentDepartment(currentDepartment.slice(0, -1))
    }
  }

  useEffect(() => {
    const filtered = (DepartmentList as Department[]).filter((dept) => {
      const isNotSelected = !currentDepartment.includes(dept.id)
      const matchesSearch =
        inputValue.trim() === ""
          ? true
          : dept.name.toLowerCase().includes(inputValue.toLowerCase())
      return isNotSelected && matchesSearch
    })
    setSearchResult(filtered)
  }, [inputValue, currentDepartment])

  return (
    <DepartmentSearchAreaInner direction={"column"} gap={12}>
      <SearchContainer direction={"row"} gap={8} align={"center"}>
        <SearchIconWrapper>
          <Icon type="Search" size={18} />
        </SearchIconWrapper>
        <TagList
          onClick={() => {
            searchInput.current?.focus()
          }}
          direction={"row"}
          gap={8}
          align="center"
        >
          {currentDepartment.map((id, index) => (
            <TagItem key={index} direction={"row"} gap={8} align="center">
              {findDepartmentNameById(id)}
              <Icon
                type="Close"
                size={16}
                onClick={(e) => {
                  e.stopPropagation()
                  removeDepartment(id)
                }}
              />
            </TagItem>
          ))}
          <SearchInput
            ref={searchInput}
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
            onKeyDown={handleKeyDown}
            placeholder={
              currentDepartment.length === 0 ? t("common.search.placeholder") : ""
            }
          />
        </TagList>
      </SearchContainer>
      <StyledDivider />
      <SearchResultWrapper>
        {searchResult.map((result) => (
          <SearchResultText
            key={result.id}
            type="Normal"
            color="Text.default"
            onClick={() => addDepartment(result.id)}
          >
            {i18n.language === "en" ? result.name_en : result.name} ({result.code})
          </SearchResultText>
        ))}
      </SearchResultWrapper>
    </DepartmentSearchAreaInner>
  )
}

export default DepartmentSearchArea
