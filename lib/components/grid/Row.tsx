import React from 'react'
import { combineClass } from '../../helpers/utils'
import './grid.scss'

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: number
  className?: string
  style?: React.CSSProperties
}

interface Option {
  span: number
  offset?: number
}

interface ChildProps {
  gutter?: number
  span?: number
  offset?: number
  sm?: Option
  md?: Option
  lg?: Option
  xl?: Option
  className?: string
  style?: React.CSSProperties
}

const Row: React.FC<RowProps> = ({
  gutter,
  className,
  style,
  children,
  ...restProps
}) => {
  const renderChildren = (): Array<React.ReactElement<ChildProps>> => {
    //@ts-ignore
    return React.Children.map(
      children,
      (child: React.ReactElement<ChildProps>) => {
        return React.cloneElement(child, {
          gutter,
        })
      },
    )
  }
  return (
    <div
      className={combineClass('r-row', className)}
      {...restProps}
      style={{
        marginLeft: `${-gutter! / 2}px`,
        marginRight: `${-gutter! / 2}px`,
        ...style,
      }}
    >
      {renderChildren()}
    </div>
  )
}
Row.displayName = 'Row'
Row.defaultProps = {
  gutter: 0,
}
export default Row
