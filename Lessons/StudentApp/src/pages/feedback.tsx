import { DatePicker, Form, Input, Typography } from 'antd';
import { useState } from 'react';
import ModalButton from '@/components/ModalButton';

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

export default function FeedbackPage() {

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  const onFinish = (values: any) => {
    setFormData(values);
    setOpen(true);
  };

  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);

  return (
    <>
      <Typography.Title>Feedback</Typography.Title>
      <Form
        {...formItemLayout}
        form={form}
        variant={variant || 'outlined'}
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        initialValues={{ variant: 'outlined' }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input!' },
            { type: 'email', message: "It's not email!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Messege"
          name="message"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <ModalButton
            buttonText="Submit"
            modalTitle="Entered data"
            open={open}
            onOpen={() => { }}
            onClose={() => setOpen(false)}
            htmlType="submit"
          >
            {formData && (
              <>
                <p><b>Name:</b> {formData.name}</p>
                <p><b>Email:</b> {formData.email}</p>
                <p><b>Message:</b> {formData.message}</p>
              </>
            )}
          </ModalButton>
        </Form.Item>
      </Form>
    </>
  );
};