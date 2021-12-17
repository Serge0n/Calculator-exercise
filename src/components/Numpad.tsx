import { FC } from 'react'
import styled from 'styled-components'
import { Digit, Operator } from '../types';
import { Button } from './Button'

const StyledNumpad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  padding: 1em;
`

interface NumpadProps {
  onDigitClick: (digit: Digit) => void
  onOperatorClick: (operator: Operator) => void
  onChangeSignClick: () => void
  onResetClick: () => void
  onDeleteClick: () => void
  onCalculateClick: () => void
  onDotClick: () => void
}

export const Numpad:FC<NumpadProps>  = ({
  onDigitClick,
  onOperatorClick,
  onChangeSignClick,
  onResetClick,
  onDeleteClick,
  onCalculateClick,
  onDotClick
}) => {

  return (
    <StyledNumpad>
      <Button value="C" onClick={onResetClick}/>
      <Button value="<=" onClick={onDeleteClick}/>
      <Button value="+-" onClick={onChangeSignClick} />
      <Button value="/" onClick={() => onOperatorClick("/")}/>

      <Button value="7" onClick={() => onDigitClick(7)}/>
      <Button value="8" onClick={() => onDigitClick(8)}/>
      <Button value="9" onClick={() => onDigitClick(9)}/>
      <Button value="X"onClick={() => onOperatorClick("*")}/>

      <Button value="4" onClick={() => onDigitClick(4)}/>
      <Button value="5" onClick={() => onDigitClick(5)}/>
      <Button value="6" onClick={() => onDigitClick(6)}/>
      <Button value="-" onClick={() => onOperatorClick("-")}/>

      <Button value="1" onClick={() => onDigitClick(1)}/>
      <Button value="2" onClick={() => onDigitClick(2)}/>
      <Button value="3" onClick={() => onDigitClick(3)}/>
      <Button value="+" onClick={() => onOperatorClick("+")}/>

      <Button value="0" onClick={() => onDigitClick(0)}/>
      <Button value="." onClick={onDotClick}/>
      <Button value="=" onClick={onCalculateClick} isEqual/>
    </StyledNumpad>
  )
}