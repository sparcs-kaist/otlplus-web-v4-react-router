import type { GETUserPastLecturesResponse } from "@/api/users/$userId/lectures"
import Line from "@/common/components/Line"
import { semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

import LectureSimpleBlock from "../../components/LectureSimpleBlock"

interface TakenLectureSubSectionProps {
  lecturesWrap: GETUserPastLecturesResponse["lecturesWrap"][number]
}

function TakenLectureSubSection({ lecturesWrap }: TakenLectureSubSectionProps) {
  return (
    <FlexWrapper direction="column" align="stretch" justify="stretch" gap={10}>
      <Typography type="NormalBold" color="Text.default">
        {lecturesWrap.year} {semesterToString(lecturesWrap.semester)}
      </Typography>
      <FlexWrapper direction="column" align="stretch" justify="stretch" gap={8}>
        {lecturesWrap.lectures.map((lecture, lid) => (
          <LectureSimpleBlock key={lid} lecture={lecture} />
        ))}
      </FlexWrapper>
      <Line height={2} color="Line.divider" />
    </FlexWrapper>
  )
}

export default TakenLectureSubSection
