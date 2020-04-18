import React, {useEffect} from 'react';
import {combineClass} from '../../helpers/utils';
import './icon.scss';

interface Props extends React.SVGAttributes<SVGElement> {
  color: string
  size: string
  style: React.CSSProperties
}

type IconProps = Partial<Props> & { name: string }

const Icon: React.FC<IconProps> = props => {
  const {className, name, style, size, color, ...restProps} = props;

  // 引入icon图标库
  useEffect(() => {
    let script: HTMLScriptElement | null = document.querySelector(
      '#r-icon-script',
    );
    if (!script) {
      script = document.createElement('script');
      script.type = 'text/javascript';
      script.id = 'r-icon-script';
      script.src = '//at.alicdn.com/t/font_732431_ogb8s1grg7.js';
      document.querySelector('body')!.appendChild(script);
    }
  }, []);

  return <svg
    className={combineClass('r-icon', className)}
    style={{...style, height: size, width: size}}
    {...restProps}
  >
    <use xlinkHref={`#icon-${name}`} fill={color}/>
  </svg>;
};

Icon.displayName = 'Icon';
export default Icon;
