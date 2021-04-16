import { Grid } from 'antd';
import React from 'react';
import './index.css';
import rest from '../asserts/rest.png';
function Rest(props) {
    return (
        <div className='rest-box'>
            <div style={{fontSize:'50px',display:'flex',alignItems:'center',justifyContent:'center'}}>休息一下，马上回来</div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><img src={rest} width="300px" /></div>
            
        </div>
    );
}

export default Rest;