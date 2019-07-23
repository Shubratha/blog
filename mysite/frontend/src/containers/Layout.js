import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
class CustomLayout = (props) => {
  return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px', 
                      // textAlign: 'right' 
                  }}
          >
            <Menu.Item key="1"><Link to="/">Dashboard</Link></Menu.Item>
          { props.isAuthenticated ? 
            // <Menu.Item key="2"><Link to="/profile">Profile</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/logout">Logout</Link></Menu.Item>
            :
            <Menu.Item key="3"><Link to="/login">Login</Link></Menu.Item>
          }
            
            

          
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/">List</Link></Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{props.children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
  )
}

export default CustomLayout;