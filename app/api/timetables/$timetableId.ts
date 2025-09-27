import { z } from "zod"

import { LectureSchema } from "@/common/schemas/lecture"
import { TimetableSchema } from "@/common/schemas/timetable"

//GET /api/timetables/:timetableId
export const getTimetable = z.object({
  response: TimetableSchema,
})

export type GETTimetableByIdResponse = z.infer<typeof getTimetable.shape.response>

// PATCH /api/timetables/:timetableId
export const patchTimetableById = z.object({
  body: z.object({
    lectureId: z.number().int(),
    action: z.enum(["add", "remove"]),
  }),
  response: LectureSchema,
})

export type PATCHTimetableByIdBody = z.infer<typeof patchTimetableById.shape.body>
export type PATCHTimetableByIdResponse = z.infer<typeof patchTimetableById.shape.response>
