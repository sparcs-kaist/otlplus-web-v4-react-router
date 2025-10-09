import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"

// GET /api/semesters
export const getSemesters = z.object({
  response: z.array(
    z.object({
      year: z.number().int(),
      semester: z.nativeEnum(SemesterEnum),
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
