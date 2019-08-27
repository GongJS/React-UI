import React, { Fragment, useEffect } from 'react';
import ReactDom from 'react-dom';
import Button from '../button/Button'
import Icon from '../icon/Icon'
import { combineClass, prefixClass } from '../../helpers/utils';
import './modal.scss'

interface ModalProps {
  visible?: boolean
  title?: React.ReactNode
  maskClosable?: boolean
  cancelText?: string
  okText?: string
  onOk?: React.MouseEventHandler
  onCancel?: React.MouseEventHandler
  footer?: React.ReactNode | null
  header?: React.ReactNode | null
  content?: React.ReactNode
  type?: 'info' | 'success' | 'error' | 'warning'
  afterClose?: () => any
  onClose?: () => any
  className?: string
  maskStyle?: React.CSSProperties
  style?: React.CSSProperties
}
interface options extends ModalProps {
  content: React.ReactNode
}

const pre = prefixClass('r-modal')
const Modal: React.FC<ModalProps> = ({
  visible,
  title,
  maskClosable,
  onCancel,
  onOk,
  cancelText,
  okText,
  footer,
  header,
  type,
  afterClose,
  onClose,
  className,
  style,
  maskStyle,
  children,
}) => {
  const handleOnOk = (e: React.MouseEvent) => {
    onClose && onClose()
    onOk && onOk(e)
  }
  const handleOnCancel = (e: React.MouseEvent) => {
    onClose && onClose()
    onCancel && onCancel(e)
  }
  useEffect(() => {
    return () => {
      afterClose && afterClose()
    }
  })

  const container = visible ?
    <Fragment>
      <div className={pre('mask')} style={maskStyle} onClick={maskClosable ? handleOnCancel : () => { }} />
      <div className={combineClass(pre(), className)} style={style} >
        <div className={pre('container')}>
        <header className={pre('header')} style={{padding: header===null? '8px' : '32px'}}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {
              type === 'info' && header !== null? <Icon color="#3963bc" name="infofill" />
                : type === 'success' && header !== null? <Icon color="#00c292" name="roundcheckfill" />
                  : type === 'warning' && header !== null? <Icon color="#ffcb71" name="warnfill" />
                    : type === 'error' && header !== null ? <Icon color="#f4516c" name="roundclosefill" />
                      : null
            } { header !== null? <span style={{ marginLeft: '10px' }}>{title}</span> : null}
          </div>
          <span className="close" onClick={handleOnCancel}>x</span>
        </header>
        <main className={pre('main')} style={{padding: header === null ? '16px' : '0px 32px 9px 70px'}}>
          {children}
        </main>
        <footer className={pre('footer')} style={{padding: header===null? '8px' : '32px'}}>
          {
            footer !== null?  (
              <Fragment>
                <Button
                  onClick={handleOnCancel}
                  type="plain"
                >
                  {cancelText}
                </Button>
                <Button type="primary" onClick={handleOnOk}>
                  {okText}
                </Button>
              </Fragment>
            ) : null
          }
        </footer>
        </div>
      </div>
    </Fragment> : null;
  return (
    ReactDom.createPortal(container, document.body)
  )
}

const setAttributes = (options: options, type: 'info' | 'success' | 'error' | 'warning') => {
  const { onOk, content, okText, cancelText, title, afterClose, style, maskStyle, maskClosable } = options
  const handleOnOk = (e: React.MouseEvent) => {
    onClose && onClose()
    onOk && onOk(e)
  }
  const footer = <Button type="primary" onClick={handleOnOk}>{okText || '知道了'}</Button>
  const onClose = () => {
    ReactDom.render(React.cloneElement(component, { visible: false }), div)
    ReactDom.unmountComponentAtNode(div)
    div.remove()
  }
  const component = <Modal
    title={title}
    visible={true}
    type={type}
    footer={footer}
    onClose={onClose}
    onOk={onOk}
    okText={okText}
    cancelText={cancelText}
    afterClose={afterClose}
    style={style}
    maskStyle={maskStyle}
    maskClosable={maskClosable}
  >
    {content}
  </Modal>
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDom.render(component, div)
}
const modalConfirm = (options: options) => {
  const { onCancel, onOk, content } = options
  const onClose = () => {
    ReactDom.render(React.cloneElement(component, { visible: false }), div)
    ReactDom.unmountComponentAtNode(div)
    div.remove()
  }
  const component = <Modal visible={true}
    onClose={onClose}
    onCancel={onCancel}
    onOk={onOk}
  >
    {content}
  </Modal>
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDom.render(component, div)
}

const modalInfo = (options: options) => {
  setAttributes(options, 'info')
}
const modalSuccess = (options: options) => {
  setAttributes(options, 'success')
}
const modalWarning = (options: options) => {
  setAttributes(options, 'warning')
}
const modalError = (options: options) => {
  setAttributes(options, 'error')
}

Modal.defaultProps = {
  visible: false,
  title: '提示',
  cancelText: '取消',
  okText: '确定',
  maskClosable: true
}
Modal.displayName = 'Modal'
export { Modal, modalConfirm, modalInfo, modalSuccess, modalWarning, modalError }
export default Modal;