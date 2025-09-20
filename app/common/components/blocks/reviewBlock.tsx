import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"

import FlexWrapper from "@/common/components/FlexWrapper"
import Icon from "@/common/components/Icon"
import Typography from "@/common/components/Typography"
import type ReviewFeed from "@/common/components/interface/ReviewFeed"

import { ReviewEnum } from "../enum/reviewEnum"

interface ReviewBlockProps {
  review: ReviewFeed
  likeReview: (reviewId: number) => void
}

function ReviewBlock({ review, likeReview }: ReviewBlockProps) {
  if (!review) return

  return (
    <FlexWrapper direction="column" align="stretch" gap={8} padding="0px 4px">
      <FlexWrapper direction="row" gap={6}>
        <Typography type="NormalBold" color="Text.default">
          {review.lectureName}
        </Typography>
        <Typography type="Normal" color="Text.lighter">
          {review.professorName}
        </Typography>
        <Typography type="Normal" color="Text.lighter">
          {review.year}년도 {review.semester}학기
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
            좋아요 {review.like}
          </Typography>
          <Typography type="Normal" color="Text.lighter">
            성적 {ReviewEnum[review.grade]}
          </Typography>
          <Typography type="Normal" color="Text.lighter">
            널널 {ReviewEnum[review.load]}
          </Typography>
          <Typography type="Normal" color="Text.lighter">
            강의 {ReviewEnum[review.speech]}
          </Typography>
        </FlexWrapper>
        <FlexWrapper
          direction="row"
          gap={4}
          onClick={() => likeReview && likeReview(review.reviewId)}
        >
          <Typography type="Normal" color="Highlight.default">
            좋아요
          </Typography>
          <Icon size={18} color="crimson">
            {review.userspecificIsLiked ? (
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
