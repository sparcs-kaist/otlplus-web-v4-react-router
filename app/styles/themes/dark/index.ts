import type { ThemeType } from ".."
import baseTheme from "../_base"
import { darkThemeColors } from "./variables/colors"

const darkTheme: ThemeType = {
  ...baseTheme,
  colors: darkThemeColors,
}

export default darkTheme
