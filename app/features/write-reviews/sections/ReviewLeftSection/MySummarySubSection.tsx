import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

interface MySummarySubSectionProps {
    totalLectures: number
    reviewedLectures: number
    totalLikes: number
}

function MySummarySubSection({
    totalLectures,
    reviewedLectures,
    totalLikes,
}: MySummarySubSectionProps) {
    const { t } = useTranslation()

    return (
        <FlexWrapper direction="column" align="center" gap={10}>
            <Typography type="Big" color="Text.default">
                {t("writeReviews.mySummary.title")}
            </Typography>

            <FlexWrapper direction="row" align="center" gap={48}>
                <FlexWrapper direction="column" align="center" gap={2}>
                    <FlexWrapper direction="row" align="flex-end" gap={0}>
                        <Typography type="BiggerBold" color="Text.default">
                            {reviewedLectures}
                        </Typography>
                        <Typography type="SmallBold" color="Text.default">
                            /{totalLectures}
                        </Typography>
                    </FlexWrapper>
                    <Typography type="Smaller" color="Text.default">
                        {t("writeReviews.mySummary.written")}
                    </Typography>
                </FlexWrapper>

                <FlexWrapper direction="column" align="center" gap={2}>
                    <FlexWrapper direction="row" align="flex-end" gap={0}>
                        <Typography type="BiggerBold" color="Text.default">
                            {totalLikes}
                        </Typography>
                    </FlexWrapper>
                    <Typography type="Smaller" color="Text.default">
                        {t("writeReviews.mySummary.likes")}
                    </Typography>
                </FlexWrapper>
            </FlexWrapper>
        </FlexWrapper>
    )
}

export default MySummarySubSection
