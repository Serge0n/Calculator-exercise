import { FC } from "react"
import styled from "styled-components"

const StyledCalculator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 300px;
  height: 500px;
  background-color: #485461;
  overflow: hidden;
`

export const Calculator: FC = ({ children }) => {
  return <StyledCalculator>{children}</StyledCalculator>
}
