import { useState } from "react"

import styled from "@emotion/styled"
import { Trans, useTranslation } from "react-i18next"

import exampleLectures from "@/api/example/Lectures"
import type { GETUserInfoResponse } from "@/api/users/$userId/info"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimeBlock } from "@/common/schemas/timeblock"

import CustomTimeTableGrid from "../../components/CustomTimeTableGrid"
import Widget from "../../components/Widget"

const TimeTableInner = styled(FlexWrapper)`
  flex-grow: 1;
  width: 100%;
`

interface TimeTableSectionProps {
  user: GETUserInfoResponse
}

const TimeTableSection = ({ user }: TimeTableSectionProps) => {
  const [selected, setSelected] = useState<Lecture | null>(null)
  const [hover, setHover] = useState<Lecture | null>(null)
  const [timeFilter, setTimeFilter] = useState<TimeBlock | null>(null)

  const [selectedOption, setSelectedOption] = useState<number>(0)

  const [lectureSummary, setLectureSummary] = useState<Lecture[]>(exampleLectures)

  const { t } = useTranslation()

  return (
    <Widget width={856} direction="column" gap={0} padding="30px">
      <TimeTableInner direction="column" align="stretch" gap={16}>
        <FlexWrapper direction="row" justify="space-between" align="center" gap={0}>
          <FlexWrapper direction="row" gap={0}>
            <Trans
              i18nKey="main.hisTimeTable"
              values={{ name: user.name }}
              components={{
                name: (
                  <Typography
                    type="BiggerBold"
                    color="Highlight.default"
                    children={undefined}
                  />
                ),
                normal: (
                  <Typography type="BiggerBold" color="Text.dark" children={undefined} />
                ),
              }}
            />
          </FlexWrapper>
        </FlexWrapper>
        <CustomTimeTableGrid
          cellWidth={150}
          lectureSummary={lectureSummary || []}
          setTimeFilter={setTimeFilter}
          hover={hover}
          setHover={setHover}
          selected={selected}
          setSelected={setSelected}
        />
      </TimeTableInner>
    </Widget>
  )
}

export default TimeTableSection
