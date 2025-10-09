import type { ReactNode } from "react"

import { IconButton as MUIIconButton, ThemeProvider, createTheme } from "@mui/material"

const theme = createTheme()

interface IconButtonProps {
  children?: ReactNode | null
  styles?: React.CSSProperties | null
  onClick?: () => void | null
}

export const IconButton = (props: IconButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MUIIconButton onClick={props.onClick} style={props.styles ?? undefined}>
        {props.children}
      </MUIIconButton>
    </ThemeProvider>
  )
}
