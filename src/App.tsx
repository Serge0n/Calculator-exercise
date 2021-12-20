import { FC, useState } from 'react'
import { Calculator } from './components/Calculator'
import { Numpad } from './components/Numpad'
import { Screen } from './components/Screen'
import { Digit, Operator } from './types'

export const App:FC  = () => {
  const [screen, setScreen] = useState("0")
  const [operator, setOperator] = useState<Operator>()
  const [waitingForRightOperand, setWaitingForRightOperand] = useState(true)
  const [result, setResult] = useState(0)

  const calculate = (rightOperand: number, pendingOperator: Operator): boolean => {
    let newResult = result

    switch (pendingOperator) {
      case '+':
        newResult += rightOperand
        break
      case '-':
        newResult -= rightOperand
        break
      case '*':
        newResult *= rightOperand
        break
      case '/':
        if (rightOperand === 0) {
          return false
        }

        newResult /= rightOperand
    }

    setResult(newResult)
    setScreen(newResult.toString().slice(0, 11))

    return true
  }

  const onDigitClick = (digit: Digit) => {

    if (screen.length >= 11) return 

    let newScreen = screen

    if (waitingForRightOperand) {
      newScreen = ""
      setWaitingForRightOperand(false)
    }

    if (screen !== '0') {
      newScreen += digit.toString()
    } else {
      newScreen = digit.toString()
    }

    setScreen(newScreen)
  }

  const onOperatorClick = (newOperator: Operator) => {
    const rightOperand = Number(screen)

    if (operator && !waitingForRightOperand) {
      if (!calculate(rightOperand, operator)) return
    } else {
      setResult(rightOperand)
    }

    setOperator(newOperator)
    setWaitingForRightOperand(true)
  }

  const onChangeSignClick = () => {
    if (screen === "0") return
    Number(screen) > 0 ? setScreen('-' + screen) : setScreen(screen.slice(1))
  }

  const onResetClick = () => {
    setScreen("0")
    setWaitingForRightOperand(true)
    setOperator(undefined)
    setResult(0)
  }

  const onDeleteClick = () => {
    setScreen((screen.length === 2 && screen[0] === "-") || screen.length === 1 ? "0" : screen.slice(0,-1))
  }

  const onCalculateClick = () => {
    const rightOperand = Number(screen)

    if (operator && !waitingForRightOperand) {
      if (!calculate(rightOperand, operator)) return
      setOperator(undefined)
    } else {
      setScreen(rightOperand.toString())
    }

    setResult(rightOperand)
    setWaitingForRightOperand(true)
  }

  const onDotClick = () => {
    if (screen.indexOf('.') === -1) {
      setScreen(screen + ".")
    }
  }

  return (
    <Calculator>
      <Screen screen={screen} operator={operator}/>
      <Numpad
        onDigitClick={onDigitClick}
        onOperatorClick={onOperatorClick}
        onChangeSignClick={onChangeSignClick}
        onResetClick={onResetClick}
        onDeleteClick={onDeleteClick}
        onCalculateClick={onCalculateClick}
        onDotClick={onDotClick}
      />
    </Calculator>
  )
}