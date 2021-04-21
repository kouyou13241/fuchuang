import React from 'react';
import VideoList from '../../VideoAuditPage/VideoAttributes/SingleVideo/VideoList';
import Dotclip from '../../Components/Dotclip/Dotclip';
export default function Rank()
{
    return(
        <div style={{height:'600px', backgroundColor:'white',width:'1080px',padding:'0px'}}>
            <Dotclip text="单个视频修编次数排行"/>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' ,marginTop:'20px'}}>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#fff3ee', width: '90%', height: '40px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>排名</div>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 0.9 }}>视频名称</div>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>修编次数</div>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>修编用时<div style={{ width: '20px' }}></div></div>
                </div>
                <div style={{ width: '90%', height: '500px', overflow: 'auto' }}>
                    <VideoList  rank={1} name="计算机网络.mp4" frequency={0} timeLength="01:32:06" />
                    <VideoList bgcolor='#fff3ee' rank={2} name="计算机组成原理.mp4" frequency={0} timeLength="02:03:06" />
                    <VideoList  rank={3} name="操作系统.mp4" frequency={0} timeLength="01:32:06" />
                    <VideoList bgcolor='#fff3ee' rank={4} name="数据结构.mp4" frequency={0} timeLength="02:03:06" />
                    <VideoList  rank={5} name="数据库原理.mp4" frequency={0} timeLength="01:32:06" />
                    <VideoList bgcolor='#fff3ee' rank={6} name="离散数学.mp4" frequency={0} timeLength="02:03:06" />
                    <VideoList  rank={7} name="高等数学.mp4" frequency={0} timeLength="01:32:06" />
                    <VideoList bgcolor='#fff3ee' rank={8} name="马克思主义基本原理.mp4" frequency={0} timeLength="02:03:06" />
                    <VideoList  rank={9} name="线性代数.mp4" frequency={0} timeLength="01:32:06" />
                    <VideoList bgcolor='#fff3ee' rank={10} name="数学分析.mp4" frequency={0} timeLength="02:03:06" />
                    <VideoList  rank={11} name="数字电路.mp4" frequency={0} timeLength="01:32:06" />
                    <VideoList bgcolor='#fff3ee' rank={12} name="组合数学.mp4" frequency={0} timeLength="02:03:06" />
                    <VideoList  rank={13} name="软件构造基础.mp4" frequency={0} timeLength="01:32:06" />
                    <VideoList bgcolor='#fff3ee' rank={14} name="大学物理.mp4" frequency={0} timeLength="02:03:06" />
                </div>
            </div>   
        </div>
    )
}