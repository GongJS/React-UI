import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeCard from '../../components/code-card'
import Row from '@components/grid/Row'
import Col from '@components/grid/Col'
import './grid.scss'

export default () => {
  return (
    <Fragment>
      <ReactMarkdown
        source={require('!!raw-loader!./grid.md').default}
        className="md"
      />
      <CodeCard
        title="基础用法"
        summary="使用 Row 和 Col 栅格组件，创建一个基本的栅格系统，所有 Col 必须放在 Row 内，Row 的直接子组件也只能是 Col。"
        code={` 
      <Row className="demo">
        <Col span={12}>Col-12</Col>
        <Col span={12}>Col-12</Col>
      </Row>
      <Row className="demo">
        <Col span={8}>Col-8</Col>
        <Col span={8}>Col-8</Col>
        <Col span={8}>Col-8</Col>
      </Row>
      <Row className="demo">
        <Col span={6}>Col-6</Col>
        <Col span={6}>Col-6</Col>
        <Col span={6}>Col-6</Col>
        <Col span={6}>Col-6</Col>
      </Row>`}
      >
        <Row className="r-grid-demo1">
          <Col span={12}>Col-12</Col>
          <Col span={12}>Col-12</Col>
        </Row>
        <Row className="r-grid-demo1">
          <Col span={8}>Col-8</Col>
          <Col span={8}>Col-8</Col>
          <Col span={8}>Col-8</Col>
        </Row>
        <Row className="r-grid-demo1">
          <Col span={6}>Col-6</Col>
          <Col span={6}>Col-6</Col>
          <Col span={6}>Col-6</Col>
          <Col span={6}>Col-6</Col>
        </Row>
      </CodeCard>
      <CodeCard
        title="区块偏移"
        summary="使用 offset 属性使区块向右侧偏移。"
        code={` 
      <Row>
        <Col  span={4}>Col-4</Col>
        <Col  span={4}  offset={1}>Col-4</Col>
        <Col  span={4}  offset={3}>Col-4</Col>
        <Col  span={4}  offset={4}>Col-4</Col>
      </Row>`}
      >
        <Row className="r-grid-demo2">
          <Col span={4}>Col-4</Col>
          <Col span={4} offset={1}>
            Col-4
          </Col>
          <Col span={4} offset={3}>
            Col-4
          </Col>
          <Col span={4} offset={4}>
            Col-4
          </Col>
        </Row>
      </CodeCard>
      <CodeCard
        title="区块间隔"
        summary="使用 gutter 属性设置区块间隔。"
        code={` 
      <Row  gutter={10}>
        <Col  span={6}>Col-6</Col>
        <Col  span={6}>Col-6</Col>
        <Col  span={6}>Col-6</Col>
        <Col  span={6}>Col-6</Col>
      </Row>`}
      >
        <Row gutter={10}>
          <Col span={6}>
            <div className="gutter">Col-6</div>
          </Col>
          <Col span={6}>
            <div className="gutter">Col-6</div>
          </Col>
          <Col span={6}>
            <div className="gutter">Col-6</div>
          </Col>
          <Col span={6}>
            <div className="gutter">Col-6</div>
          </Col>
        </Row>
      </CodeCard>
      <CodeCard
        title="响应式布局"
        summary="span 和 offset 默认所有宽度下生效，具体设置见 Options，设置 sm、md、lg、xl 属性覆盖以实现响应式布局。"
        code={` 
      <Row className="demo">
        <Col xl={6} lg={8}>
          Col
        </Col>
        <Col xl={12} lg={8}>
          Col
        </Col>
        <Col xl={6} lg={8}>
          Col
        </Col>
      </Row>
      <Row>
        <Col  xl={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
        <Col xl={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
        <Col  xl={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
      </Row>`}
      >
        <Row className="r-grid-demo3">
          <Col xl={6} lg={8}>
            Col
          </Col>
          <Col xl={12} lg={8}>
            Col
          </Col>
          <Col xl={6} lg={8}>
            Col
          </Col>
        </Row>
        <Row className="r-grid-demo4">
          <Col
            className="item"
            xl={{ span: 5, offset: 1 }}
            lg={{ span: 6, offset: 2 }}
          >
            Col
          </Col>
          <Col
            className="item"
            xl={{ span: 11, offset: 1 }}
            lg={{ span: 6, offset: 2 }}
          >
            Col
          </Col>
          <Col
            className="item"
            xl={{ span: 5, offset: 1 }}
            lg={{ span: 6, offset: 2 }}
          >
            Col
          </Col>
        </Row>
      </CodeCard>
      <ReactMarkdown
        source={require('!!raw-loader!./api.md').default}
        className="md"
      />
    </Fragment>
  )
}
