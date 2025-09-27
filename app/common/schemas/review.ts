import { z } from "zod"

import { ProfessorSchema } from "@/common/schemas/professor"

export const ReviewSchema = z.object({
  id: z.number().int(),
  professor: ProfessorSchema,
  year: z.number().int(),
  semester: z.number().int(),
  content: z.string(),
  like: z.number().int(),
  isDeleted: z.boolean(),
  grade: z.number().int(),
  load: z.number().int(),
  speech: z.number().int(),
  userspecificIsLiked: z.boolean().optional(),
})

export type Review = z.infer<typeof ReviewSchema>
