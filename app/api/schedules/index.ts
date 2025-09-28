import { z } from "zod"

// GET /api/schedules
export const getSchedules = z.object({
  response: z.array(
    z.object({
      year: z.number().int(),
      from: z.date(),
      to: z.date(),
      name: z.string(),
    }),
  ),
})

export type GETSchedulesResponse = z.infer<typeof getSchedules.shape.response>
