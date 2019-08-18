import React, { Fragment } from 'react';
import CodeCard from '../../CodeCard'
import message from '../../../lib/components/message/Message'
import Button from '../../../lib/components/button/Button'
import ReactMarkdown from 'react-markdown';

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
     
    })
  }
  
  const handleTop = () => {
    message.info({
      content: '这条消息距离顶部300px距离',
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
  return <Fragment>
    <ReactMarkdown source={require('!!raw-loader!./message.md').default} className="md" />
    <CodeCard
      title="基础用法"
      summary="通过调用 Message 的静态方法：info()、success()、warning()、error() 并传递 options 参数来使用。具体属性设置见 Options。"
      code={`
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" onClick={handleInfo}>消息</Button>
        <Button type="success" onClick={handleSuccess}>成功</Button>
        <Button type="reverse" onClick={handleError}>错误</Button>
        <Button type="danger" onClick={handleWarn}>警告</Button>
      </div>`
      }
    >
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" onClick={handleInfo}>消息</Button>
        <Button type="success" onClick={handleSuccess}>成功</Button>
        <Button type="reverse" onClick={handleError}>错误</Button>
        <Button type="danger" onClick={handleWarn}>警告</Button>
      </div>
    </CodeCard>
    <CodeCard
      title="更多用法"
      summary="可设置位置、关闭时间、关闭按钮等功能。"
      code={`   
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" onClick={handleClose}>显示关闭按钮</Button>
        <Button type="success" onClick={handleTime}>10秒钟后关闭</Button>
        <Button type="reverse" onClick={handleTop}>距离顶部300px</Button>
        <Button type="danger" onClick={handleCallback}>执行关闭后的回掉函数</Button>
      </div>`
      }
    >
     <div style={{ marginBottom: "20px" }}>
        <Button type="primary" onClick={handleClose}>显示关闭按钮</Button>
        <Button type="success" onClick={handleTime}>10秒钟后关闭</Button>
        <Button type="reverse" onClick={handleTop}>距离顶部300px</Button>
        <Button type="danger" onClick={handleCallback}>执行关闭后的回掉函数</Button>
      </div>
    </CodeCard>
    <ReactMarkdown source={require('!!raw-loader!./api.md').default} className="md" />
  </Fragment>
}
