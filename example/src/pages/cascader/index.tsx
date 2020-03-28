import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeCard from '../../components/code-card'
import Cascader from '@components/cascader'

export default () => {
  const options1 = [
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
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ]
  const options2 = [
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
  ]
  return (
    <Fragment>
      <ReactMarkdown
        source={require('!!raw-loader!./cascader.md').default}
        className="md"
      />
      <CodeCard
        title="基础用法"
        summary="最基本的用法。"
        code={`
      const options2 = [
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
      <div style={{ marginBottom: '100px' }}>
        <Cascader options={options} />
      </div>`}
      >
        <div style={{ marginBottom: '100px' }}>
          <Cascader options={options1} />
        </div>
      </CodeCard>
      <CodeCard
        title="禁止选择"
        summary="禁用某个选项的选择。"
        code={`
      <div style={{ marginBottom: '100px' }}>
        <Cascader options={options} />
      </div>`}
      >
        <div style={{ marginBottom: '100px' }}>
          <Cascader options={options2} />
        </div>
      </CodeCard>
      <ReactMarkdown
        source={require('!!raw-loader!./api.md').default}
        className="md"
      />
    </Fragment>
  )
}
