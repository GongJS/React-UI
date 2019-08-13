import React from 'react';
import { Collapse, CollapseItem } from '../../../lib';


export default () => {
  const handleChange = (expandKeys: string[]) => {
    console.log(expandKeys)
  }
  return (
    <div>
      <Collapse style={{marginBottom:'20px'}} onChange={(expandKeys) => handleChange(expandKeys)}>
        <CollapseItem title="Header1" key="1">
          <div>Content of CollapseItem 1</div>
        </CollapseItem>
        <CollapseItem title="Header2" key="2">
          <div>Content of CollapseItem 2</div>
        </CollapseItem>
        <CollapseItem title="Header3" key="3">
          <div>Content of CollapseItem 3</div>
        </CollapseItem>
      </Collapse>

      <Collapse style={{marginBottom:'20px'}} accordion >
        <CollapseItem title="Header1" key="1" >
          <div>Content of CollapseItem 1</div>
        </CollapseItem>
        <CollapseItem title="Header2" key="2">
          <div>Content of CollapseItem 2</div>
        </CollapseItem>
        <CollapseItem title="Header3" key="3">
          <div>Content of CollapseItem 3</div>
        </CollapseItem>
      </Collapse>

      <Collapse style={{marginBottom:'20px'}} defaultSelectedKeys={['2']}>
        <CollapseItem title="Header1" key="1" disabled>
          <div>Content of CollapseItem 1</div>
        </CollapseItem>
        <CollapseItem title="Header2" key="2">
          <div>Content of CollapseItem 2</div>
        </CollapseItem>
        <CollapseItem title="Header3" key="3">
          <div>Content of CollapseItem 3</div>
        </CollapseItem>
      </Collapse>
    </div>
  )
}
