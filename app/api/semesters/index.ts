import { z } from "zod"

// GET /api/semesters
export const getSemesters = z.object({
  response: z.array(
    z.object({
      year: z.number().int(),
      semester: z.number().int(),
      beginning: z.date(),
      end: z.date(),
      courseDesciptionSubmission: z.date(),
      courseRegistrationPeriodStart: z.date(),
      courseRegistrationPeriodEnd: z.date(),
      courseAddDropPeriodEnd: z.date(),
      courseDropDeadline: z.date(),
      courseEvaluationDeadline: z.date(),
      gradePosting: z.date(),
    }),
  ),
})

export type GETSemestersResponse = z.infer<typeof getSemesters.shape.response>
