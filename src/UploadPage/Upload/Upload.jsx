import React from 'react';
import {Card} from 'antd';
import Button from '../../Components/Button/Button';
import Paperclip from '../../Components/Paperclip';
export default function Upload()
{
    return(
        <Card style={{height:'120px',backgroundColor:'white',width:'400px',margin:'20px',marginRight:'20px'}}>
        <Paperclip text='视频语言'/>
        <div style={{marginTop:'20px',marginLeft:'20px'}}>
        <span><Button text="中文"/></span>
        <span><Button text="英文"/></span>
        <span><Button text="中英文混合"/></span>
        </div>
        </Card>
    )
}