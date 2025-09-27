import React from "react"

import type { Theme } from "@emotion/react"
import styled from "@emotion/styled"

interface TypographyPropsBase extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

type ColorKeys = keyof Theme["colors"]
type NestedColorKeys<C extends ColorKeys> = C extends keyof Theme["colors"]
  ? Theme["colors"][C] extends string | number
    ? never
    : keyof Theme["colors"][C] & (string | number)
  : never

type NestedColors = {
  [C in ColorKeys]: NestedColorKeys<C> extends never
    ? never
    : `${C}.${NestedColorKeys<C>}`
}[ColorKeys]

type ThemeColors = ColorKeys | NestedColors

const getColorFromTheme = (theme: Theme, colorString: ThemeColors) => {
  if (typeof colorString === "string" && colorString.includes(".")) {
    const [colorKey, shade] = colorString.split(".")
    const colorValue = theme.colors[colorKey as keyof Theme["colors"]]

    if (typeof colorValue === "object" && shade in colorValue) {
      return colorValue[shade as unknown as keyof typeof colorValue]
    }
  }

  return theme.colors[colorString as keyof Theme["colors"]]
}

interface TypographyProps extends TypographyPropsBase {
  type?: keyof Theme["fonts"] // Ensure `type` corresponds to a key in `fonts`
  color?: ThemeColors
}

const TypographyInner = styled.div<TypographyProps>`
  color: ${({ color, theme }) => (color ? getColorFromTheme(theme, color) : "inherit")};
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-size: ${({ type, theme }) => {
    if (
      type &&
      theme.fonts[type] &&
      typeof theme.fonts[type] === "object" &&
      "fontSize" in theme.fonts[type]
    ) {
      return `${(theme.fonts[type] as { fontSize: number }).fontSize}px`
    }
    return "inherit"
  }};
  font-weight: ${({ type, theme }) => {
    if (
      type &&
      theme.fonts[type] &&
      typeof theme.fonts[type] === "object" &&
      "fontWeight" in theme.fonts[type]
    ) {
      return (theme.fonts[type] as { fontWeight: number | string }).fontWeight
    }
    return "inherit"
  }};
  line-height: ${({ type, theme }) => {
    if (
      type &&
      theme.fonts[type] &&
      typeof theme.fonts[type] === "object" &&
      "lineHeight" in theme.fonts[type]
    ) {
      return `${(theme.fonts[type] as { lineHeight: number }).lineHeight}px`
    }
    return "inherit"
  }};
`

const Typography: React.FC<TypographyProps> = ({ children, ...rest }) => (
  <TypographyInner {...rest}>{children}</TypographyInner>
)

export default Typography
