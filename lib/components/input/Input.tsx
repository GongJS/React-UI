import React, { useEffect, useState, useMemo } from 'react';
import { HTMLAttributes } from 'enzyme';
import Icon from '../icon/Icon'
import { combineClass } from '../../helpers/utils';
import './input.scss'

interface InputProps extends HTMLAttributes {
  value?: string
  defaultValue?: string
  placeholder?: string
  onChange?: React.ChangeEventHandler
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler
  addonBefore?: string | React.ReactNode
  addonAfter?: string | React.ReactNode
  preIcon?: string
  sufIcon?: string
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  wrapperClassName?: string,
  wrapperStyle?: React.CSSProperties
}

const Input: React.FC<InputProps> = ({
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
  onChange,
  className,
  wrapperClassName,
  wrapperStyle,
  ...restProps
}) => {
  const [clearVisible, setClearVisible] = useState(false)
  const [offFocus, setOffFocus] = useState(false)
  const [event, setEvent] = useState<React.ChangeEvent<HTMLInputElement>>()
  const inputRef = React.createRef<HTMLInputElement>()
  const handleChange: React.ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      setEvent(e)
      e.persist()
      onChange(e);
    }
  }
  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!event) { return }
    e.stopPropagation()
    event!.target.value = ''
    handleChange(event!)
    const ref = inputRef.current
    setTimeout(() => {
      ref && ref.focus()
    })
  }
  const handleFocus: React.FocusEventHandler = (e) => {
    setOffFocus(true)
    onFocus && onFocus(e)
  }
  const handleBlur: React.FocusEventHandler = (e) => {
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
  const changeValue = (value?: string) => {
    if (value !== undefined) {
      return value;
    }
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    return ''
  }

  const derivedName = useMemo(() => changeValue(value), [value])
  useEffect(() => {
    value && offFocus && setClearVisible(true)
    !value && setClearVisible(false)
  })
  return (
    <div className={wrapperClassList} style={wrapperStyle}>
      {
        addonBefore ? <div className="r-input-group__prepend">{addonBefore} </div> : null
      }
      {changeValue()}
      <input
        value={derivedName}
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
      {
        addonAfter ? <div className="r-input-group__append">
          {addonAfter}
          {clearVisible && clearable && !readonly ? <button onMouseDown={handleClear} className="r-input__clear"><Icon color="#fff" size="14px" name='close' /></button> : null}
        </div>
          : null
      }
      {preIcon ? <span className="r-input__pre"><Icon color="#bac7de" name={preIcon} /></span> : null}
      {sufIcon ? <span className="r-input__suf"><Icon color="#bac7de" name={sufIcon} /></span> : null}
      {clearVisible && clearable && !addonAfter && !readonly ? <button onMouseDown={handleClear} className="r-input__clear"><Icon color="#fff" size="14px" name='close' /></button> : null}
    </div>
  )
}
Input.defaultProps = {
  disabled: false,
  readOnly: false,
  clearable: false
}
Input.displayName = 'Input'
export default Input;