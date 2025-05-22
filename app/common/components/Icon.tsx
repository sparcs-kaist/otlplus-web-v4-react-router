"use client"

import React from "react"

import * as MuiIcons from "@mui/icons-material"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"

interface IconProps {
  type: string
  size: number
  onClick?: () => void
  color?: string
}

const Icon: React.FC<IconProps> = ({
  type,
  size,
  onClick = undefined,
  color = "inherit",
}) => {
  const IconComponent = MuiIcons[type as keyof typeof MuiIcons]

  const wrapperStyle = {
    display: "flex",
    cursor: onClick ? "pointer" : "default",
    fontSize: `${size}px`,
    color,
  }

  return <span>+</span>

  if (!IconComponent) {
    return (
      <div style={wrapperStyle} onClick={onClick}>
        {/* <ErrorOutlineIcon style={{ fontSize: `${size}px`, color }} /> */}
      </div>
    )
  }

  return (
    <div style={wrapperStyle} onClick={onClick}>
      {/* <IconComponent style={{ fontSize: `${size}px`, color }} /> */}
    </div>
  )
}

export default Icon
