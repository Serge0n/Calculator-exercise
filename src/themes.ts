import { css } from "styled-components"

export const lightTheme = {
  bg: css`rgba(220, 220, 220, 0.6)`,
  screenBg: css`rgba(240, 240, 240)`,
  color: "#121620",
  operatorColor: css`rgba(209, 53, 13)`,

  button: {
    standart: {
      bg: css`rgba(127, 111, 233, 0.6)`,
      hoverBg: css`rgba(127, 111, 233, 0.7)`,
      activeBg: css`rgba(127, 111, 233)`,
    },
    isEqual: {
      bg: css`rgba(250, 153, 113, 0.8)`,
      hoverBg: css`rgba(250, 153, 113, 0.9)`,
      activeBg: css`rgba(250, 153, 113)`,
    },
  },
}

export const darkTheme = {
  bg: css`rgba(9, 5, 34, 0.6)`,
  screenBg: css`rgba(9, 5, 34, 0.4)`,
  color: "#fff",
  operatorColor: css`rgba(209, 53, 13)`,

  button: {
    standart: {
      bg: css`rgba(27, 11, 133, 0.6)`,
      hoverBg: css`rgba(27, 11, 133, 0.7)`,
      activeBg: css`rgba(27, 11, 133)`,
    },
    isEqual: {
      bg: css`rgba(209, 53, 13, 0.8)`,
      hoverBg: css`rgba(209, 53, 13, 0.9)`,
      activeBg: css`rgba(209, 53, 13)`,
    },
  },
}