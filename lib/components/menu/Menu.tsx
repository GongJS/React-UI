import React, { useState, useEffect, useLayoutEffect } from 'react';
import SubMenu from './SubMenu'
import MenuItem from './MenuItem'
import { combineClass } from '../../helpers/utils';
import './menu.scss'

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {

  defaultSelectedKey?: string
  defaultExpandKeys?: string[]
  mode?: 'horizontal' | 'vertical'
  onSelectedChange?: (selectedKey: string) => any
  onExpandChange?: (expandKeys: string[]) => any
  children: React.ReactElement<SubMenu>[] | React.ReactElement<MenuItem>[] | React.ReactElement<SubMenu> | React.ReactElement<MenuItem>
}
interface ChildProps extends MenuProps {
  uniqueKey: string
  selectedKey: string
  expandKeys: string[]
  currentTarget: EventTarget & Element
  handleSelectedKey?: (event: React.MouseEvent, key: string) => any
  handleExpandKeys?: (key: string, type?: string) => any
  hideChildSubMenu?: (key: string) => any
}
let subMenuEle: Element[]
let isOutClick: boolean = true

const Menu: React.FC<MenuProps> = ({
  className,
  children,
  defaultSelectedKey,
  defaultExpandKeys,
  onSelectedChange,
  onExpandChange,
  mode,
  ...restProps }) => {
  let childIndex: number | undefined = undefined
  const childKeys: string[] = []
  const [expandKeys, setExpandKeys] = useState<string[]>([])
  const [selectedKey, setSelectedKey] = useState()
  const [currentTarget, setCurrentTarget] = useState()
  const [clickSubMenuKey, setClickSubMenuKey] = useState()

  // 处理点击subMenu区域以外的click事件
  const outDivClickHandler = (e: any) => {
    isOutClick = true
    if (subMenuEle) {
      subMenuEle.forEach(item => {
        if (item && item.contains(e.target) || item == e.target) {
          isOutClick = false
        }
      })
    }
    if (isOutClick) {
      handleExpandKeys!('')
    }
  }
  useEffect(() => {
    subMenuEle = Array.from(document.querySelectorAll('.r-sub-menu'))
    document.addEventListener('click', outDivClickHandler)
    onSelectedChange && onSelectedChange(selectedKey)
    onExpandChange && onExpandChange(expandKeys)
    return () => {
      document.removeEventListener('click', outDivClickHandler);
    }
  })
  useLayoutEffect(() => {
    if (defaultSelectedKey) {
      setSelectedKey(defaultSelectedKey)
    }
    if (defaultExpandKeys) {
      setExpandKeys(defaultExpandKeys)
    }
  }, [])
  const getUniqueKeyFromChild = (
    child: React.ReactElement<ChildProps>,
    index: number
  ): string => {
    return (child.key as string) || `${index}`
  }

  const handleSelectedKey = (event: React.MouseEvent, key: string) => {
    if (childKeys.indexOf(key) > -1) {
      setExpandKeys([])
    }
    setCurrentTarget(event.currentTarget)
    setSelectedKey(key)
  }
  const hideChildSubMenu = (key: string) => {
    let shouldHide = false
    let filterClickSubMenuKey = expandKeys.filter(item => item !== clickSubMenuKey)
    for (let i = 0; i < filterClickSubMenuKey.length; i++) {
      for (let j = 0; j < childKeys.length; j++) {
        if (filterClickSubMenuKey[i] === childKeys[j]) {
          shouldHide = true
        }
      }
    }
    if (shouldHide) {
      setExpandKeys(expandKeys => expandKeys.filter(item => item !== key))
    }
  }
  const handleExpandKeys = (key: string) => {
    setClickSubMenuKey(key)
    if (key) {
      if (childKeys.indexOf(key) > -1 && childKeys.indexOf(key) !== childIndex) {
        setExpandKeys(expandKeys => expandKeys.filter(item => childKeys.indexOf(item) === -1))
        childIndex = childKeys.indexOf(key)
      }
      if (expandKeys.indexOf(key) > -1) {
        setExpandKeys(expandKeys => expandKeys.filter(item => item !== key))
      } else {
        setExpandKeys(expandKeys => expandKeys.concat(key))
      }
    } else {
      setExpandKeys(expandKeys => expandKeys.filter(item => childKeys.indexOf(item) === -1))
    }
  }

  const renderChildren = (): Array<React.ReactElement<ChildProps>> => {
    return React.Children.map(
      children,
      (child: React.ReactElement<ChildProps>, index: number) => {
        const uniqueKey = getUniqueKeyFromChild(child, index)
        childKeys.push(uniqueKey)
        return React.cloneElement(child, {
          mode,
          uniqueKey,
          currentTarget,
          expandKeys,
          selectedKey,
          handleSelectedKey,
          handleExpandKeys,
          hideChildSubMenu
        })
      }
    )
  }
  return (
    <div className={combineClass('r-menu', className, `${mode === 'vertical' ? 'vertical' : ''}`)} {...restProps}>
      {renderChildren()}
    </div>
  )
}
Menu.displayName = "Menu"
Menu.defaultProps = {
  mode: 'horizontal'
}
export default Menu;