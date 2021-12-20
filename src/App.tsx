import { FC, useState } from 'react'
import { Calculator } from './components/Calculator'
import { Numpad } from './components/Numpad'
import { Screen } from './components/Screen'
import { Digit, Operator } from './types'

export const App:FC  = () => {
  const [screen, setScreen] = useState("0")
  const [operator, setOperator] = useState<Operator>()
  const [waitingForRightOperand, setWaitingForRightOperand] = useState(false)
  const [leftOperand, setLeftOperand] = useState("")
  const [result, setResult] = useState(0)

  console.log({
    screen,
    operator,
    waitingForRightOperand,
    leftOperand,
    result
  })

  const calculate = (rightOperand: number, pendingOperator: Operator): boolean => {
    let newResult = Number(leftOperand)

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
    setScreen(newResult.toString().slice(0, 13))

    return true
  }

  const onDigitClick = (digit: Digit) => {
    console.log(digit)

    if (screen.length > 13) return 

    let newScreen = screen

    if (waitingForRightOperand) {
      newScreen = ''
      setWaitingForRightOperand(false)
    }

    if (screen !== '0') {
      newScreen += digit.toString()
    } else {
      newScreen = digit.toString()
    }

    setScreen(newScreen)
  }

  const onOperatorClick = (operator: Operator) => {
    // const operand = Number(screen)

    // if (typeof operator !== 'undefined' && !waitingForOperand) {
    //   if (!calculate(operand, operator)) {
    //     return
    //   }
    // } else {
    //   setResult(operand)
    // }

    setLeftOperand(screen)
    setOperator(operator)
    setWaitingForRightOperand(true)
    console.log(operator)
  }

  const onChangeSignClick = () => {
    console.log("+-")
    if (screen === "0") return
    Number(screen) > 0 ? setScreen('-' + screen) : setScreen(screen.slice(1))
  }

  const onResetClick = () => {
    setScreen("0")
    setWaitingForRightOperand(false)
    setOperator(undefined)
    setLeftOperand("")
    setResult(0)
    console.log("C")
  }

  const onDeleteClick = () => {
    setScreen((screen.length === 2 && screen[0] === "-") || screen.length === 1 ? "0" : screen.slice(0,-1))
    console.log("<=", parseInt(screen, 10))
  }

  const onCalculateClick = () => {

    const rightOperand = Number(screen)

    if (typeof operator !== 'undefined' && !waitingForRightOperand) {
      if (!calculate(rightOperand, operator)) {
        return
      }

      // setPendingOperator(undefined)
    } else {
      setScreen(rightOperand.toString())
    }

    // setResult(operand)
    setWaitingForRightOperand(true)
    setOperator(undefined)

    console.log("=")
  }

  const onDotClick = () => {
    if (screen.indexOf('.') === -1) {
      setScreen(screen + ".")
    }
    console.log(".")
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