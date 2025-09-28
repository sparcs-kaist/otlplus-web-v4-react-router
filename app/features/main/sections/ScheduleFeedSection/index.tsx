import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import type { GETSchedulesResponse } from "@/api/schedules"
import Line from "@/common/components/Line"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

import Widget from "../../components/Widget"

const UniformWidget = styled(Widget)`
  flex: 1 1 0;
`

interface ScheduleFeedSectionProps {
  schedules: GETSchedulesResponse
}

function ScheduleFeedSection({ schedules }: ScheduleFeedSectionProps) {
  const { t } = useTranslation()

  return (
    <UniformWidget direction="column" gap={20} align="stretch" padding="30px">
      <FlexWrapper direction="row" gap={0}>
        <Typography type="BiggerBold">{t("main.scheduleFeed.title")}</Typography>
      </FlexWrapper>
      <FlexWrapper direction="column" align="stretch" gap={15}>
        {schedules.map((schedule, idx) => (
          <FlexWrapper key={idx} direction="column" align="stretch" gap={15}>
            <FlexWrapper direction="row" justify="space-between" gap={0}>
              <Typography type="BigBold" color="Highlight.default">
                {schedule.from.getMonth() + 1}/{schedule.from.getDate()} -{" "}
                {schedule.to.getMonth() + 1}/{schedule.to.getDate()}
              </Typography>
              <Typography type="BigBold">{schedule.name}</Typography>
            </FlexWrapper>
            {idx < schedules.length - 1 ? <Line height={1} color="Line.default" /> : null}
          </FlexWrapper>
        ))}
      </FlexWrapper>
    </UniformWidget>
  )
}

export default ScheduleFeedSection
