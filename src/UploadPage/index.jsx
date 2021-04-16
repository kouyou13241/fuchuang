import React from 'react';
import Keywords from './Keywords/Keywords';
import ProfessionalField from './ProfessionalField/ProfessionalField';
import Upload from './Upload/Upload';
import VideoUpload from './VideoUpload/VideoUpload';
import Steps from '../Components/Steps/Steps';
import Title from '../Components/Title';
function UploadPage(props) {
    return (
        <div style={{height:'1000px'}}>
            <Title/>
            <Steps/>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',height:'700px'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',width:'450px'}}>
            <Upload/>
            <ProfessionalField/>
            <Keywords/>
            </div>
            <VideoUpload/>
            </div>
        </div>
    );
}

export default UploadPage;