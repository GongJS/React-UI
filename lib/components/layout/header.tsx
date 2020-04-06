import React from 'react';
import { combineClass, prefixClass } from '../../helpers/utils';;

type HeaderProps = React.HTMLAttributes<HTMLElement>

const Header: React.FunctionComponent<HeaderProps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <div className={combineClass( prefixClass('r-layout')('header'), className)} {...restProps}>
      {children}
    </div>
  )
}

export default Header;