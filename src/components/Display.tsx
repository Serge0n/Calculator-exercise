import { FC } from 'react'
import styled from 'styled-components'
import { Operator } from '../types'

const StyledDisplay = styled.div`
  flex-grow: 1;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: ${({ theme }) => theme.screenBg};
`

const StyledScreen = styled.div`
  font-size: 2.3em;
  color: ${({ theme }) => theme.color};
`

const StyledOperator = styled.div`
  font-size: 1em;
  color: ${({ theme }) => theme.operatorColor};
`

interface ScreenProps {
  screen: string
  operator: Operator | undefined
}

export const Display: FC<ScreenProps> = ({ screen, operator }) => {
  return (
    <StyledDisplay>
      <StyledOperator>{operator}</StyledOperator>
      <StyledScreen>{screen}</StyledScreen>
    </StyledDisplay>
  )
}

StyledOperator.displayName = "Operator"
StyledScreen.displayName = "Screen"