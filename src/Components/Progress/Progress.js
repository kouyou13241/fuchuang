import React from 'react';
export default function Progress() {
    return (
        <div style={{display:'flex'}}>
            <div style={{ width: '200px',height:'3px',backgroundColor:'black'}}></div>
            <div style={{ width: '5px', height: '10px', backgroundColor: 'black' }}>
            </div>
            <div style={{ width: '200px',height:'3px',backgroundColor:'black' }}></div>
        </div>
    );

}