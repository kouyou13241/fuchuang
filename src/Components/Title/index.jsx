import React from 'react';
import title from '../../asserts/title.png';
import girl from '../../asserts/girl.png';
import email from '../../asserts/email marketing_filled.png';
import downTriangle from '../../asserts/Triangle.png';
import phone from '../../asserts/phone.png';
function Title(props) {
    return (
        <div style={{display:'flex',justifyContent:'space-between',height:'50px',backgroundColor:'white',alignItems:'center'}}>
            <img src={title} height='30px' style={{marginLeft:'30px'}}/>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'10px',marginRight:'30px'}}>
                <div style={{marginRight:'30px',paddingTop:'4px'}}><img src={email} height='30px'/></div>
                <div style={{marginRight:'10px'}}><img src={girl} height='30px'/></div>
                <div>用户名</div>
                <div style={{marginRight:'30px',paddingBottom:'5px',paddingLeft:'3px'}}><img src={downTriangle} height='15px'/></div>
                <div><img src={phone} height='30px'/></div>
                <div style={{paddingBottom:'5px',paddingLeft:'1px'}}><img src={downTriangle} height='15px'/></div>

            </div>
        </div>
    );
}
export default Title;