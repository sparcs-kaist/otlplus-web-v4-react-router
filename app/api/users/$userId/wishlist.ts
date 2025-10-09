import { z } from "zod"

import { LectureSchema } from "@/common/schemas/lecture"

// GET /api/users/:userId/wishlist
export const getWishlist = z.object({
  response: z.object({
    name: z.string(),
    code: z.string(),
    type: z.string(),
    completedLecture: z.boolean(),
    lectures: z.array(LectureSchema),
  }),
})

export type GETWishlistResponse = z.infer<typeof getWishlist.shape.response>

// PATCH /api/users/:userId/wishlist
export const patchWishlist = z.object({
  body: z.object({
    lectureId: z.number().int(),
    action: z.enum(["add", "remove"]),
  }),
})

export type PATCHWishlistBody = z.infer<typeof patchWishlist.shape.body>
