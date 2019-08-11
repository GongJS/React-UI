import React, { useEffect, useState } from 'react';
import combineClass from '../../helpers/combineClass';

interface StickyProps extends React.HTMLAttributes<HTMLDivElement>  {
  distance?: number
 
}

const Sticky: React.FC<StickyProps> = ({
  className,
  style,
  distance,
  children,
  ...restProp
}) => {
  const stickyWrapper = React.createRef<HTMLDivElement>()
  const container = React.createRef<HTMLDivElement>()
  const [top, setTop] = useState()
  const handleScroll = () => {
    let stickyCurrent: HTMLDivElement | null= stickyWrapper.current
    if (stickyCurrent) {
      if (window.scrollY > top - distance!) {
        const {top,bottom,left,right} = stickyCurrent.getBoundingClientRect()
        stickyCurrent.style.width = right - left + 'px'
        stickyCurrent.style.height = bottom - top + 'px'
        container && container.current && (container.current.style.height = stickyCurrent.style.height)
        stickyCurrent.style.left = left + 'px'
        stickyCurrent.style.top = distance + 'px'
        stickyCurrent.style.position = 'fixed'
      } else {
        stickyCurrent.style.position = 'static'
      }  
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    const stickyCurrent = stickyWrapper.current
    if (stickyCurrent) {
      setTop(stickyCurrent.getBoundingClientRect().top)
      handleScroll()
    }
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <div className="r-sticky" ref={container} >
    <div  className={combineClass('r-sticky-wrapper', className)} style={style} ref={stickyWrapper} {...restProp}>
      {children}
    </div>
  </div>
  )
}
Sticky.defaultProps = {
  distance: 0
}
Sticky.displayName = 'Sticky'
export default Sticky;