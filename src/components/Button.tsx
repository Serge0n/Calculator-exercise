import { FC } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-family: inherit;
  font-size: inherit;
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding-top: 1em;
  padding-bottom: 1em;
  overflow: hidden;
`

interface ButtonProps {
  value: string
}

export const Button:FC<ButtonProps> = ({ value }) => {
  return (
    <StyledButton>
      {value}
    </StyledButton>
  )
}