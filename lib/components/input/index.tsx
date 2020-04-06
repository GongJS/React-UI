import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { HTMLAttributes } from 'enzyme'
import Icon from '../icon'
import { combineClass } from '../../helpers/utils'
import './input.scss'

interface InputProps extends HTMLAttributes {
  value?: string
  defaultValue?: string
  placeholder?: string
  onValueChange?: (value: string) => any
  extraClick?: () => any
  clearClick?: () => any
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler
  addonBefore?: string | React.ReactNode
  addonAfter?: string | React.ReactNode
  preIcon?: string
  sufIcon?: string
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  wrapperClassName?: string
  wrapperStyle?: React.CSSProperties
}

const Input: React.FC<InputProps> = props => {
  const {
    value,
    defaultValue,
    preIcon,
    sufIcon,
    addonBefore,
    addonAfter,
    disabled,
    readonly,
    clearable,
    placeholder,
    onFocus,
    onBlur,
    onValueChange,
    extraClick,
    clearClick,
    className,
    wrapperClassName,
    wrapperStyle,
    ...restProps
  } = props

  const [clearVisible, setClearVisible] = useState(false)
  const [offFocus, setOffFocus] = useState(false)
  const inputRef = React.createRef<HTMLInputElement>()

  const handleChange: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onValueChange && onValueChange(e.currentTarget.value)
  }

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    onValueChange && onValueChange('')
    clearClick && clearClick()
    const ref = inputRef.current
    setTimeout(() => {
      ref && ref.focus()
    })
  }

  const handleFocus: React.FocusEventHandler = e => {
    setOffFocus(true)
    onFocus && onFocus(e)
  }

  const handleBlur: React.FocusEventHandler = e => {
    setClearVisible(false)
    setOffFocus(false)
    onBlur && onBlur(e)
  }

  const wrapperClassList = combineClass(
    'r-input-wrapper',
    wrapperClassName,
    `${addonBefore ? 'r-input--group r-input--group--prepend' : ''}`,
    `${addonAfter ? 'r-input--group r-input--group--append' : ''}`,
    `${preIcon ? 'r-input--pre' : ''}`,
    `${sufIcon ? 'r-input--suf' : ''}`,
  )

  const inputClassList = combineClass(
    className,
    'r-input',
    `${disabled ? 'disabled' : ''}`,
    `${readonly ? 'readonly' : ''}`,
  )

  const changeValue =useCallback ((value?: string) => {
    if (value !== undefined) {
      return value
    }
    if (defaultValue !== undefined) {
      return defaultValue
    }
    return ''
  },[defaultValue])

  const derivedValue = useMemo(() => changeValue(value), [changeValue,value])

  useEffect(() => {
    value && offFocus && setClearVisible(true)
    !value && setClearVisible(false)
  }, [value, offFocus])

  return (
    <div className={wrapperClassList} style={wrapperStyle}>
      {addonBefore ? (
        <div className="r-input-group__prepend" onClick={extraClick}>
          {addonBefore}{' '}
        </div>
      ) : null}
      <input
        value={derivedValue}
        type="text"
        className={inputClassList}
        placeholder={placeholder || ''}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        readOnly={readonly}
        ref={inputRef}
        {...restProps}
      />
      {addonAfter ? (
        <div className="r-input-group__append" onClick={extraClick}>
          {addonAfter}
          {clearVisible && clearable && !readonly ? (
            <button onMouseDown={handleClear} className="r-input__clear">
              <Icon color="#fff" size="14px" name="close" />
            </button>
          ) : null}
        </div>
      ) : null}
      {preIcon ? (
        <span className="r-input__pre">
          <Icon color="#bac7de" name={preIcon} />
        </span>
      ) : null}
      {sufIcon ? (
        <span className="r-input__suf">
          <Icon color="#bac7de" name={sufIcon} />
        </span>
      ) : null}
      {clearVisible && clearable && !addonAfter && !readonly ? (
        <button onMouseDown={handleClear} className="r-input__clear">
          <Icon color="#fff" size="14px" name="close" />
        </button>
      ) : null}
    </div>
  )
}

Input.defaultProps = {
  disabled: false,
  readOnly: false,
  clearable: false,
}
Input.displayName = 'Input'
export default Input
