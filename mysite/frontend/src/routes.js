import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import PostList from './containers/PostListView';
import PostDetail from './containers/PostDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';

const BaseRouter = () => (
    // <BrowserRouter>
        <Switch>
            <Route exact path='/' component={PostList} />
            <Route exact path='/posts/:postID' component={PostDetail} />{" "}
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
        </Switch>
    // {/* </BrowserRouter>  */}
);

export default BaseRouter;