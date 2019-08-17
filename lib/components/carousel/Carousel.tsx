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
  type?: 'fade' | 'slide'
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
    play(index, lastIndex)
  }
  const setActiveDot = (index: number) => {
    if (!endFlag) {
      return
    }
    dotsEle.forEach(dot => dot.classList.remove('active'))
    dotsEle[index].classList.add('active')
  }
  const pre = () => {
    console.log(2222)
    let index = getPreIndex()
    setActiveDot(index)
    play(index, getNextIndex())
    if (autoplay) {
      clearInterval(timer)
      startAutoPlay()
    }
  }
  const next = () => {
    let index = getNextIndex()
    setActiveDot(index)
    play(index, getPreIndex())
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
  const play = (toIndex: number, fromIndex: number) => {
    const onFinsh = () => {
      panelsEle.forEach(panel => panel.style.zIndex = '0')
      panelsEle[toIndex].style.zIndex = '10'
      endFlag = true
    }
    if (type === 'fade') {
      fade(panelsEle[fromIndex], panelsEle[toIndex], onFinsh)
    }
    if (type === 'slide') {
      slide(panelsEle[fromIndex], panelsEle[toIndex], onFinsh)
    }
  }
  // slide动画
  const slide = (fromNode: HTMLElement, toNode: HTMLElement, onFinsh: () => any) => {
    if (!endFlag) {
      return
    }
    endFlag = false
    let width = parseInt(getComputedStyle(fromNode).width!)
    let offsetX = width
    let offset1 = 0
    let offset2 = 0
    let step = 25
    fromNode.style.zIndex = '10'
    toNode.style.zIndex = '10'
    toNode.style.left = width + 'px'
    function fromNodeAnimation() {
      if (offset1 < offsetX) {
        fromNode.style.left = parseInt(getComputedStyle(fromNode).left!) - step + 'px'
        offset1 += step
        requestAnimationFrame(fromNodeAnimation)
      }
    }
    function toNodeAnimation() {
      if (offset2 < offsetX) {
        toNode.style.left = parseInt(getComputedStyle(toNode).left!) - step + 'px'
        offset2 += step
        requestAnimationFrame(toNodeAnimation)
      } else {
        onFinsh()
        fromNode.style.left = '0'
        toNode.style.left = '0'
      }
    }
    fromNodeAnimation()
    toNodeAnimation()
  }
  // fade动画
  const fade = (fromNode: HTMLElement, toNode: HTMLElement, onFinsh: () => any) => {
    if (!endFlag) {
      return
    }
    endFlag = false
    let opacityOffset1 = 1
    let opacityOffset2 = 0
    let step = 0.04
    fromNode.style.zIndex = '10'
    toNode.style.zIndex = '9'
    function fromNodeAnimation() {
      if (opacityOffset1 > 0) {
        opacityOffset1 -= step
        fromNode.style.opacity = opacityOffset1.toString()
        requestAnimationFrame(fromNodeAnimation)
      } else {
        fromNode.style.opacity = '0'
      }
    }
    function toNodeAnimation() {
      if (opacityOffset2 < 1) {
        opacityOffset2 += step
        toNode.style.opacity = opacityOffset2.toString()
        requestAnimationFrame(toNodeAnimation)
      } else {
        toNode.style.opacity = '1'
        onFinsh()
      }
    }
    fromNodeAnimation()
    toNodeAnimation()
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