import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../icon/Icon'
import './message.scss'
import combineClass from '../../helpers/combineClass';

let timer: number
let cacheContainer: HTMLDivElement | null = null

function removeMessage() {
  if (cacheContainer === null) {
    return
  }
  ReactDOM.unmountComponentAtNode(cacheContainer)
  cacheContainer.remove()
  cacheContainer = null
}

function createMessage( options: MessageProps) {
  const { content, type, duration } = options
  removeMessage()
  const container = document.createElement('div')
  document.body.append(container)
  const messageInstance = React.createElement(
    Message,
    {
      content,
      type
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
interface MessageProps {
  content: string | ReactNode
  type?: 'info' | 'success' | 'warning' | 'error'
  duration?: number
  className?: string
  style?: React.CSSProperties
}

const Message: React.FC<MessageProps> = ({
  content,
  type,
  className,
  ...restProps
}) => {
  return (
    <div className={combineClass('r-message', `r-message-${type}`, className)} {...restProps}>
      {
        type === 'info' ? <Icon color="#3963bc" name="infofill" />
          : type === 'success' ? <Icon color="#00c292" name="roundcheckfill" />
            : type === 'warning' ? <Icon color="#ffcb71" name="warnfill" />
              : <Icon color="#f4516c" name="roundclosefill" />
      }
      <span style={{ marginLeft: '2vw' }}>{content}</span>
    </div>
  )
}

const message = {
  info: (options: MessageProps) => {
    options.type = 'info'
    options.duration ? null : options.duration = 3
    createMessage(options)
  },
  success: (options: MessageProps) => {
    options.type = 'success'
    options.duration ? null : options.duration = 3
    createMessage(options)
  },
  warning: (options: MessageProps) => {
    options.type = 'warning'
    options.duration ? null : options.duration = 3
    createMessage(options)
  },
  error: (options: MessageProps) => {
    options.type = 'error'
    options.duration ? null : options.duration = 3
    createMessage(options)
  }
}
export default message

