import React, { useEffect, useState, useLayoutEffect } from 'react'
import { combineClass, checkClient } from '../../helpers/utils'
import Icon from '../icon'
import './slide.scss'

interface Img {
  url?: string
  width: number
  height: number
}

interface SlideProps {
  list?: Img[]
  visible?: boolean
  defaultIndex?: string
  onClose?: () => any
}

const Slide: React.FC<SlideProps> = props => {
  const { list, visible, onClose, defaultIndex } = props

  const wrapRef = React.createRef<HTMLDivElement>()
  const outerRef = React.createRef<HTMLUListElement>()
  let startTime: number
  let startX: number
  let startY: number
  let offsetX: number
  let _offsetX: number
  let _offsetY: number
  let _offsetEndX: number
  let _offsetEndY: number
  let oneTouch = false // 是否触摸
  let joinDbClickScale: boolean // 是否双击
  let joinPinchScale = false // 是否双指操作状态
  let pinchStart: TouchList // 双指状态第一组的两个点
  let pinchScaleEnd: number // 最后一次缩放的值
  let pinchScale: number // 缩放比例
  let scaleW: number // 屏幕宽度 + 图片间距
  const scaleMax = 2 // 最大放大比例
  const [radio, setRadio] = useState<number | undefined>() // 屏幕宽高比
  const [idx, setIdx] = useState(() => {
    if (defaultIndex) {
      return parseInt(defaultIndex)
    } else {
      return 0
    }
  })

  // 初始化
  const init = () => {
    if (outerRef.current) {
      const lis = outerRef.current.getElementsByTagName('li')
      const len = lis.length
      const cidx: number = idx as number
      for (let i = 0; i < len; i++) {
        lis[i].style.width = window.innerWidth + 'px'
        lis[i].style.webkitTransform =
          'translate3d(' + (i - cidx) * scaleW + 'px, 0, 0)'
      }
    }
  }
  // 根据勾股定理得到缩放比例
  const getDistance = (p1: Touch, p2: Touch): any => {
    const x = p2.pageX - p1.pageX,
      y = p2.pageY - p1.pageY
    return Math.sqrt(x * x + y * y).toFixed(2)
  }
  // 切换图片
  const goIndex = (n: string) => {
    if (outerRef.current) {
      const lis = outerRef.current.getElementsByTagName('li')
      const len = lis.length
      let cidx
      cidx = (idx as number) + parseInt(n) * 1
      // 当索引右超出
      if (cidx > len - 1) {
        cidx = len - 1
        // 当索引左超出
      } else if (cidx < 0) {
        cidx = 0
      }
      // 保留当前索引值
      setIdx(cidx)
      // 改变过渡的方式，从无动画变为有动画
      lis[cidx].style.webkitTransition = '-webkit-transform 0.2s ease-out'
      lis[cidx - 1] &&
        (lis[cidx - 1].style.webkitTransition =
          '-webkit-transform 0.2s ease-out')
      lis[cidx + 1] &&
        (lis[cidx + 1].style.webkitTransition =
          '-webkit-transform 0.2s ease-out')

      // 改变动画后所应该的位移值
      lis[cidx].style.webkitTransform = 'translate3d(0, 0, 0)'
      lis[cidx - 1] &&
        (lis[cidx - 1].style.transform = 'translate3d(-' + scaleW + 'px, 0, 0)')
      lis[cidx + 1] &&
        (lis[cidx + 1].style.transform = 'translate3d(' + scaleW + 'px, 0, 0)')
    }
  }
  // 手指按下的处理事件
  const startHandler = (e: any) => {
    startTime = new Date().getTime()
    startX = e.touches[0].pageX
    startY = e.touches[0].pageY
    offsetX = 0
    if (e.touches.length >= 2) {
      //判断是否有两个点在屏幕上
      joinPinchScale = true //进入双指方法状态
      pinchStart = e.touches //得到第一组两个点
      pinchScaleEnd = pinchScale || (joinDbClickScale ? scaleMax : 1) //记录最后一次缩放的值
    }
    e.touches.length === 1 ? (oneTouch = true) : null
  }

  // 手指移动的处理事件
  const moveHandler = (e: any) => {
    e.preventDefault()
    const target = e.target
    // 处理放大逻辑
    if (target.nodeName === 'IMG') {
      // 处理双指放大
      if (joinPinchScale && e.touches.length >= 2) {
        const now = e.touches //得到第二组两个点
        //得到缩放比例，getDistance是勾股定理的一个方法
        pinchScale =
          pinchScaleEnd *
          (getDistance(now[0], now[1]) /
            getDistance(pinchStart[0], pinchStart[1]))
        // 首先将动画暂停
        target.style.webkitTransition = 'none'
        // 通过scale设置方法系数
        target.style.webkitTransform =
          'scale3d(' + pinchScale + ', ' + pinchScale + ', 1)'
        return
      }
    }

    //处理双击,双指放大状态时的拖动行为
    else if ((joinPinchScale || joinDbClickScale) && oneTouch) {
      // 计算手指的偏移量
      _offsetX = (_offsetEndX || 0) + e.targetTouches[0].pageX - startX
      _offsetY = (_offsetEndY || 0) + e.targetTouches[0].pageY - startY
      // 拖动时，保持图片缩放不变，只位移
      const _scale = joinPinchScale ? pinchScale : scaleMax
      // 首先将动画暂停
      target.style.webkitTransition = 'none'
      target.style.webkitTransform =
        'scale3d(' +
        _scale +
        ', ' +
        _scale +
        ', 1) translate3d(' +
        _offsetX * 0.5 +
        'px, ' +
        _offsetY * 0.5 +
        'px, 0)'
      return
    }

    // 处理翻页逻辑
    if (oneTouch && outerRef.current) {
      // 计算手指的偏移量
      offsetX = e.targetTouches[0].pageX - startX
      const lis = outerRef.current.getElementsByTagName('li')
      // 起始索引
      let i = idx - 1
      // 结束索引
      const m = i + 3
      // 最小化改变DOM属性
      for (i; i < m; i++) {
        lis[i] && (lis[i].style.webkitTransition = 'transform 0.2s ease-out')
        lis[i] &&
          (lis[i].style.webkitTransform =
            'translate3d(' + ((i - idx) * scaleW + offsetX) + 'px, 0, 0)')
      }
    }
  }

  // 手指抬起的处理事件
  const endHandler = (e: any) => {
    const target = e.target
    /****************下面开始处理标志位重置逻辑*************/

    //处理放大状态的拖动行为记录最后1次手指离开的坐标
    if (target.nodeName === 'IMG' && (joinDbClickScale || joinPinchScale)) {
      _offsetEndX = _offsetX
      _offsetEndY = _offsetY

      // 在双指缩放时，不允许缩放到原始尺寸小的值
      if (pinchScale < 1) {
        target.style.webkitTransition = '-webkit-transform .2s ease-in-out'
        target.style.webkitTransform = 'scale3d(1,1,1)'
        pinchScale = 1
      }
    }

    // 重置标志位
    oneTouch = false

    /****************下面开始处理翻页逻辑和动画*************/
    // 边界就翻页值
    const boundary = scaleW / 6

    // 手指抬起的时间值
    const endTime = new Date().getTime()

    // 当手指移动时间超过300ms 的时候，说明是拖动(手指始终没有离开)操作，按设定临界值位移算
    if (endTime - startTime > 300) {
      // 如果超过临界值，就表示需要移动到下一页
      if (offsetX >= boundary) {
        goIndex('-1')
      } else if (offsetX < 0 && offsetX < -boundary) {
        goIndex('+1')
      } else {
        goIndex('0')
      }
    } else {
      // 当手指移动时间不超过300ms 的时候，说明是swipe(手指很快离开)，按固定临界值算
      if (offsetX > 50) {
        goIndex('-1')
      } else if (offsetX < -50) {
        goIndex('+1')
      } else {
        goIndex('0')
      }
    }
  }

  // 双击放大事件
  const dbHandler = (e: any) => {
    const target = e.target
    const d = e
    if (target.nodeName === 'IMG') {
      if (joinDbClickScale || joinPinchScale) {
        target.style.webkitTransition = '-webkit-transform .2s ease-in-out'
        target.style.webkitTransform = 'scale3d(1,1,1)'
        joinDbClickScale = false
        joinPinchScale = false
        pinchScale = 1
      } else {
        const originX = d.offsetX
        const originY = d.offsetY
        target.style.webkitTransition = '-webkit-transform .2s ease-in-out'
        target.style.webkitTransform =
          'scale3d(' + scaleMax + ',' + scaleMax + ',1)'
        target.style.webkitTransformOriginX = originX + 'px'
        target.style.webkitTransformOriginY = originY + 'px'
        // pinchScaleEnd = 1;
        pinchScale = scaleMax
        joinDbClickScale = true
      }
    }
  }
  const handlePcClose = () => {
    if (onClose) {
      setIdx(0)
      onClose()
    }
  }

  /*
   * 单击图片，关闭图片查看器事件
   */
  const tapCloseHandler = (e: any) => {
    if (onClose) {
      setIdx(0)
      onClose()
    }
  }

  // 采用两次点击时间差来判断单击还是双击
  let lastClickTime = 0
  let clickTimer: any
  const clkHandler = function(e: any) {
    if (checkClient()) {
      return
    }
    const nowTime = new Date().getTime()
    if (nowTime - lastClickTime < 230) {
      /* 双击 */
      lastClickTime = 0
      clickTimer && clearTimeout(clickTimer)
      dbHandler(e)
    } else {
      /* 单击 */
      lastClickTime = nowTime
      clickTimer = setTimeout(function() {
        tapCloseHandler(e)
      }, 230)
    }
  }

  const preventGesturestart = (e: any) => {
    e.preventDefault()
  }

  useLayoutEffect(() => {
    setRadio(window.innerHeight / window.innerWidth)
    // eslint-disable-next-line
    scaleW = window.innerWidth + 10
    init()
  })

  useEffect(() => {
    if (wrapRef.current && outerRef.current) {
      wrapRef.current.style.height = `${window.innerHeight}px`
      outerRef.current.style.cssText = `width: ${scaleW}px;`
      document.addEventListener('gesturestart', preventGesturestart)
      outerRef.current.addEventListener('touchstart', startHandler)
      outerRef.current.addEventListener('touchmove', moveHandler)
      outerRef.current.addEventListener('touchend', endHandler)
      outerRef.current.addEventListener('click', clkHandler)
    }
    return () => {
      if (outerRef.current) {
        document.removeEventListener('gesturestart', preventGesturestart)
        outerRef.current.removeEventListener('touchstart', startHandler)
        outerRef.current.removeEventListener('touchmove', moveHandler)
        outerRef.current.removeEventListener('touchend', endHandler)
        // eslint-disable-next-line
        outerRef.current.removeEventListener('click', clkHandler)
      }
    }
  })

  return visible ? (
    <div className="r-slide" ref={wrapRef}>
      <ul className="r-slide-outer" ref={outerRef}>
        {list!.map((item, index) => {
          return (
            <li
              key={index}
              style={{
                width: `${window.innerWidth}px`,
                transform: `translate3d(${(index - idx) * scaleW}px,0,0)`,
              }}
            >
              <img
                src={item.url}
                style={{
                  height:
                    item.height / item.width > radio!
                      ? `${window.innerHeight}px`
                      : '',
                  width:
                    item.height / item.width <= radio!
                      ? `${window.innerWidth}px`
                      : '',
                }}
              />
            </li>
          )
        })}
        {checkClient() ? (
          <>
            <Icon
              name="close_light"
              onClick={handlePcClose}
              color="#fff"
              className="close"
            />
            <button className="arrow pre" onClick={() => goIndex('-1')}>
              <Icon name="back" color="#fff" />
            </button>
            <button className="arrow next" onClick={() => goIndex('+1')}>
              <Icon name="right" color="#fff" />
            </button>
          </>
        ) : null}
      </ul>
      <ul className="r-slide-actions">
        {list!.length >= 2
          ? list!.map((item, index) => {
              return (
                <li
                  key={index}
                  className={combineClass(
                    'r-slide-actions-dot',
                    idx === index ? 'active' : '',
                  )}
                >
                  •
                </li>
              )
            })
          : null}
      </ul>
    </div>
  ) : null
}

Slide.displayName = 'Slide'
export default Slide
