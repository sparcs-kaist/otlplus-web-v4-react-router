import { ScoreEnum } from "../enum/scoreEnum"
import FlexWrapper from "../primitives/FlexWrapper"
import Grade from "./Grade"

interface GradeWrapProps {
    score: number
    setScore: (score: number) => void
}

function GradeWrap({ score, setScore }: GradeWrapProps) {
    return (
        <FlexWrapper direction="row" gap={5}>
            {[1, 2, 3, 4, 5].map((grade, idx) => (
                <Grade
                    key={idx}
                    onClick={() => {
                        setScore(5 - idx)
                    }}
                    isSelected={score === 5 - idx}
                >
                    {ScoreEnum[5 - idx]}
                </Grade>
            ))}
        </FlexWrapper>
    )
}

export default GradeWrap
