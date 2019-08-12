import React from 'react';
import { message, Button } from '../../../lib';
import './message.example.scss';

export default () => {

  const handleInfo = () => {
    message.info('这是一条普通的消息')
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

  const handleClose = () => {
    message.info({
      content: '这是一条可关闭的消息',
      showClose: true
    })
  }

  const handleTime = () => {
    message.info({
      content: '这条消息10秒钟后自动关闭',
      duration: 10,
      top:300
    })
  }

  const handleCallback = () => {
    message.info({
      content: '执行关闭后的回调函数，通过控制台查看',
      onClose: () => {
        console.log('我消失咯')
      }
    })
  }

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" onClick={handleInfo}>消息</Button>
        <Button type="success" onClick={handleSuccess}>成功</Button>
        <Button type="reverse" onClick={handleError}>错误</Button>
        <Button type="danger" onClick={handleWarn}>警告</Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" onClick={handleClose}>显示关闭按钮</Button>
        <Button type="success" onClick={handleTime}>10秒钟后关闭</Button>
        <Button type="success" onClick={handleCallback}>执行关闭后的回掉函数</Button>
      </div>
    </div>
  )
}
