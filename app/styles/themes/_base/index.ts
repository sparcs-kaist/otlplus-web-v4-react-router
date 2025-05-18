import { breakpoints } from "./variables/breakpoints"
import { colors } from "./variables/colors"
import { fonts } from "./variables/fonts"

const baseTheme = {
  colors,
  fonts,
  breakpoints,
}

export type ThemeType = typeof baseTheme

export default baseTheme
