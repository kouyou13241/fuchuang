import React from 'react';

function UploadButton(props) {
    return (
        <button style={{height:'35px',width:'100px',borderRadius:'3px',backgroundColor:props.color,border:'0px',color:'white'}}>
           {props.text}
        </button>
             
            
        
    );
}

export default UploadButton;