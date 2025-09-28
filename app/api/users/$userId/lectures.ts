import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import { LectureSchema } from "@/common/schemas/lecture"

// GET /api/users/$userId/lectures
export const getUserPastLectures = z.object({
  query: z.object({
    year: z.number().int().optional(),
    semester: z.nativeEnum(SemesterEnum).optional(),
  }),
  response: z.object({
    totalLectures: z.number().int(),
    reviewedLectures: z.number().int(),
    totalLikes: z.number().int(),
    lecturesWrap: z.array(
      z.object({
        year: z.number().int(),
        semester: z.nativeEnum(SemesterEnum),
        lectures: z.array(LectureSchema),
      }),
    ),
  }),
})

export type GETUserPastLecturesQuery = z.infer<typeof getUserPastLectures.shape.query>
export type GETUserPastLecturesResponse = z.infer<
  typeof getUserPastLectures.shape.response
>
