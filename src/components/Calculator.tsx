import { FC } from "react"
import styled from "styled-components"

const StyledCalculator = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 300px;
  height: 500px;
  background-color: rgba(9, 5, 34, 0.6);
  overflow: hidden;
`

export const Calculator: FC = ({ children }) => {
  return <StyledCalculator>{children}</StyledCalculator>
}
