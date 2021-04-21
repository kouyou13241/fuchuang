import React from 'react';
import Button from '../../Components/Button/Button';
import girl from '../../asserts/girl.png';
import {Card} from 'antd';
export default function Administrator()
{
    return(
        <Card style={{height:'240px',backgroundColor:'white',width:'239px',margin:'20px',marginRight:'20px'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start'}}>
            <img src={girl} height='100px' width='100px'/>
            <p>管理员</p>
            <span><Button text="最高权限"/></span>
        </div>
        </Card>
    )
}