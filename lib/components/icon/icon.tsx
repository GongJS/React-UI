import React, { useEffect } from 'react';
import { combineClass } from '../../helpers/utils';

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
  useEffect(() => {
    let script:HTMLScriptElement | null= document.querySelector('#r-icon-script');
    if (script) {
      return
    }
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'r-icon-script';
    script.src = '//at.alicdn.com/t/font_732431_yq4l3hoi1wi.js';
    document.querySelector('body')!.appendChild(script);
  })
  return (
    <svg
      className={combineClass('r-icon', className)}
      style={{ ...style, height: size, width: size }}
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