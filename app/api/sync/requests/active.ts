import { z } from "zod"

// GET /api/sync/requests/active
export const getRequestStatus = z.object({
  query: z.object({
    requestId: z.string(),
  }),
  response: z.object({
    requestId: z.string(),
    year: z.number().int(),
    semester: z.number().int(),
    status: z.enum(["wait", "inProgress", "complete", "error"]),
    startedAt: z.date(),
  }),
})

export type GETRequestStatusQuery = z.infer<typeof getRequestStatus.shape.query>
export type GETRequestStatusResponse = z.infer<typeof getRequestStatus.shape.response>
