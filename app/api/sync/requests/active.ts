import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"

// GET /api/sync/requests/active
export const getRequestStatus = z.object({
  query: z.object({
    requestId: z.string(),
  }),
  response: z.object({
    requestId: z.string(),
    year: z.number().int(),
    semester: z.nativeEnum(SemesterEnum),
    status: z.enum(["wait", "inProgress", "complete", "error"]),
    startedAt: z.date(),
  }),
})

export type GETRequestStatusQuery = z.infer<typeof getRequestStatus.shape.query>
export type GETRequestStatusResponse = z.infer<typeof getRequestStatus.shape.response>
