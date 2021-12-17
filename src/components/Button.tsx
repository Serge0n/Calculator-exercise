import { FC } from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button<Omit<ButtonProps, "value">>`
  font-family: inherit;
  font-size: inherit;
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding-top: 1em;
  padding-bottom: 1em;
  overflow: hidden;
  ${({ isEqual }) =>
    isEqual &&
    css`
      grid-column-end: span 2;
    `}
`

interface ButtonProps {
  value: string
  onClick: () => void
  isEqual?: boolean
}

export const Button:FC<ButtonProps> = ({ value, onClick, isEqual = false }) => {
  return (
    <StyledButton onClick={onClick} isEqual={isEqual}>
      {value}
    </StyledButton>
  )
}