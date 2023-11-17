import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { blueTheme, purpleTheme } from "./"

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme = { blueTheme}>
        <CssBaseline/>
        { children }
    </ThemeProvider>
  )
}
