import React from 'react';
function VideoList(props) {
    return (
        <div style={{display:'flex',height:'40px',backgroundColor:props.bgcolor,alignItems:'center'}}>
            <div style={{display:'flex',justifyContent:'center',flex:1}}>{props.number}</div>
            <div style={{display:'flex',justifyContent:'center',flex:1}}>{props.name}</div>
            <div style={{display:'flex',justifyContent:'center',flex:1}}>{props.detail}</div>
            <div style={{display:'flex',justifyContent:'center',flex:1}}>{props.length}</div>
        </div>
    );
}

export default VideoList;