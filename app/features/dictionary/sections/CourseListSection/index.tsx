import { useState } from "react"

import styled from "@emotion/styled"
import CircleIcon from "@mui/icons-material/Circle"
import { Trans, useTranslation } from "react-i18next"

import { type GETCoursesResponse } from "@/api/courses"
import exampleCourseSearchResults from "@/api/example/CourseSearchResults"
import ScrollableDropdown from "@/common/components/ScrollableDropdown"
import SearchArea, { type SearchParamsType } from "@/common/components/search/SearchArea"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import CourseBlock from "@/features/dictionary/components/CourseBlock"
import themes from "@/styles/themes"

const CourseListSectionInner = styled(FlexWrapper)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const SearchSubSection = styled.div`
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.Line.divider};
`

const NoResultText = styled(Typography)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const HeaderText = styled(Typography)`
    display: flex;
    align-items: center;
    gap: 1px;
    font-size: ${({ theme }) => theme.fonts.Normal.fontSize}px;
`

const SortWrapper = styled(FlexWrapper)`
    width: 35%;
    white-space: nowrap;
`

const DropDownWrapper = styled(FlexWrapper)`
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

    const [searchResult, setSearchResult] = useState<GETCoursesResponse | null>(
        exampleCourseSearchResults,
    )
    const [sortOption, setSortOption] = useState<number>(0)

    return (
        <CourseListSectionInner
            direction="column"
            justify="stretch"
            align="stretch"
            gap={8}
        >
            <SearchSubSection>
                <SearchArea
                    options={["type", "department", "level", "term"]}
                    onSearch={(params: SearchParamsType) => {
                        alert(JSON.stringify(params))
                    }}
                />
            </SearchSubSection>
            {searchResult ? (
                <>
                    <FlexWrapper
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
                                            children={undefined}
                                        />
                                    ),
                                    icon: (
                                        <Icon
                                            size={12}
                                            color={themes.light.colors.Highlight.default}
                                        >
                                            <CircleIcon />
                                        </Icon>
                                    ),
                                    space: <>&nbsp;</>,
                                }}
                            />
                        </HeaderText>
                        <SortWrapper direction="row" gap={8} align={"center"}>
                            <Typography type={"NormalBold"} color={"Text.default"}>
                                {t("dictionary.sort")}
                            </Typography>
                            <DropDownWrapper direction="row" gap={0}>
                                <ScrollableDropdown
                                    options={[
                                        t("dictionary.sortOptions.code"),
                                        t("dictionary.sortOptions.popularity"),
                                        t("dictionary.sortOptions.studentCount"),
                                    ]}
                                    setSelectedOption={setSortOption}
                                    selectedOption={sortOption}
                                />
                            </DropDownWrapper>
                        </SortWrapper>
                    </FlexWrapper>
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
                <FlexWrapper direction="column" gap={0} justify="stretch" align="center">
                    <Typography type={"Bigger"} color={"Text.placeholder"}>
                        {t("dictionary.noResults")}
                    </Typography>
                </FlexWrapper>
            )}
        </CourseListSectionInner>
    )
}

export default CourseListSection
