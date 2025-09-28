import styled from "@emotion/styled"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

const Grade = styled.div<{ selected?: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${(props) => (props.selected ? "#A8A8A8" : "#D6D6D6")};

  &:hover {
    background-color: #b4b4b4;
  }
`

interface ReviewGradeCirclesProps {
  grade: number
  setGrade: (grade: number) => void
}

const ReviewGradeCircles: React.FC<ReviewGradeCirclesProps> = ({ grade, setGrade }) => {
  return (
    <FlexWrapper direction="row" gap={5} align="center">
      {["A", "B", "C", "D", "F"].map((score, index) => {
        const isSelected = grade === 5 - index
        return (
          <Grade
            key={index}
            selected={isSelected}
            onClick={() => setGrade(isSelected ? 0 : 5 - index)}
          >
            <FlexWrapper
              direction="row"
              justify="center"
              align="center"
              style={{ width: "100%", height: "100%" }}
              gap={0}
            >
              <Typography type="NormalBold" color="Text.bright">
                {score}
              </Typography>
            </FlexWrapper>
          </Grade>
        )
      })}
    </FlexWrapper>
  )
}

export default ReviewGradeCircles
