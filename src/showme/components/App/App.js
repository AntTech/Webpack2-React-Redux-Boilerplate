import React from 'react';
import { Link } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Tag} from 'antd';
import '../../static/css/app.css';

const { Header, Content, Footer, Sider } = Layout;
const App = ({children, location, collapsed, counter, onCollapse}) => (
<Layout style={{ height: '100%' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
        >
          <div className="logo" ><div className="logoImg" /></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
            <Menu.Item key="/">
              <Icon type="home" />
              <span className="nav-text">主页</span>
              <Link to="/">主页</Link>
            </Menu.Item>
            <Menu.Item key="/counter">
              <Icon type="calculator" />
              <span className="nav-text">计数器</span>
              <Link to="/counter">计数器</Link>
            </Menu.Item>
            <Menu.Item key="/todos">
              <Icon type="bars" />
              <span className="nav-text">待办</span>
              <Link to="/todos">Todos</Link>
            </Menu.Item>
            <Menu.Item key="/news">
              <Icon type="appstore-o" />
              <span className="nav-text">头条</span>
              <Link to="/news">头条</Link>
            </Menu.Item>
            <Menu.Item key="/about">
              <Icon type="user" />
              <span className="nav-text">关于我</span>
              <Link to="/about">关于我</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header">
            <Row>
              <Col span={20}>
                <h1>
                  <a href="/" title="Home">SHOWME</a>
                  <small>react + redux + react-router + andt 技术大杂烩</small>
                </h1>
              </Col>
              <Col span={4}>
                <Tag color="orange">Counter: {counter}</Tag>
                <Tag color="green">Todos: 111</Tag>
              </Col>
            </Row>
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
    onCollapse: React.PropTypes.func,
    counter: React.PropTypes.number,
};

export default App;
