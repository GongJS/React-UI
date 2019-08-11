import React, { useEffect } from 'react';
import './carousel.scss'
import combineClass from '../../helpers/combineClass';

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'fade' | 'zoom'
}

const Carousel: React.FC<CarouselProps> = ({
  className,
  children,
  type,
  ...restProps
}) => {
  let dotsEle: NodeListOf<HTMLElement>
  let panelsEle: NodeListOf<HTMLElement>
  let endFlag: boolean = true
  const handleDotsClick = (event: any) => {
    event.stopPropagation()
    let index = Array.from(dotsEle).indexOf(event.target)
    if (index === -1) {return}
    let lastIndex = getActiveIndex()
     setActiveDot(index)
     slide(index, lastIndex) 
  }
  const setActiveDot = (index: number) => {
    if (!endFlag) {
      return
    }
    dotsEle.forEach(dot => dot.classList.remove('active'))
    dotsEle[index].classList.add('active')
  }
  const pre = () => {
    let index = getPreIndex()
    setActiveDot(index)
    slide(index, getNextIndex())
  }
  const next = () => {
    let index = getNextIndex()
    setActiveDot(index)
    slide(index, getPreIndex()) 
  }
  const getActiveIndex = () => {
    let ele: HTMLElement | null = document.querySelector('.r-carousel .dots .active') 
    if (ele) {
      return Array.from(dotsEle).indexOf(ele)
    } else {
      throw Error('没有找到<span class="active"></span>')
    }
     
  }
  const getPreIndex = () => {
    return (getActiveIndex() -1 + dotsEle.length) % dotsEle.length
  }
  const getNextIndex = () => {
    return (getActiveIndex() + 1 ) % dotsEle.length
  }
  const slide = (toIndex: number, fromIndex:number) => {
     animation(panelsEle[toIndex], panelsEle[fromIndex], () => {
      panelsEle.forEach(panel => panel.style.zIndex = '0')
      panelsEle[toIndex].style.zIndex = '10'   
      endFlag = true         
    })
  }
  const animation= (to: HTMLElement, from: HTMLElement, onFinish:() => any) => {
    if (!endFlag) {
      return
    }
    endFlag = false
    const css = (node:HTMLElement, styles:{ [key: string]: string | number }) => Object.entries(styles)
    .forEach(([key, value]) => {
       node.style[key] = value
    })
    const reset = (node:HTMLElement )=> {
      node.style.opacity = ''
      node.style.zIndex = ''
      node.style.transition = ''
      node.style.scale = ''
      node.style.transform = ''
    }  
    if (type === 'fade') {
      const during = 300
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
        reset(from)
        reset(to)
        
        onFinish && onFinish()
      }, during)
    }
    if (type=== 'zoom') {
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
  type: 'fade'
}
export default Carousel;