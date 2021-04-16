import React from "react";
import { Card } from "antd";
import "./keyword.css";
import Paperclip from "../../Components/Paperclip";
function Keywords(props) {
  return (
    <Card style={{ width: "400px", backgroundColor: "white",margin:'20px' }}>
      <div style={{height:'300px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <Paperclip text="关键词"/>
        <div className="keyword"></div>
        <input style={{margin:'10px',height:'50px',border:'1px solid #d9d9d9'}} placeHolder="请输入音频关键词，单个词不超过16个字符，回车确认" />
      </div>
    </Card>
  );
}

export default Keywords;
