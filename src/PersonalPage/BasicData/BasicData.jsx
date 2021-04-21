import React from 'react';
import Dotclip from '../../Components/Dotclip/Dotclip';
var fontStyle = {
    fontSize: 15,
    color: '#c8c8c8',
    marginLeft: 40,
    marginRight:40,
    marginBottom:0
};
export default function BasicData()
{
    return(
        <div style={{ backgroundColor:'white',width:'440px',margin:'20px',marginRight:'20px',padding:'0px'}}>
            <Dotclip text="基础数据"/>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start'}}>
                <div style={{width:'80%',display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start',marginBottom:'20px',border:'1px solid #eeeeee'}}>
                    <Dotclip text="平均帧率：35FPS"/>
                    <p style={fontStyle}>打败了全国100%用户</p>
                </div>
                <div style={{width:'80%',display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start',marginBottom:'20px',border:'1px solid #eeeeee'}}>
                    <Dotclip text="平均码率：1824kps"/>
                    <p style={fontStyle}>打败了全国100%用户</p>
                </div>
                <div style={{width:'80%',display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start',marginBottom:'20px',border:'1px solid #eeeeee'}}>
                    <Dotclip text="分辨率：1980*1080"/>
                    <p style={fontStyle}>打败了全国100%用户</p>
                </div>
            </div>
        </div>
    );
}
