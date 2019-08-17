import React from 'react';
import { Carousel } from '../../../lib';

export default () => {
  return (
    <div>
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
    </div>
  )
}
