import React, { useEffect, useLayoutEffect } from 'react';
import './carousel.scss'
import combineClass from '../../helpers/combineClass';
import Icon from '../icon/Icon'

// 唯一ID
let A_Z = "";
for (let i = 65; i < 91; i++) {
  A_Z += String.fromCharCode(i) + ",";
}
let A_Z_Arr = A_Z.split(',')
function getLetter(n: number) {
  let letterArr = []
  for (let i = 0; i < n; i++) {
    let val = Math.floor(Math.random() * 26);
    if (letterArr.includes(val.toString()) === false) {
      letterArr.push(A_Z_Arr[val])
    } else {
      i--;
    }
  }
  return letterArr.join('')
}

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'fade' | 'zoom'
  autoplay?: boolean
  interval?: number
  height?: string
}

const Carousel: React.FC<CarouselProps> = ({
  className,
  children,
  type,
  height,
  autoplay,
  interval,
  ...restProps
}) => {

  let dotsEle: NodeListOf<HTMLElement>
  let panelsEle: NodeListOf<HTMLElement>
  let endFlag: boolean = true
  let timer: number
  const id = getLetter(4)
  const panelsRef = React.createRef<HTMLDivElement>()
  const handleDotsClick = (event: any) => {
    event.stopPropagation()
    let index = Array.from(dotsEle).indexOf(event.target)
    if (index === -1) { return }
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
    if (autoplay) {
      clearInterval(timer)
      startAutoPlay()
    }
  }
  const next = () => {
    let index = getNextIndex()
    setActiveDot(index)
    slide(index, getPreIndex())
    if (autoplay) {
      clearInterval(timer)
      startAutoPlay()
    }
  }
  const getActiveIndex = () => {
    let ele: HTMLElement | null = document.querySelector(`.r-carousel-${id} .dots .active`)
    if (ele) {
      return Array.from(dotsEle).indexOf(ele)
    } else {
      throw Error('没有找到<span class="active"></span>')
    }
  }
  const getPreIndex = () => {
    return (getActiveIndex() - 1 + dotsEle.length) % dotsEle.length
  }
  const getNextIndex = () => {
    return (getActiveIndex() + 1) % dotsEle.length
  }
  const startAutoPlay = () => {
    timer = setInterval(() => {
      next()
    }, interval)
  }
  const slide = (toIndex: number, fromIndex: number) => {
    animation(panelsEle[toIndex], panelsEle[fromIndex], () => {
      panelsEle.forEach(panel => panel.style.zIndex = '0')
      panelsEle[toIndex].style.zIndex = '10'
      endFlag = true
    })
  }
  const animation = (to: HTMLElement, from: HTMLElement, onFinish: () => any) => {
    if (!endFlag) {
      return
    }
    endFlag = false
    const css = (node: HTMLElement, styles: { [key: string]: string | number }) => Object.entries(styles)
      .forEach(([key, value]) => {
        node.style[key] = value
      })
    const reset = (node: HTMLElement) => {
      node.style.opacity = ''
      node.style.zIndex = ''
      node.style.transition = ''
      node.style.scale = ''
      node.style.transform = ''
    }

    // fade动画效果
    if (type === 'fade') {
      const during = 500
      css(from, {
        opacity: 1,
        transition: `all ${during / 1000}s`,
        zIndex: 10
      })
      css(to, {
        opacity: 0,
        transition: `all ${during / 1000}s`,
        zIndex: 9
      })
      setTimeout(() => {
        css(from, {
          opacity: 0,
          transition: `all ${during/1000}s`,
        })
        css(to, {
          opacity: 1,
          transition: `all ${during/1000}s`,
        })              
      }, 100)
      setTimeout(() => {
        reset(from)
        reset(to)
        onFinish && onFinish()
      }, during)
    }

    // zoom动画效果
    if (type === 'zoom') {
      const scale = 5
      const during = 1000
      css(from, {
        opacity: 1,
        transform: `scale(1)`,
        transition: `all ${during / 1000}s`,
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
    dotsEle = document.querySelectorAll(`.r-carousel-${id} .dots span`)
    panelsEle = document.querySelectorAll(`.r-carousel-${id} .panels div`)
    if (autoplay) {
      startAutoPlay()
    }
    return () => clearInterval(timer)
  })
  useLayoutEffect(() => {
    const ref = panelsRef
    if (ref && ref.current && height) {
      ref.current.style.height = height
    }
  })
  return (
    <div className={combineClass('r-carousel', `r-carousel-${id}`, className)} {...restProps}>
      <div ref={panelsRef} className="panels">
        {children}
        <button className="arrow pre" onClick={pre}><Icon name="back" color="#fff" /></button>
        <button className="arrow next" onClick={next}><Icon name="right" color="#fff" /></button>
      </div>
      <div className="action">
        <div className="dots" onClick={(e) => handleDotsClick(e)}>
          {
            React.Children.map(children, (child, index) => (
              <span className={combineClass(`${index === 0 ? 'active' : ''}`)}></span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

Carousel.displayName = 'Carousel'
Carousel.defaultProps = {
  type: 'fade',
  autoplay: true,
  interval: 3000
}
export default Carousel;