import { Button, Modal } from 'antd';
import { ReactNode } from 'react';

interface ModalButtonProps {
  buttonText: string;
  modalTitle: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: ReactNode;
  htmlType?: 'button' | 'submit';
}

const ModalButton = ({
  buttonText,
  modalTitle,
  open,
  onOpen,
  onClose,
  children,
  htmlType = 'button',
}: ModalButtonProps) => {
  return (
    <>
      <Button
        type="primary"
        htmlType={htmlType}
        onClick={htmlType === 'button' ? onOpen : undefined}
      >
        {buttonText}
      </Button>

      <Modal
        title={modalTitle}
        open={open}
        onOk={onClose}
        onCancel={onClose}
        footer={null}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalButton;