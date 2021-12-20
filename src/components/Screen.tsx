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
  background-color: rgba(9, 5, 34, 0.4);
`

const StyledScreen = styled.div`
  font-size: 2.3em;
  color: #fff;
`

const StyledOperator = styled.div`
  font-size: 1em;
  color: rgba(209, 53, 13);
`

interface ScreenProps {
  screen: string
  operator: Operator | undefined
}

export const Screen: FC<ScreenProps> = ({ screen, operator }) => {
  return (
    <StyledDisplay>
      <StyledOperator>{operator}</StyledOperator>
      <StyledScreen>{screen}</StyledScreen>
    </StyledDisplay>
  )
}