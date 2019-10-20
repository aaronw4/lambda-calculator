import React from "react";

export const SpecialButton = (props) => {
  return (
    <button className='buttons specialButtons' value={props.buttonData} onClick={props.displaySpecial}>
      {props.buttonData}
    </button>
  );
};
