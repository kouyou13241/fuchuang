import React from 'react';
import title from '../../asserts/title.png';
import girl from '../../asserts/girl.png';
function Title(props) {
    return (
        <div style={{display:'flex',justifyContent:'space-between',height:'50px',backgroundColor:'white',alignItems:'center'}}>
            <img src={title} height='30px' style={{marginLeft:'30px'}}/>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'10px',marginRight:'30px'}}>
                <div>(email)</div>
                <div><img src={girl} height='30px'/></div><div>用户名</div>
            </div>
        </div>
    );
}

export default Title;