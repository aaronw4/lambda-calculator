import React from "react";

export const NumberButton = (props) => {
  return (
    <button className='buttons numberButtons' value={props.buttonData}>      
      {props.buttonData}
    </button>
  );
};
