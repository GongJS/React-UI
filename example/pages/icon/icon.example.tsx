import React from 'react';
import { Icon,Menu, SubMenu,MenuItem , Carousel, Sticky} from '../../../lib';
import './icon.example.scss';

export default () => {
  return (
    <div>
      <Sticky distance={30}>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>
            <div>dddd</div>

      </Sticky>
      <Icon name='round_like_fill' className="r-icon-example"/>
      <Icon name="round_down_light" color="#ccc" className="r-icon-example"/>
      <Icon name="wang_light" className="r-icon-example"/>
      <Icon name="close" className="r-icon-example"/>
      <Icon name="favor_light" color="#ccc" className="r-icon-example"/>
      <Icon name="xiami" className="r-icon-example"/>
      <Icon name="creative" className="r-icon-example"/>
      <Icon name="clothes" width="30px" height="30px" className="r-icon-example" />
      <Menu>
        <MenuItem  key="item1">Option 1</MenuItem>
        <MenuItem  key="item2">Option 2</MenuItem>
        <MenuItem  key="item3">Option 3</MenuItem>
        <SubMenu  key="sub"  title="SubMenu">
          <MenuItem  key="item4">Option 4</MenuItem>
          <MenuItem  key="item5">Option 5</MenuItem>
          <SubMenu  key="sub3"  title="SubMenu">
            <MenuItem  key="item9">Option 4</MenuItem>
            <MenuItem  key="item11">Option 5</MenuItem>
            <MenuItem  key="item12">Option 6</MenuItem>
          </SubMenu>
        </SubMenu>
</Menu>
  {/* <Carousel type="zoom">
  <div>
          <img src="http://cdn.jirengu.com/book.jirengu.com/img/1.jpg" />
        </div>
        <div>
          <img src="http://cdn.jirengu.com/book.jirengu.com/img/2.jpg" />
          </div>
        <div>
          <img src="http://cdn.jirengu.com/book.jirengu.com/img/3.jpg" />
          </div>
          <div>
          <img src="http://cdn.jirengu.com/book.jirengu.com/img/4.jpg" />
          </div>
     
  </Carousel> */}
    </div>
  )
}
