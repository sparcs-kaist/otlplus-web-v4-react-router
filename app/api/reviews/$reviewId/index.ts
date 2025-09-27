import { z } from "zod"

// PUT /api/reviews/:reviewId
export const putReview = z.object({
  body: z.object({
    content: z.string().min(1).max(5000),
    grade: z.string().min(1).max(2),
    load: z.string().min(1).max(2),
    speech: z.string().min(1).max(2),
  }),
})

export type PUTReviewBody = z.infer<typeof putReview.shape.body>
