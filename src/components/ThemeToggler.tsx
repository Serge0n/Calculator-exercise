import { FC } from "react";
import styled from "styled-components"

const ToggleButton = styled.button`
   cursor: pointer;
   border: none;
   background-color: ${({ theme }) => theme.bg};
   color: ${({ theme }) => theme.color};
   padding: 10px;
   font-size: 1rem;
`

interface ThemeTogglerProps {
  themeToggler: () => void
}

export const ThemeToggler: FC<ThemeTogglerProps> = ({ themeToggler }) => {
  return (
    <ToggleButton onClick={themeToggler}>Switch Theme</ToggleButton>
  )
}