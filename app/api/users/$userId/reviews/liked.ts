import { z } from "zod"

import { ReviewSchema } from "@/common/schemas/review"

// GET /api/users/$userId/reviews/liked
const UserLikedReviewsReviewSchema = ReviewSchema.extend({
  courseId: z.number().int(),
})

export const getUserLikedReviews = z.object({
  query: z.object({
    userId: z.number().int(),
  }),
  response: z.object({
    reviews: UserLikedReviewsReviewSchema,
  }),
})

export type GETUserLikedReviewsQuery = z.infer<typeof getUserLikedReviews.shape.query>
export type GETUserLikedReviewsResponse = z.infer<
  typeof getUserLikedReviews.shape.response
>
