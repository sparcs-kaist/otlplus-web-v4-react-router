import { SemesterEnum } from "../enum/semesterEnum"
import { type LectureSimpleBlock } from "./LectureSimpleBlock"

export interface TakenLectures {
  year: number
  semester: SemesterEnum
  lectures: LectureSimpleBlock[]
}
