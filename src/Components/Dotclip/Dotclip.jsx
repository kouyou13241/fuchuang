import React from 'react';
import './Dotclip.css'; 
export default function Dotclip(props) {
    return (
        <>
        <div style={{margin:'5px',display:'flex',justifyContent:"row",marginLeft:'11px',alignItems:'center'}}>
            <div style={{width: '10px',height: '10px', borderRadius: '50%',backgroundColor: '#ff662f',marginRight:'5px'}}></div>
            <div style={{fontSize:'14px'}}>{props.text}</div>
        </div>
        </>
    );
}