import FlexWrapper from "@/common/components/FlexWrapper"
import Line from "@/common/components/Line"
import Typography from "@/common/components/Typography"
import { type TakenLectures } from "@/common/components/interface/takenLectures"

import LectureSimpleBlock from "../components/lectureSimpleBlock"

interface TakenLectureSubSectionProps {
  lecturesWrap: TakenLectures
}

function TakenLectureSubSection({ lecturesWrap }: TakenLectureSubSectionProps) {
  return (
    <FlexWrapper direction="column" align="stretch" justify="stretch" gap={10}>
      <Typography type="NormalBold" color="Text.default">
        {lecturesWrap.year} {lecturesWrap.semester}
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
