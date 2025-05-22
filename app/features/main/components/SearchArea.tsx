/* eslint-disable no-console */
import { useEffect, useRef, useState } from "react"
import type { Dispatch, SetStateAction } from "react"

import styled from "@emotion/styled"

import Button from "@/common/components/Button"
import FlexWrapper from "@/common/components/FlexWrapper"
import Icon from "@/common/components/Icon"
import type TimeBlock from "@/common/components/interface/Timeblock"
import TextInput from "@/common/components/search/TextInput"
import { formatTimeAreaToString } from "@/common/components/utils/formatTimeblockToString"
import OptionChipGrid from "@/common/components/utils/search/generateChips"

export type OptionProps = {
  nameList: string[]
  selectedList: boolean[]
  setSelectedList: Dispatch<SetStateAction<boolean[]>>
}

interface SearchAreaProps {
  timeFilter: TimeBlock | null
  setTimeFilter: React.Dispatch<React.SetStateAction<TimeBlock | null>>
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

const TimeFilterArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 24px 12px 24px;
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
  gap: 6px;
  font-size: 10px;
  line-height: 12.5px;
  font-weight: 700;
`

const SearchParamWrapper = styled.div`
  display: "inline-block";
  flex-shrink: 1;
  flex-direction: column;
  padding-left: 36px;
  line-height: 17.5px;
  overflow: hidden;
  white-space: normal;
  word-break: keep-all;
`

const CustomTextInput = styled(TextInput)`
  width: 100%;
  border: 0;
  background: transparent;
  font-size: 16px !important;
`

const SearchImg = styled.img<{ src: string }>`
  height: 40px;
  background: transparent;
`

const SearchAreaWrapperInner = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : 0)};
  display: flex;
  gap: 12px;
  overflow: hidden;
  flex-direction: column;
  transition: max-height 0.3s ease-in-out;
`

const SearchArea: React.FC<SearchAreaProps> = ({ timeFilter, setTimeFilter }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>("")
  const inputRef = useRef<HTMLInputElement | null>(null)

  const gradeList = ["100번대", "200번대", "300번대", "400번대"]
  const [gradeSelect, setGrade] = useState<boolean[]>(Array(gradeList.length).fill(false))

  const divisionList = [
    "기필",
    "기선",
    "전필",
    "전선",
    "교필",
    "인선",
    "공통",
    "석박",
    "자선",
    "기타",
  ]
  const [divisionSelect, setDivison] = useState<boolean[]>(
    Array(divisionList.length).fill(false),
  )

  const majorList = [
    "인문",
    "건환",
    "기경",
    "기계",
    "뇌인지",
    "물리",
    "바공",
    "반시공",
    "상공",
    "산디",
    "생명",
    "생화공",
    "수리",
    "신소재",
    "원양",
    "융인",
    "전산",
    "전자",
    "항공",
    "화학",
    "기타",
  ]
  const [majorSelect, setMajor] = useState<boolean[]>(Array(majorList.length).fill(false))

  const termList = ["3년이내", "1년이내", "이번 학기"]
  const [termSelect, setTerm] = useState<boolean[]>(Array(termList.length).fill(false))

  const OptionMap: Map<string, OptionProps> = new Map([
    [
      "분류",
      {
        nameList: divisionList,
        selectedList: divisionSelect,
        setSelectedList: setDivison,
      },
    ],
    [
      "학년",
      { nameList: gradeList, selectedList: gradeSelect, setSelectedList: setGrade },
    ],
    [
      "학과",
      { nameList: majorList, selectedList: majorSelect, setSelectedList: setMajor },
    ],
    ["기간", { nameList: termList, selectedList: termSelect, setSelectedList: setTerm }],
  ])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) {
      // 한글 입력 중이면 Enter 이벤트 무시
      return
    }

    if (event.key === "Enter") {
      handleSubmit()
      console.log("입력된 값:", value)
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
    setTimeFilter(null)
  }

  const handleSubmit = () => {
    console.log("필터 결과")
    divisionSelect.map((val, index) => {
      if (val == true) {
        console.log(divisionList[index])
      }
    })
    majorSelect.map((val, index) => {
      if (val == true) {
        console.log(majorList[index])
      }
    })
    gradeSelect.map((val, index) => {
      if (val == true) {
        console.log(gradeList[index])
      }
    })
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

  function getOptionList(key: string) {
    let res: string = ""
    const option = OptionMap.get(key)!

    option.selectedList.forEach((val, idx) => {
      if (val) {
        res += `${option.nameList[idx]} `
      }
    })

    if (res.endsWith(" ")) {
      res = res.slice(0, -1)
    }

    if (res.length <= 0) {
      return res
    }

    return `(${key} : ${res})`
  }

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
        <FlexWrapper direction="row" gap={12} align="center">
          <SearchImg src="/searchIcon.png" alt="search" />
          <CustomTextInput
            ref={inputRef}
            value={value}
            placeholder={open ? "" : "과목명, 교수명 등을 검색해보세요"}
            handleChange={(newValue) => {
              setValue(newValue)
            }}
            onKeyDown={handleKeyDown}
          />
        </FlexWrapper>
        <SearchParamWrapper>
          <span
            style={{
              color: "#555555",
              fontSize: "12px",
              lineHeight: "15px",
            }}
          >
            {`${getOptionList("분류")} ${getOptionList("학과")} ${getOptionList("학년")} ${
              timeFilter ? `(${formatTimeAreaToString(timeFilter)})` : ""
            }`}
          </span>
        </SearchParamWrapper>
      </SearchInputAreaWrapper>

      <SearchAreaWrapperInner isOpen={open}>
        <div
          style={{
            width: "100%",
            minHeight: "8px",
            display: "block",
          }}
        >
          {" "}
        </div>
        {[...OptionMap.entries()].map(([key, value]) => (
          <OptionAreaWrapper key={key}>
            {key}
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
            취소
          </Button>
          <Button
            type="selected"
            $paddingLeft={24}
            $paddingTop={8}
            onClick={handleSubmit}
          >
            검색
          </Button>
        </ButtonArea>
      </SearchAreaWrapperInner>
    </PageWrapper>
  )
}

export default SearchArea
