import React from 'react';
import {Progress} from 'antd';
import Paperclip from '../Components/Paperclip';
export default function ExportStatus()
{
    return(
        <div style={{backgroundColor:'white'}}>
            <Paperclip text="处理状态"/>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'60%'}}><Progress type="circle"/></div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div>已处理0/9</div>
                <div>预计12: 38前处理完毕</div>
            </div>
        </div>
    );
}