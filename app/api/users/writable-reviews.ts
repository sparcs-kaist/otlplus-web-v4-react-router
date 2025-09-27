import { z } from "zod"

import { ProfessorSchema } from "@/common/schemas/professor"

// GET /api/users/writable-reviews
export const getWritableReviews = z.object({
  response: z.object({
    name: z.string(),
    courseId: z.number().int(),
    professor: ProfessorSchema,
    year: z.number().int(),
    semester: z.number().int(),
  }),
})

export type GETWritableReviewsResponse = z.infer<typeof getWritableReviews.shape.response>
