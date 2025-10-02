import { useEffect, useState } from "react"

import styled from "@emotion/styled"
import { Trans, useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

import Widget from "../../../../common/primitives/Widget"

interface ScheduleSectionProps {
    content: string
    dueDate: Date
}

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.Highlight.default};
    text-decoration: none;
    font-size: ${({ theme }) => theme.fonts.NormalBold.fontSize}px;
    font-weight: ${({ theme }) => theme.fonts.NormalBold.fontWeight};

    &:hover {
        color: ${({ theme }) => theme.colors.Highlight.dark};
    }
`

const ScheduleSection: React.FC<ScheduleSectionProps> = (props) => {
    const [now, setNow] = useState(new Date())
    const [timeLeft, setTimeLeft] = useState<string>("")

    const { t } = useTranslation()

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        const diff = props.dueDate.getTime() - now.getTime()
        const isPast = diff < 0
        const absDiff = Math.abs(diff)
        const days = Math.floor(absDiff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((absDiff / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((absDiff / (1000 * 60)) % 60)
        const seconds = Math.floor((absDiff / 1000) % 60)
        setTimeLeft(
            `D${isPast ? "+" : "-"}${days} ${hours}${t("common.hours")} ${minutes}${t("common.minutes")} ${seconds}${t("common.seconds")}`,
        )
    }, [now, props.dueDate])

    return (
        <Widget
            width={418}
            direction="column"
            align="stretch"
            gap={0}
            padding="23px 30px"
        >
            <FlexWrapper direction="column" align="stretch" gap={16}>
                <FlexWrapper direction="column" align="center" gap={10}>
                    <FlexWrapper direction="column" align="stretch" gap={0}>
                        <FlexWrapper direction="row" justify="center" gap={0}>
                            <Typography type="BiggerBold" color="Text.dark">
                                <Trans
                                    i18nKey="main.schedule.title"
                                    values={{ content: props.content }}
                                />
                            </Typography>
                        </FlexWrapper>
                        <FlexWrapper direction="row" justify="center" gap={0}>
                            <Typography type="BiggerBold">{timeLeft}</Typography>
                        </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper direction="column" gap={0}>
                        <Typography type="Normal" color="Text.placeholder">
                            {props.content} {props.dueDate.getFullYear()}.
                            {String(props.dueDate.getMonth() + 1).padStart(2, "0")}.
                            {String(props.dueDate.getDate()).padStart(2, "0")}
                        </Typography>
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper direction="column" align="flex-end" gap={0}>
                    <StyledLink to="https://erp.kaist.ac.kr" target="_blank">
                        {t("main.schedule.link")}
                    </StyledLink>
                </FlexWrapper>
            </FlexWrapper>
        </Widget>
    )
}

export default ScheduleSection
