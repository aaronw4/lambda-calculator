import React from "react";
import {numbers} from '../../../data.js';
import {NumberButton} from './NumberButton.js';
import { tsPropertySignature } from "@babel/types";

export const Numbers = (props) => {
  return (
    <div className='numbers' >      
       {numbers.map(data => {
      return <NumberButton buttonData = {data} displayNum={props.displayNum}/>}
  )}
    </div>
  );
};
