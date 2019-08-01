import React from 'react';
import Button from './Button'
import combineClass from '../../helpers/combineClass';
import './button_group.scss'

interface ButtonGroupProps {
  className?: string
  style?: React.CSSProperties
  children: React.ReactElement<Button>[]
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  className, style, children
}) => {
  
  return (
    <div className={combineClass('r-button-group', className)} style={style}>
      {children}
    </div>
  )
}
export default ButtonGroup;