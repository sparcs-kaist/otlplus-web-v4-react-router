import type { Dispatch, SetStateAction } from "react"
import { useEffect, useRef, useState } from "react"

import styled from "@emotion/styled"
import SearchIcon from "@mui/icons-material/Search"
import { useTranslation } from "react-i18next"

import Button from "@/common/components/Button"
import FlexWrapper from "@/common/components/FlexWrapper"
import Icon from "@/common/components/Icon"
import Typography from "@/common/components/Typography"
import TextInput from "@/common/components/search/TextInput"
import OptionChipGrid from "@/common/components/utils/search/generateChips"
import { getDepartmentOptions, getLevelOptions, getTermOptions, getTypeOptions, } from "@/common/searchOptions"
import themes from "@/styles/themes"

export type OptionProps = {
  nameList: string[]
  selectedList: boolean[]
  setSelectedList: Dispatch<SetStateAction<boolean[]>>
}

const SearchInputAreaWrapper = styled.div`
  width: 100%;
`

const PageWrapper = styled.div`
  width: 100%;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
`

const ButtonArea = styled.div`
  display: inline-flex;
  width: 100%;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: flex-end;
  gap: 6px;
`

const OptionAreaWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
  font-size: 10px;
  line-height: 12.5px;
  font-weight: 700;
`

const CustomTextInput = styled(TextInput)`
  width: 100%;
  border: 0;
  background: transparent;
  font-size: 16px !important;
  &::placeholder {
    color: ${({ theme }) => theme.colors.Highlight.default};
  }
`

const SearchAreaWrapperInner = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : 0)};
  display: flex;
  gap: 12px;
  overflow: hidden;
  flex-direction: column;
  transition: max-height 0.3s ease-in-out;
`

const DictionarySearchArea: React.FC = () => {
  const { t } = useTranslation()

  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>("")
  const inputRef = useRef<HTMLInputElement | null>(null)

  const gradeList = getLevelOptions()
  const [gradeSelect, setGrade] = useState<boolean[]>(Array(gradeList.length).fill(false))

  const divisionList = getTypeOptions()
  const [divisionSelect, setDivison] = useState<boolean[]>(
    Array(divisionList.length).fill(false),
  )

  const departmentList = getDepartmentOptions()
  const [majorSelect, setMajor] = useState<boolean[]>(
    Array(departmentList.length).fill(false),
  )

  const termList = getTermOptions()
  const [termSelect, setTerm] = useState<boolean[]>(Array(termList.length).fill(false))

  const OptionMap: Map<string, OptionProps> = new Map([
    [
      t("common.class"),
      {
        nameList: divisionList.map((item) => item[1]),
        selectedList: divisionSelect,
        setSelectedList: setDivison,
      },
    ],
    [
      t("common.search.grade"),
      {
        nameList: gradeList.map((item) => item[1]),
        selectedList: gradeSelect,
        setSelectedList: setGrade,
      },
    ],
    [
      t("common.search.department"),
      {
        nameList: departmentList.map((item) => item[1]),
        selectedList: majorSelect,
        setSelectedList: setMajor,
      },
    ],
    [
      t("common.search.term"),
      {
        nameList: termList.map((item) => item[1]),
        selectedList: termSelect,
        setSelectedList: setTerm,
      },
    ],
  ])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) {
      // 한글 입력 중이면 Enter 이벤트 무시
      return
    }
  }

  const handleOptionClick = (
    idx: number,
    targetList: boolean[],
    setList: Dispatch<SetStateAction<boolean[]>>,
  ) => {
    const updatedList = [...targetList]
    updatedList[idx] = !targetList[idx]
    setList(updatedList)
  }

  const handleSelectAll = (
    targetList: boolean[],
    setList: Dispatch<SetStateAction<boolean[]>>,
  ) => {
    setList(Array(targetList.length).fill(false))
  }

  const handleReset = () => {
    setValue("")
    setOpen(false)
    handleSelectAll(divisionSelect, setDivison)
    handleSelectAll(majorSelect, setMajor)
    handleSelectAll(gradeSelect, setGrade)
    handleSelectAll(termSelect, setTerm)
  }

  const handleSubmit = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    } else {
      if (!open && inputRef.current) {
        inputRef.current.blur()
      }
    }
  }, [open])

  return (
    <PageWrapper>
      {/* 위쪽 검색어 입력 부분 */}
      <SearchInputAreaWrapper
        onClick={() => {
          if (!open) {
            setOpen(true)
          }
        }}
      >
        <FlexWrapper direction="row" gap={0} align="center">
          <Icon size={20} color={themes.light.colors.Highlight.default}>
            <SearchIcon />
          </Icon>
          <CustomTextInput
            ref={inputRef}
            value={value}
            placeholder={open ? "" : t("common.search.search")}
            handleChange={(newValue) => {
              setValue(newValue)
            }}
            onKeyDown={handleKeyDown}
          />
        </FlexWrapper>
      </SearchInputAreaWrapper>

      <SearchAreaWrapperInner isOpen={open}>
        <div
          style={{
            width: "100%",
            minHeight: "4px",
            display: "block",
          }}
        >
          {" "}
        </div>
        {[...OptionMap.entries()].map(([key, value]) => (
          <OptionAreaWrapper key={key}>
            <Typography type={"NormalBold"}>{key}</Typography>
            <OptionChipGrid
              nameList={value.nameList}
              chosenList={value.selectedList}
              handleOptionClick={(idx: number) => {
                handleOptionClick(idx, value.selectedList, value.setSelectedList)
              }}
              handleSelectAllClick={() => {
                handleSelectAll(value.selectedList, value.setSelectedList)
              }}
              selectedAll={!value.selectedList.includes(true)}
            />
          </OptionAreaWrapper>
        ))}
        <ButtonArea>
          <Button $paddingLeft={24} $paddingTop={8} onClick={handleReset}>
            {t("common.cancel")}
          </Button>
          <Button
            type="selected"
            $paddingLeft={24}
            $paddingTop={8}
            onClick={handleSubmit}
          >
            {t("common.search.search")}
          </Button>
        </ButtonArea>
        <div style={{ width: "100%", minHeight: "8px", display: "block" }}></div>
      </SearchAreaWrapperInner>
    </PageWrapper>
  )
}

export default DictionarySearchArea
