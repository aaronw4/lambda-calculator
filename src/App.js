import React, {useState} from "react";
import "./App.css";
import {Numbers} from './components/ButtonComponents/NumberButtons/Numbers';
import {Display} from './components/DisplayComponents/Display';
import {Operators} from './components/ButtonComponents/OperatorButtons/Operators';
import {Specials} from './components/ButtonComponents/SpecialButtons/Specials';

import Logo from "./components/DisplayComponents/Logo";

export function App() {
  const [display, setDisplay] = useState('0');

  function displayNum(num) {
    let digit = num.target.value;
    if (display === '0') {
      setDisplay(digit);
    } else {
    setDisplay(display + digit);
  }}

  function operatorDisplay(op) {
    let operator = op.target.value;
    if (operator === '=') {
      let formula = display;
      let newFormula = formula.replace('x','*');
      let solution = eval(newFormula);
      setDisplay(solution);
    } else {
    setDisplay(display + operator);
  }}

  function displaySpecial(sp) {
    let special = sp.target.value;
    if (special === 'C') {
      setDisplay('0');
    } 
    else if (special === "+/-") {
      let number = Number(display);
      let newNumber = -1 * number;
      let string  = newNumber.toString();
      setDisplay(string);
    }
    else if (special === '%') {
      let solution = Number(display) / 100;
      setDisplay(solution);
    }
  }

  return (
    <div className="container">
      <Logo />
      <div className='display'>
        <Display display={display}/>
      </div>
      <div className="App">
        <div className='leftButtons'>
          <Specials displaySpecial={displaySpecial}/>
          <Numbers displayNum={displayNum}/>
        </div>
        <div className='rightButtons'>
          <Operators operatorDisplay={operatorDisplay}/> 
        </div>       
      </div>
    </div>
  );
}

export default App;
