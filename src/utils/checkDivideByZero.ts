import { Operator } from "../types"

export const checkDivideByZero = (rightOperand: number, pendingOperator: Operator): boolean => {
  if (rightOperand === 0 && pendingOperator === "/") {
    return true
  } else {
    return false
  }
}