import { ScoreEnum } from "../enum/scoreEnum"
import { SemesterEnum } from "../enum/semesterEnum"

export default interface ReviewFeed {
  reviewId: number
  lectureName: string
  professorName: string
  year: number
  semester: SemesterEnum
  content: string
  like: number
  isDeleted: boolean
  grade: ScoreEnum
  load: ScoreEnum
  speech: ScoreEnum
  userspecificIsLiked: boolean
}
