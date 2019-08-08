import React from 'react';
import Button from './Button'
import combineClass from '../../helpers/combineClass';
import './button_group.scss'

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement>{
  className?: string
  children: React.ReactElement<Button>[]
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  className, children
}) => {
  
  return (
    <div className={combineClass('r-button-group', className)}>
      {children}
    </div>
  )
}
export default ButtonGroup;