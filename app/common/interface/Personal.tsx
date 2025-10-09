import type { TimeBlock } from "@/common/schemas/timeblock"

export default interface PersonalBlock {
  id: number
  year: number
  semester: number
  user_id: number //(userProfileId)
  timetable_id: number | null // timetable.id 로, null이면 기본시간표
  title: string
  timeBlocks: TimeBlock[]
  place: string | null // 장소
  description: string | null // 설명
  //color: ColorEnum;
}
