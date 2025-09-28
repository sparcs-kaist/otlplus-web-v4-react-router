import React, { useEffect, useRef, useState } from "react"

import styled from "@emotion/styled"
import CloseIcon from "@mui/icons-material/Close"
import SearchIcon from "@mui/icons-material/Search"
import { useTranslation } from "react-i18next"

import { Departments, DepartmentsEN } from "@/api/example/Departments"
import StyledDivider from "@/common/components/StyledDivider"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Department } from "@/common/schemas/department"

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
  currentDepartment: Department[]
  setCurrentDepartment: React.Dispatch<React.SetStateAction<Department[]>>
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
    const DepartmentList = i18n.language === "en" ? DepartmentsEN : Departments
    const department = DepartmentList.find((dept) => dept.id === id)
    return department ? department.name : undefined
  }

  const addDepartment = (department: Department) => {
    if (!currentDepartment.map((dept) => dept.id).includes(department.id)) {
      setCurrentDepartment([...currentDepartment, department])
    }
    setInputValue("")
  }

  const removeDepartment = (id: number) => {
    setCurrentDepartment(currentDepartment.filter((dept) => dept.id !== id))
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
    const DepartmentList = i18n.language === "en" ? DepartmentsEN : Departments
    const filtered = (DepartmentList as Department[]).filter((dept) => {
      const isNotSelected = !currentDepartment.map((dept) => dept.id).includes(dept.id)
      if (!dept.name) return false
      const matchesSearch =
        inputValue.trim() === ""
          ? true
          : dept.name?.toLowerCase().includes(inputValue.toLowerCase())
      return isNotSelected && matchesSearch
    })
    setSearchResult(filtered)
  }, [inputValue, currentDepartment])

  return (
    <DepartmentSearchAreaInner direction={"column"} gap={12}>
      <SearchContainer direction={"row"} gap={8} align={"center"}>
        <SearchIconWrapper>
          <Icon size={18}>
            <SearchIcon />
          </Icon>
        </SearchIconWrapper>
        <TagList
          onClick={() => {
            searchInput.current?.focus()
          }}
          direction={"row"}
          gap={8}
          align="center"
        >
          {currentDepartment.map((department, index) => (
            <TagItem key={index} direction={"row"} gap={8} align="center">
              {findDepartmentNameById(department.id)}
              <Icon
                size={16}
                onClick={(e) => {
                  e.stopPropagation()
                  removeDepartment(department.id)
                }}
              >
                <CloseIcon />
              </Icon>
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
            onClick={() => addDepartment(result)}
          >
            {result.name} ({result.code})
          </SearchResultText>
        ))}
      </SearchResultWrapper>
    </DepartmentSearchAreaInner>
  )
}

export default DepartmentSearchArea
