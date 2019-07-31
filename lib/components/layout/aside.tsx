import React from 'react';
import PRC from '../../helpers/prefixClass';
import combineClass from '../../helpers/combineClass';

interface IProps extends React.HTMLAttributes<HTMLElement> {}

const prefix = PRC('r-layout');

const Aside: React.FunctionComponent<IProps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <div className={combineClass(prefix('aside'), className)} {...restProps}>
      {children}
    </div>
  )
}

export default Aside;