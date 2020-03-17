import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeCard from '../../CodeCard'
import Loading from '../../../lib/components/loading'

export default () => {
  return (
    <Fragment>
      <ReactMarkdown
        source={require('!!raw-loader!./loading.md').default}
        className="md"
      />
      <CodeCard
        title="基础用法"
        summary="一个简单的 loading 状态。"
        code={` 
        <Loading size="large" style={{marginRight: '20px'}} name="loading"/>`}
      >
        <div style={{ width: '50px', height: '50px' }}>
          <Loading size="large" name="loading" />
        </div>
      </CodeCard>
      <CodeCard
        title="各种大小"
        summary="小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。"
        code={` 
        <Loading size="small" name="loading"/>
        <Loading size="medium" name="loading"/>
        <Loading size="large" name="loading"/>`}
      >
        <div style={{ width: '50px', height: '50px', display: 'inline-block' }}>
          <Loading size="small" name="loading" />
        </div>
        <div style={{ width: '50px', height: '50px', display: 'inline-block' }}>
          <Loading size="medium" name="loading" />
        </div>
        <div style={{ width: '50px', height: '50px', display: 'inline-block' }}>
          <Loading size="large" name="loading" />
        </div>
      </CodeCard>
      <CodeCard
        title="容器"
        summary="作为一个容器包裹内容"
        code={` 
        <Loading size="small" name="loading" message="Loading...">
          <p>Alert message title</p>
          <p>Further details about the context of this alert.</p>
          <p>Alert message title</p>
          <p>Further details about the context of this alert.</p>
        </Loading>`}
      >
        <Loading size="small" name="loading" message="Loading...">
          <p>Alert message title</p>
          <p>Further details about the context of this alert.</p>
          <p>Alert message title</p>
          <p>Further details about the context of this alert.</p>
        </Loading>
      </CodeCard>
      <ReactMarkdown
        source={require('!!raw-loader!./api.md').default}
        className="md"
      />
    </Fragment>
  )
}
