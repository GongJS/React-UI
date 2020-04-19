import React, {useEffect, useState} from 'react';
import {combineClass} from '../../helpers/utils';

interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: string
  onMenuItemClick?: () => any
  uniqueKey?: string
  selectedKey?: string
  currentTarget?: EventTarget & Element
  expandKeys?: string[]
  handleSelectedKey?: (event: React.MouseEvent, key: string) => any
  handleExpandKeys?: (key: string) => any
  hideChildSubMenu?: (key: string) => any
}

const MenuItem: React.FC<MenuItemProps> = props => {
  const {
    mode,
    onMenuItemClick,
    hideChildSubMenu,
    className,
    children,
    uniqueKey,
    selectedKey,
    currentTarget,
    handleSelectedKey,
    handleExpandKeys,
    expandKeys,
    ...restProps
  } = props;
  const menuItem = React.createRef<HTMLDivElement>();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
    if (
      (menuItem &&
        menuItem.current &&
        menuItem.current.contains(currentTarget!)) ||
      selectedKey === uniqueKey
    ) {
      setActive(true);
    }
  }, [menuItem, currentTarget, selectedKey, uniqueKey]);

  return (
    <div
      ref={menuItem}
      className={combineClass(
        'r-menu-item',
        `${active ? 'active' : ''}`,
        `${mode === 'vertical' ? 'vertical' : ''}`,
        className,
      )}
      onClick={e => {
        onMenuItemClick && onMenuItemClick();
        handleSelectedKey!(e, uniqueKey!);
      }}
      {...restProps}
    >
      <li>{children}</li>
    </div>
  );
};

MenuItem.displayName = 'MenuItem';
export default MenuItem;
