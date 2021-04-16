import React from 'react';
import Steps from '../Components/Steps/Steps';
import ExportStatus from './ExportStatus';
import './index.css';
import Title from '../Components/Title';
import Rest from './Rest';
import VideoLists from './VideoLists';
function WaitingPage(props) {
    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <Title/>
            <Steps/>
            <div style={{display:'flex',alignItems:'center',margin:'40px',flexDirection:'column'}}>
             <div className="second-line" >
                 <ExportStatus/>
                 <Rest/>
             </div> 
             <VideoLists/>
             </div>
            
        </div>
    );
}

export default WaitingPage;