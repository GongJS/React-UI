import React from 'react';
import combineClass from '../../helpers/combineClass';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
  color?: string
  width?: string
  height?: string
  style?: React.CSSProperties
}

const Icon: React.FC<IconProps> = ({
  className,
  name,
  style,
  width,
  height,
  color,
  ...restProps
}) => {
  return (
    <svg 
      className={combineClass('r-icon', className)} 
      style={{...style, height, width}}
      {...restProps}
    >
      <use xlinkHref={`#icon-${name}`} fill={color}></use>
    </svg>
  )
}
Icon.defaultProps = {
  width: '1.2em',
  height: '1.2em'
}
Icon.displayName = 'Icon'
export default Icon;