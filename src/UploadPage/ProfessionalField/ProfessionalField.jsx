import React from 'react';
import Button  from '../../Components/Button/Button';
import {Card} from 'antd';
import Paperclip from '../../Components/Paperclip';
export default function ProfessionalField()
{
    return(
      
       <Card style={{width:'400px',background:'white',margin:'20px'}}>
           <Paperclip text="专业领域"/>
           <Button text="WEB前端"/>
           <Button text="后端开发"/>
           <Button text="数据库"/>
           <Button text="办公套件"/>
           <Button text="云计算&大数据"/>
           <Button text="芯片技术"/>
           <Button text="信息安全"/>
       </Card>       
    );
}