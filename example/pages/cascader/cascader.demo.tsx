import React, { Fragment } from 'react';
import CodeCard from '../../CodeCard'
import Cascader from '../../../lib/components/cascader/Cascader'
import ReactMarkdown from 'react-markdown';

export default () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          disabled: true,
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  return <Fragment>
    <ReactMarkdown source={require('!!raw-loader!./cascader.md').default} className="md" />
    <CodeCard
      title="基础用法"
      summary="最基本的用法。"
      code={`
      <div style={{ marginBottom: '100px' }}>
        <Cascader options={options} />
      </div>`
      }
    >
      <div style={{ marginBottom: '100px' }}>
        <Cascader options={options} />
      </div>
    </CodeCard>
    <ReactMarkdown source={require('!!raw-loader!./api.md').default} className="md" />
  </Fragment>
}
