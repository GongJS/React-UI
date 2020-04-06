import React, { useState, useEffect } from 'react'
import { combineClass } from '../../helpers/utils'
import './collapse.scss'

interface CollapseProps {
  defaultSelectedKeys?: string[]
  onChange?: (expandKeys: string[], e?: React.MouseEvent<HTMLElement>) => any
  icon?: string
  className?: string
  accordion?: boolean
  style?: React.CSSProperties
}
interface ChildProps {
  uniqueKey?: string
  icon?: string
  selectedKey?: string
  expandKeys?: string[]
  defaultSelectedKeys?: string[]
  handleSelectedKey?: (
    key: string,
    event?: React.MouseEvent<HTMLElement>,
  ) => any
}
const Collapse: React.FC<CollapseProps> = props => {
  const {
    className,
    children,
    defaultSelectedKeys,
    icon,
    accordion,
    onChange,
    ...restProps
  } = props

  const [expandKeys, setExpandKeys] = useState<string[]>([])
  const [selectedKey, setSelectedKey] = useState<string>()
  let event: React.MouseEvent<HTMLElement>

  const handleSelectedKey = (
    key: string,
    event: React.MouseEvent<HTMLElement>,
  ) => {
    if (key) {
      setSelectedKey(key)
    }
    if (expandKeys.indexOf(key) > -1) {
      setExpandKeys(expandKeys => expandKeys.filter(item => item !== key))
    } else {
      if (accordion) {
        setExpandKeys([])
      }
      setExpandKeys(expandKeys => expandKeys.concat(key))
    }
    event = event
  }

  const renderChildren = (): Array<React.ReactElement<ChildProps>> => {
    //@ts-ignore
    return React.Children.map(
      children,
      (child: React.ReactElement<ChildProps>, index: number) => {
        const uniqueKey = getUniqueKeyFromChild(child, index)
        return React.cloneElement(child, {
          icon,
          uniqueKey,
          selectedKey,
          expandKeys,
          defaultSelectedKeys,
          handleSelectedKey,
        })
      },
    )
  }

  const getUniqueKeyFromChild = (
    child: React.ReactElement<ChildProps>,
    index: number,
  ): string => {
    return (child.key as string) || `${index}`
  }

  useEffect(() => {
    onChange && onChange(expandKeys, event)
    //@ts-ignore
  }, [expandKeys, setExpandKeys, onChange, event])

  return (
    <div className={combineClass('r-collapse', className)} {...restProps}>
      {renderChildren()}
    </div>
  )
}

Collapse.defaultProps = {
  defaultSelectedKeys: [],
  icon: 'right',
  accordion: false,
}
Collapse.displayName = 'Collapse'
export default Collapse
