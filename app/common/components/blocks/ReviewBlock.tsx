import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import { useTranslation } from "react-i18next"

import { ScoreEnum } from "@/common/enum/scoreEnum"
import { semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import { type Review } from "@/common/schemas/review"
import professorName from "@/utils/professorName"

interface ReviewBlockProps {
    review: Review
    likeReview: (reviewId: number) => void
}

function ReviewBlock({ review, likeReview }: ReviewBlockProps) {
    const { t } = useTranslation()

    if (!review) return

    return (
        <FlexWrapper direction="column" align="stretch" gap={8} padding="0px 4px">
            <FlexWrapper direction="row" gap={6}>
                <Typography type="NormalBold" color="Text.default">
                    {review.courseName}
                </Typography>
                <Typography type="Normal" color="Text.lighter">
                    {professorName(review.professors)}
                </Typography>
                <Typography type="Normal" color="Text.lighter">
                    {review.year} {semesterToString(review.semester)}
                </Typography>
            </FlexWrapper>
            <FlexWrapper direction="row" gap={0}>
                <Typography type="Normal" color="Text.default">
                    {review.content}
                </Typography>
            </FlexWrapper>
            <FlexWrapper direction="row" justify="space-between" gap={0}>
                <FlexWrapper direction="row" gap={8}>
                    <Typography type="Normal" color="Text.lighter">
                        {t("common.review.like")} {review.like}
                    </Typography>
                    <Typography type="Normal" color="Text.lighter">
                        {t("common.grade")} {ScoreEnum[review.grade]}
                    </Typography>
                    <Typography type="Normal" color="Text.lighter">
                        {t("common.load")} {ScoreEnum[review.load]}
                    </Typography>
                    <Typography type="Normal" color="Text.lighter">
                        {t("common.speech")} {ScoreEnum[review.speech]}
                    </Typography>
                </FlexWrapper>
                <FlexWrapper
                    direction="row"
                    gap={4}
                    onClick={() => likeReview && likeReview(review.id)}
                >
                    <Typography type="Normal" color="Highlight.default">
                        {t("common.review.like")}
                    </Typography>
                    <Icon size={18} color="crimson">
                        {review.likedByUser ? (
                            <FavoriteIcon />
                        ) : (
                            <FavoriteBorderOutlinedIcon />
                        )}
                    </Icon>
                </FlexWrapper>
            </FlexWrapper>
        </FlexWrapper>
    )
}

export default ReviewBlock
