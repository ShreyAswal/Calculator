import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {
  const [formula,setformula] = useState("");
  const [result,setresult] = useState(0);

  const handleCurrent = (e) => {
    const current = e.target.textContent;
    if( formula === ""){
      setformula(current);
      setresult(current);
      return;
    }
    if(result === '+' || result === '-' || result === '*' || result === '/' ){
      setformula(formula + current)
      setresult(current)
    } else {
      setformula(formula + current)
      setresult(result + current)
    }
    // setformula(current);
    // setresult(current)
  };

  const handleCombination = (e) => {
    const combination = e.target.textContent;
    if(formula === ""){
      setformula("");
      setresult(combination);
      return;
    }
    if(result === '+' || result === '-' || result === '*' || result === '/'){
      setformula(formula.slice(0,-1) + combination)
      setresult(combination)
    } else {
      setformula(formula + combination);
      setresult(combination);
    }
    
  }

  const handleClear = () => {
    setformula("")
    setresult("")
  }

  return (
    <div className='calculator'>
      <div className='display'>
        <div className='logic'>{formula}</div>
        <div className='result'>{result}</div>
      </div>
      <div className='keys'>
        <button id="clear" className='double' onClick={handleClear}>AC</button>
        <button id="divide" className='symbols' onClick={handleCombination}>/</button>
        <button id="multiply" className='symbols' onClick={handleCombination}>*</button>

        <button id="seven" className='numbers' onClick={handleCurrent}>7</button>
        <button id="eight" className='numbers' onClick={handleCurrent}>8</button>
        <button id="nine" className='numbers' onClick={handleCurrent}>9</button>
        <button id="subtract" className='symbols' onClick={handleCombination}>-</button>

        <button id="four" className='numbers' onClick={handleCurrent}>4</button>
        <button id="five" className='numbers' onClick={handleCurrent}>5</button>
        <button id="six" className='numbers' onClick={handleCurrent}>6</button>
        <button id="add" className='symbols' onClick={handleCombination}>+</button>

        <button id="one" className='numbers' onClick={handleCurrent}>1</button>
        <button id="two" className='numbers' onClick={handleCurrent}>2</button>
        <button id="three" className='numbers' onClick={handleCurrent}>3</button>
        <button id="equals" className='symbols'>=</button>

        <button id="zero" className='double numbers' onClick={handleCurrent}>0</button>
        <button id="decimal" className='symbols' onClick={handleCombination}>.</button>

      </div>
    </div>
  )
}

export default Calculator
