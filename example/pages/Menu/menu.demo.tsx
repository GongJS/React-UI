import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeCard from '../../CodeCard'
import Menu from '../../../lib/components/menu/Menu'
import MenuItem from '../../../lib/components/menu/MenuItem'
import SubMenu from '../../../lib/components/menu/SubMenu'


export default () => {
  return <Fragment>
    <ReactMarkdown source={require('!!raw-loader!./menu.md').default} className="md" />
    <CodeCard
      title="水平导航"
      summary="水平的顶部导航菜单。"
      code={` 
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
      </Menu>`
      }
    >

      <Menu style={{marginBottom:'200px'}}>
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
    </CodeCard>
    <CodeCard
      title="垂直导航"
      summary="垂直的侧边导航菜单。"
      code={` 
      <Menu mode="vertical" style={{ marginBottom: "200px" }}>
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
      </Menu>`
      }
    >
      <Menu mode="vertical" style={{ marginBottom: "200px" }}>
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
    </CodeCard>
    <ReactMarkdown source={require('!!raw-loader!./api.md').default} className="md" />
  </Fragment>
}
