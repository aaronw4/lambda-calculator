import React from "react";

export const SpecialButton = (props) => {
  return (
    <button className='buttons specialButtons'>
      {props.buttonData}
    </button>
  );
};
