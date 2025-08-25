import styled from "@emotion/styled"
import DictionarySearchArea from "@/features/dictionary/components/DictionarySearchArea"
import { useState } from "react"
import type { CourseSearchResult } from "@/common/components/interface/CourseSearchResult"
import Typography from "@/common/components/Typography"
import FlexWrapper from "@/common/components/FlexWrapper"
import CourseSearchResults from "@/dummy/courseSearchResults"
import Icon from "@/common/components/Icon"
import themes from "@/styles/themes"
import ScrollableDropdown from "@/common/components/ScrollableDropdown"
import CourseBlock from "@/features/dictionary/components/CourseBlock"

const CourseListSectionInner = styled(FlexWrapper)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const SearchSubSection = styled.div`
  border-radius: 6px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.Line.divider};
`

const NoResultText = styled(Typography)`
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CourseListHeader = styled(FlexWrapper)`
  width: 100%;
`

const HeaderText = styled(Typography)`
  display: flex;
  align-items: center;
`

const SortWrapper = styled(FlexWrapper)`
  width: 30%;
  white-space: nowrap;
`

const DropDownWrapper = styled.div`
  flex-grow: 1;
  height: 36px;
`

const CourseBlockWrapper = styled(FlexWrapper)`
  flex-grow: 1;
  overflow-y: auto;
  
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

interface CourseListSectionProps {
  selectedCourseId: number | null;
  setSelectedCourseId: React.Dispatch<React.SetStateAction<number | null>>;
}

const CourseListSection: React.FC<CourseListSectionProps> = ({ selectedCourseId, setSelectedCourseId }) => {
  const [searchResult, setSearchResult] = useState<CourseSearchResult[] | null>(CourseSearchResults);
  const [sortOption, setSortOption] = useState<number>(0);

  return (
    <CourseListSectionInner direction="column" gap={8}>
      <SearchSubSection>
        <DictionarySearchArea/>
      </SearchSubSection>
      {searchResult ? <>
        <CourseListHeader direction="row" gap={0} justify={"space-between"} align={"center"}>
          <HeaderText color={"Text.default"}>
            총 <Typography type={"NormalBold"}>{searchResult.length}</Typography>개 과목 (<Icon type={"Circle"} size={12} color={themes.light.colors.Highlight.default}/>: 이번 학기 개설)
          </HeaderText>
          <SortWrapper direction="row" gap={8} align={"center"}>
            <Typography type={"NormalBold"} color={"Text.default"}>정렬</Typography>
            <DropDownWrapper>
              <ScrollableDropdown options={["과목코드순", "인기순", "수강자 많은 순"]} setSelectedOption={setSortOption} selectedOption={sortOption}/>
            </DropDownWrapper>
          </SortWrapper>
        </CourseListHeader>
        <CourseBlockWrapper direction="column" gap={12}>
          {searchResult.map((course) => (
            <CourseBlock course={course} isSelected={selectedCourseId == course.id} selectCourseId={setSelectedCourseId}/>
          ))}
        </CourseBlockWrapper>
      </> : <NoResultText type={"Bigger"} color={"Text.placeholder"}>결과 없음</NoResultText>}
    </CourseListSectionInner>
  );
}

export default CourseListSection;