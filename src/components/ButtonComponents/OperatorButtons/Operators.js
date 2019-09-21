import React from "react";
import {operators} from '../../../data';
import {OperatorButton} from './OperatorButton';

export const Operators = () => {
  return (
    <div className='operators'>
      {operators.map(data => {
        return <OperatorButton buttonData = {data.char}/>
      })}
    </div>
  );
};
