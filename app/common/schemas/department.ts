import { z } from "zod"

export const DepartmentSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  code: z.string().optional(),
})

export type Department = z.infer<typeof DepartmentSchema>
