import type { NestedCourse } from "./Course"
import type { NestedLecture } from "./Lecture"

export default interface Review {
  id: number
  course: NestedCourse
  lecture: NestedLecture
  content: string
  like: number
  is_deleted: number
  grade: number
  load: number
  speech: number
  userspecific_is_liked: boolean
}
