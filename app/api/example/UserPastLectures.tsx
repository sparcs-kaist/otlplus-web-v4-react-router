import type { GETUserPastLecturesResponse } from "@/api/users/$userId/lectures"
import { SemesterEnum } from "@/common/enum/semesterEnum"

import exampleLectures from "./Lectures"

const exampleUserPastLectures: GETUserPastLecturesResponse = {
    totalLectures: 12,
    reviewedLectures: 0,
    totalLikes: 0,
    lecturesWrap: [
        {
            year: 2023,
            semester: SemesterEnum.SPRING,
            lectures: exampleLectures,
        },
        {
            year: 2023,
            semester: SemesterEnum.FALL,
            lectures: exampleLectures,
        },
        {
            year: 2024,
            semester: SemesterEnum.SPRING,
            lectures: exampleLectures,
        },
        {
            year: 2024,
            semester: SemesterEnum.FALL,
            lectures: exampleLectures,
        },
    ],
}

export default exampleUserPastLectures
