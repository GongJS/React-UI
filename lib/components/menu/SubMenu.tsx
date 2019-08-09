import React,{useEffect, useState} from 'react';
import MenuItem from './MenuItem'
import Icon from '../icon/Icon'
import combineClass from '../../helpers/combineClass';

interface SubMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  uniqueKey?: string
  selectedKey?: string
  currentTarget?: EventTarget & Element
  expandKeys?: string[]
  globalArrow?:boolean
  mode?: string
  children: React.ReactElement<MenuItem> | React.ReactElement<MenuItem>[] 
  handleSelectedKey?: (event: React.MouseEvent, key: string) => any
  handleExpandKeys?: (key: string) => any
  hideChildSubMenu?: (key: string) => any
}
interface ChildProps extends SubMenuProps{}

const SubMenu: React.FC<SubMenuProps> = ({
  mode,
  globalArrow,
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
}) => {
  const subMenu = React.createRef<HTMLDivElement>()
  const [active, setActive] = useState(false)
  const [arrow, setArrow] = useState(false)
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    handleExpandKeys!(uniqueKey!)
    setArrow(!arrow)
  }
 
  useEffect(() => {
    if (!globalArrow) {
      setArrow(false)
    }
    if (subMenu && subMenu.current && subMenu.current.contains(currentTarget!)) {
      setActive(true)
    } else {
      setActive(false)
      hideChildSubMenu!(uniqueKey!)
    }
  },[currentTarget])
  
  const getUniqueKeyFromChild = (
    child: React.ReactElement<ChildProps>,
    index: number
  ): string => {
    return (child.key as string) || `${index}`
  }

  const renderChildren = (): Array<React.ReactElement<ChildProps>> => {
      return React.Children.map(
        children,
        (child: React.ReactElement<ChildProps>, index: number) => {
          const uniqueKey = getUniqueKeyFromChild(child, index)
          return React.cloneElement(child, {
            mode,
            globalArrow,
            uniqueKey,
            currentTarget,
            selectedKey,
            expandKeys,
            handleSelectedKey,
            handleExpandKeys,
            hideChildSubMenu
          })
        }
      )
    }
    return (
      <div  
        ref={subMenu}
        className={combineClass('r-sub-menu', `${active ? 'active' : ''}`,`${ mode === 'vertical' ? 'vertical': ''}`, className)} 
        {...restProps}
      >
        <span  className={combineClass('r-sub-menu-label', `${active ? 'active' : ''}`,`${ mode === 'vertical' ? 'vertical': ''}`)} onClick={handleClick}>
          {title}
          <span className="r-sub-menu-icon">
            <Icon name="right" className={ arrow && globalArrow? 'open' : 'close'}/>
          </span>
        </span>
        {
          expandKeys!.indexOf(uniqueKey!) > -1 ? 
            <div className={combineClass('r-sub-menu-popover', `${ mode === 'vertical' ? 'vertical': ''}`)}>
              {renderChildren()}
            </div> : null
        }
      </div>
    )
  }
  SubMenu.displayName = 'SubMenu'
  export default SubMenu;