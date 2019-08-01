import React from 'react';
import { Icon } from '../../../lib';
import './icon.example.scss';

export default () => {
  return (
    <div>
      <Icon name='round_like_fill' className="r-icon-example"/>
      <Icon name="round_down_light" color="#ccc" className="r-icon-example"/>
      <Icon name="wang_light" className="r-icon-example"/>
      <Icon name="close" className="r-icon-example"/>
      <Icon name="favor_light" color="#ccc" className="r-icon-example"/>
      <Icon name="xiami" className="r-icon-example"/>
      <Icon name="creative" className="r-icon-example"/>
      <Icon name="clothes" width="30px" height="30px" className="r-icon-example" />
    </div>
  )
}
