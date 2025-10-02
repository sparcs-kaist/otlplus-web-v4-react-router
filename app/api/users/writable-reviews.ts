import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import { ProfessorSchema } from "@/common/schemas/professor"

// GET /api/users/writable-reviews
export const getWritableReviews = z.object({
    response: z.object({
        name: z.string(),
        courseId: z.number().int(),
        professors: z.array(ProfessorSchema),
        year: z.number().int(),
        semester: z.nativeEnum(SemesterEnum),
    }),
})

export type GETWritableReviewsResponse = z.infer<typeof getWritableReviews.shape.response>
