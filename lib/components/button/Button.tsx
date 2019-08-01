import React from 'react';
import Icon from '../icon/Icon'
import combineClass from '../../helpers/combineClass';
import './button.scss'

interface ButtonProps {
  className?: string
  type?: string
  htmlType?: 'button' | 'submit' | 'reset'
  plain?: boolean
  circle?: boolean
  disabled?: boolean
  ripple?:boolean
  icon?:string | undefined
  loading?:boolean
  iconPosition?: string
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
  ...restProps
}) => {
  const classList = combineClass(
    className,
    'r-button',
    `r-button--${type}`, 
    `icon-${iconPosition}`,
    `${plain?'plain': ''}`,
    `${circle?'circle': ''}`,
    `${disabled?'disabled': ''}`,
    `${ripple?'ripple': ''}`,
    )
  return (
    <button className={classList} {...restProps}>
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
  plain: false,
  circle: false,
  disabled: false,
  ripple:false,
  loading:false,
  iconPosition: 'left'
}
export default Button;