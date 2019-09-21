import React from "react";
import "./App.css";
import {Numbers} from './components/ButtonComponents/NumberButtons/Numbers';
import {Display} from './components/DisplayComponents/Display';
import {Operators} from './components/ButtonComponents/OperatorButtons/Operators';
import {Specials} from './components/ButtonComponents/SpecialButtons/Specials';

import Logo from "./components/DisplayComponents/Logo";

export function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  return (
    <div className="container">
      <Logo />
      <div className='display'>
        <Display />
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
