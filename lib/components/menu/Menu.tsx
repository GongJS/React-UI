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
  globalArrow?:boolean
  handleSelectedKey?: (event: React.MouseEvent, key: string) => any
  handleExpandKeys?: (key: string) => any
  hideChildSubMenu?: (key: string) => any
}
 let subMenuEle :Element[]
 let isOutClick:boolean = true
const Menu: React.FC<MenuProps> = ({className, children, defaultSelectedKey, mode, ...restProps}) => {
  let childIndex: number | undefined = undefined
  const childKeys: string[] = []
  const [expandKeys, setExpandKeys] = useState<string[]>([])
  const [currentTarget, setCurrentTarget] = useState()
  const [selectedKey, setSelectedKey] = useState()
  const [globalArrow, setGlobalArrow] = useState(true)
  
  // 处理点击subMenu区域的click事件
  const outDivClickHandler = (e:any) => {
    isOutClick = true
    if(subMenuEle) {
      subMenuEle.forEach(item => {
        if (item && item.contains(e.target) || item == e.target) {
          isOutClick = false
        }
      })
    }
    if (isOutClick) {
      setGlobalArrow(false)
      handleExpandKeys!('')
    }
  }
  useEffect(() => {
    if(defaultSelectedKey) {
       setSelectedKey(defaultSelectedKey)
    }
    subMenuEle = Array.from(document.querySelectorAll('.r-sub-menu'))
    document.addEventListener('click', outDivClickHandler)
    return () => {
      document.removeEventListener('click', outDivClickHandler);
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
    setGlobalArrow(true)
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
          globalArrow,
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
      {renderChildren()} {globalArrow}
    </div>
  )
}

export default Menu;