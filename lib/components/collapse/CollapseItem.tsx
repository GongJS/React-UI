import React from 'react';
import Icon from '../icon/Icon'
import combineClass from '../../helpers/combineClass';
import './collapse.scss'

interface CollapseItemProps extends React.HTMLAttributes<HTMLDivElement>{
  title: string
  icon?: string
  uniqueKey?: string
  selectedKey?: string
  expandKeys?: string[]
  handleSelectedKey?: (key: string) => any
}
const CollapseItem: React.FC<CollapseItemProps> = ({className, icon, children, title, uniqueKey,expandKeys,handleSelectedKey, ...restProps}) => {
  const handleClick = () => {
    handleSelectedKey!(uniqueKey!)
  }

  
  return (
    <div className={combineClass('r-collapseItem',className)} {...restProps}>
      <div onClick={handleClick} className="title">
        <Icon name={icon!} color="#2f4e8c" style={{marginRight: '5px'}} className={expandKeys!.indexOf(uniqueKey!) > -1 ? 'open' : 'close'}/>
        {title}
      </div>
      {
        expandKeys!.indexOf(uniqueKey!) > -1 ? 
          <div className="content">
            {children}
        </div> : null
      }
    </div>
  )
}

export default CollapseItem;