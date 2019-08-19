import React from 'react';
import combineClass from '../../helpers/combineClass';
import './grid.scss'

interface Option {
  span: number
  offset?: number
}

interface ColProps {
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

const Col: React.FC<ColProps> = ({
  gutter,
  span,
  offset = 0,
  children,
  className,
  style,
  ...restOptions
}) => {
  const getColClassNames = () => {
    const classNamesArr = [`col-span-${span}`, `col-offset-${offset}`]
    Object.keys(restOptions).forEach(key => {
      if ((restOptions as any)[key]) {
        const { span: optionSpan, offset: optionOffset = 0 } = (restOptions as any)[key]
        classNamesArr.push(`${key}-col-span-${optionSpan}`)
        classNamesArr.push(`${key}-col-offset-${optionOffset}`)
      }
    })
    return classNamesArr.join(' ')
  }
  return (
    <div className={combineClass('r-col', className, `${getColClassNames()}`)} {...restOptions}
      style={{
        paddingLeft: `${gutter! / 2}px`,
        paddingRight: `${gutter! / 2}px`,
        ...style
      }}
    >
      {children}
    </div>
  )
}
Col.displayName = 'Col'
Col.defaultProps = {
  gutter: 0
}
export default Col;