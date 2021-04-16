import React from 'react';
import "./number.css";
export default function Number(props)
{
    // let backgroundcolor = props.trigger?'orange':'#d9d9d9';
    return(
    <div className="number">
    <div className="text">{props.number}</div>
    </div>
    );
}
