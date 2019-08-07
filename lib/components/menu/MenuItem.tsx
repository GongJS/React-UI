
import React, { useEffect, useState } from 'react';
import combineClass from '../../helpers/combineClass';

interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement>{
  uniqueKey?: string
  selectedKey?: string
  currentTarget?: EventTarget & Element
  handleSelectedKey?: (event: React.MouseEvent, key: string) => any
  expandKeys?: string[]
  handleExpandKeys?: (key: string) => any
}

const MenuItem: React.FC<MenuItemProps> = ({className, children, uniqueKey, selectedKey,  currentTarget, handleSelectedKey, handleExpandKeys,  expandKeys, ...restProps}) => {
  const menuItem = React.createRef<HTMLDivElement>()
  const [active, setActive] = useState(false)
  useEffect(() => {
    setActive(false)
    console.log(selectedKey, uniqueKey)
    if (menuItem && menuItem.current && menuItem.current.contains(currentTarget!) || selectedKey === uniqueKey) {
      setActive(true)
    }
  },[currentTarget])
  return (
    <div ref={menuItem} className={combineClass('r-menu-item', `${active ? 'active' : ''}`,className)}
      onClick={(e) => handleSelectedKey!(e,uniqueKey!)} {...restProps}
    >
      {children}
    </div>
  )
}

export default MenuItem;