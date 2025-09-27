import { z } from "zod"

export const ProfessorSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
})

export type Professor = z.infer<typeof ProfessorSchema>
