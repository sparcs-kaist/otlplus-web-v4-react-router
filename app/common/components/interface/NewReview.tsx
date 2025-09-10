export interface NewReview {
  reviews: {
    reviewId: number
    professorName: string
    year: number
    semester: number
    content: string
    like: number
    isDeleted: boolean
    grade: number
    load: number
    speech: number
    userspecificIsLiked?: boolean
  }[]
  averageGrade: number
  averageLoad: number
  averageSpeech: number
  myReviewId?: number
}
