import React from 'react';
import girl from '../../asserts/girl.png';


export default function List()
{
    return(
        <div style={{height:'151px',backgroundColor:'white',width:'239px',margin:'20px',marginRight:'20px', padding:'15px'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between'}}>
                <img src={girl} height='25px' width='25px'/>
                <p style={{margin:'0px',fontsize:'16px'}}>视频审核</p>
            </div>
            <hr style={{marginTop:'10px',width:'200px'}}></hr>
            <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between'}}>
                <img src={girl} height='25px' width='25px'/>
                <p style={{margin:'0px',fontsize:'16px'}}>视频修编审计</p>
            </div>
            <hr style={{marginTop:'10px',width:'200px'}}></hr>
            <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between'}}>
                <img src={girl} height='25px' width='25px'/>
                <p style={{margin:'0px',fontsize:'16px'}}> 讲师修编统计</p>
            </div>

        </div>
        </div>
    )
}