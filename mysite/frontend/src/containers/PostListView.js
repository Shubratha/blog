import React from 'react';
import axios from 'axios';
import Post from '../components/Post';
import CustomForm from '../components/Form';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

class PostList extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/')
            .then(res => {
                this.setState({
                    posts: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        const {form} = this.props
        return (
            <div>
                <Post data={this.state.posts} />
                <h2>Create a Post</h2>
                <CustomForm request="post" postID={null} btnText="CREATE" form={form}/>
            </div>
        )
    }
}

export default PostList;