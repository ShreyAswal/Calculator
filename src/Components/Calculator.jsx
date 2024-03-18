import React from 'react'
import './Calculator.css'

function Calculator() {
  return (
    <div className='calculator'>
      <div className='display'>
        <div className='logic'>9*10=90</div>
        <div className='result'>90</div>
      </div>
      <div className='keys'>
        <button id="clear" className='double'>AC</button>
        <button id="divide" className='symbols'>/</button>
        <button id="multiply" className='symbols'>*</button>

        <button id="seven" className='numbers'>7</button>
        <button id="eight" className='numbers'>8</button>
        <button id="nine" className='numbers'>9</button>
        <button id="subtract" className='symbols'>-</button>

        <button id="four" className='numbers'>4</button>
        <button id="five" className='numbers'>5</button>
        <button id="six" className='numbers'>6</button>
        <button id="add" className='symbols'>+</button>

        <button id="one" className='numbers'>1</button>
        <button id="two" className='numbers'>2</button>
        <button id="three" className='numbers'>3</button>
        <button id="equal" className='symbols'>=</button>

        <button id="zero" className='double numbers'>0</button>
        <button id="decimal" className='symbols'>.</button>

      </div>
    </div>
  )
}

export default Calculator
