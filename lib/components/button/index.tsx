import React from 'react'
import Icon from '../icon'
import { combineClass } from '../../helpers/utils'
import './button.scss'

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  type?:
    | 'primary'
    | 'success'
    | 'reverse'
    | 'danger'
    | 'default'
    | 'plain'
    | undefined
  htmlType?: 'button' | 'submit' | 'reset'
  plain?: boolean
  circle?: boolean
  disabled?: boolean
  ripple?: boolean
  icon?: string
  loading?: boolean
  iconPosition?: string
}

const Button: React.FC<ButtonProps> = props => {
  const {
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
  } = props

  const classList = combineClass(
    className,
    'r-button',
    `r-button--${type}`,
    `icon-${iconPosition}`,
    `${plain ? 'plain' : ''}`,
    `${circle ? 'circle clearMargin' : ''}`,
    `${disabled ? 'disabled' : ''}`,
    `${ripple && !disabled ? 'ripple' : ''}`,
  )

  return (
    <button
      className={classList}
      {...restProps}
      disabled={disabled}
      type={htmlType}
    >
      {icon === '' || icon === undefined || loading ? null : (
        <Icon className="icon" name={icon} />
      )}
      {loading ? (
        <Icon className="loading icon" name="loading" color="#fff" />
      ) : null}
      <div className="r-button-content">{children}</div>
    </button>
  )
}

Button.defaultProps = {
  type: 'default',
  htmlType: 'button',
  plain: false,
  circle: false,
  disabled: false,
  ripple: true,
  loading: false,
  iconPosition: 'left',
}
Button.displayName = 'Button'
export default Button
