import React, { useState, useEffect } from 'react'
import Icon from '../icon'
import { combineClass } from '../../helpers/utils'
import CascaderItem from './CascaderItem'
import './cascader.scss'

interface Option {
  value: string
  label: string
  children?: Option[]
  disabled?: boolean
}

interface CascaderProps {
  options: Option[]
  itemClassName?: string
  itemStyle?: React.CSSProperties
  onSelect?: (selectedItems: Option[]) => any
  className?: string
  style?: React.CSSProperties
}

const Cascader: React.FC<CascaderProps> = props => {
  const {
    options,
    onSelect,
    children,
    className,
    itemClassName,
    itemStyle,
    ...restProps
  } = props

  const [popoverVisible, setPopoverVisible] = useState(false) // 弹窗
  const [selectedItems, setSelectedItems] = useState<Option[]>([]) // 选中项
  const [selectedValue, setSelectedValue] = useState<string | undefined>() // 选中项的值
  const cascaderRef = React.createRef<HTMLDivElement>()

  // 处理选中项
  const handleChangeValue = (option: Option, level: number) => {
    selectedItems[level] = option
    selectedItems.splice(level + 1)
    setSelectedItems(selectedItems)
    setSelectedValue(selectedItems.map(item => item.label).join('/'))
    onSelect && onSelect(selectedItems)
  }

  // 清除选中项
  const clearSelectValue: React.MouseEventHandler = e => {
    e.stopPropagation()
    setSelectedValue('')
    setSelectedItems([])
    setPopoverVisible(false)
  }

  // 处理点击cascader区域以外的click事件
  const outDivClickHandler = (e: MouseEvent) => {
    const ref: HTMLDivElement | null = cascaderRef.current
    if (ref) {
      if (!ref.contains(e.target as Node) && ref !== e.target) {
        setPopoverVisible(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', outDivClickHandler)
    return () => {
      document.removeEventListener('click', outDivClickHandler)
    }
  })

  return (
    <div
      className="r-cascader"
      ref={cascaderRef}
      {...restProps}
    >
      <div
        className={combineClass(
          'trigger',
          `${selectedItems.length > 0 && popoverVisible ? 'active' : ''}`,
          className,
        )}
        onClick={() => setPopoverVisible(popoverVisible => !popoverVisible)}
      >
        <span>{selectedValue} </span>
        <Icon
          className={combineClass(
            'icon',
            `${popoverVisible ? 'open' : 'close'}`,
          )}
          name="right"
          width="12px"
          style={{ marginLeft: '5px' }}
          color="#dcdfe6"
        />
        {selectedValue ? (
          <button onClick={clearSelectValue} className="clear">
            <Icon name="close" width="12px" color="#fff" />
          </button>
        ) : null}
      </div>
      {popoverVisible ? (
        <div className="popover-wrapper">
          <CascaderItem
            options={options}
            level={0}
            selectedItems={selectedItems}
            closeCascader={() => {setPopoverVisible(false)}}
            handleChangeValue={handleChangeValue}
          />
        </div>
      ) : null}
    </div>
  )
}

Cascader.displayName = 'Cascader'
export default Cascader
