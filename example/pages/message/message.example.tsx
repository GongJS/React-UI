import React from 'react';
import { message, Button } from '../../../lib';
import './message.example.scss';

export default () => {
  const handleInfo = () => {
    message.info({content: <strong>ffff</strong>,showClose:true, onClose: () => {console.log('676666')}}
      )
  }
  const handleSuccess = () => {
    message.success("这是一条成功消息")
  }
  const handleError = () => {
    message.error("这是一条错误消息")
  }
  const handleWarn = () => {
    message.warning("这是一条警告消息")
  }
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" onClick={handleInfo}>消息</Button>
        <Button type="success" onClick={handleSuccess}>成功</Button>
        <Button type="reverse" onClick={handleError}>错误</Button>
        <Button type="danger" onClick={handleWarn}>警告</Button>
      </div>
    </div>
  )
}
