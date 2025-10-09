import styled from "@emotion/styled"

import SearchArea, { type SearchParamsType } from "@/common/components/search/SearchArea"
import FlexWrapper from "@/common/primitives/FlexWrapper"

const SearchSectionInner = styled(FlexWrapper)`
    width: 645px;
    border: 2px solid ${({ theme }) => theme.colors.Highlight.default};
    border-radius: 32px;
    background: ${({ theme }) => theme.colors.Background.Section.default};
    transition: all 0.3s ease-in-out;
`

const SearchImg = styled.img<{ src: string }>`
    height: 40px;
    background: transparent;
`

function SearchSection() {
    return (
        <SearchSectionInner direction="column" align="stretch" gap={0} padding="8px 8px">
            <SearchArea
                options={["type", "department", "level", "term"]}
                onSearch={(params: SearchParamsType) => {
                    alert(JSON.stringify(params))
                }}
                SearchIcon={<SearchImg src="/searchIcon.png" alt="search" />}
            />
        </SearchSectionInner>
    )
}

export default SearchSection
