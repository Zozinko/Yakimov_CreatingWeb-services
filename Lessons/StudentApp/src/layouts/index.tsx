import { Link, Outlet } from 'umi';
import styles from './index.less';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { lazy } from 'react';
import SuperMan from '@/components/SuperMan';

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: 'home',
    label: <Link to = "/">Home</Link>
  },
  {
    key: 'docs',
    label: <Link to = "/docs">Docs</Link>
  },
]


export default function() {
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
        />
        <div>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}
