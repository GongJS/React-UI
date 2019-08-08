import React,{useEffect, useState} from 'react';
import MenuItem from './MenuItem'
import Icon from '../icon/Icon'
import combineClass from '../../helpers/combineClass';

interface SubMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  uniqueKey?: string
  selectedKey?: string
  currentTarget?: EventTarget & Element
  expandKeys?: string[]
  showArrow?: boolean
  mode?: string
  children: React.ReactElement<MenuItem> | React.ReactElement<MenuItem>[] 
  handleSelectedKey?: (event: React.MouseEvent, key: string) => any
  handleExpandKeys?: (key: string) => any
}
interface ChildProps extends SubMenuProps{}

let subMenuEle :Element[]
let isOutClick:boolean = true

const SubMenu: React.FC<SubMenuProps> = ({
  mode,
  uniqueKey,
  currentTarget,
  selectedKey,
  expandKeys,
  title,
  showArrow,
  handleSelectedKey,
  handleExpandKeys,
  className,
  children,
  ...restProps
}) => {
  const subMenu = React.createRef<HTMLDivElement>()
  const [active, setActive] = useState(false)

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    handleExpandKeys!(uniqueKey!)
  }

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
      handleExpandKeys!('')
    }
  }

  useEffect(() => {
    setActive(false)
    if (subMenu && subMenu.current && subMenu.current.contains(currentTarget!)) {
      setActive(true)
    }
    subMenuEle = Array.from(document.querySelectorAll('.r-sub-menu'))
    document.addEventListener('click', outDivClickHandler)
    return () => {
      document.removeEventListener('click', outDivClickHandler);
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
            uniqueKey,
            currentTarget,
            expandKeys,
            handleSelectedKey,
            handleExpandKeys,
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
        <span className="r-sub-menu-label"  onClick={handleClick}>
          {title}
          <span className="r-sub-menu-icon">
            <Icon name="right" />
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