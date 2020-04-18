import React, {useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';
import Icon from '../icon';
import {combineClass} from '../../helpers/utils';
import './collapse.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  icon: string
  disabled: boolean
  uniqueKey: string
  selectedKey: string
  expandKeys: string[]
  defaultSelectedKeys: string[]
  handleSelectedKey: (
    key: string,
    event?: React.MouseEvent<HTMLElement>,
  ) => any
}

type CollapseItemProps = Partial<Props> & { title: string }

const CollapseItem: React.FC<CollapseItemProps> = props => {
  const {
    className,
    icon,
    children,
    title,
    uniqueKey,
    expandKeys,
    selectedKey,
    disabled,
    defaultSelectedKeys,
    handleSelectedKey,
    ...restProps
  } = props;

  const childRef = React.createRef<HTMLDivElement>();
  let height: string;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (disabled) {
      return;
    }
    handleSelectedKey!(uniqueKey!, event);
  };

  useEffect(() => {
    if (!disabled && defaultSelectedKeys!.indexOf(uniqueKey!) > -1) {
      handleSelectedKey!(uniqueKey!);
    }
  }, []);

  return (
    <div
      className={combineClass(
        'r-collapseItem',
        `${disabled ? 'disable' : ''}`,
        className,
      )}
      {...restProps}
    >
      <div onClick={handleClick} className="title">
        <Icon
          name={icon!}
          color="#2f4e8c"
          style={{marginRight: '5px'}}
          className={expandKeys!.indexOf(uniqueKey!) > -1 ? 'open' : 'close'}
        />
        {title}
      </div>
      <CSSTransition
        in={expandKeys!.indexOf(uniqueKey!) > -1}
        timeout={300}
        unmountOnExit
        onEnter={(el: HTMLDivElement) => {
          const childCurrent: HTMLDivElement | null = childRef.current;
          if (childCurrent) {
            const {top, bottom} = childCurrent.getBoundingClientRect();
            height = bottom - top + 'px';
            el.style.opacity = '0';
            el.style.height = '0';
          }
        }}
        onEntering={(el: HTMLDivElement) => {
          el.style.height = height;
          el.style.opacity = '1';
          el.style.transition = 'all 0.3s ease';
        }}
        onExit={(el: HTMLDivElement) => {
          el.style.height = height;
          el.style.opacity = '1';
        }}
        onExiting={(el: HTMLDivElement) => {
          el.style.height = '0';
          el.style.paddingBottom = '0';
          el.style.opacity = '0';
          el.style.transition = 'all 0.3s ease';
        }}
      >
        <div ref={childRef} className="content">
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

CollapseItem.displayName = 'CollapseItem';
export default CollapseItem;
