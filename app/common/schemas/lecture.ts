import { z } from "zod"

import { DepartmentSchema } from "@/common/schemas/department"
import { ProfessorSchema } from "@/common/schemas/professor"
import { TimeBlockSchema } from "@/common/schemas/timeblock"

const ClassTimeSchema = TimeBlockSchema.extend({
  buildingCode: z.string(),
  placeName: z.string(),
  placeNameShort: z.string().optional(),
})

const ExamTimeSchema = TimeBlockSchema.extend({
  str: z.string(),
})

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
  classes: z.array(ClassTimeSchema),
  examTimes: z.array(ExamTimeSchema),
})

export type ClassTime = z.infer<typeof ClassTimeSchema>
export type Lecture = z.infer<typeof LectureSchema>
