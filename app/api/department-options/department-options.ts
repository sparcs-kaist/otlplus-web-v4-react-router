import { z } from "zod"

// GET /api/department-options
export const getDepartmentOptions = z.object({
  response: z.array(
    z.object({
      id: z.number().int(),
      name: z.string(),
      code: z.string(),
    }),
  ),
})

export type GETDepartmentOptionsResponse = z.infer<
  typeof getDepartmentOptions.shape.response
>
