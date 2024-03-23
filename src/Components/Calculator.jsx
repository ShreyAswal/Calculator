import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [formula, setformula] = useState("");
  const [result, setresult] = useState(0);

  const handleNumber = (e) => {
    const current = e.target.textContent;
    //When nothing is entered
    if (formula === "") {
      setformula(current);
      setresult(current);
      return;
    }
    //Doesn't allow multiple decimals in one number
    if (current === "." && String(result).includes(".")) {
      return;
    }

    //When the last entered value is a symbol
    if (result === "+" || result === "-" || result === "*" || result === "/") {
      setformula(formula + current);
      setresult(current);
    } else {
      //When the last entered value is a number
      setformula(formula + current);
      setresult(result + current);
    }
  };

  const handleSymbols = (e) => {
    const combination = e.target.textContent;
    //When nothing is entered
    if (formula === "") {
      setformula(combination);
      setresult(combination);
      return;
    }
    //When previously entered value is =
    if (formula.includes("=")) {
      setformula(result + combination);
      setresult(combination);
      return;
    }

    //To add 0 to empty decimal
    if(result === '.'){
      setformula(formula + '0' + combination)
      setresult(combination)
      return;
    }
    //When the last entered value is a symbol just replace the symbol with new symbol
    if (result === "+" || result === "-" || result === "*" || result === "/") {
      setformula(formula.slice(0, -1) + combination);
      setresult(combination);
    } else {
      //When the last entered value is a number
      setformula(formula + combination);
      setresult(combination);
    }
  };

  //Clears the display
  const handleClear = () => {
    setformula("");
    setresult(0);
  };

  const handleEqual = () => {

    // When entering = twice replace formula with the result
    if(String(formula).includes("=")){
      setformula(result + " = " + result);
      setresult(result);
      return;
    }
      // Last entered value is a symbol don't do anything
      if (
        result === "+" || result === "-" || result === "*" || result === "/" ){
        return;
      }
      // Last entered value is a decimal don't do anything
      if(result === '.'){
        return;
      }
      //When nothing is entered
      if(formula === ""){
        setformula(0)
        setresult(0)
        return; 
      };

      //Actual calculation of the formula using eval
      // eslint-disable-next-line no-eval
      const ans = eval(formula);

      //Display the formula and the result
      setformula(formula + " = " + ans);
      setresult(ans);
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="logic">{formula}</div>
        <div className="result">{result}</div>
      </div>
      <div className="keys">
        <button id="clear" className="double" onClick={handleClear}>
          AC
        </button>
        <button id="divide" className="symbols" onClick={handleSymbols}>
          /
        </button>
        <button id="multiply" className="symbols" onClick={handleSymbols}>
          *
        </button>

        <button id="seven" className="numbers" onClick={handleNumber}>
          7
        </button>
        <button id="eight" className="numbers" onClick={handleNumber}>
          8
        </button>
        <button id="nine" className="numbers" onClick={handleNumber}>
          9
        </button>
        <button id="subtract" className="symbols" onClick={handleSymbols}>
          -
        </button>

        <button id="four" className="numbers" onClick={handleNumber}>
          4
        </button>
        <button id="five" className="numbers" onClick={handleNumber}>
          5
        </button>
        <button id="six" className="numbers" onClick={handleNumber}>
          6
        </button>
        <button id="add" className="symbols" onClick={handleSymbols}>
          +
        </button>

        <button id="one" className="numbers" onClick={handleNumber}>
          1
        </button>
        <button id="two" className="numbers" onClick={handleNumber}>
          2
        </button>
        <button id="three" className="numbers" onClick={handleNumber}>
          3
        </button>
        <button id="equals" className="symbols" onClick={handleEqual}>
          =
        </button>

        <button id="zero" className="double numbers" onClick={handleNumber}>
          0
        </button>
        <button id="decimal" className="symbols" onClick={handleNumber}>
          .
        </button>
      </div>
    </div>
  );
}

export default Calculator;
