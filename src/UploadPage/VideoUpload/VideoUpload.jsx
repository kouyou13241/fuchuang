import React from "react";
import { Card } from "antd";
import { Upload } from "antd";
import Paperclip from "../../Components/Paperclip";
import video from '../../asserts/video.png';
import UploadButton from './UploadButton';
import Video from './Upload';
import { Progress } from 'antd';
import {useHistory} from 'react-router-dom';

const { Dragger } = Upload;
function VideoUpload(props) {
  const History = useHistory();
  return (
    <Card style={{ margin: "20px", width: "68%", background: "white",marginRight:'40px',height:'777px' }}>
      <Paperclip text="上传视频" />
        <Dragger onChange={()=>{History.push('/loadingpage')}}>
          <div style={{ border:'2px solid #f0f0f0',margin:'20px',background: "#f5f5f5", height: "150px",display:'flex',alignItems:'center',flexDirection:'column' }}>
          <img src={video} height="45px" width='45px'/>
          <div><b style={{fontSize:'15px'}}>点击或将视频拖拽到这里上传</b></div>
         
          <div style={{fontSize:'12px'}}>格式支持：。。。。。</div>
          <div style={{fontSize:'12px'}}>单词最多上传50个文件，单个文件最大1GB。。。。。。</div> 
          </div>
        </Dragger>
    <div style={{height:'350px',width:'100%'}}>
      <Video title="色彩原理与分析"/>
      <Video title="何为色彩"/>
      <Video title="设计准则"/>
      <Video title="色彩搭配"/>
        </div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        
        <div style={{margin:'20px'}}>
          <UploadButton text="全部清空" color='gray'/>
        </div>
        <div style={{margin:'20px'}}>
        <UploadButton text="确认提交" color='orange'/>
        </div>
      </div>
      
    </Card>
  );
}

export default VideoUpload;
