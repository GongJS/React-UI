import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { combineClass } from '../../helpers/utils'
import Icon from '../icon'

interface SubMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  uniqueKey?: string
  selectedKey?: string
  currentTarget?: EventTarget & Element
  expandKeys?: string[]
  mode?: string
  children: React.ReactElement | React.ReactElement[]
  handleSelectedKey?: (event: React.MouseEvent, key: string) => any
  handleExpandKeys?: (key: string) => any
  hideChildSubMenu?: (key: string) => any
}
interface ChildProps extends SubMenuProps {}

const SubMenu: React.FC<SubMenuProps> = props => {
  const {
    mode,
    uniqueKey,
    currentTarget,
    selectedKey,
    expandKeys,
    title,
    handleSelectedKey,
    handleExpandKeys,
    hideChildSubMenu,
    className,
    children,
    ...restProps
  } = props

  const subMenu = React.createRef<HTMLDivElement>()
  const [active, setActive] = useState(false)
  const childKeys: string[] = []
  const childRef = React.createRef<HTMLDivElement>()
  let height: string

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    handleExpandKeys!(uniqueKey!)
  }

  useEffect(() => {
    if (
      (subMenu &&
        subMenu.current &&
        subMenu.current.contains(currentTarget!)) ||
      childKeys.indexOf(selectedKey!) > -1
    ) {
      setActive(true)
      return
    }
    setActive(false)
    hideChildSubMenu!(uniqueKey!)
  }, [currentTarget])

  const getUniqueKeyFromChild = (
    child: React.ReactElement<ChildProps>,
    index: number,
  ): string => {
    return (child.key as string) || `${index}`
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
          selectedKey,
          expandKeys,
          handleSelectedKey,
          handleExpandKeys,
          hideChildSubMenu,
        })
      },
    )
  }

  return (
    <div
      ref={subMenu}
      className={combineClass(
        'r-sub-menu',
        `${active ? 'active' : ''}`,
        `${mode === 'vertical' ? 'vertical' : ''}`,
        className,
      )}
      {...restProps}
    >
      <span
        className={combineClass(
          'r-sub-menu-label',
          `${active ? 'active' : ''}`,
          `${mode === 'vertical' ? 'vertical' : ''}`,
        )}
        onClick={handleClick}
      >
        {title}
        <span className="r-sub-menu-icon">
          <Icon
            name="right"
            color={active ? '#4a90e2' : '#45526b'}
            className={expandKeys!.indexOf(uniqueKey!) > -1 ? 'open' : 'close'}
          />
        </span>
      </span>
      <CSSTransition
        in={expandKeys!.indexOf(uniqueKey!) > -1}
        timeout={300}
        unmountOnExit
        onEnter={(el: HTMLDivElement) => {
          let childCurrent: HTMLDivElement | null = childRef.current
          if (childCurrent) {
            const { top, bottom } = childCurrent.getBoundingClientRect()
            height = bottom - top + 'px'
            el.style.opacity = '0'
            el.style.height = '0'
          }
        }}
        onEntering={(el: HTMLDivElement) => {
          el.style.height = height
          el.style.opacity = '1'
          el.style.transition = 'all 0.3s ease'
        }}
        onExit={(el: HTMLDivElement) => {
          el.style.height = height
          el.style.opacity = '1'
        }}
        onExiting={(el: HTMLDivElement) => {
          el.style.height = '0'
          el.style.opacity = '0'
          el.style.transition = 'all 0.3s ease'
        }}
      >
        <div
          ref={childRef}
          className={combineClass(
            'r-sub-menu-popover',
            `${mode === 'vertical' ? 'vertical' : ''}`,
          )}
        >
          {renderChildren()}
        </div>
      </CSSTransition>
    </div>
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu
