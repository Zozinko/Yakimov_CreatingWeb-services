import { Link, Outlet } from 'umi';
import styles from './index.less';

import React, { useState } from 'react';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

    return (
      // <div className={styles.navs}>
      //   <ul>
      //     <li>
      //       <Link to="/">Home</Link>
      //     </li>
      //     <li>
      //       <Link to="/docs">Docs</Link>
      //     </li>
      //     <li>
      //       <a href="https://github.com/umijs/umi">Github</a>
      //     </li>
      //   </ul>
      //   <Outlet />
      // </div>
          <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: 'home',
                icon: <UserOutlined />,
                label: <Link to="/">Home</Link>,
              },
              {
                key: 'dock',
                icon: <UserOutlined />,
                label: <Link to="/docs">About App</Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
          <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
}
export default App;