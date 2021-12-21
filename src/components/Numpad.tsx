import { FC, useEffect } from 'react'
import styled from 'styled-components'
import { Digit, Operator } from '../types';
import { Button } from './Button'

const StyledNumpad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
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
  const handleKeyDown = ({ key }: KeyboardEvent) => {
    switch (true) {
      case (Number(key) >= 0 && Number(key) <=9):
        onDigitClick(Number(key) as Digit)
        break
      case key === "." || key === ",":
        onDotClick()
        break
      case key === "+" || key === "-" || key === "*" || key === "/":
        onOperatorClick(key as Operator)
        break
      case key === "=" || key === "Enter":
        onCalculateClick()
        break
      case key === "Backspace" || key === "Delete":
        onDeleteClick()
        break
      case key === "Clear":
        onResetClick()
        break
      case key === "±":
        onChangeSignClick()
        break
      default:
        return
    }
  }


  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown)
    return () => document.body.removeEventListener('keydown', handleKeyDown)
  })

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