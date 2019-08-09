import React, { useEffect } from 'react';
import './carousel.scss'
import combineClass from '../../helpers/combineClass';

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
 
}

const Carousel: React.FC<CarouselProps> = ({
  className,
  children,
  ...restProps
}) => {
  let dotsEle: NodeListOf<HTMLElement>
  let panelsEle: NodeListOf<HTMLElement>
  const handleDotsClick = (event: any) => {
    event.stopPropagation()
    let index = Array.from(dotsEle).indexOf(event.target)
    if (index === -1) {return}
     setDots(index)
     setPanels(index)
  }
  const setDots = (index: number) => {
    dotsEle.forEach(dot => dot.classList.remove('active'))
    dotsEle[index].classList.add('active')
  }
  const setPanels = (index:number) => {
    panelsEle.forEach(panel => panel.style.zIndex = 1)
    panelsEle[index].style.zIndex = 10
  }
  const pre = () => {
    const panels = document.querySelectorAll('.r-carousel .dots span')
    console.log(panels)
    console.log()
    let index =  Array.from(panels).indexOf(document.querySelector('.r-carousel .dots .active'))
    console.log(index)
    index = (index - 1 + panels.length) % panels.length
    console.log(index)
    setDots(index)
    setPanels(index)
  }
  const next = () => {
    const panels = document.querySelectorAll('.r-carousel .dots span')
    let index =  Array.from(panels).indexOf(document.querySelector('.r-carousel .dots .active'))
    index = (index + 1) % panels.length
    setDots(index)
    setPanels(index)
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

Carousel.displayName = 'Slide'
export default Carousel;