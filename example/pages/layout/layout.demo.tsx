import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeCard from '../../CodeCard'
import {
  Layout,
  Header,
  Content,
  Footer,
  Aside
} from '../../../lib/components/layout/Layout';
import './layout.scss'


export default () => {
  return <Fragment>
    <ReactMarkdown source={require('!!raw-loader!./layout.md').default} className="md" />
    <CodeCard
      title="常见布局一"
      summary="经典上中下布局。"
      code={` 
      <Layout style={{height: '500px'}} className="l-layout">
        <Header className="l-header">Header</Header>
        <Content className="l-content">Content</Content>
        <Footer className="l-footer">Footer</Footer>
      </Layout>`
      }
    >
      <div className="r-layout-demo1">
        <Layout style={{ height: '500px' }} className="l-layout">
          <Header className="l-header">Header</Header>
          <Content className="l-content">Content</Content>
          <Footer className="l-footer">Footer</Footer>
        </Layout>
      </div>
    </CodeCard>
    <CodeCard
      title="常见布局二"
      summary="经典左侧边栏布局。"
      code={` 
      <Layout style={{height: '500px'}} className="l-layout">
        <Header className="l-header">Header</Header>
        <Layout className="l-l-layout">
          <Aside className="l-l-aside">Aside</Aside>
          <Content className="l-l-content">Content</Content>
        </Layout>
        <Footer className="l-footer">Footer</Footer>
      </Layout>`
      }
    >
      <div className="r-layout-demo2">
        <Layout style={{ height: '500px' }} className="l-layout">
          <Header className="l-header">Header</Header>
          <Layout className="l-l-layout">
            <Aside className="l-l-aside">Aside</Aside>
            <Content className="l-l-content">Content</Content>
          </Layout>
          <Footer className="l-footer">Footer</Footer>
        </Layout>
      </div>
    </CodeCard>
    <CodeCard
      title="常见布局布局三"
      summary="经典左侧边栏布局。"
      code={` 
      <Layout style={{height: '500px'}} className="l-layout">
        <Header className="l-header">Header</Header>
        <Layout className="l-l-layout">
          <Content className="l-l-content">Content</Content>
          <Aside className="l-l-aside">Aside</Aside>
        </Layout>
        <Footer className="l-footer">Footer</Footer>
      </Layout>`
      }
    >
      <div className="r-layout-demo3">
        <Layout style={{ height: '500px' }} className="l-layout">
          <Header className="l-header">Header</Header>
          <Layout className="l-l-layout">
            <Content className="l-l-content">Content</Content>
            <Aside className="l-l-aside">Aside</Aside>
          </Layout>
          <Footer className="l-footer">Footer</Footer>
        </Layout>
      </div>
    </CodeCard>
    <ReactMarkdown source={require('!!raw-loader!./api.md').default} className="md" />
  </Fragment>
}
