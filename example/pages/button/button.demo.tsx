import React, { Fragment, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeCard from '../../CodeCard'
import Button from '../../../lib/components/button/Button'
import ButtonGroup from '../../../lib/components/button/ButtonGroup'

export default () => {
  const [loading, setLoading] = useState(false)
  const handleClick = () => {
    setLoading(true)
  }
  return <Fragment>
     <ReactMarkdown source={require('!!raw-loader!./button.md').default} className="md" />
    <CodeCard
      title="基础用法"
      summary="按钮有三种类型：默认按钮、朴素按钮、圆角按钮。"
      code={`
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="reverse">反向按钮</Button>
        <Button type="danger">危险按钮</Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" plain>主要按钮</Button>
        <Button type="success" plain>成功按钮</Button>
        <Button type="reverse" plain>反向按钮</Button>
        <Button type="danger" plain>危险按钮</Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" icon="settings" circle></Button>
        <Button type="success" icon="roundcheckfill" circle></Button>
        <Button type="reverse" icon="refresh" circle></Button>
        <Button type="danger" icon="search" circle></Button>
        <Button type="primary" icon="settings" plain circle></Button>
        <Button type="success" icon="roundcheckfill" plain circle></Button>
        <Button type="reverse" icon="refresh" plain circle></Button>
        <Button type="danger" icon="right" plain circle></Button>
      </div>`
      }
    >
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="reverse">反向按钮</Button>
        <Button type="danger">危险按钮</Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" plain>主要按钮</Button>
        <Button type="success" plain>成功按钮</Button>
        <Button type="reverse" plain>反向按钮</Button>
        <Button type="danger" plain>危险按钮</Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" icon="settings" circle></Button>
        <Button type="success" icon="roundcheckfill" circle></Button>
        <Button type="reverse" icon="refresh" circle></Button>
        <Button type="danger" icon="search" circle></Button>
        <Button type="primary" icon="settings" plain circle></Button>
        <Button type="success" icon="roundcheckfill" plain circle></Button>
        <Button type="reverse" icon="refresh" plain circle></Button>
        <Button type="danger" icon="right" plain circle></Button>
      </div>
    </CodeCard>
    <CodeCard
      title="禁用状态"
      summary="按钮不可用状态。"
      code={`
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" disabled>主要按钮</Button>
        <Button type="success" disabled>成功按钮</Button>
        <Button type="reverse" disabled>反向按钮</Button>
        <Button type="danger" disabled>危险按钮</Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" disabled plain>主要按钮</Button>
        <Button type="success" disabled plain>成功按钮</Button>
        <Button type="reverse" disabled plain>反向按钮</Button>
        <Button type="danger" disabled plain>危险按钮</Button>
      </div>`
      }
    >
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" disabled>主要按钮</Button>
        <Button type="success" disabled>成功按钮</Button>
        <Button type="reverse" disabled>反向按钮</Button>
        <Button type="danger" disabled>危险按钮</Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" disabled plain>主要按钮</Button>
        <Button type="success" disabled plain>成功按钮</Button>
        <Button type="reverse" disabled plain>反向按钮</Button>
        <Button type="danger" disabled plain>危险按钮</Button>
      </div>
    </CodeCard>
    <CodeCard
      title="图标按钮"
      summary="带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。"
      code={`
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" icon="right" >主要按钮</Button>
        <Button type="success" icon="wifi" >成功按钮</Button>
        <Button type="reverse" icon="remind" iconPosition="right">反向按钮</Button>
        <Button type="danger" icon="edit" iconPosition="right">危险按钮</Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" icon="sound" plain>主要按钮</Button>
        <Button type="success" icon="camera" plain>成功按钮</Button>
        <Button type="reverse" icon="scan" plain iconPosition="right">反向按钮</Button>
        <Button type="danger" icon="wang" plain iconPosition="right">危险按钮</Button>
      </div>`
      }
    >
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" icon="right" >主要按钮</Button>
        <Button type="success" icon="wifi" >成功按钮</Button>
        <Button type="reverse" icon="remind" iconPosition="right">反向按钮</Button>
        <Button type="danger" icon="edit" iconPosition="right">危险按钮</Button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" icon="sound" plain>主要按钮</Button>
        <Button type="success" icon="camera" plain>成功按钮</Button>
        <Button type="reverse" icon="scan" plain iconPosition="right">反向按钮</Button>
        <Button type="danger" icon="wang" plain iconPosition="right">危险按钮</Button>
      </div>
    </CodeCard>
    <CodeCard
      title="加载中"
      summary="点击按钮后进行数据加载操作，在按钮上显示加载状态。"
      code={`
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" loading={loading} onClick={handleClick}>加载</Button>
      </div>`
      }
    >
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" loading={loading} onClick={handleClick}>加载</Button>
      </div>
    </CodeCard>
    <CodeCard
      title="按钮组"
      summary="以按钮组的方式出现，常用于多项类似操作。"
      code={`
      <div style={{ marginBottom: "20px" }}>
        <ButtonGroup>
          <Button type="primary" icon="back">上一页</Button>
          <Button type="primary" icon="right" iconPosition="right">下一页</Button>
        </ButtonGroup>
        <ButtonGroup style={{ marginLeft: "20px" }}>
          <Button type="primary" icon="evaluate"></Button>
          <Button type="primary" icon="upload"></Button>
          <Button type="primary" icon="like"></Button>
        </ButtonGroup>
      </div>`
      }
    >
      <div style={{ marginBottom: "20px" }}>
        <ButtonGroup>
          <Button type="primary" icon="back">上一页</Button>
          <Button type="primary" icon="right" iconPosition="right">下一页</Button>
        </ButtonGroup>
        <ButtonGroup style={{ marginLeft: "20px" }}>
          <Button type="primary" icon="evaluate"></Button>
          <Button type="primary" icon="upload"></Button>
          <Button type="primary" icon="like"></Button>
        </ButtonGroup>
      </div>
    </CodeCard>
    <ReactMarkdown source={require('!!raw-loader!./api.md').default} className="md" />
  </Fragment>
}
