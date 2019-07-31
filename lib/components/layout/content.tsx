import React from 'react';
import PRC from '../../helpers/prefixClass';
import combineClass from '../../helpers/combineClass';

interface IProps extends React.HTMLAttributes<HTMLElement> {}

const prefix = PRC('r-layout');

const Content: React.FunctionComponent<IProps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <div className={combineClass(prefix('content'), className)} {...restProps}>
      {children}
    </div>
  )
}

export default Content;