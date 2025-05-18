import React from "react"

import { useTranslation } from "react-i18next"

import { useGetIcedCoffee } from "../../services/useGetIcedCoffee"
import useUserCoffeePreferenceStore from "../../store/useUserCoffeePreferenceStore"
import { BaseCard } from "./BaseCard"

export const IcedCoffeeCard: React.FC = () => {
  const { t } = useTranslation("example")
  const { data, isLoading, error } = useGetIcedCoffee()
  const coffeePreference = useUserCoffeePreferenceStore((state) => state.coffeePreference)

  return (
    <BaseCard>
      <h2>{t("icedCoffee.title")}</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          {data.map((icedCoffee) => (
            <div key={icedCoffee.id}>
              {icedCoffee && (
                <p>
                  {icedCoffee.title} {coffeePreference}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </BaseCard>
  )
}
