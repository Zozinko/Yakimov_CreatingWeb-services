import { TableProps } from "antd";

export const studentColumns: TableProps<any>['columns'] = [
    {
        title: 'Фамилия',
        dataIndex: 'lastName'
    },
    {
        title: 'Имя',
        dataIndex: 'firstName'
    },
    {
        title: 'Отчество',
        dataIndex: 'midName'
    },
    {
        title: 'Группа',
        dataIndex: 'group'
    },
    {
        title: 'Действие',
        key: 'action',
        render: () => <>
            <a>Удалить</a>
        </>
    },
];

