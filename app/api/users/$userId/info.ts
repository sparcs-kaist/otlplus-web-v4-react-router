import { z } from "zod"

import { DepartmentSchema } from "@/common/schemas/department"

// GET /api/users/$userId/info
export const getUserInfo = z.object({
  response: z.object({
    name: z.string(),
    mail: z.string().email(),
    studentNumber: z.number().int(),
    course: z.string(),
    majorDepartments: z.array(DepartmentSchema),
    interestedDepartments: z.array(DepartmentSchema),
  }),
})

export type GETUserInfoResponse = z.infer<typeof getUserInfo.shape.response>
