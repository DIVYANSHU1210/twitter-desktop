import React from 'react';
import "./style.css";

function CustomButton({name, clickFunction}) {
  return (
    <button className='custom-btn' onClick={clickFunction}>
        {name}
    </button>
  )
}

export default CustomButton