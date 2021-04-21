import React from 'react';
import VideoList from './VideoList';
import PaperClip from '../Components/Paperclip';
function VideoLists(props) {
    return (

        <div style={{ backgroundColor: 'white', width: '93%', margin: '50px' }}>
            <PaperClip text="视频列表" />
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column',margin:'30px'}}>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#feffe6', width: '90%', height: '40px' ,border:'2px solid #eeeeee' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>视频序号</div>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 0.9 }}>视频名称</div>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>视频详情</div>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>视频时长<div style={{ width: '20px' }}></div></div>
                </div>
                <div style={{ width: '90%', height: '200px', overflow: 'auto' }}>
                    <VideoList  number={1} name="计算机网络.mp4" detail="中文普通话" length="01:32:06" />
                    <VideoList bgcolor='#fff3ee' number={2} name="计算机组成原理.mp4" detail="中文普通话" length="02:03:06" />
                    <VideoList  number={3} name="操作系统.mp4" detail="中文普通话" length="01:32:06" />
                    <VideoList bgcolor='#fff3ee' number={4} name="数据结构.mp4" detail="中文普通话" length="02:03:06" />
                    <VideoList  number={5} name="数据库原理.mp4" detail="中文普通话" length="01:32:06" />
                    <VideoList bgcolor='#fff3ee' number={6} name="离散数学.mp4" detail="中文普通话" length="02:03:06" />
                    <VideoList  number={7} name="高等数学.mp4" detail="中文普通话" length="01:32:06" />
                    <VideoList bgcolor='#fff3ee' number={8} name="马克思主义基本原理.mp4" detail="中文普通话" length="02:03:06" />
                    <VideoList  number={9} name="线性代数.mp4" detail="中文普通话" length="01:32:06" />
                    <VideoList bgcolor='#fff3ee' number={10} name="数学分析.mp4" detail="中文普通话" length="02:03:06" />
                    <VideoList  number={11} name="数字电路.mp4" detail="中文普通话" length="01:32:06" />
                    <VideoList bgcolor='#fff3ee' number={12} name="组合数学.mp4" detail="中文普通话" length="02:03:06" />
                    <VideoList  number={13} name="软件构造基础.mp4" detail="中文普通话" length="01:32:06" />
                    <VideoList bgcolor='#fff3ee' number={14} name="大学物理.mp4" detail="中文普通话" length="02:03:06" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#feffe6', width: '90%', height: '40px',border:'2px solid #eeeeee' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>共14条视频</div>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 0.9 }}></div>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}></div>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>视频总时长22：21：15<div style={{ width: '20px' }}>
                    </div>                    
                </div>
                </div>
            </div>

        </div>

    );
}

export default VideoLists;