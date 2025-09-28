import { z } from "zod"

export const ProfessorSchema = z.object({
  id: z.number().int(),
  name: z.string(),
})

export type Professor = z.infer<typeof ProfessorSchema>
