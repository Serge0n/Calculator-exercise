import { FC } from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const StyledNumpad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  padding: 1em;
`

export const Numpad:FC  = () => {
  return (
    <StyledNumpad>
        <Button value="C"/>
        <Button value="+-"/>
        <Button value="%"/>
        <Button value="/"/>

        <Button value="7"/>
        <Button value="8"/>
        <Button value="9"/>
        <Button value="X"/>

        <Button value="4"/>
        <Button value="5"/>
        <Button value="6"/>
        <Button value="-"/>

        <Button value="1"/>
        <Button value="2"/>
        <Button value="3"/>
        <Button value="+"/>

        <Button value="0"/>
        <Button value="."/>
        <Button value="="/>
    </StyledNumpad>
  )
}