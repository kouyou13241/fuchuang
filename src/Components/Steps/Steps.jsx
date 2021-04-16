import React from 'react';
import Number from './number';
export default function Steps() {
    return (
        <div style={{ width:'92%',paddingTop:'20px', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Number number={1} />
            <div>上传视频</div>
            <div style={{ width: '20%' }}><hr /></div>
            <Number number={2} />
            <div>编辑视频</div>
            <div style={{ width: '20%' }}><hr /></div>
            <Number number={3} /><div>导出视频</div>
            <div style={{ width: '20%' }}><hr /></div>
            <Number number={4} /><div>分析报告</div>
        </div>
    );
}