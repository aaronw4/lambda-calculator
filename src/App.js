import React, {useState} from "react";
import "./App.css";
import {Numbers} from './components/ButtonComponents/NumberButtons/Numbers';
import {Display} from './components/DisplayComponents/Display';
import {Operators} from './components/ButtonComponents/OperatorButtons/Operators';
import {Specials} from './components/ButtonComponents/SpecialButtons/Specials';

import Logo from "./components/DisplayComponents/Logo";

export function App() {
  const [display, setDisplay] = useState('0');

  return (
    <div className="container">
      <Logo />
      <div className='display'>
        <Display display={display}/>
      </div>
      <div className="App">
        <div className='leftButtons'>
          <Specials />
          <Numbers />
        </div>
        <div className='rightButtons'>
          <Operators /> 
        </div>       
      </div>
    </div>
  );
}

export default App;
