import React from 'react';
import { Icon } from '../../../lib';
import './icon.example.scss';

export default () => {
  return (
    <div>
      <Icon name="star" color="#aaa" className="r-icon-example"/>
      <Icon name="search" color="#ccc" className="r-icon-example"/>
      <Icon name="alipay" className="r-icon-example"/>
      <Icon name="close" className="r-icon-example"/>
      <Icon name="apple" color="#eee" className="r-icon-example"/>
      <Icon name="filter" className="r-icon-example"/>
      <Icon name="search" className="r-icon-example"/>
      <Icon name="setting" width="30px" height="30px" className="r-icon-example" />
    </div>
  )
}
