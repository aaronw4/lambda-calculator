import React from "react";
import {numbers} from '../../../data.js';
import {NumberButton} from './NumberButton.js';

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

export const Numbers = (props) => {
  const numbersArray = numbers;  

  return (
    <div className='numbers-container'>      
       {numbersArray.map(data => {
      return <NumberButton buttonData = {data}/>}
  )}
    </div>
  );
};
