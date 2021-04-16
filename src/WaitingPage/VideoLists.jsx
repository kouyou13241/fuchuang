import React from 'react';
import VideoList from './VideoList';
import PaperClip from '../Components/Paperclip';
function VideoLists(props) {
    return (

        <div style={{ backgroundColor: 'white', width: '93%', margin: '50px' }}>
            <PaperClip text="视频列表" />
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column',margin:'30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#feffe6', width: '90%', height: '40px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>视频序号</div>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 0.9 }}>视频名称</div>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>视频详情</div>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>视频时长<div style={{ width: '20px' }}></div></div>
                </div>
                <div style={{ width: '90%', height: '200px', overflow: 'auto' }}>
                    <VideoList number={1} name="色彩原理概论.mp4" detail="中文普通话，其他" length="00:03:06" />
                    <VideoList number={1} name="色彩原理概论.mp4" detail="中文普通话，其他" length="00:03:06" />
                    <VideoList number={1} name="色彩原理概论.mp4" detail="中文普通话，其他" length="00:03:06" />
                    <VideoList number={1} name="色彩原理概论.mp4" detail="中文普通话，其他" length="00:03:06" />
                    <VideoList number={1} name="色彩原理概论.mp4" detail="中文普通话，其他" length="00:03:06" />
                    <VideoList number={1} name="色彩原理概论.mp4" detail="中文普通话，其他" length="00:03:06" />
                    <VideoList number={1} name="色彩原理概论.mp4" detail="中文普通话，其他" length="00:03:06" />
                    <VideoList number={1} name="色彩原理概论.mp4" detail="中文普通话，其他" length="00:03:06" />
                    <VideoList number={1} name="色彩原理概论.mp4" detail="中文普通话，其他" length="00:03:06" />
                    <VideoList number={1} name="色彩原理概论.mp4" detail="中文普通话，其他" length="00:03:06" />
                    <VideoList number={1} name="色彩原理概论.mp4" detail="中文普通话，其他" length="00:03:06" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#feffe6', width: '90%', height: '40px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>共9条视频</div>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 0.9 }}></div>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}></div>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>视频总长18：00：15<div style={{ width: '20px' }}></div></div>
                </div>
            </div>

        </div>

    );
}

export default VideoLists;