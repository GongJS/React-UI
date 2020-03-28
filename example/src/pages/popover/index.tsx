import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeCard from '../../components/code-card'
import Popover from '@components/popover'
import Button from '@components/button'

export default () => {
  const content = <p style={{ padding: '5px' }}>you can say something...</p>

  return (
    <Fragment>
      <ReactMarkdown
        source={require('!!raw-loader!./popover.md').default}
        className="md"
      />
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
      </div>`}
      >
        <div style={{ marginBottom: '50px' }}>
          <Popover
            content={content}
            position="left"
            wrapperStyle={{ marginRight: '20px' }}
          >
            <Button type="primary">Left</Button>
          </Popover>
          <Popover
            content={content}
            position="top"
            wrapperStyle={{ marginRight: '20px' }}
          >
            <Button type="success">Top</Button>
          </Popover>
          <Popover
            content={content}
            position="bottom"
            wrapperStyle={{ marginRight: '20px' }}
          >
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
    </div>`}
      >
        <div style={{ marginBottom: '50px' }}>
          <Popover
            content={content}
            position="left"
            wrapperStyle={{ marginRight: '20px' }}
            trigger="click"
          >
            <Button type="primary">Left</Button>
          </Popover>
          <Popover
            content={content}
            position="top"
            wrapperStyle={{ marginRight: '20px' }}
            trigger="click"
          >
            <Button type="success">Top</Button>
          </Popover>
          <Popover
            content={content}
            position="bottom"
            wrapperStyle={{ marginRight: '20px' }}
            trigger="click"
          >
            <Button type="reverse">Bottom</Button>
          </Popover>
          <Popover content={content} position="right" trigger="click">
            <Button type="danger">Right</Button>
          </Popover>
        </div>
      </CodeCard>
      <ReactMarkdown
        source={require('!!raw-loader!./api.md').default}
        className="md"
      />
    </Fragment>
  )
}
