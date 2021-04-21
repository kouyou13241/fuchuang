import React, { useRef, useState, useEffect } from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import css
import Title from '../Components/Title';
import { InboxOutlined } from '@ant-design/icons';
import Steps from '../Components/Steps/Steps';
import Audio from '../Audio';
import { Upload, Button } from 'antd';
import Video from '../Components/Video/Video';
import getTime from '../utils/getTime';

const { Dragger } = Upload;
export default function VideoPage() {
    const [res, setRes] = useState();
    const [url, setUrl] = useState('D://fuchuang//video//show.mp4');
    const videoref = useRef();
    useEffect(
        () => {
            fetch('/api/default/video/entity/detail?id=77').then(
                (res) => res.json()).then((res) => setRes(res.data.value.audioClips));
        }, []
    )

    const Subtitle = (props) => (
        <div style={{ border: '1px solid #bfbfbf', width: '500px', padding: '4px', borderRadius: '3px', margin: '5px' }}>
            <span><a style={{ fontSize: '24px' }} onClick={() => { videoref.current.currentTime = props.time }}>{props.text}</a></span>
        </div>
    );

    return (
        <div>
            <Title />
            <Steps />
            <div style={{ width: '93%', height: '100vh', backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', display: 'flex' }}>
                <div style={{ width: '55%' }}>
                    <div style={{ display: 'flex', margin: '20px', height: "450px", width: '800px', marginLeft: '100px' }}>
                        <video ref={videoref} controls >
                            <source src={require('../asserts/test.mp4').default} type="video/mp4" />
                        </video>
                    </div>
                    <div style={{ marginLeft: '100px', width: '100%' }}>
                        <Audio />
                        <span style={{ height: '30px', width: '60px', margin: '20px', marginLeft: '40px', position: 'relative', bottom: '112px', left: '240px' }}>
                            <Upload name="AudioFile" action="/api/default/video/upload/audio"
                                onChange={(e) => {
                                    console.log(e);
                                    if (e.file.response)
                                        setUrl(e.file.response.data.value.idvarchar)

                                }}
                            >
                                <Button style={{ display: 'flex', alignItems: 'center' }}>点击上传</Button>
                            </Upload ></span>
                    </div>
                </div>
                <div>
                    <div style={{ margin: '20px', overflow: 'scroll', height: '500px' }}>
                        <div>
                            {res ? (res.map(
                                (item) => {
                                    return (
                                        <Subtitle text={item.subtitle} time={getTime(item.startTime)} />
                                    )
                                }
                            )) : <div>isLoading...</div>}
                        </div>
                    </div>

                    <div style={{ height: '200px', width: '400px', margin: '20px', marginLeft: '180px' }}>
                    </div>


                </div>


            </div>

            <div style={{ position: 'relative', bottom: '120px', left: '500px', display: 'flex' }}>
                <Button>添加标注</Button>
                <div style={{ height: '100px', width: '500px', backgroundColor: 'black' }}></div>
            </div>

        </div>
    );
}
/*
<Player>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      </Player>
*/