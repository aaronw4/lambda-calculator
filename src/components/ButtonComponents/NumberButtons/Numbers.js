import React from "react";
import {numbers} from '../../../data.js';
import {NumberButton} from './NumberButton.js';

export const Numbers = () => {
  return (
    <div className='numbers'>      
       {numbers.map(data => {
      return <NumberButton buttonData = {data}/>}
  )}
    </div>
  );
};
