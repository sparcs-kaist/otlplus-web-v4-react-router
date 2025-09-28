import { z } from "zod"

// PATCH /api/reviews/:reviewId/liked
export const likeReview = z.object({
  body: z.object({
    reviewId: z.number().int(),
    action: z.enum(["like", "unlike"]),
  }),
})

export type PATCHReviewLikeBody = z.infer<typeof likeReview.shape.body>
