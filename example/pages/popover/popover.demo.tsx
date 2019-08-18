import React, { Fragment } from 'react';
import CodeCard from '../../CodeCard'
import Popover from '../../../lib/components/popover/Popover'
import Button from '../../../lib/components/button/Button'
import ReactMarkdown from 'react-markdown';

export default () => {
  const content = (
    <div>
      <p>you can say something...</p>
    </div>
  );

  return <Fragment>
    <ReactMarkdown source={require('!!raw-loader!./popover.md').default} className="md" />
    <CodeCard
      title="hover触发"
      summary="支持四个方向。"
      code={` 
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
      </div>`
      }
    >
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
    </CodeCard>
    <CodeCard
      title="click触发"
      summary="支持四个方向。"
      code={` 
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
    </div>`
      }
    >
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
        <Popover content={content} position="right" trigger="click">
          <Button type="danger">Right</Button>
        </Popover>
      </div>
    </CodeCard>
    <ReactMarkdown source={require('!!raw-loader!./api.md').default} className="md" />
  </Fragment>
}
