import { type Dispatch, type SetStateAction } from "react"

import { type Theme, css } from "@emotion/react"
import styled from "@emotion/styled"
import {
  EditOutlined,
  EmojiEventsOutlined,
  FavoriteBorderOutlined,
  WhatshotOutlined,
} from "@mui/icons-material"

import { type TabType, TabTypes } from "@/common/interface/ReviewWriteTabs"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"

interface tabsSubSectionType {
  tab: TabType
  setTab: Dispatch<SetStateAction<TabType>>
}

const Icons = [
  EditOutlined,
  WhatshotOutlined,
  EmojiEventsOutlined,
  FavoriteBorderOutlined,
]

const TabSelectedStyle = ({ theme }: { theme: Theme }) => css`
  background: ${theme.colors.Background.Section.default};
  color: ${theme.colors.Highlight.default};
`

const Tab = styled(FlexWrapper)<{ selected: boolean }>`
  background: ${({ theme }) => theme.colors.Background.Tab.dark};
  color: ${({ theme }) => theme.colors.Text.lighter};
  border-radius: 12px 12px 0 0;
  cursor: pointer;
  ${({ selected, theme }) => selected && TabSelectedStyle({ theme })}
`

function TabsSubSection({ tab, setTab }: tabsSubSectionType) {
  return (
    <FlexWrapper direction="row" gap={6}>
      {TabTypes.map((tabType, idx) => {
        const ThisIcon = Icons[idx]

        return (
          <Tab
            key={tabType}
            direction="row"
            align="center"
            gap={6}
            padding="8px 12px"
            selected={tab == tabType}
            onClick={() => setTab(tabType)}
          >
            <Icon size={12}>
              <ThisIcon />
            </Icon>
            <Typography type="Normal">{tabType}</Typography>
          </Tab>
        )
      })}
    </FlexWrapper>
  )
}

export default TabsSubSection
