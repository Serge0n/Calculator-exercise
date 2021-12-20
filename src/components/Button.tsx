import { FC } from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button<Omit<ButtonProps, "value">>`
  font-family: inherit;
  font-size: inherit;
  background-color: rgba(27, 11, 133, 0.6);
  color: #fff;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  overflow: hidden;
  &:hover {
    background-color: rgba(27, 11, 133, 0.7);
  }
  
  :active {
    background-color: rgba(27, 11, 133);
  }

  ${({ isEqual }) =>
    isEqual &&
    css`
      grid-column-end: span 2;
      background-color: rgba(209, 53, 13, 0.8);
      &:hover {
        background-color: rgba(209, 53, 13, 0.9);
      }
      &:active {
        background-color: rgba(209, 53, 13);
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