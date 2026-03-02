import { Typography, Image } from 'antd';
import { useState } from 'react';
import ModalButton from '@/components/ModalButton';
import authorPhoto from '@/assets/notYay.png'

export default function AboutPage(){
  const [open, setOpen] = useState(false);

  return (
    <>
      <Typography.Title>About my app</Typography.Title>

      <ModalButton
        buttonText="Author"
        modalTitle="It's me"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <img src={authorPhoto} width="388" />
      </ModalButton>
    </>
  );
};
