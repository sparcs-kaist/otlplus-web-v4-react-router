import { z } from "zod"

import { ScoreEnum } from "@/common/enum/scoreEnum"
import { SemesterEnum } from "@/common/enum/semesterEnum"
import { ProfessorSchema } from "@/common/schemas/professor"

export const ReviewSchema = z.object({
  id: z.number().int(),
  courseId: z.number().int(),
  courseName: z.string(),
  professor: ProfessorSchema,
  year: z.number().int(),
  semester: z.nativeEnum(SemesterEnum),
  content: z.string(),
  like: z.number().int(),
  isDeleted: z.boolean(),
  grade: z.nativeEnum(ScoreEnum),
  load: z.nativeEnum(ScoreEnum),
  speech: z.nativeEnum(ScoreEnum),
  likedByUser: z.boolean().optional(),
})

export type Review = z.infer<typeof ReviewSchema>
