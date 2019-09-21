import React from "react";

export const NumberButton = (props) => {
  return (
    <button className='buttons numberButtons'>      
      {props.buttonData}
    </button>
  );
};
