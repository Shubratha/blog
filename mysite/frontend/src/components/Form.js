import React from 'react';
import { Form, Select, Input, Button } from 'antd';
import axios from 'axios';

const { Option } = Select;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
class CustomForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 0,
        }
    }

  handleSelectChange = value => {
    this.setState(
      {
        status: value,
        author: 1
      })
  };
  handleFormSubmit = (e, request, postID) => {
      const title = e.target.elements.title.value;
      const slugname = e.target.elements.slug.value;
      const content = e.target.elements.content.value;
      const status = this.state.status;
      console.log(title);

      switch(request) {
          case 'post':
            axios.post('http://127.0.0.1:8000/', {
                author: this.state.author,
                title: title,
                slug: slugname,
                content: content,
                status: status
            })
            .then(res => console.log(res))
            .catch(error => console.error(error));
            break;
          case 'put':
                axios.put(`http://127.0.0.1:8000/${postID}/`, {
                    author: this.state.author,
                    title: title,
                    slug: slugname,
                    content: content,
                    status: status
                })
                .then(res => console.log(res))
                .catch(error => console.error(error));
                break;
          default:
              axios.get('http://127.0.0.1:8000/');

      }
  }

  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <div>
          <Form onSubmit={(event) => this.handleFormSubmit(event, this.props.request, this.props.postID)}>
            <Form.Item {...formItemLayout} label="Title">
                <Input name="title" placeholder="Please input post title" />
            </Form.Item>
            <Form.Item {...formItemLayout} label="Slug-name">
                <Input name="slug" placeholder="Please input slug-name" />
            </Form.Item>
            <Form.Item {...formItemLayout} label="Content">
                <TextArea name="content" placeholder="Enter content" rows={4} />
            </Form.Item>
            <Form.Item {...formItemLayout} label="Status">
                <Select ref="status"
                placeholder="Draft"
                onChange={this.handleSelectChange}
                >
                <Option value="0">Draft</Option>
                <Option value="1">Publish</Option>
                </Select>
            
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
            </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;