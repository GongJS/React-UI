import React from 'react';
import combineClass from '../../helpers/combineClass';

interface IProps extends React.SVGAttributes<SVGElement> {
  name: string
  color?: string
  width?: string
  height?: string
}

const Icon: React.FC<IProps> = ({
  className,
  name,
  width,
  height,
  color,
  ...restProps
}) => {
  return (
    <svg 
      className={combineClass('r-icon', className)} 
      style={{width,height }}
      {...restProps}
    >
      <use xlinkHref={`#icon-${name}`} fill={color}></use>
    </svg>
  )
}
Icon.defaultProps = {
  color: '#3963bc',
  width: '1.2em',
  height: '1.2em'
}
export default Icon;