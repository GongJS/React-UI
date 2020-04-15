import React, { ReactNode, useEffect, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import Icon from '../icon'
import { combineClass } from '../../helpers/utils'
import './message.scss'

interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string | ReactNode
  type?: 'info' | 'success' | 'warning' | 'error'
  duration?: number
  top?: number
  onClose?: () => any
  className?: string
}

function removeMessage(messageInstance: JSX.Element, div: Element) {
  ReactDOM.render(React.cloneElement(messageInstance), div)
  ReactDOM.unmountComponentAtNode(div)
  div.remove()
}

function creatWrapper() {
  const wrapper = document.createElement('div')
  wrapper.className = 'r-message'
  document.body.appendChild(wrapper)
  return wrapper
}

function createMessage(options: MessageProps) {
  const { content, type, duration, onClose, top } = options
  const wrapper = creatWrapper()
  const messageInstance = (
    <Message content={content} onClose={onClose} type={type} top={top} />
  )
  const div = document.createElement('div')
  wrapper.appendChild(div)
  ReactDOM.render(messageInstance, div)
  setTimeout(() => {
    removeMessage(messageInstance, wrapper)
  }, duration! * 1000)
}

const Message: React.FC<MessageProps> = props => {
  const {
    content,
    top,
    type = 'info',
    className,
    onClose,
    ...restProps
  } = props

  const wrapper: HTMLDivElement | null = document.querySelector('.r-message')
  const IconMap = {
    info: { color: '#3963bc', icon: 'infofill' },
    success: { color: '#00c292', icon: 'roundcheckfill' },
    warning: { color: '#ffcb71', icon: 'warnfill' },
    error: { color: '#f4516c', icon: 'roundclosefill' },
  }

  useLayoutEffect(() => {
    wrapper && (wrapper.style.top = `${top}px`)
  })

  useEffect(() => {
    return () => {
      onClose && onClose()
      wrapper && (wrapper.style.top = '30px')
    }
  })

  return (
    <div
      className={combineClass(
        'r-message-container',
        `r-message-${type}`,
        className,
      )}
      {...restProps}
    >
      <Icon color={IconMap[type].color} name={IconMap[type].icon} />
      <div className="content">{content}</div>
    </div>
  )
}

const setAttributes = (
  options: MessageProps | string,
  type: 'info' | 'success' | 'warning' | 'error',
) => {
  const strOptions = {} as MessageProps
  if (options instanceof Object) {
    options.type = type
    options.duration ? null : (options.duration = 3)
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
  },
}

Message.displayName = 'Message'
export default message
