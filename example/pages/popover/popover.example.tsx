import React from 'react';
import { Button, Popover } from '../../../lib';

export default () => {
  const content = (
    <div>
      <p>you can say something...</p>
    </div>
  );

  return (
    <div>

      <div style={{ marginBottom: '50px' }}>
        <Popover content={content} position="left" wrapperStyle={{ marginRight: '20px' }}>
          <Button type="primary">Left</Button>
        </Popover>
        <Popover content={content} wrapperStyle={{ marginRight: '20px' }}>
          <Button type="success">Top</Button>
        </Popover>
        <Popover content={content} position="bottom" wrapperStyle={{ marginRight: '20px' }}>
          <Button type="reverse">Bottom</Button>
        </Popover>
        <Popover content={content} position="right">
          <Button type="danger">Right</Button>
        </Popover>
      </div>

      <div style={{ marginBottom: '50px' }}>
        <Popover content={content} position="left" wrapperStyle={{ marginRight: '20px' }} trigger="click">
          <Button type="primary">Left</Button>
        </Popover>
        <Popover content={content} wrapperStyle={{ marginRight: '20px' }} trigger="click">
          <Button type="success">Top</Button>
        </Popover>
        <Popover content={content} position="bottom" wrapperStyle={{ marginRight: '20px' }} trigger="click">
          <Button type="reverse">Bottom</Button>
        </Popover>
        <Popover content={content} position="right"  trigger="click">
          <Button type="danger">Right</Button>
        </Popover>
      </div>
    </div>
  )
}
