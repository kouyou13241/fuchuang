import React from 'react';
import Paperclip from '../Components/Paperclip';
import ExportList from './ExportList';
import {Progress} from 'antd';
function ExportStatus(props) {
    return (
        <div style={{ backgroundColor: 'white',margin:'15px',height:'100%'}}>
            <Paperclip text="处理状态" />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px' }}><Progress type="circle" /></div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>已处理0/9</div>
                <div>预计12: 38前处理完毕</div>
            </div>
            <div style={{width:'80%',marginLeft:'auto',marginRight:'auto',marginTop:'20px'}}>
            <ExportList name="色彩设计原理概论"/>
            <ExportList name="色彩设计原理概论"/>
            <ExportList name="色彩设计原理概论"/>
            <ExportList name="色彩设计原理概论"/>
            <ExportList name="色彩设计原理概论"/>
            </div>
        </div>
    );
}

export default ExportStatus;