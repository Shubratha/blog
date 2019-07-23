import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import PostList from './containers/PostListView';
import PostDetail from './containers/PostDetailView';

const BaseRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={PostList} />
            <Route exact path='/:postID' component={PostDetail} />
        </Switch>
    </BrowserRouter> 
);

export default BaseRouter;