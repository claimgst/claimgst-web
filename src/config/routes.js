import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import store from '../store';

import MainContainer from '../containers/MainContainer';
import { authenticateComponent } from '../containers/AuthenticateComponent';

import Home from '../components/home/Home';
import SigninForm from '../components/user/SigninForm';
import Dashboard from '../components/user/Dashboard';

import Post from '../components/Post';

const history = syncHistoryWithStore(browserHistory, store)

let Routes = 
  <Router history={history}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={Home} />
      <Route path='sign_in' component={SigninForm} />
      <Route path='dashboard' component={authenticateComponent(Dashboard)} />
      <Route path='/post' component={Post} />
    </Route>
  </Router>

export default Routes;