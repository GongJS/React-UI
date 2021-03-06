import React from 'react';
import {combineClass} from '../../helpers/utils';
import './grid.scss';

interface Option {
  span: number
  offset?: number
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  gutter: number
  span: number
  offset: number
  sm: Option | number
  md: Option | number
  lg: Option | number
  xl: Option | number
  className: string
  style: React.CSSProperties
}

type ColProps = Partial<Props>

const Col: React.FC<ColProps> = props => {
  const {
    gutter,
    span,
    offset = 0,
    children,
    className,
    style,
    ...restOptions
  } = props;

  const getColClassNames = () => {
    const classNamesArr = [];
    span && classNamesArr.push(`col-span-${span}`);
    offset && classNamesArr.push(`col-offset-${offset}`);
    Object.entries(restOptions)
      .filter(v => v[1])
      .forEach(v => {
        typeof v[1] === 'number'
          ? classNamesArr.push(`${v[0]}-col-span-${v[1]}`)
          : classNamesArr.push(`${v[0]}-col-span-${v[1].span}`);
        v[1].offset && classNamesArr.push(`${v[0]}-col-offset-${v[1].offset}`);
      });
    return classNamesArr.join(' ');
  };

  return (
    <div
      className={combineClass('r-col', className, `${getColClassNames()}`)}
      style={{
        paddingLeft: `${gutter! / 2}px`,
        paddingRight: `${gutter! / 2}px`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

Col.defaultProps = {
  gutter: 0,
};
Col.displayName = 'Col';
export default Col;
