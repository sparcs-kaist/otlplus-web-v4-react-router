import { z } from "zod"

// GET SSE /api/sync/requests/:requestId/stream
export const streamSyncRequest = z.object({
  response: z.object({
    event: z.enum(["wait", "inProgress", "complete", "error"]),
    year: z.number().int().optional(),
    semester: z.number().int().optional(),
    data: z.object({
      synced: z.array(z.number().int()),
      pending: z.array(z.number().int()),
    }),
  }),
})

export type STREAMSyncRequestResponse = z.infer<typeof streamSyncRequest.shape.response>
