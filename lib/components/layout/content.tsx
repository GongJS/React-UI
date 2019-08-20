import React from 'react';
import { combineClass, prefixClass } from '../../helpers/utils';

interface ContentProps extends React.HTMLAttributes<HTMLElement> {}

const Content: React.FunctionComponent<ContentProps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <div className={combineClass(prefixClass('r-layout')('content'), className)} {...restProps}>
      {children}
    </div>
  )
}

export default Content;