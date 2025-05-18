import React from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import useUserCoffeePreferenceStore from "../store/useUserCoffeePreferenceStore"

const CoffeePreferenceSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`

const CoffeePreferenceSelectionPrompt = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
`

const CoffeePreferenceSelectionInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
`

const CoffeePreferenceSelect: React.FC = () => {
  const { t } = useTranslation("example")
  const coffeePreference = useUserCoffeePreferenceStore((state) => state.coffeePreference)
  const setCoffeePreference = useUserCoffeePreferenceStore(
    (state) => state.setCoffeePreference,
  )

  return (
    <CoffeePreferenceSelectContainer>
      <CoffeePreferenceSelectionPrompt>
        {t("coffeePreferenceSelectionPrompt")}
      </CoffeePreferenceSelectionPrompt>
      <CoffeePreferenceSelectionInput
        type="text"
        value={coffeePreference}
        onChange={(e) => setCoffeePreference(e.target.value)}
      />
    </CoffeePreferenceSelectContainer>
  )
}

export default CoffeePreferenceSelect
