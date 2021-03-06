import { FC, useState } from "react"
import styled from "styled-components"
import { Digit, Operator } from "../types"
import { Numpad } from "./Numpad"
import { Display } from "./Display"
import { ThemeToggler } from "./ThemeToggler"
import { calculate } from "../utils/calculate"
import { checkDivideByZero } from "../utils/checkDivideByZero"

const StyledCalculator = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 300px;
  height: 500px;
  background-color: ${({ theme }) => theme.bg};
  overflow: hidden;
`

const MAX_DIGITS = 11

interface CalculatorProps {
  themeToggler: () => void
}

export const Calculator: FC<CalculatorProps> = ({ themeToggler }) => {
  const [screen, setScreen] = useState("0")
  const [operator, setOperator] = useState<Operator>()
  const [isWaitingForRightOperand, setIsWaitingForRightOperand] = useState(true)
  const [result, setResult] = useState(0)

  const onDigitClick = (digit: Digit) => {
    if (screen.length >= MAX_DIGITS && !operator) return

    let newScreen = screen

    if (isWaitingForRightOperand) {
      newScreen = ""
      setIsWaitingForRightOperand(false)
    }

    if (screen !== '0') {
      newScreen += digit.toString()
    } else {
      newScreen = digit.toString()
    }

    if (screen.length >= MAX_DIGITS && !isWaitingForRightOperand) return
    setScreen(newScreen)
  }

  const onOperatorClick = (newOperator: Operator) => {
    const rightOperand = Number(screen)

    if (operator && !isWaitingForRightOperand) {
      if (checkDivideByZero(rightOperand, operator)) return

      const newResult = calculate(result, rightOperand, operator)
      setResult(newResult)
      setScreen(newResult.toString().slice(0, MAX_DIGITS))
    } else {
      setResult(rightOperand)
    }

    setOperator(newOperator)
    setIsWaitingForRightOperand(true)
  }

  const onChangeSignClick = () => {
    if (screen === "0") return
    Number(screen) > 0 ? setScreen('-' + screen) : setScreen(screen.slice(1))
  }

  const onResetClick = () => {
    setScreen("0")
    setIsWaitingForRightOperand(true)
    setOperator(undefined)
    setResult(0)
  }

  const onDeleteClick = () => {
    setScreen((screen.length === 2 && screen[0] === "-") || screen.length === 1 ? "0" : screen.slice(0,-1))
  }

  const onCalculateClick = () => {
    const rightOperand = Number(screen)

    if (operator && !isWaitingForRightOperand) {
      if (checkDivideByZero(rightOperand, operator)) return

      const newResult = calculate(result, rightOperand, operator)
      setResult(newResult as number)
      setScreen(newResult.toString().slice(0, MAX_DIGITS))
      setOperator(undefined)
    } else {
      setScreen(rightOperand.toString())
    }

    setResult(rightOperand)
    setIsWaitingForRightOperand(true)
  }

  const onDotClick = () => {
    if (screen.indexOf('.') === -1 && screen.length < MAX_DIGITS) {
      setScreen(screen + ".")
    }
  }

  return (
    <StyledCalculator>
      <ThemeToggler themeToggler={themeToggler} />
      <Display screen={screen} operator={operator}/>
      <Numpad
        onDigitClick={onDigitClick}
        onOperatorClick={onOperatorClick}
        onChangeSignClick={onChangeSignClick}
        onResetClick={onResetClick}
        onDeleteClick={onDeleteClick}
        onCalculateClick={onCalculateClick}
        onDotClick={onDotClick}
      />
    </StyledCalculator>
  )
}
