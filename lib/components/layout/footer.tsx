import React from 'react';
import { combineClass, prefixClass } from '../../helpers/utils';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FunctionComponent<FooterProps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <div className={combineClass(prefixClass('r-layout')('footer'), className)} {...restProps}>
      {children}
    </div>
  )
}

export default Footer;