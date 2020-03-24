import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

export default () => {
  return (
    <Fragment>
      <ReactMarkdown
        source={require('!!raw-loader!./index.md').default}
        className="md"
      />
    </Fragment>
  )
}
