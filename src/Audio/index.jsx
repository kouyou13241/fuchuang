import React,{Component} from 'react';
import AudioAnalyser from "react-audio-analyser";
import {Button} from 'antd';
import {Select} from 'antd';
const {Option} = Select;
export default class demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: ""
        }
    }

    componentDidMount() {
    }

    controlAudio(status) {
        this.setState({
            status
        })
    }

    changeScheme(e) {
        this.setState({
            audioType: e.target.value
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
                    <div >
                        {status !== "recording" &&
                        <Button  style={{margin:'20px'}}
                           onClick={() => this.controlAudio("recording")}>开始</Button>}
                        {status === "recording" &&
                        <Button  style={{margin:'20px'}}
                           onClick={() => this.controlAudio("paused")}>暂停</Button>}
                        <Button  style={{margin:'20px'}}
                           onClick={() => this.controlAudio("inactive")}>停止</Button>
                    </div>
                </AudioAnalyser>
                <select name="" id="" onChange={(e) => this.changeScheme(e)} value={audioType}>
                    <option value="audio/webm">audio/webm（default）</option>
                    <option value="audio/wav">audio/wav</option>
                    <option value="audio/mp3">audio/mp3</option>
                </select>
            </div>
        );
    }
}