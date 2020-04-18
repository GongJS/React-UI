import React from 'react';
import { combineClass, prefixClass } from '../../helpers/utils';;

type HeaderProps = React.HTMLAttributes<HTMLElement>

const Header: React.FunctionComponent<HeaderProps> = props => {
  const {className, children, ...restProps} = props;
  return (
    <div className={combineClass( prefixClass('r-layout')('header'), className)} {...restProps}>
      {children}
    </div>
  )
}

export default Header;