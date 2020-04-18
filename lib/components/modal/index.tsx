import React, {Fragment, useEffect} from 'react';
import ReactDom from 'react-dom';
import Button from '../button';
import Icon from '../icon';
import {combineClass, prefixClass} from '../../helpers/utils';
import './modal.scss';

interface Props {
  visible: boolean
  title: React.ReactNode
  maskClosable: boolean
  cancelText: string
  okText: string
  onOk: React.MouseEventHandler
  onCancel: React.MouseEventHandler
  footer: React.ReactNode | null
  header: React.ReactNode | null
  content: React.ReactNode
  type: 'info' | 'success' | 'error' | 'warning'
  afterClose: () => any
  onClose: () => any
  className: string
  maskStyle: React.CSSProperties
  style: React.CSSProperties
}

type ModalProps = Partial<Props>
type Options = ModalProps & { content: React.ReactNode }

const pre = prefixClass('r-modal');
const Modal: React.FC<ModalProps> = props => {
  const {
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
  } = props;

  const handleOnOk = (e: React.MouseEvent) => {
    onClose && onClose();
    onOk && onOk(e);
  };

  const handleOnCancel = (e: React.MouseEvent) => {
    onClose && onClose();
    onCancel && onCancel(e);
  };

  useEffect(() => {
    return () => {
      afterClose && afterClose();
    };
  });

  const typeIcon = {
    info: <Icon color="#3963bc" name="infofill"/>,
    success: <Icon color="#00c292" name="roundcheckfill"/>,
    warning: <Icon color="#ffcb71" name="warnfill"/>,
    error: <Icon color="#f4516c" name="roundclosefill"/>,
  };

  const container = visible ? (
    <Fragment>
      <div
        className={pre('mask')}
        style={maskStyle}
        // eslint-disable-next-line
        onClick={maskClosable ? handleOnCancel : () => {}}
      />
      <div className={combineClass(pre(), className)} style={style}>
        <div className={pre('container')}>
          <header
            className={pre('header')}
            style={{padding: header === null ? '8px' : '32px'}}
          >
            <div style={{display: 'flex', alignItems: 'center'}}>
              {header !== null ? typeIcon[type ? type : 'info'] : null}{' '}
              {header !== null ? (
                <span style={{marginLeft: '10px'}}>{title}</span>
              ) : null}
            </div>
            <span className="close" onClick={handleOnCancel}>
              x
            </span>
          </header>
          <main
            className={pre('main')}
            style={{padding: header === null ? '16px' : '0px 32px 9px 70px'}}
          >
            {children}
          </main>
          <footer
            className={pre('footer')}
            style={{padding: header === null ? '8px' : '32px'}}
          >
            {footer !== null ? (
              <Fragment>
                <Button onClick={handleOnCancel} type="plain">
                  {cancelText}
                </Button>
                <Button type="primary" onClick={handleOnOk}>
                  {okText}
                </Button>
              </Fragment>
            ) : null}
          </footer>
        </div>
      </div>
    </Fragment>
  ) : null;
  return ReactDom.createPortal(container, document.body);
};

const setAttributes = (
  options: Options,
  type: 'info' | 'success' | 'error' | 'warning',
) => {
  const {
    onOk,
    content,
    okText,
    cancelText,
    title,
    afterClose,
    style,
    maskStyle,
    maskClosable,
  } = options;

  const handleOnOk = (e: React.MouseEvent) => {
    onClose && onClose();
    onOk && onOk(e);
  };

  const footer = (
    <Button type="primary" onClick={handleOnOk}>
      {okText || '知道了'}
    </Button>
  );

  const onClose = () => {
    ReactDom.render(React.cloneElement(component, {visible: false}), div);
    ReactDom.unmountComponentAtNode(div);
    div.remove();
  };

  const component = (
    <Modal
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
  );

  const div = document.createElement('div');
  document.body.append(div);
  ReactDom.render(component, div);
};

const modalConfirm = (options: Options) => {
  const {onCancel, onOk, content} = options;
  const onClose = () => {
    ReactDom.render(React.cloneElement(component, {visible: false}), div);
    ReactDom.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Modal visible={true} onClose={onClose} onCancel={onCancel} onOk={onOk}>
      {content}
    </Modal>
  );
  const div = document.createElement('div');
  document.body.append(div);
  ReactDom.render(component, div);
};

const modalInfo = (options: Options) => {
  setAttributes(options, 'info');
};

const modalSuccess = (options: Options) => {
  setAttributes(options, 'success');
};

const modalWarning = (options: Options) => {
  setAttributes(options, 'warning');
};

const modalError = (options: Options) => {
  setAttributes(options, 'error');
};

Modal.defaultProps = {
  visible: false,
  title: '提示',
  cancelText: '取消',
  okText: '确定',
  type: 'info',
  maskClosable: true,
};
Modal.displayName = 'Modal';
export {
  Modal,
  modalConfirm,
  modalInfo,
  modalSuccess,
  modalWarning,
  modalError,
};
export default Modal;
