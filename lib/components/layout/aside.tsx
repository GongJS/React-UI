import React from 'react';
import { combineClass, prefixClass } from '../../helpers/utils';

interface AsideProps extends React.HTMLAttributes<HTMLElement> {}

const Aside: React.FunctionComponent<AsideProps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <div className={combineClass(prefixClass('r-layout')('aside'), className)} {...restProps}>
      {children}
    </div>
  )
}
Aside.displayName = 'Aside'
export default Aside;