import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"

export const TimetablesSchema = z.object({
  id: z.number().int(),
  year: z.number().int(),
  semester: z.nativeEnum(SemesterEnum),
  timetableOrder: z.number().int(),
  userId: z.number().int(),
})

export type Timetables = z.infer<typeof TimetablesSchema>
