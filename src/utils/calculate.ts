import { Operator } from "../types"

export const calculate = (result: number, rightOperand: number, pendingOperator: Operator): number => {

  let newResult = result*10

  switch (pendingOperator) {
    case '+':
      newResult = (newResult + rightOperand*10)/10
      break
    case '-':
      newResult = (newResult - rightOperand*10)/10
      break
    case '*':
      newResult = (newResult * rightOperand*10)/100
      break
    case '/':
      newResult = (newResult / rightOperand*10)/100
  }

  return newResult
}