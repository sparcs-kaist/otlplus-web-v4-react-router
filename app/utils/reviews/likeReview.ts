import { type Review } from "@/common/schemas/review"

function likeReview(id: Review["id"]) {
    console.log("liked Review: " + id)
}

export default likeReview
