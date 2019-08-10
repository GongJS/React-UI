import React, { useEffect } from 'react';
import './carousel.scss'
import combineClass from '../../helpers/combineClass';

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: 'fade' | 'zoom'
}

const Carousel: React.FC<CarouselProps> = ({
  className,
  children,
  animation,
  ...restProps
}) => {
  let dotsEle: NodeListOf<HTMLElement>
  let panelsEle: NodeListOf<HTMLElement>
  const handleDotsClick = (event: any) => {
    event.stopPropagation()
    let index = Array.from(dotsEle).indexOf(event.target)
    if (index === -1) {return}
     setDots(index)
     showPage(index, getActiveIndex()) 
  }
  const setDots = (index: number) => {
    dotsEle.forEach(dot => dot.classList.remove('active'))
    dotsEle[index].classList.add('active')
  }
  const pre = () => {
    setDots(getPreIndex())
    showPage(getPreIndex(), getNextIndex()) 
  }
  const next = () => {
    setDots(getNextIndex())
    showPage(getNextIndex(), getPreIndex()) 
  }
  const getActiveIndex = () => {
    return Array.from(dotsEle).indexOf(document.querySelector('.r-carousel .dots .active'))
  }
  const getPreIndex = () => {
    return (getActiveIndex() -1 + dotsEle.length) % dotsEle.length
  }
  const getNextIndex = () => {
    return (getActiveIndex() + 1 ) % dotsEle.length
  }
  const showPage = (toIndex: number, fromIndex:number) => {
     xxx(panelsEle[toIndex], panelsEle[fromIndex], () => {
      panelsEle.forEach(panel => panel.style.zIndex = '0')
      panelsEle[toIndex].style.zIndex = '10'            
    })
  }
  // Todo
  const xxx= (to: HTMLElement, from: HTMLElement, onFinish:() => any) => {
    const css = (node:HTMLElement, styles:{}) => Object.entries(styles)
    .forEach(([key, value]) => {
        node.style[key] = value
    })
    const reset = (node:HTMLElement )=> {
      node.style.opacity = null
      node.style.zIndex = null
      node.style.transition = ''
      node.style.scale = null
      node.style.transform = null
    }  
    if (animation === 'fade') {
      const during = 200
      css(from, {
        opacity: 1,
        transition: `all ${during/1000}s`,
        zIndex: 10
      })
      css(to, {
        opacity: 0,
        transition: `all ${during/1000}s`,
        zIndex: 9
      })

      setTimeout(() => {
        css(from, {
          opacity: 0,
        })
        css(to, {
          opacity: 1,
        })              
      }, 100)

      setTimeout(() => {
        reset(from)
        reset(to)
        onFinish && onFinish()
      }, during)
    }
    if (animation=== 'zoom') {
      const scale = 5
      const during = 1000
      css(from, {
        opacity: 1,
        transform: `scale(1)`,
        transition: `all ${during/1000}s`,
        zIndex: 10
      })
      css(to, {
        zIndex: 9
      })

      setTimeout(() => {
        css(from, {
          opacity: 0,
          transform: `scale(${scale})`
        })             
      }, 100)

      setTimeout(() => {
        reset(from)
        reset(to)
        onFinish && onFinish()
      }, during)
    }
  }
  useEffect(() => {
    dotsEle = document.querySelectorAll('.r-carousel .dots span')
    panelsEle = document.querySelectorAll('.r-carousel .panels div')
  })
  return (
    <div className={combineClass('r-carousel', className, )} {...restProps}>
      <div className="panels">
       {children}
      </div>
      <div className="action">
        <span className="pre" onClick={pre}>上一个</span>
        <span className="next" onClick={next}>下一个</span>
        <div className="dots" onClick={(e) => handleDotsClick(e)}>
          {
            React.Children.map(children, (child, index) => (
              <span className={combineClass(`${ index === 0 ? 'active': ''}`)}></span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

Carousel.displayName = 'Carousel'
Carousel.defaultProps = {
  animation: 'fade'
}
export default Carousel;