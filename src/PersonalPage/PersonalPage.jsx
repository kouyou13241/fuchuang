import React from 'react';
import Title from '../Components/Title';
import User from './User/User';
import AttributeList from './List/AttributeList';
import AccountList from './List/AccountList';
import BasicData from './BasicData/BasicData';
import AverageModify from './AverageModify/AverageModify';
import ModifyTimes from './ModifyTimes/ModifyTimes';
import Rank from './Rank/Rank';

export default function VideoAuditPage(props){
    return(
        <div style={{ height:'16000px'}}>
            <Title/>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',width:'350px'}}>
                    <User/>
                    <AttributeList/>
                    <AccountList/>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start',width:'1117px'}}>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>                        
                        <BasicData/>
                        <AverageModify/>
                    </div>
                <ModifyTimes/>
                <Rank/>
                </div>           
            </div>
        </div>
    );
}