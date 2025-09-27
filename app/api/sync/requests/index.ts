import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"

// POST /api/sync/requests
export const createSyncRequest = z.object({
  body: z.object({
    year: z.number().int(),
    semester: z.nativeEnum(SemesterEnum),
  }),
  response: z.object({
    requestId: z.string(),
    createdAt: z.date(),
  }),
})

export type POSTSyncRequestBody = z.infer<typeof createSyncRequest.shape.body>
export type POSTSyncRequestResponse = z.infer<typeof createSyncRequest.shape.response>
