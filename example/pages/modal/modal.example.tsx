import React, { useState } from 'react';
import { Modal, modalInfo, modalConfirm, modalSuccess, modalWarning, modalError, Button } from '../../../lib';

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
  return (
    <div style={{ zIndex: 100 }}>
      <Modal visible={visible}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <div>
        <Button type="primary" onClick={() => setVisible(true)}>open Modal</Button>
      </div>

      <div style={{ margin: '20px 0px' }}>
        <Button type="primary" onClick={showConfirm}>confirm</Button>
      </div>
      <div>
        <Button type="primary" onClick={showInfo}>info</Button>
        <Button type="success" onClick={showSuccess}>success</Button>
        <Button type="reverse" onClick={showWarning}>warning</Button>
        <Button type="danger" onClick={showError}>error</Button>
      </div>
    </div>
  )
}
