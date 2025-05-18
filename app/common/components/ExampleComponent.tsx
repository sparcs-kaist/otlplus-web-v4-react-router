import React from "react"

import styled from "@emotion/styled"

const ExampleComponentInner = styled.div`
  color: ${(props) => props.theme.colors.primary};
`

const ExampleComponent: React.FC<React.PropsWithChildren> = (props) => {
  return <ExampleComponentInner>{props.children}</ExampleComponentInner>
}

export default ExampleComponent
