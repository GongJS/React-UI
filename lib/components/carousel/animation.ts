// slide动画
const slide = (fromNode: HTMLElement, toNode: HTMLElement, onFinsh: () => any, direction: string) => {

  const width = parseInt(getComputedStyle(fromNode).width!)
  const offsetX = width
  let offset1 = 0
  let offset2 = 0
  const step = 25
  fromNode.style.zIndex = '10'
  toNode.style.zIndex = '10'
  direction === 'left' ? toNode.style.left = width + 'px' : toNode.style.left = (-width + 'px')
  function fromNodeAnimation() {
    if (offset1 < offsetX) {
      direction === 'left' ?  
        fromNode.style.left = parseInt(getComputedStyle(fromNode).left!) - step + 'px' 
        : fromNode.style.left = parseInt(getComputedStyle(fromNode).left!) + step + 'px' 
      offset1 += step
      requestAnimationFrame(fromNodeAnimation)
    }
  }
  function toNodeAnimation() {
    if (offset2 < offsetX) {
      direction === 'left' ?  
      toNode.style.left = parseInt(getComputedStyle(toNode).left!) - step + 'px'
      :  toNode.style.left = parseInt(getComputedStyle(toNode).left!) + step + 'px'
      offset2 += step
      requestAnimationFrame(toNodeAnimation)
    } else {
      onFinsh()
      if (direction === 'left') {
        fromNode.style.left = '0'
        toNode.style.left = '0'
      } else {
        fromNode.style.right = '0'
        toNode.style.right = '0'
      }
    }
  }
  fromNodeAnimation()
  toNodeAnimation()
}
// fade动画
const fade = (fromNode: HTMLElement, toNode: HTMLElement, onFinsh: () => any) => {
  let opacityOffset1 = 1
  let opacityOffset2 = 0
  const step = 0.04
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

export {slide, fade}