import React from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import type { GETCourseDetailResponse } from "@/api/courses/$courseId"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

const CourseInfo = styled(FlexWrapper)`
    width: 100%;
`

const NumberWrapper = styled(FlexWrapper)`
    width: 100%;
    padding: 10px 165px;
`

const DetailHeaderText = styled(Typography)`
    white-space: nowrap;
`

interface CourseInfoSubsectionProps {
    courseDetail: GETCourseDetailResponse | null
}

const CourseInfoSubsection: React.FC<CourseInfoSubsectionProps> = ({ courseDetail }) => {
    const { t } = useTranslation()

    return (
        <>
            <CourseInfo direction="column" gap={8}>
                {[
                    [
                        t("common.class"),
                        courseDetail?.department.name + ", " + courseDetail?.type,
                    ],
                    [t("common.description"), courseDetail?.summary],
                ].map(([label, value], index) => (
                    <FlexWrapper key={index} direction="row" gap={6}>
                        <DetailHeaderText type={"NormalBold"} color={"Text.default"}>
                            {label}
                        </DetailHeaderText>
                        <Typography type={"Normal"} color={"Text.default"}>
                            {value}
                        </Typography>
                    </FlexWrapper>
                ))}
            </CourseInfo>
            <NumberWrapper
                direction="row"
                gap={0}
                justify={"space-between"}
                align={"center"}
            >
                {[
                    [courseDetail?.num_classes, t("common.numClasses")],
                    [courseDetail?.num_labs, t("common.numLabs")],
                    [courseDetail?.credit, t("common.credit")],
                ].map(([value, label], index) => (
                    <FlexWrapper key={index} direction="column" gap={0} align={"center"}>
                        <Typography type={"Bigger"} color={"Text.default"}>
                            {value}
                        </Typography>
                        <Typography type={"Smaller"} color={"Text.default"}>
                            {label}
                        </Typography>
                    </FlexWrapper>
                ))}
            </NumberWrapper>
        </>
    )
}

export default CourseInfoSubsection
