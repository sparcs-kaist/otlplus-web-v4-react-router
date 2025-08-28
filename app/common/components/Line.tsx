import React from "react"

import type { Theme } from "@emotion/react"
import styled from "@emotion/styled"

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

interface LineProps {
  height?: number
  color: ThemeColors
}

const LineDiv = styled.div<LineProps>`
  width: 100%;
  height: ${(props) => props.height}px;
  background: ${({ theme, color }) => getColorFromTheme(theme, color)};
`

function Line({ height = 1, color = "Line.default" }: LineProps) {
  return <LineDiv height={height} color={color} />
}

export default Line
