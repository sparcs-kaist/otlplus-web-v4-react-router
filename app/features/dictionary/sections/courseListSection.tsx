import { useState } from "react"

import styled from "@emotion/styled"
import { Trans, useTranslation } from "react-i18next"

import FlexWrapper from "@/common/components/FlexWrapper"
import Icon from "@/common/components/Icon"
import ScrollableDropdown from "@/common/components/ScrollableDropdown"
import Typography from "@/common/components/Typography"
import type { CourseSearchResult } from "@/common/components/interface/CourseSearchResult"
import CourseSearchResults from "@/dummy/courseSearchResults"
import CourseBlock from "@/features/dictionary/components/CourseBlock"
import DictionarySearchArea from "@/features/dictionary/components/DictionarySearchArea"
import themes from "@/styles/themes"

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
  gap: 1px;
  font-size: ${({ theme }) => theme.fonts.Normal.fontSize}px;
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
  selectedCourseId: number | null
  setSelectedCourseId: React.Dispatch<React.SetStateAction<number | null>>
}

const CourseListSection: React.FC<CourseListSectionProps> = ({
  selectedCourseId,
  setSelectedCourseId,
}) => {
  const { t } = useTranslation()

  const [searchResult, setSearchResult] = useState<CourseSearchResult[] | null>(
    CourseSearchResults,
  )
  const [sortOption, setSortOption] = useState<number>(0)

  return (
    <CourseListSectionInner direction="column" gap={8}>
      <SearchSubSection>
        <DictionarySearchArea />
      </SearchSubSection>
      {searchResult ? (
        <>
          <CourseListHeader
            direction="row"
            gap={0}
            justify={"space-between"}
            align={"center"}
          >
            <HeaderText color={"Text.default"}>
              <Trans
                i18nKey="dictionary.courseCountInfo"
                count={searchResult.length}
                components={{
                  bold: (
                    <Typography
                      type={"NormalBold"}
                      style={{ marginLeft: "4px" }}
                      children={undefined}
                    />
                  ),
                  icon: (
                    <Icon
                      type={"Circle"}
                      size={12}
                      color={themes.light.colors.Highlight.default}
                    />
                  ),
                }}
              />
            </HeaderText>
            <SortWrapper direction="row" gap={8} align={"center"}>
              <Typography type={"NormalBold"} color={"Text.default"}>
                {t("dictionary.sort")}
              </Typography>
              <DropDownWrapper>
                <ScrollableDropdown
                  options={[
                    t("dictionary.sortOptions.code"),
                    t("dictionary.sortOptions.popularity"),
                    t("dictionary.sortOptions.enrollment"),
                  ]}
                  setSelectedOption={setSortOption}
                  selectedOption={sortOption}
                />
              </DropDownWrapper>
            </SortWrapper>
          </CourseListHeader>
          <CourseBlockWrapper direction="column" gap={12}>
            {searchResult.map((course) => (
              <CourseBlock
                key={course.id}
                course={course}
                isSelected={selectedCourseId == course.id}
                selectCourseId={setSelectedCourseId}
              />
            ))}
          </CourseBlockWrapper>
        </>
      ) : (
        <NoResultText type={"Bigger"} color={"Text.placeholder"}>
          {t("dictionary.noResults")}
        </NoResultText>
      )}
    </CourseListSectionInner>
  )
}

export default CourseListSection
