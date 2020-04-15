import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useImperativeHandle,
} from 'react'
import ReactDOM from 'react-dom'
import { combineClass } from '../../helpers/utils'
import './popover.scss'

interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string | React.ReactNode
  trigger?: 'click' | 'hover'
  position: 'top' | 'left' | 'right' | 'bottom'
  defaultVisible?: boolean
  visible?: boolean
  popClosable?: boolean
  onVisibleChange?: (visible: boolean) => any
  className?: string
  wrapperClassName?: string
  wrapperStyle?: React.CSSProperties
  style?: React.CSSProperties
}

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
  } = props

  const borderRef = React.createRef<HTMLDivElement>()
  const popoverRef = React.createRef<HTMLDivElement>()
  const contentRef = React.createRef<HTMLDivElement>()
  const triggerRef = React.createRef<HTMLDivElement>()
  const [visible, setVisible] = useState(false)

  const addPopoverListeners = () => {
    const borRef: HTMLDivElement | null = borderRef.current
    const popRef: HTMLDivElement | null = popoverRef.current
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
    const borRef: HTMLDivElement | null = borderRef.current
    const popRef: HTMLDivElement | null = popoverRef.current
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
    const triRef = triggerRef.current
    const offsetWidth = triRef && triRef.getBoundingClientRect().width
    const conRef = contentRef.current
    if (triRef && conRef) {
      const {
        height: triHeight,
        width: triWidth,
        top: triTop,
        left: triLeft,
      } = triRef.getBoundingClientRect()
      const {
        height: conHeight,
        width: conWidth,
      } = conRef.getBoundingClientRect()
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
      }
      conRef.style.left = positions[position].left + 'px'
      conRef.style.top = positions[position].top + 'px'
    }
  }

  const onClickDocument = (e: any) => {
    const poRef = popoverRef.current
    const conRef = contentRef.current
    if (poRef && conRef) {
      if (poRef === e.target || poRef.contains(e.target)) {
        return
      }
      if (conRef === e.target || conRef.contains(e.target)) {
        return
      }
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
    const ref: HTMLDivElement | null = triggerRef.current
    if (ref) {
      if (ref.contains(e.target)) {
        visible ? close() : open()
      }
    }
  }
  useImperativeHandle(ref, () => ({
    close: () => {
      close()
    },
  }))
  useLayoutEffect(() => {
    setPosition()
  })

  useEffect(() => {
    visible
      ? document.addEventListener('click', onClickDocument)
      : document.addEventListener('click', onClickDocument)
    if (trigger === 'hover') {
      const conRef: HTMLDivElement | null = contentRef.current
      if (conRef) {
        conRef.addEventListener('mouseenter', open)
        conRef.addEventListener('mouseleave', close)
      }
    }
    onVisibleChange && onVisibleChange(visible)
    addPopoverListeners()
    return () => {
      removePopoverListeners()
    }
    // eslint-disable-next-line
  }, [visible])

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
  )

  return (
    <div
      ref={borderRef}
      className={combineClass(
        trigger === 'hover'
          ? `r-popover-hover-${position}`
          : `r-popover-click-${position}`,
        wrapperClassName,
      )}
      style={wrapperStyle}
    >
      <div className="r-popover" ref={popoverRef}>
        {visible ? ReactDOM.createPortal(popoverContent, document.body) : null}
        <div ref={triggerRef}>{children}</div>
      </div>
    </div>
  )
}

Popover.displayName = 'Popover'
export default React.forwardRef(Popover)
