import React from 'react';
import axios from 'axios';
// import Post from '../components/Post';
import { connect } from "react-redux";
import { Button, Card } from 'antd';
import CustomForm from '../components/Form';
import CustomComment from '../components/Comment';

class PostDetail extends React.Component {

    state = {
        post: {}
    }

    componentDidMount() {
        const id = this.props.match.params.postID;
        axios.get(`http://127.0.0.1:8000/${id}/`)
            .then(res => {
                console.log("hi");
                console.log(res);
                this.setState({
                    post: res.data
                });
            })
    }

    handleDelete = e => {
        // e.preventDefault();
        const id = this.props.match.params.postID;
        axios.delete(`http://127.0.0.1:8000/${id}/`)
            .then(res => {
                this.props.history.push('/');
            }
        );
    }

    render() {
        return (
            <div>
                <Card title={this.state.post.title} >
                    <h5>Author: {this.state.post.author}</h5>
                    <p>{this.state.post.content}</p>
                </Card>
                <CustomComment author={this.state.post.author} />
                <CustomForm request="put" postID={this.props.match.params.postID} btnText="UPDATE" />
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">DELETE</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      token: state.token
    };
};

export default connect(mapStateToProps)(PostDetail);