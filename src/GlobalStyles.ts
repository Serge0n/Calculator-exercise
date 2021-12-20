import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
    font-family: Tahoma, Geneva, sans-serif;
  }

  #root {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`