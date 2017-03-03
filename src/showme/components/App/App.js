import React from 'react';
import { Link } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import '../../static/css/app.css';

const { Header, Content, Footer, Sider } = Layout;

const routeMap = {
    '/': '1',
    '/counter': '2',
    '/todos': '3',
    '/news': '4',
    '/about': '5'
};

const App = ({children, location, collapsed, onCollapse}) => (
<Layout style={{ height: '100%' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
        >
          <div className="logo" ><div className="logoImg" /></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[routeMap[location.pathname]]}>
            <Menu.Item key="1">
              <Icon type="home" />
              <span className="nav-text">主页</span>
              <Link to="/">主页</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="calculator" />
              <span className="nav-text">计数器</span>
              <Link to="/counter">计数器</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="bars" />
              <span className="nav-text">待办</span>
              <Link to="/todos">Todos</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="appstore-o" />
              <span className="nav-text">头条</span>
              <Link to="/news">头条</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="user" />
              <span className="nav-text">关于我</span>
              <Link to="/about">关于我</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 10 }} >
            <a href="/" title="Home">SHOWME</a>
            <small>点击左侧导航栏开始</small>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
);

// propTypes 校验
App.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.any,
    collapsed: React.PropTypes.bool,
    onCollapse: React.PropTypes.func
};

export default App;