import { z } from "zod"

import { ScoreEnum } from "@/common/enum/scoreEnum"

// PUT /api/reviews/:reviewId
export const putReview = z.object({
  body: z.object({
    content: z.string().min(1).max(5000),
    grade: z.nativeEnum(ScoreEnum),
    load: z.nativeEnum(ScoreEnum),
    speech: z.nativeEnum(ScoreEnum),
  }),
})

export type PUTReviewBody = z.infer<typeof putReview.shape.body>
