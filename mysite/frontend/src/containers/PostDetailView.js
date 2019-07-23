import React from 'react';
import axios from 'axios';
// import Post from '../components/Post';
import { Button, Card } from 'antd';
import CustomForm from '../components/Form';

class PostDetail extends React.Component {

    state = {
        post: {}
    }

    componentDidMount() {
        const id = this.props.match.params.postID;
        axios.get(`http://127.0.0.1:8000/${id}/`)
            .then(res => {
                this.setState({
                    post: res.data
                });
            })
    }

    handleDelete = e => {
        const id = this.props.match.params.postID;
        axios.delete(`http://127.0.0.1:8000/${id}/`);
        this.props.history.push('/');
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <Card title={this.state.post.title} >
                    <p>{this.state.post.content}</p>
                </Card>
                <CustomForm request="put" postID={this.props.match.params.postID} btnText="UPDATE" />
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">DELETE</Button>
                </form>
            </div>
        )
    }
}

export default PostDetail;