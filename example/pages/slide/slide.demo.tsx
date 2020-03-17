import React, { Fragment, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeCard from '../../CodeCard'
import Slide from '../../../lib/components/slide'
import Button from '../../../lib/components/button/Button'

export default () => {
  const list = [
    {
      url: 'https://i.loli.net/2019/08/17/ST7WLjAg3Ew2VUh.jpg',
      width: 533,
      height: 300,
    },
    {
      url: 'https://i.loli.net/2019/08/17/enKRFq4c2itrWxA.jpg',
      width: 533,
      height: 300,
    },
  ]
  const [visible, setVisible] = useState(false)
  const onClose = () => {
    setVisible(false)
  }
  const handleClick = () => {
    setVisible(true)
  }
  return (
    <Fragment>
      <ReactMarkdown
        source={require('!!raw-loader!./slide.md').default}
        className="md"
      />
      <CodeCard
        title="基础用法"
        summary="传入图片链接即可，单击图片关闭查看器"
        code={`
      const list = [
        {src: 'https://i.loli.net/2019/08/17/ST7WLjAg3Ew2VUh.jpg', width:533,height:300},
        {src: 'https://i.loli.net/2019/08/17/enKRFq4c2itrWxA.jpg',width:533,height:300}
      ]
      const [visible,setVisible] = useState(false)
      const onClose = () => {
        setVisible(false)
      }
      const handleClick = () => {
        setVisible(true)
      } 
      <Button type="primary" onClick={handleClick}>打开图片查看器</Button>
      <Slide list={list} visible={visible} onClose={onClose}/>`}
      >
        <Button type="primary" onClick={handleClick}>
          打开图片查看器
        </Button>
        <Slide list={list} visible={visible} onClose={onClose} />
      </CodeCard>

      <ReactMarkdown
        source={require('!!raw-loader!./api.md').default}
        className="md"
      />
    </Fragment>
  )
}
