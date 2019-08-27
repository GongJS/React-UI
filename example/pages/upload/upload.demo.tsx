import React, { Fragment,} from 'react';
import ReactMarkdown from 'react-markdown'


export default () => {
  return <Fragment>
    <ReactMarkdown source={require('!!raw-loader!./upload.md').default} className="md" />
    <ReactMarkdown source={require('!!raw-loader!./api.md').default} className="md" />
  </Fragment>
}
