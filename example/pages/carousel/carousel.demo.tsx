import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeCard from '../../CodeCard';
import Carousel from '../../../lib/components/carousel/Carousel';


export default () => {
  return <Fragment>
    <ReactMarkdown source={require('!!raw-loader!./carousel.md').default} className="md" />
    <CodeCard
      title="基础用法"
      summary="最基本的用法。"
      code={`
      <Carousel height='400px' style={{ maxWidth: '800px', marginBottom: '20px' }}>
        <div>
          <img src="https://i.loli.net/2019/08/17/ST7WLjAg3Ew2VUh.jpg" />
        </div>
        <div>
          <img src="https://i.loli.net/2019/08/17/enKRFq4c2itrWxA.jpg" />
        </div>
        <div>
          <img src="https://i.loli.net/2019/08/17/7pSJyjAlPqkZWCY.jpg" />
        </div>
        <div>
          <img src="https://i.loli.net/2019/08/17/YUnfpzXlSrc1Nb3.jpg" />
        </div>
      </Carousel>`
      }
    >
      <Carousel height='400px' style={{ maxWidth: '800px', marginBottom: '20px' }}>
        <div>
          <img src="https://i.loli.net/2019/08/17/ST7WLjAg3Ew2VUh.jpg" />
        </div>
        <div>
          <img src="https://i.loli.net/2019/08/17/enKRFq4c2itrWxA.jpg" />
        </div>
        <div>
          <img src="https://i.loli.net/2019/08/17/7pSJyjAlPqkZWCY.jpg" />
        </div>
        <div>
          <img src="https://i.loli.net/2019/08/17/YUnfpzXlSrc1Nb3.jpg" />
        </div>
      </Carousel>
    </CodeCard>
    <CodeCard
      title="自动播放"
      summary="可关闭自动播放，切换不同的动画"
      code={`   
      <Carousel type="slide" autoplay={false} style={{ maxWidth: '800px', marginBottom: '20px' }}>
        <div>
          <img src="https://i.loli.net/2019/08/17/ST7WLjAg3Ew2VUh.jpg" />
        </div>
        <div>
          <img src="https://i.loli.net/2019/08/17/enKRFq4c2itrWxA.jpg" />
        </div>
        <div>
          <img src="https://i.loli.net/2019/08/17/7pSJyjAlPqkZWCY.jpg" />
        </div>
        <div>
          <img src="https://i.loli.net/2019/08/17/YUnfpzXlSrc1Nb3.jpg" />
        </div>
      </Carousel>`
      }
    >
      <Carousel type="slide" autoplay={false} style={{ maxWidth: '800px', marginBottom: '20px' }}>
        <div>
          <img src="https://i.loli.net/2019/08/17/ST7WLjAg3Ew2VUh.jpg" />
        </div>
        <div>
          <img src="https://i.loli.net/2019/08/17/enKRFq4c2itrWxA.jpg" />
        </div>
        <div>
          <img src="https://i.loli.net/2019/08/17/7pSJyjAlPqkZWCY.jpg" />
        </div>
        <div>
          <img src="https://i.loli.net/2019/08/17/YUnfpzXlSrc1Nb3.jpg" />
        </div>
      </Carousel>
    </CodeCard>
    <ReactMarkdown source={require('!!raw-loader!./api.md').default} className="md" />
  </Fragment>
}
