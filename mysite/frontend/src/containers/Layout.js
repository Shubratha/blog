import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

const { Header, Content, Footer } = Layout;
class CustomLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{
              lineHeight: '64px',
              // textAlign: 'right' 
            }}
          >
            <Menu.Item id="1" key="1"><Link to="/">Dashboard</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/profile"><span>
                <Icon type="user" />
                Profile
              </span></Link></Menu.Item>
            {this.props.isAuthenticated ?
              // <Menu.Item key="2"><Link to="/profile">Profile</Link></Menu.Item>
              <Menu.Item id="2" key="3" onClick={actions.logout}>Logout</Menu.Item>
              :
              <Menu.Item id="3" key="3">
                <Link to="/login">Login</Link> 
              </Menu.Item>
            }
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/">List</Link></Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{this.props.children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, email, password1, password2, role) => dispatch(actions.authSignUp(username, email, password1, password2, role))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));

// export default CustomLayout;