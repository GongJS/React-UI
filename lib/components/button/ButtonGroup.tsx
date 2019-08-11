import React from 'react';
import Button from './Button'
import combineClass from '../../helpers/combineClass';
import './button_group.scss'

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement>{
  className?: string
  children: React.ReactElement<Button>[]
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  className, children, ...restProps
}) => {
  
  return (
    <div className={combineClass('r-button-group', className)} {...restProps}>
      {children}
    </div>
  )
}
export default ButtonGroup;