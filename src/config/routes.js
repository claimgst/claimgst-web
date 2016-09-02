import React from 'react';
import { ReactRouter, Router, Route, hashHistory, IndexRoute } from 'react-router';
import MainContainer from '../containers/MainContainer';
import Home from '../components/home/Home';
import Post from '../components/Post';

let Routes = 
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={Home} />
      <Route path='/post' component={Post} />
    </Route>
  </Router>

export default Routes;