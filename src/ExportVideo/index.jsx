import React from 'react';
import Title from '../Components/Title';
import Steps from '../Components/Steps/Steps';
import ExportStatus from './ExportStatus';
import Rest from './Rest';
function ExportVideo(props) {
    return (
        <div>
           <Title/>
           <Steps/>
           <div style={{display:'flex',height:'500px',width:'93%',marginLeft:'auto',marginRight:'auto'}}>
               <div style={{flex:1}}> <ExportStatus /></div>
               <div style={{flex:2}}><Rest/></div>
            </div> 
        </div>
    );
}

export default ExportVideo;