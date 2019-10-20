import React from "react";
import {specials} from '../../../data';
import {SpecialButton} from './SpecialButton';

export const Specials = (props) => {
  return (
    <div className='specials'>
      {specials.map(data => {
        return <SpecialButton buttonData = {data} displaySpecial={props.displaySpecial}/>
      })}
    </div>
  );
};
