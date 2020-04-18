import React from 'react';
import { combineClass, prefixClass } from '../../helpers/utils';

type ContentProps = React.HTMLAttributes<HTMLElement>

const Content: React.FunctionComponent<ContentProps> = props => {
  const {className, children, ...restProps} = props;
  return (
    <div className={combineClass(prefixClass('r-layout')('content'), className)} {...restProps}>
      {children}
    </div>
  )
}

export default Content;