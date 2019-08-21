import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown'
import CodeCard from '../../CodeCard'
import Input from '../../../lib/components/input/Input'


export default () => {
  return <Fragment>
    <ReactMarkdown source={require('!!raw-loader!./input.md').default} className="md" />
    <CodeCard
      title="基础用法"
      summary="最基本的用法。"
      code={` 
      <Input />`
      }
    >
      <Input style={{ width: '300px' }} placeholder="请输入内容" />
    </CodeCard>
    <CodeCard
      title="禁用 只读"
      summary="禁止输入、只读。"
      code={` 
      <Input disabled placeholder="禁止输入" />
      <Input readonly placeholder="只读内容" />`
      }
    >
      <div style={{ width: '300px', marginBottom: '20px' }}>
        <Input disabled placeholder="禁止输入" />
      </div>
      <Input readonly style={{ width: '300px' }} placeholder="只读内容" />
    </CodeCard>
    <CodeCard
      title="前缀 / 后缀Icon"
      summary="在输入框上添加前Icon或后Icon。"
      code={` 
      <Input preIcon="sousuo" />
      <Input sufIcon="sousuo" />`
      }
    >
      <div style={{ width: '300px', marginBottom: '20px' }}>
        <Input preIcon="sousuo" wrapperStyle={{ width: '300px' }} />
      </div>
      <Input sufIcon="sousuo" wrapperStyle={{ width: '300px', marginBottom: '20px' }} />
    </CodeCard>

    <CodeCard
      title="前置 / 后置标签"
      summary="用于配置一些固定组合。"
      code={` 
      <Input addonBefore="htttp://" />
      <Input addonAfter=".com" />`
      }
    >
      <Input wrapperStyle={{ width: '300px', marginBottom: '20px' }} addonBefore="htttp://" />
      <Input wrapperStyle={{ width: '300px' }} addonAfter=".com" />
    </CodeCard>
    <ReactMarkdown source={require('!!raw-loader!./api.md').default} className="md" />
  </Fragment>
}
