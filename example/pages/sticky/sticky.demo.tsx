import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeCard from '../../CodeCard'
import Sticky from '../../../lib/components/sticky/Sticky'
import Button from '../../../lib/components/button/Button'

export default () => {
  return <Fragment>
    <ReactMarkdown source={require('!!raw-loader!./sticky.md').default} className="md" />
    <CodeCard
      title="基本用法"
      summary="最基本的使用方法。"
      code={` 
      <div>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <br/>
      <Sticky distance={100}>
        <Button type="primary">再动我就要被钉住啦</Button>
      </Sticky>
      <br/>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      </div>`
      }
    >
      <div>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <br/>
      <Sticky distance={100}>
        <Button type="primary">再动我就要被钉住啦</Button>
      </Sticky>
      <br/>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
      <p>我只是背景墙，不要钉我。。。</p>
    </div>
    </CodeCard>
    <ReactMarkdown source={require('!!raw-loader!./api.md').default} className="md" />
  </Fragment>
}
