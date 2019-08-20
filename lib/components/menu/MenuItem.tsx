
import React, { useEffect, useState } from 'react';
import { combineClass } from '../../helpers/utils';

interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement>{
  mode?:string
  uniqueKey?: string
  selectedKey?: string
  currentTarget?: EventTarget & Element
  expandKeys?: string[]
  handleSelectedKey?: (event: React.MouseEvent, key: string) => any
  handleExpandKeys?: (key: string) => any
  hideChildSubMenu?: (key: string) => any
}

const MenuItem: React.FC<MenuItemProps> = ({mode, hideChildSubMenu, className, children, uniqueKey, selectedKey,  currentTarget, handleSelectedKey, handleExpandKeys,  expandKeys, ...restProps}) => {
  const menuItem = React.createRef<HTMLDivElement>()
  const [active, setActive] = useState(false)
  useEffect(() => {
    setActive(false)
    if (menuItem && menuItem.current && menuItem.current.contains(currentTarget!) || selectedKey === uniqueKey) {
      setActive(true)
    }
  })
  return (
    <div ref={menuItem} className={combineClass('r-menu-item', `${active ? 'active' : ''}`, `${ mode === 'vertical' ? 'vertical': ''}`, className)}
      onClick={(e) => handleSelectedKey!(e,uniqueKey!)} {...restProps}
    >
      {children}
    </div>
  )
}
MenuItem.displayName = 'MenuItem'
export default MenuItem;