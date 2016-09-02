import React from 'react';
import { ReactRouter, Router, Route, hashHistory, IndexRoute } from 'react-router';
import MainContainer from '../containers/MainContainer';
import Home from '../components/home/Home';
import SigninForm from '../components/user/SigninForm';
import Post from '../components/Post';

let Routes = 
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={Home} />
      <Route path='signin' component={SigninForm} />
      <Route path='/post' component={Post} />
    </Route>
  </Router>

export default Routes;