import React,{useEffect} from 'react';
import {Modal,Spin} from 'antd';
import {useHistory} from 'react-router-dom';
export default function LoadingPage()
{
    let History = useHistory();
    useEffect(
        ()=>{
            setTimeout(()=>{History.push('/videopage')},5000)
        }
    )
    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'350px'}}><Spin size="large" /></div>
    );
   
}