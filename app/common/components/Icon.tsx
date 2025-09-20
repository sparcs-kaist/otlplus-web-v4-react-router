import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"
import { createTheme, ThemeProvider } from "@mui/material"

interface IconProps {
  children: React.ReactNode
  size: number
  onClick?: (e: React.MouseEvent) => void
  color?: string
}

const theme = createTheme()

const Icon: React.FC<IconProps> = ({
  children,
  size,
  onClick = undefined,
  color = "inherit",
}) => {
  const wrapperStyle = {
    display: "flex",
    cursor: onClick ? "pointer" : "default",
    fontSize: `${size}px`,
    color,
  }

  if (!children) {
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
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  )
}

export default Icon
