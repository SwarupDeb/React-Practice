import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const incrementCounter = () => {
    if(counter < 50){
    setCounter(prevCounter=>prevCounter + 1)
    setCounter(prevCounter=>prevCounter + 1)
    setCounter(prevCounter=>prevCounter + 1)
    setCounter(prevCounter=>prevCounter + 1)

    }
    else{
      decrementCounter()
    }
  }
  const decrementCounter = () => {
    if (counter > 0){
      setCounter(counter - 1)
    }
    else {
      incrementCounter()
    }
  }
  return (
    <>
      <div>
        <h1>Counter Value: {counter}</h1>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
    </>
  )
}

export default App
