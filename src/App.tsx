import { FC } from 'react'
import { Calculator } from './components/Calculator'
import { ThemeProvider } from "styled-components"
import { useTheme } from './useTheme'
import { darkTheme, lightTheme } from './themes'
import { GlobalStyles } from './GlobalStyles'

export const App:FC  = () => {
  const { theme, themeToggler } = useTheme()
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Calculator themeToggler={themeToggler} />
    </ThemeProvider>
  )
}