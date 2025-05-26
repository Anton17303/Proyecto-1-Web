import { useCalculator } from './hooks/useCalculator'
import Buton from './components/Buton'
import Display from './components/Display'
import './App.css'

const App = () => {
  const { 
    display, 
    inputNumber, 
    inputDecimal, 
    performOperation, 
    toggleSign, 
    clear, 
    equals 
  } = useCalculator()

  return (
    <div className="contenedor">
      <div className="pad">
        <Display value={display} />
        <Button text="Clear" onClick={clear} type="clear" />
        <Button text="+/-" onClick={toggleSign} type="function" />
        <Button text="%" onClick={() => performOperation('%')} type="operation" />
        <Button text="7" onClick={() => inputNumber('7')} />
        <Button text="8" onClick={() => inputNumber('8')} />
        <Button text="9" onClick={() => inputNumber('9')} />
        <Button text="/" onClick={() => performOperation('/')} type="operation" />
        <Button text="4" onClick={() => inputNumber('4')} />
        <Button text="5" onClick={() => inputNumber('5')} />
        <Button text="6" onClick={() => inputNumber('6')} />
        <Button text="*" onClick={() => performOperation('*')} type="operation" />
        <Button text="1" onClick={() => inputNumber('1')} />
        <Button text="2" onClick={() => inputNumber('2')} />
        <Button text="3" onClick={() => inputNumber('3')} />
        <Button text="-" onClick={() => performOperation('-')} type="operation" />
        <Button text="0" onClick={() => inputNumber('0')} />
        <Button text="." onClick={inputDecimal} />
        <Button text="=" onClick={equals} type="equals" />
        <Button text="+" onClick={() => performOperation('+')} type="operation" />
      </div>
    </div>
  )
}

export default App

