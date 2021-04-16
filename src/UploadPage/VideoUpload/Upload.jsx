import React from 'react';
import { Progress } from 'antd';
import { EditTwoTone,CloseOutlined} from '@ant-design/icons';

import './Upload.css';
function Video(props) {
    return (
        <>
            <div style={{ marginBottom:'15px',marginTop:'15px', border: '2px solid #f0f0f0', backgroundColor: '#fafafa', width: '100%' }}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', margin: '5px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'orange', marginRight: '5px' }}><div style={{ fontSize: '4px' }}>1</div></div>
                    <div style={{ fontSize: '8px' }}>{props.title}.mp4</div>
                    <EditTwoTone style={{ margin: '5px' }} />
                    </div>
                    <div style={{ width: '70%', display: 'flex', justifyContent: 'flex-end' }}><CloseOutlined style={{margin:'3px'}}/></div>
                </div>

                <div className="upload">
                    <Progress percent={50} showInfo={false} />
                    <div>3.32M 上传成功</div>
                </div>
            </div>

        </>
    );
}

export default Video;