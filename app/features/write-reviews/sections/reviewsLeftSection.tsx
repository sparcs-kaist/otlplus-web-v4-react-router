import { type TakenLectures } from "@/common/components/interface/takenLectures"
import Widget from "@/features/main/components/Widget"

interface reviewLeftSectionType {
  reviews: TakenLectures[]
}

function ReviewLeftSection({ reviews }: reviewLeftSectionType) {
  return (
    <>
      <Widget width={300} direction="column" gap={0}>
        {reviews.map((review) => (
          <></>
        ))}
      </Widget>
    </>
  )
}

export default ReviewLeftSection
