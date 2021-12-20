import { FC } from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button<Omit<ButtonProps, "value">>`
  font-family: inherit;
  font-size: inherit;
  background-color: ${({ theme }) => theme.button.standart.bg};
  color: ${({ theme }) => theme.color};
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  overflow: hidden;
  &:hover {
    background-color: ${({ theme }) => theme.button.standart.hoverBg};
  }
  :active {
    background-color: ${({ theme }) => theme.button.standart.activeBg};
  }

  ${({ isEqual }) =>
    isEqual &&
    css`
      grid-column-end: span 2;
      background-color: ${({ theme }) => theme.button.isEqual.bg};
      &:hover {
        background-color: ${({ theme }) => theme.button.isEqual.hoverBg};
      }
      &:active {
        background-color: ${({ theme }) => theme.button.isEqual.activeBg};
      }
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