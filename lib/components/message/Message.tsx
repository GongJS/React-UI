import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../icon/Icon'
import './message.scss'
import combineClass from '../../helpers/combineClass';

interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string | ReactNode
  type?: 'info' | 'success' | 'warning' | 'error'
  duration?: number
  showClose?: boolean
  onClose?: () => any
  className?: string
}

let timer: number
let cacheContainer: HTMLDivElement | null = null
const messageRef = React.createRef<HTMLDivElement>()

function removeMessage(flag?: string) {
  const obj = cacheContainer as HTMLDivElement
  const animationDurationTime = 0.2
  if (flag === 'closeNow') {
    ReactDOM.unmountComponentAtNode(obj)
    obj.remove()
    cacheContainer = null
  } else {
    const ref = messageRef
    if (ref && ref.current) {
      ref.current.style.animation = `slide-down ${animationDurationTime}s`
    }
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(obj)
      obj.remove()
      cacheContainer = null
    }, animationDurationTime * 1000);
  }
}

function createMessage(options: MessageProps) {
  const { content, type, duration, showClose,onClose } = options
  if (cacheContainer) {
    removeMessage('closeNow')
  }
  const container = document.createElement('div')
  document.body.append(container)
  const messageInstance = React.createElement(
    Message,
    {
      content,
      type,
      showClose,
      onClose
    }
  )
  ReactDOM.render(messageInstance, container)
  cacheContainer = container
  if (timer) {
    clearTimeout(timer)
  }
  timer = window.setTimeout(() => {
    removeMessage()
  }, duration! * 1000)
}

const Message: React.FC<MessageProps> = ({
  content,
  type,
  showClose,
  className,
  onClose,
  ...restProps
}) => {

  const handleClick = () => {
    removeMessage('closeNow')
    clearTimeout(timer)
  }
  useEffect(() => {
    return () => onClose && onClose()
  })
  return (
    <div className="r-message" >
      <div ref={messageRef} className={combineClass('r-message-container', `r-message-${type}`, className)} {...restProps}>
        {
          type === 'info' ? <Icon color="#3963bc" name="infofill" />
            : type === 'success' ? <Icon color="#00c292" name="roundcheckfill" />
              : type === 'warning' ? <Icon color="#ffcb71" name="warnfill" />
                : <Icon color="#f4516c" name="roundclosefill" />
        }
        <div className="content">
          {content}
          {
            showClose ? <div className="close" onClick={handleClick}> x</div> : null
          }
        </div>
      </div>
    </div>

  )
}

const setAttributes = (options: MessageProps | string, type: 'info' | 'success' | 'warning' | 'error') => {
  let strOptions = {} as MessageProps
  if (options instanceof Object) {
    options.type = type
    options.duration ? null : options.duration = 3
    options.showClose ? false : options.showClose = true
    createMessage(options)
  } else {
    strOptions.content = options
    strOptions.type = type
    strOptions.duration = 3
    createMessage(strOptions)
  }
}
const message = {
  info: (options: MessageProps | string) => {
    setAttributes(options, 'info')
  },
  success: (options: MessageProps | string) => {
    setAttributes(options, 'success')
  },
  warning: (options: MessageProps | string) => {
    setAttributes(options, 'warning')
  },
  error: (options: MessageProps | string) => {
    setAttributes(options, 'error')
  }
}
Message.displayName = 'Message'
Message.defaultProps = {
  showClose: false
}
export default message

