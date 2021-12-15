import { FC } from 'react'
import { Calculator } from './components/Calculator'
import { Numpad } from './components/Numpad'
import { Screen } from './components/Screen'

export const App:FC  = () => {

  return (
    <Calculator>
      <Screen value="1234567891011"/>
      <Numpad />
    </Calculator>
  )
}