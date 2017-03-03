import React from 'react';
import { Link } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import '../../static/css/app.css';

const { Header, Content, Footer, Sider } = Layout;

const App = ({children, collapsed, onCollapse}) => (
<Layout style={{ height: '100%' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="home" />
              <span className="nav-text">主页</span>
              <Link to="/">主页</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="plus-square-o" />
              <span className="nav-text">计数器</span>
              <Link to="/counter">计数器</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="heart-o" />
              <span className="nav-text">nav 5</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="team" />
              <span className="nav-text">nav 6</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 10 }} >
            <a href="/" title="Home">SHOWME</a>
            <small>点击左侧导航栏开始</small>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
               {children}
            </div>
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
    collapsed: React.PropTypes.bool,
    onCollapse: React.PropTypes.func
};

export default App;
