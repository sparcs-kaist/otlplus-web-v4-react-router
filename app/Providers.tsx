import React from "react"

import { ThemeProvider } from "@emotion/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { I18nextProvider } from "react-i18next"

import i18n from "@/libs/i18n"
import themes, { type ThemeKeys } from "@/styles/themes"

export type ThemeKeysWithAuto = ThemeKeys | "auto"

export const SelectedThemeContext = React.createContext<{
  selectedTheme: ThemeKeysWithAuto
  setSelectedTheme: (theme: ThemeKeysWithAuto) => void
}>({
  selectedTheme: "light",
  setSelectedTheme: () => {},
})

const Providers: React.FC<React.PropsWithChildren> = (props) => {
  const queryClient = new QueryClient()

  const [selectedTheme, setSelectedTheme] = React.useState<ThemeKeysWithAuto>("light")

  const extractedTheme = React.useMemo(() => {
    if (selectedTheme === "auto") {
      return themes[
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      ]
    }

    return themes[selectedTheme]
  }, [selectedTheme])

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <SelectedThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>
          <ThemeProvider theme={extractedTheme}>{props.children}</ThemeProvider>
        </SelectedThemeContext.Provider>
      </I18nextProvider>
    </QueryClientProvider>
  )
}

export default Providers
