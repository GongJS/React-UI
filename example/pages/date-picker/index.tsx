import React, { Fragment, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeCard from '../../CodeCard'
import DatePicker from '../../../lib/components/date-picker'

export default () => {
  const [value, setValue] = useState(new Date())
  return (
    <Fragment>
      <ReactMarkdown
        source={require('!!raw-loader!./date-picker.md').default}
        className="md"
      />
      <CodeCard
        title="基本用法"
        summary="最基本的用法，在浮层中选择日期。"
        code={` 
      <DatePicker />`}
      >
        <DatePicker value={value} onChange={value => setValue(value)} />
      </CodeCard>
      <ReactMarkdown
        source={require('!!raw-loader!./api.md').default}
        className="md"
      />
    </Fragment>
  )
}
