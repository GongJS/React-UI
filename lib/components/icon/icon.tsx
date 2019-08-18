import React from 'react';
import combineClass from '../../helpers/combineClass';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
  color?: string
  size?: string
  style?: React.CSSProperties
}

const Icon: React.FC<IconProps> = ({
  className,
  name,
  style,
  size,
  color,
  ...restProps
}) => {
  return (
    <svg 
      className={combineClass('r-icon', className)} 
      style={{...style, height: size, width:size}}
      {...restProps}
    >
      <use xlinkHref={`#icon-${name}`} fill={color}></use>
    </svg>
  )
}
Icon.defaultProps = {
  size: '1.2em',
}
Icon.displayName = 'Icon'
export default Icon;