import React from 'react';
import { combineClass, prefixClass } from '../../helpers/utils';

type FooterProps = React.HTMLAttributes<HTMLElement>

const Footer: React.FunctionComponent<FooterProps> = props => {
  const {className, children, ...restProps} = props;
  return (
    <div className={combineClass(prefixClass('r-layout')('footer'), className)} {...restProps}>
      {children}
    </div>
  )
}

export default Footer;