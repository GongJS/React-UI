import React, { useState } from 'react';
import Icon from '../icon/Icon'
import combineClass from '../../helpers/combineClass';
import './cascader.scss'

interface Option {
  value: string
  label: string
  children?: Option[]
  disabled?: boolean
}

interface CascaderItemProps {
  options: Option[] | null
  level: number
  selectedItems: Option[]
  handleChangeValue: (option: Option, level: number) => any
  itemClassName?: string
  itemStyle?: React.CSSProperties
}

const CascaderItem: React.FC<CascaderItemProps> = ({
  options,
  selectedItems,
  level,
  handleChangeValue,
  itemClassName,
  itemStyle,
  ...restProps
}) => {
  const [currentOption, setCurrentOption] = useState<Option>()
  const handleItemClick = (option: Option) => {
    if (option.disabled) {
      return
    }
    if (!currentOption || option.value !== currentOption.value) {
      setCurrentOption(option)
      handleChangeValue(option, level)
    }

  }
  const rightItems = () => {
    let currentSelected = selectedItems[level]
    if (currentSelected && currentSelected.children) {
      return currentSelected.children
    } else {
      return null
    }
  }
  const setItemActive = (value: string) => {
    let flag = false
    selectedItems.forEach(element => {
      if (element.value === value) {
        flag = true
      }
    })
    return flag
  }
  return (
    <div className={combineClass('r-cascader-item', itemClassName)} {...restProps}>
      <div className="left">
        {
          options && options.map((item) =>
            <div className={combineClass('label', `${item.disabled ? 'disabled' : ''}`)} key={item.value} onClick={() => handleItemClick(item)}>
              <span className={`${setItemActive(item.value) ? 'open' : 'close'}`}>{item.label}</span>
              {
                item.children ? <Icon name="right" width="12px" style={{ marginLeft: '5px' }} color='#00000073' /> : null
              }
            </div>
          )
        }
      </div>
      <div className="right">
        {
          rightItems() ?
            <CascaderItem
              options={rightItems()}
              selectedItems={selectedItems}
              level={level + 1}
              handleChangeValue={handleChangeValue}
              itemClassName={itemClassName}
              itemStyle={itemStyle}
            /> : null}
      </div>
    </div>
  )
}
export default CascaderItem;