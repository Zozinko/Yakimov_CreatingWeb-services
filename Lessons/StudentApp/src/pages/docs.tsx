import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import yayJpg from '../assets/notYay.png';

const Lesson_1: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h2>About</h2>
      
      <Button type="primary" onClick={showModal}>
        Нажми пожалуйста
      </Button>
      <Modal
        title="Фотография разработчика"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}  
      >
        <img src={yayJpg} width="388" />
      </Modal>
    </>
  );
};

export default Lesson_1;