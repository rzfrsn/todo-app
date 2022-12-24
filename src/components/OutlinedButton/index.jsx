import React from 'react';
import './outlinedButton.scss';

function OutlinedButton(props) {
  return (
    <button className='btn outlined'>
      {props.prependIcon && <i className={props.prependIcon} style={{marginRight: '20px'}}></i>}
      {props.label}
    </button>
  )
}

export default OutlinedButton;