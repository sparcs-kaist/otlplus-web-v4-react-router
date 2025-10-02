import styled from "@emotion/styled"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

interface LectureSimpleBlockProps {
    lecture: {
        name: string
        code: string
    }
}

const BlockInner = styled(FlexWrapper)`
    background: ${({ theme }) => theme.colors.Background.Block.default};
`

function LectureSimpleBlock({ lecture }: LectureSimpleBlockProps) {
    return (
        <BlockInner direction="column" align="center" gap={2} padding="8px 0px">
            <Typography type="NormalBold" color="Text.default">
                {lecture.name}
            </Typography>
            <Typography type="Normal" color="Text.default">
                {lecture.code}
            </Typography>
        </BlockInner>
    )
}

export default LectureSimpleBlock
