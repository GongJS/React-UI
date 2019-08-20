import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group'
import Icon from '../icon/Icon'
import {combineClass} from '../../helpers/utils';
import './collapse.scss'

interface CollapseItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  icon?: string
  disabled?: boolean
  uniqueKey?: string
  selectedKey?: string
  expandKeys?: string[]
  defaultSelectedKeys?: string[]
  handleSelectedKey?: (key: string, event?:React.MouseEvent<HTMLElement>) => any
}
const CollapseItem: React.FC<CollapseItemProps> = ({
  className,
  icon,
  children,
  title,
  uniqueKey,
  expandKeys,
  selectedKey,
  disabled,
  defaultSelectedKeys,
  handleSelectedKey,
  ...restProps }) => {
  const handleClick = (event:React.MouseEvent<HTMLElement>) => {
    if (disabled) {
      return
    }
    handleSelectedKey!(uniqueKey!,event)
  }
  const childRef = React.createRef<HTMLDivElement>()
  let height: string
  useEffect(() => {
    if (disabled) {
      return
    }
    if ( defaultSelectedKeys!.indexOf(uniqueKey!) > -1) {
      handleSelectedKey!(uniqueKey!)
    }
  },[])
  return (
    <div className={combineClass('r-collapseItem',`${disabled? 'disable': ''}`, className)} {...restProps}>
      <div onClick={handleClick} className="title">
        <Icon name={icon!} color="#2f4e8c" style={{ marginRight: '5px' }} className={expandKeys!.indexOf(uniqueKey!) > -1 ? 'open' : 'close'} />
        {title}
      </div>
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
          el.style.paddingBottom = '0'
          el.style.opacity = '0'
          el.style.transition = 'all 0.3s ease'
        }}
      >
        <div ref={childRef} className="content">{children}</div>
      </CSSTransition>
    </div>
  )
}
CollapseItem.displayName = 'CollapseItem'
export default CollapseItem;