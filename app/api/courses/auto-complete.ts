import { z } from "zod"

// GET /api/courses/auto-complete
export const getCourseAutoComplete = z.object({
  query: z.object({
    keyword: z.string(),
  }),
  response: z.object({
    autoComplete: z.string(),
  }),
})

export type GETCourseAutoCompleteQuery = z.infer<typeof getCourseAutoComplete.shape.query>
export type GETCourseAutoCompleteResponse = z.infer<
  typeof getCourseAutoComplete.shape.response
>
