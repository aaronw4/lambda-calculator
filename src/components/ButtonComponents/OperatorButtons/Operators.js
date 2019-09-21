import React from "react";
import {operators} from '../../../data';
import {OperatorButton} from './OperatorButton';


//import any components needed

//Import your array data to from the provided data file

export const Operators = () => {
  const operatorsArray = operators;

  return (
    <div className='operators'>
      {operatorsArray.map(data => {
        return <OperatorButton buttonData = {data.char}/>
      })}
    </div>
  );
};
