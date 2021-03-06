import React from 'react'
import Button from './'
import { combineClass } from '../../helpers/utils'
import './button_group.scss'

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactElement[]
}

const ButtonGroup: React.SFC<ButtonGroupProps> = props => {
  const {className,children,...restProps} = props
  children.forEach(item => {
    if (item.type !== Button) {
      console.warn('children只接受Button组件')
    }
  })
  return (
    <div className={combineClass('r-button-group', className)} {...restProps}>
      {children}
    </div>
  )
}

ButtonGroup.displayName = 'ButtonGroup'
export default ButtonGroup
