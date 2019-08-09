import React, { useState, useEffect } from 'react';
import SubMenu from './SubMenu'
import MenuItem from './MenuItem'
import './menu.scss'
import combineClass from '../../helpers/combineClass';

interface MenuProps extends React.HTMLAttributes<HTMLDivElement>{
  expandKeys?: string[]
  defaultSelectedKey?: string
  mode?: string
  children: React.ReactElement<SubMenu>[] | React.ReactElement<MenuItem>[] | React.ReactElement<SubMenu> | React.ReactElement<MenuItem>
}
interface ChildProps extends MenuProps{
  uniqueKey?: string
  selectedKey?: string
  currentTarget?: EventTarget & Element
  handleSelectedKey?: (event: React.MouseEvent, key: string) => any
  handleExpandKeys?: (key: string) => any
  hideChildSubMenu?: (key: string) => any
}
const Menu: React.FC<MenuProps> = ({className, children, defaultSelectedKey, mode, ...restProps}) => {
  let childIndex: number | undefined = undefined
  const childKeys: string[] = []
  const [expandKeys, setExpandKeys] = useState<string[]>([])
  const [currentTarget, setCurrentTarget] = useState()
  const [selectedKey, setSelectedKey] = useState()

  useEffect(() => {
    if(defaultSelectedKey) {
       setSelectedKey(defaultSelectedKey)
    }
  })

  const getUniqueKeyFromChild = (
    child: React.ReactElement<ChildProps>,
    index: number
  ): string => {
    return (child.key as string) || `${index}`
  }

  const handleSelectedKey = (event: React.MouseEvent, key: string) => {
    setCurrentTarget(event.currentTarget)
    setSelectedKey(key)
  }
  const hideChildSubMenu = (key: string) => {
    setExpandKeys(expandKeys => expandKeys.filter(item => item !== key))
  }
  const handleExpandKeys = (key: string) => {
    if (key) {
      if (childKeys.indexOf(key)> -1 && childKeys.indexOf(key) !== childIndex) {
        setExpandKeys([])

        childIndex = childKeys.indexOf(key)
      }
      if (expandKeys.indexOf(key) > -1) {
        setExpandKeys(expandKeys => expandKeys.filter(item => item !== key))
      } else {
        setExpandKeys(expandKeys => expandKeys.concat(key))
      }
    } else {
      setExpandKeys([])
    }
  }

  const renderChildren = (): Array<React.ReactElement<ChildProps>>=> {
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
     <div className={combineClass('r-menu', className, `${ mode === 'vertical' ? 'vertical': ''}`)} {...restProps}>
      {renderChildren()}
    </div>
  )
}

export default Menu;