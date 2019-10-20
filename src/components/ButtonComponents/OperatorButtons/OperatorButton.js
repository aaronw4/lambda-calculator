import React from "react";

export const OperatorButton = (props) => {
  return (
    <button className='buttons operatorButtons' value={props.buttonData} onClick={props.operatorDisplay}>
      {props.buttonData}
    </button>
  );
};
