import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useImperativeHandle, MouseEventHandler,
} from 'react';
import ReactDOM from 'react-dom';
import {combineClass} from '../../helpers/utils';
import './popover.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  trigger: 'click' | 'hover'
  defaultVisible: boolean
  popClosable: boolean
  onVisibleChange: (visible: boolean) => any
  className: string
  wrapperClassName: string
  wrapperStyle: React.CSSProperties
  style: React.CSSProperties
}

type PopoverProps =
  Partial<Props>
  & { content: string | React.ReactNode, position: 'top' | 'left' | 'right' | 'bottom' }
const Popover: React.FC<PopoverProps> = (props, ref) => {
  const {
    content,
    trigger,
    position,
    onVisibleChange,
    children,
    className,
    wrapperClassName,
    wrapperStyle,
    ...restProps
  } = props;

  const popoverRef = React.createRef<HTMLDivElement>();
  const contentRef = React.createRef<HTMLDivElement>();
  const [visible, setVisible] = useState(false);

  const addPopoverListeners = () => {
    const popRef: HTMLDivElement | null = popoverRef.current;
    if (popRef) {
      if (trigger === 'click') {
        popRef.addEventListener('click', onClickPop);
      } else {
        popRef.addEventListener('mouseenter', open);
        popRef.addEventListener('mouseleave', close);
      }
    }
  };


  const setPosition = () => {
    const triRef = popoverRef.current;
    const offsetWidth = triRef && triRef.getBoundingClientRect().width;
    const conRef = contentRef.current;
    if (triRef && conRef) {
      const {
        height: triHeight,
        width: triWidth,
        top: triTop,
        left: triLeft,
      } = triRef.getBoundingClientRect();
      const {
        height: conHeight,
        width: conWidth,
      } = conRef.getBoundingClientRect();
      const positions = {
        top: {
          top: triTop + window.scrollY,
          left: triLeft + window.scrollX - 0.5 * conWidth + offsetWidth! / 2,
        },
        bottom: {
          top: triTop + triHeight + window.scrollY,
          left: triLeft + window.scrollX - 0.5 * conWidth + offsetWidth! / 2,
        },
        left: {
          top: triTop + window.scrollY + (triHeight - conHeight) / 2,
          left: triLeft + window.scrollX,
        },
        right: {
          top: triTop + window.scrollY + (triHeight - conHeight) / 2,
          left: triLeft + window.scrollX + triWidth,
        },
      };
      conRef.style.left = positions[position].left + 'px';
      conRef.style.top = positions[position].top + 'px';
    }
  };

  const onClickDocument = (e: MouseEvent) => {
    const poRef = popoverRef.current;
    const conRef = contentRef.current;
    if (poRef && conRef) {
      if (poRef === e.target || poRef.contains((e.target) as Node)) {
        return;
      }
      if (conRef === e.target || conRef.contains((e.target) as Node)) {
        return;
      }
      close();
    }
  };

  const open = () => {
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  const onClickPop: (this: HTMLDivElement, ev: MouseEvent) => any = (e) => {
    const ref: HTMLDivElement | null = popoverRef.current;
    if (ref && ref.contains((e.target) as Node)) {
      visible ? close() : open();
    }
  };
  useImperativeHandle(ref, () => ({
    close: () => {
      close();
    },
  }));
  useLayoutEffect(() => {
    setPosition();
  });

  useEffect(() => {
    if (trigger !== 'click') {
      const conRef: HTMLDivElement | null = contentRef.current;
      const popRef: HTMLDivElement | null = popoverRef.current;
      if (conRef && popRef) {
        conRef.addEventListener('mouseenter', open);
        conRef.addEventListener('mouseleave', close);
        popRef.addEventListener('mouseenter', open);
      }
    } else {
      visible && document.addEventListener('click', onClickDocument);
    }
    onVisibleChange && onVisibleChange(visible);
    addPopoverListeners();
    return () => {
      removePopoverListeners();
    };
  }, [visible]);

  const removePopoverListeners = () => {
    const popRef: HTMLDivElement | null = popoverRef.current;
    const conRef: HTMLDivElement | null = contentRef.current;
    if (popRef && conRef) {
      if (trigger === 'click') {
        popRef.removeEventListener('click', onClickPop);
      } else {
        popRef.removeEventListener('mouseenter', open);
        conRef.removeEventListener('mouseenter', open);
        conRef.removeEventListener('mouseleave', close);
      }
    }
  };

  const popoverContent = (
    <div
      ref={contentRef}
      className={combineClass(
        'r-popover-content-wrapper',
        `position-${position}`,
        className,
      )}
      {...restProps}
    >
      {content}
    </div>
  );

  return (
    <div
      ref={popoverRef}
      className={combineClass(
        'r-popover',
        trigger === 'hover'
          ? `r-popover-hover-${position}`
          : `r-popover-click-${position}`,
        wrapperClassName,
      )}
      style={wrapperStyle}
    >
      {visible ? ReactDOM.createPortal(popoverContent, document.body) : null}
      {children}
    </div>
  );
};

Popover.displayName = 'Popover';
export default React.forwardRef(Popover);
