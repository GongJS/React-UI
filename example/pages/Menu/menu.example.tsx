import React from 'react';
import { Menu, SubMenu, MenuItem } from '../../../lib';

export default () => {
  return (
    <div>
      <Menu >
        <MenuItem key="item1">Option 1</MenuItem>
        <MenuItem key="item2">Option 2</MenuItem>
        <MenuItem key="item3">Option 3</MenuItem>
        <SubMenu key="sub" title="SubMenu">
          <MenuItem key="item4">Option 4</MenuItem>
          <MenuItem key="item5">Option 5</MenuItem>
          <SubMenu key="sub-two" title="SubMenu">
            <MenuItem key="item6">Option 6</MenuItem>
            <MenuItem key="item7">Option 7</MenuItem>
            <MenuItem key="item8">Option 8</MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>

      <Menu mode="vertical">
        <MenuItem key="item1">Option 1</MenuItem>
        <MenuItem key="item2">Option 2</MenuItem>
        <MenuItem key="item3">Option 3</MenuItem>
        <SubMenu key="sub" title="SubMenu">
          <MenuItem key="item4">Option 4</MenuItem>
          <MenuItem key="item5">Option 5</MenuItem>
          <SubMenu key="sub-two" title="SubMenu">
            <MenuItem key="item6">Option 6</MenuItem>
            <MenuItem key="item7">Option 7</MenuItem>
            <MenuItem key="item8">Option 8</MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  )
}
