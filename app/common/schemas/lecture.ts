import { z } from "zod"

import { DepartmentSchema } from "@/common/schemas/department"
import { ProfessorSchema } from "@/common/schemas/professor"

export const LectureSchema = z.object({
  id: z.number().int(),
  courseId: z.number().int(),
  classNo: z.string(),
  name: z.string(),
  code: z.string(),
  department: DepartmentSchema,
  type: z.string(),
  limitPeople: z.number().int(),
  numPeople: z.number().int(),
  lectureDuration: z.number().int(),
  credit: z.number().int(),
  au: z.number().int(),
  scoreGrade: z.number(),
  scoreLoad: z.number(),
  scoreSpeech: z.number(),
  isEnglish: z.boolean(),
  professors: z.array(ProfessorSchema),
  classes: z.array(
    z.object({
      day: z.number().int().min(0).max(4),
      begin: z.number().int().min(0).max(3000),
      end: z.number().int().min(0).max(3000),
      buildingCode: z.string(),
      placeName: z.string(),
      placeNameShort: z.string().optional(),
    }),
  ),
  examTimes: z.array(
    z.object({
      day: z.number().int(),
      str: z.string(),
      begin: z.number().int(),
      end: z.number().int(),
    }),
  ),
})

export type Lecture = z.infer<typeof LectureSchema>
