import React from 'react';
import girl from '../../../asserts/girl.png';
import VideoNum from '../../../asserts/VideoNum.png';
import Dotclip from '../../../Components/Dotclip/Dotclip';
import VideoCircle from '../../../asserts/VideoCircle.png';

export default function AllVideo()
{
    return(
        <div style={{backgroundColor:'white',width:'1117px',margin:'20px',marginRight:'20px',paddling:'0px'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start'}}>           
            <Dotclip text="单个视频修编次数排行"/>            
            <div style={{paddingTop:'18px',display:'flex',flexDirection:'row'}}>
            <img style={{padding:'10px'}} src={VideoNum} height='300px' width='700px'/>
            <img style={{paddingBottom:'50px',paddingLeft:'10px'}} src={VideoCircle} height='330px' width='350px'/>
            </div>
            </div>
        </div>
    )
}