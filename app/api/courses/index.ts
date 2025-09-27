import { z } from "zod"

import { DepartmentSchema } from "@/common/schemas/department"
import { ProfessorSchema } from "@/common/schemas/professor"

// GET /api/courses
export const getCourses = z.object({
  query: z.object({
    type: z.string().optional(),
    department: z.string().optional(),
    level: z.string().optional(),
    term: z.number().int().optional(),
    order: z.enum(["code", "popular", "studentCount"]),
    keyword: z.string().optional(),
  }),
  response: z.array(
    z.object({
      id: z.number().int(),
      title: z.string(),
      code: z.string(),
      department: DepartmentSchema,
      professors: z.array(ProfessorSchema),
      summary: z.string(),
      open: z.boolean(),
      myCourse: z.number().int().optional(),
    }),
  ),
})

export type GETCoursesQuery = z.infer<typeof getCourses.shape.query>
export type GETCoursesResponse = z.infer<typeof getCourses.shape.response>
