import { z } from "zod"

// POST /api/sync/requests
export const createSyncRequest = z.object({
  body: z.object({
    year: z.number().int(),
    semester: z.number().int(),
  }),
  response: z.object({
    requestId: z.string(),
    createdAt: z.date(),
  }),
})

export type POSTSyncRequestBody = z.infer<typeof createSyncRequest.shape.body>
export type POSTSyncRequestResponse = z.infer<typeof createSyncRequest.shape.response>
