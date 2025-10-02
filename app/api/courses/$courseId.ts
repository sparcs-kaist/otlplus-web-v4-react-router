import { z } from "zod"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import { DepartmentSchema } from "@/common/schemas/department"
import { ProfessorSchema } from "@/common/schemas/professor"

// GET /api/courses/:courseId
const CourseHistoryProfessorSchema = ProfessorSchema.extend({
    classNo: z.string(),
})

export const getCourseDetail = z.object({
    response: z.object({
        id: z.number().int(),
        name: z.string(),
        code: z.string(),
        type: z.string(),
        department: DepartmentSchema,
        history: z.array(
            z.object({
                year: z.number().int(),
                semester: z.nativeEnum(SemesterEnum),
                professors: z.array(CourseHistoryProfessorSchema),
            }),
        ),
        summary: z.string(),
        credit: z.number().int(),
        credit_au: z.number().int(),
        num_classes: z.number().int(),
        num_labs: z.number().int(),
    }),
})

export type GETCourseDetailResponse = z.infer<typeof getCourseDetail.shape.response>
