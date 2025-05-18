import React from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

export const ExampleComponentInner = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
`

export const ExampleComponent = () => {
  const { t } = useTranslation("common")
  return <ExampleComponentInner>{t("example")}</ExampleComponentInner>
}
