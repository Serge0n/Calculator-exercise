import { FC } from 'react'
import styled from 'styled-components'
import { Operator } from '../types'

const StyledDisplay = styled.div`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`

const StyledScreen = styled.div`
  font-size: 2em;
  color: #fff;
`

const StyledOperator = styled.div`
  font-size: 1em;
  color: #fff;
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