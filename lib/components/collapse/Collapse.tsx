import React, { useState, useEffect } from 'react';
import combineClass from '../../helpers/combineClass';
import './collapse.scss'

interface CollapseProps extends React.HTMLAttributes<HTMLDivElement>{
  defaultSelectedKeys?: string[]
  icon?: string
}
interface ChildProps {
  uniqueKey?: string
  icon?: string
  selectedKey?: string
  expandKeys?: string[]
  handleSelectedKey?: (key: string) => any
}
const Collapse: React.FC<CollapseProps> = ({className, children,defaultSelectedKeys,icon, ...restProps}) => {
  const [expandKeys, setExpandKeys] = useState<string[]>([])
  const [selectedKey, setSelectedKey] = useState<string>()
  const handleSelectedKey = (key:string) => {
    if (key) {
      setSelectedKey(key)
    }
    if (expandKeys.indexOf(key) > -1) {
      setExpandKeys(expandKeys => expandKeys.filter(item => item !== key))
    } else {
      setExpandKeys(expandKeys => expandKeys.concat(key))
    }
  }
  const getUniqueKeyFromChild = (
    child: React.ReactElement<ChildProps>,
    index: number
  ): string => {
    return (child.key as string) || `${index}`
  }
  const renderChildren = (): Array<React.ReactElement<ChildProps>>=> {
    return React.Children.map(
      children,
      (child: React.ReactElement<ChildProps>, index: number) => {
        const uniqueKey = getUniqueKeyFromChild(child, index)
        return React.cloneElement(child, {
          icon,
          uniqueKey,
          selectedKey,
          expandKeys,
          handleSelectedKey
        })
      }
    )
  }
  useEffect(() => {
    if (defaultSelectedKeys && defaultSelectedKeys.length > 0) {
      setExpandKeys(expandKeys => expandKeys.concat(defaultSelectedKeys!))
      defaultSelectedKeys = []
    }
  })
  return (
    <div className={combineClass('r-collapse',className)} {...restProps}>
      {renderChildren()}
    </div>
  )
}
Collapse.defaultProps = {
  defaultSelectedKeys: [],
  icon: 'right'
}
Collapse.displayName = 'Collapse'
export default Collapse;
