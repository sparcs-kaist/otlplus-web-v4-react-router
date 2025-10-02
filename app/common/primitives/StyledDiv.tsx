import styled from "@emotion/styled"

interface StyledDivProps {
    width?: number
    height?: number
    children?: React.ReactNode
}

const Div = styled.div<StyledDivProps>`
    width: ${(props) => (props.width ? `${props.width}px` : "100%")};
    height: ${(props) => (props.height ? `${props.height}px` : "100%")};
`

function StyledDiv({ width, height, children }: StyledDivProps) {
    return (
        <Div width={width} height={height}>
            {children}
        </Div>
    )
}

export default StyledDiv
