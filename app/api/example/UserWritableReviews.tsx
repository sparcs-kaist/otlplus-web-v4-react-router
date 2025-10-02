import { SemesterEnum } from "@/common/enum/semesterEnum"

import { type GETWritableReviewsResponse } from "../users/writable-reviews"

const exampleUserWritableReviews: GETWritableReviewsResponse = {
    name: "이산구조",
    courseId: 9988,
    professors: [
        {
            id: 12,
            name: "스팍스",
        },
    ],
    year: 2025,
    semester: SemesterEnum.SPRING,
}

export { exampleUserWritableReviews }
