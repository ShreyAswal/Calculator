import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {
  const [formula,setformula] = useState(null);
  const [result,setresult] = useState(0);

  const handleCurrent = (e) => {
    const current = e.target.textContent;
    setresult(current)
  };

  return (
    <div className='calculator'>
      <div className='display'>
        <div className='logic'>{formula}</div>
        <div className='result'>{result}</div>
      </div>
      <div className='keys'>
        <button id="clear" className='double'>AC</button>
        <button id="divide" className='symbols' onClick={handleCurrent}>/</button>
        <button id="multiply" className='symbols' onClick={handleCurrent}>*</button>

        <button id="seven" className='numbers' onClick={handleCurrent}>7</button>
        <button id="eight" className='numbers' onClick={handleCurrent}>8</button>
        <button id="nine" className='numbers' onClick={handleCurrent}>9</button>
        <button id="subtract" className='symbols' onClick={handleCurrent}>-</button>

        <button id="four" className='numbers' onClick={handleCurrent}>4</button>
        <button id="five" className='numbers' onClick={handleCurrent}>5</button>
        <button id="six" className='numbers' onClick={handleCurrent}>6</button>
        <button id="add" className='symbols' onClick={handleCurrent}>+</button>

        <button id="one" className='numbers' onClick={handleCurrent}>1</button>
        <button id="two" className='numbers' onClick={handleCurrent}>2</button>
        <button id="three" className='numbers' onClick={handleCurrent}>3</button>
        <button id="equals" className='symbols'>=</button>

        <button id="zero" className='double numbers' onClick={handleCurrent}>0</button>
        <button id="decimal" className='symbols' onClick={handleCurrent}>.</button>

      </div>
    </div>
  )
}

export default Calculator
