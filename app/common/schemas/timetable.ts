import { z } from "zod"

import { LectureSchema } from "@/common/schemas/lecture"

export const TimetableSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  userId: z.number().int(),
  year: z.number().int(),
  semester: z.number().int(),
  timeTableOrder: z.number().int(),
  lectures: z.array(LectureSchema),
})

export type Timetable = z.infer<typeof TimetableSchema>
