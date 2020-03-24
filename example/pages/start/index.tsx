import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import Button from '../../../lib/components/button'

export default () => {
  return (
    <Fragment>
      <ReactMarkdown
        source={require('!!raw-loader!./start.md').default}
        className="md"
      />
      <Button type="primary">主要按钮</Button>
    </Fragment>
  )
}
