import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import { WeekdayEnum } from "@/common/enum/weekdayEnum"
import { LectureSchema } from "@/common/schemas/lecture"

// GET /api/lectures
export const getLectures = z.object({
  query: z.object({
    keyword: z.string().optional(),
    type: z.string().optional(),
    department: z.number().int().optional(),
    level: z.number().int().optional(),
    limit: z.number().int().optional(),
    year: z.number().int().optional(),
    semester: z.nativeEnum(SemesterEnum).optional(),
    day: z.nativeEnum(WeekdayEnum).optional(),
    begin: z.number().int().optional(),
    end: z.number().int().optional(),
  }),
  response: z.object({
    courses: z.array(
      z.object({
        name: z.string(),
        code: z.string(),
        type: z.string(),
        completedCourse: z.boolean(),
        lectures: z.array(LectureSchema),
      }),
    ),
  }),
})

export type GETLecturesQuery = z.infer<typeof getLectures.shape.query>
export type GETLecturesResponse = z.infer<typeof getLectures.shape.response>
