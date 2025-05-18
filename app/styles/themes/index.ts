import { type ThemeType as _ThemeType } from "./_base"
import darkTheme from "./dark"
import lightTheme from "./light"

export type ThemeKeys = "light" | "dark"

const themes: Record<ThemeKeys, _ThemeType> = {
  light: lightTheme,
  dark: darkTheme,
}

export type ThemeType = _ThemeType

export default themes
