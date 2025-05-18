import React from "react"

import styled from "@emotion/styled"

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};

  border: 1px solid #00000022;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`

export const BaseCard: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <CardContainer>{children}</CardContainer>
}
