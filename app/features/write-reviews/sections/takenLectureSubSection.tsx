import FlexWrapper from "@/common/components/FlexWrapper"
import { type TakenLectures } from "@/common/components/interface/takenLectures"

import LectureSimpleBlock from "../components/lectureSimpleBlock"

function TakenLectureSubSection({ lectures }: TakenLectures) {
  return (
    <>
      <FlexWrapper direction="column" align="row" gap={0}>
        {lectures.map((lecture) => (
          <LectureSimpleBlock lecture={lecture} />
        ))}
      </FlexWrapper>
    </>
  )
}

export default TakenLectureSubSection
