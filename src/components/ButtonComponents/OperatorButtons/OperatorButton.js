import React from "react";

export const OperatorButton = (props) => {
  return (
    <button className='buttons operatorButtons'>
      {props.buttonData}
    </button>
  );
};
