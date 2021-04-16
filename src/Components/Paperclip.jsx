import React from 'react';
import paperclip from '../asserts/paperclip.png'; 
function Paperclip(props) {
    return (
        <div style={{margin:'5px',display:'flex'}}>
            <img src={paperclip} height='15px' style={{margin:'2px'}}/>
            <div style={{fontSize:'8px'}}>{props.text}</div>
        </div>
    );
}

export default Paperclip;