import React, { useRef } from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import css
import Title from '../Components/Title';
import { InboxOutlined } from '@ant-design/icons';
import Steps from '../Components/Steps/Steps';
import Audio from '../Audio';
import { Upload ,Button} from 'antd';
import Video from '../Components/Video/Video';

const { Dragger } = Upload;
export default function VideoPage() {
    const videoref = useRef();
    const Subtitle = (props) => (
        <div style={{ border: '1px solid #bfbfbf', width: '500px', padding: '4px', borderRadius: '3px', margin: '5px' }}>
            <span><a style={{ fontSize: '24px' }} onClick={() => { videoref.current.currentTime = props.time }}>点击跳转</a></span>
        </div>
    );
    return (
        <div>
            <Title />
            <Steps />
            <div style={{ width: '93%', height: '100vh', backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', display: 'flex' }}>
                <div style={{ width: '55%' }}>
                    <div style={{ display: 'flex',margin:'0px'}}>
                       <Video />
                    </div>
                    <div style={{ marginLeft: '20px', width: '100%' }}>
                        <Audio />
                    </div>
                </div>
                <div>
                    <div style={{ margin: '20px', overflow: 'scroll', height: '600px' }}>
                        <div>
                            <Subtitle word="1231231" time={20} />
                            <Subtitle word="1231231" time={20} />
                            <Subtitle word="1231231" time={20} />
                            <Subtitle word="1231231" time={20} />
                            <Subtitle word="1231231" time={20} />
                            <Subtitle word="1231231" time={20} />
                            <Subtitle word="1231231" time={20} />
                            <Subtitle word="1231231" time={20} />
                            <Subtitle word="1231231" time={20} />
                        </div>
                    </div>
                    
                        <div style={{ height: '200px', width: '400px', margin: '20px', marginLeft: '80px' }}>
                    </div>
                    
                    
                </div>

                
            </div>

             <div style={{position:'relative',bottom:'120px',left:'200px',display:'flex' }}>
                 <Button>添加标注</Button>
                 <div style={{height:'100px',width:'1000px',backgroundColor:'black'}}></div>
                 </div>
             
        </div>
    );
}
/*
<Player>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      </Player>
*/