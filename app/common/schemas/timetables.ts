import { z } from "zod"

export const TimetablesSchema = z.object({
  id: z.number().int(),
  year: z.number().int(),
  semester: z.number().int(),
  timetableOrder: z.number().int(),
  userId: z.number().int(),
})

export type Timetables = z.infer<typeof TimetablesSchema>
