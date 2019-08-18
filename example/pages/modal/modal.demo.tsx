import React, { Fragment, useState } from 'react';
import CodeCard from '../../CodeCard'
import Modal from '../../../lib/components/modal/Modal'
import { modalConfirm, modalInfo, modalSuccess, modalWarning, modalError } from '../../../lib/components/modal/Modal'
import Button from '../../../lib/components/button/Button'
import ReactMarkdown from 'react-markdown';

export default () => {
  const [visible, setVisible] = useState(false)
  const handleOk: React.MouseEventHandler = (e) => {
    console.log(e)
    setVisible(false)
  }
  const showConfirm = () => {
    modalConfirm({
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  const showInfo = () => {
    modalInfo({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {
        console.log('OK');
      }
    });
  }
  const showError = () => {
    modalError({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {
        console.log('OK');
      }
    });
  }
  const showWarning = () => {
    modalWarning({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {
        console.log('OK');
      }
    });
  }
  const showSuccess = () => {
    modalSuccess({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {
        console.log('OK');
      }
    });
  }
  return <Fragment>
    <ReactMarkdown source={require('!!raw-loader!./modal.md').default} className="md" />
    <CodeCard
      title="基本使用"
      summary="使用组件声明一个对话框，通过控制 visible 属性来显示/隐藏。"
      code={`
      const handleOk: React.MouseEventHandler = (e) => {
        console.log(e)
        setVisible(false)
      }
      <Modal visible={visible}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>`
      }
    >
      <Modal visible={visible}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Button type="primary" onClick={() => setVisible(true)}>open Modal</Button>
    </CodeCard>
    <CodeCard
      title="确认对话框"
      summary="使用 confirm() 可以快捷地弹出确认框。"
      code={`   
      const showConfirm = () => {
        modalConfirm({
          title: 'Do you Want to delete these items?',
          content: 'Some descriptions',
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
      <Button type="primary" onClick={showConfirm}>confirm</Button>`
      }
    >
      <Button type="primary" onClick={showConfirm}>confirm</Button>
    </CodeCard>
    <CodeCard
      title="信息提示"
      summary="各种类型的信息提示，只提供一个按钮用于关闭。。"
      code={`
      const showInfo = () => {
        modalInfo({
          title: 'This is a notification message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
          onOk() {
            console.log('OK');
          }
        });
      }
      const showError = () => {
        modalError({
          title: 'This is a notification message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
          onOk() {
            console.log('OK');
          }
        });
      }
      const showWarning = () => {
        modalWarning({
          title: 'This is a notification message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
          onOk() {
            console.log('OK');
          }
        });
      }
      const showSuccess = () => {
        modalSuccess({
          title: 'This is a notification message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
          onOk() {
            console.log('OK');
          }
        });   
      <Button type="primary" onClick={showInfo}>info</Button>
      <Button type="success" onClick={showSuccess}>success</Button>
      <Button type="reverse" onClick={showWarning}>warning</Button>
      <Button type="danger" onClick={showError}>error</Button>`
      }
    >
      <Button type="primary" onClick={showInfo}>info</Button>
      <Button type="success" onClick={showSuccess}>success</Button>
      <Button type="reverse" onClick={showWarning}>warning</Button>
      <Button type="danger" onClick={showError}>error</Button>
    </CodeCard>
    <ReactMarkdown source={require('!!raw-loader!./api.md').default} className="md" />
  </Fragment>
}
