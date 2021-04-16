import React from 'react';
import rest from '../asserts/rest.png';
function Rest(props) {
    return (
        <div style={{display:'flex',flexDirection:'column',backgroundColor:'white',margin:'15px',height:'100%',justifyContent:'center'}}>
            <div style={{fontSize:'30px',display:'flex',alignItems:'center',justifyContent:'center'}}>休息一下，马上回来</div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><img src={rest} width="300px" /></div>
        </div>
    );
}

export default Rest;