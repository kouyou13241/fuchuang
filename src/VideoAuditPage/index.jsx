import React from 'react';
import Title from '../Components/Title';
import Administractor from './Administrator/Administrator';
import List from './List1/List';
import AllVideo from './VideoAttributes/AllVideo/AllVideo';
import SingleVideo from './VideoAttributes/SingleVideo/SingleVideo';

export default function VideoAuditPage(props){
    return(
        <div style={{height:'2000px'}}>
            <Title/>          
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',height:'2000px'}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',width:'350px'}}>
                    <Administractor/>
                    <List/>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start'}}>
                <AllVideo/>
                <SingleVideo/>
                </div>           
            </div>
        </div>
    );
}