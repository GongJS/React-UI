import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import './popover.scss';
import combineClass from '../../helpers/combineClass';

interface PopoverProps {
  content: string | React.ReactNode
  trigger?: 'click' | 'hover'
  position?: 'top' | 'left' | 'right' | 'bottom'
  defaultVisible?: boolean
  visible?: boolean
  popClosable?: boolean
  onVisibleChange?: (visible: boolean) => any
  className?: string
  wrapperClassName?: string,
  wrapperStyle?: React.CSSProperties,
  style?: React.CSSProperties
}

const Popover: React.FC<PopoverProps> = ({
  content,
  trigger,
  position,
  onVisibleChange,
  children,
  className,
  style,
  wrapperClassName,
  wrapperStyle
}) => {
  const borderRef = React.createRef<HTMLDivElement>()
  const popoverRef = React.createRef<HTMLDivElement>()
  const contentRef = React.createRef<HTMLDivElement>()
  const triggerRef = React.createRef<HTMLDivElement>()
  const [visible, setVisible] = useState(false)
  const addPopoverListeners = () => {
    let borRef: HTMLDivElement | null = borderRef.current
    let popRef: HTMLDivElement | null = popoverRef.current
    if (borRef && popRef) {
      if (trigger === 'click') {
        popRef.addEventListener('click', onClick)
      } else {
        borRef.addEventListener('mouseenter', open)
        borRef.addEventListener('mouseleave', close)
      }
    }
  }
  const removePopoverListeners = () => {
    let borRef: HTMLDivElement | null = borderRef.current
    let popRef: HTMLDivElement | null = popoverRef.current
    if (borRef && popRef) {
      if (trigger === 'click') {
        popRef.removeEventListener('click', onClick)
      } else {
        borRef.removeEventListener('mouseenter', open)
        borRef.removeEventListener('mouseleave', close)
      }
    }
  }
  const setPosition = () => {
    let triRef = triggerRef.current
    let conRef = contentRef.current
    if (triRef && conRef) {
      const { width, height, top, left } = triRef.getBoundingClientRect()
      const { height: height2 } = conRef.getBoundingClientRect()
      let positions = {
        top: { top: top + window.scrollY, left: left + window.scrollX, },
        bottom: { top: top + height + window.scrollY, left: left + window.scrollX },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX + width
        },
      }
      conRef.style.left = positions[position!].left + 'px'
      conRef.style.top = positions[position!].top + 'px'
    }
  }
  const onClickDocument = (e: any) => {
    let poRef = popoverRef.current
    let conRef = contentRef.current
    if (poRef && conRef) {
      if (poRef === e.target || poRef.contains(e.target)) { return }
      if (conRef === e.target || conRef.contains(e.target)) { return }
      close()
    }
  }
  const open = () => {
    setVisible(true)
  }
  const close = () => {
    setVisible(false)
  }
  const onClick = (e: any) => {
    let ref: HTMLDivElement | null = triggerRef.current
    if (ref) {
      if (ref.contains(e.target)) {
        visible ? close() : open()
      }
    }
  }
  useEffect(() => {
    if (trigger === 'hover') {
      const conRef: HTMLDivElement | null = contentRef.current
      if (conRef) {
        conRef.addEventListener('mouseenter', open)
        conRef.addEventListener('mouseleave', close)
      }
    }
    onVisibleChange && onVisibleChange(visible)
    setPosition()
    visible ? document.addEventListener('click', onClickDocument) : document.addEventListener('click', onClickDocument)
    addPopoverListeners()
    return () => {
      removePopoverListeners()
    }
  }, [visible])
  const popoverContent = <div ref={contentRef} className={combineClass("content-wrapper", `position-${position}`, className)} style={style}>
    {content}
  </div>
  return (
    <div ref={borderRef} className={combineClass(trigger === 'hover' ? `r-popover-hover-${position}` : `r-popover-click-${position}`, wrapperClassName)} style={wrapperStyle}>
      <div className="r-popover" ref={popoverRef}>
        {
          visible ?
            ReactDOM.createPortal(
              popoverContent, document.body
            )
            : null
        }
        <div ref={triggerRef}>
          {children}
        </div>
      </div>
    </div>
  )
}
Popover.defaultProps = {
  trigger: 'hover',
  position: 'top'
}
Popover.displayName = 'Popover'
export default Popover;