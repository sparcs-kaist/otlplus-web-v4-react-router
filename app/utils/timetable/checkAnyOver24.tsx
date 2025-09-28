import type PersonalBlock from "@/common/interface/Personal"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimeBlock } from "@/common/schemas/timeblock"

export function checkAnyOver24(schedule: Lecture[] | PersonalBlock[]): boolean {
  schedule.forEach((val, _) => {
    let timeBlocks: TimeBlock[] = []
    if (!("timeBlocks" in val)) {
      timeBlocks = val.classes
    } else {
      timeBlocks = val.timeBlocks
    }
    timeBlocks.forEach((t, __) => {
      if (t.end > 24) {
        return true
      }
    })
  })
  return false
}
