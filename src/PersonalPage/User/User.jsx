import React from 'react';
import GreyButton from '../../Components/Button/GreyButton';
import {Card} from 'antd';
import girl from '../../asserts/girl.png'
export default function User()
{
    return(
        <Card style={{height:'240px',backgroundColor:'white',width:'239px',margin:'20px',marginRight:'20px'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start'}}>
            <img src={girl} height='100px' width='100px'/>
            <p>用户名</p>
            <span><GreyButton text="未开通VIP"/></span>
            
        </div>
        </Card>
    )
}