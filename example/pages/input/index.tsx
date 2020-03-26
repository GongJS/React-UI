import React, { Fragment, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeCard from '../../CodeCard'
import Input from '../../../lib/components/input'
import Textarea from '../../../lib/components/input/TextArea'

export default () => {
  const [value1, setValue1] = useState('')
  const onChange1 = (value: string) => {
    setValue1(value)
  }
  const [value2, setValue2] = useState('')
  const onChange2 = (value: string) => {
    setValue2(value)
  }
  const [value3, setValue3] = useState('')
  const onChange3 = (value: string) => {
    setValue3(value)
  }
  const [value4, setValue4] = useState('')
  const onChange4 = (value: string) => {
    setValue4(value)
  }
  const [value5, setValue5] = useState('')
  const onChange5 = (value: string) => {
    setValue5(value)
  }
  const [value6, setValue6] = useState('')
  const onChange6 = (value: string) => {
    setValue6(value)
  }
  const [value7, setValue7] = useState('')
  const onChange7 = (value: string) => {
    setValue7(value)
  }
  const [value8, setValue8] = useState('')
  const onChange8 = (value: string) => {
    setValue8(value)
  }
  return (
    <Fragment>
      <ReactMarkdown
        source={require('!!raw-loader!./input.md').default}
        className="md"
      />
      <CodeCard
        title="基础用法"
        summary="最基本的用法。"
        code={` 
      const [value1, setValue1] = useState()
      const onChange1 = (value:string) => {
          setValue1(value)
      }
      <Input value={value1} onValueChange={onChange1} />`}
      >
        <Input
          wrapperStyle={{ width: '300px' }}
          value={value1}
          onValueChange={onChange1}
          placeholder="请输入内容"
        />
      </CodeCard>
      <CodeCard
        title="可清空"
        summary="使用clearable属性即可得到一个可清空的输入框。"
        code={` 
      <Input clearable />`}
      >
        <Input
          clearable
          wrapperStyle={{ width: '300px' }}
          placeholder="请输入内容"
          value={value2}
          onValueChange={onChange2}
        />
      </CodeCard>
      <CodeCard
        title="禁用 只读"
        summary="禁止输入、只读。"
        code={` 
      <Input disabled placeholder="禁止输入" />
      <Input readonly placeholder="只读内容" />`}
      >
        <div style={{ width: '300px', marginBottom: '20px' }}>
          <Input disabled placeholder="禁止输入" />
        </div>
        <Input readonly value="只读内容" style={{ width: '300px' }} />
      </CodeCard>
      <CodeCard
        title="前缀 / 后缀Icon"
        summary="在输入框上添加前Icon或后Icon。"
        code={` 
      <Input preIcon="sousuo" />
      <Input sufIcon="sousuo" />`}
      >
        <div style={{ width: '300px', marginBottom: '20px' }}>
          <Input
            preIcon="sousuo"
            wrapperStyle={{ width: '300px' }}
            value={value3}
            onValueChange={onChange3}
          />
        </div>
        <Input
          sufIcon="sousuo"
          wrapperStyle={{ width: '300px', marginBottom: '20px' }}
          value={value4}
          onValueChange={onChange4}
        />
      </CodeCard>

      <CodeCard
        title="前置 / 后置标签"
        summary="用于配置一些固定组合。"
        code={` 
      <Input addonBefore="htttp://" />
      <Input addonAfter=".com" />`}
      >
        <Input
          wrapperStyle={{ width: '300px', marginBottom: '20px' }}
          addonBefore="htttp://"
          value={value5}
          onValueChange={onChange5}
        />
        <Input
          wrapperStyle={{ width: '300px' }}
          addonAfter=".com"
          value={value6}
          onValueChange={onChange6}
        />
      </CodeCard>

      <CodeCard
        title="文本输入框"
        summary="默认的文本输入框。"
        code={` 
      <Textarea />`}
      >
        <Textarea value={value7} onValueChange={onChange7} />
      </CodeCard>

      <CodeCard
        title="自适应"
        summary="自适应高度的文本输入框。"
        code={` 
      <Textarea autosize={true}/>`}
      >
        <Textarea autosize={true} value={value8} onValueChange={onChange8} />
      </CodeCard>
      <ReactMarkdown
        source={require('!!raw-loader!./api.md').default}
        className="md"
      />
    </Fragment>
  )
}
