import React, { useEffect, useState } from 'react'
import { combineClass } from '../../helpers/utils'

interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: string
  onClick?: () => any
  uniqueKey?: string
  selectedKey?: string
  currentTarget?: EventTarget & Element
  expandKeys?: string[]
  handleSelectedKey?: (event: React.MouseEvent, key: string) => any
  handleExpandKeys?: (key: string) => any
  hideChildSubMenu?: (key: string) => any
}

const MenuItem: React.FC<MenuItemProps> = props => {
  const {
    mode,
    onClick,
    hideChildSubMenu,
    className,
    children,
    uniqueKey,
    selectedKey,
    currentTarget,
    handleSelectedKey,
    handleExpandKeys,
    expandKeys,
    ...restProps
  } = props
  const menuItem = React.createRef<HTMLDivElement>()
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(false)
    if (
      (menuItem &&
        menuItem.current &&
        menuItem.current.contains(currentTarget!)) ||
      selectedKey === uniqueKey
    ) {
      setActive(true)
    }
  })

  return (
    <div
      ref={menuItem}
      className={combineClass(
        'r-menu-item',
        `${active ? 'active' : ''}`,
        `${mode === 'vertical' ? 'vertical' : ''}`,
        className,
      )}
      onClick={e => {
        onClick && onClick()
        handleSelectedKey!(e, uniqueKey!)
      }}
      {...restProps}
    >
      <li>{children}</li>
    </div>
  )
}

MenuItem.displayName = 'MenuItem'
export default MenuItem
