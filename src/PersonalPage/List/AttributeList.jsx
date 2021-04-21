import React from 'react';
import quillPen from '../../asserts/Pensyumaobi.png';
import tool from '../../asserts/gongchengsheji.png';
var fontStyle = {
    fontSize: 16,
    margin:0,
    paddingLeft:7
};
export default function AttributeList()
{
    return(
        <div style={{backgroundColor:'white',width:'239px',margin:'20px',marginRight:'20px', padding:'15px'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-between'}}>
            <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between',marginLeft:'40px'}}>
                <img src={quillPen} height='25px' width='25px'/>
                <p style={fontStyle}>我的修编工程</p>
            </div>
            <hr style={{marginTop:'10px',width:'200px'}}></hr>
            <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between',marginLeft:'40px'}}>
                <img src={tool} height='25px' width='25px'/>
                <p style={fontStyle}>讲师修编审计</p>
            </div>
        </div>
        </div>
    )
}