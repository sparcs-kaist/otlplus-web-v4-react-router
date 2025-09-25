"use client"

import React from "react"

//import * as MuiIcons from "@mui/icons-material"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"
import { ThemeProvider, createTheme } from "@mui/material"

const MuiIcons = {}

interface IconProps {
  type: string
  size: number
  onClick?: (e: React.MouseEvent) => void
  color?: string
}

const theme = createTheme()

function Icon({ type, size, onClick = undefined, color = "inherit" }: IconProps) {
  const IconComponent = MuiIcons[type as keyof typeof MuiIcons]

  const wrapperStyle = {
    display: "flex",
    cursor: onClick ? "pointer" : "default",
    fontSize: `${size}px`,
    color,
  }

  /*
  if (!IconComponent) {
    return (
      <div style={wrapperStyle} onClick={onClick}>
        <ThemeProvider theme={theme}>
          <ErrorOutlineIcon style={{ fontSize: `${size}px`, color }} />
        </ThemeProvider>
      </div>
    )
  }

  return (
    <div style={wrapperStyle} onClick={onClick}>
      <ThemeProvider theme={theme}>
        <IconComponent style={{ fontSize: `${size}px`, color, cursor: "pointer" }} />
      </ThemeProvider>
    </div>
  )
    */
  return (
    <div style={wrapperStyle} onClick={onClick}>
      <ThemeProvider theme={theme}>
        <ErrorOutlineIcon style={{ fontSize: `${size}px`, color }} />
      </ThemeProvider>
    </div>
  )
}

export default Icon
