import React from 'react';
import { Progress } from 'antd';
function ExportList(props) {
    return (
        <>
            <div>
                {props.name}.mp4
        </div>
            <div>
                <Progress percent={50} showInfo={false} />
            </div>
        </>
    );
}

export default ExportList;