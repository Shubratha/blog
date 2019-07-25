import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import PostList from './containers/PostListView';
import PostDetail from './containers/PostDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Profile from './containers/Profile';

const BaseRouter = () => (
    // <BrowserRouter>
        <Switch>
            <Route exact path='/' component={PostList} />
            <Route exact path='/posts/:postID' component={PostDetail} />{" "}
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/profile' component={Profile} />
        </Switch>
    // {/* </BrowserRouter>  */}
);

export default BaseRouter;