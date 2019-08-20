import React, { Fragment} from 'react';
import ReactMarkdown from 'react-markdown'
import CodeCard from '../../CodeCard'
import Icon from '../../../lib/components/icon/Icon'
;

export default () => {
  return <Fragment>
    <ReactMarkdown source={require('!!raw-loader!./icon.md').default} className="md" />
    <CodeCard
      title="基础用法"
      summary="通过 name、 color 、size 来设置 icon 的形状、颜色、大小。"
      code={` 
        <Icon name='Aa' color="#F4516C" size="30px" />
        <Icon name="sousuo" color="#F4516C" size="30px" />
        <Icon name="icon-checkin" color="#F4516C" size="30px" />
        <Icon name="appreciate" color="#F4516C" size="30px" />
        <Icon name="close" color="#F4516C" size="30px" />
        <Icon name="check" color="#F4516C" size="30px" />`
      }
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', }}>
        <Icon name='Aa' color="#F4516C" size="30px" />
        <Icon name="sousuo" color="#F4516C" size="30px" />
        <Icon name="icon-checkin" color="#F4516C" size="30px" />
        <Icon name="appreciate" color="#F4516C" size="30px" />
        <Icon name="close" color="#F4516C" size="30px" />
        <Icon name="check" color="#F4516C" size="30px" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', }}>
        <Icon name='emoji' color="#36b3d6" size="30px" />
        <Icon name="favor" color="#36b3d6" size="30px" />
        <Icon name="loading1" color="#36b3d6" size="30px" />
        <Icon name="location" color="#36b3d6" size="30px" />
        <Icon name="roundcheck" color="#36b3d6" size="30px" />
        <Icon name="roundclose" color="#36b3d6" size="30px" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', }}>
        <Icon name='roundright' color="#34BFA3" size="30px" />
        <Icon name="search" color="#34BFA3" size="30px" />
        <Icon name="time" color="#34BFA3" size="30px" />
        <Icon name="unfold" color="#34BFA3" size="30px" />
        <Icon name="warn" color="#34BFA3" size="30px" />
        <Icon name="camera" color="#34BFA3" size="30px" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', }}>
        <Icon name='favorfill' color="#8C98AE" size="30px" />
        <Icon name="roundclosefill" color="#8C98AE" size="30px" />
        <Icon name="roundcheckfill" color="#8C98AE" size="30px" />
        <Icon name="roundrightfill" color="#8C98AE" size="30px" />
        <Icon name="timefill" color="#8C98AE" size="30px" />
        <Icon name="likefill" color="#8C98AE" size="30px" />
      </div>
    </CodeCard>
    <ReactMarkdown source={require('!!raw-loader!./api.md').default} className="md" />
  </Fragment>
}
