import { studentColumns } from "@/constants/tableColumns";
import { studentDataSource } from "@/constants/tableData";
import { Button, Form, Input, message, Table } from "antd";
import { useState } from 'react';
import FormItem from "antd/es/form/FormItem";
import ModalButton from '@/components/ModalButton';

export default function StudentsTable() {
    const [data, setData] = useState<Student[]>(studentDataSource);
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();

    const handleStudentAdd = (formData: any) => {
        const id = studentDataSource.length > 0
            ? Math.max(...studentDataSource.map(s => s.id))
            : 0;
        formData.id = id + 1;
        setData([formData, ...data])
        setOpen(false)
        form.resetFields();
        message.info("update");
    }

    const handleStudentRemove = (id: number) => {
        setData(data.filter(x => x.id != id));
    }

    return (
        <>
            <ModalButton
                buttonText="New student"
                modalTitle="New student"
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
            >
                <Form layout="vertical" form={form} onFinish={handleStudentAdd}>
                    <Form.Item
                        label="First name"
                        name="firstName"
                        rules={[{ required: true, message: 'Please input!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Last name"
                        name="lastName"
                        rules={[{ required: true, message: 'Please input!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Mid name"
                        name="midName"
                        rules={[{ required: true, message: 'Please input!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Group"
                        name="group"
                        rules={[{ required: true, message: 'Please input!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">Сохранить</Button>
                </Form>
            </ModalButton>

            <Table dataSource={data} columns={studentColumns?.map(x => {
                if (x.title != 'Действие') {
                    return x;
                }

                return {
                    ...x, render: (val) => {
                        return <a onClick={() => handleStudentRemove(val.id)}>Удалить</a>
                    }
                }
            })} />
        </>
    )
}