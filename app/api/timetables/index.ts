import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import { TimetableSchema } from "@/common/schemas/timetable"
import { TimetablesSchema } from "@/common/schemas/timetables"

// GET /api/timetables
export const getTimetables = z.object({
  query: z.object({
    userId: z.number().int(),
  }),
  response: z.object({
    timetables: z.array(TimetablesSchema),
  }),
})

export type GETTimetablesQuery = z.infer<typeof getTimetables.shape.query>
export type GETTimetablesResponse = z.infer<typeof getTimetables.shape.response>

// POST /api/timetables
export const createTimetable = z.object({
  body: z.object({
    userId: z.number().int(),
    year: z.number().int(),
    semester: z.nativeEnum(SemesterEnum),
    lectureIds: z.array(z.number().int()),
  }),
  response: TimetableSchema,
})

export type POSTTimetableBody = z.infer<typeof createTimetable.shape.body>
export type POSTTimetableResponse = z.infer<typeof createTimetable.shape.response>

// DELETE /api/timetables
export const deleteTimetable = z.object({
  Query: z.object({
    id: z.number().int(),
  }),
})

export type DELETETimetableQuery = z.infer<typeof deleteTimetable.shape.Query>

// PATCH /api/timetables
export const patchTimetable = z.object({
  body: z.object({
    id: z.number().int(),
    name: z.string().optional(),
    order: z.number().int().optional(),
  }),
})

export type PATCHTimetableBody = z.infer<typeof patchTimetable.shape.body>
