import { z } from "zod"

import { ProfessorSchema } from "@/common/schemas/professor"
import { ReviewSchema } from "@/common/schemas/review"

// GET /api/reviews
export const getReviews = z.object({
  query: z.object({
    courseId: z.number().int().optional(),
    professorId: z.number().int().optional(),
    mode: z.enum(["default", "recent", "hall-of-fame", "review-feed", "popular-feed"]),
    year: z.number().int().optional(),
    semester: z.number().int().optional(),
  }),
  response: z.object({
    reviews: z.array(ReviewSchema),
    averageGrade: z.number(),
    averageLoad: z.number(),
    averageSpeech: z.number(),
    myReviewId: z.number().nullable(),
  }),
})

export type GETReviewsQuery = z.infer<typeof getReviews.shape.query>
export type GETReviewsResponse = z.infer<typeof getReviews.shape.response>

// POST /api/reviews
export const postReview = z.object({
  body: z.object({
    courseId: z.number().int(),
    professor: ProfessorSchema,
    year: z.number().int(),
    semester: z.number().int(),
    content: z.string(),
    grade: z.number().int().min(1).max(5),
    load: z.number().int().min(1).max(5),
    speech: z.number().int().min(1).max(5),
  }),
  response: z.object({
    id: z.number().int(),
  }),
})

export type POSTReviewBody = z.infer<typeof postReview.shape.body>
export type POSTReviewResponse = z.infer<typeof postReview.shape.response>
