import React, { useState } from 'react';
import { Button, ButtonGroup } from '../../../lib';
import './button.example.scss';

export default () => {
  const [loading, setLoading] = useState(false)
  const handleClick = () => {
    setLoading(true)
  }
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="reverse">反向按钮</Button>
        <Button type="danger">危险按钮</Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" plain>主要按钮</Button>
        <Button type="success" plain>成功按钮</Button>
        <Button type="reverse" plain>反向按钮</Button>
        <Button type="danger" plain>危险按钮</Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" icon="settings" circle></Button>
        <Button type="success" icon="roundcheckfill" circle></Button>
        <Button type="reverse" icon="refresh" circle></Button>
        <Button type="danger" icon="search" circle></Button>
        <Button type="primary" icon="settings" plain circle></Button>
        <Button type="success" icon="roundcheckfill" plain circle></Button>
        <Button type="reverse" icon="refresh" plain circle></Button>
        <Button type="danger" icon="right" plain circle></Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" disabled>主要按钮</Button>
        <Button type="success" disabled>成功按钮</Button>
        <Button type="reverse" disabled>反向按钮</Button>
        <Button type="danger" disabled>危险按钮</Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" disabled plain>主要按钮</Button>
        <Button type="success" disabled plain>成功按钮</Button>
        <Button type="reverse" disabled plain>反向按钮</Button>
        <Button type="danger" disabled plain>危险按钮</Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" icon="right" >主要按钮</Button>
        <Button type="success" icon="wifi" >成功按钮</Button>
        <Button type="reverse" icon="remind" iconPosition="right">反向按钮</Button>
        <Button type="danger" icon="edit" iconPosition="right">危险按钮</Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" icon="sound" plain>主要按钮</Button>
        <Button type="success" icon="camera" plain>成功按钮</Button>
        <Button type="reverse" icon="scan" plain iconPosition="right">反向按钮</Button>
        <Button type="danger" icon="wang" plain iconPosition="right">危险按钮</Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" loading={loading} onClick={handleClick}>加载</Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <ButtonGroup>
          <Button type="primary" icon="back">上一页</Button>
          <Button type="primary" icon="right" icon-position="right">下一页</Button>
        </ButtonGroup>
        <ButtonGroup style={{ marginLeft: "20px" }}>
          <Button type="primary" icon="evaluate"></Button>
          <Button type="primary" icon="upload"></Button>
          <Button type="primary" icon="like"></Button>
        </ButtonGroup>
      </div>

    </div>
  )
}
