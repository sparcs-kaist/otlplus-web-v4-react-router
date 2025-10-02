import styled from "@emotion/styled"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"
import { ThemeProvider, createTheme } from "@mui/material"

interface IconProps {
    children: React.ReactNode
    size: number
    onClick?: (e: React.MouseEvent) => void
    color?: string
}

const theme = createTheme()

const IconWrapper = styled.div<{ size: string; clickable: boolean; color: string }>`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    display: flex;
    cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
    font-size: ${({ size }) => size};
    color: ${({ color }) => color};

    & > svg {
        width: 100%;
        height: 100%;
    }
`

const Icon: React.FC<IconProps> = ({
    children,
    size,
    onClick = undefined,
    color = "inherit",
}) => {
    if (!children) {
        return (
            <IconWrapper
                onClick={onClick}
                size={`${size}px`}
                clickable={!!onClick}
                color={color}
            >
                <ThemeProvider theme={theme}>
                    <ErrorOutlineIcon style={{ fontSize: `${size}px`, color }} />
                </ThemeProvider>
            </IconWrapper>
        )
    }

    return (
        <IconWrapper
            onClick={onClick}
            size={`${size}px`}
            clickable={!!onClick}
            color={color}
        >
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </IconWrapper>
    )
}

export default Icon
