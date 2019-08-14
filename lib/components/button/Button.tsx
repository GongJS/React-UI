import React from 'react';
import Icon from '../icon/Icon'
import combineClass from '../../helpers/combineClass';
import './button.scss'

interface ButtonProps {
  type?: 'primary' | 'success' | 'reverse' | 'danger' | 'default' | 'plain' |undefined
  htmlType?: 'button' | 'submit' | 'reset'
  plain?: boolean
  circle?: boolean
  disabled?: boolean
  ripple?:boolean
  icon?:string
  loading?:boolean
  iconPosition?: string
  onClick?: React.MouseEventHandler
  onMouseEnter?: React.MouseEventHandler
  onMouseLeave?: React.MouseEventHandler
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler
  className?: string
  style?: React.CSSProperties
}

const Button: React.FC<ButtonProps> = ({
  type,
  plain,
  circle,
  disabled,
  ripple,
  icon,
  loading,
  iconPosition,
  children,
  className,
  htmlType,
  ...restProps
}) => {
  const classList = combineClass(
    className,
    'r-button',
    `r-button--${type}`, 
    `icon-${iconPosition}`,
    `${plain?'plain': ''}`,
    `${circle?'circle clearMargin': ''}`,
    `${disabled?'disabled': ''}`,
    `${ripple && !disabled?'ripple': ''}`,
    )
  return (
    <button className={classList} {...restProps} disabled={disabled} type={htmlType}>
      {icon === '' || icon === undefined || loading?  null :<Icon className="icon" name={icon} />}
      {loading ?  <Icon className="loading icon" name='loading' color='#fff'/>: null}
      <div className="r-button-content">
        {children}
      </div>
    </button>
  )
}
Button.defaultProps = {
  type: 'default',
  htmlType: 'button',
  plain: false,
  circle: false,
  disabled: false,
  ripple:true,
  loading:false,
  iconPosition: 'left'
}
Button.displayName = 'Button'
export default Button;