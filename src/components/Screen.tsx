import { FC } from 'react'
import styled from 'styled-components'

const StyledDisplay = styled.div`
  padding: 1em;
`

const StyledScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  font-size: 2em;
  color: #fff;
`

interface ScreenProps {
  value: string
}

export const Screen: FC<ScreenProps> = ({ value }) => {
  return (
    <StyledDisplay>
      <StyledScreen>
        {value}
      </StyledScreen>
    </StyledDisplay>
  )
}