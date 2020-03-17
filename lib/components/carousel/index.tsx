import React, { useEffect, useLayoutEffect } from 'react'
import { combineClass, uniqueId } from '../../helpers/utils'
import Icon from '../icon'
import { slide, fade } from './animation'
import './carousel.scss'

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
  let direction: string
  const id = uniqueId(4)
  const panelsRef = React.createRef<HTMLDivElement>()

  // 点击小点点切换
  const handleDotsClick = (event: any) => {
    event.stopPropagation()
    let index = Array.from(dotsEle).indexOf(event.target)
    if (index === -1) {
      return
    }
    let lastIndex = getActiveIndex()
    setActiveDot(index)
    play(index, lastIndex)
  }

  // 激活选中的小点点样式
  const setActiveDot = (index: number) => {
    if (endFlag) {
      dotsEle.forEach(dot => dot.classList.remove('active'))
      dotsEle[index].classList.add('active')
    }
  }

  // 上一页
  const pre = () => {
    const index = getPreIndex()
    direction = 'left'
    setActiveDot(index)
    play(index, getNextIndex())
    if (autoplay) {
      clearInterval(timer)
      startAutoPlay()
    }
  }

  // 下一页
  const next = () => {
    const index = getNextIndex()
    direction = 'right'
    setActiveDot(index)
    play(index, getPreIndex())
    if (autoplay) {
      clearInterval(timer)
      startAutoPlay()
    }
  }

  // 获取当前轮播页索引
  const getActiveIndex = () => {
    let ele: HTMLElement | null = document.querySelector(
      `.r-carousel-${id} .dots .active`,
    )
    if (ele) {
      return Array.from(dotsEle).indexOf(ele)
    } else {
      throw Error('没有找到<span class="active"></span>')
    }
  }

  // 上一页轮播页索引
  const getPreIndex = () => {
    return (getActiveIndex() - 1 + dotsEle.length) % dotsEle.length
  }

  // 下一页轮播页索引
  const getNextIndex = () => {
    return (getActiveIndex() + 1) % dotsEle.length
  }

  // 开启自动轮播
  const startAutoPlay = () => {
    timer = setInterval(() => {
      next()
    }, interval)
  }

  // 轮播
  const play = (toIndex: number, fromIndex: number) => {
    if (!endFlag) {
      return
    }
    endFlag = false
    const onFinsh = () => {
      panelsEle.forEach(panel => (panel.style.zIndex = '0'))
      panelsEle[toIndex].style.zIndex = '10'
      endFlag = true
    }
    if (type === 'slide') {
      slide(panelsEle[fromIndex], panelsEle[toIndex], onFinsh, direction)
    }
    if (type === 'fade') {
      fade(panelsEle[fromIndex], panelsEle[toIndex], onFinsh)
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
    <div
      className={combineClass('r-carousel', `r-carousel-${id}`, className)}
      {...restProps}
    >
      <div ref={panelsRef} className="panels">
        {children}
        <button className="arrow pre" onClick={pre}>
          <Icon name="back" color="#fff" />
        </button>
        <button className="arrow next" onClick={next}>
          <Icon name="right" color="#fff" />
        </button>
      </div>
      <div className="action">
        <div className="dots" onClick={e => handleDotsClick(e)}>
          {React.Children.map(children, (child, index) => (
            <span
              className={combineClass(`${index === 0 ? 'active' : ''}`)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  )
}

Carousel.displayName = 'Carousel'
Carousel.defaultProps = {
  type: 'fade',
  autoplay: true,
  interval: 3000,
}
export default Carousel
