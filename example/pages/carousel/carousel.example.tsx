import React from 'react';
import { Carousel } from '../../../lib';

export default () => {
  return (
    <div>
      <Carousel autoplay={false} height='400px' style={{maxWidth:'800px', marginBottom:'20px'}}>
        <div>
          <img src="../../assets/images/one.jpg" />
        </div>
        <div>
          <img src="../../assets/images/two.jpg" />
        </div>
        <div>
          <img src="../../assets/images/three.jpg" />
        </div>
        <div>
          <img src="../../assets/images/four.jpg" />
        </div>
      </Carousel>

      <Carousel type="zoom" autoplay={false} style={{maxWidth:'800px', marginBottom:'20px'}}>
        <div>
          <img src="../../assets/images/one.jpg" />
        </div>
        <div>
          <img src="../../assets/images/two.jpg" />
        </div>
        <div>
          <img src="../../assets/images/three.jpg" />
        </div>
        <div>
          <img src="../../assets/images/four.jpg" />
        </div>
      </Carousel>
    </div>
  )
}
