import React, { Component } from 'react'
import { createHashHistory } from 'history'
import { menuList } from '../../config/menuConfig'
import Menu from '@components/menu'
import MenuItem from '@components/menu/MenuItem'
import SubMenu from '@components/menu/SubMenu'
import './aside.scss'

export default class CNavLeft extends Component {
  render() {
    return (
      <div className="nav-left">
        <Menu  defaultExpandKeys={['/components/common','/components/_layout','/components/nav','/components/enter','/components/display','/components/callback']} expandKeysOnlyOne={false} mode="vertical">{this.initMenuList(menuList)}</Menu>
      </div>
    )
  }
  initMenuList = (menuList: Array<any>) => {
    const history = createHashHistory()
    return menuList.map((menuItem: any) => {
      if (menuItem.children) {
        return (
          <SubMenu key={menuItem.key} title={menuItem.title}>
            {this.initMenuList(menuItem.children)}
          </SubMenu>
        )
      } else {
        return (
          <MenuItem
            key={menuItem.key}
            onClick={() => {
              history.push(`${menuItem.key}`)
            }}
          >
            {menuItem.title}
          </MenuItem>
        )
      }
    })
  }
}
