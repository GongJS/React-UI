import React from 'react';
import {combineClass, prefixClass} from '../../helpers/utils';

type AsideProps = React.HTMLAttributes<HTMLElement>

const Aside: React.FunctionComponent<AsideProps> = props => {
  const {className, children, ...restProps} = props;
  return (
    <div className={combineClass(prefixClass('r-layout')('aside'), className)} {...restProps}>
      {children}
    </div>
  );
};
Aside.displayName = 'Aside';
export default Aside;