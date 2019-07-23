import React from 'react';
import { List, Avatar, Icon } from 'antd';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Post = (props) => {
    return (
    <List
        itemLayout="vertical"
        size="large"
        pagination={{
        onChange: page => {
            console.log(page);
        },
        pageSize: 10,
        }}
        dataSource={props.data}
        renderItem={item => (
        <List.Item
            key={item.title}
            actions={[
            <IconText type="like-o" text="12" />,
            <IconText type="message" text="2" />,
            ]}
            extra={
            <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
            }
        >
            <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={`/${item.id}`}>{item.title}</a>}
            description={item.description}
            />
            {item.content}
        </List.Item>
        )}
    />
    )
}

export default Post;
