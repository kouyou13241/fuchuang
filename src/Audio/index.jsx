import React,{Component} from 'react';
import {Upload} from 'antd';
import AudioAnalyser from "react-audio-analyser";
import {Button} from 'antd';
import {Select} from 'antd';
import { FileExcelOutlined } from '@ant-design/icons';
const {Option} = Select;



const {Dragger} = Upload;
export default class demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: "",
            audioType: "audio/mp3"
        }
    }

    componentDidMount() {
    }

    controlAudio(status) {
        this.setState({
            status
        })
    }

    render() {
        const {status, audioSrc, audioType} = this.state;
        const audioProps = {
            audioType,
            // audioOptions: {sampleRate: 30000}, // 设置输出音频采样率
            status,
            audioSrc,
            timeslice: 1000, // timeslice（https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/start#Parameters）
            startCallback: (e) => {
                console.log("succ start", e)
            },
            pauseCallback: (e) => {
                console.log("succ pause", e)
            },
            stopCallback: (e) => {
                this.setState({
                    audioSrc: window.URL.createObjectURL(e)
                })
                console.log("succ stop", e)
            },
            onRecordCallback: (e) => {
                console.log("recording", e)
            },
            errorCallback: (err) => {
                console.log("error", err)
            }
        }
        return (
            <div >

                <AudioAnalyser {...audioProps}>
                    <div style={{display:'flex',justifyContent:'flex-start'}}>
                        {status !== "recording" &&
                        <Button  style={{margin:'20px'}}
                           onClick={() => this.controlAudio("recording")}>开始录制</Button>}
                        {status === "recording" &&
                        <Button  style={{margin:'20px'}}
                           onClick={() => this.controlAudio("paused")}>暂停录制</Button>}
                        <Button  style={{margin:'20px'}}
                           onClick={() => this.controlAudio("inactive")}>停止录制</Button>
                           
                    </div>
                </AudioAnalyser>
            </div>
        );
    }
}