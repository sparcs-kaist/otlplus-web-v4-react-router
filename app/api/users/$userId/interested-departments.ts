import { z } from "zod"

// PUT /api/users/$userId/interested-departments
export const putUserInterestedMajors = z.object({
  body: z.object({
    interestedDepartmentIds: z.array(z.number().int()),
  }),
})

export type PUTUserInterestedMajorsBody = z.infer<
  typeof putUserInterestedMajors.shape.body
>
