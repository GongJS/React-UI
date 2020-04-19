import React, { useState, useEffect } from 'react'
import { combineClass } from '../../helpers/utils'
import './menu.scss'

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultSelectedKey?: string
  defaultExpandKeys?: string[]
  mode?: 'horizontal' | 'vertical'
  onSelectedChange?: (selectedKey: string | undefined) => any
  onExpandChange?: (expandKeys: string[]) => any
  expandKeysOnlyOne?: boolean
  children:
    | React.ReactElement[]
    | React.ReactElement
}

interface ChildProps extends MenuProps {
  uniqueKey: string
  selectedKey: string
  expandKeys: string[]
  currentTarget: EventTarget & Element
  handleSelectedKey?: (event: React.MouseEvent, key: string) => any
  handleExpandKeys?: (key: string, type?: string) => any
  hideChildSubMenu?: (key: string) => any
}

let subMenuEle: Element[]
let isOutClick = true

const Menu: React.FC<MenuProps> = props => {
  const {
    className,
    children,
    defaultSelectedKey,
    defaultExpandKeys,
    onSelectedChange,
    onExpandChange,
    expandKeysOnlyOne,
    mode,
    ...restProps
  } = props
  let childIndex: number | undefined = undefined
  const childKeys: string[] = []
  const [expandKeys, setExpandKeys] = useState<string[]>([])
  const [selectedKey, setSelectedKey] = useState<string | undefined>()
  const [currentTarget, setCurrentTarget] = useState<any>()
  const [clickSubMenuKey, setClickSubMenuKey] = useState<string | undefined>()

  // 处理点击subMenu区域以外的click事件
  const outDivClickHandler: (this: Document, ev: MouseEvent) => any = (
    ev: MouseEvent,
  ) => {
    isOutClick = true
    if (subMenuEle) {
      subMenuEle.forEach(item => {
        if (
          (item && item.contains(ev.target as Document)) ||
          item == ev.target
        ) {
          isOutClick = false
        }
      })
    }
    if (isOutClick && mode === 'horizontal') {
      setExpandKeys([])
    }
  }

  useEffect(() => {
    subMenuEle = Array.from(document.querySelectorAll('.r-sub-menu'))
  }, [])

  // 回调
  useEffect(() => {
    onSelectedChange && onSelectedChange(selectedKey)
    onExpandChange && onExpandChange(expandKeys)
  })

  // 绑定监听事件
  useEffect(() => {
    document.addEventListener('click', outDivClickHandler)
    return () => {
      document.removeEventListener('click', outDivClickHandler)
    }
  })

  // 判断是否有默认展开的subMenu和选中的menuItem
  useEffect(() => {
    if (defaultSelectedKey) {
      setSelectedKey(defaultSelectedKey)
    }
    if (defaultExpandKeys) {
      setExpandKeys(defaultExpandKeys)
    }
    // eslint-disable-next-line
  }, [])

  const getUniqueKeyFromChild = (
    child: React.ReactElement<ChildProps>,
    index: number,
  ): string => {
    return (child.key as string) || `${index}`
  }

  const handleSelectedKey = (event: React.MouseEvent, key: string) => {
    if (!expandKeysOnlyOne && childKeys.indexOf(key) > -1) {
     setExpandKeys([])
    }
    setCurrentTarget(event.currentTarget)
    setSelectedKey(key)
  }

  const hideChildSubMenu = (key: string) => {
    let shouldHide = false
    const filterClickSubMenuKey = expandKeys.filter(
      item => item !== clickSubMenuKey,
    )
    for (let i = 0; i < filterClickSubMenuKey.length; i++) {
      for (let j = 0; j < childKeys.length; j++) {
        if (filterClickSubMenuKey[i] === childKeys[j]) {
          shouldHide = true
        }
      }
    }
    if (expandKeysOnlyOne && shouldHide) {
      setExpandKeys(expandKeys => expandKeys.filter(item => item !== key))
    }
  }

  // 处理点击subMenu事件
  const handleExpandKeys = (key: string) => {
    if (!key) {
      setClickSubMenuKey(key)
      setExpandKeys([])
    }
    if (childKeys.indexOf(key) > -1 && childKeys.indexOf(key) !== childIndex) {
      expandKeysOnlyOne && setExpandKeys(expandKeys =>
          expandKeys.filter(item => childKeys.indexOf(item) === -1),
        )
        childIndex = childKeys.indexOf(key)
      }
    if (expandKeys.indexOf(key) > -1) {
        setExpandKeys(expandKeys => expandKeys.filter(item => item !== key))
        return
    }
      setExpandKeys(expandKeys => expandKeys.concat(key))
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
          expandKeys,
          selectedKey,
          handleSelectedKey,
          handleExpandKeys,
          hideChildSubMenu,
        })
      },
    )
  }

  return (
    <div
      className={combineClass(
        'r-menu',
        className,
        `${mode === 'vertical' ? 'vertical' : ''}`,
      )}
      {...restProps}
    >
      {renderChildren()}
    </div>
  )
}

Menu.displayName = 'Menu'
Menu.defaultProps = {
  mode: 'horizontal',
  expandKeysOnlyOne:true
}
export default Menu
