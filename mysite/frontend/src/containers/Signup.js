import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import * as actions from '../store/actions/auth';

import {
    Form,
    Input,
    Tooltip,
    Icon,
    Select,
    Button,
  } from 'antd';
  
  const { Option } = Select;
  
  class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
      role: 1
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
            this.props.onAuth(values.userName, values.email, values.password, values.confirm, values.role)
        //   console.log('Received values of form: ', values);
        }
        this.props.history.push('/');
      });
    };

    handleSelectChange = value => {
        this.setState(
          {
            role: value,
            // author: 1
          })
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };

  
    render() {
      const { getFieldDecorator } = this.props.form;

      const roleSelector = getFieldDecorator('prefix', {
        initialValue: '1',
      })(
        <Select style={{ width: 70 }}>
          <Option value="1">Admin</Option>
          <Option value="2">New User</Option>
        </Select>,
      );
  
  
      return (
        <Form onSubmit={this.handleSubmit}>
         <Form.Item
            label={
              <span>
                Username&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your uername!', whitespace: true }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Password" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="Confirm Password" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item label="Role">
            {getFieldDecorator('role', {
              rules: [{ required: true, message: 'Please input your role!' }],
            })(<Select 
            placeholder="Admin"
            onChange={this.handleSelectChange}
            >
            <Option value="0">New User</Option>
            <Option value="1">Admin</Option>
            </Select>)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
                Sign Up
            </Button> Or <NavLink style={{marginRight: '10px'}} to='/login'>Login</NavLink>
          </Form.Item>
        </Form>
      );
    }
  }
  
  const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2, role) => dispatch(actions.authSignUp(username, email, password1, password2, role))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm);