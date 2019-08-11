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
    let ele: HTMLDivElement | null= stickyWrapper.current
    if (ele) {
      if (window.scrollY > top - distance!) {
        const {top,bottom,left,right} = ele.getBoundingClientRect()
        ele.style.width = right - left + 'px'
        ele.style.height = bottom - top + 'px'
        container && container.current && (container.current.style.height = ele.style.height)
        ele.style.left = left + 'px'
        ele.style.top = distance + 'px'
        ele.style.position = 'fixed'
      } else {
        ele.style.position = 'static'
      }  
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    const ele = stickyWrapper.current
    if (ele) {
      setTop(ele.getBoundingClientRect().top)
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