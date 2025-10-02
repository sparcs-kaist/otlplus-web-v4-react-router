import isPropValid from "@emotion/is-prop-valid"
import styled from "@emotion/styled"

export interface FlexWrapperProps {
    direction: "row" | "column"
    gap: number
    justify?: string
    align?: string
    padding?: string
    flex?: string
}

const FlexWrapper = styled("div", {
    shouldForwardProp: (prop) =>
        isPropValid(prop) &&
        !["direction", "gap", "justify", "align", "padding", "flex"].includes(prop),
})<FlexWrapperProps>`
    display: flex;
    position: relative;
    flex-direction: ${({ direction }) => direction};
    gap: ${({ gap }) => `${gap}px`};
    justify-content: ${({ justify }) => justify ?? "flex-start"};
    align-items: ${({ align }) => align ?? "flex-start"};
    padding: ${({ padding }) => padding ?? 0};
    flex: ${({ flex }) => flex ?? ""};
`

export default FlexWrapper
