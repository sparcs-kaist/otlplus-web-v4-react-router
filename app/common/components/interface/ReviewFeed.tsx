import { ReviewEnum } from "../enum/reviewEnum"
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
  grade: ReviewEnum
  load: ReviewEnum
  speech: ReviewEnum
  userspecificIsLiked: boolean
}
