import { z } from "zod"

import { WeekdayEnum } from "@/common/enum/weekdayEnum"

export const TimeBlockSchema = z.object({
  day: z.nativeEnum(WeekdayEnum).or(z.date()),
  begin: z.number().int().min(0).max(1440),
  end: z.number().int().min(0).max(1440),
})

export type TimeBlockDay = z.infer<typeof TimeBlockSchema.shape.day>
export type TimeBlock = z.infer<typeof TimeBlockSchema>
