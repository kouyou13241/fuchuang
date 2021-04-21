import React from 'react';
function VideoList(props) {
    return (
        <div style={{display:'flex',height:'40px',backgroundColor:props.bgcolor,alignItems:'center'}}>
            <div style={{display:'flex',justifyContent:'center',flex:1}}>{props.rank}</div>
            <div style={{display:'flex',justifyContent:'center',flex:1}}>{props.name}</div>
            <div style={{display:'flex',justifyContent:'center',flex:1}}>{props.frequency}</div>
            <div style={{display:'flex',justifyContent:'center',flex:1}}>{props.timeLength}</div>
        </div>
    );
}

export default VideoList;