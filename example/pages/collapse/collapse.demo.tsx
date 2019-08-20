import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeCard from '../../CodeCard'
import Collapse from '../../../lib/components/collapse/Collapse'
import CollapseItem from '../../../lib/components/collapse/CollapseItem'


export default () => {
  const handleChange = (expandKeys: string[]) => {
    console.log(expandKeys)
  }
  return <Fragment>
    <ReactMarkdown source={require('!!raw-loader!./collapse.md').default} className="md" />
    <CodeCard
      title="折叠面板"
      summary="可同时展开多个面板。"
      code={`
      <Collapse style={{marginBottom:'20px'}} onChange={(expandKeys) => handleChange(expandKeys)}>
        <CollapseItem title="Header1" key="1" disabled>
          <div>Content of CollapseItem 1</div>
        </CollapseItem>
        <CollapseItem title="Header2" key="2">
          <div>Content of CollapseItem 2</div>
        </CollapseItem>
        <CollapseItem title="Header3" key="3">
          <div>Content of CollapseItem 3</div>
        </CollapseItem>
      </Collapse>`
      }
    >
      <Collapse style={{ marginBottom: '20px' }} onChange={(expandKeys) => handleChange(expandKeys)}>
        <CollapseItem title="Header1" key="1" disabled>
          <div>Content of CollapseItem 1</div>
        </CollapseItem>
        <CollapseItem title="Header2" key="2">
          <div>Content of CollapseItem 2</div>
        </CollapseItem>
        <CollapseItem title="Header3" key="3">
          <div>Content of CollapseItem 3</div>
        </CollapseItem>
      </Collapse>
    </CodeCard>

    <CodeCard
      title="手风琴模式"
      summary="只能同时展开一个面板。"
      code={`
      <Collapse style={{marginBottom:'20px'}} accordion >
      <CollapseItem title="Header1" key="1" >
        <div>Content of CollapseItem 1</div>
      </CollapseItem>
      <CollapseItem title="Header2" key="2">
        <div>Content of CollapseItem 2</div>
      </CollapseItem>
      <CollapseItem title="Header3" key="3">
        <div>Content of CollapseItem 3</div>
      </CollapseItem>
    </Collapse>`
      }
    >
      <Collapse style={{ marginBottom: '20px' }} accordion >
        <CollapseItem title="Header1" key="1" >
          <div>Content of CollapseItem 1</div>
        </CollapseItem>
        <CollapseItem title="Header2" key="2">
          <div>Content of CollapseItem 2</div>
        </CollapseItem>
        <CollapseItem title="Header3" key="3">
          <div>Content of CollapseItem 3</div>
        </CollapseItem>
      </Collapse>
    </CodeCard>

    <CodeCard
      title="默认打开面板"
      summary="默认打开某些面板"
      code={`
      <Collapse style={{marginBottom:'20px'}} defaultSelectedKeys={['2']}>
        <CollapseItem title="Header1" key="1" >
          <div>Content of CollapseItem 1</div>
        </CollapseItem>
        <CollapseItem title="Header2" key="2">
          <div>Content of CollapseItem 2</div>
        </CollapseItem>
        <CollapseItem title="Header3" key="3">
          <div>Content of CollapseItem 3</div>
        </CollapseItem>
      </Collapse>`
      }
    >
      <Collapse style={{ marginBottom: '20px' }} defaultSelectedKeys={['2']}>
        <CollapseItem title="Header1" key="1" >
          <div>Content of CollapseItem 1</div>
        </CollapseItem>
        <CollapseItem title="Header2" key="2">
          <div>Content of CollapseItem 2</div>
        </CollapseItem>
        <CollapseItem title="Header3" key="3">
          <div>Content of CollapseItem 3</div>
        </CollapseItem>
      </Collapse>
    </CodeCard>

    <ReactMarkdown source={require('!!raw-loader!./api.md').default} className="md" />
  </Fragment>
}
