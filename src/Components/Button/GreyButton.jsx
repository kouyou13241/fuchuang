import React from 'react';
import './GreyButton.css';
export default function GreyButton(props)
{
    return(
        <button className="greyButton">
            <div style={{color:'white'}}>{props.text}</div>
        </button>
    )
}