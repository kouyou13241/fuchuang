import React from 'react';
import './Button.css';
export default function Button(props)
{
    return(
        <button className="button onhover">
            <div style={{color:'#ffa940'}}>{props.text}</div>
        </button>
    )
}