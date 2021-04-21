import React from 'react';
import indent from '../../asserts/Indent.png';
import user from '../../asserts/User.png';
import dollar from '../../asserts/Account.png';
var fontStyle = {
    fontSize: 16,
    marginLeft: 7,
    marginRight:0,
    marginBottom:0,
    marginBottom:0
};
export default function AttributeList()
{
    return(
        <div style={{backgroundColor:'white',width:'239px',margin:'20px',marginRight:'20px', padding:'15px'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-between'}}>
            <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between',marginLeft:'40px'}}>
                <img src={indent} height='25px' width='25px'/>
                <p style={fontStyle}>我的订单</p>
            </div>
            <hr style={{marginTop:'10px',width:'200px'}}></hr>
            <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between',marginLeft:'40px'}}>
                <img src={dollar} height='25px' width='25px'/>
                <p style={fontStyle}>个人账户</p>
            </div>
            <hr style={{marginTop:'10px',width:'200px'}}></hr>
            <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between',marginLeft:'40px'}}>
                <img src={user} height='25px' width='25px'/>
                <p style={fontStyle}>个人信息</p>
            </div>
        </div>
        </div>
    )
}